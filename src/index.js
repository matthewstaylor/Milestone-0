import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import Matt from './about/matt/matt'
import Jose from './about/jose/jose'

const routing = (
    <Router>
        <div>
            <Route path exact="/" component={App} />
            <Route path="/matt" component={Matt} />
            <Route path="/jose" component={Jose} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
