import React from "react";

import {AutorPrevey} from "./AutorPrevey";
import {Paginations} from "./Paginations";

export class PagePrevey extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articlesArray: [],       //масив статів
            pageArray: [],           //масив сторінок
            totalPages: 0,           //загальна кількість сторінок
            currentPage: props.match.params.currentPage,          //поточна група сторінок
            numberOfTime: 5,         //кількість елементів на сторінці
            activePage: props.match.params.currentPage,

        };
    };



    get() {
        const requestURL = `http://localhost:8081/api/articles/${this.state.currentPage}/${this.state.numberOfTime}`;
        fetch(requestURL)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                // console.log(this.props.match.params.currentPage);
                var pageNumbers = [];
                for (let i = 0; i < response.totalPages; i++) {
                    pageNumbers.push(i);
                }

                this.setState({
                    articlesArray: response.data,
                    totalPages: response.totalPages,
                    pageArray: pageNumbers
                });
            })
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });
    }


    componentDidMount() {
        this.get();
    };

    sowActivePage(newProps) {
        if(newProps!=this.state.currentPage){
            this.setState({
                activePage: newProps,
                currentPage: newProps
            }, () => this.get());
        }

    };

    sowFullContent(massages) {
        console.log(`/messages/${massages.id}/author/${massages.authorID}`);
        this.props.history.push(`/messages/${massages.id}/author/${massages.authorID}`);
    };

    paginationRouteFactory(page) {
        return "/page/" + page;
    }

    componentWillReceiveProps(newProps) {
       this.sowActivePage(newProps.match.params.currentPage);

    }

    render() {

        const {articlesArray, pageArray,totalPages} = this.state;
        return (
            <div className="list-group">
                <div >{
                    articlesArray.map(massages=>{
                        return(
                            <AutorPrevey
                                onClick={this.sowFullContent.bind(this,massages)}
                                key = {massages.id}
                                id={massages.id}
                                shortInfo = {massages.shortContent}
                                fullName = {massages.authorFullName}
                            />
                        )
                    })
                }
                </div>
                <div>
                    <Paginations
                        key={1}
                        routeFactory={this.paginationRouteFactory.bind(this)}
                        totalPages = {totalPages}
                        activePage={this.props.match.params.currentPage}
                        pageArray = {pageArray}
                        // onClick={this.sowActivePage.bind(this)}
                    />
                </div>
            </div>

        )

    };
}