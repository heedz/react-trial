import React from 'react';
import ReactDOM from 'react-dom';
import './timeline.css';
import Timeline from './Timeline';
import Clock from './Clock';
import registerServiceWorker from './registerServiceWorker';
import PromisesTrial from './PromisesTrial';

ReactDOM.render(<Timeline />, document.querySelector('#app'));
registerServiceWorker();
