import React from "react";
import {Chart, registerables} from "chart.js";
import { Doughnut } from "react-chartjs-2";
Chart.register(...registerables);

function PieChart({history}){
    let successes = 100
    if(history.length) {
        let won = 0
        history.forEach((cur) => {
            if (cur.result) won++
        })
        successes = 100 * won / +history.length
    }
    const data = {
        labels: [
            '',''
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [successes, 100 - successes],
            backgroundColor: [
                'gold',
                '#18191c'
            ],
            borderWidth: 0,
            hoverOffset: 0,
            weight: 2,
            cutout: '97%'
        }]
    };

    const config = {
        hover: {mode: null},
        responsive: true,
        plugins: {
            legend: false,
            tooltip: {enabled:false}
        },
    };
    return (
        <div style={{width: '90%', position: 'relative'}}>
            <Doughnut data={data} options={config} type={'doughnut'}/>
            <div className={'number__successes'}>
                <span className={'number__result'}>{successes.toFixed(2)}%</span>
                <span className={'number__result_span'}>Виграшів</span>
            </div>
        </div>
    );
}
export default PieChart;