import React from 'react'
import Layout from './../../components/Layout'
import { Link } from './../../routes'

export default class Dashboard extends React.Component {
  static async getInitialProps({ query, req }) {
    return { }
  }
  render(){
    return (
      <Layout>
        <h1>Welcome To Dashboard</h1>
      </Layout>
    )
  }
}


