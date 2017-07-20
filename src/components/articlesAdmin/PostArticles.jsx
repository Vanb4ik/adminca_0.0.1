import React from "react"
import styles from "./PostArticles.scss"

export class PostArticles extends React.Component{
  constructor(props) {
    console.log(props, " props PostArticles");
    super(props);
    this.changedArticle = {};
  }
  componentWillReceiveProps(nextProps) {
    this.setState = nextProps.articlesArray;
  }

  render(){
    const {title,shortContent,content} = this.props.articlesArray;
    return(
      <div>
        <div className={styles.post_header}>
          <h1 className="page-header">
            Edit/create article
          </h1>
          <h4>Редагування створення статі</h4>
        </div>
        <div className="row">
          <div className="col-xs-4">
            <span>Фото</span>
            <a className="media-left">
              <img src="https://placehold.it/200x200"
                   alt="Responsive image"
                   className={`media-object thumbnail ${styles.panel_left_photo}`}/>

            </a>
            <a href="#">
              <i className="glyphicon glyphicon-random"></i>
            </a>
          </div>
          <div className="form-group col-xs-8">
            <div className="container-fluid">
              <form className="form-horizontal"
                    name="users-edit"
                    method="POST">

                <div className="row form-group">
                  <label className="col-xs-12 col-sm-4" htmlFor="heading">Рубрика:</label>
                  <select className="col-xs-12 col-sm-8"
                          name="heading"
                          id="heading">
                  </select>
                </div>

                <div className="row form-group">
                  <label className="col-xs-12 col-sm-4"
                         htmlFor="title">

                    Заголовок:
                  </label>
                  <textarea className="col-xs-12 col-sm-8"
                            name="title"
                            id="title"
                            onChange={(e) => this.changedArticle.title = e.target.value}
                            value={title}>
            </textarea>
                </div>

                <div className="row form-group">
                  <label className="col-xs-12 col-sm-4"
                         htmlFor="choice">

                    Вибір редакції:
                  </label>
                  <input className=""
                         type="checkbox" name="choice"
                         id="choice"/>
                </div>

                <div className="row form-group">
                  <label className="col-xs-12 col-sm-4"
                         htmlFor="importance">

                    Важлива новина:
                  </label>
                  <input className=""
                         type="checkbox" name="importance"
                         id="importance"/>
                </div>

                <div className="row form-group">
                  <label className="col-xs-12 col-sm-4" htmlFor="look">Вигляд:</label>
                  <input className="col-xs-12 col-sm-8"
                         type="text"
                         name="look"
                         id="look"/>
                </div>

                <div className="row form-group">
                  <label className="col-xs-12 col-sm-4" htmlFor="type">Тип:</label>
                  <input className="col-xs-12 col-sm-8"
                         type="text"
                         name="type"
                         id="type"/>
                </div>

              </form>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="form-horizontal form-field">

            <h3 className="page-header">Короткий опис статті</h3>
            <div className="form-group">
                      <textarea name="#"
                                id="#"
                                rows="4"
                                className="form-control"
                                value={shortContent}>

                      </textarea>
            </div>
            <h3 className="page-header">Текст статті</h3>
            <div className="form-group">
                      <textarea name="#"
                                id="#"
                                rows="20"
                                className="form-control"
                                value={content}>

                      </textarea>
            </div>
            <div className="form-group">
              <div className="btn-group pull-right">
                <button type="button"
                        className="btn btn-success">
                  <i className="glyphicon glyphicon-floppy-save">
                  </i>Save
                </button>
                <button type="button"
                        className="btn btn-danger" >
                  <i className="glyphicon glyphicon-minus-sign">
                  </i>Cancel
                </button>
              </div>
            </div>

            <div className="edit-panel row"></div>

          </div>
        </div>
      </div>
    )
  }
}


