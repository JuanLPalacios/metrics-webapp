export default function format(val) {
  if (val === undefined) return '';
  if (val === null) return 'null';
  let scale; let
    unit;
  if (val >= 1000000000) {
    scale = 1000000000;
    unit = 'B';
  } else if (val >= 1000000) {
    scale = 1000000;
    unit = 'M';
  } else if (val >= 1000) {
    scale = 1000;
    unit = 'K';
  } else {
    return val.toFixed(3);
  }
  return `${(val / scale).toFixed(2)}${unit}`;
}
