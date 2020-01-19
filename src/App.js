import React,{Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component
{
  constructor(){
    super();
    this.state={
     monosters:[ ],
     searchField:""
    }
  }

componentDidMount(){
  fetch('http://jsonplaceholder.typicode.com/users')
  .then(response=> response.json())
  .then(users=> this.setState({monosters:users }));
}

searchHandler=(e)=>{
this.setState({
  searchField:e.target.value
});
}

  render(){
    const {monosters,searchField} = this.state;
const filterdMonosters= monosters.filter(monoster=> 
  monoster.name.toLowerCase().includes(searchField.toLowerCase()))
    return(
      <div className="App">
        <h1>Monosters Rolodex</h1>
        <SearchBox placeholderName="search monosters" searchHandleChnage={this.searchHandler}/>
        <CardList monosters={filterdMonosters}>
        </CardList>
      
    </div>
    )
  }
}

export default App;
