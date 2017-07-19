import React from "react";
import "react-bootstrap";
import "react-router";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

export class Header extends React.Component{

    render() {

        return (
            <div>
                <div className="container-fluid">
                    <nav className="navbar navbar-inverse">
                        <div className="navbar-header">
                            <button type="button"
                                    className="navbar-toggle collapsed"
                                    data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1"
                                    aria-expanded="false">

                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>

                            <div className="navbar-brand"
                                 href="#">ZaxidNetClone
                            </div>

                        </div>

                        <div className="collapse navbar-collapse"
                             id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav ">
                                <li className="headerLinc">

                                    <Link to="/">Home</Link>
                                </li>

                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li >
                                    <img style={{height: 48}} src="http://placehold.it/200x100" alt="images"
                                         className="navbar_img img-rounded"></img>>
                                </li>
                                <li><a href="#">Привіт, імя ористувача</a></li>
                                <li><a href="#"><span className="glyphicon glyphicon-off">
                                </span> Вийти</a></li>
                            </ul>
                        </div>
                    </nav>

                </div>

            </div>
        )
    }
}