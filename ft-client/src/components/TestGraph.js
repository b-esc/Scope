import * as React from 'react';
import { createChart } from 'lightweight-charts';

export default class LouweightChart extends React.PureComponent {
    
    static defaultProps = {
		containerId: 'lightweight_chart_container',
	};

    chart = null;

    componentDidMount() {

        const chart = createChart(this.props.containerId, { display: 500, height: 500 });
        this.chart = chart;

        const lineSeries = chart.addLineSeries();
        
        lineSeries.setData([
            { time: '2017-01-01', value: 80.01 },
            { time: '2017-01-15', value: 96.63 },
            { time: '2017-01-26', value: 76.64 },
            { time: '2017-03-01', value: 80.01 },
            { time: '2017-03-15', value: 96.63 },
            { time: '2019-03-26', value: 76.64 },
            { time: '2019-04-01', value: 81.89 },
            { time: '2019-04-05', value: 74.43 },
            { time: '2019-04-10', value: 80.01 },
            { time: '2019-04-15', value: 96.63 },
            { time: '2019-04-18', value: 76.64 },
            { time: '2019-04-19', value: 81.89 },
            { time: '2019-04-20', value: 74.43 },
        ]);
        
        chart.applyOptions({
            priceScale: {
                position: 'left',
                autoScale: true,
                alignLabels: false,
                borderVisible: false,
                borderColor: '#555ffd',
            },
        });

        const barSeries = chart.addBarSeries({
            thinBars: false,
        });

        // // set the data
        // barSeries.setData([
        //     { time: "2019-04-08", open: 141.77, high: 170.39, low: 120.25, close: 145.72 },
        //     { time: "2019-04-09", open: 141.77, high: 170.39, low: 120.25, close: 145.72 },
        //     { time: "2019-04-10", open: 141.77, high: 170.39, low: 120.25, close: 145.72 },
        //     { time: "2019-04-11", open: 145.72, high: 147.99, low: 100.11, close: 108.19 },
        //          ]);
    }

	componentWillUnmount() {
		if (this.chart !== null) {
			this.chart.remove();
			this.chart = null;
		}
	}

	render() {
		return (
			<div
                style={{"display":"flex"}}
				id={ this.props.containerId }
				className={ 'LightweightChart' }
			/>
		);
	}
}