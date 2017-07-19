import React from "react";

export class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            currentPage:1
        };
    };

    sowFirsPage(){
        console.log(this.state.currentPage);

        if(this.state.currentPage==1){
            this.props.history.push(`page/1`);
        }
    };

    componentDidMount(){
        this.sowFirsPage();
    };

    render(){
        const {} = this.state;
        return(
            <div>

            </div>
        )
    };

}