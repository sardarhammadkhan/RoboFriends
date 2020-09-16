import React,{ Component}from 'react';
import './App.css';
import CardList from './Components/CardList/CardList'
import { robots } from './Components/robots';
import Search from './Components/Search'


class App extends Component {
state={
    robots:robots,
    searchFilef:''
  }



writingSearch =(event)=>{

this.setState({searchFilef:event.target.value})


}
 
render(){
 const filtered = this.state.robots.filter((robo) => {
  return robo.name.toLowerCase().includes(this.state.searchFilef.toLowerCase());
 });

return (
  <div className="tc">
    <Search change={this.writingSearch} />
    {
      <CardList robots={filtered} />}
  </div>
);
}
  
}

export default App;
  