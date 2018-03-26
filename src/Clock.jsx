import React from 'react';

class Clock extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            time : this.getTime()
        }
    }

    render(){
        const {hours, minutes, seconds, ampm} = this.state.time;

        return(
            <div className="clock">
                {
                    (hours == 0) ? 12 :
                        (hours > 12) ? hours - 12 :
                            hours
                }:{
                    (minutes > 9) ? minutes : `0${minutes}`
                }:{
                    (seconds > 9) ? seconds : `0${seconds}`
                } {ampm}
            </div>
        );
    }

    getTime(){
        const currentTime = new Date();
        return{
            hours : currentTime.getHours(),
            minutes : currentTime.getMinutes(),
            seconds : currentTime.getSeconds(),
            ampm : (currentTime.getHours() > 12) ? 'pm' : 'am'
        }
    }

    componentDidMount(){        /* invoke immediately after component mounts */
        this.timerID = setInterval(
            () => this.updateClock(),
            1000
        );
    }

    componentWillUnmount(){     /* invoke immediately before component unmount */
        clearInterval(this.timerID);
    }

    updateClock(){              /* to set the state */
        this.setState({
            time : this.getTime()
        });
    }
}

export default Clock;