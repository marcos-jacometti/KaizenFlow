import React, { useEffect, useState } from "react";
import ApexChart from "react-apexcharts";
import axios from "axios";

export default function ColumnProjects({ projectId }) {
    const [actionsData, setActionsData] = useState([0, 0, 0, 0]);

    useEffect(() => {
        const fetchActionsData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/apiActions/actionsAPI/${projectId}`);
                const actions = response.data;

                let completed = 0;
                let inProgress = 0;
                let delayed = 0;
                
                actions.forEach(action => {
                    if (action.status === "Completed") {
                        completed++;
                    } else if (action.status === "In Progress") {
                        inProgress++;
                    } else if (action.status === "Delayed") {
                        delayed++;
                    }
                });

                const total = completed + inProgress + delayed;

                setActionsData([completed, inProgress, delayed, total]);
            } catch (error) {
                console.error("Error fetching action data:", error);
            }
        };

        fetchActionsData();
    }, [projectId]);

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
            categories: ['Completed', 'In Progress', 'Delayed', 'Total'],
        },
        yaxis: {
            title: {
                text: 'Values'
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
        name: 'Actions',
        data: actionsData,
        color: function({ value, seriesIndex, dataPointIndex, w }) {
            const colors = ['#4caf50', '#ffeb3b', '#f44336', '#3498db'];
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