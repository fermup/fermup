jQuery(document).ready(function (c) {
  var a = 'orange'
  var b = '/css/colors/color-' + a + '.css'
  c('head').append('<link rel="stylesheet" href="' + b + '" type="text/css" />')
})
function is_touch_device() {
  return !!('ontouchstart' in window)
}
;(function (b) {
  b.fn.superfish = function (k) {
    var g = b.fn.superfish,
      j = g.c,
      f = b(['<span class="', j.arrowClass, '"> &#187;</span>'].join('')),
      i = function () {
        var c = b(this),
          l = d(c)
        clearTimeout(l.sfTimer)
        c.showSuperfishUl().siblings().hideSuperfishUl()
      },
      e = function () {
        var c = b(this),
          m = d(c),
          l = g.op
        clearTimeout(m.sfTimer)
        m.sfTimer = setTimeout(function () {
          l.retainPath = b.inArray(c[0], l.$path) > -1
          c.hideSuperfishUl()
          if (
            l.$path.length &&
            c.parents(['li.', l.hoverClass].join('')).length < 1
          ) {
            i.call(l.$path)
          }
        }, l.delay)
      },
      d = function (c) {
        var l = c.parents(['ul.', j.menuClass, ':first'].join(''))[0]
        g.op = g.o[l.serial]
        return l
      },
      h = function (c) {
        c.addClass(j.anchorClass).append(f.clone())
      }
    return this.each(function () {
      var c = (this.serial = g.o.length)
      var m = b.extend({}, g.defaults, k)
      m.$path = b('li.' + m.pathClass, this)
        .slice(0, m.pathLevels)
        .each(function () {
          b(this)
            .addClass([m.hoverClass, j.bcClass].join(' '))
            .filter('li:has(ul)')
            .removeClass(m.pathClass)
        })
      g.o[c] = g.op = m
      b('li:has(ul)', this)
        [b.fn.hoverIntent && !m.disableHI ? 'hoverIntent' : 'hover'](i, e)
        .each(function () {
          if (m.autoArrows) {
            h(b('>a:first-child', this))
          }
        })
        .not('.' + j.bcClass)
        .hideSuperfishUl()
      var l = b('a', this)
      l.each(function (n) {
        var o = l.eq(n).parents('li')
        l.eq(n)
          .focus(function () {
            i.call(o)
          })
          .blur(function () {
            e.call(o)
          })
      })
      m.onInit.call(this)
    }).each(function () {
      var c = [j.menuClass]
      if (g.op.dropShadows && !(b.browser.msie && b.browser.version < 7)) {
        c.push(j.shadowClass)
      }
      b(this).addClass(c.join(' '))
    })
  }
  var a = b.fn.superfish
  a.o = []
  a.op = {}
  a.IE7fix = function () {
    var c = a.op
    if (
      b.browser.msie &&
      b.browser.version > 6 &&
      c.dropShadows &&
      c.animation.opacity != undefined
    ) {
      this.toggleClass(a.c.shadowClass + '-off')
    }
  }
  a.c = {
    bcClass: 'sf-breadcrumb',
    menuClass: 'sf-js-enabled',
    anchorClass: 'sf-with-ul',
    arrowClass: 'sf-sub-indicator',
    shadowClass: 'sf-shadow',
  }
  a.defaults = {
    hoverClass: 'sfHover',
    pathClass: 'overideThisToUse',
    pathLevels: 1,
    delay: 800,
    animation: { opacity: 'show' },
    speed: 'normal',
    autoArrows: true,
    dropShadows: true,
    disableHI: false,
    onInit: function () {},
    onBeforeShow: function () {},
    onShow: function () {},
    onHide: function () {},
  }
  b.fn.extend({
    hideSuperfishUl: function () {
      var e = a.op,
        d = e.retainPath === true ? e.$path : ''
      e.retainPath = false
      var c = b(['li.', e.hoverClass].join(''), this)
        .add(this)
        .not(d)
        .removeClass(e.hoverClass)
        .find('>ul')
        .hide()
        .css('visibility', 'hidden')
      e.onHide.call(c)
      return this
    },
    showSuperfishUl: function () {
      var e = a.op,
        d = a.c.shadowClass + '-off',
        c = this.addClass(e.hoverClass)
          .find('>ul:hidden')
          .css('visibility', 'visible')
      a.IE7fix.call(c)
      e.onBeforeShow.call(c)
      c.animate(e.animation, e.speed, function () {
        a.IE7fix.call(c)
        e.onShow.call(c)
      })
      return this
    },
  })
})(jQuery)
jQuery(document).ready(function (a) {
  a('ul.menu').superfish({
    delay: 100,
    animation: { opacity: 'show', height: 'show' },
    speed: 'fast',
    autoArrows: false,
  })
})
$(window).load(function () {
  $('.portfolio-grid ul li .item-info-overlay').hide()
  if (is_touch_device()) {
    $('.portfolio-grid ul li').click(function () {
      var b = $(this).closest('li').prevAll('li').length
      var c = $(this).find('.item-info-overlay').css('opacity')
      var a = $(this).find('.item-info-overlay').css('display')
      if (c == 0 || a == 'none') {
        $(this).find('.item-info-overlay').fadeTo(250, 1)
      } else {
        $(this).find('.item-info-overlay').fadeTo(250, 0)
      }
      $(this)
        .closest('ul')
        .find('li:lt(' + b + ') .item-info-overlay')
        .fadeTo(250, 0)
      $(this)
        .closest('ul')
        .find('li:gt(' + b + ') .item-info-overlay')
        .fadeTo(250, 0)
    })
  } else {
    $('.portfolio-grid ul li').hover(
      function () {
        $(this).find('.item-info-overlay').fadeTo(250, 1)
      },
      function () {
        $(this).find('.item-info-overlay').fadeTo(250, 0)
      }
    )
  }
})
$(window).load(function () {
  $('.item-info').each(function (a) {
    $(this).next().prepend($(this).html())
  })
})
jQuery(document).ready(function (a) {
  a('.toggle-container').hide()
  a('.trigger').toggle(
    function () {
      a(this).addClass('active')
    },
    function () {
      a(this).removeClass('active')
    }
  )
  a('.trigger').click(function () {
    a(this).next('.toggle-container').slideToggle()
  })
})
$(document).ready(function () {
  $('.trigger-button').click(function () {
    $('.trigger-button').removeClass('active')
    $('.accordion').slideUp('normal')
    if ($(this).next().is(':hidden') == true) {
      $(this).next().slideDown('normal')
      $(this).addClass('active')
    }
  })
  $('.accordion').hide()
})
jQuery(document).ready(function (b) {
  function d(j) {
    var g = '#' + j
    var i = b(window).scrollTop()
    var h = i + b(window).height()
    if (b(g).length > 0) {
      var e = b(g).offset().top
      var f = e + b(g).height()
    }
    return f >= i && e <= h && f <= h && e >= i
  }
  function c(f, e) {
    b('#' + f + ' li span').each(function (l) {
      var h = l + 1
      var k = b('#' + f + ' li:nth-child(' + h + ') span')
      var g = k.attr('class')
      k.animate({ width: g + '%' }, e)
    })
  }
  function a(f, e) {
    b(window).scroll(function () {
      if (d(f)) {
        c(f, e)
      } else {
      }
    })
    if (d(f)) {
      c(f, e)
    }
  }
  a('example-1', 1000)
})
;(function (a) {
  a.fn.extend({
    bra_last_last_row: function () {
      return this.each(function () {
        a(this).each(function () {
          var c = a(this).find('li').length
          var e = Math.round(a(this).width() / a(this).find(':first').width())
          var d = Math.ceil(c / e)
          var b = (d - 1) * e - 1
          if (b < e - 1) {
            b = 0
            a(this)
              .find('li:eq(' + b + ')')
              .addClass('last-row')
          }
          a(this)
            .find('li:nth-child(' + e + 'n+ ' + e + ')')
            .addClass('last')
          a(this)
            .find('li:gt(' + b + ')')
            .addClass('last-row')
        })
      })
    },
  })
})(jQuery)
jQuery(document).ready(function (a) {
  a('.grid').bra_last_last_row()
})
jQuery(document).ready(function (b) {
  var a = b('<select />')
  b('<option />', {
    selected: 'selected',
    value: '',
    text: 'Site Navigation',
  }).appendTo(a)
  a.appendTo('#primary-menu')
  b('#primary-menu ul li a').each(function () {
    var d = b(this).attr('href')
    var c = b(this).text()
    if (b(this).parents('li').length == 2) {
      c = '- ' + c
    }
    if (b(this).parents('li').length == 3) {
      c = '-- ' + c
    }
    if (b(this).parents('li').length > 3) {
      c = '--- ' + c
    }
    b('<option />', { value: d, text: c }).appendTo(a)
  })
  field_id = '#primary-menu select'
  b(field_id).change(function () {
    value = b(this).attr('value')
    window.location = value
  })
})
$(window).load(function () {
  var a = $('<div />', { class: 'item-mask' })
  $('ul.shaped .item-container, ul.comment-list .avatar').append(a)
})
$(document).ready(function () {
  var a = $('#header-wrapper').height() + 0
  var j = $('#menu').height()
  var d = 500
  var i = '/images/logo-min.png'
  var g = parseInt(a - j)
  var e = 0
  var c = 100
  c = parseInt($('.header').css('width')) - parseInt($('ul.menu').width())
  e = $(window).scrollTop()
  var h = $('<a/>', { href: '/' })
  var b = $('<img />', { src: i, class: 'logo2' }).appendTo(h)
  if (e > g && !is_touch_device()) {
    f()
  }
  function f() {
    e = $(window).scrollTop()
    if (e > g) {
      if (!$('#header-wrapper').hasClass('fixed')) {
        $('#header-wrapper').hide()
        $('#wrapper').css('margin-top', a + 'px')
        $('#header-wrapper').addClass('fixed')
        $('#header-wrapper').fadeIn(500)
        h.fadeIn().appendTo('.header')
      }
    } else {
      if ($('#header-wrapper').hasClass('fixed')) {
        $('#header-wrapper').fadeOut(500, function () {
          $('#header-wrapper').removeClass('fixed')
          $('#wrapper').css('margin-top', '')
          $('#header-wrapper').fadeIn(300)
        })
        h.fadeOut().remove()
      }
    }
  }
  $(window).scroll(function () {
    if (!is_touch_device()) {
      f()
    }
  })
})
;(function (a) {
  a.fn.tweet = function (f) {
    var e = a.extend(
      {
        username: null,
        list: null,
        favorites: false,
        query: null,
        avatar_size: null,
        count: 3,
        fetch: null,
        retweets: true,
        intro_text: null,
        outro_text: null,
        join_text: null,
        auto_join_text_default: 'i said,',
        auto_join_text_ed: 'i',
        auto_join_text_ing: 'i am',
        auto_join_text_reply: 'i replied to',
        auto_join_text_url: 'i was looking at',
        loading_text: null,
        refresh_interval: null,
        twitter_url: 'twitter.com',
        twitter_api_url: 'api.twitter.com',
        twitter_search_url: 'search.twitter.com',
        template: '{avatar}{join}{text}{time}',
        comparator: function (h, g) {
          return g.tweet_time - h.tweet_time
        },
        filter: function (g) {
          return true
        },
      },
      f
    )
    a.fn.extend({
      linkUrl: function () {
        var g = []
        var h =
          /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?������]))/gi
        this.each(function () {
          g.push(
            this.replace(h, function (j) {
              var i = /^[a-z]+:/i.test(j) ? j : 'https://' + j
              return '<a href="' + i + '">' + j + '</a>'
            })
          )
        })
        return a(g)
      },
      linkUser: function () {
        var g = []
        var h = /[\@]+(\w+)/gi
        this.each(function () {
          g.push(
            this.replace(
              h,
              '@<a href="https://' + e.twitter_url + '/$1">$1</a>'
            )
          )
        })
        return a(g)
      },
      linkHash: function () {
        var h = []
        var i =
          /(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi
        var g =
          e.username && e.username.length == 1
            ? '&from=' + e.username.join('%2BOR%2B')
            : ''
        this.each(function () {
          h.push(
            this.replace(
              i,
              ' <a href="https://' +
                e.twitter_search_url +
                '/search?q=&tag=$1&lang=all' +
                g +
                '">#$1</a>'
            )
          )
        })
        return a(h)
      },
      capAwesome: function () {
        var g = []
        this.each(function () {
          g.push(
            this.replace(/\b(awesome)\b/gi, '<span class="awesome">$1</span>')
          )
        })
        return a(g)
      },
      capEpic: function () {
        var g = []
        this.each(function () {
          g.push(this.replace(/\b(epic)\b/gi, '<span class="epic">$1</span>'))
        })
        return a(g)
      },
      makeHeart: function () {
        var g = []
        this.each(function () {
          g.push(
            this.replace(/(&lt;)+[3]/gi, "<tt class='heart'>&#x2665;</tt>")
          )
        })
        return a(g)
      },
    })
    function b(g) {
      return Date.parse(
        g.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i, '$1,$2$4$3')
      )
    }
    function d(g) {
      var i = arguments.length > 1 ? arguments[1] : new Date()
      var j = parseInt((i.getTime() - g) / 1000, 10)
      var h = ''
      if (j < 60) {
        h = j + ' seconds ago'
      } else {
        if (j < 120) {
          h = 'a minute ago'
        } else {
          if (j < 45 * 60) {
            h = parseInt(j / 60, 10).toString() + ' minutes ago'
          } else {
            if (j < 2 * 60 * 60) {
              h = 'an hour ago'
            } else {
              if (j < 24 * 60 * 60) {
                h = '' + parseInt(j / 3600, 10).toString() + ' hours ago'
              } else {
                if (j < 48 * 60 * 60) {
                  h = 'a day ago'
                } else {
                  h = parseInt(j / 86400, 10).toString() + ' days ago'
                }
              }
            }
          }
        }
      }
      return 'about ' + h
    }
    function c() {
      var h = 'https:' == document.location.protocol ? 'https:' : 'http:'
      var g = e.fetch === null ? e.count : e.fetch
      if (e.list) {
        return (
          h +
          '//' +
          e.twitter_api_url +
          '/1/' +
          e.username[0] +
          '/lists/' +
          e.list +
          '/statuses.json?per_page=' +
          g +
          '&callback=?'
        )
      } else {
        if (e.favorites) {
          return (
            h +
            '//' +
            e.twitter_api_url +
            '/favorites/' +
            e.username[0] +
            '.json?count=' +
            e.count +
            '&callback=?'
          )
        } else {
          if (e.query === null && e.username.length == 1) {
            return (
              h +
              '//' +
              e.twitter_api_url +
              '/1/statuses/user_timeline.json?screen_name=' +
              e.username[0] +
              '&count=' +
              g +
              (e.retweets ? '&include_rts=1' : '') +
              '&callback=?'
            )
          } else {
            var i = e.query || 'from:' + e.username.join(' OR from:')
            return (
              h +
              '//' +
              e.twitter_search_url +
              '/search.json?&q=' +
              encodeURIComponent(i) +
              '&rpp=' +
              g +
              '&callback=?'
            )
          }
        }
      }
    }
    return this.each(function (h, l) {
      var k = a('<ul class="tweet_list">').appendTo(l)
      var j = '<p class="tweet_intro">' + e.intro_text + '</p>'
      var g = '<p class="tweet_outro">' + e.outro_text + '</p>'
      var n = a('<p class="loading">' + e.loading_text + '</p>')
      if (e.username && typeof e.username == 'string') {
        e.username = [e.username]
      }
      var m = function (p) {
        if (typeof e.template === 'string') {
          var i = e.template
          for (var o in p) {
            var q = p[o]
            i = i.replace(new RegExp('{' + o + '}', 'g'), q === null ? '' : q)
          }
          return i
        } else {
          return e.template(p)
        }
      }
      if (e.loading_text) {
        a(l).append(n)
      }
      a(l)
        .bind('load', function () {
          a.getJSON(c(), function (i) {
            if (e.loading_text) {
              n.remove()
            }
            if (e.intro_text) {
              k.before(j)
            }
            k.empty()
            var o = a.map(i.results || i, function (E) {
              var C = e.join_text
              if (e.join_text == 'auto') {
                if (E.text.match(/^(@([A-Za-z0-9-_]+)) .*/i)) {
                  C = e.auto_join_text_reply
                } else {
                  if (
                    E.text.match(
                      /(^\w+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&\?\/.=]+) .*/i
                    )
                  ) {
                    C = e.auto_join_text_url
                  } else {
                    if (E.text.match(/^((\w+ed)|just) .*/im)) {
                      C = e.auto_join_text_ed
                    } else {
                      if (E.text.match(/^(\w*ing) .*/i)) {
                        C = e.auto_join_text_ing
                      } else {
                        C = e.auto_join_text_default
                      }
                    }
                  }
                }
              }
              var u = E.from_user || E.user.screen_name
              var B = E.source
              var z = 'https://' + e.twitter_url + '/' + u
              var p = e.avatar_size
              var v = E.profile_image_url || E.user.profile_image_url
              var F =
                'https://' + e.twitter_url + '/' + u + '/status/' + E.id_str
              var y = typeof E.retweeted_status != 'undefined'
              var q = y ? E.retweeted_status.user.screen_name : null
              var s = b(E.created_at)
              var H = d(s)
              var r = y ? 'RT @' + q + ' ' + E.retweeted_status.text : E.text
              var w = a([r]).linkUrl().linkUser().linkHash()[0]
              var G = '<a class="tweet_user" href="' + z + '">' + u + '</a>'
              var A = e.join_text
                ? '<span class="tweet_join"> ' + C + ' </span>'
                : ' '
              var D = p
                ? '<a class="tweet_avatar" href="' +
                  z +
                  '"><img src="' +
                  v +
                  '" height="' +
                  p +
                  '" width="' +
                  p +
                  '" alt="' +
                  u +
                  '\'s avatar" title="' +
                  u +
                  '\'s avatar" border="0"/></a>'
                : ''
              var t =
                '<span class="tweet_time"><a href="' +
                F +
                '" title="view tweet on twitter">' +
                H +
                '</a></span>'
              var x =
                '<span class="tweet_text">' +
                a([w]).makeHeart().capAwesome().capEpic()[0] +
                '</span>'
              return {
                item: E,
                screen_name: u,
                user_url: z,
                avatar_size: p,
                avatar_url: v,
                source: B,
                tweet_url: F,
                tweet_time: s,
                tweet_relative_time: H,
                tweet_raw_text: r,
                tweet_text: w,
                retweet: y,
                retweeted_screen_name: q,
                user: G,
                join: A,
                avatar: D,
                time: t,
                text: x,
              }
            })
            o = a.grep(o, e.filter).slice(0, e.count)
            k.append(
              a
                .map(o.sort(e.comparator), function (p) {
                  return '<li>' + m(p) + '</li>'
                })
                .join('')
            )
              .children('li:first')
              .addClass('tweet_first')
              .end()
              .children('li:odd')
              .addClass('tweet_even')
              .end()
              .children('li:even')
              .addClass('tweet_odd')
            if (e.outro_text) {
              k.after(g)
            }
            a(l)
              .trigger('loaded')
              .trigger(o.length === 0 ? 'empty' : 'full')
            if (e.refresh_interval) {
              window.setTimeout(function () {
                a(l).trigger('load')
              }, 1000 * e.refresh_interval)
            }
          })
        })
        .trigger('load')
    })
  }
})(jQuery)
jQuery(document).ready(function (a) {
  a('.tweets').tweet({
    join_text: 'auto',
    username: 'fermup',
    avatar_size: 0,
    count: 2,
    auto_join_text_default: '',
    auto_join_text_ed: '',
    auto_join_text_ing: '',
    auto_join_text_reply: '',
    auto_join_text_url: '',
    loading_text: 'loading tweets...',
  })
})
