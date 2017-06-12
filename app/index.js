import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import Root from './containers/Root';

const initialState = {
    Charts: {
        PieChart: {
            data: {
                failed: false,
                isfetching: false,
                contains: null
            },
            msg: 'Preparing to fetch',
            width: '100%',
            height: '30vh',
            options: {
                title: 'Lateness of things',
                backgroundColor: '#fff',
                titlePosition: 'none',
                pieHole: 0.7,
                pieSliceTextStyle: {
                    color: 'black',
                },
            }
        },
        BarChart: {
            chartType: 'BarChart',
            width: '100%',
            height: '30vh',
            data: [
                ['Type', 'On time', 'Late', { role: 'annotation' }],
                ['Child', 4, 18, ''],
                ['Fire/EV/Body', 18, 21, ''],
                ['Truck', 49, 92, ''],
                ['Off-Highway/UTV', 18, 62, ''],
                ['Bus/Coach/WTORS', 5, 8, ''],
                ['Other', 11, 23, '']
            ],
            options: {
                isStacked: true,
                height: 300,
                legend: {position: 'top'},
                hAxis: {minValue: 0}
            }
        }
    }
};
const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);

render(
    <AppContainer>
        <Root store={store} history={history}/>
    </AppContainer>,
    document.getElementById('root'),
);

if(process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./containers/Root', () => {
        const NewRoot = require('./containers/Root').default;
        render(
            <AppContainer>
                <NewRoot store={store} history={history}/>
            </AppContainer>,
            document.getElementById('root'),
        );
    });
}
// [
//     ['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General', 'Western', 'Literature', { role: 'annotation' } ],
//     ['2010', 10, 24, 20, 32, 18, 5, ''],
//     ['2020', 16, 22, 23, 30, 16, 9, ''],
//     ['2030', 28, 19, 29, 30, 12, 13, '']
// ]
// [
//     ['On time', 'Late',  { role: 'annotation' }],
//     ['Child', 4, 18, ''],
//     ['Fire/EV/Body', 18, 21, ''],
//     ['Truck', 49, 92, ''],
//     ['Off-Highway/UTV', 18, 62, ''],
//     ['Bus/Coach/WTORS', 5, 8, ''],
//     ['Other', 11, 23, '']
// ]
//
// test: {
//     chartOne: {
//         chartType: 'PieChart',
//         data: [
//           ['Late', 'On Time'],
//           ['On time', 105],
//           ['Late', 224],
//         ],
//         options: {
//             title: 'Reasons Programs Don\'t Work',
//             backgroundColor: '#fff',
//             titlePosition: 'none',
//             pieHole: 0.7,
//             pieSliceTextStyle: {
//                 color: 'black',
//             },
//         }
//     },
//     chartTwo: {
//         chartType: 'BarChart',
//         data: [
//             ['Type', 'On time', 'Late', { role: 'annotation' }],
//             ['Child', 4, 18, ''],
//             ['Fire/EV/Body', 18, 21, ''],
//             ['Truck', 49, 92, ''],
//             ['Off-Highway/UTV', 18, 62, ''],
//             ['Bus/Coach/WTORS', 5, 8, ''],
//             ['Other', 11, 23, '']
//         ],
//         options: {
//             isStacked: true,
//             height: 300,
//             legend: {position: 'top'},
//             hAxis: {minValue: 0}
//         }
//     }
// },
