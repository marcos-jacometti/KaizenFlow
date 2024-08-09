import React, { useEffect, useState } from "react";
import ApexChart from 'react-apexcharts';
import axios from 'axios';

export default function AttendancePercentage() {
  const [attendancePercentage, setAttendancePercentage] = useState(0);

  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}attendanceDetails/list`);
        const attendanceList = response.data;

        let presentCount = 0;
        let totalCount = 0;

        attendanceList.forEach(attendance => {
          if (attendance.status === "P") {
            presentCount++;
          }
          totalCount++;
        });

        const percentage = totalCount > 0 ? (presentCount / totalCount) * 100 : 0;
        setAttendancePercentage(percentage);
      } catch (error) {
        console.error("Error fetching attendance data:", error);
      }
    };

    fetchAttendanceData();
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
    series: [attendancePercentage],
    colors: [getStatusColor(attendancePercentage)],
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
      colors: [getStatusColor(attendancePercentage)],
    },
    stroke: {
      lineCap: "butt"
    },
    labels: ["Attendance"]
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
      <ApexChart
        options={options}
        series={[attendancePercentage]}
        type="radialBar"
        height={310}
        width={400}
      />
    </div>
  );
}