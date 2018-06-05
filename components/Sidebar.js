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
        return (
            <div></div>
        )
    }
}


