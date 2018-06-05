import React from 'react'
import Layout from './../../components/Layout'
import { Link } from './../../routes'
import DataForm from './../../components/DataForm'

export default class Profile extends React.Component {
  static async getInitialProps({ query, req }) {
    return { }
  }
  render(){
    return (
      <Layout>
        {/* Example Using Router Link */}
        <Link route='profilePage' params={{id: 'hello-world'}}>
          <a>GO TO PROFILE PAGE</a>
        </Link>
        {/* Example Using Router Link */}
        <h1>Profile</h1>
        <DataForm />
      </Layout>
    )
  }
}


