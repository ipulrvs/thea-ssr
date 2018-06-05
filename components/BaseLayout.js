import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

export default class Layout extends React.Component {
  render(){
    return (
        <div>
            <Header />
            <Sidebar /> 
            <Navbar />
                {this.props.children}
            <Footer />
        </div>
    )
  }
}


