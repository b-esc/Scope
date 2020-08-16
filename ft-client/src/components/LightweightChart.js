// @flow
import React, { useState, useEffect } from 'react';
import { createChart } from 'lightweight-charts';

type Props = {
    containerId: string,
    width: number,
    height: number,
    lineData?: Array<Object>,
    candleData?: Array<Object>,
};

export default function LightweightChart({ containerId, width, height, lineData, candleData }: Props) {
    const [chart, setChart] = useState(1);
    // componentWillMount
    useEffect(() => {
        const chart = createChart(containerId,
            { width: width, height: height });

        if (lineData != null) {
            const lineSeries = chart.addLineSeries();
            lineSeries.setData(lineData);
        }

        if (candleData != null) {
            const barSeries = chart.addBarSeries({
                thinBars: false,
            });
        }

        chart.applyOptions({
            priceScale: {
                position: 'left',
                autoScale: true,
                alignLabels: false,
                borderVisible: false,
                borderColor: '#555ffd',
            },
        });

        setChart(chart);

        return function cleanup(){
            if(chart !== null){
                chart.remove();
                setChart(null);                
            }
        }
    }, []);

    return (
        <div
            style={{ "display": "flex" }}
            id={containerId}
            className={'LightweightChart'} />
    )
}