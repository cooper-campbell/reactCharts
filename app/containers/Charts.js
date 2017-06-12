import MainChart from './../components/layout/charts';
import {connect} from 'react-redux';
import { startPieDataLoad } from './../actions';

const mapStateToProps = (state) => {
    return {
        Charts: state.Charts,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadingPieChartData: () => {
            return dispatch(startPieDataLoad());
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(MainChart);
