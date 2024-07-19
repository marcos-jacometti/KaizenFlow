import React from "react";
import ApexChart from "react-apexcharts";

export default function ColumnProjects() {
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
            categories: ['Team A', 'Team B'],
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
        colors: ['#8906E680']
    };

    const series = [{
        name: 'Projects',
        data: [3, 2]
    }];

    return (
        <div style={{ width: '100%', height: '95%' }}>
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