import React, { useEffect, useState } from "react";
import ApexChart from "react-apexcharts";
import axios from "axios";

export default function ProjectsUsersColumnChart() {
    const [projectsCount, setProjectsCount] = useState(0);
    const [usersCount, setUsersCount] = useState(0);

    useEffect(() => {
        const fetchProjectsCount = async () => {
            try {
                const response = await axios.get('http://localhost:3000/project/projects');
                setProjectsCount(response.data.length);
            } catch (error) {
                console.error("Error fetching projects data:", error);
            }
        };

        const fetchUsersCount = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/users');
                setUsersCount(response.data.length);
            } catch (error) {
                console.error("Error fetching users data:", error);
            }
        };

        fetchProjectsCount();
        fetchUsersCount();
    }, []);

    const options = {
        chart: {
            type: 'bar',
            height: '100%'
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded',
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Projects', 'Users'],
        },
        yaxis: {
            title: {
                text: 'Count'
            }
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val;
                }
            }
        },
    };

    const series = [{
        name: 'Count',
        data: [projectsCount, usersCount],
        color: function({ value, seriesIndex, dataPointIndex, w }) {
            const colors = ['#3498db', '#3498db'];
            return colors[dataPointIndex];
        }
    }];

    return (
        <div style={{ width: '100%', height: '80%' }}>
            <ApexChart
                options={options}
                series={series}
                type="bar"
                height="100%"
                width="100%"
            />
        </div>
    );
}