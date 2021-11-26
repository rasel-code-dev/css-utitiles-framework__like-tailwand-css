// module.exports = function () {
//   return {
//     themeKey: "transform",
//     defaults_transform: {
//       '--rsl-translate-x': '0',
//       '--rsl-translate-y': '0',
//       '--rsl-rotate': '0',
//       '--rsl-skew-x': '0',
//       '--rsl-skew-y': '0',
//       '--rsl-scale-x': '1',
//       '--rsl-scale-y': '1',
//       'transform': [
//         'translateX(var(--rsl-translate-x))',
//         'translateY(var(--rsl-translate-y))',
//         'rotate(var(--rsl-rotate))',
//         'skewX(var(--rsl-skew-x))',
//         'skewY(var(--rsl-skew-y))',
//         'scaleX(var(--rsl-scale-x))',
//         'scaleY(var(--rsl-scale-y))',
//       ]
//     }
//   }
// }

const addUtilities = require("../util/addUtilities");

module.exports = function (forMedia){
  return addUtilities(
    {
      '.transform': {
          '--rsl-translate-x': '0',
          '--rsl-translate-y': '0',
          '--rsl-rotate': '0',
          '--rsl-skew-x': '0',
          '--rsl-skew-y': '0',
          '--rsl-scale-x': '1',
          '--rsl-scale-y': '1',
          transform: [
            'translateX(var(--rsl-translate-x))',
            'translateY(var(--rsl-translate-y))',
            'rotate(var(--rsl-rotate))',
            'skewX(var(--rsl-skew-x))',
            'skewY(var(--rsl-skew-y))',
            'scaleX(var(--rsl-scale-x))',
            'scaleY(var(--rsl-scale-y))',
          ].join(' '),
        }
      },
    "transform",
    forMedia
  )
}

// .transform {
//   --rsl-translate-x: 0;
//   --rsl-translate-y: 0;
//   --rsl-rotate: 0;
//   --rsl-skew-x: 0;
//   --rsl-skew-y: 0;
//   --rsl-scale-x: 1;
//   --rsl-scale-y: 1;
//   transform: translateX(var(--rsl-translate-x)) translateY(var(--rsl-translate-y)) rotate(var(--rsl-rotate)) skewX(var(--rsl-skew-x)) skewY(var(--rsl-skew-y)) scaleX(var(--rsl-scale-x)) scaleY(var(--rsl-scale-y));
// }
