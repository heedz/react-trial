import React from 'react';
import PropTypes from 'prop-types';

class SearchForm extends React.Component{
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
        searchVisible: PropTypes.bool
    }

    static defaultProps = {
        onSubmit: () => {},
        searchVisible: false
    }

    constructor(props){
        super(props);

        this.state = {
            searchVisible: this.props.searchVisible,
            searchText: ""
        }
    }

    onSearchClick(){
        this.setState({
            searchVisible: !this.state.searchVisible
        });
    }

    onSearchSubmit(e){
        e.preventDefault();

        const{searchText} = this.state;
        this.props.onSubmit(searchText);
    }

    onChangeSearchInput(e){
        const text = e.target.value;
        this.setState({
            searchText: text
        });
    }

    render(){
        let searchClasses = ["searchInput"];

        if(this.state.searchVisible){
            searchClasses.push("active");
        }
        
        return(
            <form onSubmit={this.onSearchSubmit.bind(this)}>
                <input  type="search" 
                        className={searchClasses.join(" ")} 
                        placeholder="Search ..." 
                        onChange={this.onChangeSearchInput.bind(this)}
                        />

                <div    className="fa fa-search searchIcon" 
                                    onClick={this.onSearchClick.bind(this)}></div>
            </form>
        );
    }
}

export default SearchForm;