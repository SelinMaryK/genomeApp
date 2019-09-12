import React,{Component} from 'react';
import Header from '../components/Header';
import GnomeCard from '../components/GnomeCard';

class Home extends Component{

    state={
        gnomeList:[],
        filteredGnome:[],
        error:{
            message:''
        }
    }
    componentDidMount() {
        const getGnomeData = async() =>{
            try{
                const response = await fetch('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json');
                if(!response.ok)
                    throw new Error(response.statusText);
                const jsonData = await response.json();
                this.setState({
                    gnomeList:jsonData.Brastlewark,
                    filteredGnome:jsonData.Brastlewark
                })
            }catch(error){
                this.setState({
                    error:{message:error.message},
                }) 
            }
        };
        getGnomeData();
    }

    render(){
        return(
        <Header></Header>
        );
    }
}

export default Home;