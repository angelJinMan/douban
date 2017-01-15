/*
* 路由配置文件
* */
import React, { Component } from 'react'
import { Router, Route, Link,hashHistory} from 'react-router'

import AppContainer from '../containers/AppContainer.js'
import HomeContainer from '../containers/HomeContainer.js'
import MovieContainer from '../containers/MovieContainer.js'
import AboutContainer from '../containers/AboutContainer.js'

export default class Routers extends Component {
    constructor(props) {
        super(props)
        this.state={
        }
    }

    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={AppContainer}>
                    <Route path="home" component={HomeContainer} />
                    <Route path="movie" component={MovieContainer}/>
                    <Route path="about" component={AboutContainer}/>
                </Route>
            </Router>
        )
    }
}
