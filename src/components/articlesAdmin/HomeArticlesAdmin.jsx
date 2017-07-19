
import React from 'react';

export class HomeArticlesAdmin extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            currentPage:1
        };
    };

    sowFirsPage(){
        console.log(this.state.currentPage);

        if(this.state.currentPage==1){
            this.props.history.push(`/articlesAdmin/page/1`);
        }
    };

    componentDidMount(){
        this.sowFirsPage();
    };

    render(){
        const {} = this.state;
        return(
            <div></div>
        )
    };
}


