
import React from 'react';
import {Articles} from "./Articles";

export class PreveyArticlesAdmin extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            articlesArray: [],       //масив статів
            pageArray: [],           //масив сторінок
            totalPages: 0,           //загальна кількість сторінок
            currentPage: 1,          //поточна група сторінок
            numberOfTime: 3,         //кількість елементів на сторінці
            activePage: 1,
            authorID:'b0f4b6cd-fca3-fa55-3301-a28c42c67665'

        };
    };

    get() {
        const requestURL = `http://localhost:8081/api/users/${this.state.authorID}/articles/${this.state.currentPage}/${this.state.numberOfTime}`;
        // /api/users/:authorID/articles/:page/:limit
        // - список статей конкретного користувача
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

    render(){

        const {articlesArray} = this.state;

        return(
            <div>
                {<Articles articlesArray={articlesArray} />}
            </div>
        )
    };
}


