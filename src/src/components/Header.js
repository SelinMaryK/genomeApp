import React, {Component} from 'react';
import '../css/header.css';

class Header extends Component{

    render(){
        return(
            <header>
                <h2>Welcome to Brastlewark City</h2>
                <h5>You can search and get details of our inhabitats by typing their name</h5>
                <input type='text' className='search-input' placeholder='Search for a Gnome'></input>
            </header>
        );
    }

}

export default Header;