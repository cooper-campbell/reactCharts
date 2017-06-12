import React from 'react';
import {Chart} from 'react-google-charts';
import style from './../../../assets/css/main.scss';
import classNames from 'classnames';


class ChangesByFunctionalGroups extends React.Component {
    constructor({chartData}) {
        super();
        const {chartType, data, options, width, height} = chartData;
        this.chart = chartType;
        this.data = data;
        this.options = options;
        this.height = height;
        this.width = width;
    }

    render() {
        return (
            <div className={classNames(style.main)}>
                <h2>{this.options.title}</h2>
                <Chart
                chartType={this.chart}
                data={this.data}
                options={this.options}
                graph_id="ChangesByFunctionalGroups"
                width={this.width}
                height={this.height}
                legend_toggle
                chartEvents={this.chartEvents}
                />
                <div className={classNames('row', style.testingNotHuman)}>
                    <p>hi</p>
                    <p></p>
                </div>
            </div>
      );
    }
}

export default ChangesByFunctionalGroups;
