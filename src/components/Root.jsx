
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

import {Header} from "./Header";
import {Home} from "./Home";
import {Message} from "./Message";
import {PagePrevey} from "./PagePrevey"

class RouteConfigExample extends React.Component{

    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div className="container">
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/page/:currentPage" component={PagePrevey}/>
                        <Route exact path="/messages/:id/author/:authorID" component={Message}/>
                    </div>
                </div>
            </Router>
        )
    }
}


export default RouteConfigExample;
