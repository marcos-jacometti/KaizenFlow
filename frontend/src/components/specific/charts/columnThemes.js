import React from "react";
import ApexChart from "react-apexcharts";

export default function ColumnThemes() {
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
            categories: ['Safety', 'Productivity', 'Quality', 'Administrative'],
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
        data: [1, 2, 1, 1]
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