import React from 'react';
import ApexChart from 'react-apexcharts';

export default function RadialBarChart() {
  const options = {
    chart: {
      height: 280,
      type: "radialBar",
    },
    series: [60],
    colors: ["#8906E6"],
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
            show: true
          }
        }
      }
    },
    fill: {
      colors: ["#8906E6"]
    },
    stroke: {
      lineCap: "butt"
    },
    labels: ["Progress"]
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
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