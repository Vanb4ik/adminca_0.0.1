import React from "react";
import "react-dom";


export class Message extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            mass:[],
            info:""
        };
    }

    componentDidMount() {
        return fetch(`http://localhost:8081/api/users/${this.props.match.params.authorID}/articles/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(response=>{
                this.setState({info:response.content});
            })
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });
    }

    render () {
        const {info}=this.state;
        return(
            <div>{info}</div>
        )
    }
}