import React , {Component} from 'react';
import {Tabs, Tab} from 'react-mdl';


class Portfolio extends Component{
  constructor(props) {
    super(props)
    this.state = { activeTab: 2 }
  }
  render(){
    return (
      <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Starks</Tab>
                    <Tab>Lannisters</Tab>
                    <Tab>Targaryens</Tab>
                </Tabs>
      </div>
    )
  }
}
export default Portfolio;