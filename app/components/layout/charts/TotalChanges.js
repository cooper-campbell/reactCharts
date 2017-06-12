import React from 'react';
import {Chart} from 'react-google-charts';
import style from './../../../assets/css/main.scss';
import classNames from 'classnames';


class TotalChanges extends React.Component {
    constructor({chartData}) {
        super();
        const {chartType, data, options, width, height} = chartData;
        this.chart = chartType;
        this.data = data;
        this.options = options;
        this.height = height;
        this.width = width;
        this.selection = '';
        this.aftermessage = '';
    }

    // componentWillMount() {
    //     this.chartEvents = [
    //         {
    //             eventName: 'select',
    //             callback: (Chart) => {
    //                 this.onSelectEvent(Chart);
    //             }
    //         }
    //     ];
    // }
    //
    // onSelectEvent(Chart) {
    //     const event = Chart.chart.getSelection();
    //     return;
    //     if(event.length !== 1) {
    //         this.selection = '';
    //         this.aftermessage = '';
    //         return;
    //     }
    //     const row = event[0].row;
    //     this.selection = this.data[0][0] + ': ' + this.data[row + 1][0] + ', ' + this.data[0][1] + ': ' + this.data[row + 1][1].toString();
    //     this.aftermessage = (row === 1) ? 'SO, it is probably your fault and you should work on troubleshooting that yourself.' : '';
    //     this.forceUpdate();
    // }

    render() {
        return (
            <div className={classNames(style.main)}>
                <h2>{this.options.title || null}</h2>
                <Chart
                chartType={this.chart || null}
                data={this.data || null}
                options={this.options || null}
                graph_id="TotalChanges"
                width={this.width || null}
                height={this.height || null}
                legend_toggle
                // chartEvents={this.chartEvents}
                />
                <div className={classNames('row', (this.aftermessage === '') ? style.testingNotHuman : style.testing)}>
                    <p>On-time: {this.data[1][1]}</p>
                    <p>Late: {this.data[2][1]}</p>
                </div>
            </div>
      );
    }
}

export default TotalChanges;
