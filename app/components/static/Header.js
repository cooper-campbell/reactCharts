import React from 'react';
import { Link } from 'react-router';


export default class Header extends React.Component {

    handleModalClick(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <nav>
                    <div className="container">
                        <div id="mainNav">
                            <ul className="nav navbar-nav navbar-left">
                                <li className="no-hover">
                                    <Link to="/test">Change Management Portal</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
};

/*
 I am writing this so that future Trevor knows what
 attributes he needs to create a model:

 data-toggle="modal" href="javascript:void(0)"

 You're welcome future trevor.
 */
