import React,{Component} from 'react';
import { List, AutoSizer } from 'react-virtualized';
import Header from '../components/Header';
import GnomeCard from '../components/GnomeCard';
import { withRouter} from 'react-router';

import '../css/home.css';

class Home extends Component{

    state={
        gnomeList:[],
        filteredGnome:[],
        error:{
            message:'',
            noData:false
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
                    filteredGnome:jsonData.Brastlewark,
                    error:{
                        noData:false }
                });
            }catch(error){
                this.setState({
                    error:{
                        message:error.message,
                        noData:true },
                }); 
            }
        };
        getGnomeData();
    }

    getRowRenderer = (props) => {
        return (<GnomeCard key={props.key} style={props.style} gnomedata={this.state.filteredGnome[props.index]}/>);
    }

    searchResult = (value) =>{
        const { gnomeList } = this.state;
        let filteredGnome;
        if(value.length>0){
            filteredGnome = gnomeList.filter(gnomedata=> {
                return gnomedata.name.trim().toLowerCase().includes(value.trim().toLowerCase())
            });
        }else{
            filteredGnome = gnomeList;
        }
        this.setState({
            filteredGnome
        })
    }

    render(){
        const {error } = this.state;
        const rowHeight=300;
        if(error.noData){
            return <h2>Something went wrong..!!</h2>
        }
        return(
        <div>
            <Header searchResult={this.searchResult}></Header>
            <div className='rendered-list'>
                <AutoSizer>
                    {({height, width}) => (
                      <List
                        width={width}
                        height={height}
                        rowRenderer={this.getRowRenderer}
                        rowCount={this.state.filteredGnome.length}
                        rowHeight={rowHeight}
                        
                        />
        )}
                </AutoSizer>
            </div>
        </div>
        );
    }
}

export default withRouter(Home);