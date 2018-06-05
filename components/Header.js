import React from 'react'
import Head from 'next/head'

export default class Header extends React.Component {
  render(){
    return (
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
        <meta name="viewport" content="width=device-width" />
        <link rel="stylesheet" type="text/css" href="/static/theme/react-md.red-light_blue.min.css" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="/static/fontawesome/web-fonts-with-css/css/fontawesome-all.min.css" />
        <style>
          {`
            body {
              margin: 0px;
              padding: 0px;
            }
            .fullWidth {
              width: '100% !important'
            }
            .fas {
              font-size: 14px;
            }
          `}
        </style>
      </Head>
    )
  }
}


