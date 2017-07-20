import React from 'react';
import styles from "./Articles.scss";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

export const Articles = (props) => (
  <div>
    <div className="row">
      <div className="col-xs-12">
        <div className="panel panel-default">
          <div className="panel-heading">
            Створити нову статтю
            <Link to={"/articlesAdmin/post/"}>
              <i className="glyphicon glyphicon-plus"></i>
            </Link>

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
                props.articlesArray.map(massages => {
                  const buttonId = massages.id;
                  return (
                    <tr key={massages.id}>
                      <td className={`${styles.td_img}`}>
                        <a className="media-left">
                          <img className={`media-object thumbnail ${styles.panel_left_photo}`}
                               src={massages.thumbnail} alt=""/>
                        </a>
                      </td>
                      <td className={styles.td_title}>{massages.title}</td>
                      <td>{massages.shortContent}</td>
                      <td className={styles.td_status}>
                                                        <span
                                                          className="label label-primary  glyphicon glyphicon-eye-open">
                                                            &nbsp;Розглядається
                                                        </span>
                      </td>
                      <td className={`${styles.td_btn}`}>
                        <div className="btn-group">

                          <button type="button"
                                  className="btn btn-primary"
                                  onClick={() => props.putOnClick(buttonId)}
                          >
                            <i className="glyphicon glyphicon-pencil"></i>
                          </button>

                          <button type="button"
                                  className="btn btn-danger"
                                  onClick={() => props.deleteOnClick(buttonId)}
                          >
                            <i className="glyphicon glyphicon-trash"></i>
                          </button>

                          <button type="button" className="btn btn-success">
                            <i className="glyphicon glyphicon-share-alt"></i>
                          </button>
                        </div>
                      </td>
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
);


