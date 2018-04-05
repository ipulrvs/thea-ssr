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
            <div className="wrapper">
                <Sidebar /> 
                <div className="main-panel">
                <Navbar />
                <div className="content">
                    {this.props.children}
                </div>
                </div>
            </div>
            <Footer />
        </div>
    )
  }
}


