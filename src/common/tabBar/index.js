import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import home1 from '@/img/home1.png'
import home2 from '@/img/home2.png'
import list1 from '@/img/list1.png'
import list2 from '@/img/list2.png'
import shopping1 from '@/img/shopping1.png'
import shopping2 from '@/img/shopping2.png'
import mine1 from '@/img/mine1.png'
import mine2 from '@/img/mine2.png'
import {withRouter} from 'react-router-dom'
class TabBarCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
            hidden: false,
        };
    }
    render() {
        return (
            <div style={{ position: 'fixed', width: '100%', bottom: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >
                    <TabBar.Item
                        title="首页"
                        key="Home"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url('+home1+') center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url('+home2+') center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selected={this.state.selectedTab === 'blueTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                            this.props.history.push("/home");
                        }}
                        data-seed="logId"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url('+list1+') center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url('+list2+') center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="列表"
                        key="List"
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                            this.props.history.push("/list");
                        }}
                        data-seed="logId1"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url('+shopping1+') center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url('+shopping2+') center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="购物车"
                        key="Shooping"
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                            this.props.history.push("/shopping");
                        }}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri:mine1 }}
                        selectedIcon={{ uri:mine2}}
                        title="我的"
                        key="Mine"
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                            this.props.history.push("/mine");
                        }}
                    >
                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }
}
export default withRouter(TabBarCom)