import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { 
    Paper,
    Button,
    Card,
    CardTitle,
    CardText,
    CardActions,
    Media,
    MediaOverlay,
    Avatar,
    Divider,
    List,
    ListItem,
    Subheader,
    FontIcon
} from 'react-md'

import connect from 'redux-connect-decorator'
@connect(store => ({ 
  global: store.global
}))
export default class Home extends React.Component {
    render(){
        return (
            <div>
                <div className="md-grid">
                    <div className="md-cell md-cell--4">
                        <Card>
                            <CardTitle 
                                avatar={<Avatar>M</Avatar>}
                                title="PROFILE" subtitle="Motto ...." />
                            <Divider />
                            <CardText>
                                <List>
                                    <ListItem 
                                        primaryText="Nama" 
                                        secondaryText="Acep" />
                                    <ListItem 
                                        primaryText="Alamat" 
                                        secondaryText="Bandung" />
                                    <ListItem 
                                        primaryText="Email" 
                                        secondaryText="ipulrvs@gmail.com" />
                                </List>
                            </CardText>
                            <CardActions>
                                <Button flat primary iconClassName="fas fa-edit">Edit Profile</Button>
                                <br />
                                <Button flat primary iconClassName="fab fa-expeditedssl">Change Password</Button>
                            </CardActions>
                            <br />
                        </Card>
                    </div>
                    <div className="md-cell md-cell--8" style={{margin: 0}}>
                        <div className="md-grid" style={{padding: 0}}>
                            <div className="md-cell md-cell--12">
                                <Card>
                                    <CardTitle title="Beranda Aplikasi" subtitle="Buatlah web ataupun aplikasi untuk kebutuhan anda disini !">
                                        <Button className="md-cell--right" icon>apps</Button>
                                    </CardTitle>
                                    <CardText>
                                        <Button raised primary>Buka Baru</Button>
                                    </CardText>
                                </Card>
                            </div>
                        </div>
                        <br />
                        <Divider />
                        <br />
                        <div className="md-grid" style={{padding: 0}}>
                            <div className="md-cell md-cell--4">
                                <Card style={{minHeight: 250}}>
                                    <CardTitle title="" subtitle="Nama Aplikasi">
                                        <Button className="md-cell--right" icon>bookmark</Button>
                                    </CardTitle>
                                    <CardText>
                                        <img src="/static/toko1.jpg" style={{width: '100%', height: '200px'}} alt="Nature from lorempixel" />
                                    </CardText>
                                    <CardActions>
                                        <Button flat primary iconChildren="input">Buka</Button>
                                        <Button flat primary iconChildren="delete">Hapus</Button>
                                    </CardActions>
                                    <br />
                                </Card>
                            </div>
                            <div className="md-cell md-cell--4">
                                <Card style={{minHeight: 250}}>
                                    <CardTitle title="" subtitle="Nama Aplikasi">
                                        <Button className="md-cell--right" icon>bookmark</Button>
                                    </CardTitle>
                                    <CardText>
                                        <img src="/static/toko1.jpg" style={{width: '100%', height: '200px'}} alt="Nature from lorempixel" />
                                    </CardText>
                                    <CardActions>
                                        <Button flat primary iconChildren="input">Buka</Button>
                                        <Button flat primary iconChildren="delete">Hapus</Button>
                                    </CardActions>
                                    <br />
                                </Card>
                            </div>
                            <div className="md-cell md-cell--4">
                                <Card style={{minHeight: 250}}>
                                    <CardTitle title="" subtitle="Nama Aplikasi">
                                        <Button className="md-cell--right" icon>bookmark</Button>
                                    </CardTitle>
                                    <CardText>
                                        <img src="/static/toko1.jpg" style={{width: '100%', height: '200px'}} alt="Nature from lorempixel" />
                                    </CardText>
                                    <CardActions>
                                        <Button flat primary iconChildren="input">Buka</Button>
                                        <Button flat primary iconChildren="delete">Hapus</Button>
                                    </CardActions>
                                    <br />
                                </Card>
                            </div>
                            <div className="md-cell md-cell--4">
                                <Card style={{minHeight: 250}}>
                                    <CardTitle title="" subtitle="Nama Aplikasi">
                                        <Button className="md-cell--right" icon>bookmark</Button>
                                    </CardTitle>
                                    <CardText>
                                        <img src="/static/toko1.jpg" style={{width: '100%', height: '200px'}} alt="Nature from lorempixel" />
                                    </CardText>
                                    <CardActions>
                                        <Button flat primary iconChildren="input">Buka</Button>
                                        <Button flat primary iconChildren="delete">Hapus</Button>
                                    </CardActions>
                                    <br />
                                </Card>
                            </div>
                            <div className="md-cell md-cell--4">
                                <Card style={{minHeight: 250}}>
                                    <CardTitle title="" subtitle="Nama Aplikasi">
                                        <Button className="md-cell--right" icon>bookmark</Button>
                                    </CardTitle>
                                    <CardText>
                                        <img src="/static/toko1.jpg" style={{width: '100%', height: '200px'}} alt="Nature from lorempixel" />
                                    </CardText>
                                    <CardActions>
                                        <Button flat primary iconChildren="input">Buka</Button>
                                        <Button flat primary iconChildren="delete">Hapus</Button>
                                    </CardActions>
                                    <br />
                                </Card>
                            </div>
                            <div className="md-cell md-cell--4">
                                <Card style={{minHeight: 250}}>
                                    <CardTitle title="" subtitle="Nama Aplikasi">
                                        <Button className="md-cell--right" icon>bookmark</Button>
                                    </CardTitle>
                                    <CardText>
                                        <img src="/static/toko1.jpg" style={{width: '100%', height: '200px'}} alt="Nature from lorempixel" />
                                    </CardText>
                                    <CardActions>
                                        <Button flat primary iconChildren="input">Buka</Button>
                                        <Button flat primary iconChildren="delete">Hapus</Button>
                                    </CardActions>
                                    <br />
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


