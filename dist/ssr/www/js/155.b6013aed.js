'use strict';
(globalThis['webpackChunkcommon_project'] =
  globalThis['webpackChunkcommon_project'] || []).push([
  [155],
  {
    60870: (e, t, o) => {
      o.d(t, { Z: () => s });
      var n = o(59835);
      const s = (0, n.aZ)({ name: 'ErrorNotFound' });
    },
    51765: (e, t, o) => {
      o.d(t, { s: () => r });
      var n = o(59835);
      const s = {
          class:
            'fullscreen bg-blue text-white text-center q-pa-md flex flex-center',
        },
        l = (0, n._)('div', { style: { 'font-size': '30vh' } }, ' 404 ', -1),
        c = (0, n._)(
          'div',
          { class: 'text-h2', style: { opacity: '.4' } },
          ' Oops. Nothing here... ',
          -1
        );
      function r(e, t, o, r, a, d) {
        const i = (0, n.up)('q-btn');
        return (
          (0, n.wg)(),
          (0, n.iD)('div', s, [
            (0, n._)('div', null, [
              l,
              c,
              (0, n.Wm)(i, {
                class: 'q-mt-xl',
                color: 'white',
                'text-color': 'blue',
                unelevated: '',
                to: '/',
                label: 'Go Home',
                'no-caps': '',
              }),
            ]),
          ])
        );
      }
    },
    55155: (e, t, o) => {
      o.r(t), o.d(t, { default: () => i });
      var n = o(22007),
        s = o(74648),
        l = o(11639),
        c = o(74541),
        r = o(69984),
        a = o.n(r);
      const d = (0, l.Z)(s.Z, [['render', n.s]]),
        i = d;
      a()(s.Z, 'components', { QBtn: c.Z });
    },
    74648: (e, t, o) => {
      o.d(t, { Z: () => n.Z });
      var n = o(60870);
    },
    22007: (e, t, o) => {
      o.d(t, { s: () => n.s });
      var n = o(51765);
    },
  },
]);
