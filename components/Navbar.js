import React from 'react'
import { Toolbar, Button, FontIcon, SVGIcon } from 'react-md';

export default class Navbar extends React.Component {
  render(){
    return (
        <nav>
          <Toolbar
            // nav={<Button icon><FontIcon className="fas fa-bars" /></Button>}
            title="Belajar Server Side Rendering"
            colored
            actions={
              [
                <Button flat primary iconChildren="power_settings_new">Logout</Button>
              ]
            }
          />
        </nav>
    )
  }
}


