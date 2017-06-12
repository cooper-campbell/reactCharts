import React, { PropTypes } from 'react';
import Title from 'react-title-component';
import Header from './static/Header';

const App = ({children}) =>
    <div>
        <Title render="Change Management"/>
        <Header />
        <div>{children}</div>
    </div>;

App.propTypes = {
    children: PropTypes.object,
};

export default App;
