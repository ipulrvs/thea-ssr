import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

import connect from 'redux-connect-decorator'
@connect(store => ({ 
  global: store.global
}))
export default class Sidebar extends React.Component {

    componentDidMount(){
        this.props.dispatch({type: "CONSTANT_STRING"})
     }

    render(){
        console.log(this.props.global)
        return (
            <div className="sidebar" data-color="purple" data-image="/static/admin/img/sidebar-2.jpg">
                <div className="logo">
                    <a className="simple-text">
                        Admin Panel
                    </a>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <li onClick={() => Router.push('/admin-dashboard')}>
                            <a>
                                <i className="material-icons">dashboard</i>
                                <p>Dashboard</p>
                            </a>
                        </li>
                        <li onClick={() => Router.push('/admin-profile')}>
                            <a>
                                <i className="material-icons">person</i>
                                <p>Profile</p>
                            </a>
                        </li>
                        <li onClick={() => Router.push('/admin-menu')}>
                            <a>
                                <i className="material-icons">list</i>
                                <p>Menu</p>
                            </a>
                        </li>
                        {/* <li className="active-pro">
                            <a href="upgrade.html">
                                <i className="material-icons">unarchive</i>
                                <p>Upgrade to PRO</p>
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>
        )
    }
}


