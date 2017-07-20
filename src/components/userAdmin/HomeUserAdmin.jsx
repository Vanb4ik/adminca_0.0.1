import React from "react"

export class HomeUserAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articlesArray: [],       //масив статів
            pageArray: [],           //масив сторінок
            totalPages: 0,           //загальна кількість сторінок
            currentPage: 1,          //поточна група сторінок
            numberOfTime: 5,         //кількість елементів на сторінці
            activePage: 1
        };
    };

    render() {
        return (<div>HomeUserAdmin</div>)
    }
}