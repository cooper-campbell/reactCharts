import React from 'react';
import { Link } from 'react-router';
import Title from 'react-title-component';

const NotFound = () =>
    <div>
        <Title render={parentTitle => `Page Not Found | ${parentTitle}`}/>
        <div className="container-fluid">
            <div className="row">
                <center><span>404</span></center>
            </div>
            <div className="row">
                <div className="col-xs-12 col-md-6 col-md-push-3">
                    <center><span>
                        Whoops! This page has either relocated or no longer exists (maybe it's just on vacation).
                    </span></center>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="row">
                <center><Link to="/"><span>Back to Safety</span></Link></center>
            </div>
        </div>
    </div>;

export default NotFound;
