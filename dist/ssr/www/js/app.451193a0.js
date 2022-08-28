(() => {
  'use strict';
  var e = {
      61859: (e, t, r) => {
        r.d(t, { Z: () => d });
        var o = r(17016),
          n = r(60499),
          a = r(41675),
          i = r(26455),
          c = r(47473),
          s = r(59835);
        const l = (0, s.aZ)({
          name: 'AppWrapper',
          setup(e) {
            return (
              (0, s.bv)(() => {
                const {
                  proxy: { $q: e },
                } = (0, s.FN)();
                void 0 !== e.onSSRHydrated && e.onSSRHydrated();
              }),
              () => (0, s.h)(a.Z, e)
            );
          },
        });
        async function d(e, t, r) {
          const a = e(l);
          a.use(o.Z, t, r);
          const s =
            'function' === typeof i.Z ? await (0, i.Z)({ ssrContext: r }) : i.Z;
          a.use(s),
            'undefined' !== typeof window &&
              void 0 !== window.__INITIAL_STATE__ &&
              ((s.state.value = window.__INITIAL_STATE__),
              delete window.__INITIAL_STATE__);
          const d = (0, n.Xl)(
            'function' === typeof c.Z
              ? await (0, c.Z)({ ssrContext: r, store: s })
              : c.Z
          );
          return (
            s.use(({ store: e }) => {
              e.router = d;
            }),
            { app: a, store: s, router: d }
          );
        }
      },
      17190: (e, t, r) => {
        r(18964), r(40702);
        var o = r(61957),
          n = r(61859),
          a = r(76365),
          i = r(35055);
        const c = '/';
        async function s({ app: e, router: t, store: r }, o) {
          let n = !1;
          const a = (e) => {
              try {
                return t.resolve(e).href;
              } catch (r) {}
              return Object(e) === e ? null : e;
            },
            s = (e) => {
              if (((n = !0), 'string' === typeof e && /^https?:\/\//.test(e)))
                return void (window.location.href = e);
              const t = a(e);
              null !== t && (window.location.href = t);
            },
            l = window.location.href.replace(window.location.origin, '');
          for (let i = 0; !1 === n && i < o.length; i++)
            try {
              await o[i]({
                app: e,
                router: t,
                store: r,
                ssrContext: null,
                redirect: s,
                urlPath: l,
                publicPath: c,
              });
            } catch (d) {
              return d && d.url
                ? void s(d.url)
                : void console.error('[Quasar] boot error:', d);
            }
          !0 !== n &&
            (e.use(t),
            t.isReady().then(() => {
              (0, i.p)({ router: t, store: r, publicPath: c }),
                e.mount('#q-app');
            }));
        }
        (0, n.Z)(o.vr, a.Z).then((e) =>
          Promise.all([
            Promise.resolve().then(r.bind(r, 65026)),
            Promise.resolve().then(r.bind(r, 18444)),
          ]).then((t) => {
            const r = t
              .map((e) => e.default)
              .filter((e) => 'function' === typeof e);
            s(e, r);
          })
        );
      },
      35055: (e, t, r) => {
        r.d(t, { p: () => n });
        r(18964);
        function o(e, t) {
          const r = e
            ? e.matched
              ? e
              : t.resolve(e).route
            : t.currentRoute.value;
          return r
            ? Array.prototype.concat.apply(
                [],
                r.matched.map((e) =>
                  Object.keys(e.components).map((t) => {
                    const r = e.components[t];
                    return { path: e.path, c: r };
                  })
                )
              )
            : [];
        }
        function n({ router: e, store: t, publicPath: r }) {
          e.beforeResolve((n, a, i) => {
            const c = window.location.href.replace(window.location.origin, ''),
              s = o(n, e),
              l = o(a, e);
            let d = !1;
            const u = s
              .filter(
                (e, t) =>
                  d ||
                  (d = !l[t] || l[t].c !== e.c || e.path.indexOf('/:') > -1)
              )
              .filter(
                (e) =>
                  void 0 !== e.c &&
                  ('function' === typeof e.c.preFetch ||
                    (void 0 !== e.c.__c &&
                      'function' === typeof e.c.__c.preFetch))
              )
              .map((e) =>
                void 0 !== e.c.__c ? e.c.__c.preFetch : e.c.preFetch
              );
            if (0 === u.length) return i();
            let p = !1;
            const h = (e) => {
                (p = !0), i(e);
              },
              f = () => {
                !1 === p && i();
              };
            u.reduce(
              (e, o) =>
                e.then(
                  () =>
                    !1 === p &&
                    o({
                      store: t,
                      currentRoute: n,
                      previousRoute: a,
                      redirect: h,
                      urlPath: c,
                      publicPath: r,
                    })
                ),
              Promise.resolve()
            )
              .then(f)
              .catch((e) => {
                console.error(e), f();
              });
          });
        }
      },
      76365: (e, t, r) => {
        r.d(t, { Z: () => n });
        var o = r(63431);
        const n = { config: {}, plugins: { Meta: o.ZP } };
      },
      7440: (e, t, r) => {
        r.d(t, { Z: () => n });
        var o = r(59835);
        const n = (0, o.aZ)({ name: 'App' });
      },
      39621: (e, t, r) => {
        r.d(t, { s: () => n });
        var o = r(59835);
        function n(e, t, r, n, a, i) {
          const c = (0, o.up)('router-view');
          return (0, o.wg)(), (0, o.j4)(c);
        }
      },
      18444: (e, t, r) => {
        r.r(t), r.d(t, { api: () => i, default: () => c });
        var o = r(23340),
          n = r(39981),
          a = r.n(n);
        const i = a().create({ baseURL: 'https://api.example.com' }),
          c = (0, o.xr)(({ app: e }) => {
            (e.config.globalProperties.$axios = a()),
              (e.config.globalProperties.$api = i);
          });
      },
      65026: (e, t, r) => {
        r.r(t), r.d(t, { default: () => i });
        var o = r(23340),
          n = r(78110),
          a = r(65995);
        const i = (0, o.xr)(({ app: e }) => {
          const t = (0, n.o)({ locale: 'en-US', messages: a.Z });
          e.use(t);
        });
      },
      89550: (e, t, r) => {
        r.d(t, { Z: () => o });
        const o = { failed: 'Action failed', success: 'Action was successful' };
      },
      65995: (e, t, r) => {
        r.d(t, { Z: () => n });
        var o = r(89550);
        const n = { 'en-US': o.Z };
      },
      47473: (e, t, r) => {
        r.d(t, { Z: () => i });
        var o = r(23340),
          n = r(28339),
          a = r(20157);
        const i = (0, o.BC)(function () {
          const e = n.PO,
            t = (0, n.p7)({
              scrollBehavior: () => ({ left: 0, top: 0 }),
              routes: a.Z,
              history: e(void 0),
            });
          return t;
        });
      },
      20157: (e, t, r) => {
        r.d(t, { Z: () => n });
        const o = [
            {
              path: '/',
              component: () =>
                Promise.all([r.e(736), r.e(248)]).then(r.bind(r, 22248)),
              children: [
                {
                  path: '',
                  component: () =>
                    Promise.all([r.e(736), r.e(837)]).then(r.bind(r, 68837)),
                },
                {
                  path: 'lion-sharing',
                  component: () =>
                    Promise.all([r.e(736), r.e(238)]).then(r.bind(r, 64639)),
                },
                {
                  path: 'lion-sharing/:postId',
                  component: () =>
                    Promise.all([r.e(736), r.e(947)]).then(r.bind(r, 35066)),
                },
                {
                  path: 'about-us',
                  component: () => r.e(785).then(r.bind(r, 85785)),
                },
                {
                  path: 'lion-people',
                  component: () => r.e(441).then(r.bind(r, 55441)),
                },
              ],
            },
            {
              path: '/:catchAll(.*)*',
              component: () =>
                Promise.all([r.e(736), r.e(155)]).then(r.bind(r, 55155)),
            },
          ],
          n = o;
      },
      26455: (e, t, r) => {
        r.d(t, { Z: () => a });
        var o = r(28732),
          n = r(23340);
        const a = (0, n.h)(() => {
          const e = (0, o.WB)();
          return e;
        });
      },
      41675: (e, t, r) => {
        r.d(t, { Z: () => c });
        var o = r(39621),
          n = r(26026),
          a = r(11639);
        const i = (0, a.Z)(n.Z, [['render', o.s]]),
          c = i;
      },
      26026: (e, t, r) => {
        r.d(t, { Z: () => o.Z });
        var o = r(7440);
      },
    },
    t = {};
  function r(o) {
    var n = t[o];
    if (void 0 !== n) return n.exports;
    var a = (t[o] = { id: o, loaded: !1, exports: {} });
    return e[o].call(a.exports, a, a.exports, r), (a.loaded = !0), a.exports;
  }
  (r.m = e),
    (() => {
      var e = [];
      r.O = (t, o, n, a) => {
        if (!o) {
          var i = 1 / 0;
          for (d = 0; d < e.length; d++) {
            for (var [o, n, a] = e[d], c = !0, s = 0; s < o.length; s++)
              (!1 & a || i >= a) && Object.keys(r.O).every((e) => r.O[e](o[s]))
                ? o.splice(s--, 1)
                : ((c = !1), a < i && (i = a));
            if (c) {
              e.splice(d--, 1);
              var l = n();
              void 0 !== l && (t = l);
            }
          }
          return t;
        }
        a = a || 0;
        for (var d = e.length; d > 0 && e[d - 1][2] > a; d--) e[d] = e[d - 1];
        e[d] = [o, n, a];
      };
    })(),
    (() => {
      r.n = (e) => {
        var t = e && e.__esModule ? () => e['default'] : () => e;
        return r.d(t, { a: t }), t;
      };
    })(),
    (() => {
      r.d = (e, t) => {
        for (var o in t)
          r.o(t, o) &&
            !r.o(e, o) &&
            Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
      };
    })(),
    (() => {
      (r.f = {}),
        (r.e = (e) =>
          Promise.all(
            Object.keys(r.f).reduce((t, o) => (r.f[o](e, t), t), [])
          ));
    })(),
    (() => {
      r.u = (e) =>
        'js/' +
        e +
        '.' +
        {
          155: 'b6013aed',
          238: 'd7a39656',
          248: '9e7329ac',
          441: 'dd036dd0',
          785: 'db86066e',
          837: 'fa9dca78',
          947: '8d06bf8e',
        }[e] +
        '.js';
    })(),
    (() => {
      r.miniCssF = (e) =>
        'css/' +
        ({ 143: 'app', 736: 'vendor' }[e] || e) +
        '.' +
        {
          143: 'df8779f9',
          238: 'febc3547',
          248: 'a5c1a35c',
          441: 'ec81ff52',
          736: 'ae5e627f',
          785: '1a3792c5',
          837: 'bc78b20a',
          947: 'ee8d2211',
        }[e] +
        '.css';
    })(),
    (() => {
      r.g = (function () {
        if ('object' === typeof globalThis) return globalThis;
        try {
          return this || new Function('return this')();
        } catch (e) {
          if ('object' === typeof window) return window;
        }
      })();
    })(),
    (() => {
      r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
    })(),
    (() => {
      var e = {},
        t = 'common-project:';
      r.l = (o, n, a, i) => {
        if (e[o]) e[o].push(n);
        else {
          var c, s;
          if (void 0 !== a)
            for (
              var l = document.getElementsByTagName('script'), d = 0;
              d < l.length;
              d++
            ) {
              var u = l[d];
              if (
                u.getAttribute('src') == o ||
                u.getAttribute('data-webpack') == t + a
              ) {
                c = u;
                break;
              }
            }
          c ||
            ((s = !0),
            (c = document.createElement('script')),
            (c.charset = 'utf-8'),
            (c.timeout = 120),
            r.nc && c.setAttribute('nonce', r.nc),
            c.setAttribute('data-webpack', t + a),
            (c.src = o)),
            (e[o] = [n]);
          var p = (t, r) => {
              (c.onerror = c.onload = null), clearTimeout(h);
              var n = e[o];
              if (
                (delete e[o],
                c.parentNode && c.parentNode.removeChild(c),
                n && n.forEach((e) => e(r)),
                t)
              )
                return t(r);
            },
            h = setTimeout(
              p.bind(null, void 0, { type: 'timeout', target: c }),
              12e4
            );
          (c.onerror = p.bind(null, c.onerror)),
            (c.onload = p.bind(null, c.onload)),
            s && document.head.appendChild(c);
        }
      };
    })(),
    (() => {
      r.r = (e) => {
        'undefined' !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      };
    })(),
    (() => {
      r.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e);
    })(),
    (() => {
      r.p = '/';
    })(),
    (() => {
      var e = (e, t, r, o) => {
          var n = document.createElement('link');
          (n.rel = 'stylesheet'), (n.type = 'text/css');
          var a = (a) => {
            if (((n.onerror = n.onload = null), 'load' === a.type)) r();
            else {
              var i = a && ('load' === a.type ? 'missing' : a.type),
                c = (a && a.target && a.target.href) || t,
                s = new Error(
                  'Loading CSS chunk ' + e + ' failed.\n(' + c + ')'
                );
              (s.code = 'CSS_CHUNK_LOAD_FAILED'),
                (s.type = i),
                (s.request = c),
                n.parentNode.removeChild(n),
                o(s);
            }
          };
          return (
            (n.onerror = n.onload = a),
            (n.href = t),
            document.head.appendChild(n),
            n
          );
        },
        t = (e, t) => {
          for (
            var r = document.getElementsByTagName('link'), o = 0;
            o < r.length;
            o++
          ) {
            var n = r[o],
              a = n.getAttribute('data-href') || n.getAttribute('href');
            if ('stylesheet' === n.rel && (a === e || a === t)) return n;
          }
          var i = document.getElementsByTagName('style');
          for (o = 0; o < i.length; o++) {
            (n = i[o]), (a = n.getAttribute('data-href'));
            if (a === e || a === t) return n;
          }
        },
        o = (o) =>
          new Promise((n, a) => {
            var i = r.miniCssF(o),
              c = r.p + i;
            if (t(i, c)) return n();
            e(o, c, n, a);
          }),
        n = { 143: 0 };
      r.f.miniCss = (e, t) => {
        var r = { 238: 1, 248: 1, 441: 1, 785: 1, 837: 1, 947: 1 };
        n[e]
          ? t.push(n[e])
          : 0 !== n[e] &&
            r[e] &&
            t.push(
              (n[e] = o(e).then(
                () => {
                  n[e] = 0;
                },
                (t) => {
                  throw (delete n[e], t);
                }
              ))
            );
      };
    })(),
    (() => {
      var e = { 143: 0 };
      (r.f.j = (t, o) => {
        var n = r.o(e, t) ? e[t] : void 0;
        if (0 !== n)
          if (n) o.push(n[2]);
          else {
            var a = new Promise((r, o) => (n = e[t] = [r, o]));
            o.push((n[2] = a));
            var i = r.p + r.u(t),
              c = new Error(),
              s = (o) => {
                if (r.o(e, t) && ((n = e[t]), 0 !== n && (e[t] = void 0), n)) {
                  var a = o && ('load' === o.type ? 'missing' : o.type),
                    i = o && o.target && o.target.src;
                  (c.message =
                    'Loading chunk ' + t + ' failed.\n(' + a + ': ' + i + ')'),
                    (c.name = 'ChunkLoadError'),
                    (c.type = a),
                    (c.request = i),
                    n[1](c);
                }
              };
            r.l(i, s, 'chunk-' + t, t);
          }
      }),
        (r.O.j = (t) => 0 === e[t]);
      var t = (t, o) => {
          var n,
            a,
            [i, c, s] = o,
            l = 0;
          if (i.some((t) => 0 !== e[t])) {
            for (n in c) r.o(c, n) && (r.m[n] = c[n]);
            if (s) var d = s(r);
          }
          for (t && t(o); l < i.length; l++)
            (a = i[l]), r.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
          return r.O(d);
        },
        o = (globalThis['webpackChunkcommon_project'] =
          globalThis['webpackChunkcommon_project'] || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var o = r.O(void 0, [736], () => r(17190));
  o = r.O(o);
})();
