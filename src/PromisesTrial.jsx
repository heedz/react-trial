import React from 'react';
import 'whatwg-fetch';
import TimeForm from './TimeForm';

class PromisesTrial extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            currentTime: null,
            message: 'now',
            tz: 'PST'
        }
    }

    fetchCurrentTime(){
        fetch(this.getApiUrl())
        .then(resp => resp.json())
        .then(resp => {
            const currentTime = resp.dateString;
            this.setState({
                currentTime
            });
        })
    }
    
    getApiUrl(){
        const {tz, msg} = this.state;
        const host = 'https://andthetimeis.com';
        return host + '/' + tz + '/' + msg + '.json';
    }

    handleFormSubmit(e){
        this.fetchCurrentTime();
    }

    handleChange(newState){
        this.setState(newState);
    }
    
    render(){
        const {currentTime, tz} = this.state;
        const apiUrl = this.getApiUrl();

        return(
            <div>
                {
                    !currentTime &&
                    <button onClick={this.fetchCurrentTime.bind(this)}>
                        Get Current time
                    </button>
                }
                {
                    currentTime &&
                    <div>
                        The current time is: {currentTime}
                    </div>
                }
                <TimeForm
                    onFormSubmit={this.handleFormSubmit.bind(this)}
                    onFormChange={this.handleChange.bind(this)}
                    tz={tz}
                    message={'now'}
                />
                <p>We will be making request from : <code>{apiUrl}</code></p>
            </div>  
        );
    }
}

export default PromisesTrial;