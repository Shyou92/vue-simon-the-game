(function (e) {
  function t(t) {
    for (
      var a, s, u = t[0], i = t[1], o = t[2], l = 0, m = [];
      l < u.length;
      l++
    )
      (s = u[l]),
        Object.prototype.hasOwnProperty.call(r, s) && r[s] && m.push(r[s][0]),
        (r[s] = 0);
    for (a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
    d && d(t);
    while (m.length) m.shift()();
    return c.push.apply(c, o || []), n();
  }
  function n() {
    for (var e, t = 0; t < c.length; t++) {
      for (var n = c[t], a = !0, u = 1; u < n.length; u++) {
        var i = n[u];
        0 !== r[i] && (a = !1);
      }
      a && (c.splice(t--, 1), (e = s((s.s = n[0]))));
    }
    return e;
  }
  var a = {},
    r = { app: 0 },
    c = [];
  function s(t) {
    if (a[t]) return a[t].exports;
    var n = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.m = e),
    (s.c = a),
    (s.d = function (e, t, n) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (s.r = function (e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (s.t = function (e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && 'object' === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (s.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var a in e)
          s.d(
            n,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return n;
    }),
    (s.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e['default'];
            }
          : function () {
              return e;
            };
      return s.d(t, 'a', t), t;
    }),
    (s.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = '/vue-simon-the-game/');
  var u = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    i = u.push.bind(u);
  (u.push = t), (u = u.slice());
  for (var o = 0; o < u.length; o++) t(u[o]);
  var d = i;
  c.push([0, 'chunk-vendors']), n();
})({
  0: function (e, t, n) {
    e.exports = n('56d7');
  },
  '196f': function (e, t, n) {
    e.exports = n.p + 'media/3.c1c96b44.mp3';
  },
  '1d51': function (e, t, n) {},
  '3c6d': function (e, t, n) {
    e.exports = n.p + 'media/1.99e50f7d.mp3';
  },
  '3cf8': function (e, t, n) {
    e.exports = n.p + 'media/2.d2c4a2c4.mp3';
  },
  '56d7': function (e, t, n) {
    'use strict';
    n.r(t);
    n('e260'), n('e6cf'), n('cca6'), n('a79d');
    var a = n('7a23'),
      r = { id: 'app' };
    function c(e, t, n, c, s, u) {
      var i = Object(a['m'])('Playfield');
      return Object(a['i'])(), Object(a['d'])('div', r, [Object(a['g'])(i)]);
    }
    var s = function (e) {
        return (
          Object(a['k'])('data-v-ca73dc76'), (e = e()), Object(a['j'])(), e
        );
      },
      u = { class: 'playfield' },
      i = s(function () {
        return Object(a['e'])(
          'h2',
          { class: 'playfield__header' },
          'Simon Says',
          -1
        );
      }),
      o = { key: 1, class: 'container' };
    function d(e, t, n, r, c, s) {
      var d = Object(a['m'])('GameIsOver'),
        l = Object(a['m'])('Board'),
        m = Object(a['m'])('DashBoard');
      return (
        Object(a['i'])(),
        Object(a['d'])('div', u, [
          i,
          c.isGameOver
            ? (Object(a['i'])(),
              Object(a['c'])(
                d,
                { key: 0, round: c.round, restart: s.restart },
                null,
                8,
                ['round', 'restart']
              ))
            : (Object(a['i'])(),
              Object(a['d'])('div', o, [
                Object(a['g'])(
                  l,
                  {
                    soundsArray: c.soundsArray,
                    changeItemState: s.changeItemState,
                    gameIsStarted: c.gameIsStarted,
                    userSequence: c.userSequence,
                    checkSequence: s.checkSequence,
                  },
                  null,
                  8,
                  [
                    'soundsArray',
                    'changeItemState',
                    'gameIsStarted',
                    'userSequence',
                    'checkSequence',
                  ]
                ),
                Object(a['g'])(
                  m,
                  {
                    gameIsStarted: c.gameIsStarted,
                    startGame: s.startGame,
                    round: c.round,
                    timePaused: c.timePaused,
                    onTimeChange: s.onTimeChange,
                  },
                  null,
                  8,
                  [
                    'gameIsStarted',
                    'startGame',
                    'round',
                    'timePaused',
                    'onTimeChange',
                  ]
                ),
              ])),
        ])
      );
    }
    n('d3b7'), n('159b');
    var l = { class: 'border' },
      m = { class: 'board__list' };
    function h(e, t, n, r, c, s) {
      var u = Object(a['m'])('BoardItem');
      return (
        Object(a['i'])(),
        Object(a['d'])('div', l, [
          Object(a['e'])('ul', m, [
            (Object(a['i'])(!0),
            Object(a['d'])(
              a['a'],
              null,
              Object(a['l'])(n.soundsArray, function (e) {
                return (
                  Object(a['i'])(),
                  Object(a['c'])(
                    u,
                    {
                      key: e.id,
                      class: Object(a['h'])([
                        'board__list-item',
                        'board__list-item_' + e.color,
                      ]),
                      item: e,
                      changeItemState: n.changeItemState,
                      gameIsStarted: n.gameIsStarted,
                      userSequence: n.userSequence,
                      checkSequence: n.checkSequence,
                    },
                    null,
                    8,
                    [
                      'class',
                      'item',
                      'changeItemState',
                      'gameIsStarted',
                      'userSequence',
                      'checkSequence',
                    ]
                  )
                );
              }),
              128
            )),
          ]),
        ])
      );
    }
    var f = ['sound'];
    function b(e, t, n, r, c, s) {
      return (
        Object(a['i'])(),
        Object(a['d'])(
          'li',
          {
            class: Object(a['h'])({ active: n.item.isActive }),
            onClick:
              t[0] ||
              (t[0] = function () {
                return s.click && s.click.apply(s, arguments);
              }),
            sound: n.item.sound,
          },
          null,
          10,
          f
        )
      );
    }
    var p = {
        name: 'BoardItem',
        props: [
          'gameIsStarted',
          'item',
          'changeItemState',
          'userSequence',
          'checkSequence',
        ],
        data: function () {
          return {
            changeCurrentState: this.changeItemState,
            mutatedSequence: this.userSequence,
          };
        },
        methods: {
          click: function () {
            this.gameIsStarted &&
              (this.item.sound.play(),
              this.changeCurrentState(this.item),
              this.mutatedSequence.push(this.item),
              this.checkSequence());
          },
        },
      },
      O = n('6b0d'),
      S = n.n(O);
    const j = S()(p, [['render', b]]);
    var v = j,
      g = {
        name: 'Board',
        props: [
          'soundsArray',
          'gameIsStarted',
          'changeItemState',
          'userSequence',
          'checkSequence',
        ],
        components: { BoardItem: v },
      };
    n('ca41');
    const y = S()(g, [
      ['render', h],
      ['__scopeId', 'data-v-65d18f76'],
    ]);
    var I = y,
      _ = function (e) {
        return (
          Object(a['k'])('data-v-19f102fc'), (e = e()), Object(a['j'])(), e
        );
      },
      q = { class: 'dashboard' },
      k = { class: 'dashboard__header' },
      P = ['disabled'],
      A = { class: 'dashboard__list' },
      x = Object(a['f'])(' Game complexity: '),
      w = ['disabled'],
      G = _(function () {
        return Object(a['e'])('label', { for: 'normal' }, 'Easy', -1);
      }),
      C = ['disabled'],
      M = _(function () {
        return Object(a['e'])('label', { for: 'sound' }, 'Normal', -1);
      }),
      T = ['disabled'],
      B = _(function () {
        return Object(a['e'])('label', { for: 'light' }, 'Hard', -1);
      });
    function R(e, t, n, r, c, s) {
      return (
        Object(a['i'])(),
        Object(a['d'])('div', q, [
          Object(a['e'])('h3', k, 'Round: ' + Object(a['n'])(n.round), 1),
          Object(a['e'])(
            'button',
            {
              class: 'dashboard__start',
              onClick:
                t[0] ||
                (t[0] = function () {
                  return n.startGame && n.startGame.apply(n, arguments);
                }),
              disabled: n.gameIsStarted,
            },
            ' Start ',
            8,
            P
          ),
          Object(a['e'])('ul', A, [
            x,
            Object(a['e'])(
              'li',
              {
                class: 'dashboard__list-item',
                onClick:
                  t[2] ||
                  (t[2] = function () {
                    return s.changes && s.changes.apply(s, arguments);
                  }),
              },
              [
                Object(a['p'])(
                  Object(a['e'])(
                    'input',
                    {
                      type: 'radio',
                      name: 'complexity',
                      'onUpdate:modelValue':
                        t[1] ||
                        (t[1] = function (e) {
                          return (c.selected = e);
                        }),
                      value: 'easy',
                      checked: '',
                      disabled: n.gameIsStarted,
                    },
                    null,
                    8,
                    w
                  ),
                  [[a['o'], c.selected]]
                ),
                G,
              ]
            ),
            Object(a['e'])(
              'li',
              {
                class: 'dashboard__list-item',
                onClick:
                  t[4] ||
                  (t[4] = function () {
                    return s.changes && s.changes.apply(s, arguments);
                  }),
              },
              [
                Object(a['p'])(
                  Object(a['e'])(
                    'input',
                    {
                      type: 'radio',
                      name: 'complexity',
                      'onUpdate:modelValue':
                        t[3] ||
                        (t[3] = function (e) {
                          return (c.selected = e);
                        }),
                      value: 'normal',
                      disabled: n.gameIsStarted,
                    },
                    null,
                    8,
                    C
                  ),
                  [[a['o'], c.selected]]
                ),
                M,
              ]
            ),
            Object(a['e'])(
              'li',
              {
                class: 'dashboard__list-item',
                onClick:
                  t[6] ||
                  (t[6] = function () {
                    return s.changes && s.changes.apply(s, arguments);
                  }),
              },
              [
                Object(a['p'])(
                  Object(a['e'])(
                    'input',
                    {
                      type: 'radio',
                      name: 'complexity',
                      'onUpdate:modelValue':
                        t[5] ||
                        (t[5] = function (e) {
                          return (c.selected = e);
                        }),
                      value: 'hard',
                      disabled: n.gameIsStarted,
                    },
                    null,
                    8,
                    T
                  ),
                  [[a['o'], c.selected]]
                ),
                B,
              ]
            ),
          ]),
        ])
      );
    }
    var U = {
      name: 'DashBoard',
      props: [
        'gameIsStarted',
        'startGame',
        'round',
        'timePaused',
        'onTimeChange',
      ],
      data: function () {
        return { timePausedMutated: this.timePaused, selected: 'easy' };
      },
      methods: {
        changes: function () {
          'easy' === this.selected
            ? (this.timePausedMutated = 1500)
            : 'normal' === this.selected
            ? (this.timePausedMutated = 1e3)
            : (this.timePausedMutated = 400),
            this.onTimeChange(this.timePausedMutated);
        },
      },
      computed: {
        chooseDifficulty: function () {
          return this.changes(), this.timePausedMutated;
        },
      },
    };
    n('d2ef');
    const D = S()(U, [
      ['render', R],
      ['__scopeId', 'data-v-19f102fc'],
    ]);
    var F = D,
      N = function (e) {
        return (
          Object(a['k'])('data-v-c6409a72'), (e = e()), Object(a['j'])(), e
        );
      },
      V = N(function () {
        return Object(a['e'])('h3', null, 'Game is over!', -1);
      });
    function E(e, t, n, r, c, s) {
      return (
        Object(a['i'])(),
        Object(a['d'])(
          a['a'],
          null,
          [
            V,
            Object(a['e'])(
              'p',
              null,
              'You have completed ' +
                Object(a['n'])(n.round) +
                ' ' +
                Object(a['n'])(s.amountOfRoundsMessage),
              1
            ),
            Object(a['e'])(
              'button',
              {
                class: 'restart',
                onClick:
                  t[0] ||
                  (t[0] = function () {
                    return n.restart && n.restart.apply(n, arguments);
                  }),
              },
              'Try again'
            ),
          ],
          64
        )
      );
    }
    var J = {
      name: 'gameIsOver',
      props: ['round', 'restart'],
      computed: {
        amountOfRoundsMessage: function () {
          return this.round > 1 ? 'rounds' : 'round';
        },
      },
    };
    n('b576');
    const H = S()(J, [
      ['render', E],
      ['__scopeId', 'data-v-c6409a72'],
    ]);
    var Y = H,
      z = new Audio(n('3c6d')),
      K = new Audio(n('3cf8')),
      L = new Audio(n('196f')),
      Q = new Audio(n('78fc')),
      W = {
        name: 'Playfield',
        components: { Board: I, DashBoard: F, GameIsOver: Y },
        data: function () {
          return {
            round: 0,
            roundStarted: !1,
            roundFinished: !0,
            soundsArray: [
              { color: 'red', sound: z, index: 1, isActive: !1 },
              { color: 'blue', sound: K, index: 2, isActive: !1 },
              { color: 'yellow', sound: L, index: 3, isActive: !1 },
              { color: 'green', sound: Q, index: 4, isActive: !1 },
            ],
            sequence: [],
            userSequence: [],
            gameIsStarted: !1,
            isItemSame: null,
            isGameOver: !1,
            timePaused: 1500,
          };
        },
        methods: {
          onTimeChange: function (e) {
            this.timePaused = e;
          },
          startGame: function () {
            this.levelUp(), (this.gameIsStarted = !0);
          },
          randomNumber: function (e, t) {
            return Math.floor(Math.random() * (t - e + 1)) + e;
          },
          changeItemState: function (e) {
            (e.isActive = !e.isActive),
              setTimeout(function () {
                return (e.isActive = !e.isActive);
              }, 200);
          },
          toggleRoundState: function () {
            (this.roundStarted = !this.roundStarted),
              (this.roundFinished = !this.roundFinished);
          },
          play: function () {
            var e = this;
            this.sequence.forEach(function (t, n) {
              setTimeout(function () {
                t.sound.play(), e.changeItemState(t);
              }, e.timePaused * n);
            });
          },
          levelUp: function () {
            this.round++,
              this.sequence.push(this.soundsArray[this.randomNumber(0, 3)]),
              this.play(),
              (this.userSequence.length = 0);
          },
          checkSequence: function () {
            var e = this;
            return (
              (this.isItemSame = this.userSequence.every(function (t, n) {
                return t === e.sequence[n];
              })),
              !1 === this.isItemSame && (this.isGameOver = !0),
              this.newRound(),
              this.isItemSame
            );
          },
          newRound: function () {
            var e = this;
            if (
              this.userSequence.length === this.sequence.length &&
              this.isItemSame
            )
              return setTimeout(function () {
                return e.levelUp();
              }, this.timePaused);
          },
          restart: function () {
            (this.round = 0),
              (this.gameIsStarted = !1),
              (this.sequence = []),
              (this.userSequence = []),
              (this.isItemSame = null),
              (this.isGameOver = !1);
          },
        },
      };
    n('727e');
    const X = S()(W, [
      ['render', d],
      ['__scopeId', 'data-v-ca73dc76'],
    ]);
    var Z = X,
      $ = { name: 'App', components: { Playfield: Z } };
    const ee = S()($, [['render', c]]);
    var te = ee;
    Object(a['b'])(te).mount('#app');
  },
  '5f2d': function (e, t, n) {},
  '727e': function (e, t, n) {
    'use strict';
    n('1d51');
  },
  '78fc': function (e, t, n) {
    e.exports = n.p + 'media/4.36d5a722.mp3';
  },
  '7d13': function (e, t, n) {},
  '9c7e': function (e, t, n) {},
  b576: function (e, t, n) {
    'use strict';
    n('7d13');
  },
  ca41: function (e, t, n) {
    'use strict';
    n('9c7e');
  },
  d2ef: function (e, t, n) {
    'use strict';
    n('5f2d');
  },
});
//# sourceMappingURL=app.8c5addfe.js.map
