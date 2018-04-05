import React from 'react'
import Head from 'next/head'

export default class Header extends React.Component {
  render(){
    return (
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
        <meta name="viewport" content="width=device-width" />
        <link href="/static/admin/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/static/admin/css/material-dashboard.css?v=1.2.0" rel="stylesheet" />
        <link href="/static/admin/css/demo.css" rel="stylesheet" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700,300|Material+Icons" rel='stylesheet' />
        <style>{`
          .nav > li {
            cursor: pointer
          }
        `}</style>
      </Head>
    )
  }
}


