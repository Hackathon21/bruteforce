import React , { Component } from 'react';
import Topbar from "../pages/Topbar";
import fire from '../config/firebase';
import { Button } from '@themesberg/react-bootstrap';
import "../css/Grades.css";

class Grades extends Component{

    state={
        text : ""
      }
    
      handleText=e=>{
        this.setState({
          text : e.target.value
        })
      }
      handleSubmit=e=>{
        let messageRef = fire.database().ref('Subject').orderByKey().limitToLast(100);
        fire.database().ref('Subject').push(this.state.text);
        this.setState({
          text : ""
        })
      }
    
     render(){
        return (
            <>
            <Topbar/>
          <div className="page-content">
            <input type ="text" onChange={this.handleText} id="inputText"/>
            <br/>
            <button onClick={this.handleSubmit}> Save </button>
          

            <div>
                <Button>Add Subject Marks</Button>
            </div>
          
          
          </div>
          
          </>
        );
      }
    }


export default Grades;