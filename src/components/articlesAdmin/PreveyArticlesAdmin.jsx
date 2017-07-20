import React from 'react';
import {Articles} from "./Articles";
import {Paginations} from "../Paginations";

export class PreveyArticlesAdmin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      articlesArray: [],                                    //масив статів
      pageArray: [],                                        //масив сторінок
      totalPages: 0,                                        //загальна кількість сторінок
      currentPage: props.match.params.currentPage,          //поточна група сторінок
      numberOfTime: 3,                                      //кількість елементів на сторінці
      activePage: props.match.params.currentPage,
      authorID: 'b0f4b6cd-fca3-fa55-3301-a28c42c67665'

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

  paginationRouteFactory(page) {
    return "/articlesAdmin/page/" + page;
  };

  componentWillReceiveProps(newProps) {
    this.sowActivePage(newProps.match.params.currentPage);

  };

  sowActivePage(newProps) {
    if (newProps != this.state.currentPage) {
      this.setState({
        activePage: newProps,
        currentPage: newProps
      }, () => this.get());
    }

  };

  delete(articlesId) {
    // DELETE /api/users/:authorID/articles/:id - видалити статтю користувача
    // console.log(id);
    const deleteUrl = `http://localhost:8081/api/users/${this.state.authorID}/articles/${articlesId}`;
    console.log(deleteUrl);
    fetch(deleteUrl, {method: "delete"})
      .then(response => response.json())
      .then(response => {
        console.log(response);
        // console.log(this.props.match.params.currentPage);
        this.get();
      })
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });

  }
  put(articlesId){
    // console.log(articlesId);
    this.props.history.push(`/articlesAdmin/post/${articlesId}`);
  }

  render() {

    const {articlesArray, totalPages, pageArray} = this.state;

    return (
      <div>
        {<Articles articlesArray={articlesArray}
                   deleteOnClick={this.delete.bind(this)}
                   putOnClick={this.put.bind(this)}/>

        }
        {<Paginations
          routeFactory={this.paginationRouteFactory.bind(this)}
          totalPages={totalPages}
          activePage={this.props.match.params.currentPage}
          pageArray={pageArray}/>
        }
      </div>
    )
  };
}


