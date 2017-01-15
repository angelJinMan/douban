/*
 * 根容器组件
 * */
import React, { Component } from 'react'
import { Link } from 'react-router'

export default class AppContainer extends Component {
    constructor(props) {
        super(props)
        this.state={
        }
    }

    render() {
        return (
           <div>
               <div>
                   <Link to="/home">首页</Link>
                   <Link to="/movie">电影页面</Link>
                   <Link to="/about">联系我们</Link>
               </div>
               <div>
                   {/*这个就是路由挖的坑*/}
                   {this.props.children}
               </div>
               <div>

               </div>
           </div>
        )
    }
}
