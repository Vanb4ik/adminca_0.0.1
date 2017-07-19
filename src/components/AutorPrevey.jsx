import React from "react";

export class AutorPrevey extends React.Component{

    render() {
        const {shortInfo,fullName,onClick} = this.props;
        /*console.log(this.props);*/
        return(
            <div className="list-group" onClick={onClick}>
                <h4>
                    {shortInfo}
                </h4>

                <h6 style={{color:"red",fontSize:"12px"}}>
                    {fullName}
                </h6>
                <div className="page-header"></div>
            </div>

        )
    }
}