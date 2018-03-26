import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm';

class Header extends React.Component{
    static propTypes = {
        searchHandler: PropTypes.func,
        title: PropTypes.string
    }

    static defaultProps = {
        title: "My React App"
    }
    
    render(){
        const title = this.props.title;

        return(
            <div className="header">
                        
                <div className="menuIcon">
                    <div className="dashTop"></div>
                    <div className="dashBottom"></div>
                    <div className="circle"></div>
                </div>

                <span className="title">{title}</span>

                <SearchForm onSubmit = {this.props.searchHandler}/>

            </div>
        );
    }
}

export default Header;