import React, {Component} from 'react';
import './App.css';

class App extends React.Component{
    render() {
        let friends = 
        [{
            name: "Matthew",
            age: 17},
        {
            name: "Mark",
            age: 21},
        {
            name: "Luke",
            age: 25},
        {
            name: "John",
            age: 32}]

        return (
           <div>
               {friends.map(function (a, b) {
                   let friendsAge; 
                    if (a.age >= 21){
                        friendsAge = "You can come to the party!"}
                    else {
                        friendsAge = "You can't come to the party!"
                       }
                   
                   return <li key={b}>Hello {a.name}, Age: {a.age} {friendsAge}</li>
                
                    })} 
            </div>
        )
    }
}

// App.propTypes = {
//     txt: PropTypes.string
// }

export default App;