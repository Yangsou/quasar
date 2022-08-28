(globalThis['webpackChunkcommon_project'] =
  globalThis['webpackChunkcommon_project'] || []).push([
  [947],
  {
    68790: (s, t, e) => {
      'use strict';
      e.d(t, { Z: () => r });
      var n = e(59835),
        i = e(13126),
        o = e(90151);
      const r = (0, n.aZ)({
        name: 'post-item',
        props: { post: { type: Object, required: !0 }, type: String },
        setup(s) {
          var t, e;
          const { useGetAssetById: n } = (0, i.u)(),
            { data: r } = n(
              null ===
                (e =
                  null === (t = s.post.fields.heroImage) || void 0 === t
                    ? void 0
                    : t.sys) || void 0 === e
                ? void 0
                : e.id,
              !0
            );
          return {
            heroImage: r,
            publishTime: (0, o.J)(s.post.fields.publishDate),
          };
        },
      });
    },
    89102: (s, t, e) => {
      'use strict';
      e.d(t, { Z: () => u });
      var n = e(59835),
        i = e(24409),
        o = e(28339),
        r = e(52512),
        a = e(95919),
        l = e(38136),
        d = e(90151),
        c = e(35325);
      const u = (0, n.aZ)({
        name: 'post-detail',
        preFetch({ currentRoute: s }) {
          const t = (0, l.Y)();
          return t.getEntryById(s.params.postId);
        },
        setup() {
          var s, t, e, c;
          const u = (0, l.Y)(),
            j = (0, o.yj)(),
            m = (0, n.Fl)(() => j.params.postId),
            p = (0, n.Fl)(() => u.getEntryLocalById(m.value)),
            h = (0, n.Fl)(() => {
              const s = (0, i.get)(p.value, 'fields.body', '');
              return (0, r.TU)(s);
            });
          return (
            (0, a.Z)({
              title:
                null ===
                  (t =
                    null === (s = p.value) || void 0 === s
                      ? void 0
                      : s.fields) || void 0 === t
                  ? void 0
                  : t.title,
              meta: {
                description: {
                  name: 'description',
                  content:
                    null === (e = p.value) || void 0 === e
                      ? void 0
                      : e.fields.description,
                },
              },
            }),
            {
              entry: p,
              get: i.get,
              postId: m,
              markdownToHtml: h,
              posts: (0, n.Fl)(() => u.interestingPosts),
              publishTime: (0, d.J)(
                null === (c = p.value) || void 0 === c
                  ? void 0
                  : c.fields.publishDate
              ),
            }
          );
        },
        components: { PostItem: c.Z },
      });
    },
    74989: (s, t, e) => {
      'use strict';
      e.d(t, { s: () => j });
      var n = e(59835),
        i = e(86970);
      const o = ['src'],
        r = { class: 'post-item__content tw-w-3/5 tw-pl-6 tw-py-6' },
        a = { class: 'tw-mb-0' },
        l = { class: 'tw-uppercase tw-font-bold tw-text-sm' },
        d = { class: 'tw-text-sm tw-opacity-75 tw-ml-2' },
        c = { class: 'text-3-lines tw-max-w-xl' },
        u = (0, n.Uk)('Read more');
      function j(s, t, e, j, m, p) {
        var h, w;
        const v = (0, n.up)('router-link'),
          g = (0, n.up)('q-btn');
        return (
          (0, n.wg)(),
          (0, n.iD)(
            'div',
            {
              class: (0, i.C_)(
                `flex ${
                  s.type ? `tw-flex-${s.type}` : ''
                } tw-shadow-2xl tw-rounded-lg post-item tw-justify-between tw-mb-6`
              ),
            },
            [
              (0, n._)(
                'img',
                {
                  src: s.heroImage,
                  class:
                    'post-item__hero-img tw-object-cover tw-rounded-tl-xl tw-rounded-bl-xl tw-w-2/5',
                },
                null,
                8,
                o
              ),
              (0, n._)('div', r, [
                (0, n._)('p', a, [
                  (0, n._)(
                    'span',
                    l,
                    (0, i.zw)(
                      null ===
                        (w =
                          null === (h = s.post.fields.author) || void 0 === h
                            ? void 0
                            : h.fields) || void 0 === w
                        ? void 0
                        : w.name
                    ),
                    1
                  ),
                  (0, n._)('span', d, (0, i.zw)(s.publishTime), 1),
                ]),
                (0, n.Wm)(
                  v,
                  {
                    to: `/lion-sharing/${s.post.sys.id}`,
                    class:
                      'tw-font-bold tw-text-3xl tw-text-black tw-no-underline',
                  },
                  {
                    default: (0, n.w5)(() => [
                      (0, n.Uk)((0, i.zw)(s.post.fields.title), 1),
                    ]),
                    _: 1,
                  },
                  8,
                  ['to']
                ),
                (0, n._)('p', c, (0, i.zw)(s.post.fields.description), 1),
                (0, n.Wm)(
                  g,
                  {
                    class: 'd-btn-secondary',
                    href: `/lion-sharing/${s.post.sys.id}`,
                  },
                  { default: (0, n.w5)(() => [u]), _: 1 },
                  8,
                  ['href']
                ),
              ]),
            ],
            2
          )
        );
      }
    },
    5757: (s, t, e) => {
      'use strict';
      e.d(t, { s: () => f });
      var n = e(59835),
        i = e(86970);
      const o = { id: 'post-detail', class: 'post-detail' },
        r = { class: 'post-detail__main' },
        a = ['src'],
        l = { class: 'container tw-relative' },
        d = {
          class:
            'post-detail__wrap tw-px-4 tw-bg-white tw-py-8 tw-shadow-xl tw-transform tw--translate-y-32',
        },
        c = { class: 'tw-text-3xl tw-font-bold tw-text-center' },
        u = { class: 'tw-mb-0 tw-mx-auto tw-max-w-xl' },
        j = { class: 'tw-uppercase' },
        m = { class: 'tw-text-sm tw-opacity-75 tw-ml-2' },
        p = (0, n._)(
          'div',
          {
            class: 'tw-w-full tw-max-w-xl tw-mx-auto tw-bg-gray-300 tw-my-4',
            style: { height: '1px' },
          },
          null,
          -1
        ),
        h = ['innerHTML'],
        w = { class: 'container' },
        v = (0, n._)(
          'p',
          { class: 'tw-text-2xl tw-font-bold' },
          'Interesting Articles to Read',
          -1
        ),
        g = { class: 'tw-grid tw-grid-cols-3 tw-gap-6' };
      function f(s, t, e, f, y, b) {
        var k, _, x, z, T, I;
        const Z = (0, n.up)('post-item');
        return (
          (0, n.wg)(),
          (0, n.iD)('section', o, [
            (0, n._)('div', r, [
              (0, n._)(
                'img',
                {
                  src:
                    null ===
                      (_ =
                        null === (k = s.entry) || void 0 === k
                          ? void 0
                          : k.fields.heroImage.fields.file) || void 0 === _
                      ? void 0
                      : _.url,
                  class: 'post-detail__hero-img',
                },
                null,
                8,
                a
              ),
            ]),
            (0, n._)('div', l, [
              (0, n._)('div', d, [
                (0, n._)(
                  'p',
                  c,
                  (0, i.zw)(
                    null === (x = s.entry) || void 0 === x
                      ? void 0
                      : x.fields.title
                  ),
                  1
                ),
                (0, n._)('p', u, [
                  (0, n._)(
                    'span',
                    j,
                    (0, i.zw)(
                      null ===
                        (I =
                          null ===
                            (T =
                              null === (z = s.entry) || void 0 === z
                                ? void 0
                                : z.fields.author) || void 0 === T
                            ? void 0
                            : T.fields) || void 0 === I
                        ? void 0
                        : I.name
                    ),
                    1
                  ),
                  (0, n._)('span', m, (0, i.zw)(s.publishTime), 1),
                ]),
                p,
                (0, n._)(
                  'div',
                  {
                    class: 'markdown tw-max-w-3xl tw-mx-auto',
                    innerHTML: s.markdownToHtml,
                  },
                  null,
                  8,
                  h
                ),
              ]),
            ]),
            (0, n._)('div', w, [
              v,
              (0, n._)('div', g, [
                ((0, n.wg)(!0),
                (0, n.iD)(
                  n.HY,
                  null,
                  (0, n.Ko)(
                    s.posts,
                    (s) => (
                      (0, n.wg)(),
                      (0, n.j4)(
                        Z,
                        {
                          key: s.sys.id,
                          post: s,
                          type: 'col',
                          class: 'tw-w-full',
                        },
                        null,
                        8,
                        ['post']
                      )
                    )
                  ),
                  128
                )),
              ]),
            ]),
          ])
        );
      }
    },
    13126: (s, t, e) => {
      'use strict';
      e.d(t, { u: () => l });
      var n = e(6117),
        i = e(61832),
        o = e(60499),
        r = e(59835),
        a = function (s, t, e, n) {
          function i(s) {
            return s instanceof e
              ? s
              : new e(function (t) {
                  t(s);
                });
          }
          return new (e || (e = Promise))(function (e, o) {
            function r(s) {
              try {
                l(n.next(s));
              } catch (t) {
                o(t);
              }
            }
            function a(s) {
              try {
                l(n['throw'](s));
              } catch (t) {
                o(t);
              }
            }
            function l(s) {
              s.done ? e(s.value) : i(s.value).then(r, a);
            }
            l((n = n.apply(s, t || [])).next());
          });
        };
      const l = () => {
        const s = (0, i.s)(),
          t = (t) => s.imageCaches[t],
          e = (t) =>
            a(void 0, void 0, void 0, function* () {
              if (!t) return Promise.resolve(null);
              const e = yield n.J.getAssetById(t);
              s.imageCaches[t] = e.fields.file.url;
            }),
          l = (t, n = !1) => {
            const i = (0, o.iH)(!1),
              a = () => {
                if (((i.value = !0), !s.imageCaches[t]))
                  return e(t)
                    .catch((s) => console.error(s))
                    .finally(() => (i.value = !1));
              };
            n && a();
            const l = (0, r.Fl)(() => s.imageCaches[t]);
            return { data: l, fetching: (0, o.OT)(i), refetch: a };
          };
        return {
          getAssetById: e,
          useGetAssetById: l,
          getPostAssetLocalById: t,
        };
      };
    },
    6117: (s, t, e) => {
      'use strict';
      e.d(t, { J: () => r });
      var n = e(87737);
      let i;
      const o = () => (
          i ||
            (i = (0, n.e)({
              space: 'jkfhzam7uuko',
              accessToken: 'GgqISh2nG2cAKo1nJ3rTh_98o993tXNr4HHyGw1WMkU',
            })),
          i
        ),
        r = {
          getEntries: (s) => o().getEntries(s),
          getEntry: (s) => o().getEntry(s),
          getAssetById: (s) => o().getAsset(s),
        };
    },
    90151: (s, t, e) => {
      'use strict';
      e.d(t, { J: () => o });
      var n = e(43878),
        i = e.n(n);
      function o(s) {
        return s
          ? (i().relativeTimeRounding(Math.floor),
            i().updateLocale('en', {
              relativeTime: {
                future: 'in %s',
                past: '%s ago',
                s: 'Just now',
                ss: '%d seconds',
                m: '1 minute ago',
                mm: '%d minutes ago',
                h: '1 hour ago',
                hh: '%d hours ago',
                d: '1 day ago',
                dd: (s) => {
                  if (s < 7) return s + ' days ago';
                  const t = Math.floor(s / 7);
                  return `${t} ${t > 1 ? 'weeks' : 'week'} ago`;
                },
                M: '1 month ago',
                MM: '%d months ago',
                y: '1 year ago',
                yy: '%d years ago',
              },
            }),
            i().relativeTimeThreshold('s', 60),
            i().relativeTimeThreshold('m', 60),
            i().relativeTimeThreshold('h', 24),
            i().relativeTimeThreshold('d', 30),
            i()(s).locale('us').fromNow(!0))
          : '';
      }
    },
    61832: (s, t, e) => {
      'use strict';
      e.d(t, { s: () => i });
      var n = e(28732);
      const i = (0, n.Q_)('global', {
        state: () => ({ footer: { title: '' }, imageCaches: {} }),
      });
    },
    38136: (s, t, e) => {
      'use strict';
      e.d(t, { Y: () => a });
      var n = e(28732),
        i = e(6117),
        o = e(24409),
        r = function (s, t, e, n) {
          function i(s) {
            return s instanceof e
              ? s
              : new e(function (t) {
                  t(s);
                });
          }
          return new (e || (e = Promise))(function (e, o) {
            function r(s) {
              try {
                l(n.next(s));
              } catch (t) {
                o(t);
              }
            }
            function a(s) {
              try {
                l(n['throw'](s));
              } catch (t) {
                o(t);
              }
            }
            function l(s) {
              s.done ? e(s.value) : i(s.value).then(r, a);
            }
            l((n = n.apply(s, t || [])).next());
          });
        };
      const a = (0, n.Q_)('post', {
        state: () => ({ entries: { items: [], limit: 20, skip: 0, total: 0 } }),
        actions: {
          getEntries() {
            return r(this, void 0, void 0, function* () {
              try {
                const s = yield i.J.getEntries();
                console.log('entries', s), (this.entries = s);
              } catch (s) {
                console.log(s);
              }
            });
          },
          getEntryById(s) {
            return r(this, void 0, void 0, function* () {
              try {
                const t = yield i.J.getEntry(s),
                  e = (0, o.cloneDeep)(this.entries.items),
                  n = e.findIndex((s) => s.sys.id === t.sys.id);
                n > -1
                  ? (e[n] = Object.assign(Object.assign({}, e[n]), t))
                  : e.push(t),
                  (this.entries = Object.assign(
                    Object.assign({}, this.entries),
                    { items: e }
                  ));
              } catch (t) {}
            });
          },
        },
        getters: {
          getEntryLocalById(s) {
            return (t) => s.entries.items.find((s) => s.sys.id === t);
          },
          interestingPosts(s) {
            return s.entries.items.slice(0, 3);
          },
        },
      });
    },
    35325: (s, t, e) => {
      'use strict';
      e.d(t, { Z: () => c });
      var n = e(58821),
        i = e(27714),
        o = e(11639),
        r = e(74541),
        a = e(69984),
        l = e.n(a);
      const d = (0, o.Z)(i.Z, [
          ['render', n.s],
          ['__scopeId', 'data-v-9ed319dc'],
        ]),
        c = d;
      l()(i.Z, 'components', { QBtn: r.Z });
    },
    35066: (s, t, e) => {
      'use strict';
      e.r(t), e.d(t, { default: () => a });
      var n = e(18766),
        i = e(1114),
        o = e(11639);
      const r = (0, o.Z)(i.Z, [['render', n.s]]),
        a = r;
    },
    46700: (s, t, e) => {
      var n = {
        './af': 73902,
        './af.js': 73902,
        './ar': 36314,
        './ar-dz': 75666,
        './ar-dz.js': 75666,
        './ar-kw': 76591,
        './ar-kw.js': 76591,
        './ar-ly': 7900,
        './ar-ly.js': 7900,
        './ar-ma': 5667,
        './ar-ma.js': 5667,
        './ar-sa': 36335,
        './ar-sa.js': 36335,
        './ar-tn': 86916,
        './ar-tn.js': 86916,
        './ar.js': 36314,
        './az': 1699,
        './az.js': 1699,
        './be': 98988,
        './be.js': 98988,
        './bg': 97437,
        './bg.js': 97437,
        './bm': 97947,
        './bm.js': 97947,
        './bn': 12851,
        './bn.js': 12851,
        './bo': 97346,
        './bo.js': 97346,
        './br': 1711,
        './br.js': 1711,
        './bs': 63706,
        './bs.js': 63706,
        './ca': 70112,
        './ca.js': 70112,
        './cs': 36406,
        './cs.js': 36406,
        './cv': 41853,
        './cv.js': 41853,
        './cy': 39766,
        './cy.js': 39766,
        './da': 36836,
        './da.js': 36836,
        './de': 59320,
        './de-at': 14904,
        './de-at.js': 14904,
        './de-ch': 26710,
        './de-ch.js': 26710,
        './de.js': 59320,
        './dv': 73274,
        './dv.js': 73274,
        './el': 80286,
        './el.js': 80286,
        './en-au': 30143,
        './en-au.js': 30143,
        './en-ca': 237,
        './en-ca.js': 237,
        './en-gb': 82428,
        './en-gb.js': 82428,
        './en-ie': 53349,
        './en-ie.js': 53349,
        './en-il': 13764,
        './en-il.js': 13764,
        './en-nz': 59851,
        './en-nz.js': 59851,
        './eo': 4483,
        './eo.js': 4483,
        './es': 62184,
        './es-do': 25777,
        './es-do.js': 25777,
        './es-us': 68496,
        './es-us.js': 68496,
        './es.js': 62184,
        './et': 97578,
        './et.js': 97578,
        './eu': 2092,
        './eu.js': 2092,
        './fa': 15927,
        './fa.js': 15927,
        './fi': 50171,
        './fi.js': 50171,
        './fo': 89937,
        './fo.js': 89937,
        './fr': 55172,
        './fr-ca': 77495,
        './fr-ca.js': 77495,
        './fr-ch': 97541,
        './fr-ch.js': 97541,
        './fr.js': 55172,
        './fy': 37907,
        './fy.js': 37907,
        './gd': 2282,
        './gd.js': 2282,
        './gl': 52630,
        './gl.js': 52630,
        './gom-latn': 66220,
        './gom-latn.js': 66220,
        './gu': 57506,
        './gu.js': 57506,
        './he': 5540,
        './he.js': 5540,
        './hi': 46067,
        './hi.js': 46067,
        './hr': 79669,
        './hr.js': 79669,
        './hu': 13396,
        './hu.js': 13396,
        './hy-am': 36678,
        './hy-am.js': 36678,
        './id': 44812,
        './id.js': 44812,
        './is': 94193,
        './is.js': 94193,
        './it': 67863,
        './it.js': 67863,
        './ja': 41809,
        './ja.js': 41809,
        './jv': 28657,
        './jv.js': 28657,
        './ka': 33290,
        './ka.js': 33290,
        './kk': 98418,
        './kk.js': 98418,
        './km': 77687,
        './km.js': 77687,
        './kn': 21375,
        './kn.js': 21375,
        './ko': 32641,
        './ko.js': 32641,
        './ky': 85459,
        './ky.js': 85459,
        './lb': 91978,
        './lb.js': 91978,
        './lo': 86915,
        './lo.js': 86915,
        './lt': 8948,
        './lt.js': 8948,
        './lv': 12548,
        './lv.js': 12548,
        './me': 98608,
        './me.js': 98608,
        './mi': 50333,
        './mi.js': 50333,
        './mk': 76611,
        './mk.js': 76611,
        './ml': 10999,
        './ml.js': 10999,
        './mn': 54098,
        './mn.js': 54098,
        './mr': 86111,
        './mr.js': 86111,
        './ms': 73717,
        './ms-my': 90265,
        './ms-my.js': 90265,
        './ms.js': 73717,
        './mt': 28980,
        './mt.js': 28980,
        './my': 96895,
        './my.js': 96895,
        './nb': 15348,
        './nb.js': 15348,
        './ne': 31493,
        './ne.js': 31493,
        './nl': 34419,
        './nl-be': 85576,
        './nl-be.js': 85576,
        './nl.js': 34419,
        './nn': 46907,
        './nn.js': 46907,
        './pa-in': 89239,
        './pa-in.js': 89239,
        './pl': 97627,
        './pl.js': 97627,
        './pt': 15703,
        './pt-br': 91623,
        './pt-br.js': 91623,
        './pt.js': 15703,
        './ro': 22747,
        './ro.js': 22747,
        './ru': 64420,
        './ru.js': 64420,
        './sd': 52148,
        './sd.js': 52148,
        './se': 12461,
        './se.js': 12461,
        './si': 12783,
        './si.js': 12783,
        './sk': 93306,
        './sk.js': 93306,
        './sl': 341,
        './sl.js': 341,
        './sq': 8608,
        './sq.js': 8608,
        './sr': 72451,
        './sr-cyrl': 73371,
        './sr-cyrl.js': 73371,
        './sr.js': 72451,
        './ss': 8812,
        './ss.js': 8812,
        './sv': 53820,
        './sv.js': 53820,
        './sw': 43615,
        './sw.js': 43615,
        './ta': 12869,
        './ta.js': 12869,
        './te': 12044,
        './te.js': 12044,
        './tet': 65861,
        './tet.js': 65861,
        './tg': 66999,
        './tg.js': 66999,
        './th': 20926,
        './th.js': 20926,
        './tl-ph': 59786,
        './tl-ph.js': 59786,
        './tlh': 92812,
        './tlh.js': 92812,
        './tr': 16952,
        './tr.js': 16952,
        './tzl': 9573,
        './tzl.js': 9573,
        './tzm': 55990,
        './tzm-latn': 92851,
        './tzm-latn.js': 92851,
        './tzm.js': 55990,
        './ug-cn': 52610,
        './ug-cn.js': 52610,
        './uk': 9498,
        './uk.js': 9498,
        './ur': 83970,
        './ur.js': 83970,
        './uz': 19006,
        './uz-latn': 26,
        './uz-latn.js': 26,
        './uz.js': 19006,
        './vi': 9962,
        './vi.js': 9962,
        './x-pseudo': 68407,
        './x-pseudo.js': 68407,
        './yo': 91962,
        './yo.js': 91962,
        './zh-cn': 28909,
        './zh-cn.js': 28909,
        './zh-hk': 34014,
        './zh-hk.js': 34014,
        './zh-tw': 36327,
        './zh-tw.js': 36327,
      };
      function i(s) {
        var t = o(s);
        return e(t);
      }
      function o(s) {
        if (!e.o(n, s)) {
          var t = new Error("Cannot find module '" + s + "'");
          throw ((t.code = 'MODULE_NOT_FOUND'), t);
        }
        return n[s];
      }
      (i.keys = function () {
        return Object.keys(n);
      }),
        (i.resolve = o),
        (s.exports = i),
        (i.id = 46700);
    },
    27714: (s, t, e) => {
      'use strict';
      e.d(t, { Z: () => n.Z });
      var n = e(68790);
    },
    1114: (s, t, e) => {
      'use strict';
      e.d(t, { Z: () => n.Z });
      var n = e(89102);
    },
    58821: (s, t, e) => {
      'use strict';
      e.d(t, { s: () => n.s });
      var n = e(74989);
    },
    18766: (s, t, e) => {
      'use strict';
      e.d(t, { s: () => n.s });
      var n = e(5757);
    },
    24654: () => {},
  },
]);
