import React from 'react';
import ReactDOM from 'react-dom';
/**
 * Библиотека маршрутизации.
 * {BrowserRouter as Router} возможность переименования.
 * специальные функции пакета, популярные.
 * @function [<BrowserRouter>]
 * @function [<Switch>]
 * @function [<Route>]
 * @function [<Link>]
 * @function [<NavLink>]
 */
import {BrowserRouter as Router} from 'react-router-dom';

import Routes from './node_modules/pages/routes';
import TopBar from 'components/topBar'
/**
 * Функция рендерит элементы.
 * @function [<App>] 
 * @returns [<TopBar>] - элемент верхнего меню.
 * @returns [<Routes>] - элемент маршрутов связывающий приложение.
 */
const App = () => {
    return (
        <div>
            <Router>
                <TopBar/>
                <Routes/>
            </Router>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
