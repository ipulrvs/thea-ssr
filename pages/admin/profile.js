import React from 'react'
import Layout from './../../components/Layout'

export default class Profile extends React.Component {

  componentDidMount(){
    alert("B")
  }

  render(){
    return (
      <div>
        <Layout>
          <h1>Profile</h1>
          <img src='/static/admin/img/sidebar-2.jpg' />
        </Layout>
      </div>
    )
  }
}


