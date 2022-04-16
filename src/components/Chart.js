/* eslint-disable react/no-array-index-key */

import format from '../utils/format';

export default function Chart(props) {
  // eslint-disable-next-line react/prop-types
  const { source, selector } = props;
  const dates = source && Object.keys(source).sort();
  const values = dates && dates.map((x) => selector(source[x]));
  const min = values && values.reduce((a, b) => Math.min(a, b));
  const max = values && (values.reduce((a, b) => Math.max(a, b)) - min) / 200;
  // eslint-disable-next-line no-nested-ternary
  return (
    <svg
      width="340"
      height="320"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <style>
        { `
          path {
            fill: none;
            stroke: #ff8;
            stroke-width: 1.5px;
          }
        ` }
      </style>
      <defs>
        <g id="Port">
          <circle style={{ fill: 'inherit' }} r="10" />
        </g>
      </defs>
      {dates && (
        <>
          <text x={0} y={220 - ((values[0] - min) / max).toFixed(0)} fill="#ff8">
            {format(values[0])}
          </text>
          <text
            x={(((values.length - 1) * 300) / values.length).toFixed(0)}
            y={220 - ((values[values.length - 1] - min) / max).toFixed(0)}
            fill="#ff8"
          >
            {format(values[values.length - 1])}
          </text>
          <path d={`M ${values.map((x, i) => `${((i * 300) / values.length).toFixed(0)} ${220 - ((x - min) / max + 20).toFixed(0)}`).join(' L ')}`} />
          {dates.map((date, i) => (
            <text
              key={i}
              transform={`translate(${((i * 300) / values.length).toFixed(0)},230) rotate(70)`}
              fill="#fff"
            >
              {i % 3 === 0 ? date : ''}
            </text>
          ))}
        </>
      )}
    </svg>
  );
}
