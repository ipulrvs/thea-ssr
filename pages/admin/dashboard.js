import React from 'react'
import Layout from './../../components/Layout'
import { Link } from './../../routes'
import DataTable from './../../components/DataTable'

export default class Dashboard extends React.Component {
  static async getInitialProps({ query, req }) {
    return { }
  }
  render(){
    return (
      <Layout>
        <DataTable />
      </Layout>
    )
  }
}


