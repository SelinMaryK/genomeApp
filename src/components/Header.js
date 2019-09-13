import React, {Component} from 'react';
import '../css/header.css';

class Header extends Component{

    state={
        searchGnome:''
    }

    handleSearch = (event) =>{
        this.props.searchResult(event.target.value);
        this.setState({
            searchGnome: event.target.value
          });
    }

    render(){
        return(
            <header>
                <h2>Welcome to Brastlewark City</h2>
                <h5>You can search and get details of our inhabitats by typing their name</h5>
                <input type='text' className='search-input' placeholder='Search for a Gnome' name='searchGnome' onChange={this.handleSearch} value={this.state.searchGnome}></input>
            </header>
        );
    }

}

export default Header;