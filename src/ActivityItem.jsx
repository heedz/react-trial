import React from 'react';

class ActivityItem extends React.Component{
    render(){
        const activity = this.props.activity;

        return(
            <div className="item">
        
                <div className="avatar">
                    <img src={activity.user.avatar} alt={activity.user.name}/>
                </div>

                <span className="time">{activity.timestamp}</span>
                <p>{activity.user.name} did {activity.text}</p>

                {
                    activity.comments && <div className="commentCount">{activity.comments.length}</div>
                }

            </div>
        );
    }
}

export default ActivityItem;