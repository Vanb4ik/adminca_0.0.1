import React from 'react';
import {Link} from "react-router-dom";

export class Paginations extends React.Component {

    nextPage(){

            if(this.props.activePage<this.props.totalPages){
                return(
                    <Link to={this.props.routeFactory(+(this.props.activePage) + 1)}>
                        <i className="glyphicon glyphicon-chevron-right"></i>
                    </Link>
                )
            }
        return <a><i className="glyphicon glyphicon-chevron-right"></i></a>
    }

    prevyPage(){
        if (this.props.activePage>1){
            return(
                <Link to={this.props.routeFactory(this.props.activePage-1)}>
                    <i className="glyphicon glyphicon-chevron-left"></i>
                </Link>
            )
        }
        return <a ><i className="glyphicon glyphicon-chevron-left"></i></a>
    }

    render() {
        const {activePage,pageArray} = this.props;
        return (
            <ul className="pagination">
                {
                    <li className={(this.props.activePage>1
                            ?""
                            :"disabled")}>
                        {this.prevyPage()}
                    </li>
                }
                {
                    pageArray.map(mass=>{
                        const pageNum = mass+1;

                        return (
                            <li className={`${(activePage==mass+1)?"active":""}`}
                                key={mass}>
                                <Link to={this.props.routeFactory(pageNum)} >
                                {pageNum}
                                </Link>
                            </li>
                        )
                    })
                }
                {
                    <li className={(this.props.activePage<this.props.totalPages
                            ?""
                            :"disabled")}>
                        {this.nextPage()}
                    </li>
                }
            </ul>
        )
    }
}

