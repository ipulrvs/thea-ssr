import React from 'react'
import { Toolbar } from 'react-md';

export default class Navbar extends React.Component {
  render(){
    return (
        <nav>
          <Toolbar
            title="Frontend Navigation"
            colored
          />
        </nav>
    )
  }
}


