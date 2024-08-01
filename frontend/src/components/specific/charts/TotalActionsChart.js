import React, { useEffect, useState } from "react";
import ApexChart from 'react-apexcharts';
import axios from 'axios';

export default function AllActions() {
  const [completedPercentage, setCompletedPercentage] = useState(0);

  useEffect(() => {
    const fetchActionsData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/all/AllActions`);
        const actions = response.data;

        let completed = 0;
        let total = 0;

        actions.forEach(action => {
          if (action.status === "Completed") {
            completed++;
          }
          total++;
        });

        const percentage = total > 0 ? (completed / total) * 100 : 0;
        setCompletedPercentage(percentage);
      } catch (error) {
        console.error("Error fetching action data:", error);
      }
    };

    fetchActionsData();
  }, []);

  const getStatusColor = (percentage) => {
    if (percentage >= 80) return '#4caf50';
    if (percentage >= 50) return '#ffeb3b';
    return '#f44336';
  };

  const options = {
    chart: {
      height: 280,
      type: "radialBar",
    },
    series: [completedPercentage],
    colors: [getStatusColor(completedPercentage)],
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
            formatter: (val) => `${Math.floor(val)}%`,
          }
        }
      }
    },
    fill: {
      colors: [getStatusColor(completedPercentage)],
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
        series={[completedPercentage]}
        type="radialBar"
        height={310}
        width={400}
      />
    </div>
  );
}