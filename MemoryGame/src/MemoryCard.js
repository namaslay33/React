import React, {Component} from 'react';
import './App.css';
import MemoryCard from './MemoryCard.css'

class App extends React.Component{
    clickHandler(){
        alert("card clicked");
    }
    render(){
        return(
            <div className="MemoryCard">
                <div className="MemoryCardInner">
                    <div className="MemoryCardBack">
                        <img src={"https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png"}/>
                    </div>
                    <div className="MemoryCardFront">∆
                    </div>
                </div>
            </div>
        );
    }
}

export default App;