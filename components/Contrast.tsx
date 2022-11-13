// Gets Contrast Ratio Between Two Hexes
export default function contrast(a: string, b: string) {
  let bigint = parseInt(a, 16);
  let rgb1: number[] = [
    (bigint >> 16) & 255,
    (bigint >> 8) & 255,
    bigint & 255,
  ];
  bigint = parseInt(b, 16);
  let rgb2: number[] = [
    (bigint >> 16) & 255,
    (bigint >> 8) & 255,
    bigint & 255,
  ];

  var lum1 = luminance(rgb1[0], rgb1[1], rgb1[2]);
  var lum2 = luminance(rgb2[0], rgb2[1], rgb2[2]);
  var brightest = Math.max(lum1, lum2);
  var darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

function luminance(r: number, g: number, b: number) {
  var a = [r, g, b].map(function (v) {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}
