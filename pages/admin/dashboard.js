import React from 'react'
import Layout from './../../components/Layout'
import { Link } from './../../routes'
import DataTable from './../../components/DataTable'
import Home from './../../views/Home'

export default class Dashboard extends React.Component {
  static async getInitialProps({ query, req }) {
    return { }
  }
  render(){
    return (
      <Layout>
        <Home />
      </Layout>
    )
  }
}


