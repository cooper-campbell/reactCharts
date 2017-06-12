import React from 'react';
import classNames from 'classnames';
import TotalChanges from './TotalChanges';
import ChangesByFunctionalGroups from './ChangesByFunctionalGroups';
import PropTypes from 'prop-types';

// class MainChart extends React.Component {
//     constructor({Charts, loadingPieChartData, finishedPieDataLoad}) {
//         super();
//         this.loadingPieChartData = loadingPieChartData;
//         this.finishedPieDataLoad = finishedPieDataLoad;
//         this.BarChartData = Charts.BarChart;
//     }
//
//     preparePieChart() {
//       this.PieChartData = Charts.PieChart;
//       this.PieChart = (!this.PieChartData.ready === false) ? (<TotalChanges chartData={this.PieChart} />) : (<div>{this.PieChartData.msg}</div>);
//     }
//
//     componentDidMount() {
//         this.fetchPieChart();
//         this.loadingPieChartData();
//     }
//
//     componentWillUpdate(props) {
//         this.PieChartData = props.Charts.PieChart;
//         if(this.PieChartData.stage === 0 || this.PieChartData.rerender === true) {
//             this.PieChartData.rerender = false;
//             this.forceUpdate();
//         }
//         return;
//     }
//
//     async fetchPieChart() {
//         const data = await getPieChartData();
//         this.finishedPieDataLoad(data);
//         return;
//     }
//
//     render() {
//         return (
//             <div className={classNames('mainWindow')}>
//                 <div className={classNames('row')}>
//                     <div className={classNames('col-sm-4')}>
//                         {this.PieChart}
//                     </div>
//                     <div className={classNames('col-sm-4')}>
//                         <ChangesByFunctionalGroups chartData={this.BarChartData} />
//                     </div>
//                     <div className={classNames('col-sm-4')}>
//                     </div>
//                 </div>
//             </div>
//       );
//     }
// }
//
const MainChart = ({Charts}) => {
    const BarChartData = Charts.BarChart;
    const PieChartData = Charts.PieChart;
    const PieChart = (!PieChartData.data.isfetching === false) ? (<TotalChanges chartData={PieChart} />) : (<div>{PieChartData.msg}</div>);
    return (
        <div className={classNames('mainWindow')}>
            <div className={classNames('row')}>
                <div className={classNames('col-sm-4')}>
                    {PieChart}
                </div>
                <div className={classNames('col-sm-4')}>
                    <ChangesByFunctionalGroups chartData={BarChartData} />
                </div>
                <div className={classNames('col-sm-4')}>
                </div>
            </div>
        </div>
    );
};

MainChart.propTypes = {
    Charts: PropTypes.object,
    loadingPieChartData: PropTypes.func
};

export default MainChart;
