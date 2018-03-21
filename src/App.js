import React, { Component } from 'react';
import './App.css';
import Radium,{StyleRoot} from 'radium';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons:[
      {id:'asd',name:'Mihika',age:23},
      {id:'dsf',name:'Neha',age:20},
      {id:'fgh',name:'Nisha',age:48}
    ],
    showPersons : false
  }
  
  nameChangedHandler=(event,id)=>{
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id===id;
    });
    const person ={
      ...this.state.persons[personIndex]
    } 
    person.name = event.target.value;
    console.log("Was called");
    const persons = [...this.state.persons]
    persons[personIndex]  =person;

    this.setState({persons:persons})
  }
  togglePersonsHandler=()=>{
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow
    })
  }
  deletePersonHandler=(index)=>{
    const persons = this.state.persons.slice();
    persons.splice(index,1); 
    this.setState({persons:persons})
  }
  render() {
    const style = {
      backgroundColor  : 'green',
      color:'white',
      font : 'inherit',
      border : '1x solid blue',
      padding : '8px',
      cursor : 'pointer',
      ':hover' : {
        backgroundColor: 'lightGreen',
        color : 'black'
      }
    }
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person,index)=>{
            return <Person
              key={person.id}
              click = {()=>this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed = {(event)=>this.nameChangedHandler(event,person.id)}
              />
          })}
       </div> 
      )
      style.backgroundColor='red';
      style[':hover']={
        backgroundColor : 'salmon',
        color : 'black'
      }
    }
    const classes = [];
    if(this.state.persons.length<=2){
      classes.push('red')
    }
    if(this.state.persons.length<=1){
      classes.push('bold');
    }
    
    return (
      <StyleRoot>
      <div className="App">
       <h1>Hi I am a a react app</h1>
       <p className={classes.join(' ')}>This is really working</p>
       <button onClick={()=>this.togglePersonsHandler()}
        style={style}
       >Toggle Persons</button>
       {persons}
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
