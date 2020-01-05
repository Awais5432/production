import React , {Component} from 'react';
import {List, ListItem, ListItemContent, Grid, Cell} from 'react-mdl';


class About extends Component{
  // constructor(props) {
  //   super(props)
  //   this.state = { activeTab: 2 }
  // }
  render(){
    return (
      <div className="about-body">
      {/* <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Company</Tab>
                    <Tab>Vision & Mission</Tab>
                    <Tab>Portfolio  </Tab>
                    <Tab>Team</Tab>
                </Tabs>
      </div> */}
      <Grid className="grid-body">
        <Cell col={6}>
         <h2>Awais Gohar</h2>
         <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
         alt="avatar"
         style={{height: '250px'}}
          />
          <p style={{width:"75%", margin: 'auto' , paddingTop: '1em' }}>Hello, I am Awais Gohar Saeed. I am a fresh software engineer having abilities to develop and expediete solutions of modern environments.</p>
        </Cell>
        <Cell col={6}>
          <h2>Contact Me</h2>
          <hr />
          <div className="contact-list">
          <List>
          <ListItem>
            <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton'}} >
              <i className="fa fa-phone-square" aria-hidden="true"></i>
              0333-0622911
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton'}} >
              <i className="fa fa-envelope" aria-hidden="true"></i>
              awais@me.com
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton'}} >
              <i className="fa fa-fax" aria-hidden="true"></i>
              +92-333-0622911
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton'}} >
              <i className="fa fa-skype" aria-hidden="true"></i>
              My Skype ID
            </ListItemContent>
          </ListItem>
        </List>
        </div>
        </Cell>
      </Grid>
      </div>
    )
  }
}
export default About;