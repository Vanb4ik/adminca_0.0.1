import React from "react";
import {PostArticles} from "./PostArticles"


export class PreveyPostArticles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedId:false,
      currentPage:1,
      numberOfTime:10,
      articlesArray: [],                              //масив статів
      articleId: props.match.params.articleId,
      authorID: 'b0f4b6cd-fca3-fa55-3301-a28c42c67665'
    };
  }

  getArticles(){
    const getUrl = `http://localhost:8081/api/users/${this.state.authorID}/articles/${this.state.currentPage}/${this.state.numberOfTime}`;
    // /api/users/:authorID/articles/:page/:limit
    fetch(getUrl)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        for (let i=0;i<response.totalItems;i++){
          // console.log(response.data[i].id);
          if (this.state.articleId==response.data[i].id){
            console.log(response.data[i].id);
            return this.setState({articlesArray:response.data[i],checkedId:true});
          }
          this.setState({checkedId:false,articlesArray:[]});
          return console.log("Fetch Error :-S нема такої статейки");
        }
      })
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });
  };

  componentDidMount(){
    // console.log(this.state.articleId);
    if (this.state.articleId){
      this.getArticles()
    }
  };

  post(){
    console.log("post");
  };

  resetToDefault(){
    console.log("resetToDefault");
  }

  render() {
    const {articlesArray} = this.state;
    return (
      <div>
        {<PostArticles articlesArray={articlesArray}
                       saveOnClick={this.post.bind(this)}
                       cancelOnClick={this.resetToDefault.bind(this)}  />
        }
      </div>
    )
  }
}