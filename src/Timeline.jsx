import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import 'whatwg-fetch';

class Timeline extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            activityData : [],
            loading : false,
            searchFilter : ""
        }
    }

    searchHandle(e){
        const searchText = e.target.value;

        alert("Search!" + e);
        this.setState({
            searchFilter: searchText,
            loading: true
        });
    }

    refresh(){
        this.setState({
            loading: true
        }, this.fetchData());
    }

    fetchData(){
        fetch("https://api.github.com/events")
        .then(resp => resp.json())
        .then(resp => {
            let updatedActivityData = [];

            resp.map((current) => {
                updatedActivityData.push(
                    {
                        timestamp: current.created_at,
                        text: current.type,
                        user: {
                            id: current.actor.id,
                            name: current.actor.display_login,
                            avatar: current.actor.avatar_url
                        }
                    }
                )
            })

            this.setState({
                activityData: updatedActivityData,
                loading: false
            });
        })
        .catch(error => {
            alert(error)
        })
    }

    render(){
        const {activityData} = this.state;
        return(
            <div className="notificationsFrame">
                <div className="panel">
                    <Header     title='GitHub Timeline'
                                searchHandler={this.searchHandle}
                    />
                    {
                        this.state.loading && <p>Loading ...</p>
                    }
                    {
                        !this.state.loading && <Content    activities = {activityData}/>
                    }

                    <Footer>
                        <button onClick={this.refresh.bind(this)}>
                            <i className='fa fa-refresh'/>Refresh
                        </button>
                    </Footer>
                </div>
            </div>
        );
    }
}

export default Timeline;