/*
 * /api/users/1/10 - читати усіх користувачів(перша сторінка 10 записів)
 * (1) - номер сторінки яку передивлятись
 * (10) - кількість користуачів яку будемо виводити на сторінку
 *GET вертає обєкт
 * {
 *  "data":[],           - тут обєкти корстувачі
 *  "page":1,            - тут номер сторінки яку передивляємось
 *  "totalitems":100,    - тут загальна к-ть користувачів
 *  "limit":10,          - тут скільки користувачів на сторінці(в дата обєкті)
 *  "totalPages":10      - тут загальна кількість сторінок яка автоматично рахується
 *  сервером в залежності від загальної кількості користувачів та ліміту відображення на сторінці
 * }
 * /api/users/1/10/preview
 * повертає те саме та неповну дату
 * "data":[
 * {
 *  "id":...,
 *  "photo":...,
 *  "fulname":...,
 *  "country":...
 * },
 * ......
 * ]
 *
 * GET /api/users/<id> + ід - інформація по конкретному юзеру
 * GET /api/countrles/ - повертає список(масив) країн
 * DELETE /api/users/<id> + ід - видаляє конкретного юзера
 * при видалені повертає видалений обєкт
 *
 * POST /api/users/ - створити користувача,фото можна не передавати север сам добавить
 *
 *
 * логіка:
 * - загружається сторінка даємо запит на сервер
 * і записуємо на сторінку перших 10 користувачів через привю
 * - далі при нажаті на любе місце користувача викидється права панель і заповняється
 * форма на редагування якщо зберегти то переписуємо методом пут  і тоді якщо
 * пройло все гуд переписуємо інформацію про того конкретного к-ча з ліва
 * */

/*http://knockoutjs.com/documentation/submit-binding.html*/
/*
 GET /api/articles/:page/:limit - список статей (не фільтрований по користувачах)
 GET /api/users/:authorID/articles/:id - конкретна стаття користувача
 GET /api/users/:authorID/articles/:page/:limit - список статей користувача

 DELETE /api/users/:authorID/articles/:id - видалити статтю користувача
 POST /api/users/:authorID/articles - створити статтю
 PUT /api/users/:authorID/articles - оновити статтю```
 *///Статті
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

import {Header} from "./Header";
import {Home} from "./Home";
import {Message} from "./Message";
import {PagePrevey} from "./PagePrevey"
import {HomeArticlesAdmin} from "./articlesAdmin/HomeArticlesAdmin";
import  {PreveyArticlesAdmin} from "./articlesAdmin/PreveyArticlesAdmin";
import {PreveyPostArticles} from "./articlesAdmin/PreveyPostArticles";
import {HomeUserAdmin} from "./userAdmin/HomeUserAdmin"

class RouteConfigExample extends React.Component{

    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div className="container">
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/page/:currentPage" component={PagePrevey}/>
                        <Route exact path="/messages/:id/author/:authorID" component={Message}/>
                        <Route exact path="/articlesAdmin/" component={HomeArticlesAdmin}/>
                        <Route exact path="/articlesAdmin/page/:currentPage" component={PreveyArticlesAdmin}/>
                        <Route exact path="/articlesAdmin/post/" component={PreveyPostArticles}/>
                        <Route exact path="/articlesAdmin/post/:articleId" component={PreveyPostArticles}/>
                        <Route exact path="/userAdmin/" component={HomeUserAdmin}/>
                    </div>
                </div>
            </Router>
        )
    }
}


export default RouteConfigExample;
