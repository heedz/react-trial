import React from 'react';
import ActivityItem from './ActivityItem';
import PropTypes from 'prop-types';

class Content extends React.Component{
    static propTypes = {
        activities: PropTypes.object.isRequired
    }
    
    render(){
        const{activities} = this.props;

        return(
            <div className="content">
                <div className="line"></div>

                {/* Items */}
                {activities.map((activity) => {
                    return(
                        <ActivityItem activity = {activity}/>
                    );    
                })}

            </div>
        );
    }
}

export default Content;