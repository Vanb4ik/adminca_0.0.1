
import React from 'react';
import styles from "./Articles.scss"

export class Articles extends React.Component{



    render(){
        const {articlesArray} = this.props;
        // console.log(articlesArray);
        return(
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                Створити нову статтю
                                <a>
                                    <i className="glyphicon glyphicon-plus"></i>
                                </a>

                                <table className="table">
                                    <thead>
                                        <tr className="bg-success">
                                            <th>Постер</th>
                                            <th>Заголовок</th>
                                            <th>Короткий опис</th>
                                            <th>Статус</th>
                                            <th>Опції</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        articlesArray.map(massages=>{
                                            return(
                                                <tr key={massages.id}
                                                    className=""
                                                >
                                                    <td>
                                                        <a className="media-left">
                                                            <img className={`media-object thumbnail ${styles.panel_left_photo}`}
                                                                 src={massages.thumbnail} alt=""/>
                                                        </a>
                                                    </td>
                                                    <td>1</td>
                                                    <td>1</td>
                                                    <td>1</td>
                                                    <td>1</td>
                                                </tr>
                                            )
                                        })

                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    };
}


