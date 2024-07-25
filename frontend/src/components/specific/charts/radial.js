import React from 'react';
import ApexChart from 'react-apexcharts';

export default function RadialBarChart({ percentage, color }) {
  const options = {
    chart: {
      height: 280,
      type: "radialBar",
    },
    series: [Math.min(percentage, 100)],
    colors: [color],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: '#333',
          startAngle: -90,
          endAngle: 90,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: "4vh",
            show: true,
            formatter: (val) => {
              return `${Math.floor(val)}%`;
            }
          }
        }
      }
    },
    fill: {
      colors: [color]
    },
    stroke: {
      lineCap: "butt"
    },
    labels: ["Progress"]
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
      <ApexChart
        options={options}
        series={options.series}
        type="radialBar"
        height={310}
        width={400}
      />
    </div>
  );
}