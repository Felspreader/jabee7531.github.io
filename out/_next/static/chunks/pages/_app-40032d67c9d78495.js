;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    425: function (e, l, t) {
      'use strict'
      t.d(l, {
        f: function () {
          return s
        },
        F: function () {
          return c
        },
      })
      var n = t(1720),
        r = t(9008),
        a = (0, n.createContext)({ setTheme: function (e) {}, themes: [] }),
        c = function () {
          return (0, n.useContext)(a)
        },
        o = ['light', 'dark'],
        i = '(prefers-color-scheme: dark)',
        s = function (e) {
          var l = e.forcedTheme,
            t = e.disableTransitionOnChange,
            r = void 0 !== t && t,
            c = e.enableSystem,
            s = void 0 === c || c,
            d = e.enableColorScheme,
            y = void 0 === d || d,
            h = e.storageKey,
            v = void 0 === h ? 'theme' : h,
            g = e.themes,
            k = void 0 === g ? ['light', 'dark'] : g,
            b = e.defaultTheme,
            O = void 0 === b ? (s ? 'system' : 'light') : b,
            E = e.attribute,
            z = void 0 === E ? 'data-theme' : E,
            R = e.value,
            w = e.children,
            M = (0, n.useState)(function () {
              return u(v, O)
            }),
            C = M[0],
            Z = M[1],
            x = (0, n.useState)(function () {
              return u(v)
            }),
            _ = x[0],
            j = x[1],
            T = R ? Object.values(R) : k,
            L = (0, n.useCallback)(
              function (e) {
                var t = p(e)
                j(t), 'system' !== C || l || N(t, !1)
              },
              [C, l]
            ),
            S = (0, n.useRef)(L)
          S.current = L
          var N = (0, n.useCallback)(function (e, l, t) {
            void 0 === l && (l = !0), void 0 === t && (t = !0)
            var n = (null == R ? void 0 : R[e]) || e,
              a = r && t ? m() : null
            if (l)
              try {
                localStorage.setItem(v, e)
              } catch (e) {}
            if ('system' === e && s) {
              var c = p()
              n = (null == R ? void 0 : R[c]) || c
            }
            if (t) {
              var o,
                i = document.documentElement
              'class' === z
                ? ((o = i.classList).remove.apply(o, T), i.classList.add(n))
                : i.setAttribute(z, n),
                null == a || a()
            }
          }, [])
          ;(0, n.useEffect)(function () {
            var e = function () {
                return S.current.apply(S, [].slice.call(arguments))
              },
              l = window.matchMedia(i)
            return (
              l.addListener(e),
              e(l),
              function () {
                return l.removeListener(e)
              }
            )
          }, [])
          var A = (0, n.useCallback)(
            function (e) {
              l ? N(e, !0, !1) : N(e), Z(e)
            },
            [l]
          )
          return (
            (0, n.useEffect)(
              function () {
                var e = function (e) {
                  e.key === v && A(e.newValue)
                }
                return (
                  window.addEventListener('storage', e),
                  function () {
                    return window.removeEventListener('storage', e)
                  }
                )
              },
              [A]
            ),
            (0, n.useEffect)(
              function () {
                if (y) {
                  var e =
                    l && o.includes(l) ? l : C && o.includes(C) ? C : ('system' === C && _) || null
                  document.documentElement.style.setProperty('color-scheme', e)
                }
              },
              [y, C, _, l]
            ),
            n.default.createElement(
              a.Provider,
              {
                value: {
                  theme: C,
                  setTheme: A,
                  forcedTheme: l,
                  resolvedTheme: 'system' === C ? _ : C,
                  themes: s ? [].concat(k, ['system']) : k,
                  systemTheme: s ? _ : void 0,
                },
              },
              n.default.createElement(f, {
                forcedTheme: l,
                storageKey: v,
                attribute: z,
                value: R,
                enableSystem: s,
                defaultTheme: O,
                attrs: T,
              }),
              w
            )
          )
        },
        f = (0, n.memo)(
          function (e) {
            var l = e.forcedTheme,
              t = e.storageKey,
              a = e.attribute,
              c = e.enableSystem,
              o = e.defaultTheme,
              s = e.value,
              f =
                'class' === a
                  ? 'var d=document.documentElement.classList;d.remove(' +
                    e.attrs
                      .map(function (e) {
                        return "'" + e + "'"
                      })
                      .join(',') +
                    ');'
                  : 'var d=document.documentElement;',
              u = function (e, l) {
                e = (null == s ? void 0 : s[e]) || e
                var t = l ? e : "'" + e + "'"
                return 'class' === a ? 'd.add(' + t + ')' : "d.setAttribute('" + a + "', " + t + ')'
              },
              m = 'system' === o
            return n.default.createElement(
              r.default,
              null,
              n.default.createElement(
                'script',
                l
                  ? {
                      key: 'next-themes-script',
                      dangerouslySetInnerHTML: { __html: '!function(){' + f + u(l) + '}()' },
                    }
                  : c
                  ? {
                      key: 'next-themes-script',
                      dangerouslySetInnerHTML: {
                        __html:
                          '!function(){try {' +
                          f +
                          "var e=localStorage.getItem('" +
                          t +
                          "');" +
                          (m ? '' : u(o) + ';') +
                          'if("system"===e||(!e&&' +
                          m +
                          ')){var t="' +
                          i +
                          '",m=window.matchMedia(t);m.media!==t||m.matches?' +
                          u('dark') +
                          ':' +
                          u('light') +
                          '}else if(e) ' +
                          (s ? 'var x=' + JSON.stringify(s) + ';' : '') +
                          u(s ? 'x[e]' : 'e', !0) +
                          '}catch(e){}}()',
                      },
                    }
                  : {
                      key: 'next-themes-script',
                      dangerouslySetInnerHTML: {
                        __html:
                          '!function(){try{' +
                          f +
                          'var e=localStorage.getItem("' +
                          t +
                          '");if(e){' +
                          (s ? 'var x=' + JSON.stringify(s) + ';' : '') +
                          u(s ? 'x[e]' : 'e', !0) +
                          '}else{' +
                          u(o) +
                          ';}}catch(t){}}();',
                      },
                    }
              )
            )
          },
          function (e, l) {
            return e.forcedTheme === l.forcedTheme
          }
        ),
        u = function (e, l) {
          if ('undefined' != typeof window) {
            var t
            try {
              t = localStorage.getItem(e) || void 0
            } catch (e) {}
            return t || l
          }
        },
        m = function () {
          var e = document.createElement('style')
          return (
            e.appendChild(
              document.createTextNode(
                '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
              )
            ),
            document.head.appendChild(e),
            function () {
              window.getComputedStyle(document.body),
                setTimeout(function () {
                  document.head.removeChild(e)
                }, 1)
            }
          )
        },
        p = function (e) {
          return e || (e = window.matchMedia(i)), e.matches ? 'dark' : 'light'
        }
    },
    3454: function (e, l, t) {
      'use strict'
      var n, r
      e.exports =
        (null === (n = t.g.process) || void 0 === n ? void 0 : n.env) &&
        'object' === typeof (null === (r = t.g.process) || void 0 === r ? void 0 : r.env)
          ? t.g.process
          : t(7663)
    },
    1780: function (e, l, t) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return t(218)
        },
      ])
    },
    7233: function (e, l, t) {
      'use strict'
      var n = t(7320),
        r = t(1664)
      function a(e, l, t) {
        return (
          l in e
            ? Object.defineProperty(e, l, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[l] = t),
          e
        )
      }
      function c(e) {
        for (var l = 1; l < arguments.length; l++) {
          var t = null != arguments[l] ? arguments[l] : {},
            n = Object.keys(t)
          'function' === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
              })
            )),
            n.forEach(function (l) {
              a(e, l, t[l])
            })
        }
        return e
      }
      function o(e, l) {
        if (null == e) return {}
        var t,
          n,
          r = (function (e, l) {
            if (null == e) return {}
            var t,
              n,
              r = {},
              a = Object.keys(e)
            for (n = 0; n < a.length; n++) (t = a[n]), l.indexOf(t) >= 0 || (r[t] = e[t])
            return r
          })(e, l)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          for (n = 0; n < a.length; n++)
            (t = a[n]),
              l.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]))
        }
        return r
      }
      l.Z = function (e) {
        var l = e.href,
          t = o(e, ['href']),
          a = l && l.startsWith('/'),
          i = l && l.startsWith('#')
        return a
          ? (0, n.tZ)(r.default, { href: l, children: (0, n.tZ)('a', c({}, t)) })
          : i
          ? (0, n.tZ)('a', c({ href: l }, t))
          : (0, n.tZ)('a', c({ target: '_blank', rel: 'noopener noreferrer', href: l }, t))
      }
    },
    890: function (e, l, t) {
      'use strict'
      t.d(l, {
        Z: function () {
          return r
        },
      })
      var n = t(7320)
      function r(e) {
        var l = e.children
        return (0, n.tZ)('div', {
          className: 'mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0',
          children: l,
        })
      }
    },
    2557: function (e, l, t) {
      'use strict'
      t.d(l, {
        Z: function () {
          return k
        },
      })
      var n,
        r,
        a = t(7320),
        c = t(1720)
      function o() {
        return (
          (o = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var l = 1; l < arguments.length; l++) {
                  var t = arguments[l]
                  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                return e
              }),
          o.apply(this, arguments)
        )
      }
      var i
      function s() {
        return (
          (s = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var l = 1; l < arguments.length; l++) {
                  var t = arguments[l]
                  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                return e
              }),
          s.apply(this, arguments)
        )
      }
      var f
      function u() {
        return (
          (u = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var l = 1; l < arguments.length; l++) {
                  var t = arguments[l]
                  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                return e
              }),
          u.apply(this, arguments)
        )
      }
      var m
      function p() {
        return (
          (p = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var l = 1; l < arguments.length; l++) {
                  var t = arguments[l]
                  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                return e
              }),
          p.apply(this, arguments)
        )
      }
      var d
      function y() {
        return (
          (y = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var l = 1; l < arguments.length; l++) {
                  var t = arguments[l]
                  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                return e
              }),
          y.apply(this, arguments)
        )
      }
      var h
      function v() {
        return (
          (v = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var l = 1; l < arguments.length; l++) {
                  var t = arguments[l]
                  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                return e
              }),
          v.apply(this, arguments)
        )
      }
      var g = {
          mail: function (e) {
            return c.createElement(
              'svg',
              o({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 20' }, e),
              n ||
                (n = c.createElement('path', {
                  d: 'M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z',
                })),
              r ||
                (r = c.createElement('path', {
                  d: 'm18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z',
                }))
            )
          },
          github: function (e) {
            return c.createElement(
              'svg',
              s({ viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, e),
              i ||
                (i = c.createElement('path', {
                  d: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
                }))
            )
          },
          facebook: function (e) {
            return c.createElement(
              'svg',
              u({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }, e),
              f ||
                (f = c.createElement('path', {
                  d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
                }))
            )
          },
          youtube: function (e) {
            return c.createElement(
              'svg',
              p({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }, e),
              m ||
                (m = c.createElement('path', {
                  d: 'M23.499 6.203a3.008 3.008 0 0 0-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 0 0-2.088 2.09A31.258 31.26 0 0 0 0 12.01a31.258 31.26 0 0 0 .523 5.785 3.008 3.008 0 0 0 2.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 0 0 2.089-2.09 31.258 31.26 0 0 0 .5-5.784 31.258 31.26 0 0 0-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z',
                }))
            )
          },
          linkedin: function (e) {
            return c.createElement(
              'svg',
              y({ viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, e),
              d ||
                (d = c.createElement('path', {
                  d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
                }))
            )
          },
          twitter: function (e) {
            return c.createElement(
              'svg',
              v({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }, e),
              h ||
                (h = c.createElement('path', {
                  d: 'M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z',
                }))
            )
          },
        },
        k = function (e) {
          var l = e.kind,
            t = e.href,
            n = e.size,
            r = void 0 === n ? 8 : n
          if (!t || ('mail' === l && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(t)))
            return null
          var c = g[l]
          return (0, a.BX)('a', {
            className: 'text-sm text-gray-500 transition hover:text-gray-600',
            target: '_blank',
            rel: 'noopener noreferrer',
            href: t,
            children: [
              (0, a.tZ)('span', { className: 'sr-only', children: l }),
              (0, a.tZ)(c, {
                className:
                  'fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-'
                    .concat(r, ' w-')
                    .concat(r),
              }),
            ],
          })
        }
    },
    1576: function (e) {
      'use strict'
      e.exports = {
        title: 'JaBee\uc758 \ube14\ub85c\uadf8',
        author: 'JaBee',
        headerTitle: 'JaBee',
        description: 'JaBee\uc758 \uae30\uc220 \ube14\ub85c\uadf8 \uc785\ub2c8\ub2e4 !',
        language: 'ko-KR',
        theme: 'system',
        siteUrl: 'https://jabee7531.github.io',
        siteRepo: 'https://github.com/Jabee7531/jabee7531.github.io',
        siteLogo: '/static/images/logo.png',
        image: '/static/images/avatar.png',
        socialBanner: '/static/images/twitter-card.png',
        email: 'jabee7531@gmail.com',
        github: 'https://github.com/Jabee7531',
        youtube: 'https://youtube.com',
        locale: 'ko-KR',
        analytics: {
          plausibleDataDomain: 'jabee7531.github.io',
          simpleAnalytics: !1,
          umamiWebsiteId: '',
          googleAnalyticsId: 'G-DFJQ2FZEXL',
          posthogAnalyticsId: '',
        },
        newsletter: { provider: '' },
        comment: {
          provider: 'giscus',
          giscusConfig: {
            repo: 'Jabee7531/jabee7531.github.io',
            repositoryId: 'R_kgDOHyoewA',
            category: 'Giscus',
            categoryId: 'DIC_kwDOHyoewM4CQ0P1',
            mapping: 'pathname',
            reactions: '1',
            metadata: '0',
            theme: 'light',
            inputPosition: 'bottom',
            lang: 'ko',
            darkTheme: 'transparent_dark',
            themeURL: '',
          },
          utterancesConfig: { repo: '', issueTerm: '', label: '', theme: '', darkTheme: '' },
          disqusConfig: { shortname: '' },
        },
      }
    },
    1551: function (e, l, t) {
      'use strict'
      function n(e, l) {
        ;(null == l || l > e.length) && (l = e.length)
        for (var t = 0, n = new Array(l); t < l; t++) n[t] = e[t]
        return n
      }
      function r(e, l) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e
          })(e) ||
          (function (e, l) {
            var t =
              null == e
                ? null
                : ('undefined' !== typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
            if (null != t) {
              var n,
                r,
                a = [],
                c = !0,
                o = !1
              try {
                for (
                  t = t.call(e);
                  !(c = (n = t.next()).done) && (a.push(n.value), !l || a.length !== l);
                  c = !0
                );
              } catch (i) {
                ;(o = !0), (r = i)
              } finally {
                try {
                  c || null == t.return || t.return()
                } finally {
                  if (o) throw r
                }
              }
              return a
            }
          })(e, l) ||
          (function (e, l) {
            if (!e) return
            if ('string' === typeof e) return n(e, l)
            var t = Object.prototype.toString.call(e).slice(8, -1)
            'Object' === t && e.constructor && (t = e.constructor.name)
            if ('Map' === t || 'Set' === t) return Array.from(t)
            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
              return n(e, l)
          })(e, l) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      l.default = void 0
      var a,
        c = (a = t(1720)) && a.__esModule ? a : { default: a },
        o = t(1003),
        i = t(880),
        s = t(9246)
      var f = {}
      function u(e, l, t, n) {
        if (e && o.isLocalURL(l)) {
          e.prefetch(l, t, n).catch(function (e) {
            0
          })
          var r = n && 'undefined' !== typeof n.locale ? n.locale : e && e.locale
          f[l + '%' + t + (r ? '%' + r : '')] = !0
        }
      }
      var m = function (e) {
        var l,
          t = !1 !== e.prefetch,
          n = i.useRouter(),
          a = c.default.useMemo(
            function () {
              var l = r(o.resolveHref(n, e.href, !0), 2),
                t = l[0],
                a = l[1]
              return { href: t, as: e.as ? o.resolveHref(n, e.as) : a || t }
            },
            [n, e.href, e.as]
          ),
          m = a.href,
          p = a.as,
          d = e.children,
          y = e.replace,
          h = e.shallow,
          v = e.scroll,
          g = e.locale
        'string' === typeof d && (d = c.default.createElement('a', null, d))
        var k = (l = c.default.Children.only(d)) && 'object' === typeof l && l.ref,
          b = r(s.useIntersection({ rootMargin: '200px' }), 2),
          O = b[0],
          E = b[1],
          z = c.default.useCallback(
            function (e) {
              O(e), k && ('function' === typeof k ? k(e) : 'object' === typeof k && (k.current = e))
            },
            [k, O]
          )
        c.default.useEffect(
          function () {
            var e = E && t && o.isLocalURL(m),
              l = 'undefined' !== typeof g ? g : n && n.locale,
              r = f[m + '%' + p + (l ? '%' + l : '')]
            e && !r && u(n, m, p, { locale: l })
          },
          [p, m, E, g, t, n]
        )
        var R = {
          ref: z,
          onClick: function (e) {
            l.props && 'function' === typeof l.props.onClick && l.props.onClick(e),
              e.defaultPrevented ||
                (function (e, l, t, n, r, a, c, i) {
                  ;('A' !== e.currentTarget.nodeName.toUpperCase() ||
                    (!(function (e) {
                      var l = e.currentTarget.target
                      return (
                        (l && '_self' !== l) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      )
                    })(e) &&
                      o.isLocalURL(t))) &&
                    (e.preventDefault(),
                    l[r ? 'replace' : 'push'](t, n, { shallow: a, locale: i, scroll: c }))
                })(e, n, m, p, y, h, v, g)
          },
          onMouseEnter: function (e) {
            l.props && 'function' === typeof l.props.onMouseEnter && l.props.onMouseEnter(e),
              o.isLocalURL(m) && u(n, m, p, { priority: !0 })
          },
        }
        if (e.passHref || ('a' === l.type && !('href' in l.props))) {
          var w = 'undefined' !== typeof g ? g : n && n.locale,
            M =
              n && n.isLocaleDomain && o.getDomainLocale(p, w, n && n.locales, n && n.domainLocales)
          R.href = M || o.addBasePath(o.addLocale(p, w, n && n.defaultLocale))
        }
        return c.default.cloneElement(l, R)
      }
      l.default = m
    },
    9246: function (e, l, t) {
      'use strict'
      function n(e, l) {
        ;(null == l || l > e.length) && (l = e.length)
        for (var t = 0, n = new Array(l); t < l; t++) n[t] = e[t]
        return n
      }
      function r(e, l) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e
          })(e) ||
          (function (e, l) {
            var t =
              null == e
                ? null
                : ('undefined' !== typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
            if (null != t) {
              var n,
                r,
                a = [],
                c = !0,
                o = !1
              try {
                for (
                  t = t.call(e);
                  !(c = (n = t.next()).done) && (a.push(n.value), !l || a.length !== l);
                  c = !0
                );
              } catch (i) {
                ;(o = !0), (r = i)
              } finally {
                try {
                  c || null == t.return || t.return()
                } finally {
                  if (o) throw r
                }
              }
              return a
            }
          })(e, l) ||
          (function (e, l) {
            if (!e) return
            if ('string' === typeof e) return n(e, l)
            var t = Object.prototype.toString.call(e).slice(8, -1)
            'Object' === t && e.constructor && (t = e.constructor.name)
            if ('Map' === t || 'Set' === t) return Array.from(t)
            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
              return n(e, l)
          })(e, l) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      Object.defineProperty(l, '__esModule', { value: !0 }),
        (l.useIntersection = function (e) {
          var l = e.rootRef,
            t = e.rootMargin,
            n = e.disabled || !o,
            f = a.useRef(),
            u = r(a.useState(!1), 2),
            m = u[0],
            p = u[1],
            d = r(a.useState(l ? l.current : null), 2),
            y = d[0],
            h = d[1],
            v = a.useCallback(
              function (e) {
                f.current && (f.current(), (f.current = void 0)),
                  n ||
                    m ||
                    (e &&
                      e.tagName &&
                      (f.current = (function (e, l, t) {
                        var n = (function (e) {
                            var l,
                              t = { root: e.root || null, margin: e.rootMargin || '' },
                              n = s.find(function (e) {
                                return e.root === t.root && e.margin === t.margin
                              })
                            n ? (l = i.get(n)) : ((l = i.get(t)), s.push(t))
                            if (l) return l
                            var r = new Map(),
                              a = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var l = r.get(e.target),
                                    t = e.isIntersecting || e.intersectionRatio > 0
                                  l && t && l(t)
                                })
                              }, e)
                            return i.set(t, (l = { id: t, observer: a, elements: r })), l
                          })(t),
                          r = n.id,
                          a = n.observer,
                          c = n.elements
                        return (
                          c.set(e, l),
                          a.observe(e),
                          function () {
                            if ((c.delete(e), a.unobserve(e), 0 === c.size)) {
                              a.disconnect(), i.delete(r)
                              var l = s.findIndex(function (e) {
                                return e.root === r.root && e.margin === r.margin
                              })
                              l > -1 && s.splice(l, 1)
                            }
                          }
                        )
                      })(
                        e,
                        function (e) {
                          return e && p(e)
                        },
                        { root: y, rootMargin: t }
                      )))
              },
              [n, y, t, m]
            )
          return (
            a.useEffect(
              function () {
                if (!o && !m) {
                  var e = c.requestIdleCallback(function () {
                    return p(!0)
                  })
                  return function () {
                    return c.cancelIdleCallback(e)
                  }
                }
              },
              [m]
            ),
            a.useEffect(
              function () {
                l && h(l.current)
              },
              [l]
            ),
            [v, m]
          )
        })
      var a = t(1720),
        c = t(4686),
        o = 'undefined' !== typeof IntersectionObserver
      var i = new Map(),
        s = []
    },
    218: function (e, l, t) {
      'use strict'
      t.r(l),
        t.d(l, {
          default: function () {
            return _
          },
        })
      var n = t(7320),
        r = (t(2604), t(7661), t(3941), t(8102), t(425)),
        a = t(9008),
        c = t(1576),
        o = t.n(c),
        i = t(4298),
        s = function () {
          return (0, n.BX)(n.HY, {
            children: [
              (0, n.tZ)(i.default, {
                strategy: 'lazyOnload',
                src: 'https://www.googletagmanager.com/gtag/js?id='.concat(
                  o().analytics.googleAnalyticsId
                ),
              }),
              (0, n.tZ)(i.default, {
                strategy: 'lazyOnload',
                id: 'ga-script',
                children:
                  "\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(
                    o().analytics.googleAnalyticsId,
                    "', {\n              page_path: window.location.pathname,\n            });\n        "
                  ),
              }),
            ],
          })
        }
      var f,
        u = function () {
          return (0, n.BX)(n.HY, {
            children: [
              (0, n.tZ)(i.default, {
                strategy: 'lazyOnload',
                'data-domain': o().analytics.plausibleDataDomain,
                src: 'https://plausible.io/js/plausible.js',
              }),
              (0, n.tZ)(i.default, {
                strategy: 'lazyOnload',
                id: 'plausible-script',
                children:
                  '\n            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }\n        ',
              }),
            ],
          })
        },
        m = function () {
          return (0, n.BX)(n.HY, {
            children: [
              (0, n.tZ)(i.default, {
                strategy: 'lazyOnload',
                id: 'sa-script',
                children:
                  '\n            window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]};\n        ',
              }),
              (0, n.tZ)(i.default, {
                strategy: 'lazyOnload',
                src: 'https://scripts.simpleanalyticscdn.com/latest.js',
              }),
            ],
          })
        },
        p = function () {
          return (0, n.tZ)(n.HY, {
            children: (0, n.tZ)(i.default, {
              async: !0,
              defer: !0,
              'data-website-id': o().analytics.umamiWebsiteId,
              src: 'https://umami.example.com/umami.js',
            }),
          })
        },
        d = function () {
          return (0, n.tZ)(n.HY, {
            children: (0, n.tZ)(i.default, {
              strategy: 'lazyOnload',
              id: 'posthog-script',
              children:
                '\n            !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);\n            posthog.init(\''.concat(
                  o().analytics.posthogAnalyticsId,
                  "',{api_host:'https://app.posthog.com'})\n        "
                ),
            }),
          })
        },
        y = function () {
          return (0, n.BX)(n.HY, {
            children: [
              o().analytics.plausibleDataDomain && (0, n.tZ)(u, {}),
              o().analytics.simpleAnalytics && (0, n.tZ)(m, {}),
              o().analytics.umamiWebsiteId && (0, n.tZ)(p, {}),
              o().analytics.googleAnalyticsId && (0, n.tZ)(s, {}),
              o().analytics.posthogAnalyticsId && (0, n.tZ)(d, {}),
            ],
          })
        },
        h = [
          { href: '/blog', title: 'Blog' },
          { href: '/tags', title: 'Tags' },
          { href: '/projects', title: 'Projects' },
        ],
        v = t(1720)
      function g() {
        return (
          (g = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var l = 1; l < arguments.length; l++) {
                  var t = arguments[l]
                  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                return e
              }),
          g.apply(this, arguments)
        )
      }
      var k = function (e) {
          return v.createElement(
            'svg',
            g(
              {
                xmlSpace: 'preserve',
                width: 71.802,
                height: 43.61,
                viewBox: '0 0 325.939 197.907',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              e
            ),
            f ||
              (f = v.createElement(
                'defs',
                null,
                v.createElement(
                  'clipPath',
                  { clipPathUnits: 'userSpaceOnUse', id: 'logo_svg__a' },
                  v.createElement('path', { d: 'M0 148.43h244.454V0H0Z' })
                )
              )),
            v.createElement(
              'g',
              {
                clipPath: 'url(#logo_svg__a)',
                transform: 'matrix(1.33333 0 0 -1.33333 0 197.907)',
              },
              v.createElement('path', {
                d: 'M0 0c3.544 4.027 9.538 4.959 13.7 7.746 4.803 3.217 9.746 7.012 11.627 13.314 1.834 6.145 1.358 11.993-2.717 16.126-2.354 2.388-4.394 4.468-7.695 5.14-3.715.76-8.022-.674-11.375-2.926-5.209-3.496-9.872-12.189-8.439-19.238.687-3.387 2.554-5.762 3.629-8.758C-.522 9.322.956 7.443.319 5.061Z',
                style: { fill: '#fed600', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(189.006 39.819)',
              }),
              v.createElement('path', {
                d: 'M0 0c6.979-2.352 13.371-6.811 21.035-3.863 6.451 2.48 11.934 11.049 8.002 17.871-3.9 6.772-14.551 9.217-21.428 9.498-3.766.155-7.35-.525-10.742-2.302-3.844-2.014-4.648-5.708-4.911-9.807-.211-3.311 2.259-8.834 6.03-9.499z',
                style: { fill: '#fed600', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(196.968 90.288)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.182.193-.039-.135-.156.514C-.221-.006.082-.227 0 0',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(217.318 79.405)',
              }),
              v.createElement('path', {
                d: 'M0 0c1.384.855 3.254.203 4.448 1.391.128.125.182-.475.473-.155.408.705 1.292 1.149 1.556 1.989.303.906-.932 1.8-1.818 1.955l.124.134c-.378.135-.79-.345-1.141-.293-.007.094.11.137.022.264-.082-.297-.642-.125-.785-.385-.156.084-.169.311-.39.399l-.161-.356C1.953 4.137.946 4.66.356 4.09c.026.084.08.16.016.217-1.016-.78-2.432-2.092-1.971-3.11-.13-.025-.357-.064-.416-.189.373.09.655-.121.895-.248.026-.352.621.123.921-.115L-.243.57C.086.92.191.338.45.764L.637.48c.133.493.462-.246.721.01l-.007.1c.259.107.248-.08.519.06l.031-.048c.475.265.834.082.724.451.257-.248-.452-.274-.066-.629 1.604.816 3.282 1.388 4.785 2.308.252-.037.387-.013.503-.117.108.162.562.369.565.651-.042-.043.197-.094.282-.051.341.08.033.558.407.633-.047-.166-.012-.295.111-.381.058.428.4.633.615.924 0-.082-.042-.163.047-.246.059.501.658.363.683.775l.098-.242c.546.293-.274.412.125.691-.006-.129.09-.144.153-.211-.081.578.308 1.123.299 1.565l.082-.043c.074.435.234.91.005 1.353.045.182.555.043.307.52-.356-.137-.557.621-.838.123-.074.332-.498.795-.805.818.252.07.092.567.421.426l-.118.363c.141.141.238-.174.268.069-.176.054-.807.121-.936.25-.426-.084-.834-.627-1.323-.592.259.138-.095.508.079.56a4.377 4.377 0 0 1-.75-.828c-.162-.029-.047.35-.285.221.019-.117-.08-.195-.143-.295-.076.078-.635-.18-.795.211-.109.15.256.154.038.264-.315-.079-.293-.227-.598-.303l-.024.055c-.322-.002-.594-.37-.352-.54.139.028-.101.243.127.18-.098-.293-.419-.469-.71-.564.082.099.043.209.053.341-.32-.457-.691-.683-1.067-.943.068-.195.022.401.129.318-.703.161-.928-.912-1.565-.728.055.07.178-.24.146-.191-.263-.112-.401.156-.513-.03-.105.143-.181-.162-.322-.299-.019-.154-.09.051.049.147C1.575 7.367.97 6.508.274 6.299c.088-.08-.09-.615-.238-.713l-.111.262c-.219.037-.436-.368-.592-.192-.086-.488.918 1.069.689.567-.234.107-.273-.764-.412-.399l-.32-.414c.637.563.108-.066.084.043.072.041-.214.402-.309.19-.152-.381.058-.17-.019-.497l.002-.228c.24-.113-.221-.322.127-.311-.223.051-.235-.703-.594-.437l-.27.232c-.076-.189.152-.482.198-.713l-.169.022c.35-.393.083.125.332-.395-.187-.222-.224-.65-.46-.773.219-.201.44-.307.355-.549-.052.027-.076.082-.189.067-.129-.19.013-.192.105-.29-.121-.021-.104-.328-.155-.597.26-.084.429.168.577.263-.326-.568.503-.091.45-.511C-.73.885-1.052.818-.957.639c-.04-.557.54.183.696-.202l.05.459C.192.412.497.994.39.531.558.662.784.312.852.732 1.323.227 2.304.676 2.741-.047c.106.068.358-.01.314.209-.16.242-.244-.162-.3 0 .092.012.117.127.129.186.215-.102.388-.137.168-.487.404-.271.72.698.945.543-.004-.181.052-.238.228-.177l.293.361c.405.002.292-.356.348-.651.207.09.473.125.529.362l.332-.322c-.244.232.142.21.228.298L5.869.187c.065-.119.298.004.417.063-.07.176-.338.203-.484.232.082.147.257.149.367.325.014-.293.392-.147.564-.135.202-.006.148.318.203.324.041-.146.307.066.217-.184-.052-.066-.181.1-.254-.062.149-.072.202-.334.411-.068.154.197-.198.545.21.474-.075-.099-.062-.217-.109-.342l.385-.043-.06.262c.066-.053.04-.084.071-.111.022.301.496.238.476.562.16.078.415-.068.59-.048l-.024-.032c.25-.086.492.08.586.313l.011-.059a.665.665 0 0 1 .389.389c.325-.067.484-.885.634-.44.262.137.196.639.018.743.533.07.854.662 1.454.543-.005.134-.074.164-.003.306.601.373.891 1.141 1.702 1.108-.08-.204.181-.194.298-.293-.039.261.401.035.118.336-.212.136-.192.291-.518.127.307.494.609.886.973.943-.164-.018-.162.096-.162.203.302-.264.507-.037.505.23l-.18.153.278-.008c-.018.115-.377.33-.07.397l.255-.067c-.013.283-.257.69.006.824l.387.067c0 .109-.14.32-.295.189.369.295.371.569.686.651-.611.834-.622 1.634-.881 2.271l.17.043c.094.246-.313-.023-.236.147.171.005.287.296.519.23.049.359-.471.174-.612.271-.209-.103.199-.035-.068-.162-.084-.027-.041.397-.334.219.08.139.301.258.434.313l-.217.033c.174.457.842.031 1.115.521l-.15.137c.17.408.635-.229.436.313-.262.117-.808-.157-.772-.366-.385.207-.746-.459-.988-.199.055.225.245-.158.39.1.041.338-.376.131-.426.318.088-.27-.345-.328-.279-.482-.138.228.306.232.008.386-.15-.156-.497-.185-.32-.402-.315-.367-.258.232-.568-.023.027.334.628.548.347.832-.076-.301-.587-.217-.584-.713-.091.132-.018.367.15.504-.128.257-.646-.344-.505.261l-.165-.273c-.026.123-.085.232-.133.437-.161.112-.654-.232-.534.209-.073-.041-.486.03-.39-.314.208-.225.348.201.384-.248-.094.373-.375-.006-.534-.11l.011.184c-.098-.06-.288.004-.37-.187.08.095.068.224.006.277l-.129-.266c-.355-.095-.016.5-.368.465l.288.182c-.063-.039-.154.238-.334.176-.09-.247-.232-.538-.297-.729-.189-.084-.068.303-.263.066l.257.274c.045.078-.142.447-.413.48-.178-.089-.44-.498-.174-.607-.129-.02-.319.119-.215.318-.303-.119.043-.273-.211-.457-.108.16-.45.373-.68.604l.256.453-.193-.012c.228.365-.151.25-.033.625-.143.043-.301-.094-.423-.199.446-.545-.345-.824-.158-1.34-.462-.201-.529 1.297-.914.342.113-.111-.053-.576.229-.338-.321-.029-.102-.58-.502-.463.222.287-.412.442-.086.86.012-.18.25-.069.303-.004-.173.164-.079.531-.414.439-.194-.105-.471-.191-.362-.449.082-.291.296.115.241-.217-.363-.209-.553.219-.571-.344.236.108.376-.177.424-.383l-.241-.195-.001.209c-.487.02-.03-.387-.469-.447l-.326.326c-.002.354.679.022.439.537-.297-.056-.304-.351-.621-.287l.168.16c-.152-.033-.351.719-.842.086-.144-.23.006-.209.059-.412-.381-.205-.42-.441-.652-.553-.114.42-.454-.175-.354.35.234-.147.78.041.815.475-.247.421.236.025.423.589-.569-.172-.531.332-.732.596-.116-.018-.181-.18-.229-.248.052-.293.187-.24.288-.525-.423-.077-.766-.325-.829-.723-.185.064-.281.346-.14.455-.405-.35-.932-.504-1.379-.758.529-.205-.381-.422.027-.615.275.068.635-.088.647-.348-.141-.066-.116.178-.225.223-.007-.33-.498.152-.412-.295.273.393-.275.522-.432.873-.158-.379-.145.223-.433.012-.172-.36-.372-.799-.61-1.117-.574-.065-1.134-.979-1.39-1.194-.305 0-.458.42-.709.313-.231-.197.478-.203.002-.338l-.024.09c-.07-.123-.758-.389-.383-.891l-.259.408c-.084-.035-.053-.164-.057-.248-.115.098-.281.11-.269.28-.422-.018-.34-.495-.516-.727l.346-.008c-.129-.494-.723-.754-.667-1.004l-.259.071.128-.17c-.3.033-.286-.299-.027-.209-.32-.141-.726.254-.726.732.244.186.197-.394.514-.307.234.03.361.377.236.608-.138-.123-.106-.168-.082-.336-.358.131-.201.381-.264.668-.062-.102-.267-.172-.18-.264.079.412.045.379.25.657-.022-.256.269-.03.302-.157-.257.198-.13.518.21.787.481-.037.303.813.746 1.049.065-.349.099-.742.024-1.043.304.096.177.27.504.33-.063.268-.241.608-.042.961l.174-.172c.183.309-.044.588.342.815.49.221 1.171.894 1.586 1.209l.171-.174c-.067.596.745.787.968 1.234.769.166 1.333 1.047 1.885.782 1.234.668 2.113 1.052 3.523 1.345l-.143-.404c.176.316.194-.158.407-.047-.315.195.234.467.375.676.652-.217 1.381.148 1.93.441l.033-.242c.537.545 1.224.137 1.9-.072.07-.111.168-.354.371-.354.421.34.615.287 1.223.45.424-.002 1.026-.368 1.361-.67 1.561.058 3.369-1.045 4.457-2.649l-.176-.258c1.498-1.371 1.09-3.822 1.078-5.236l-.462.234c-.155-.412-.161-1.003.234-1.007-.299-.385-.164-1.229-.674-1.307-.314-.352-.092-.594-.244-.969-.633-.736-.859-.924-1.342-1.648l.162.138c-.017.143-.17.284-.328.151-.09-.363-.812-.611-.205-.854-.921-.341-1.508-1.601-2.475-1.779.147-.1-.025-.234-.052-.361-.696-.354-1.559-.408-1.996-.918-.142.019.063.33-.223.213-.141-.135.08-.194-.092-.373-1.031-.817-2.42-.469-3.418-.885-1.547-.727-4.099-.986-5.871-.838l.029.115c-.652-.453-1.538.717-2.224.16-.141.143-.631.198-.432.383-.031-.41-1.539.877-2.422 1.031.053-.087.131-.076.252-.097-.51.861-1.57 1.482-1.56 2.592.072-.09.152-.262.269-.25.125.414-.687.81-.166 1.119-.043.215-.31.129-.269-.012-.041 1.193.076 2.039.615 3.422.453.723.005 1.015 1.58 2.795.97.334.61-.727.982.097.122-.043-.097.198-.015.114.147.312.854-.133.865.248-.297.209.023.263-.096.439.749.319 1.055.092 1.448.608l.054-.178c.366.785 1.225.933 1.532 1.766 2.004.636 3.425 1.494 6.111 1.472 2.081.186 6.053-1.709 5.816-5.562-.203-2.93-2.399-4.858-3.939-5.926C8.886.215 6.815-.813 5.112-1.24c-.957.14-1.086.146-2.012-.33.022.086.079.121-.005.172.045-.397-.694-.229-.715-.622-1.975.049-2.893-.968-5.891 1.387.44-.43.837-.349.373.086l-.633.393.033.148c-.338.227-.694 1.369-.695.582-.377 2.91 1.06 3.875 1.879 4.738.906.51.187.555 2.598 1.235-.096.039-.24-.078.922.209 1.826-.018 3.214.951 6.699-.86C9.861 4.055 7.979.352 6.962.135 5.611-.51 3.941-.979 2.618-1.018c-.695-.111-1.391-.048-2.101-.113-.293.014-.84-.082-1.751.369C-2.335.115-2.245.799-2.39 1.432-2.238 1.631-1.77.209 0 0',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(220.352 72.862)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.16.039-.799.078-.432.395C-.343.236-.06.17 0 0',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(216.884 79.02)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.028.051.129-.004.165-.017-.06-.063-.021-.241-.14-.2C.087-.154.019-.088 0 0',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(221.504 83.815)',
              }),
              v.createElement('path', {
                d: 'M0 0c.058-.168-.186-.461-.357-.574Z',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(223.034 84.67)',
              }),
              v.createElement('path', {
                d: 'M0 0c.152-.102.143-.191-.004-.24-.039.084-.004.148.004.24',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(224.675 84.583)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.039-.002.4.035.468-.057C.44.104-.115-.346 0 0',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(224.66 85)',
              }),
              v.createElement('path', {
                d: 'M0 0c.078.02.242.18.334-.008C.236.119-.034-.26 0 0',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(228.343 85.335)',
              }),
              v.createElement('path', {
                d: 'M0 0c.049-.02.068-.053.127-.014C.215-.108.115-.221.039-.227Z',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(229.911 85.735)',
              }),
              v.createElement('path', {
                d: 'm0 0 .132.023-.07-.156Z',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(219.935 73.739)',
              }),
              v.createElement('path', {
                d: 'M0 0c.14.158.158-.123.193-.141C.048-.203.193.086 0 0',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(225.163 81.45)',
              }),
              v.createElement('path', {
                d: 'm0 0-.021.047.342.105Z',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(231.534 81.168)',
              }),
              v.createElement('path', {
                d: 'M0 0c.067.232-.337.053-.03.191C.079.105.144.01 0 0',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(216.65 62.122)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.792-.77-1.14-.027-.461.418.062.045.105-.488.205-.361C.16.93 1.489-.018 1.175-.682l-.121-.064c-.096-.07.374.062.377-.059l-.264-.041c.336.039.121-.091.32-.146l-.466.033.304-.125c.713-.529-.293-.279-.142-.734l-.112.177c-.076-.656-.84-.777-1.373-.894l.013.449c-.026-.34-.2-.412-.354-.471-.045.354-.28-.3-.448-.097l.024.076c-.174-.358-.167.223-.331-.19l-.043.288c-.136-.475-.146.287-.292.058l-.016-.099c-.125-.098-.128.154-.238.089l.004.057c-.252-.092-.302.23-.401-.145.01.321.244.067.243.538-.766-.168-1.528.168-2.069.722.044.172.041.239.135.35-.102.002-.258.119-.432.08.019-.018.138.156.138.199.069.184-.431-.088-.353.139a.536.536 0 0 1 .357.115c-.319-.033-.366.147-.515.256l.233.016c-.37.064.039.296-.19.396l.225-.023c.25.234-.469.017-.327.236l.252-.031c-.448.173-.284.507-.343.709l.087-.028c.014.217.153.399.1.67.13.033.482-.242.506-.035-.402.195.018.402-.479.547.155.158.466.297.45.477.073-.17.473-.288.404-.418l.277-.098c.128-.129-.117-.035.08-.16.028.056.028.316.121.31-.119.282-.374.76-.21.942.023-.2.357-.344.349-.446l-.263.87c.054.066.218-.276.244-.112-.072.094-.073.184-.096.285.047-.013.238.28.489-.086.116-.132-.063-.138.091-.234.119.07.051.203.174.277l.029-.05c.11-.016.162.296-.037.466-.066-.019.141-.224-.006-.158-.053.256.072.418.214.475-.02-.082.032-.188.065-.309.045.387.217.569.395.787-.066.198.04-.39-.026-.297.351-.164.474.586.829.229-.031-.045-.086.285-.071.228.153.008.205-.291.274-.16.043-.172.103.082.193.157.035.128.036-.079-.041-.118.09.166.698.51 1.018.235-.008.117.203.41.279.39l-.041-.271c.058-.17.244-.002.239-.238.169.316-.592-.221-.377.013.041-.232.306.407.244.039.138-.006.31.285.421.016-.036.049-.152-.367-.04-.359.202.025.071.123.244.195l.119.1c.047.263.177-.059.148.246-.012-.221.33.095.223-.338l-.096-.338c.088.015.212.342.317.482l-.006-.158c.138.531.196-.084.406.266.135-.244.476-.196.446-.541.193.099.402.222.517.052-.053-.033-.102-.029-.157-.13.034-.184.114-.065.243-.024-.053-.064.06-.361.07-.568.205.088.304.355.402.504-.151-.514.541.023.424-.485-.088-.023-.32-.078-.299-.263-.205-.506.439.15.461-.196l.235.375c-.094-.271.436-.031.121-.347.168.064.105-.278.385.043.066-.446.789-.61.287-1.239.088-.004.093-.154.265-.015.155.205-.208.013-.09.131.038-.036.141.019.193.046-.019-.156-.001-.246-.358-.341-.106-.338.763.138.792-.248-.168-.063-.214-.114-.142-.188l.369-.045c.043-.226-.314-.256-.59-.371.157-.264.106-.25.352-.283l-.342-.197c.246.14.192-.039.273-.069l-.081.03c-.121-.043-.021-.135.027-.184.179.049.228.178.268.25.139-.022.126-.106.291-.141C6.28.994 6.401.83 6.388.748c-.043-.098.278-.057.271-.086-.149-.027-.006-.16-.225-.119-.052.023.137.098-.001.127C6.328.59 6.065.555 6.27.461c.157-.074.571.109.41-.104l-.304.055-.131-.189.266.025-.123-.033c.285-.018.115-.252.435-.264.037-.088-.165-.201-.186-.285l-.025.014c-.138-.106-.054-.252.128-.346l-.057.006c-.024-.063.013-.207.168-.293-.208-.152-1.01 0-.681-.182.003-.14.475-.283.649-.238-.156-.229.104-.764-.373-.939.088-.083.162-.075.19-.196-.191-.48-.273-1.064-.923-1.07-.003.17-.207.168-.327.262.119-.229-.273.066.019-.225.192-.145.274-.23.44-.188-.086-.302-.409-.648-.665-.587.128-.028.135-.125.137-.229-.24.305-.413.209-.44-.008l.124-.203-.215.135c.004-.086.238-.43.002-.309l-.174.19c.001-.221.017-.588-.215-.492l-.279.234c-.031-.061-.013-.287.131-.318-.316.054-.461.004-.671.226.06-.849-.921-1.252-1.222-1.258l-.039.172c-.168.119.028-.314-.092-.224-.01.173-.195.32-.162.546-.218.125-.129-.361-.22-.472.045-.227.049.17.107-.119.002-.084-.286.099-.224-.246-.079.119-.109.379-.123.523l-.061-.197c-.223.357.099.793-.162 1.238l-.074-.082c-.174.328.124.473-.124.525-.048-.197-.01-.712.116-.836-.192-.142.097-.83-.158-.849-.114.187.189.086.074.355-.176.254-.196-.195-.321-.117.141-.107.118-.471.051-.549-.162.141.019.34-.169.344.009-.203-.135-.383.038-.494.012-.463-.216.09-.261-.277-.109.306.068.765-.155.89.082-.301-.183-.459-.011-.894-.096.074-.135.314-.104.511-.135.17-.207-.607-.316-.004l-.004-.32c-.047.096-.106.164-.18.326-.098-.002-.295-.437-.318.039-.03-.05-.262-.033-.155-.361.161-.199.152.244.266-.199-.131.361-.21-.053-.295-.176l-.022.184c-.049-.075-.169-.035-.197-.235.038.106.012.231-.029.276l-.049-.282c-.211-.144-.057.493-.258.409l.15.22c-.032-.048-.101.215-.193.125-.038-.256-.112-.564-.15-.763-.119-.114-.045.289-.167.023l.157.311c.024.084-.088.423-.234.416-.094-.09-.268-.459-.121-.6-.078-.004-.176.152-.104.34-.176-.086.004-.283-.154-.43-.049.18-.212.447-.293.709l.184.408-.094.018c.151.326-.034.27.066.621-.054.065-.138-.047-.209-.133.122-.603-.298-.758-.313-1.291-.298-.103.015 1.301-.382.52.024-.143-.174-.522.022-.395-.159.082-.202-.508-.37-.26.186.192-.059.551.205.831-.044-.17.092-.149.131-.106-.033.213.1.525-.06.551-.106-.035-.241-.026-.276-.299-.053-.299.161.008.039-.283-.226-.072-.164.385-.361-.129.139.021.11-.291.067-.494l-.184-.1.072.194c-.205.179-.267-.321-.489-.198l-.022.428c.18.303.32-.27.498.27-.25.093-.325-.172-.467.025l.153.066c-.061.039.11.762-.255.43-.177-.117-.099-.176-.173-.371-.296.043-.464-.141-.661-.074.207.349-.296.207.08.476-.023-.281.4-.416.627-.078.074.486.184-.137.393.311-.195.078-.022.523.058.824-.039.037-.132-.07-.179-.104-.131-.265-.063-.285-.167-.568-.191.137-.449.092-.704-.088-.008.172.155.416.247.397-.283.058-.531.25-.701.457-.135-.506-.322.105-.467-.276.061-.222-.014-.543-.219-.677-.073.082.127.168.149.273-.277-.121.09.482-.283.266.352-.123.422.402.709.644-.277-.019.178.199.05.328a1.39 1.39 0 0 0-.785.182c.083.365-.315.725-.435 1.027.15.186.592.158.632.295-.046.151-.427-.164-.29.092l.09-.018c-.164.082.311.393-.25.641l.422-.205c.052.035-.039.103-.074.16.144-.041.283-.045.36-.137.311.002.014.252.112.377l-.285.075c-.012.335.33.345.396.521l.183-.191-.025.195c.161-.201.358-.244.253-.047l.233-.678c-.175.051-.158.293-.384.442-.193.136-.286-.059-.109-.262.065.035.02.082-.006.188.275-.245.19-.317.359-.51.005.033.107-.018.026.07.098-.17.101-.219.062-.277-.084.125-.206.109-.281.183.281-.195.261-.293.214-.3-.343.05.186-.125.116-.145-.369.02-.59.076-.703.203-.18-.078-.039-.105-.192-.209.26-.047.651-.056.83-.101l-.238-.047c.151-.067.5.041.448-.047-.151-.182.063-.334.134-.459l-.171-.172c.443.309.296-.092.585.041.075-.309.51-.025.424-.463.499.029.768.088 1.239-.041l-.139-.338c.129.244.019-.209.113-.17-.049.293.174.346.26.553.165-.303.471-.047.66.174l-.014-.244c.211.427.384.056.612-.022.025-.101.067-.33.136-.301.116.395.178.368.336.614.124 0 .333-.102.479-.217.397.66.913.307 1.321.822l.114-.263c.432.787.858.292 1.081.826l.209-.444c.191-.066.194.256-.017.535.19-.066.14.346.433.049.16-.011.023.262.052.366.179-.022.197.066.207.218l-.043-.002c.071-.084.219-.228.267-.22-.067.13.247.066-.256.382.4-.091.015.282.389.204-.153.041-.177.072-.278.107.027.008.373.125.089.295.08.019.27-.061.287.008-.058.043-.207.011-.294.062-.254.197.266.61.168.906-.381.668-.361.532-.624 1l.096.067c-.359-.16.163.555-.412.135.053.095-.053.103.115.259-.277-.189-.056.424-.395.204l.061.027c.041.357-.322.051-.381.336.04.039.088.058.143.164.014.234-.359-.395-.184.144-.044.012-.132-.253-.103-.248-.291.422-.895.114-1.337.022-.306.383.028.953-.261.568-.021.113-.019-.213-.021-.095-.106-.133-.16.625-.229.33.043-.344-.034-.198-.022-.409-.189.202-.284.537-.404.229l-.02.183c-.091-.56-.371-.318-.337-.945C-1.815 1.674-2.298.764-2.173.584c-.344-.291-.426.521.227-.17.011-.502.061-.506.325-.394l-.052-.161c.106.37.179-.005.289.358.326-.149.666-.078 1.027-.088-.058-.037-.099-.356-.026-.336l.077.244.012-.111c.047.058.088.26.046.383.06-.19.675.775.272-.559.01.049.016-.127.317-.393.647-.552.656.239-.314-1.271.269.121-.175.016-.194-.012.137-.166.251.914-.139 1.422-.087.301.42-.281-.125.815 1.073 1.388-.027.613.36.804.191 0 .39.035.586.117C.517 1.232.418.221 0 0',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(221.147 63.51)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.189.078-.351.049-.476.312Z',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(216.504 61.86)',
              }),
              v.createElement('path', {
                d: 'M0 0c.043.039-.006-.106-.016-.141-.051.03-.206-.05-.171.059.054-.033.111.041.187.082',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(214.964 58.735)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.098-.144-.375-.146-.51-.088Z',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(215.792 58.004)',
              }),
              v.createElement('path', {
                d: 'M0 0c.037-.17-.013-.238-.131-.191Z',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(216.421 56.92)',
              }),
              v.createElement('path', {
                d: 'M0 0c.079-.021.085-.133.094-.242C.139-.098-.124-.268 0 0',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(216.625 57.27)',
              }),
              v.createElement('path', {
                d: 'M0 0c.048.008.161.139.184-.061C.15.082-.064-.25 0 0',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(218.511 56.356)',
              }),
              v.createElement('path', {
                d: 'M0 0c.028-.012.04-.043.075.006.051-.08-.01-.207-.056-.225Z',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(219.422 56.538)',
              }),
              v.createElement('path', {
                d: 'm0 0 .135.004-.119-.127Z',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(225.487 67.715)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.047-.137-.128.127-.153.145C-.077.193-.099-.064 0 0',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(218.588 68.538)',
              }),
              v.createElement('path', {
                d: 'm0 0 .009.025.315-.17z',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(216.347 65.495)',
              }),
              v.createElement('path', {
                d: 'M0 0c.16-.17.228.199.198-.102C.034-.061-.099-.082 0 0',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(189.451 85.395)',
              }),
              v.createElement('path', {
                d: 'M0 0c.68.527 1.973.771 2.539-.125.637-1.139-.838-1.404-1.664-1.67-.221-.041.035.502-.443.377C-1.314-2.293-4.555-.926-5.51.85l.16.017c-.136.256-.683.346-.656.742.093-.009.162-.095.27-.043-.282.08.054.555-.038.782.194.031.36-.127.536-.129l-.066.379c.212 1.05 1.542.463 2.34 1.181-.007-.084-.059-.17.044-.205 1.074 1.238 3.37 1.178 5.022.539-.118-.076-.258-.242-.221-.396.218.283.749.088 1.197-.129-.06-.416.897-.26 1.131-.91l-.094-.008c.602-.123.194-.633.744-.75l-.121-.367c.56-.018-.082-.69.244-.965l.098.023c.153-.427-.197-.529-.154-.865l-.062-.019c-.03-.76-.361-1.088-.03-1.211-.34-.121.049.742-.468.511C4.08-3.59.788-4.322-1.311-3.631c-.235.188-.389.256-.421.406-.242-.066-.849.078-1.09-.052.075-.01-.1.228-.211.275-.362.242-.541-.297-.942-.018.204.053.295.159.274.311-.453-.199-.947-.027-1.403.059.088.037.204.035.226.156-.581-.149-.829.383-1.315.334l.234.15c-.555.494-.371-.363-.881.008.162.002.151.107.209.18-.676-.133-1.457.406-2.035.531l.066.07c-.636.225-1.011.821-1.706 1.098-.115.246.388.297-.065.75-.315-.32-.836.787-1.002.178-.424.478-.445 1.531-.744 1.869.246-.215.445.379.627-.057l.158.377c.195-.012.046-.328.237-.18-.161.17-.347.766-.208.967-.174.377-.84.916-.529 1.676.004-.375.538-.023.504-.258a8.792 8.792 0 0 0-.277 1.322c.119.235.317-.15.453.2-.108.056-.061.222-.059.371.105.031.633.935 1.041.619.197-.063-.254-.309.065-.262.345.27.268.399.625.678l.041-.043c.251.146.638.625.228.68-.193-.094.201-.174-.129-.239.036.342.503.641.92.868-.113-.139-.043-.235-.044-.373.386.628 1.007.911 1.642 1.284-.049.204-.145-.448-.272-.375.904.02 1.727.856 2.536.514-.118-.045-.094.29-.081.232.445.005.44-.299.715-.17.035-.182.348.097.647.134.155.116.072-.086-.18-.098.324.194 2.22.272 3.061-.37.028.143.71.164.917.048l-.193-.211c.113-.237.687-.307.609-.53.571.094-1.749.531-1.068.486.05-.276.986.011.701-.267.406-.17.95-.115 1.151-.588-.078.108-.494-.123-.2-.3.532-.305.217.011.684-.2l.328-.091c.19.205.395-.401.412-.012-.086-.217.776-.522.422-.799l-.303-.195c.207-.159.578-.024.838-.071l-.054-.179c.422.326.379-.518.902-.504.255-.528.822-1.219.692-1.608.386-.271.722-.566.828-1.078-.088.071-.16.19-.275.166-.013-.351.146-.359.345-.592-.086.034-.039-.689-.154-1.078.268-.361.507-.148.689-.142-.348-.451.611-1.391.102-1.891-.075.164-.274.647-.397.274-.549-.387.484-.811.053-1.467l.465.101c-.323-.257.033-1.086-.383-.906.125-.281-.35-.74.049-.814-.703-1-1.559-2.657-2.641-2.471-.082-.205-.413-.236-.248-.41.367-.102.165.277.359.232-.108-.109-.072-.228-.052-.289-.289-.023-.582-.133-.479.307-.767-.069-.312-.947-1.269-1.203-.032.179-.122.213-.362.074l-.375-.498c-.592-.184-.441.264-.545.523-.279-.115-.64-.179-.72-.425l-.45.285c.325-.205-.199-.229-.322-.33l.122.101c-.082.113-.403-.037-.57-.113.076-.172.443-.17.648-.18-.124-.16-.37-.183-.546-.379.012.301-.529.098-.773.076-.245-.003-.514-.298-.501-.294-.014.152-.489.039-.259.246.098.046.235-.155.396-.024-.2.117-.181.381-.575.199-.302-.136.072-.582-.508-.379.156.069.188.184.308.288l-.525.168-.043-.266c-.067.07-.016.092-.045.129-.191-.301-.82-.008-.986-.285-.278.025-.535.293-.78.373l.053.011c-.278.204-.697.202-.994.129l.029.051c-.155.076-.546.164-.804.088-.34.332.222.99-.336.828-.379.164-.794-.164-.709-.396-.625.486-1.629.5-2.008 1.25-.15-.035-.127-.131-.356-.065-.889.676-2.154 1.092-2.484 2.072.315-.117.186.194.279.315-.353-.016-.078.389-.415.137-.137-.2-.233-.272-.057-.547-.606.312-1.336 1.006-1.44 1.42.055-.205-.097-.162-.253-.116.24.309.083.526-.301.721l-.198-.133-.013.356c-.156.049-.461-.236-.577.199l.1.256c-.418.142-1.082.342-1.176.861l.059.504c-.139.131-.498.279-.381-.055-.297.739-.523 1.168-.344 1.538-1.276.804-1.929 2.767-2.064 4.271l.18-.02c.109.407-.333.165-.25.452.183-.106.322.33.568.052.13.577-.347.731-.447 1.127-.233.059.16-.316-.137-.246-.074.082.125.825-.165.992.159.17.397.006.527-.089l-.113.427c.45.4.604-1.138 1.155-.664l-.016.319c.393.246.316-.811.53-.084-.127.312-.579.715-.78.416.073.789-.874.495-.46 1.461.277.182-.266-.788.114-.672.347.32.216.914.494 1.264-.339-.363-.466.167-.338.517.427.382.071-.477.528.129-.078.204.377.809-.207.476-.099.529.731.474.881 1.023.364-.123-.197-1.089.543-.72-.279.245.596.841.03 1.05.311.041.438-.171.339-.42.426-.023.681.897 1.02.371l.024.349c.152-.05.344-.051.57-.186.304.064.929.644.992.169.085.084.817.176.49.461-.498.118-.48-.343-.825.043.4-.297.647.213.928.341l.068-.179c.157.086.544.075.638.283-.123-.115-.046-.236.087-.272l.163.294c.677.18.199-.467.763-.392l-.433-.217c.117.062.285-.219.554-.133.106.255.304.559.398.756.319.105.134-.293.452-.036l-.414-.301c-.061-.083.263-.43.676-.432.265.083.699.443.283.593.212 0 .498-.164.322-.347.48.077-.049.277.371.426.145-.153.694-.464 1.004-.774l-.489-.359.292-.048c-.408-.285.163-.291-.084-.62.186-.086.431 0 .633.064-.506.668.775.682.708 1.228.893-.001.236-1.341 1.293-.682-.107.158.417.475-.156.419.545-.15.237.498.887.082-.477-.074.321-.666-.363-.777.082.158-.306.239-.408.22.15-.261-.157-.508.318-.663.303-.046.703-.166.721.119.07.296-.459.116-.19.35.628-.093.588-.566.997-.134-.39.083-.397.414-.331.612l.489-.027-.148-.163c.675-.376.327.277 1.018-.01l.188-.482c-.283-.267-.959.479-1.015-.091.433-.166.68.05 1.048-.226h-.351c.151-.078.047-.796.805-.629.357.017.155.146.244.335.665-.245.944-.141 1.373-.307-.256-.33.713-.382.081-.545-.107.315-1.047.734-1.426.483.039-.554-.467.31-.822-.118.55-.191.302-.659.27-.97.129-.086.317-.028.418-.024.178.241-.006.323.104.606.531-.34 1.14-.447 1.576-.337.128-.221-.059-.457-.293-.377.614-.178 1.555-.671 2.027-1.175-.101.655.707-.356.68.149-.248.305-.325.774-.031.83.177-.161-.125-.169-.102-.309.399.041.147-.613.627-.446-.648.264-.443-.402-.761-.638.52-.105-.169-.207.224-.482.514-.106 1.105-.303 1.576-.582.322-.699 1.357-1.061 1.85-1.426.127-.34-.242-.6-.09-.842.293-.269.111.53.398-.017l-.1-.02c.198-.055.573-.951 1.13-.64l-.455-.2c.048-.105.197-.101.296-.129-.102-.109-.106-.295-.304-.24.053-.461.545-.527.818-.83l.039.379c.586-.363.772-1.063 1.144-1.313l-.198-.179.384-.119c-.237-.137-.072-.492.23-.459-.429.088-.73-.008-1.289.283-.075.316.524-.111.575.226.115.186-.354.672-.618.583.122-.196.177-.168.372-.258-.263-.26-.471.015-.776-.004.086-.08.097-.268.209-.221-.293.072-.455.223-.693.5.271-.102.09.254.231.248-.28-.183-.549.018-.796.428.014.51-.835.467-1.171.933.4.075.799.059 1.142-.086-.14.364-.293.268-.432.633-.279-.074-.701-.189-1.049-.066l.136.203c-.41.16-.637-.119-1.01.256a17.094 17.094 0 0 1-1.922 1.644l.121.213c-.621-.203-1.168.58-1.725.688-.419.607-1.748.611-1.918 1.191-1.479.584-2.791.671-4.222 1.283l.332.26c-.328-.163-.126.257-.404.294.255-.354-.543-.256-.736-.469-.608.364-1.521.227-2.114.049l-.009.244c-.659-.443-1.388-.027-2.181.067-.086.098-.24.345-.462.303-.385-.435-.586-.397-1.098-.715-.375-.116-1.094-.073-1.477-.13-1.225-1.019-1.619-1.316-1.327-3.03l-.281-.125c.653-1.562.758-3.402 1.637-4.429l-.479-.133c.085-.443.661-.715.87-.428.114-.426.746-.666.668-1.101.242-.369.536-.217.824-.416.657-.905.846-1.024 1.577-1.563l-.144.16c-.14-.013-.29-.168-.145-.332.339-.105.833-.869.957-.211.5-.861 1.828-1.076 2.327-1.881.019.174.221.086.352.133.652-.396 1.256-1.011 1.91-.994.083-.113-.28-.193.004-.306.192 0 .078.195.315.207 1.181-.176 2.215-.866 3.29-.811 1.595.514 3.978 1.066 4.889 2.037l.07-.094c.05.44.952.639.572 1.19.118.076.122.41.326.271-.165.393.443 1.129.017 1.76l.062-.148c.18.427-.343 1.125-.447 1.804.076-.047.167-.158.284-.133.073.37-.714.411-.298.813-.097.143-.312-.039-.244-.115C2.504 5 .895 6.135-.566 6.762c-.896.802.345.892-.684.916-.037.123-.13-.188-.102-.075-.384-.058-.366.76-.701.553.021-.367-.209-.138-.258-.344-.513.251-.818.639-1.388.338l.042.186c-.7-.524-1.549-.397-1.986-1.104-3.975-1.359-4.822-4.099-2.16-5.589C-5.6-.164.678-1.397 1.637-.936c.576-.158.685.143.789.651.07-.051.086-.098.156-.082-.377.17.007.435-.337.549.297.197-.21 1.007-1.1 1.425.153-.041.402.188.207.27l-.295-.113.017.115C.91 1.875.705 1.746.782 1.582c-.63.162-1.188.301-1.737.16-.324.026-.527-.06-.707-.127l-.165-.025-.044-.004c-.363-.156.781.351-.82-.354l-.047-.007-.186-.036c-.234-.043-.537-.091-.683-.128-.475.046-.472-.424-.769.154a1.335 1.335 0 0 1-.448.431c1.426-.986.519-.24.598-.324-.237.242-1.081.199-.688.219 1.244.891.539.037 1.672-.195.344-.235.814-.438 1.361-.592-.015-.02 1.235-.295.219-.09.484-.002.732-.004.99-.004C.029.48.764.312 1.192.287c.292.068.142-.029.628-.803C2.912-.74.342-.738 1.589-.684c-.046-.791-1.249-.078-3.396-.81C-1.759-1.502-1.152-.437 0 0',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(180.968 83.837)',
              }),
              v.createElement('path', {
                d: 'M0 0c.121.193-.117.514.287.525C.201.359.147.096 0 0',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(189.21 85.665)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.045-.04-.072.147-.08.192C.031.133.223.201.246.061.133.122.095.034 0 0',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(183.16 93.856)',
              }),
              v.createElement('path', {
                d: 'M0 0c.191.08.502.161 1.164-.232C.479.071.406-.092 0 0',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(180.88 95.417)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.134.227-.049.275.208.148C.189.055.086.053 0 0',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(178.974 97.12)',
              }),
              v.createElement('path', {
                d: 'M0 0a.564.564 0 0 0-.318.329C-.365.19.189.251 0 0',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(178.66 96.827)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.146.009-.471-.088-.582.126C-.451-.031.148.236 0 0',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(173.384 98.812)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.08.014-.113.046-.208 0-.146.083.015.207.142.221z',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(170.741 98.78)',
              }),
              v.createElement('path', {
                d: 'm0 0 .058-.314-.164.062z',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(188.009 83.8)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.216-.234-.251.056-.307.057C-.074.195-.304-.183 0 0',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(172.648 93.668)',
              }),
              v.createElement('path', {
                d: 'm0 0-.056.062.283.221Z',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(170.298 84.038)',
              }),
              v.createElement('path', {
                d: 'M0 0c.207.082-.113.305.135.139C.107-.004.067-.111 0 0',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(185.777 74.893)',
              }),
              v.createElement('path', {
                d: 'M0 0c1.265.373.308-.785-.328-1.084-.074-.062-.118.486-.267.326-.535-.904-1.793-.519-2.65.014l.045.142c-.161.098-.346-.378-.522-.318-.002.094.054.135.014.262-.046-.291-.303-.135-.375-.332-.061.113-.043.338-.111.469l-.115-.317c-.379-.771-.6.143-1.04-.119l.103.184c-.616-.424-1.936.3-1.165 1.216a.962.962 0 0 1 .323-.31c-.231.24-.132.484-.024.652.287-.217.054.463.351.442l.032-.073c-.161.338.388.049.324.457l.193-.226c-.096.486.31-.17.356.105l-.037.096c.085.15.224-.065.312.049l.027-.051c.228.205.455-.012.346.357.174-.269-.218-.214.049-.599.743.635 1.714.726 2.615.795.114-.153.181-.198.21-.342.085.078.331.076.415.273-.031-.007.058-.195.104-.213.158-.142.19.424.369.256a.492.492 0 0 1-.09-.371c.164.295.372.283.561.321-.035-.059-.082-.088-.087-.209.235.296.342-.145.545.031l-.102-.205c.214-.323.169.437.38.23-.074-.056-.073-.144-.103-.23.314.345.658.134.931.213l-.041-.084c.36-.184.402-.407.768-.506-.009-.153-.42-.336-.213-.489.347.282.418-.275.751.125.139-.24.028-.759.24-.894-.196.08-.508-.195-.594-.022l-.232-.162c-.186-.009.028.12-.189.047.068-.051.254-.248.133-.308.244-.112.705-.504.657-.797-.089.189-.492.121-.515.232l.542-.754c-.043-.113-.313.162-.297-.035.103-.058.126-.16.176-.262-.045-.017-.207-.484-.577-.185-.154.092.063.176-.136.209-.134-.121-.04-.238-.183-.369l-.04.043c-.128-.024-.182-.393.066-.502.084.051-.179.193.004.177a.476.476 0 0 0-.262-.564c.024.094-.043.189-.084.309-.036-.409-.277-.668-.44-.905.087-.189-.081.381.003.301-.438.119-.361-.635-.882-.387.031.049.146-.261.118-.209-.174-.035-.285.246-.345.108-.079.158-.108-.1-.198-.188-.009-.138-.058.071.028.121-.088-.191-.619-.664-1.05-.539.042-.109-.098-.486-.187-.502l-.04.276c-.117.133-.268-.115-.339.107-.085-.381.586.498.422.17-.12.201-.21-.531-.257-.152-.155-.074-.248-.412-.469-.18.057-.037.051.393-.078.352-.225-.084-.038-.139-.213-.258l-.1-.131c.043-.264-.223.002-.077-.277-.068.213-.334-.19-.379.252l-.022.349c-.096-.041-.11-.388-.171-.553l-.058.151c.055-.531-.254.008-.33-.422-.241.158-.57-.082-.694.268-.157-.163-.306-.354-.502-.239.036.049.089.065.094.18-.124.156-.148.018-.257-.07.023.08-.244.314-.371.504-.165-.159-.114-.448-.131-.623-.14.529-.488-.336-.661.144.063.072.253.256.124.389-.117.535-.328-.403-.548-.114l.024-.443c-.085.283-.379-.207-.312.233-.096-.147-.268.181-.286-.247-.35.409-1.002-.089-1.122.7-.067-.065-.194.025-.204-.194.055-.248.159.151.167-.013-.052-.006-.083-.121-.098-.178-.107.113-.196.154-.02.49-.32.313-.472-.644-.779-.408.056.168.049.238-.051.234l-.25-.252c-.189.118-.02.418.047.709-.129-.017-.275.043-.393-.154l-.04.406c.028-.293-.153-.142-.233-.193l.08.051c.018.129-.146.097-.23.086-.045-.18.077-.297.142-.375-.105-.104-.197-.043-.336-.161.127.266-.134.26-.224.323-.1.123-.247-.166-.283-.137.06.141-.202.137-.008.275.062.022.037-.187.164-.103-.039.148.086.381-.162.297-.193-.059-.235-.533-.4-.227l.271.186-.143.256-.15-.221.043.121c-.219-.199-.389.129-.632-.088-.14.033-.124.383-.199.504l.036-.006c-.01.252-.228.367-.477.404l.054.026a.72.72 0 0 1-.433.328c.024.383.893.377.492.521-.075.221-.579.28-.714.114-.022.578-.419 1.287.195 1.687-.077.112-.158.084-.16.272.369.631.534 1.424 1.149 1.31-.009-.172.191-.187.304-.289-.101.24.269-.078-.002.233-.184.156-.26.246-.422.216-.047.194.588.748.84.604-.133.047-.127.139-.117.23.215-.318.419-.255.471-.06l-.116.203.225-.143c.007.092-.221.442.039.34l.176-.183c.029.246.06.65.316.574l.295-.219c.045.072.054.32-.109.336.361-.019.537.059.75-.156.107.908.951 1.15 1.566 1.312l.029-.174c.208-.107.005.323.154.243-.009-.18.214-.315.14-.553.269-.109.219.387.358.512-.026.232-.091-.182-.125.113.01.09.362-.078.335.275.086-.115.084-.383.08-.531l.111.209c.23-.352-.25-.832.02-1.273l.105.091c.17-.326-.217-.5.081-.535.157.225-.099.694-.023.86.024.127-.171.824.053.869.127-.174-.193-.114-.064-.373.201-.233.201.228.338.17-.158.086-.156.457-.096.545.178-.118.008-.346.204-.321-.026.203.101.405-.087.49-.062.461.229-.058.229.313.152-.287.021-.773.273-.861-.122.287.13.484-.111.888.105-.058.185-.289.181-.49.171-.144.112.629.331.055l-.055.314c.066-.086.141-.144.25-.289.102.028.195.514.33.055.018.058.254.111.065.398-.203.147-.09-.283-.304.117.21-.314.191.112.235.254l.07-.171c.028.085.153.082.121.283-.004-.114.053-.227.106-.256l-.035.283c.195.195.206-.457.408-.32l-.107-.252c.024.054.177-.178.259-.067-.033.256-.041.573-.058.774.099.14.137-.264.195.021l-.084-.34c0-.085.229-.378.395-.33.082.114.16.514-.05.606.087.027.247-.094.225-.293.172.135-.095.262.036.459.113-.149.386-.332.566-.543l-.074-.461.112.023c-.066-.371.131-.238.13-.611.087-.037.148.106.201.215-.346.514.086.84-.08 1.344.299.222.435-1.219.614-.323-.077.123.013.559-.164.358.208-.008.049.558.324.398-.141-.256.266-.486.067-.857-.011.178-.159.097-.189.041.114-.182.073-.531.266-.485.166.09.197.116.132.381-.079.299-.025-.048-.07.262.04.119.296-.318.254.221-.142-.063-.242.24-.279.445l.157.147.003-.202c.315-.107.018.37.311.352l.199-.375c-.007-.348-.432.098-.281-.445.181 0 .191.287.385.166l-.106-.125c.068-.01.252-.733.433-.276.103.184.003.201-.027.408.278.098.334.321.518.375.016-.408.334 0 .183-.437-.125.225-.541.15-.581-.246.177-.465-.235.039-.215-.451.226.015.289-.455.373-.76.063-.014.101.123.13.176-.017.295-.096.279-.146.578.261-.049.477.142.58.443.104-.133.112-.428.018-.467.285.121.609.12.898.065-.228.455.305.15.145.531-.162.09-.329.414-.264.637.102-.018.017-.209.067-.305.101.274.228-.396.314.029-.265-.187-.004-.587-.024-.966.177.232.015-.268.205-.245.174.231.403.422.615.528.286-.346.676.008.915.027.133-.187.064-.613.201-.683.158.009-.134.455.107.265l-.019-.086c.068.1.436-.281.488.33l-.058-.461c.045-.041.082.065.116.116.006-.151.059-.286-.007-.385.15-.315.299.055.455.07l-.107.272c.263.216.449-.049.707.05l-.006-.267.152.162c-.034-.258.107-.422.188-.205l-.391-.658c-.112.156.116.324.043.584-.062.228-.301.152-.334-.106.092-.027.096.031.164.129.036-.369-.103-.357-.166-.607.047.017.117-.094.125.023-.09-.181-.184-.213-.338-.224.102.148-.062.228-.025.335-.005-.326-.151-.429-.344-.341-.149.375-.353-.248-.576-.149.078.332.185.6.316.735-.145.162-.155-.012-.302.152-.059-.248-.094-.625-.27-.779l-.02.244c-.16-.127-.144-.488-.356-.424-.366.127-.732.102-.997.086l-.027.242c-.111-.537-.481-.252-.659-.508-.365.194-.703-.318-.931.078-.594-.279-1.014-.453-1.73-.529l.044.373c-.066-.283-.101.186-.2.106.167-.248-.085-.399-.117-.631-.312.205-.594-.176-.758-.473l-.066.235c-.121-.5-.488-.18-.804-.18-.063.088-.183.293-.264.246-.039-.414-.14-.426-.311-.736a1.234 1.234 0 0 0-.73.029c-.552-.758-1.232-.61-2.005-1.199l-.104.265c-.365-.82-1.23-.355-1.526-.963l-.183.459c-.213.043-.258-.316-.049-.593-.211.041-.205-.412-.506-.127-.188-.012-.045-.295-.119-.416-.299.027-.639-.215-.486-.244l.075.033c-.054.099-.198.25-.276.213.016-.18-.399-.225.113-.536-.508-.007-.08-.632-.508-.228.037-.016-.073.033-.126.045-.895.055.401.017.202.226.025-.419-.072.342-.019-.173.132.054.031.011.118.048.471.483-.152-.148.292-.211.451.135 1.62-.371 2.126-.316l-.027-.115c.314.412.551-.533.831.109.049-.119.226-.084.16-.303.23.27.552-.341.861.063l-.074-.063c.287-.259.547.094.858-.144-.03-.051-.087-.086-.093-.203.132-.227.266.49.36-.074.07.004.033.283-.008.267.691-.176 1.353.328 1.972.551.542-.16.277-.908.533-.369.061-.094-.04.215-.001.103.093.202.418-.521.43-.203-.153.315.005.207-.061.408.358-.115.541-.382.674-.06l.052-.174c.071.549.42.408.483 1.1.832.463.744.625.72.779C2.286-.187-.538-.738.093-.641c.483-.228-1.662.12-2.875-.084-.44.42-.479.389-.793.082l-.032.168c.089-.384-.252-.119-.177-.488-.008.084-1.111-.416-.178.067a6.749 6.749 0 0 1-.471-.44c-.02.041-.224.293-.231.246l.157-.195-.085.072c-.042-.014-.617.543-.235.176-1.922 1.426-1.137.035-.335 2.043.785 1.07-.23.486.766.295.055.08.03-.02.05-.059.259-.193.923-.351 1.913-.26.555-.152.613.008 1.014.155.775-.504.256.451 1.418-1.145.482.045-.238-.269-.363-.752.082-.541-.051-.248-.178-.412C-.559-1.184-.477-.143 0 0',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(179.703 71.014)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.045.197-.191.301-.077.566C-.061.381.015.176 0 0',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(185.527 74.848)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.001-.059-.064.072-.08.102.049.021.084.191.132.095C.002.178.017.084 0 0',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(181.513 76.733)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.005.176.206.342.338.379Z',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(180.453 76.723)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.109.135-.098.217.021.227Z',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(179.363 77.319)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.081-.016-.139.082-.195.176C-.168.027-.019.293 0 0',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(179.355 76.916)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.051-.027-.136-.197-.229-.02.086-.119.218.282.229.02',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(177.18 77.028)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.035.004-.059.031-.084-.025-.082.06-.052.201-.004.23z',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(176.208 76.512)',
              }),
              v.createElement('path', {
                d: 'm0 0-.116-.082.028.17z',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(173.468 65.708)',
              }),
              v.createElement('path', {
                d: 'M0 0c.054.154.157-.1.189-.113C.099-.184.118.094 0 0',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(181.422 67.45)',
              }),
              v.createElement('path', {
                d: 'm0 0 .023-.027-.29-.209z',
                style: { fill: '#b0e1ed', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(182.175 72.17)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.425-.061.228-.229-.277-.102C-.221.004-.139.084 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(203.857 87.028)',
              }),
              v.createElement('path', {
                d: 'M0 0c-1.453-.434-3.138.398-4.672.363-.179.016.139.346-.261.363-1.555-.125-3.596 1.21-4.772 2.538l.146.031c-.228.244-.775.168-1.019.435.039.057.148.012.141.139-.196-.117-.561.309-.777.276-.059.15.058.273-.024.455l-.313-.065c-.783-.047-1.013.914-1.735 1.268.066.011.149-.012.147.07-1.123.635-2.084 1.894-2.921 3.024.104-.002.263.038.302.156-.259-.08-.551.25-.756.571.155.272-.511.468-.59.933l.071-.011c-.389.191-.033.515-.438.642l.117.27c-.398.011.012.509-.26.701l-.07-.031c-.15.226 0 .409-.115.623l.035.033c-.223.524-.095.879-.377.815.184.23.229-.509.489-.146-.633 1.713-.461 3.73.21 5.433.198.149.288.254.409.255.025.185.246.633.184.846-.02-.058.185.044.239.123.238.245-.124.471.149.742.003-.169.065-.257.179-.265-.062.384.144.748.251 1.114.008-.073 0-.172.08-.207 0 .478.505.53.593.898l.046-.2c.525.3-.167.34.248.639-.036-.124.041-.133.08-.192.065.539.63 1.044.859 1.465l.035-.065c.293.421.84.583 1.186 1.032.207.058.194-.361.58-.007-.211.26.646.635.183.767.403.231 1.047.544 1.291.729-.124-.195.392-.268.068-.447l.349-.063c.027-.137-.28-.077-.118-.192.157.087.583.426.757.446.218.324.351.806.855 1.081-.193-.23.275-.278.134-.405l.486.924c.169.09.126-.231.358-.071-.043.081.054.164.111.255.08-.017.739.293.913 0 .117-.1-.276-.147-.042-.204.331.096.315.208.648.307l.019-.041c.23.014.615.316.33.426-.159-.034.107-.175-.146-.147.107.229.49.391.829.488-.103-.083-.07-.165-.096-.268.391.402.875.546 1.38.727-.019.156-.145-.309-.235-.239.699-.116 1.334.508 1.936.276-.088-.041-.077.213-.065.17.326.029.336-.199.536-.085.035-.13.259.085.472.15.105.096.062-.053-.124-.095.287.145 1.498.387 2.208.227-.018.087.424.341.588.337l-.061-.208c.151-.117.543.04.571-.135.341.264-1.323-.268-.86-.056.123-.166.644.355.547.071.322.022.641.272.947.052-.09.038-.264-.272-.005-.27.458.014.132.092.506.142l.237.073c.022.2.411-.048.248.184.049-.167.676.069.611-.261l-.079-.257c.199.008.341.258.506.366l.06-.122c.061.398.471-.058.735.239.406-.161 1.068-.138 1.233-.403.335.074.655.199 1.005.04-.079-.025-.18-.017-.213-.099.209-.158.28-.064.5-.039-.057-.051.414-.316.637-.502.336.06.272.291.33.414.207-.427.945.043 1.223-.391-.124-.026-.5-.076-.266-.237.184-.453.642.141 1.053-.158l-.026.344c.153-.24.725-.023.584-.323.187.064.502-.274.548.047.665-.465 1.86-.49 2.093-1.193.125.01.362-.142.373.03-.104.233-.29-.023-.308.114.097-.028.152.045.179.083.199-.153.361-.255.049-.409.404-.402.722.264 1.301-.144-.086-.106-.061-.173.13-.24l.45.039c.373-.26.084-.39-.01-.592.225-.082.471-.233.646-.14l.112-.386c-.082.28.236.023.361.015l-.125.008c-.011-.105.256-.188.393-.232.043.135-.172.321-.286.431.156.026.31-.088.512-.069-.156-.152.245-.347.391-.473.154-.161.313.027.363-.015-.059-.098.286-.217.055-.253-.082.01-.08.187-.239.172.073-.151-.052-.306.276-.353.248-.036.199.39.476.035-.125.019-.193-.042-.311-.058l.264-.316.131.152c.016-.071-.025-.064-.021-.099.227.107.518-.33.738-.199.173-.114.248-.381.384-.521l-.04.011c.105-.245.407-.37.64-.415l-.038-.026c.084-.103.324-.296.524-.33.13-.341-.454-.615-.021-.69.237-.225.637-.114.635.068.317-.523.987-.886 1.102-1.509.119-.021.128.054.277-.063.41-.803 1.268-1.499 1.177-2.355-.186.2-.189-.072-.29-.125.252-.117-.063-.306.25-.25.156.093.246.109.205.372.344-.443.644-1.229.545-1.579.035.17.121.077.209-.022-.287-.053-.212-.441-.027-.704l.183.004-.118-.235c.086-.096.407-.036.288-.374l-.17-.126c.19-.275.504-.685.409-1.047l-.212-.306c.051-.138.239-.369.276-.108-.114-.595-.145-.966-.358-1.152.627-.985.419-2.459.221-3.599l-.119.059c-.201-.28.183-.207.037-.402-.098.125-.328-.171-.415.1-.248-.393.075-.607.055-.91.155-.092-.045.259.151.145.047-.069-.293-.568-.064-.717-.127-.079-.286.069-.372.16l.049-.305c-.375-.212-.321.898-.771.679l-.024-.242c-.316-.127-.132.692-.373.158.069-.284.326-.621.526-.443-.154-.532.48-.457.203-1.021-.21-.093.173.471-.076.443-.313-.181-.131-.575-.307-.782.208.219.347-.115.309-.313-.246-.236-.135.299-.348-.097.103-.135.023-.574.271-.293.245-.328-.323-.371-.238-.719-.285.008-.211.68-.592.334.244-.055-.084-.684.354-.654-.172-.133-.332-.041-.367.156-.272-.143-.051-.818-.47-.615l.13-.227c-.107-.029-.234-.09-.434-.105-.169-.172-.318-.795-.56-.53-.028-.082-.434-.472-.11-.496.357.149.156.418.535.33-.373.006-.334-.396-.421-.615l-.119.078c-.052-.125-.265-.318-.237-.466.024.117-.078.158-.176.125l.034-.239c-.336-.386-.331.215-.674-.121l.187.346c-.041-.076-.291-.016-.431-.203.046-.205.048-.492.071-.662-.175-.235-.222.105-.329-.219l.152.4c.004.084-.369.121-.65-.088-.156-.164-.323-.574.047-.488-.157-.092-.435-.111-.383.078-.319-.252.153-.152-.095-.426-.19.041-.669-.013-.979.03l.162.457-.203-.11c.142.373-.221.104-.198.428-.155-.031-.27-.221-.381-.332.609-.223-.225-.736.053-1.051-.566-.347-.735.744-1.125-.084.139-.056-.053-.459.287-.199-.388-.101-.117-.494-.623-.484.278.254-.482.275-.084.642.012-.142.293.004.351.069-.203.086-.105.381-.476.246-.217-.104-.53-.205-.422-.389.078-.215.348.129.27-.135-.445-.215-.62.094-.7-.351.287.119.43-.082.471-.235l-.324-.195.026.166c-.591-.06-.092-.312-.651-.435l-.33.222c.067.272.818.117.61.49-.351-.08-.413-.343-.771-.302l.226.136c-.13-.017-.382.498-.801.077-.229-.178-.036-.161-.008-.315-.553-.166-.693-.359-1.055-.461.022.307-.648-.066-.301.299.214-.162 1.033.047 1.168.369-.281.311.45.043.485.426-.445-.086-.5.268-.619.48-.124-.007-.221-.131-.285-.181-.007-.227.15-.19.207-.41-.504-.047-.956-.27-1.198-.512-.184.084-.166.309.026.357a7.51 7.51 0 0 0-1.782-.222c.407-.323-.615-.145-.335-.418.31-.051.603-.28.453-.455-.193.004-.012.156-.1.224-.221-.219-.409.278-.614-.054.532.168.059.445.13.734-.371-.194-.004.201-.387.164a4.94 4.94 0 0 0-1.259-.451c-.557.236-1.366-.08-1.85-.11-.256.135-.099.457-.373.506-.319-.017.249-.338-.229-.205l.044.065c-.142-.078-.872.189-1.001-.272l.139.35c-.09.029-.17-.053-.242-.092-.006.111-.11.211.031.289-.295.227-.609-.047-.925-.06l.206-.204c-.539-.166-.904.034-1.428-.043l.016.2-.312-.121c.076.193-.21.318-.374.156l.806.49c.226-.115-.243-.242-.103-.437.122-.172.606-.112.682.081-.185.02-.193-.023-.337-.097-.063.277.218.269.355.457-.096-.014-.235.07-.254-.02.188.139.379.163.695.172-.213-.111.119-.17.039-.25.022.244.322.323.715.258.285-.275.728.205 1.18.139a1.542 1.542 0 0 0-.678-.567c.289-.115.317.016.607-.099.133.189.221.474.586.597l.028-.181c.332.101.319.377.746.349.73-.045 1.482-.013 2.033.03l.037-.18c.271.422 1.013.236 1.402.463.72-.068 1.481.385 1.885.144 1.196.371 2.189.764 3.4 1.098l-.113-.32c.155.25.19-.094.387.023-.311.104.191.375.273.584.602.002 1.172.5 1.482.918l.104-.152c.27.517.907.547 1.412.892.102-.019.295-.088.43.037.089.416.226.516.415.993.218.257.711.556.976.797.404 1.273 1.276 2.278 1.329 3.687l.232.039c-.085 1.331.444 2.941.153 4.042l.368-.093c.109.364-.111.805-.374.686.053.358-.314.819-.05 1.089.008.365-.219.399-.361.659-.096.695-.133.971-.482 1.541l.049-.157c.105-.035.253.015.204.176-.201.187-.3.882-.59.466-.033.782-.984 1.312-1.089 2.071-.058-.117-.188.006-.297.013-.385.478-.623 1.159-1.151 1.355-.029.113.26.03.083.222-.141.076-.112-.109-.292-.025-.87.542-1.416 1.556-2.262 2.036-1.525.756-3.058 1.663-4.625 2.2l.049.075c-.619-.1-1.111.77-1.693.418-.099.118-.463.188-.322.321-.479-.08-1.146.528-1.836.401l.166.006c-.586.351-1.207.165-1.845.473.074.025.203.027.238.11-.235.224-.676-.263-.759.171-.152.015-.136-.198-.042-.197-1.458.397-3.125.136-4.674.101-1.123.204-.078.71-.963.355-.075.079-.047-.164-.063-.076-.338-.133-.558.449-.789.219.114-.256-.152-.153-.149-.311-.696.125-.868.402-1.388.115l.027.143c-.59-.478-1.347-.381-1.803-.899-3.346-.719-6.499-1.938-8.765-4.039-2.236-1.958-3.779-4.809-4.019-7.636-.274-.702-.315-.792-.032-1.536-.065.021-.091.067-.132.005.3.018.16-.541.449-.547.203-1.109.748-2.053 1.327-3.097-.13.145-.374.115-.251-.078l.294-.104-.049-.076c.125-.109.341-.172.333.013 1.791-2.364 3.76-4.931 6.502-6.392.57-.481 1.566-.817 2.305-1.026C-3.471 1.346-1.033.891 1.535.715 1.535.715 1.086.012 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(202.236 87.088)',
              }),
              v.createElement('path', {
                d: 'M0 0c.091-.146.389-.229.152-.426C.122-.287-.031-.131 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(204.366 87.06)',
              }),
              v.createElement('path', {
                d: 'M0 0c.007.045.122-.049.15-.07-.098-.02-.179-.153-.267-.084.101.019.078.088.117.154',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(212.39 85.84)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.012-.133-.441-.303-.703-.357Z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(214.47 86.01)',
              }),
              v.createElement('path', {
                d: 'M0 0c.193-.072.161-.141-.069-.187C-.1-.123-.032-.072 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(216.512 85.838)',
              }),
              v.createElement('path', {
                d: 'M0 0c.16.039.258-.02.356-.076C.323.033-.005-.225 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(216.585 86.159)',
              }),
              v.createElement('path', {
                d: 'M0 0c.099.043.264.248.416.17C.275.195.004-.213 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(220.904 87.165)',
              }),
              v.createElement('path', {
                d: 'M0 0c.062.029.098.029.143.107.136.026.08-.134-.002-.209Z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(222.685 88.344)',
              }),
              v.createElement('path', {
                d: 'm0 0 .224.012-.065-.118Z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(212.613 115.986)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.189-.138-.17.081-.209.09C-.025.155-.243-.087 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(197.075 116.314)',
              }),
              v.createElement('path', {
                d: 'm0 0 .049.04.14-.23z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(189.62 112.404)',
              }),
              v.createElement('path', {
                d: 'M0 0c.225.068-.121.227.146.107C.117 0 .074-.082 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(205.515 84.801)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.634.818.327 1.734-.335 2.521-.043.09.377.016.256.221-.559.725-.59 1.867-.642 2.951l.119-.011c-.002.207-.401.271-.434.468.064.035.117-.011.184.075-.214-.055-.268.257-.45.253.034.106.186.18.217.311l-.269-.021c-.657-.024-.35.662-.819.867.058.013.116 0 .145.058-.63.389-1.096 1.071-1.622 1.608.086.025.228.095.281.187-.228-.119-.412.03-.57.16.158.229-.395.133-.418.409l.059.019c-.324-.023-.025.301-.374.219l.101.211c-.344-.156.007.314-.231.318l-.058-.047c-.153.057-.044.221-.169.285l.027.036c-.253.179-.187.437-.417.263.127.217.255-.168.433.157-.757.642-1.33 1.48-1.763 2.359.053.156.054.234.14.307-.094.06-.207.304-.378.32.019-.028.105.121.095.172.023.203-.372.043-.34.271a.286.286 0 0 1 .288.043c-.279.057-.343.274-.497.422.059-.01.106-.041.186 0-.342.096-.094.379-.301.502l.176-.01c.103.356-.353-.033-.318.258.068-.043.123 0 .191.012-.357.133-.381.547-.551.75l.07.01c-.115.246-.107.537-.32.785.04.121.404.068.262.318-.338-.092-.232.436-.57.188.012.253.07.656-.069.793.143-.083.381.191.442.001l.175.186c.137.002-.021-.16.141-.082-.03.094-.209.353-.17.449-.232.145-.638.252-.732.547.152-.121.351.131.424.045l-.705.33c-.034.098.257.053.146.188-.086-.018-.151.039-.23.074.035.043-.106.416.218.49.125.057.078-.158.189-.035-.014.183-.126.182-.142.367l.043.008c.043.125-.158.349-.332.203-.006-.086.195.047.107-.086-.195.072-.261.287-.275.477.057-.063.144-.049.238-.069-.271.237-.368.502-.491.785-.157 0 .29-.099.21-.142.207.365-.367.748-.025 1.051.024-.051-.224-.026-.18-.022.03.176.256.164.178.277.133.01-.035.145-.069.264-.093.063.067.027.075-.074-.104.164-.271.834-.057 1.201-.088-.002-.309.258-.293.346l.203-.051c.127.068-.002.293.174.293-.238.207.172-.732-.006-.467.175.051-.306.377-.03.301.002.174-.218.367-.017.516-.037-.045.276-.17.269-.03-.021.25-.095.08-.136.287l-.062.135c-.198.033.062.217-.175.153.169.009-.042.375.283.302l.254-.068c-.002.107-.245.211-.345.31l.123.02c-.392.076.076.248-.209.424.174.201.108.57.37.629-.09.193-.206.381-.088.56.03-.047.033-.103.115-.133.136.1.037.151-.008.278.049-.037.273.195.457.293-.069.191-.295.185-.42.232.428.057-.113.537.289.639.036-.072.119-.293.254-.18.424.047-.195.381.057.574l-.332.032c.226.052-.078.418.234.297-.09.117.186.257-.127.326.36.324.136 1.045.795 1.08-.026.074.082.193-.083.222-.206-.029.065-.173-.064-.166.013.055-.064.096-.103.118.119.095.18.181.381-.028.295.192-.391.475-.13.774.116-.067.173-.059.196.049l-.129.281c.143.201.331.004.537-.082.014.133.084.271-.045.394l.315.024c-.229-.018-.082.154-.108.232l.026-.078c.096-.021.1.139.103.221-.132.045-.242-.071-.31-.129-.062.103-.002.187-.072.32.183-.123.22.123.301.197.101.08-.108.205-.083.233.102-.051.115.158.209.004.012-.053-.144-.03-.089-.133.115.029.286-.072.239.133-.034.156-.399.179-.159.312l.134-.207.209.129-.17.106.094-.028c-.15.158.112.317-.068.477.037.105.236.129.31.207l.004-.028c.166.049.186.235.126.399l.034-.027c.049.05.106.209.053.349.217.069.66-.367.549-.062.084.152-.16.445-.303.457.295.181.264.652.695.701-.037.084-.095.092-.074.195.351.317.434.93.967.967-.019-.16.147-.137.236-.209-.068.203.223-.018.014.215-.143.109-.203.176-.34.119.104.279.356.629.608.611-.117.002-.115.082-.111.162.199-.211.376-.095.415.082l-.111.137.203-.053c.003.08-.217.303.017.295l.167-.099c.013.213.01.551.241.566l.28-.086c.035.072.022.276-.125.237.324.097.475.216.692.117-.018.791.629 1.244 1.14 1.58l.065-.117c.205-.002-.067.236.08.23.031-.133.26-.148.246-.35.268.024.109.364.2.502-.079.157-.036-.162-.138.036-.013.066.34.08.224.318.106-.051.175-.238.208-.344l.045.19c.307-.157-.015-.686.343-.893l.079.109c.247-.16-.094-.451.209-.345.037.185-.074.574-.237.597.196.231-.233.608.044.77.151-.078-.192-.176-.026-.324.229-.084.19.259.347.261-.183.014-.21.299-.148.387.207-.029.034-.264.251-.178-.044.149.089.348-.128.352-.098.336.262.033.244.324.184-.176.064-.597.346-.584-.15.184.123.424-.162.662.122-.009.219-.166.223-.326.191-.058.107.537.363.152l-.066.235.282-.151c.11.055.216.479.362.153.02.051.279.17.076.344-.224.05-.103-.26-.338-.006.232-.186.213.154.27.287l.073-.119c.032.078.173.117.146.273-.01-.096.051-.17.108-.178l-.027.223c.195.186.206-.318.409-.178l-.107-.213c.023.045.179-.107.261-.005-.034.191-.044.435-.064.585.099.127.14-.177.194.053l-.079-.277c0-.067.234-.252.4-.184.084.102.155.424-.058.457.086.037.25-.029.232-.185.171.135-.101.183.027.359.116-.094.395-.185.585-.314l-.065-.368.115.04c-.058-.297.141-.159.151-.446.09-.011.15.11.202.205-.37.328.061.659-.128 1.01.291.223.494-.848.638-.133-.085.08-.015.428-.185.242.213.032.021.44.312.338-.133-.199.303-.339.114-.629-.021.129-.173.067-.199.012.125-.119.097-.383.3-.334.115.067.284.113.203.309-.068.217-.186-.071-.168.17.231.136.364-.188.363.228-.151-.07-.254.147-.292.299l.164.137.002-.155c.33-.033.019.286.325.317l.21-.256c-.006-.268-.453.01-.295-.385.192.03.202.25.406.188l-.113-.114c.072.004.27-.521.457-.142.11.156.004.154-.028.307.292.119.349.296.541.367.02-.311.35.05.197-.307-.134.152-.571.033-.612-.277.19-.328-.246-.006-.225-.379.24.049.308-.303.398-.522.067 0 .108.112.138.155-.02.222-.104.199-.159.42a.685.685 0 0 1 .612.427c.109-.086.122-.308.022-.353.299.15.645.164.958.133-.253.33.324.127.145.406-.175.058-.358.293-.291.463.106-.01.02-.157.076-.227.101.211.25-.283.334.039-.28-.152.007-.441-.006-.726.185.183.02-.2.225-.172.184.179.423.334.648.424.321-.227.736.089.998.132.147-.127.08-.449.23-.498.172.014-.153.338.114.204l-.021-.065c.073.076.48-.199.528.262l-.058-.348c.049-.029.088.051.125.09.009-.113.069-.213-.003-.289.169-.231.324.051.493.066l-.118.2c.285.169.489-.024.768.058l-.003-.199.165.125c-.037-.195.118-.315.204-.149l-.42-.505c-.123.113.123.246.043.439-.069.17-.328.106-.362-.088.1-.017.102.026.177.102.042-.278-.108-.272-.175-.461.051.013.127-.069.135.021-.096-.14-.197-.164-.363-.177.107.113-.07.169-.031.25-.002-.245-.159-.327-.368-.266-.166.277-.378-.197-.621-.127.078.25.19.453.332.559-.162.119-.17-.014-.332.105-.06-.187-.091-.467-.278-.594l-.025.18c-.169-.115-.145-.385-.372-.361-.391.039-.786-.01-1.081-.026l-.035.18c-.109-.408-.523-.213-.715-.41-.407.144-.759-.322-1.007-.055-.616-.289-1.133-.553-1.81-.642l.036.281c-.062-.219-.123.133-.225.056.19-.154-.077-.322-.105-.505-.344.091-.639-.256-.818-.522l-.072.168c-.129-.414-.532-.24-.87-.305-.066.055-.191.192-.277.139-.055-.328-.137-.373-.291-.658a1.572 1.572 0 0 0-.7-.16c-.44-.698-1.226-.793-1.663-1.477l-.166.145c-.303-.803-1.299-.944-1.557-1.596l-.203.314c-.217-.052-.254-.38-.039-.535-.217-.054-.221-.461-.52-.332-.191-.09-.054-.287-.134-.433-.382-.178-.479-.289-.65-.637l.075.057c-.035.085-.15.193-.226.134-.01-.177-.395-.343.025-.517-.443-.153-.412-.852-.923-.948.117-.044.074-.136.113-.214-.209-.274-.653-.416-.603-.776-.077-.013-.126.19-.206.074-.004-.095.129-.087.133-.211-.086-.591-.763-.841-.975-1.31-.22-.897-.63-1.744-.953-2.547l-.079.039c.21-.377-.521-.555-.11-.93-.098-.043-.11-.242-.258-.144.164-.289-.395-.572-.196-.977l-.023.094c-.275-.285-.13-.629-.343-.953-.03.045-.046.117-.13.146-.189-.107.309-.404-.119-.398-.009-.08.2-.096.196-.045-.27-.762-.215-1.641-.156-2.467-.286-.568-.713.024-.424-.47-.084-.034.16-.039.072-.041.107-.188-.488-.254-.274-.395.262.037.141-.094.298-.105-.188-.354-.427-.424-.247-.719l-.134.025c.351-.347.152-.738.625-1.012.136-1.835.598-3.539 1.117-5.173.406-1.721 1.139-2.998 2-4.614-.069-.548-.05-.576.334-.879-.059-.017-.088-.001-.114-.058.256.15.226-.26.482-.133.37-.598.805-1.045 1.241-1.646-.094.078-.322-.016-.225-.12l.238-.009-.053-.069c.092-.05.272-.05.29.086C-.591 9.094.114 7.193.827 5.246c.098-.478.398-1.107.502-1.662C1.328 1.875.745.611.817-1.002c0 0-.713.391-.817 1.002',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(191.832 39.739)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.05.146-.209.221-.086.424C-.067.285.015.133 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(205.246 84.76)',
              }),
              v.createElement('path', {
                d: 'M0 0c.001-.045-.07.051-.088.072.053.02.086.149.14.078z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(200.866 85.95)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.008.139.213.285.354.312Z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(199.738 85.88)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.116.086-.105.152.02.178Z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(198.585 86.165)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.085-.023-.146.041-.206.105C-.176-.004-.021.221 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(198.577 85.856)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.051-.031-.131-.176-.229-.057C-.139-.133-.02.197 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(196.216 85.587)',
              }),
              v.createElement('path', {
                d: 'm0 0-.084-.033c-.084.031-.056.144-.008.176Z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(195.251 85.016)',
              }),
              v.createElement('path', {
                d: 'm0 0-.031.129L.09.076Z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(183.091 70.377)',
              }),
              v.createElement('path', {
                d: 'M0 0c.089-.109-.118-.086-.137-.107C-.156-.004.027-.137 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(182.18 62.012)',
              }),
              v.createElement('path', {
                d: 'm0 0-.014.031.265.053Z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(183.437 57.643)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.237-.061.128-.231-.155-.104C-.123.004-.077.084 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(201.567 85.28)',
              }),
              v.createElement('path', {
                d: 'M0 0c.004.992.941 1.484 1.271 2.309.047.091.258-.274.343-.055.128.992 1.408 1.598 2.387 1.816l.008-.119c.202.031.205.44.403.498.039-.058 0-.115.092-.174-.073.204.254.264.241.44.112-.031.196-.178.332-.205l-.031.261c-.032.649.681.352.897.825.01-.059-.004-.119.053-.149.416.651 1.207 1.037 1.807 1.539.015-.09.068-.24.154-.3-.092.24.082.416.235.564.212-.18.185.385.466.383l.012-.061c.014.326.31 0 .266.354l.205-.117c-.125.353.324-.034.353.203l-.044.06c.073.147.234.028.313.145l.033-.029c.21.234.472.15.309.39.217-.14-.196-.238.129-.435.715.736 1.598 1.287 2.434 1.826.162-.033.246-.026.328-.094.043.111.262.283.242.459-.022-.027.14-.076.19-.053.211.032-.043.373.191.401a.274.274 0 0 1 .114-.266c-.01.283.188.4.295.582.009-.055-.01-.107.056-.17 0 .328.349.217.389.457l.058-.164c.401.065-.207.285.155.414-.024-.08.023-.127.055-.185.045.396.433.541.579.765l.03-.062c.201.183.492.267.656.541.135.002.221-.342.424-.127-.211.244.252.451-.112.615.198.123.551.307.578.496.018-.162.385-.189.262-.355l.26-.024c.084-.109-.15-.088.012-.168.066.088.184.399.293.432-.008.279-.214.607-.067.892.018-.191.352-.142.338-.255l-.258.726c.051.096.227-.138.247.035-.075.049-.079.135-.108.217.072.024.162.373.455.221.131-.035-.032-.17.125-.147.102.155.011.221.107.371l.04-.019c.113.078.074.351-.161.33-.052-.059.194-.066.041-.117-.115.142-.074.357.002.527.021-.08.104-.111.176-.174-.133.336-.07.604-.087.891-.142.066.228-.201.136-.207.38.332-.153.564.487 1.119-.001-.057-.19.111-.154.088.095.127.276-.01.262.131.114-.067.032.14.051.256-.052.099.069-.01.034-.102-.016.201.103.809.452 1.016-.079.033-.183.322-.148.404l.174-.119c.141.019.095.271.26.211-.151.269-.086-.733-.162-.426.185-.021-.162.453.073.285.06.162-.087.408.153.481-.048-.03.206-.244.246-.11.063.241-.062.104-.046.315l-.03.146c-.181.088.11.192-.132.196.164-.038.044.363.341.212l.229-.13c.023.105-.188.265-.262.384l.124-.011c-.365.162.129.222-.109.457.215.158.229.527.502.533-.046.205-.12.404.035.556.02-.05.011-.103.086-.146.157.072.071.139.054.27.044-.045.318.144.477.218-.065.198-.285.215-.405.276.416.011-.115.5.279.564.037-.066.119-.277.253-.178.424.039-.194.366.06.541l-.336.022c.228.053-.086.363.234.271-.068.186.173.278-.137.344.346.332.039.973.655 1.111-.041.067.043.2-.125.198-.196-.065.097-.153-.03-.168.002.052-.082.078-.125.092.104.109.123.197.379.043.221.244-.513.353-.359.662.131-.03.182-.008.172.091l-.209.2c.074.207.313.105.537.099-.027.119-.001.266-.162.321l.295.142c-.211-.111-.127.106-.18.17l.051-.062c.097.023.047.175.023.252-.14-.018-.205-.172-.25-.256-.096.068-.066.172-.178.263.219-.033.169.213.198.317.054.119-.189.14-.18.176.114 0 .031.197.186.097.034-.041-.118-.09-.02-.16.09.076.287.061.151.229-.101.126-.435-.016-.283.214l.214-.13.127.214-.199.02.095.017c-.21.069-.038.354-.289.383-.029.084.124.176.141.26l.02-.016c.111.106.025.247-.114.317h.043c.014.056-.023.185-.142.234.144.16.744.172.49.293-.014.158-.365.154-.489.067.072.416-.326.634-.081 1-.088.027-.132-.012-.198.07-.018.461-.435.894-.13 1.35.112-.116.199.033.31.058-.199.072.153.172-.156.147-.174-.049-.263-.057-.307-.202-.154.254-.244.674-.111.86-.065-.094-.132-.045-.198.004.276.125.311.056.128.574l-.182.004.153.045c-.071.023-.385-.02-.247.049l.177.052c-.191.059-.378-.041-.305.16l.163.241c-.06.052-.258.093-.261-.055-.002.33-.075.508.08.689-.733.354-1.065 1.493-1.022 1.569l.121.045c.09.144-.205-.03-.162.017.132.051.192.151.377.203.016.131-.31-.06-.384-.084-.135-.111.113.053-.063-.082-.05-.046.033.143-.14-.043l.265.301-.113-.054c.088.341.492.255.672.617l-.096.041c.09.295.42.013.265.301-.16-.018-.525-.194-.478-.399-.328.219-.556-.342-.899.051.025.197.312-.276.401-.053.002.295-.404.252-.479.459.065-.226-.282-.228-.429-.117-.076.324.363-.137.076.412-.16-.033-.321-.035-.369-.111-.337-.123.027.082-.224-.018.186.152.539.199.579.35-.199-.125-.324-.067-.582-.309.051.057.188.182.313.24.064.155-.316-.177-.067.194l-.203-.135.057.305c-.087.086-.518.039-.256.285-.056 0-.25.199-.346-.049.022-.225.275-.006.109-.309.104.276-.21.143-.348.147l.086.109c-.386.352-.212.182-.419.186.086.027.148.097.148.142l-.196-.103c-.206.049.252.269.077.351l.223.014c-.049-.004.053.172-.061.192-.166-.106-.377-.223-.502-.309-.125.006.122.184-.082.109l.252.076c.06.03.162.288.058.385-.112.02-.381-.097-.361-.273-.045.043-.033.201.094.271-.148.059-.121-.174-.283-.174.045.129.057.428.063.592l.308.198-.08.052c.266.158.053.188.277.379-.043.067-.175.029-.275-.004-.061-.445-.502-.42-.637-.795-.222-.015.291.932-.179.475-.006-.113-.208-.346-.049-.301-.102.104-.219-.334-.283-.105.15.097.006.451.236.586-.053-.12.057-.145.096-.123-.001.173.156.367.005.447-.105.012-.232.074-.265-.137-.055-.223.135-.049.018-.24-.165.025-.098.314-.31-.037.167-.004.161-.242.128-.395l-.207-.052.066.14c-.279.17-.143-.25-.428-.148l-.076.322c.121.238.401-.203.434.219-.186.056-.291-.137-.447.006l.149.054c-.065.028-.018.586-.353.324-.165-.093-.068-.138-.103-.291-.314.02-.439-.117-.64-.099.104.291-.333.101-.054.363.058-.197.503-.273.67-.012-.034.379.227-.099.368.245-.241.06-.154.408-.143.644-.063.031-.148-.053-.196-.08-.075-.209.012-.225-.03-.447a.673.673 0 0 1-.735-.127c-.064.127.011.334.12.332a2.382 2.382 0 0 0-.943.236c.12-.394-.351-.012-.278-.334.142-.113.226-.392.105-.531-.094.045.036.154.01.238-.166-.166-.133.35-.32.074.309.051.144.416.253.68-.24-.109.049.195-.156.238-.24-.103-.335-.205-.783-.185-.289.332-.784.156-.545.129-.223.072-.217.41-.394.408-.192-.072.242-.281-.093-.24l.013.07c-.086-.141-.544.133-.599-.326l.065.348c-.054.029-.097-.051-.14-.09-.009.111-.071.211.006.289-.17.224-.34-.051-.518-.059l.113-.203c-.301-.16-.503.041-.795-.029l.01.199-.174-.119c.043.193-.116.318-.208.156l.45.488c.125-.117-.136-.24-.058-.437.067-.172.337-.117.381.074-.104.022-.109-.021-.189-.094-.034.278.122.268.2.453-.054-.011-.131.073-.142-.015.105.135.213.156.389.164-.12-.11.066-.172.021-.252.008.246.195.316.389.256.145-.26.363.166.531.158-.008-.285-.111-.482-.251-.588.17-.105.175-.006.347-.078.037.205.019.5.127.658l.071-.168c-.128.069.291.494.598.371.686-.218.682-.23 1.168-.345l-.024-.18c.249.346.599.019.865.139.355-.256.894-.014 1.023-.364.748-.066 1.257.127 2.106-.347l-.214-.192c.196.123.037-.183.176-.207-.075.27.277.172.445.27.237-.369.828-.328 1.178-.436l-.103-.152c.455.035.557-.486.797-.811-.022-.084-.098-.25-.001-.32.329.1.556-.207.715-.053a1.82 1.82 0 0 0 .432-.648c1.317-1.197.642-.742 1.93-1.692l-.108-.199c1.235-1.019.674-1.99 1.213-2.283l-.359-.105c0-.239.316-.387.523-.221-.017-.156.447-.549.225-.883.033-.35.285-.383.4-.688-.078-.025.01-.482.154-.771l.002.104c-.089.027-.242 0-.244-.106.132-.127.022-.566.418-.326-.159-.469.416-.963.174-1.461.109.06.154-.041.244-.07.101-.446-.074-.729.148-1.139-.053-.086-.211.086-.207-.111.053-.11.154.023.231-.114.298-.836-.143-1.636-.139-2.095.172-.844-.009-2.309-.193-3.27l-.084.029c.257-.412-.504-.72-.069-1.107-.095-.072-.093-.174-.253-.139.146-.34-.447-.724-.283-1.215l-.014.118c-.309-.346-.166-.815-.489-1.102-.021.051-.017.129-.095.172-.216-.082.206-.475-.221-.398-.03-.084.174-.137.184-.083-.481-.742-.604-1.732-.892-2.654-.504-.519-.644.266-.604-.363-.096-.004.129-.1.046-.068-.007-.25-.591-.081-.472-.315.26-.07.076-.158.211-.24-.373-.307-.611-.246-.624-.656l-.1.099c.042-.629.073-.271.207-1.064a12.433 12.433 0 0 0-3.923-5.578c-1.193-.547-3.158-2.77-4.947-3.426-.472.129-.597.051-.941-.322-.014.058.008.087-.053.115.137-.262-.305-.211-.197-.475-.686-.34-1.248-.761-1.924-1.16.092.09.025.33-.092.238l-.039-.24-.062.059c-.066-.088-.089-.272.047-.301C7.331 3.887 5.291 3.561 4.082 2.52c-.394-.163-.826-.602-1.03-.959C1.836 1.047 1.167.273.133-1.291.134-1.291-.258-.58 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(193.43 41.432)',
              }),
              v.createElement('path', {
                d: 'M0 0c.051-.148.217-.229.084-.426C.068-.287-.018-.133 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(201.85 85.31)',
              }),
              v.createElement('path', {
                d: 'M0 0c.015.041.049-.072.058-.098-.055 0-.129-.111-.156-.027.056 0 .062.07.098.125',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(206 83.749)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.045-.123-.299-.176-.439-.162Z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(207.073 83.428)',
              }),
              v.createElement('path', {
                d: 'M0 0c.068-.129.03-.182-.092-.152Z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(207.993 82.678)',
              }),
              v.createElement('path', {
                d: 'M0 0c.088-.016.115-.1.142-.184C.162-.07-.074-.209 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(208.13 82.954)',
              }),
              v.createElement('path', {
                d: 'M0 0c.035-.002.164.061.111-.07C.133.027-.123-.154 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(209.654 82.022)',
              }),
              v.createElement('path', {
                d: 'm0 0 .049-.043C.04-.121-.061-.154-.096-.137Z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(210.34 81.723)',
              }),
              v.createElement('path', {
                d: 'm0 0-.033.115.122-.047Z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(215.029 65.46)',
              }),
              v.createElement('path', {
                d: 'M0 0c.028-.133-.144-.014-.169-.021C-.14.072-.038-.125 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(211.725 57.88)',
              }),
              v.createElement('path', {
                d: 'm0 0 .025.021.161-.216Z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(209.585 54.163)',
              }),
              v.createElement('path', {
                d: 'M0 0c.047-.233.15.126.072-.152C.001-.121-.054-.076 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(202.083 115.695)',
              }),
              v.createElement('path', {
                d: 'M0 0c.761.689.682-1.188.577-1.757-.016-.098-.228.107-.244-.109.062-.938-1.391-1.639-2.313-1.432l.041.084c-.165-.013-.355-.244-.551-.209-.003.047.055.068.01.132-.041-.143-.336-.068-.418-.175-.074.054-.062.167-.152.228l-.118-.162c-.349-.361-.717.163-1.169.045.031.031.08.05.059.092-.694.035-1.502.413-2.106.927.065.021.156.078.166.153-.133-.09-.383.006-.523.164.083.188-.332.201-.402.468l.044.004c-.259.057-.064.278-.34.294l.06.165c-.25-.035.017.303-.151.387l-.045-.025c-.108.111-.022.227-.109.334l.023.022c-.176.268-.112.474-.283.418.11.142.161-.265.32-.04-.443.906-.526 1.979-.461 2.978.086.111.113.181.187.202-.031.102-.009.376-.101.477.002-.034.103.055.115.106.086.171-.182.222-.067.41.038-.085.094-.12.17-.104-.121.188-.061.41-.076.618l.098-.091c-.129.248.092.391.033.599l.089-.092c.216.267-.202.138-.05.381.017-.071.065-.059.106-.081-.126.29.051.671.058.937l.04-.027c.087.263.261.501.304.816.09.079.231-.149.311.132-.219.097.146.476-.156.446.166.199.445.492.47.677.012-.143.29-.049.197-.234l.194.056c.064-.07-.108-.115.014-.138.047.086.117.395.21.437.011.219-.072.513.115.773-.031-.169.237-.099.202-.2l-.026.623c.065.087.137-.105.202.047-.047.038-.02.106-.014.171.048.006.324.326.496.181.09-.039-.107-.141.033-.13.151.119.112.185.264.307l.021-.021c.117.05.248.311.073.328-.077-.051.098-.09-.043-.119-.007.174.179.33.379.404-.049-.06-.013-.108-.008-.174.167.263.427.437.701.63-.029.101-.051-.227-.109-.192.383.068.774.391 1.146.231-.055-.023-.043.146-.036.116.204.007.198-.145.325-.078.014-.088.16.043.297.08.073.065.031-.038-.084-.059.178.102.947.02 1.33-.2.005.053.342.149.426.087l-.088-.107c.045-.118.29-.148.253-.262.263.086-.766.208-.468.202.036-.1.443.051.315-.094.167-.088.406-.047.505-.252-.037.047-.227-.089-.09-.156.245-.113.098.019.313-.052l.152-.024c.084.106.204-.14.201.034-.02-.089.343-.203.19-.353l-.137-.112c.092-.066.254.018.373.015l-.021-.087c.189.19.189-.201.434-.143.129-.225.451-.437.384-.643.174-.088.356-.159.444-.358l-.141.029c.022-.151.096-.132.206-.199-.048-.004.04-.299.052-.464.166-.1.247.031.33.067-.131-.286.414-.336.323-.64-.064.034-.248.15-.225-.01-.137-.275.339-.173.372-.462l.153.165c-.049-.166.314-.269.103-.357.109-.039.078-.308.252-.181.032-.466.592-.882.343-1.286.058-.041.085-.194.173-.12.066.141-.135.094-.076.162.027-.048.086-.034.114-.027.01-.142.038-.243-.175-.203-.002-.32.453-.128.53-.505-.088-.02-.108-.059-.051-.154l.224-.133c.057-.237-.136-.203-.271-.264.07-.11.12-.258.244-.272l-.117-.214c.084.156.121-.064.178-.107l-.057.042c-.051-.044.039-.168.084-.231.08.049.061.204.056.291l.212-.193c-.148-.024-.022-.232 0-.333.013-.119.169-.078.176-.111-.07-.029.052-.184-.079-.135-.036.028.039.11-.045.149-.028-.091-.156-.128-.011-.245.108-.089.261.127.251-.119l-.179.061V2.7l.129.036-.053-.042c.154-.012.15-.292.316-.286.047-.096-.007-.243.002-.347l-.015.015c-.039-.146.054-.29.17-.362l-.03-.004c.01-.069.075-.219.172-.277-.047-.198-.463-.212-.25-.344.053-.166.31-.19.371-.095.002-.331.31-.612.193-.955.064-.028.089.01.145-.071.078-.461.424-.902.274-1.327-.092.114-.131-.028-.203-.05.144-.075-.084-.161.125-.146.113.043.173.048.183.187.14-.25.257-.656.191-.832.032.088.085.04.136-.01-.192-.029-.163-.232-.055-.364l.12.008-.089-.126c.053-.048.257-.004.189-.179l-.109-.073c.139-.13.359-.311.311-.5l-.132-.177c.032-.068.155-.169.178-.029-.045-.315-.023-.505-.15-.629.445-.423.596-1.154.678-1.743l-.089.001c-.052-.172.166-.053.126-.174-.092.035-.156-.154-.279-.049-.051-.241.203-.261.269-.4.117-.002-.096.104.055.102.045-.018-.031-.327.146-.331-.056-.068-.191-.047-.266-.029l.108-.122c-.17-.203-.429.317-.643.096l.049-.12c-.158-.151-.263.294-.267-.03.109-.12.381-.193.434-.059.101-.276.435-.06.478-.371-.086-.1-.07.242-.201.159-.112-.169.131-.277.106-.414.038.154.235.062.284-.026-.052-.17-.181.075-.159-.149.107-.021.219-.213.255-.026.241-.044-.02-.241.178-.335-.145-.097-.409.171-.444-.085.147.063.264-.268.467-.105-.026-.103-.144-.13-.252-.075-.068-.151.341-.29.045-.38l.166-.024-.142-.199c.027-.119.267-.36.029-.382.027-.035.045-.314.198-.185.083.186-.14.182.072.309-.169-.147.048-.247.119-.339l-.09-.028c.042-.055.035-.194.138-.219a.086.086 0 0 1-.134-.043l.145-.045c.093-.233-.239-.088-.177-.318l-.125.165c.028-.036-.095-.133-.041-.239l.395-.117c.069-.126-.137-.077.006-.192l-.17.153c-.045.02-.199-.141-.178-.317.055-.107.256-.262.309-.075.011-.089-.055-.223-.156-.163.064-.195.135.043.232-.122-.078-.081-.178-.316-.289-.462l-.231.158.01-.12c-.186.136-.123-.093-.312-.024-.02-.085.05-.177.105-.251.266.269.422-.228.679-.132.104-.324-.621-.269-.175-.572.064.063.279-.08.184.121-.009-.208.278-.116.193-.368-.127.169-.249-.215-.432.028.089-.009.053.15.024.187-.093-.094-.268-.008-.247-.216.038-.125.059-.298.195-.261.15.018-.036.193.126.125.076-.25-.149-.312.13-.395-.038.159.114.213.219.219l.081-.183-.104.029c-.043-.308.192-.075.193-.369l-.185-.152c-.179.056.033.43-.24.356.007-.191.155-.243.101-.426l-.068.129c-.004-.069-.366-.164-.123-.416.097-.133.101-.03.207-.026.06-.301.176-.385.211-.58-.207.028.013-.347-.215-.144.109.106.055.546-.149.639-.231-.128.01.241-.24.286.018-.242-.22-.247-.373-.297l.096-.166c.149-.018.139.069.289.085-.014-.273.094-.528.251-.668-.063-.095-.212-.076-.237.031.07-.32.047-.665.015-.974.234.211.066-.338.261-.193.05.167.216.317.325.232-.011-.103-.105-.002-.154-.048.134-.125-.204-.213.006-.332-.086.291-.293.043-.483.088.112-.207-.132.002-.127-.207l.247-.695c-.169-.303.017-.748.033-1.012-.092-.141-.307-.054-.339-.204.009-.176.225.137.136-.126l-.043.024c.05-.078-.131-.479.175-.549l-.232.075c-.02-.049.035-.093.061-.132-.075-.004-.141-.061-.193.016-.153-.163.034-.335.046-.509l.133.114c.115-.296-.014-.498.041-.785l-.133.007.084-.17c-.129.04-.209-.117-.098-.207l-.338.441c.075.125.165-.132.293-.053.114.066.069.333-.06.374-.012-.102.018-.107.068-.185-.185-.036-.181.118-.308.193.009-.053-.045-.129.014-.14-.092.103-.11.209-.12.383.076-.118.114.065.168.022-.164.011-.219.176-.179.393.184.157-.133.4-.088.651a.9.9 0 0 0 .375-.374c.078.159-.009.175.07.334-.125.073-.316.122-.397.324l.122.015c-.067.183-.249.178-.221.414.049.404.037.82.044 1.129l.12.016c-.264.16-.111.567-.233.791.111.4-.142.844.038 1.056-.161.683-.311 1.275-.336 1.99l.187-.103c-.142.116.094.093.055.216-.126-.158-.199.156-.317.234.107.33-.082.723-.233.989l.12.025c-.255.257-.089.618-.086.976.046.047.153.125.129.23-.213.167-.209.268-.359.533-.01.207-.02.542.014.759-.415.719-.383 1.522-.694 2.283l.13.083c-.442.708-.344 1.702-.618 2.322l.25-.009c.036.222-.149.454-.308.362.039.223-.253.473-.089.649-.015.216-.181.224-.262.386-.029.432-.093.579-.249.953l.013-.1c.065-.028.166-.005.153.095-.108.127-.09.549-.329.327.043.458-.408.921-.306 1.387-.067-.058-.11.039-.174.065-.107.36-.061.789-.273 1.037.021.069.156-.05.121.099-.054.078-.1-.03-.172.064-.295.541-.222 1.224-.446 1.733-.482.865-.794 1.825-1.214 2.642l.057.016c-.34.168-.128.743-.536.801.016.091-.103.257.02.265-.258.125-.231.646-.583.832l.072-.056c-.069.381-.401.512-.538.857l.152-.026c-.002.182-.398.101-.23.343-.053.061-.144-.048-.108-.081-.422.68-1.181 1.093-1.842 1.344-.388.403.175.502-.302.417-.016.059-.061-.097-.047-.04-.173-.043-.158.359-.311.245.006-.181-.094-.078-.119-.18-.281.166-.347.423-.605.231l.02.094c-.29-.302-.641-.174-.798-.503-1.432-.533-2.437-2.085-3.056-3.629-.672-1.451-.774-3.384-.686-5.01-.156-.419-.154-.471.035-.862l-.086-.01c.198.038.131-.267.321-.24.146-.582.498-.97.857-1.381-.084.039-.238-.041-.142-.1l.175.018-.024-.05c.078-.026.201-.002.188.09 1.028-.737 2.592-1.458 3.899-.944.222.114.675.316.704.573.559.016.909 2.829.864.915C.116-.833-.265-.43 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(193.781 136.919)',
              }),
              v.createElement('path', {
                d: 'M0 0c.097.051.146.215.281.085C.189.068.088-.016 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(202.056 115.975)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.029.004.037.064.053.079.009-.054.093-.1.043-.146z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(202.945 120.373)',
              }),
              v.createElement('path', {
                d: 'M0 0c.088-.013.164-.249.18-.391Z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(202.97 121.5)',
              }),
              v.createElement('path', {
                d: 'M0 0c.064.096.107.073.117-.049Z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(203.24 122.571)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.01.087.037.134.083.181C.008.172.149-.019 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(203.032 122.631)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.012.054-.096.165-.004.226C-.066.162.132-.029 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(203.064 124.932)',
              }),
              v.createElement('path', {
                d: 'm0 0-.011.088C.022.155.093.097.105.045Z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(202.828 125.976)',
              }),
              v.createElement('path', {
                d: 'm0 0 .101-.078-.084-.029Z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(197.205 144.464)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.094-.102-.12.036-.146.039C-.041.096-.137-.075 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(189.577 148)',
              }),
              v.createElement('path', {
                d: 'm0 0 .013.033.155-.091Z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(186.67 144.254)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.003-.233.175.101.039-.158C-.025-.117-.069-.065 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(216.87 114.238)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.635-.512-1.582-1.09-1.372-2.053.001-.094-.243.061-.227-.167.328-.748.341-2.067 1.396-2.635l-.09-.035c.176-.133.473-.045.649-.125-.008-.046-.079-.063-.045-.128.081.138.382.057.482.16.072-.056.053-.168.154-.232l.129.159c.317.413.792-.115 1.178.237-.013-.044-.048-.086-.01-.112.594.466 1.423.62 2.043 1.025.005-.068.033-.176.102-.204-.055.171.103.349.24.5.171-.088.175.339.41.402l.01-.043c.017.246.267.076.232.327l.178-.035c-.109.225.283.06.31.237l-.04.034c.07.113.185.1.232.226l.027-.009c.123.278.329.327.176.443.18-.014-.112-.273.154-.286.45.896 1.042 1.668 1.39 2.598.116.069.169.123.245.116.006.106.125.351.07.468-.009-.031.118.021.149.065.141.137-.104.249.023.406.028-.091.078-.139.153-.138-.096.213-.012.418-.006.621l.088-.099c-.106.254.142.371.09.579l.087-.093c.211.268-.191.135-.062.374.025-.069.07-.056.113-.076-.166.283-.053.659-.09.908l.045-.016c-.002.264.131.535.016.828.045.104.271-.041.223.244-.223-.01-.104.475-.352.302.021.233.125.622.004.763.107-.095.246.15.307-.045l.101.168c.094-.011.002-.161.106-.097-.032.102-.18.383-.164.479-.174.164-.459.268-.545.543.111-.111.218.149.275.067l-.537.244c-.053.078.154.084.037.183l-.172.024c.006.043-.217.309-.047.46.053.083.11-.118.129.018-.084.161-.15.127-.231.284l.022.021c-.034.124-.316.175-.312.02.05-.053.081.103.116-.012-.16-.026-.323.069-.439.172l.161.066c-.29.02-.465.139-.674.216-.051-.077.165.117.162.042-.193.297-.658 0-.813.297.043.004-.014-.151-.009-.123-.127.057-.096.205-.196.181 0 .076-.109.043-.219-.018-.056-.07-.023.041.069.06-.162-.093-.704-.29-1.043-.187.013-.059-.162-.229-.233-.227v.136c-.087.082-.246-.035-.285.057-.127-.163.59.225.4.071-.082.106-.259-.238-.253-.052-.152-.025-.24-.253-.418-.174.046-.007.061.227-.057.171-.204-.102-.039-.085-.193-.191l-.085-.092c.044-.126-.191-.051-.056-.16-.07.091-.265-.168-.343.038l-.047.167c-.086-.049-.057-.246-.086-.351l-.066.052c.116-.242-.208-.105-.2-.342-.219-.028-.436-.259-.615-.175-.074-.168-.121-.339-.295-.412l.015.133c-.136-.014-.113-.088-.164-.188-.007.045-.276-.032-.44-.048-.069-.164.073-.232.122-.306-.305.106-.193-.445-.492-.408.012.065.067.264-.072.21-.293.069-.063-.356-.318-.446l.202-.102c-.173.012-.139-.339-.292-.177.003-.104-.237-.172-.055-.286-.385-.201-.502-.821-.959-.788-.004-.069-.117-.166-.01-.206.15.009.007.16.093.142l.037-.112c-.11-.074-.179-.146-.256.055-.267-.154.132-.447-.137-.689-.063.064-.106.061-.154-.033l.014-.246c-.16-.167-.242.006-.369.084-.049-.114-.135-.24-.074-.349l-.238-.022c.173.018.02-.136.019-.204l.001.068c-.066.017-.112-.125-.135-.196.088-.036.198.065.263.118l-.026-.275c-.107.102-.197-.113-.263-.187-.088-.077.041-.178.019-.203-.066.039-.11-.146-.153-.016.001.046.11.035.088.124-.088-.032-.194.047-.198-.135-.002-.139.261-.131.063-.269l-.063.176-.178-.135.109-.079-.066.016c.085-.128-.134-.292-.027-.418-.046-.096-.198-.137-.266-.213v.022c-.132-.06-.177-.226-.147-.364l-.022.021A.447.447 0 0 1-2.847.87c-.166-.091-.453.221-.401-.03-.08-.152.078-.361.184-.348-.225-.218-.207-.63-.522-.768.024-.067.067-.06.051-.155-.264-.361-.32-.895-.724-1.076.014.14-.112.071-.18.107.052-.152-.172-.053-.012-.185.111-.049.158-.086.262-.001-.073-.263-.27-.613-.442-.689.086.039.09-.029.094-.096-.16.106-.282-.052-.295-.212l.094-.072-.155-.029c.006-.067.189-.167.017-.244l-.134.02c.012-.178.052-.438-.119-.538l-.22-.043c-.018-.071.017-.22.122-.132-.241-.197-.293-.376-.47-.393.141-.607-.112-1.264-.35-1.779l-.074.05c-.134-.11.111-.134.014-.208-.058.078-.211-.037-.26.114-.169-.167.033-.32.015-.467.1-.063-.024.135.101.053.028-.038-.198-.245-.049-.342-.085-.025-.186.063-.241.118l.027-.156c-.251-.076-.195.483-.494.418l-.021-.125c-.215-.042-.066.384-.242.116.027-.158.218-.359.335-.277-.061-.278.338-.275.21-.547-.126-.039.069.232-.086.231-.186-.08-.036-.292-.129-.391.114.106.234-.067.23-.162-.136-.112-.117.151-.217-.043.081-.069.076-.279.207-.146.184-.153-.144-.184-.023-.355-.176-.009-.263.336-.428.144.158-.019.086-.344.349-.308-.077-.07-.196-.037-.259.058-.14-.089.143-.394-.162-.33l.132-.095-.23-.098c-.047-.107.059-.419-.162-.331.001-.04-.088-.293.1-.248.142.127-.045.218.197.231-.219-.047-.07-.228-.033-.341l-.092.014c.018-.066-.037-.186.047-.253-.037.06-.104.058-.137.022l.116-.103c.003-.245-.249.026-.272-.204l-.057.199c.012-.044-.135-.076-.123-.194l.321-.271c.017-.138-.155-.009-.063-.17l-.103.206c-.033.037-.232-.041-.276-.206.012-.119.143-.337.256-.194-.021-.083-.129-.174-.199-.081-.012-.199.138-.016.169-.2-.101-.04-.277-.208-.431-.296l-.156.231-.034-.111c-.123.196-.148-.035-.297.1-.05-.068-.017-.18.007-.268.342.14.308-.365.581-.375-.019-.325-.674-.009-.369-.444.082.032.233-.173.215.04-.082-.182.219-.201.049-.395-.058.196-.31-.104-.392.178.08-.04.102.115.089.159-.121-.05-.252.09-.308-.105-.011-.126-.053-.291.088-.305.146-.035.036.187.162.068-.018-.25-.252-.228-.02-.397.022.155.184.151.283.12l.012-.189-.088.059c-.15-.257.153-.129.049-.389l-.228-.075c-.148.108.186.371-.098.396-.061-.173.059-.268-.059-.413l-.017.137c-.028-.06-.404-.029-.266-.334.044-.151.086-.059.186-.088-.05-.289.029-.4-.008-.584-.187.087-.111-.315-.256-.066.143.065.248.473.089.621-.264-.043.097.213-.122.335-.072-.225-.299-.155-.461-.153-.028-.06.017-.139.03-.182.135-.063.156.02.304-.012-.111-.243-.102-.508-.004-.681-.095-.067-.23-.007-.214.098l-.231-.919c.269.136-.008-.339.212-.254.082.145.273.241.362.132-.033-.094-.102.026-.16-.003.104-.154-.241-.148-.063-.316-.022.298-.274.118-.447.211.064-.226-.129.037-.168-.164l.094-.725c-.227-.247-.139-.717-.18-.971-.117-.114-.309.015-.373-.122-.027-.17.25.083.106-.15l-.036.033c.033-.085-.229-.434.057-.562l-.212.118c-.029-.043.015-.095.031-.138-.074.01-.151-.032-.185.053-.185-.128-.036-.33-.062-.499l.154.085c.051-.305-.119-.475-.125-.761l-.129.03.047-.179a.116.116 0 0 1-.14-.182l-.24.483c.099.107.132-.157.277-.103.125.045.139.309.019.371-.033-.095-.004-.105.028-.19-.189-.002-.153.146-.261.242-.003-.053-.071-.118-.017-.139-.069.117-.064.222-.036.393.05-.127.125.044.169-.009-.158.041-.176.213-.092.415.214.118-.044.417.053.653.144-.13.25-.28.287-.44.112.138.029.171.139.309-.107.096-.282.183-.318.397l.122-.011c-.027.192-.204.226-.127.451.134.384.21.79.282 1.089l.121-.015c-.223.223.012.579-.058.831.17.361.089.853.345.996.1.687.18 1.293.422 1.971l.137-.164c-.09.158.121.052.131.179-.176-.1-.129.218-.208.334.22.268.19.705.15 1.014l.12-.025c-.139.343.148.613.281.943.06.023.186.05.204.155-.133.248-.093.342-.129.655.079.192.253.489.404.658.037.82.506 1.499.661 2.315l.153-.001c.02.852.643 1.642.757 2.331l.197-.165c.137.167.148.461-.034.49.172.153.155.516.4.544.146.169.028.284.089.456.295.339.354.489.515.87l-.063-.082c.025-.066.114-.119.178-.037.016.167.332.459.002.467.362.3.383.963.789 1.221-.085.01-.046.111-.07.179.186.339.524.605.559.946.062.031.066-.158.15-.025.02.096-.088.056-.068.18.174.641.783.964 1.045 1.464.41.921 1.054 1.762 1.633 2.566l.039-.044c.028.401.656.47.558.892.088.028.225.211.27.095.064.305.617.453.736.878l-.044-.095c.351.199.53.542.919.737-.016-.047-.063-.112-.035-.166.192.018.139.446.381.281.068.062-.036.156-.075.112.81.477 1.612 1.113 2.611 1.482.773-.032.143-.445.679-.166.054-.048.017.111.033.053.219.102.379-.28.515-.119-.074.167.097.106.098.212.459-.094.52-.184.887-.111l-.039-.084c.462.136.925-.148 1.42-.014 2.543-1.344 2.838-4.061 2.816-6.094a11.014 11.014 0 0 0-2.193-5.891c-.498-.277-.508-.3-.762-.809l-.053.07c.135-.148-.217-.323-.109-.49-.572-.569-1.21-1.041-1.878-1.578.099.1.065.276-.054.17l-.068-.209-.051.031c-.071-.091-.121-.248.002-.234-1.926-.841-4.357-1.699-6.578.301-.379.56-.873 1.301-.915 1.985.033 1.648 1.239 4.109 3.763 3.287C1.187.378.631.033 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(228.138 133.911)',
              }),
              v.createElement('path', {
                d: 'M0 0c.106.034.189.185.295.038C.201.036.084-.029 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(216.902 114.516)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.027.012.05.051.068.06C.065.008.137-.059.08-.089Z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(218.696 118.556)',
              }),
              v.createElement('path', {
                d: 'M0 0c.074-.035.094-.277.081-.416Z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(218.966 119.611)',
              }),
              v.createElement('path', {
                d: 'M0 0c.096.066.129.032.094-.079Z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(219.597 120.495)',
              }),
              v.createElement('path', {
                d: 'm0 0 .143.135C.069.15.134-.063 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(219.424 120.614)',
              }),
              v.createElement('path', {
                d: 'M0 0c.008.052-.031.183.076.201C-.004.168.111-.076 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(220.277 122.65)',
              }),
              v.createElement('path', {
                d: 'm0 0 .021.082C.076.128.119.047.113-.004Z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(220.43 123.665)',
              }),
              v.createElement('path', {
                d: 'm0 0-.04-.108-.054.07z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(228.82 140.042)',
              }),
              v.createElement('path', {
                d: 'M0 0c.101-.02-.012-.102-.01-.121-.062.045.094.06.01.121',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(235.109 141.907)',
              }),
              v.createElement('path', {
                d: 'm0 0-.004.033.18-.012Z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(236.741 138.335)',
              }),
              v.createElement('path', {
                d: 'M0 0c.175-.367.074.244.154-.229C.067-.195-.011-.137 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(193.26 84.706)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.9-1.105-2.732-1.291-4.014-1.939-.162-.053-.019.252-.375.119-1.263-.735-3.607-.59-5.163.017l.114.051c-.296.115-.728-.006-1.05.107.009.045.123.038.064.12-.125-.127-.597.125-.769.066-.11.094-.061.197-.202.309l-.238-.09c-.648-.147-1.193.533-1.906.758.051.013.13.002.1.062-1.129.383-2.252 1.725-2.171 3.16.057-.056.163-.105.225-.031-.193.07-.222.496-.128.863.195.112-.008.68.333 1.026l.016-.053c.01.373.29.385.297.697l.242.072c-.094.266.395.27.479.545l-.042.032c.152.203.334.193.484.371l.034-.008c.366.41.723.441.602.596.244-.028-.4-.334-.023-.362 1.325 1.153 3.071 1.782 4.741 2.264.213-.023.342-.014.404-.072.158.082.624.205.755.336-.057-.016.132-.071.225-.061.325-.004.293.279.654.27-.127-.08-.16-.151-.099-.211.258.213.653.267.993.371-.049-.041-.129-.074-.105-.133.351.23.695.09 1.011.242l-.107-.125c.555-.062.125.25.601.233-.107-.049-.062-.088-.076-.135.406.267 1.123.269 1.553.375l-.016-.047c.477.06.975.033 1.502.121.194-.049-.06-.271.442-.23.337-.112-.769.023-.416-.233-.434.088-1.114.207-1.405.217.204.045-.16.309.194.256l-.24.187c.054.082.263-.086.199.045-.174.026-.696.041-.844.11-.35-.075-.713-.262-1.238-.123.266.011-.073.275.103.263l-.845-.195c-.176.041.016.178-.252.197-.005-.06-.127-.064-.217-.084-.056.049-.726.215-.723.447-.044.11.291-.06.131.084-.309.116-.35.051-.662.164l.004.03c-.192.105-.638.146-.463-.053.141-.06-.004.143.183.002-.197-.07-.562.066-.868.203.118-.015.13.043.197.08-.477.031-.936.182-1.427.33-.054-.09.256.09.298.01-.515.402-1.272.449-1.645.883.086-.026-.031-.151-.023-.121-.266.16-.178.281-.382.334.028.086-.23.111-.419.201-.125.004-.023.066.134-.024-.274.102-1.361.581-1.82 1.102-.022-.055-.459.074-.58.172l.13.074c-.064.151-.425.301-.374.41-.365.065 1.106-.646.671-.482-.024.16-.631.197-.441.289-.25.182-.594.236-.745.523.05-.076.314-.009.114.139-.349.272-.136.031-.436.232l-.206.106c-.098-.092-.287.273-.262.053.033.117-.533.375-.349.507l.164.09c-.151.116-.359.069-.525.114l.007.103c-.207-.17-.303.348-.609.365-.215.358-.711.75-.719.998-.256.19-.508.354-.685.67.064-.039.131-.111.187-.091-.077.224-.166.224-.327.357.06-.01-.152.445-.227.693-.228.215-.291.045-.38.022.07.385-.613.664-.597 1.094.089-.077.35-.321.271-.069.086.371-.489.377-.55.869l-.15-.201c.036.248-.397.578-.175.625-.135.111-.156.529-.333.402-.133.758-.659 1.797-.377 2.323-.045.105-.034.383-.137.312-.102-.199.106-.244.032-.324-.015.1-.075.111-.104.117.026.25.025.438.22.235.088.533-.408.515-.379 1.212.099-.031.102.022.118.221l-.111.387c.085.445.228.234.378.232 0 .233.039.514-.059.639l.218.246c-.153-.18-.081.211-.053.315v-.112c.076.028.127.285.155.416-.101-.006-.23-.256-.306-.39l.031.467c.124-.087.23.332.308.502.103.189-.042.268-.017.325.075-.02.132.325.175.132-.001-.076-.126-.132-.104-.267.101.115.22.054.228.359.008.23-.289.049-.058.41l.062-.257.204.335-.117.068.072.013c-.089.166.166.575.056.73.045.201.232.347.379.482l-.012-.035c.207.146.346.416.391.625l.018-.025c.085.096.249.347.287.524.276.195.458-.23.541.154.188.253.126.564-.017.519.368.458.837.946 1.395 1.119.038.093-.027.089.098.217.711.496 1.434 1.202 2.211 1.135-.207-.139.038-.129.072-.197.141.182.272-.029.262.187-.064.105-.066.167-.31.126.453.243 1.19.521 1.484.51-.148.005-.055.079.04.153.015-.181.375-.105.64-.015l.012.12.207-.089c.098.054.068.26.366.194l.104-.111c.268.14.654.365.982.316l.274-.131c.13.039.347.177.107.189.543.008.885-.068 1.059-.202.893.306 2.28.453 3.321.181l-.043-.083c.273-.125.168.13.359.038-.104-.069.188-.214-.047-.28.386-.156.541.069.812.066.06.108-.224-.039-.149.097.053.033.545-.177.641-.016.089-.084-.015-.196-.084-.258l.264.044c.256-.246-.754-.249-.487-.546l.226-.008c.174-.211-.622-.11-.083-.258.256.047.518.261.317.371.517-.033.326.369.863.206.121-.143-.438.102-.366-.067.218-.212.522-.073.736-.187-.232.137.023.245.194.228.253-.161-.22-.107.163-.239.089.079.47.045.179.204.207.177.389-.18.655-.075.076-.19-.512-.235-.112-.438-.021.168.592.044.44.329.154-.093.131-.213-.022-.267.204-.165.681.104.645-.234l.134.112.228-.296c.198-.093.734-.098.62-.307.073-.007.528-.226.422.004-.247.223-.38.041-.451.318.131-.26.426-.167.621-.19l-.013-.095c.115-.013.335-.136.443-.076-.1-.011-.088-.086-.02-.142l.168.077c.434-.133-.006-.243.378-.426l-.335.06c.08-.005.142-.192.333-.262.129.071.331.128.439.178.234-.078.019-.182.288-.192l-.341.029c-.061-.013.07-.293.342-.457.195-.068.563-.078.325.152.138-.083.288-.269.13-.28.334-.155.033.142.343.044.065-.141.338-.453.471-.682l-.396-.008.181-.114c-.332.003.045-.182-.189-.25l.426-.19c-.17.499.607.03.666.32.514-.308-.095-.742.64-.789-.037.117.317.096-.025.266.273-.249.362.055.639-.299-.322.112.103-.421-.362-.26.08.05-.161.211-.232.235.055-.173-.19-.191.103-.42.195-.119.443-.305.496-.172.089.123-.285.202-.072.231.393-.241.305-.46.625-.376-.237.165-.196.326-.124.403l.308-.161-.117-.035c.351-.419.238.03.603-.351l.045-.316c-.205-.042-.502.58-.618.306.237-.241.414-.212.596-.486l-.21.123c.084-.092-.083-.445.413-.616.237-.109.116.026.192.098.416-.351.609-.388.875-.619-.197-.093.435-.442.005-.32-.042.205-.622.741-.896.733-.025-.311-.284.317-.535.216.309-.3.129-.458.071-.617.078-.09.207-.12.275-.152.139.07.024.176.123.291.317-.361.717-.614 1.004-.709.053-.172-.088-.232-.223-.101.406-.399.791-.877 1.111-1.315-.047.422.438-.421.435-.113-.149.256-.185.559.003.504.109-.148-.084-.062-.072-.154.254-.094.075-.408.385-.451-.405.349-.293-.108-.5-.153.326-.217-.115-.074.127-.353.339-.203.65-.545.925-.86.155-.533.755-1.087 1.03-1.47.056-.254-.207-.221-.114-.473.15-.269.088.322.221-.133l-.057.018c.11-.1.269-.811.602-.787l-.27.017.161-.181c-.065-.037-.079-.157-.188-.059-.008-.318.299-.506.449-.773l.03.232c.363-.41.361-.797.569-1.262l-.13-.035.178-.256c-.147.026-.131-.261.023-.375l-.566.614c0 .23.228-.161.304.013.069.153-.125.582-.267.6.047-.174.076-.17.168-.281-.152-.127-.236.129-.394.203.038-.084.031-.229.091-.225-.137.139-.217.299-.373.559.162-.151.053.146.137.099-.159-.047-.34.184-.473.532.041.322-.435.556-.59.959.225-.071.446-.204.629-.405-.056.282-.147.266-.205.551-.172.053-.367.047-.612.309l.093.08c-.237.23-.389.133-.592.482-.35.604-.757 1.197-1.054 1.639l.083.09c-.399.064-.723.687-1.072.916-.362.588-1.031 1.047-1.154 1.411-.952.744-1.709 1.458-2.689 2.211l.274.011c-.255.035-.05.168-.24.282.112-.264-.351.042-.537.049-.346.456-.998.767-1.49.893l.051.111c-.539.064-.926.539-1.43.896-.037.075-.068.251-.244.308-.393-.038-.542.045-1.03.132a7.264 7.264 0 0 0-1.113.646c-1.366.087-2.578.772-3.982.741l-.074.156c-1.348-.001-2.943.218-4.071.086l.098.242c-.366.111-.797-.144-.691-.291-.356.018-.84-.254-1.091-.09-.363-.011-.411-.178-.696-.255-.739.029-.934-.223-1.545-.46l.158.044c.049.076.021.177-.14.133-.208-.153-.881-.264-.534-.444-.79-.012-1.318-.89-1.996-1.077.094-.03-.034-.139-.057-.221-.535-.285-1.023-.691-1.193-1.172-.088-.051-.013.208-.167.017-.064-.134.079-.067.008-.236-.558-.769-1.177-1.555-1.413-2.455-.612-1.512-.552-3.145-.256-4.608l-.063.004c.354-.422.063-1.236.591-1.484-.002-.131.165-.432.024-.397.278-.316.372-1.115.887-1.519l-.107.111c.193-.603.663-.939.988-1.514-.061.037-.15.121-.209.1.072-.271.564-.314.434-.605.092-.114.171.011.111.076.863-1.164 2.123-2.114 3.363-2.971.769-.781-.232-.42.584-.764.026-.086.104.057.078.002.309-.136.24-.568.523-.568.016.195.184-.002.249.082.5-.453.535-.66 1.05-.832l-.081-.057c.664-.095 1.236-.547 1.828-.537 1.527-.719 3.074-1.346 4.652-1.705.779-.23 1.572-.318 2.347-.437l1.158-.086.036-.002.01-.002h.006c-.174-5-.049-1.385-.088-2.502h-.019l-.073-.002-.145-.002-.291-.006-.594-.027c-3.197-.147-6.42-.903-9.33-2.1-.78-.101-.818-.17-1.44-.668.006.049.043.084-.023.086.061-.168-.421-.352-.36-.541-.854-.66-1.354-1.447-1.444-2.33-.006.143-.125.24-.168.064l.133-.199-.053-.027c.035-.127.135-.252.194-.131-.098-1.818 3.539-3.602 6.291-3.725.679-.052 1.655-.158 2.395.133 2.278.002 4.374.858 6.327 2.188C.827 1.18.836.604 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(180.368 65.325)',
              }),
              v.createElement('path', {
                d: 'M0 0c.065.109.02.393.222.223C.143.166.094-.002 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(193.077 85.153)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.03-.012-.043.109-.047.139C.022.07.147.053.156-.037.087.033.061-.008 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(190.206 92.286)',
              }),
              v.createElement('path', {
                d: 'M0 0c.084.037.416-.242.591-.427Z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(188.943 93.836)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.067.166-.007.165.151.012C.13-.033.062 0 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(187.875 95.413)',
              }),
              v.createElement('path', {
                d: 'M0 0a.474.474 0 0 0-.156.285C-.204.227.138.07 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(187.642 95.361)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.081.057-.292.127-.319.25C-.263.149.134.057 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(184.666 98.175)',
              }),
              v.createElement('path', {
                d: 'm0 0-.136.081c-.076.094.058.086.145.043z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(182.979 99.096)',
              }),
              v.createElement('path', {
                d: 'm0 0-.128.168.09.012z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(160.892 86.079)',
              }),
              v.createElement('path', {
                d: 'M0 0c.207-.035.094-.135.12-.16-.171.068.107.07-.12.16',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(172.152 76.45)',
              }),
              v.createElement('path', {
                d: 'm0 0 .062.002-.025-.18Z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(179.675 75.26)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.234-.23.235-.014-.127-.184-.009.082.008.163.127.184',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(212.88 82.926)',
              }),
              v.createElement('path', {
                d: 'M0 0c1.125 0 2.328-.789 3.529-.66.137.006-.067-.246.244-.213 1.151.184 2.825.043 4.266.137l-.062-.086c.281 0 .497.388.765.453.022-.041-.056-.096.028-.131.011.158.447.262.507.4.125-.002.176-.117.333-.095l.049.238c.101.615.96.561 1.153 1.227.01-.047-.003-.116.053-.1.469.873 1.047 1.898 1.115 2.961.053-.051.153-.108.221-.057-.163.082-.18.41-.189.688.165.123-.068.476-.057.795l.043-.026c-.217.221.053.367-.192.531l.114.172c-.258.059.074.371-.076.545l-.049-.017c-.108.164-.029.287-.124.443l.021.024c-.195.367-.143.64-.321.562.098.191.196-.352.333-.061-.62 1.235-1.362 2.422-2.255 3.461-.051.163-.103.252-.074.327-.124.074-.388.353-.542.371.035-.032.007.134-.038.195-.213.111.158.266.325.227-.11-.053-.151-.118-.116-.188.242.156.553.139.83.193-.043-.033-.109-.054-.098-.113.299.176.559-.023.819.09l-.092-.113c.445-.121.107.224.48.197-.084-.049-.047-.086-.058-.135.32.258.876.281 1.204.404l-.007-.046c.363.091.77.064 1.142.281.156-.008.016-.276.391-.129-.069.213.627.273.334.451.334.057.875.123 1.068.256-.121-.123.245-.213-.022-.309l.249-.068c0-.098-.223-.031-.12-.123.14.037.493.291.626.297.201.226.334.553.716.732-.154-.152.198-.185.086-.269l.385.609c.125.061.098-.15.264-.023-.033.05.033.117.07.181.06 0 .493.315.643.145.094-.049-.184-.145-.012-.145.232.121.209.194.438.315l.018-.024c.169.049.408.313.185.336-.108-.049.102-.095-.084-.121.049.168.297.336.523.455-.06-.07-.023-.117-.024-.187l.796.806c-.049.092-.02-.24-.096-.224.49.15.735.728 1.196.777-.045-.053-.116.102-.094.08.203.119.283-.01.379.119.062-.058.156.119.252.252.023.104.056-.008-.041-.105.125.207.695.875 1.164 1.105-.047.039.088.358.179.426l.061-.127c.15 0 .258.283.353.217.077.275-.576-.766-.431-.44.146-.023.205.459.277.284.145.181.172.455.408.535-.056-.033.022-.27.135-.119.193.269.01.115.147.347l.064.164c-.098.09.201.211.006.209.113-.035.248.397.406.245l.113-.137c.086.115.002.283-.009.426l.091-.002c-.21.164.198.277.11.531.24.201.4.635.597.691.03.246.034.473.202.684 0-.059-.026-.125.021-.162.143.113.098.181.125.334.029-.051.276.238.424.381.008.246-.156.222-.229.275.317.105.077.654.377.826.024-.09.01-.355.145-.197.314.123-.074.467.137.756l-.233-.024c.17.112.004.506.211.42-.045.125.174.367-.049.375.243.512.133 1.311.483 1.617-.033.081.01.276-.102.241-.123-.125.08-.186-.002-.231-.004.071-.062.088-.092.098.053.164.073.301.247.133.136.381-.338.398-.266.867.092-.018.121.019.09.158l-.18.246c.002.305.182.195.328.219-.043.162-.058.367-.176.426l.163.234c-.108-.172-.116.117-.182.182l.057-.069c.054.043-.038.221-.081.311-.084-.047-.068-.24-.066-.346l-.211.28c.152 0 .029.279.01.408-.01.152-.168.121-.176.162.072.027-.051.234.08.16.037-.041-.039-.135.047-.193.027.111.156.144.01.31-.119.117-.25-.135-.285.153l.203-.077-.051.272-.127-.041.045.049c-.164.015-.219.351-.385.332-.07.111-.041.297-.084.422l.022-.018c.017.197-.188.307-.33.357l.027.012c-.043.07-.184.211-.305.24-.051.227.332.391.059.467-.139.178-.426.037-.406-.066-.262.269-.653.418-.887.711-.074-.026-.059-.069-.174-.053-.463.32-1.131.244-1.519.609.171.014.035.129.044.203-.156-.078-.148.161-.232-.037-.008-.125-.023-.166.125-.252-.353-.007-.887.034-1.074.172.094-.066.015-.093-.063-.123.041.196-.222.246-.433.174l-.033-.117-.127.123c-.081-.035-.094-.244-.291-.129l-.059.127c-.214-.094-.502-.244-.74-.16l-.194.166c-.099-.024-.265-.131-.088-.176-.4.09-.658.094-.791.238-.664-.424-1.617-.554-2.399-.611l.011.09c-.223.058-.086-.164-.24-.119.054.09-.19.162-.041.281-.319.068-.36-.221-.545-.297-.008-.119.141.109.13-.045-.025-.047-.425-.004-.437-.185-.086.05-.055.189-.027.267l-.164-.123c-.266.149.435.473.153.666l-.165-.066c-.199.142.413.304-.029.269-.171-.127-.276-.41-.096-.449-.374-.133-.091-.447-.5-.525-.135.076.32.099.211.22-.225.094-.369-.164-.551-.154.205-.021.086-.228-.028-.287-.226.033.094.191-.202.143-.025-.11-.274-.243-.024-.258-.048-.246-.318-.008-.43-.215-.139.135.203.428-.141.432.089-.127-.335-.313-.105-.485-.134.002-.181.115-.118.236-.203.034-.345-.414-.491-.138l-.014-.172-.275.094c-.156-.049-.432-.369-.493-.139-.042-.039-.4-.148-.209-.258.251-.023.214.197.406.028-.212.121-.308-.129-.413-.229l-.051.082c-.063-.061-.243-.098-.256-.209.039.07-.011.119-.078.121l-.031-.158c-.28-.168-.157.207-.442.07l.19.178c-.042-.039-.19.051-.318-.039l-.067-.432c-.142-.123-.126.102-.238-.09l.154.235c.016.054-.219.137-.437.039-.123-.102-.269-.367-.024-.338-.107-.049-.291-.043-.24.082-.23-.148.086-.113-.096-.279-.12.041-.439.035-.654.078l.139.295-.151-.063c.126.24-.15.076-.113.291-.114-.019-.215-.129-.295-.215.418-.136-.174-.507.024-.711-.374-.24-.526.475-.776-.085.1-.032-.012-.299.21-.12-.265-.082-.053-.322-.39-.369.166.209-.347.121-.107.424.018-.09.201.031.238.078-.145.039-.094.252-.347.119-.143-.103-.352-.218-.26-.326.074-.133.226.137.197-.051-.281-.207-.437-.029-.441-.336.182.122.301.006.343-.087l-.193-.174-.002.113c-.39-.123-.022-.219-.379-.375l-.256.09c.003.195.539.197.35.414-.232-.109-.24-.273-.487-.322l.134.132c-.086-.033-.342.25-.563-.111-.127-.16.003-.109.049-.203-.348-.221-.406-.365-.627-.508-.055.205-.41-.226-.264.108.169-.022.691.254.725.494-.248.142.303.121.265.377-.296-.149-.396.068-.518.179l-.173-.179c.037-.147.143-.088.222-.219-.351-.131-.621-.377-.72-.613-.143-.002-.183.144-.064.234a6.734 6.734 0 0 0-1.149-.676c.357-.062-.369-.291-.107-.363.22.07.472.023.424-.131-.127-.06-.051.092-.127.104-.084-.203-.347.035-.387-.231.301.274-.088.289-.124.487-.193-.243-.06.119-.308-.032-.189-.242-.458-.482-.697-.707-.432-.082-.847-.58-1.14-.791-.21-.029-.225.217-.417.131-.197-.141.28-.086-.072-.209l.005.053c-.061-.102-.626-.256-.534-.563l-.044.25-.118-.15c-.047.059-.151.07-.09.172-.275-.002-.358-.303-.547-.451l.205-.016c-.264-.336-.564-.394-.852-.674l-.072.112-.14-.207c-.032.138-.256.072-.29-.09l.293.634c.184.041-.052-.242.114-.281.142-.035.414.217.384.356-.122-.075-.109-.102-.167-.207-.149.119.026.244.037.408-.055-.051-.173-.07-.151-.127.063.16.172.262.363.414-.088-.158.139-.039.122-.119-.082.142.074.326.341.47.284-.023.394.422.712.581a1.158 1.158 0 0 0-.229-.6c.228.057.197.141.426.197.016.16-.03.358.164.582l.082-.092c.177.2.076.348.367.508.504.268.973.614 1.359.815l.078-.094c.067.346.634.498.851.766.532.185.966.726 1.313.689.817.533 1.535 1.012 2.452 1.441l-.075-.238c.104.201.15-.037.295.07-.245.038.143.272.215.413.473.054.942.421 1.263.695l.061-.106c.288.366.803.393 1.289.532.074-.03.2-.108.338-.047.192.271.332.303.676.547.281.093.751.199 1.057.22.972.631 2.156.627 3.249 1.073l.106-.123c1.071.445 2.503.341 3.444.552l-.082-.246c.3-.066.676.086.595.258.3-.06.75.143.949-.068.311-.051.383.105.647.134.623-.087.873-.142 1.484-.148l-.15.031c-.074-.047-.092-.148.057-.179.232.066.816-.209.646.125.617-.274 1.598-.286 2.123-.834-.016.095.151.035.244.05.512-.382.99-.865 1.383-1.168.033-.103-.199.028-.047-.171.117-.096.08.066.231-.049.836-.696.941-1.787 1.293-2.565.681-1.435.636-3.095.548-4.523l-.056.021c.146-.507-.389-1.074-.135-1.513-.084-.098-.137-.412-.225-.305.041-.404-.386-.99-.414-1.553l.018.139c-.328-.465-.291-1.004-.676-1.471.004.065.035.168-.012.207-.199-.15-.009-.584-.316-.566-.055-.117.086-.147.113-.072-.617-1.106-1.302-2.28-2.181-3.346-.787-.567-.364.281-.768-.367-.084 0 .039-.11-.008-.073-.166-.246-.547-.054-.597-.293.173-.078-.037-.16.025-.244-.514-.281-.678-.25-.961-.617l-.027.092c-.285-.496-.871-.717-1.084-1.211-2.453-1.572-4.994-2.797-7.805-3.479-1.406-.263-2.834-.433-4.328-.398h-.049c-.832-1.971 1.131 2.684.93 2.203l.012-.012.048-.05.098-.1.195-.199.387-.404c.262-.266.519-.538.721-.852.44-.602.863-1.219 1.154-1.928.116-.734.166-.748.501-1.461-.047.018-.071.061-.089-.002.199.03.197-.511.4-.527.272-1.1.513-2.174.34-3.42-.003.199-.156.309-.162.082l.102-.256-.059-.031c.015-.16.092-.354.172-.199-.353-3.391-3.802-5.342-6.525-5.604-.674.012-1.616-.129-2.335-.111C2.393-1.557.689-.924-1.305-.074c0 0 .506.32 1.305.074',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(216.3 57.626)',
              }),
              v.createElement('path', {
                d: 'M0 0c.117-.035.331.061.268-.154C.192-.094.035-.084 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(213.179 83.18)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.01.029.094.01.118.008C.059-.037.045-.144-.033-.131c.06.045.025.078.033.131',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(218.702 85.842)',
              }),
              v.createElement('path', {
                d: 'M0 0c.025-.088-.219-.318-.377-.426Z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(220.038 86.588)',
              }),
              v.createElement('path', {
                d: 'M0 0c.143-.01.133-.061-.014-.133Z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(221.45 86.971)',
              }),
              v.createElement('path', {
                d: 'M0 0c.102.057.179.039.253.021C.213.086.035-.146 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(221.445 87.192)',
              }),
              v.createElement('path', {
                d: 'M0 0c.063.035.181.164.282.102C.185.135.001-.141 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(224.3 88.32)',
              }),
              v.createElement('path', {
                d: 'm0 0 .107.049C.199.045.142-.049.079-.084Z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(225.547 89.004)',
              }),
              v.createElement('path', {
                d: 'm0 0-.002.156.078-.043Z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(242.286 81.565)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.109-.117-.134.023-.163.023C-.045.096-.156-.094 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(235.327 73.29)',
              }),
              v.createElement('path', {
                d: 'm0 0 .045.016.03-.178z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(229.788 70.602)',
              }),
              v.createElement('path', {
                d: 'M0 0c.355-2.51-.228-.41.238-1.158C.195-.723.086-2.701 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(188.923 78.94)',
              }),
              v.createElement('path', {
                d: 'M0 0c1.285.916 2.979-.01 4.385.574.166.039-.041-.502.33-.381C6.08.904 8.23.48 9.892-.068l-.101-.141c.316-.103.703.365 1.039.301.002-.094-.107-.135-.03-.264.085.285.606.133.749.344.133-.111.119-.336.291-.461l.191.322c.533.768 1.297-.053 2.026.344-.036-.074-.108-.133-.05-.205 1.169.465 2.632.379 3.94.551-.052-.116-.1-.323-.024-.452.065.34.468.426.819.493.157-.35.6.318 1.012.127l-.035-.079c.302.368.45-.21.696.229l.193-.275c.133.492.44-.254.691-.004l-.008.101c.236.119.359-.129.579-.045l.021-.056c.514.129.813-.145.8.238.18-.307-.498-.141-.214-.588 1.548.326 3.749.522 4.828-.002-.194.154-.317.201-.36.346-.15-.088-.657-.072-.855-.18.055-.008-.033.211-.121.256-.283.236-.373-.318-.684-.146.139.097.197.218.164.363-.322-.281-.678-.246-1.037-.299.057.059.141.09.129.211-.389-.303-.678.139-1.024-.043l.147.209c-.487.316-.217-.445-.643-.248.116.06.086.15.116.238-.485-.367-1.07-.172-1.575-.281l.028.09c-.467-.02-.94.136-1.461-.004-.178.109.103.535-.393.486-.017-.445-.845-.127-.594-.648-.412.099-1.061.31-1.349.177.199.157-.168.557.183.571l-.246.287c.051.18.267-.08.199.156-.179-.015-.689-.127-.839-.041-.34-.236-.686-.711-1.221-.709.267.147-.084.504.091.561l-.837-.766c-.179-.002.01.354-.261.266-.003-.119-.124-.178-.216-.264-.058.057-.755-.027-.759.414-.049.178.301.059.132.234-.29.028-.433-.105-.617-.095l-.006.058c-.212.067-.626-.185-.395-.427.147-.014-.056.263.163.134-.15-.254-.523-.324-.846-.33.11.071.096.188.141.313-.434-.346-.892-.453-1.375-.598-.008-.209.18.379.252.27-.62.289-1.279-.41-1.795.011.084.038.045-.295.039-.236-.299.025-.284.328-.478.217-.019.174-.245-.059-.456-.098-.109-.121-.052.09.127.1C8.49.83 7.305.621 6.65.918 6.641.801 6.235.51 6.098.529l.072.272c-.118.17-.473.002-.484.238-.324-.316 1.185.217.759-.016-.092.235-.599-.404-.488-.037-.287.006-.572-.287-.834-.015.076-.049.244.369.012.361-.411-.025-.12-.125-.451-.197l-.207-.1c-.01-.262-.377.037-.219-.26-.053.221-.615-.136-.571.307l.059.35c-.183-.026-.301-.37-.443-.522l-.063.158c-.03-.535-.437.045-.654-.369-.384.186-.975.018-1.156.35C1.135.887.866.695.53.811c.068.05.159.064.178.179-.212.158-.263.018-.456-.07.043.08-.422.312-.657.502l-.154-.141-.011-.019-.003-.004-.001-.004h-.001v-.002h-.001c.379-1.602-.516 2.184-.423 1.793l.001.012.002.045-.014.084-.122.291c.523-.362 1.105.746 1.571.269-.116-.086-.457-.312-.158-.412.34-.494.61.471 1.037.23l-.129.432c.206-.262.6.285.588-.162.096.172.391-.088.289.326 1.214-.217 1.866.258 2.414-.474.102.072.356-.002.303.218-.168.237-.236-.17-.299-.009.092.013.112.13.121.189.221-.098.394-.127.186-.482.482-.26.534.707 1.068.597-.017-.178.028-.24.19-.199l.283.328c.357-.041.244-.383.283-.68.179.065.479.079.561.307l.312-.35c-.224.254.176.196.282.278l-.105-.082c.05-.123.311-.024.446.025-.037.182-.316.235-.472.276.113.142.303.127.463.293-.047-.297.398-.172.556-.215.197-.063.223.263.28.254.005-.153.321-.026.167-.239-.066-.05-.153.147-.263.014.129-.113.113-.379.383-.186.203.145-.051.579.332.395l-.198-.297.361-.152.015.267.036-.127c.109.282.551.088.633.405.182.027.383-.186.556-.217l-.034-.024c.213-.156.494-.052.673.127l-.009-.058c.115-.022.39.019.53.185.287-.193.101-1.006.419-.66.293.018.453.504.334.672.527-.164 1.111.291 1.607-.109.073.109.023.175.176.244.76-.082 1.615.367 2.281-.137-.226-.119-.005-.267.004-.42.182.244.236-.24.291.172-.027.24-.011.357-.24.447.473.145 1.199.168 1.467-.049-.135.108-.033.184.069.26-.027-.386.324-.433.587-.289l.035.237.175-.237c.101.078.111.496.374.279l.079-.25c.275.202.652.522.945.325l.24-.342c.125.037.336.244.115.342.5-.207.821-.233.981-.53.859.723 2.109.752 3.109.702l-.03-.176c.268-.164.139.306.327.183-.086-.166.205-.363-.006-.568l.132-.041h.057l.014.002.008.002h.004V1.811h-.002l-.027-.004-.19-.108c-.115-.099-.213-.234-.348-.263-.045-.229.218.13.161-.159-.049-.078-.567.225-.644-.119-.099.147-.007.397.054.533l-.258-.15c-.278.432.719.674.42 1.201l-.223-.037c-.191.383.592.365.051.535-.24-.152-.477-.64-.269-.812-.512-.055-.286-.813-.846-.737-.135.217.454.012.365.307-.238.303-.535-.113-.762.006.246-.152-.006-.486-.185-.535-.27.189.22.312-.18.383-.088-.194-.484-.313-.174-.479-.221-.439-.379.158-.605-.18-.082.33.444.709.072.901.026-.313-.52-.379-.359-.854-.139.102-.136.346-.008.526-.203.209-.565-.52-.593.099l-.094-.31c-.06.109-.151.195-.255.375-.193.021-.625-.375-.597.101-.063-.045-.498.016-.332-.33.263-.224.313.215.451-.246-.18.381-.387-.014-.537-.121l-.024.187c-.455-.048-.427-.001-.584-.193.084.1.055.229-.02.279l-.127-.273c-.415-.109-.056.5-.455.449l.315.196c-.068-.043-.181.23-.377.158-.093-.252-.255-.549-.333-.742-.229-.096-.077.296-.315.05l.308.287c.051.08-.159.438-.457.454-.195-.075-.515-.422-.228-.586-.149.007-.346.179-.214.357-.343-.062.024-.279-.276-.416-.108.18-.459.451-.666.717l.333.406-.201.018c.285.324-.116.273.057.625-.135.066-.31-.045-.451-.129.365-.612-.505-.758-.422-1.295-.559-.108-.268 1.324-.887.513.084-.14-.205-.535.145-.392-.334.068-.258-.524-.643-.291.307.207-.289.547.155.848-.038-.174.231-.141.299-.094-.128.207.06.531-.29.543-.216-.043-.509-.043-.479-.321-.005-.302.325.022.175-.281-.426-.09-.478.373-.674-.158.267.033.32-.281.306-.49l-.311-.115.067.199c-.487.162-.16-.36-.632-.289l-.211.406c.124.338.689-.178.625.385-.313.033-.425-.248-.715-.094l.223.103c-.11.024-.204.768-.662.35-.234-.16-.065-.197-.075-.404-.502-.047-.654-.254-.975-.276.069.405-.57.061-.212.465.164-.246.886-.248 1.072.135-.175.49.393-.082.514.404-.407.026-.377.502-.438.815-.113.027-.227-.102-.295-.147-.052-.293.097-.293.1-.595-.451.095-.891-.055-1.14-.332-.155.15-.104.443.076.464-.548-.072-1.139-.019-1.663.084.334-.488-.585-.099-.359-.504.279-.113.519-.46.361-.671-.177.035.008.211-.064.314-.229-.256-.344.428-.571.02.509.142.108.582.205.955-.365-.203.02.265-.338.275a4.102 4.102 0 0 0-1.216-.424c-.495.367-1.282.037-1.731.033-.226.196-.053.616-.304.696-.299 0 .205-.463-.229-.258l.045.084c-.136-.096-.801.307-.946-.299l.147.455c-.081.045-.16-.058-.228-.105 0 .15-.093.287.044.382-.266.323-.575-.037-.871-.042l.186-.276c-.51-.201-.844.076-1.336-.006l.018.266-.293-.152c.074.255-.194.429-.35.216l.768.633c.209-.162-.236-.314-.106-.58.111-.232.565-.172.642.084-.173.033-.183-.025-.32-.119-.052.373.212.351.348.596-.092-.014-.221.103-.242-.014.182.176.364.199.664.201-.205-.141.105-.232.027-.336.03.326.319.42.688.319.254-.383.701.226 1.129.111-.186-.326-.414-.586-.678-.713.264-.172.299.002.562-.17.138.242.243.617.6.758l.01-.244c.324.117.335.478.734.4.683-.137 1.391-.154 1.915-.197l.015-.242c.303.511.976.168 1.373.388.666-.25 1.449.2 1.801-.236 1.199.146 2.261.293 3.503.16l-.228-.346c.236.252.133-.209.354-.164-.235.289.324.358.49.565.531-.317 1.255-.07 1.76.139l.002-.245c.524.418 1.084-.025 1.689-.148.063-.106.154-.342.34-.328.458.363.403.332.943.537.375-.031.981-.178 1.346-.361 1.516.425 2.707-.022 4.018.195l.089-.295.121.043.059.019.008.002.002.002V1.707l-.001-.002h-.004l-.017-.006-.031-.012-.263-.078-.537-.091-1.094-.026c-.726.024-1.427.084-2.002-.074l.111.49c-.359.151-.82-.129-.729-.474-.361.148-.902-.239-1.13.164-.366.082-.444-.239-.744-.315-.723.164-.993.113-1.671 0l.17-.025c.071.109.073.318-.099.344-.25-.145-.942.101-.668-.473-.722.314-1.716-.328-2.475.103.068-.158-.119-.195-.193-.304-.67-.028-1.375.275-1.906-.012-.106.076.168.277-.104.285-.16-.066-.002-.209-.201-.305-1.065-.306-2.143.305-3.106.225C7.648.799 5.449.633 3.859.668l.02.117c-.957-.502-.687.563-1.44-.271-.242.07-.66-.02-.548.218C1.439.393.593.971.478.484l.034.084-.196.039L.27.602.247.598.236.596.23.594H.227c-1.604 6.795-.444 1.883-.802 3.4h.007l.226.018c.305.025.615.056.951-.061C.541 3.9.416 3.863.396 3.746c.26-.225.617.496.758-.07.151.006.108.285.016.267 1.501-.24 2.976.196 4.676.194 1.154-.403.011-.953.957-.584.058-.112.066.213.068.095.323.141.451-.656.691-.375-.072.352.158.188.174.397.621-.258.746-.584 1.258-.342l-.04-.183c.622.515 1.343.24 1.866.835 3.487.305 7.015-.218 10.238-.181.818-.08 1.325-.125 2.559-.229.651-.082 1.121-.072 2.539-.183l1.244-.36c-1.908.416-.173.116-.44.207l.309-.002.155-.002c-1.6 3.866 2.181-5.263 1.788-4.324l-.007-.006-.012-.011-.025-.02-.053-.043-.105-.082-.222-.158c-.643-.447-1.349-.66-1.712-.658-1.855-.065-1.689.117-2.851.146-.786.479-.845.465-1.708.272.035.076.088.095.031.168-.043-.393-.609-.037-.691-.412-1.24.072-2.382-.036-3.658-.038.201.041.303.364.063.338l-.25-.252-.041.112c-.164-.059-.344-.254-.174-.381-3.206-.34-6.359.451-9.5.353-.746.164-1.807.014-2.617-.066-1.201.262-2.342.498-3.489.625l-1.73.094-.884-.037-.111-.008-.028-.004h-.012a960.811 960.811 0 0 0-.001 3.223h.014l.056.005.226.024.453.058s-.079-.253-.285-.537l-.409-.42-.033-.023-.015-.012-.004-.002-.003-.002h-.001c0-2.81.001-.779.001-1.406h.001l.008.006.07.045.15.082z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(188.488 73.844)',
              }),
              v.createElement('path', {
                d: 'M0 0c.085-.199.363-.314.14-.57C.113-.385-.03-.176 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(189.405 78.97)',
              }),
              v.createElement('path', {
                d: 'M0 0c.011.059.107-.082.13-.115-.094-.012-.184-.176-.256-.072C-.03-.176-.044-.08 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(196.834 76.762)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.03-.174-.443-.303-.687-.318Z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(198.759 76.598)',
              }),
              v.createElement('path', {
                d: 'M0 0c.145-.152.102-.232-.098-.221-.011.094.055.139.098.221',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(200.497 75.819)',
              }),
              v.createElement('path', {
                d: 'M0 0c.144 0 .213-.105.28-.209C.278-.059-.054-.291 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(200.627 76.213)',
              }),
              v.createElement('path', {
                d: 'M0 0c.092.008.301.137.372-.062C.286.08-.088-.25 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(204.364 75.54)',
              }),
              v.createElement('path', {
                d: 'M0 0c.056-.016.077-.049.147-.006C.246-.094.126-.213.036-.223Z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(206.153 75.668)',
              }),
              v.createElement('path', {
                d: 'm0 0 .203.104-.017-.176Z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(189.355 77.692)',
              }),
              v.createElement('path', {
                d: 'M0 0c.193.109.135-.164.167-.191C-.008-.209.231.025 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(200.622 74.485)',
              }),
              v.createElement('path', {
                d: 'M0 0h-.059l.047.355z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(208.267 74.749)',
              }),
              v.createElement('path', {
                d: 'M0 0c.381.08-.205.307.248.137C.197-.006.123-.113 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(184.663 65.395)',
              }),
              v.createElement('path', {
                d: 'M0 0c1.352.729 2.811-.416 4.219-.029.162.015-.106-.49.261-.422 1.375.502 3.356-.127 4.862-.871l-.112-.129c.287-.137.709.285 1.018.182-.009-.094-.117-.122-.059-.258.113.273.588.062.749.256.111-.125.073-.346.22-.489l.22.297c.583.695 1.259-.185 1.963.149-.038-.071-.109-.123-.059-.202 1.132.389 2.536.145 3.775.104-.064-.106-.137-.305-.082-.442.107.327.498.356.836.372.156-.368.525.218.933.033l-.037-.076c.326.343.421-.205.716.179l.161-.31c.227.457.387-.338.686-.143l.019.098c.295.045.087-.104.431-.057l.02-.056c.489.129.774-.145.762.238.172-.307-.475-.141-.205-.588.491.275-2.531.543-3.689 1.072-.131.201-.229.282-.225.43-.178-.016-.608.092-.792-.072.055-.004-.064.215-.144.252-.258.207-.398-.344-.679-.104.146.072.214.184.2.334-.329-.234-.681-.107-1.021-.131.064.053.149.073.161.194-.419-.254-.62.21-.97.07l.16.191c-.435.373-.243-.422-.635-.172.117.047.1.139.138.223-.483-.291-1.1-.061-1.521-.131l.034.088c-.439.022-.873.219-1.372.125-.159.125.134.526-.338.522-.043-.446-.803-.053-.592-.598-.289.107-1.094.433-1.354.359.221.119-.031.567.302.524l-.168.32c.089.164.237-.123.226.115-.174.024-.701-.027-.829.08-.375-.189-.759-.619-1.238-.558.257.115-.035.513.132.551L6.248.801c-.165.004.027.351-.228.275C6.011.957 5.896.9 5.81.818c-.054.061-.691-.003-.693.44-.047.179.279.049.123.232-.303.043-.338-.103-.64-.062l.003.058c-.184.098-.655-.091-.472-.361.218-.047.008.266.212.106-.263-.213-.556-.254-.861-.217.11.056.117.173.177.291-.45-.289-.87-.346-1.311-.432-.028-.207.198.358.252.238-.521.362-1.286-.257-1.725.223.088.025.002-.299.005-.24-.29.06-.23.357-.437.271.084.168-.355-.021-.524-.027-.122-.104-.026.094.134.078-.283-.113-1.332-.082-1.819.19-.009-.116-.377-.399-.488-.375l.07.269c-.1.174-.41.016-.421.252-.29-.309 1.05.185.669-.035-.077.236-.536-.391-.431-.026-.434.053-.093-.357-1.129.1-.019-.031.219.359.117.342-.203-.022.008-.113-.266-.184l-.205-.097c-.035-.266-.336.058-.218-.248.039.201-.815-.032-.655.394l.137.332c-.201-.002-.412-.322-.786-.306-.036.052-.092.16-.048.201-.146-.227-.373-.096-.59.09l-.081.07-.02.017-.01.01-.006.004-.002.004h-.002c-.114-.484.996 4.221.527 2.229l.036.001.136.02a.311.311 0 0 1 .215.184c.531-.116 1.401.107 1.51-.248.277.144.521.322.816.187-.06-.047-.142-.057-.164-.17.186-.17.238-.033.41.043-.044-.084.382-.336.613-.516.278.159.182.448.211.624.255-.528.788.339 1.106-.139-.096-.072-.406-.26-.174-.391.254-.527.514.389.924.135l-.099.437c.182-.271.604.254.562-.191.139.158.495-.164.451.266.686-.389 1.701.148 2.091-.633.103.066.345-.016.307.205-.153.244-.24-.16-.292.004.09.01.115.125.127.183.211-.107.377-.144.156-.49.457-.283.535.705 1.136.51-.04-.174 0-.244.176-.232l.355.269c.382-.105.188-.42.173-.719.211.033.461-.004.573.209l.218-.396c-.159.287.185.164.288.228l-.103-.064c.026-.131.272-.074.395-.049-.012.188-.248.285-.377.352.117.121.278.074.432.216-.073-.287.318-.238.478-.285.182-.08.236.242.291.229-.01-.153.305-.055.138-.252-.07-.045-.132.16-.251.037.113-.125.074-.389.349-.219.207.127.006.58.356.363l-.219-.277.33-.184.041.266.023-.129c.159.268.529.049.643.356.17.017.336-.209.494-.25l-.033-.022c.183-.17.455-.086.635.082l-.014-.058c.106-.028.364-.004.51.142.256-.221.018-1.012.344-.699.279-.01.465.459.365.637.471-.215 1.096.178 1.551-.27.082.102.039.172.198.225.753-.158 1.646.199 2.198-.367-.231-.096-.043-.264-.054-.416.037.261.414-.311.523.086.324.17-.232.423-.387.523 1.114-.051.968-.014 1.293-.312-.07.13-.01.183.074.251-.058-.384.243-.449.477-.318l.039.234.141-.246c.09.073.105.491.322.26l.066-.254c1.611-.144.752.414 1.086.1-.009-.131.084-.235.125-.354.104.036.276.237.115.34.229-.191.769-.273 1.071-.658.594.027.344.266.4.287l-.001.002h-.001v.002L18.695 1.08l-.002-.008-.008-.029-.012-.061V.854l.097-.25c.119-.163.296-.221.191-.239.016-.103-.354-.011-.741.016l.03.176c-.219.168-.123-.305-.273-.18.075.166-.169.367.011.568-.974.27-.715-.179-1.113-.199-.092-.217.221.096.105-.178-.059-.068-.447.299-.587-.027-.056.156.076.389.158.514l-.258-.112c-.166.463.781.557.625 1.114l-.213-.002c-.103.402.629.267.156.513-.259-.111-.568-.556-.412-.756-.476.022-.412-.753-.892-.603-.082.232.402-.051.379.252-.163.33-.498-.037-.68.109.195-.183-.082-.478-.244-.504-.208.223.241.28-.102.403-.106-.18-.467-.246-.221-.453-.236-.414-.338.222-.605-.094-.035.332.531.654.191.881-.014-.311-.563-.321-.471-.805-.124.113-.085.354.065.518-.168.226-.635-.455-.569.158l-.142-.297c-.043.113-.12.207-.191.394-.187.041-.685-.308-.572.159-.071-.037-.491.062-.39-.293.222-.246.35.181.406-.285-.112.392-.388.025-.559-.067l.01.186c-.103-.055-.302.025-.395-.16.088.089.076.22.012.279l-.145-.26c-.387-.07.002.504-.369.49l.308.162c-.067-.033-.144.249-.332.196-.109-.241-.283-.522-.371-.707-.216-.075-.045.303-.281.08l.306.256c.053.076-.108.451-.38.496-.183-.053-.531-.381-.26-.563-.144.018-.322.203-.182.371-.337-.037.002-.279-.302-.394-.09.187-.41.482-.586.762l.357.378-.191.034c.303.302-.087.279.111.617-.123.076-.303-.022-.445-.096.296-.633-.559-.719-.532-1.258-.559-.062-.122 1.323-.814.59.068-.15-.262-.508.1-.408-.321.107-.315-.49-.67-.213.327.17-.219.576.253.824-.058-.17.21-.168.282-.129-.102.221.117.522-.219.575-.215-.02-.498.013-.506-.264-.043-.301.321-.018.137-.299-.431-.041-.418.424-.684-.08.268.002.279-.316.238-.519l-.325-.079.093.19c-.455.215-.22-.334-.659-.217l-.14.42c.163.326.631-.242.653.318-.304.069-.441-.201-.694-.019l.225.08c-.101.033-.081.777-.574.408-.244-.135-.09-.187-.129-.392-.481.001-.653-.19-.959-.18.121.394-.529.115-.135.48.121-.258.801-.328 1.031.031-.095.503.36-.119.543.35-.378.067-.284.533-.296.85-.104.037-.229-.08-.3-.119-.091-.284.05-.299.009-.598-.415.139-.85.033-1.124-.217-.121.162-.037.447.137.451-.521-.015-1.056.1-1.529.256.256-.519-.55-.035-.382-.461.245-.144.425-.513.259-.707-.154.053.029.207-.026.319-.232-.233-.266.466-.518.072.484.103.155.572.282.935-.363-.175.043.266-.295.297a3.883 3.883 0 0 0-1.181-.342c-.438.399-1.201.122-1.623.147-.206.211-.014.619-.249.715-.283.019.168-.477-.233-.242l.048.08c-.052-.096-.836.357-1.084-.168l.258.406c-.061.061-.161-.021-.235-.053.041.145-.007.297.143.36-.162.371-.541.091-.807.15l.11-.311c-.489-.06-.742.186-1.196.151l.038.264-.278-.131c.082.25-.169.443-.316.244l.77.572c.193-.178-.259-.295-.15-.57.086-.24.5-.211.616.035-.16.045-.178-.012-.316-.094-.009.373.244.332.418.563-.094-.006-.209.121-.246.006.203.148.411.193.699.109-.227-.09.057-.252-.039-.336.09.312.398.336.736.15.205-.464.434.131.934-.013a1.895 1.895 0 0 0-.666-.67c.193-.182.271-.016.501-.203.145.232.268.599.616.716l-.006-.244c.312.096.348.455.726.35.645-.182 1.323-.246 1.821-.324l-.007-.244c.333.5.95.097 1.356.265.613-.322 1.432.035 1.702-.426 1.163.028 2.195.069 3.317-.199l-.254-.318c.251.224.101-.223.312-.201-.186.314.341.318.519.509.467-.349 1.173-.154 1.662.022l-.019-.242c.519.388 1.02-.108 1.595-.297.051-.111.118-.358.295-.363.385.328.547.269 1.063.421.342-.064.878-.265 1.189-.48 1.436.326 2.574-.389 3.947-.371l.023-.301c-.013.246 1.216.406 2.286-.043.284-.115.539-.158.977-.613l.492-.627.182-.322.009-.02.005-.01.001-.002c.347.479-3.01-4.179-1.59-2.207h-.004l-.031.004-.06.008-.122.018c-.884.177-.914.158-.785.111l.025.467c-.136.207-.83-.084-.7-.424-.272.09-1.418.014-1.579.49.925-.107-.108-.271-.144-.375-.734.18-1.119.215-2.026.295l.213-.072c.123.088.172.289-.031.359-.48-.016-.385.137-.494-.402-.654.385-1.616-.16-2.248.342.047-.164-.124-.182-.201-.286-.581.036-1.248.411-1.776.174-.095.088.182.26-.078.295-.158-.049-.017-.207-.215-.283-1.075-.217-2.074.445-2.962.459-1.631-.154-3.289.162-4.774.141l.022.115c-.511-.426-1.17.508-1.579-.149-.113.122-.461.063-.371.287-.416-.316-1.164.299-1.765-.103l.151.063c-.616.267-1.118-.116-1.828.177.071.045.199.074.222.19-.255.24-.648-.455-.768.119-.152.004-.123-.277-.029-.268-.463.106-.547.055-.737.059H-4.641v.002c-.017.941.032-2.098-.038 2.113l.017.014.031.025.119.113.18.254c.091.166.146.411.117.534.085.037.272.043.742.068.109.029.573-.006 1.024-.123l.32-.09.078-.025c-1.748.414-.461.115-.84.207l.082.002h.329c1.222-.446.003-.953 1-.621.062-.116.084.209.082.091.406.127.459-.681.732-.449-.031.361.189.156.236.361.575-.349.803-.746 1.143-.521l-.065-.176c.64.443 1.25.094 1.78.629 3.002-.023 7.318-.988 9.63-1.174 3.192-.531 6.303-1.324 9.49-2.312.591-.522.837-.815 1.147-1.043l.523-.342.01-.006.004-.002.001-.002c1.263 3.049-1.719-4.152-1.413-3.41l-.002-.002-.011-.002-.027-.004-.053-.01-.116-.025-.275-.062c.033.076.084.095.029.168-.041-.393-.578-.038-.656-.413-2.181.246-1.047.178-1.867.243-.319-.039-1.539.074-1.897.15.2.014.337.316.105.326l-.273-.213-.025.115c-.164-.035-.361-.203-.216-.351-1.647.111-2.88.291-4.206.568-1.995.338-3.097.678-4.705.811-.688.248-1.711.215-2.491.234-2.228.85-4.212 1.565-6.593 1.537 0 0 .471.959 1.459 1.055',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(189.091 59.92)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.081.195-.348.305-.135.566C-.109.381.027.176 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(184.206 65.356)',
              }),
              v.createElement('path', {
                d: 'M0 0c.016.059.092-.088.111-.123-.088-.006-.187-.162-.246-.055.09.006.086.1.135.178',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(190.501 63.833)',
              }),
              v.createElement('path', {
                d: 'M0 0c-.051-.168-.441-.254-.664-.244Z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(192.25 63.481)',
              }),
              v.createElement('path', {
                d: 'M0 0c.115-.166.064-.24-.122-.209.001.094.07.131.122.209',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(193.767 62.541)',
              }),
              v.createElement('path', {
                d: 'M0 0c.137-.014.187-.125.234-.234C.256-.084-.092-.283 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(193.946 62.919)',
              }),
              v.createElement('path', {
                d: 'M0 0c.092 0 .307.113.357-.092C.287.057-.109-.244 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(197.505 61.872)',
              }),
              v.createElement('path', {
                d: 'M0 0c.05-.021.066-.057.134-.021C.217-.119.097-.225.015-.227Z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(199.252 61.868)',
              }),
              v.createElement('path', {
                d: 'm0 0 .184.086-.027-.174Z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(188.724 64.612)',
              }),
              v.createElement('path', {
                d: 'M0 0c.186.086.092-.178.115-.207C-.039-.205.207-.002 0 0',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(192.357 60.612)',
              }),
              v.createElement('path', {
                d: 'm0 0-.057.004.067.351Z',
                style: { fill: '#414142', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(199.706 60.14)',
              }),
              v.createElement('path', {
                d: 'M0 0a1.375 1.375 0 1 0-2.75 0A1.375 1.375 0 0 0 0 0',
                style: { fill: '#231f20', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(199.495 106.918)',
              }),
              v.createElement('path', {
                d: 'M0 0a1.374 1.374 0 1 0-2.748-.002A1.374 1.374 0 0 0 0 0',
                style: { fill: '#231f20', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' },
                transform: 'translate(218.786 104.042)',
              }),
              v.createElement('path', {
                d: 'M0 0c-20.668-26.07-54.592-36.707-86-27-47.46 14.666-2.691 79.447 23.805 53.975C-36.463 2.236-110.597-28.146-124.028 8c-5.699 15.336-2.071 32.197-22.19 38.777-15.657 5.121-32.603-5.498-39.055-20.033-1.548-3.484-2.151-7.246-3.727-10.744',
                style: {
                  fill: 'none',
                  stroke: '#231f20',
                  strokeWidth: 2,
                  strokeLinecap: 'butt',
                  strokeLinejoin: 'miter',
                  strokeMiterlimit: 4,
                  strokeDasharray: 10,
                  strokeDashoffset: 0,
                  strokeOpacity: 1,
                },
                transform: 'translate(189.911 31.544)',
              })
            )
          )
        },
        b = t(7233),
        O = t(890),
        E = t(2557)
      function z() {
        return (0, n.tZ)('footer', {
          children: (0, n.BX)('div', {
            className: 'mt-16 flex flex-col items-center',
            children: [
              (0, n.BX)('div', {
                className: 'mb-3 flex space-x-4',
                children: [
                  (0, n.tZ)(E.Z, { kind: 'mail', href: 'mailto:'.concat(o().email), size: '6' }),
                  (0, n.tZ)(E.Z, { kind: 'github', href: o().github, size: '6' }),
                  (0, n.tZ)(E.Z, { kind: 'facebook', href: o().facebook, size: '6' }),
                  (0, n.tZ)(E.Z, { kind: 'youtube', href: o().youtube, size: '6' }),
                  (0, n.tZ)(E.Z, { kind: 'linkedin', href: o().linkedin, size: '6' }),
                  (0, n.tZ)(E.Z, { kind: 'twitter', href: o().twitter, size: '6' }),
                ],
              }),
              (0, n.BX)('div', {
                className: 'mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400',
                children: [
                  (0, n.tZ)('div', { children: o().author }),
                  (0, n.tZ)('div', { children: ' \u2022 ' }),
                  (0, n.tZ)('div', { children: '\xa9 '.concat(new Date().getFullYear()) }),
                  (0, n.tZ)('div', { children: ' \u2022 ' }),
                  (0, n.tZ)(b.Z, { href: '/', children: o().title }),
                ],
              }),
              (0, n.tZ)('div', { className: 'mb-8 text-sm text-gray-500 dark:text-gray-400' }),
            ],
          }),
        })
      }
      var R = function () {
          var e = (0, v.useState)(!1),
            l = e[0],
            t = e[1],
            r = function () {
              t(function (e) {
                return (document.body.style.overflow = e ? 'auto' : 'hidden'), !e
              })
            }
          return (0, n.BX)('div', {
            className: 'sm:hidden',
            children: [
              (0, n.tZ)('button', {
                type: 'button',
                className: 'ml-1 mr-1 h-8 w-8 rounded py-1',
                'aria-label': 'Toggle Menu',
                onClick: r,
                children: (0, n.tZ)('svg', {
                  xmlns: 'http://www.w3.org/2000/svg',
                  viewBox: '0 0 20 20',
                  fill: 'currentColor',
                  className: 'text-gray-900 dark:text-gray-100',
                  children: (0, n.tZ)('path', {
                    fillRule: 'evenodd',
                    d: 'M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z',
                    clipRule: 'evenodd',
                  }),
                }),
              }),
              (0, n.BX)('div', {
                className:
                  'fixed top-0 left-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800 '.concat(
                    l ? 'translate-x-0' : 'translate-x-full'
                  ),
                children: [
                  (0, n.tZ)('div', {
                    className: 'flex justify-end',
                    children: (0, n.tZ)('button', {
                      type: 'button',
                      className: 'mr-5 mt-11 h-8 w-8 rounded',
                      'aria-label': 'Toggle Menu',
                      onClick: r,
                      children: (0, n.tZ)('svg', {
                        xmlns: 'http://www.w3.org/2000/svg',
                        viewBox: '0 0 20 20',
                        fill: 'currentColor',
                        className: 'text-gray-900 dark:text-gray-100',
                        children: (0, n.tZ)('path', {
                          fillRule: 'evenodd',
                          d: 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z',
                          clipRule: 'evenodd',
                        }),
                      }),
                    }),
                  }),
                  (0, n.tZ)('nav', {
                    className: 'fixed mt-8 h-full',
                    children: h.map(function (e) {
                      return (0,
                      n.tZ)('div', { className: 'px-12 py-4', children: (0, n.tZ)(b.Z, { href: e.href, className: 'text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100', onClick: r, children: e.title }) }, e.title)
                    }),
                  }),
                ],
              }),
            ],
          })
        },
        w = function () {
          var e = (0, v.useState)(!1),
            l = e[0],
            t = e[1],
            a = (0, r.F)(),
            c = a.theme,
            o = a.setTheme,
            i = a.resolvedTheme
          return (
            (0, v.useEffect)(function () {
              return t(!0)
            }, []),
            (0, n.tZ)('button', {
              'aria-label': 'Toggle Dark Mode',
              type: 'button',
              className: 'ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4',
              onClick: function () {
                return o('dark' === c || 'dark' === i ? 'light' : 'dark')
              },
              children: (0, n.tZ)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 20 20',
                fill: 'currentColor',
                className: 'text-gray-900 dark:text-gray-100',
                children:
                  !l || ('dark' !== c && 'dark' !== i)
                    ? (0, n.tZ)('path', {
                        d: 'M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z',
                      })
                    : (0, n.tZ)('path', {
                        fillRule: 'evenodd',
                        d: 'M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z',
                        clipRule: 'evenodd',
                      }),
              }),
            })
          )
        },
        M = function (e) {
          var l = e.children
          return (0, n.tZ)(O.Z, {
            children: (0, n.BX)('div', {
              className: 'flex h-screen flex-col justify-between',
              children: [
                (0, n.BX)('header', {
                  className: 'flex items-center justify-between py-10',
                  children: [
                    (0, n.tZ)('div', {
                      children: (0, n.tZ)(b.Z, {
                        href: '/',
                        'aria-label': o().headerTitle,
                        children: (0, n.BX)('div', {
                          className: 'flex items-center justify-between',
                          children: [
                            (0, n.tZ)('div', { className: 'mr-3', children: (0, n.tZ)(k, {}) }),
                            'string' === typeof o().headerTitle
                              ? (0, n.tZ)('div', {
                                  className: 'hidden h-6 text-2xl font-semibold sm:block',
                                  children: o().headerTitle,
                                })
                              : o().headerTitle,
                          ],
                        }),
                      }),
                    }),
                    (0, n.BX)('div', {
                      className: 'flex items-center text-base leading-5',
                      children: [
                        (0, n.tZ)('div', {
                          className: 'hidden sm:block',
                          children: h.map(function (e) {
                            return (0,
                            n.tZ)(b.Z, { href: e.href, className: 'p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4', children: e.title }, e.title)
                          }),
                        }),
                        (0, n.tZ)(w, {}),
                        (0, n.tZ)(R, {}),
                      ],
                    }),
                  ],
                }),
                (0, n.tZ)('main', { className: 'mb-auto', children: l }),
                (0, n.tZ)(z, {}),
              ],
            }),
          })
        },
        C = (t(1163), t(3454))
      function Z(e, l, t) {
        return (
          l in e
            ? Object.defineProperty(e, l, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[l] = t),
          e
        )
      }
      function x(e) {
        for (var l = 1; l < arguments.length; l++) {
          var t = null != arguments[l] ? arguments[l] : {},
            n = Object.keys(t)
          'function' === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
              })
            )),
            n.forEach(function (l) {
              Z(e, l, t[l])
            })
        }
        return e
      }
      C.env.SOCKET
      function _(e) {
        var l = e.Component,
          t = e.pageProps
        return (0, n.BX)(r.f, {
          attribute: 'class',
          defaultTheme: o().theme,
          children: [
            (0, n.tZ)(a.default, {
              children: (0, n.tZ)('meta', {
                content: 'width=device-width, initial-scale=1',
                name: 'viewport',
              }),
            }),
            false,
            (0, n.tZ)(y, {}),
            (0, n.tZ)(M, { children: (0, n.tZ)(l, x({}, t)) }),
          ],
        })
      }
    },
    8102: function () {},
    3941: function () {},
    7661: function () {},
    2604: function () {},
    7663: function (e) {
      !(function () {
        var l = {
            162: function (e) {
              var l,
                t,
                n = (e.exports = {})
              function r() {
                throw new Error('setTimeout has not been defined')
              }
              function a() {
                throw new Error('clearTimeout has not been defined')
              }
              function c(e) {
                if (l === setTimeout) return setTimeout(e, 0)
                if ((l === r || !l) && setTimeout) return (l = setTimeout), setTimeout(e, 0)
                try {
                  return l(e, 0)
                } catch (n) {
                  try {
                    return l.call(null, e, 0)
                  } catch (n) {
                    return l.call(this, e, 0)
                  }
                }
              }
              !(function () {
                try {
                  l = 'function' === typeof setTimeout ? setTimeout : r
                } catch (e) {
                  l = r
                }
                try {
                  t = 'function' === typeof clearTimeout ? clearTimeout : a
                } catch (e) {
                  t = a
                }
              })()
              var o,
                i = [],
                s = !1,
                f = -1
              function u() {
                s && o && ((s = !1), o.length ? (i = o.concat(i)) : (f = -1), i.length && m())
              }
              function m() {
                if (!s) {
                  var e = c(u)
                  s = !0
                  for (var l = i.length; l; ) {
                    for (o = i, i = []; ++f < l; ) o && o[f].run()
                    ;(f = -1), (l = i.length)
                  }
                  ;(o = null),
                    (s = !1),
                    (function (e) {
                      if (t === clearTimeout) return clearTimeout(e)
                      if ((t === a || !t) && clearTimeout)
                        return (t = clearTimeout), clearTimeout(e)
                      try {
                        t(e)
                      } catch (l) {
                        try {
                          return t.call(null, e)
                        } catch (l) {
                          return t.call(this, e)
                        }
                      }
                    })(e)
                }
              }
              function p(e, l) {
                ;(this.fun = e), (this.array = l)
              }
              function d() {}
              ;(n.nextTick = function (e) {
                var l = new Array(arguments.length - 1)
                if (arguments.length > 1)
                  for (var t = 1; t < arguments.length; t++) l[t - 1] = arguments[t]
                i.push(new p(e, l)), 1 !== i.length || s || c(m)
              }),
                (p.prototype.run = function () {
                  this.fun.apply(null, this.array)
                }),
                (n.title = 'browser'),
                (n.browser = !0),
                (n.env = {}),
                (n.argv = []),
                (n.version = ''),
                (n.versions = {}),
                (n.on = d),
                (n.addListener = d),
                (n.once = d),
                (n.off = d),
                (n.removeListener = d),
                (n.removeAllListeners = d),
                (n.emit = d),
                (n.prependListener = d),
                (n.prependOnceListener = d),
                (n.listeners = function (e) {
                  return []
                }),
                (n.binding = function (e) {
                  throw new Error('process.binding is not supported')
                }),
                (n.cwd = function () {
                  return '/'
                }),
                (n.chdir = function (e) {
                  throw new Error('process.chdir is not supported')
                }),
                (n.umask = function () {
                  return 0
                })
            },
          },
          t = {}
        function n(e) {
          var r = t[e]
          if (void 0 !== r) return r.exports
          var a = (t[e] = { exports: {} }),
            c = !0
          try {
            l[e](a, a.exports, n), (c = !1)
          } finally {
            c && delete t[e]
          }
          return a.exports
        }
        n.ab = '//'
        var r = n(162)
        e.exports = r
      })()
    },
    9008: function (e, l, t) {
      e.exports = t(3121)
    },
    1664: function (e, l, t) {
      e.exports = t(1551)
    },
    1163: function (e, l, t) {
      e.exports = t(880)
    },
    4298: function (e, l, t) {
      e.exports = t(3573)
    },
    6584: function (e, l, t) {
      'use strict'
      t.r(l),
        t.d(l, {
          Fragment: function () {
            return n.HY
          },
          jsx: function () {
            return a
          },
          jsxs: function () {
            return a
          },
          jsxDEV: function () {
            return a
          },
        })
      var n = t(6400),
        r = 0
      function a(e, l, t, a, c) {
        var o,
          i,
          s = {}
        for (i in l) 'ref' == i ? (o = l[i]) : (s[i] = l[i])
        var f = {
          type: e,
          props: s,
          key: t,
          ref: o,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __d: void 0,
          __c: null,
          __h: null,
          constructor: void 0,
          __v: --r,
          __source: c,
          __self: a,
        }
        if ('function' == typeof e && (o = e.defaultProps))
          for (i in o) void 0 === s[i] && (s[i] = o[i])
        return n.YM.vnode && n.YM.vnode(f), f
      }
    },
    7320: function (e, l, t) {
      'use strict'
      t.d(l, {
        HY: function () {
          return n.Fragment
        },
        tZ: function () {
          return n.jsx
        },
        BX: function () {
          return n.jsxs
        },
      })
      t(1720)
      var n = t(6584)
    },
  },
  function (e) {
    var l = function (l) {
      return e((e.s = l))
    }
    e.O(0, [179], function () {
      return l(1780), l(880)
    })
    var t = e.O()
    _N_E = t
  },
])
