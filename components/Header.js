import React from 'react'
import Head from 'next/head'

export default class Header extends React.Component {
  render(){
    return (
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
        <meta name="viewport" content="width=device-width" />
      </Head>
    )
  }
}


