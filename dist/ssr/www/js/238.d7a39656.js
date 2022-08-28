(globalThis['webpackChunkcommon_project'] =
  globalThis['webpackChunkcommon_project'] || []).push([
  [238],
  {
    68790: (s, t, e) => {
      'use strict';
      e.d(t, { Z: () => i });
      var n = e(59835),
        r = e(13126),
        o = e(90151);
      const i = (0, n.aZ)({
        name: 'post-item',
        props: { post: { type: Object, required: !0 }, type: String },
        setup(s) {
          var t, e;
          const { useGetAssetById: n } = (0, r.u)(),
            { data: i } = n(
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
            heroImage: i,
            publishTime: (0, o.J)(s.post.fields.publishDate),
          };
        },
      });
    },
    59343: (s, t, e) => {
      'use strict';
      e.d(t, { Z: () => i });
      var n = e(59835),
        r = e(38136),
        o = e(35325);
      const i = (0, n.aZ)({
        name: 'Post-List',
        components: { 'post-item': o.Z },
        preFetch() {
          const s = (0, r.Y)();
          return s.getEntries();
        },
        setup() {
          const s = (0, r.Y)();
          return { posts: (0, n.Fl)(() => s.entries.items) };
        },
      });
    },
    74989: (s, t, e) => {
      'use strict';
      e.d(t, { s: () => j });
      var n = e(59835),
        r = e(86970);
      const o = ['src'],
        i = { class: 'post-item__content tw-w-3/5 tw-pl-6 tw-py-6' },
        a = { class: 'tw-mb-0' },
        c = { class: 'tw-uppercase tw-font-bold tw-text-sm' },
        l = { class: 'tw-text-sm tw-opacity-75 tw-ml-2' },
        d = { class: 'text-3-lines tw-max-w-xl' },
        u = (0, n.Uk)('Read more');
      function j(s, t, e, j, m, h) {
        var p, f;
        const g = (0, n.up)('router-link'),
          v = (0, n.up)('q-btn');
        return (
          (0, n.wg)(),
          (0, n.iD)(
            'div',
            {
              class: (0, r.C_)(
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
              (0, n._)('div', i, [
                (0, n._)('p', a, [
                  (0, n._)(
                    'span',
                    c,
                    (0, r.zw)(
                      null ===
                        (f =
                          null === (p = s.post.fields.author) || void 0 === p
                            ? void 0
                            : p.fields) || void 0 === f
                        ? void 0
                        : f.name
                    ),
                    1
                  ),
                  (0, n._)('span', l, (0, r.zw)(s.publishTime), 1),
                ]),
                (0, n.Wm)(
                  g,
                  {
                    to: `/lion-sharing/${s.post.sys.id}`,
                    class:
                      'tw-font-bold tw-text-3xl tw-text-black tw-no-underline',
                  },
                  {
                    default: (0, n.w5)(() => [
                      (0, n.Uk)((0, r.zw)(s.post.fields.title), 1),
                    ]),
                    _: 1,
                  },
                  8,
                  ['to']
                ),
                (0, n._)('p', d, (0, r.zw)(s.post.fields.description), 1),
                (0, n.Wm)(
                  v,
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
    55514: (s, t, e) => {
      'use strict';
      e.d(t, { s: () => c });
      var n = e(59835);
      const r = (s) => (
          (0, n.dD)('data-v-942c6dc0'), (s = s()), (0, n.Cn)(), s
        ),
        o = { id: 'posts', class: 'posts' },
        i = r(() =>
          (0, n._)(
            'div',
            { class: 'posts__main' },
            [
              (0, n._)(
                'div',
                {
                  class:
                    'container tw-h-full tw-flex tw-justify-end tw-items-center',
                },
                [
                  (0, n._)(
                    'div',
                    {
                      class:
                        'text-white tw-rounded-lg posts__title text-bold text-h4',
                    },
                    [
                      (0, n.Uk)(' Find Out About New'),
                      (0, n._)('br'),
                      (0, n.Uk)(' Trends And Updates'),
                      (0, n._)('br'),
                      (0, n.Uk)(' In Our Field '),
                    ]
                  ),
                ]
              ),
            ],
            -1
          )
        ),
        a = { class: 'container tw-pt-16' };
      function c(s, t, e, r, c, l) {
        const d = (0, n.up)('post-item');
        return (
          (0, n.wg)(),
          (0, n.iD)('section', o, [
            i,
            (0, n._)('div', a, [
              ((0, n.wg)(!0),
              (0, n.iD)(
                n.HY,
                null,
                (0, n.Ko)(
                  s.posts,
                  (s) => (
                    (0, n.wg)(),
                    (0, n.j4)(
                      d,
                      { class: 'post-item', post: s, key: s.sys.id },
                      null,
                      8,
                      ['post']
                    )
                  )
                ),
                128
              )),
            ]),
          ])
        );
      }
    },
    13126: (s, t, e) => {
      'use strict';
      e.d(t, { u: () => c });
      var n = e(6117),
        r = e(61832),
        o = e(60499),
        i = e(59835),
        a = function (s, t, e, n) {
          function r(s) {
            return s instanceof e
              ? s
              : new e(function (t) {
                  t(s);
                });
          }
          return new (e || (e = Promise))(function (e, o) {
            function i(s) {
              try {
                c(n.next(s));
              } catch (t) {
                o(t);
              }
            }
            function a(s) {
              try {
                c(n['throw'](s));
              } catch (t) {
                o(t);
              }
            }
            function c(s) {
              s.done ? e(s.value) : r(s.value).then(i, a);
            }
            c((n = n.apply(s, t || [])).next());
          });
        };
      const c = () => {
        const s = (0, r.s)(),
          t = (t) => s.imageCaches[t],
          e = (t) =>
            a(void 0, void 0, void 0, function* () {
              if (!t) return Promise.resolve(null);
              const e = yield n.J.getAssetById(t);
              s.imageCaches[t] = e.fields.file.url;
            }),
          c = (t, n = !1) => {
            const r = (0, o.iH)(!1),
              a = () => {
                if (((r.value = !0), !s.imageCaches[t]))
                  return e(t)
                    .catch((s) => console.error(s))
                    .finally(() => (r.value = !1));
              };
            n && a();
            const c = (0, i.Fl)(() => s.imageCaches[t]);
            return { data: c, fetching: (0, o.OT)(r), refetch: a };
          };
        return {
          getAssetById: e,
          useGetAssetById: c,
          getPostAssetLocalById: t,
        };
      };
    },
    6117: (s, t, e) => {
      'use strict';
      e.d(t, { J: () => i });
      var n = e(87737);
      let r;
      const o = () => (
          r ||
            (r = (0, n.e)({
              space: 'jkfhzam7uuko',
              accessToken: 'GgqISh2nG2cAKo1nJ3rTh_98o993tXNr4HHyGw1WMkU',
            })),
          r
        ),
        i = {
          getEntries: (s) => o().getEntries(s),
          getEntry: (s) => o().getEntry(s),
          getAssetById: (s) => o().getAsset(s),
        };
    },
    90151: (s, t, e) => {
      'use strict';
      e.d(t, { J: () => o });
      var n = e(43878),
        r = e.n(n);
      function o(s) {
        return s
          ? (r().relativeTimeRounding(Math.floor),
            r().updateLocale('en', {
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
            r().relativeTimeThreshold('s', 60),
            r().relativeTimeThreshold('m', 60),
            r().relativeTimeThreshold('h', 24),
            r().relativeTimeThreshold('d', 30),
            r()(s).locale('us').fromNow(!0))
          : '';
      }
    },
    61832: (s, t, e) => {
      'use strict';
      e.d(t, { s: () => r });
      var n = e(28732);
      const r = (0, n.Q_)('global', {
        state: () => ({ footer: { title: '' }, imageCaches: {} }),
      });
    },
    38136: (s, t, e) => {
      'use strict';
      e.d(t, { Y: () => a });
      var n = e(28732),
        r = e(6117),
        o = e(24409),
        i = function (s, t, e, n) {
          function r(s) {
            return s instanceof e
              ? s
              : new e(function (t) {
                  t(s);
                });
          }
          return new (e || (e = Promise))(function (e, o) {
            function i(s) {
              try {
                c(n.next(s));
              } catch (t) {
                o(t);
              }
            }
            function a(s) {
              try {
                c(n['throw'](s));
              } catch (t) {
                o(t);
              }
            }
            function c(s) {
              s.done ? e(s.value) : r(s.value).then(i, a);
            }
            c((n = n.apply(s, t || [])).next());
          });
        };
      const a = (0, n.Q_)('post', {
        state: () => ({ entries: { items: [], limit: 20, skip: 0, total: 0 } }),
        actions: {
          getEntries() {
            return i(this, void 0, void 0, function* () {
              try {
                const s = yield r.J.getEntries();
                console.log('entries', s), (this.entries = s);
              } catch (s) {
                console.log(s);
              }
            });
          },
          getEntryById(s) {
            return i(this, void 0, void 0, function* () {
              try {
                const t = yield r.J.getEntry(s),
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
      e.d(t, { Z: () => d });
      var n = e(58821),
        r = e(27714),
        o = e(11639),
        i = e(74541),
        a = e(69984),
        c = e.n(a);
      const l = (0, o.Z)(r.Z, [
          ['render', n.s],
          ['__scopeId', 'data-v-9ed319dc'],
        ]),
        d = l;
      c()(r.Z, 'components', { QBtn: i.Z });
    },
    64639: (s, t, e) => {
      'use strict';
      e.r(t), e.d(t, { default: () => a });
      var n = e(43554),
        r = e(44684),
        o = e(11639);
      const i = (0, o.Z)(r.Z, [
          ['render', n.s],
          ['__scopeId', 'data-v-942c6dc0'],
        ]),
        a = i;
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
      function r(s) {
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
      (r.keys = function () {
        return Object.keys(n);
      }),
        (r.resolve = o),
        (s.exports = r),
        (r.id = 46700);
    },
    27714: (s, t, e) => {
      'use strict';
      e.d(t, { Z: () => n.Z });
      var n = e(68790);
    },
    44684: (s, t, e) => {
      'use strict';
      e.d(t, { Z: () => n.Z });
      var n = e(59343);
    },
    58821: (s, t, e) => {
      'use strict';
      e.d(t, { s: () => n.s });
      var n = e(74989);
    },
    43554: (s, t, e) => {
      'use strict';
      e.d(t, { s: () => n.s });
      var n = e(55514);
    },
    24654: () => {},
  },
]);
