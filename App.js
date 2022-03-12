//import logo from './logo.svg';
import React from 'react';
import './App.css';
//import Todo from './Todo';
//import NumberGuess from './NumberGuess';
const userContext=React.createContext();
function App() {
  return (
  
     
      
    <userContext.Provider value={{
      name: "mikhil",
      age: "26",
      city: "panvel",
      gender: "male"
}}>
      <User/>
      </userContext.Provider>
      
  );
}

function User()
{
  const context = React.useContext(userContext);
  return (
    
    <h1>This is user and This is props data from Parent. The data is like this, name is: {context.name}
    age is: {context.age}, city is: {context.city}, gender is: {context.gender}. That's all.
    </h1>);
   
 
}

// function userChild(newname)
// {
  
//   <h1> This is user child {newname} </h1>
  
// }
export default App;
