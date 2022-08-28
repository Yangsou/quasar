void 0 === process.env.NODE_ENV && (process.env.NODE_ENV = 'production'),
  (() => {
    var e = {
        118: (e) => {
          (e.exports.UY = function (e) {
            return e;
          }),
            (e.exports.h5 = function (e) {
              return e;
            });
        },
        492: (e, r, t) => {
          'use strict';
          t.r(r), t.d(r, { default: () => s });
          const n = require('compression');
          var o = t.n(n);
          const s = (0, t(118).UY)(({ app: e }) => {
            e.use(o()({ threshold: 0 }));
          });
        },
        549: (e, r, t) => {
          'use strict';
          t.r(r), t.d(r, { default: () => n });
          const n = (0, t(118).UY)(
            ({ app: e, resolve: r, render: t, serve: n }) => {
              e.get(r.urlPath('*'), (e, r) => {
                r.setHeader('Content-Type', 'text/html'),
                  t({ req: e, res: r })
                    .then((e) => {
                      r.send(e);
                    })
                    .catch((e) => {
                      e.url
                        ? e.code
                          ? r.redirect(e.code, e.url)
                          : r.redirect(e.url)
                        : 404 === e.code
                        ? r.status(404).send('404 | Page Not Found')
                        : r.status(500).send('500 | Internal Server Error');
                    });
              });
            }
          );
        },
      },
      r = {};
    function t(n) {
      var o = r[n];
      if (void 0 !== o) return o.exports;
      var s = (r[n] = { exports: {} });
      return e[n](s, s.exports, t), s.exports;
    }
    (t.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return t.d(r, { a: r }), r;
    }),
      (t.d = (e, r) => {
        for (var n in r)
          t.o(r, n) &&
            !t.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: r[n] });
      }),
      (t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
      (t.r = (e) => {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      });
    var n = {};
    (() => {
      'use strict';
      t.d(n, { default: () => T });
      const e = require('path'),
        r = require('express');
      var o = t.n(r);
      const s = require('@vue/server-renderer'),
        a = require('@quasar/ssr-helpers/create-renderer');
      var i = t.n(a);
      const u = require('./render-template.js');
      var c = t.n(u);
      const d = require('./quasar.server-manifest.json');
      var l = t.n(d);
      const v = require('./quasar.client-manifest.json');
      var p = t.n(v),
        f = t(118);
      const h = (0, f.h5)(({ app: e, port: r, isReady: t }) => {
          return (
            (n = void 0),
            (o = void 0),
            (a = function* () {
              return (
                yield t(),
                e.listen(r, () => {
                  console.log('Server listening at port ' + r);
                })
              );
            }),
            new ((s = void 0) || (s = Promise))(function (e, r) {
              function t(e) {
                try {
                  u(a.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function i(e) {
                try {
                  u(a.throw(e));
                } catch (e) {
                  r(e);
                }
              }
              function u(r) {
                var n;
                r.done
                  ? e(r.value)
                  : ((n = r.value),
                    n instanceof s
                      ? n
                      : new s(function (e) {
                          e(n);
                        })).then(t, i);
              }
              u((a = a.apply(n, o || [])).next());
            })
          );
          var n, o, s, a;
        }),
        m = o()(),
        y = process.env.PORT || 3e3,
        g = (e) => e || '/',
        b = __dirname,
        x = (0, e.join)(__dirname, 'www');
      function P() {
        return (0, e.join)(x, ...arguments);
      }
      const S = (e, r = {}) =>
          o().static(P(e), {
            ...r,
            maxAge: void 0 === r.maxAge ? 2592e6 : r.maxAge,
          }),
        q = i()({
          vueRenderToString: s.renderToString,
          basedir: __dirname,
          serverManifest: l(),
          clientManifest: p(),
          manualStoreSerialization: !1,
        });
      m.use(g('/'), S('.'));
      const _ = {
          app: m,
          resolve: {
            urlPath: g,
            root() {
              return (0, e.join)(b, ...arguments);
            },
            public: P,
          },
          publicPath: '/',
          folders: { root: b, public: x },
          render: (e) => q(e, c()),
          serve: { static: S },
        },
        j =
          ((w = _),
          Promise.all([
            Promise.resolve().then(t.bind(t, 492)),
            Promise.resolve().then(t.bind(t, 549)),
          ]).then(async (e) => {
            const r = e.map((e) => e.default);
            for (let e = 0; e < r.length; e++)
              try {
                await r[e](w);
              } catch (e) {
                return void console.error('[Quasar SSR] middleware error:', e);
              }
          }));
      var w;
      const O = () => j,
        T = h({
          port: y,
          isReady: O,
          ssrHandler: (e, r, t) => O().then(() => m(e, r, t)),
          ..._,
        });
    })(),
      (module.exports = n.default);
  })();
