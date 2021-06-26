import React, { useState, useEffect } from 'react';
import ContactForm from "../pages/CourseForm";
import firebaseDb from "../config/firebase";
import {isAuthenticated} from "../utils/auth";
import Topbar from "../pages/Topbar";
import "../css/Contact.css";


const Course = () => {

	var [currentId, setCurrentId] = useState('');
    var [contactObjects, setContactObjects] = useState({})

    //Once components load complete
    useEffect(() => {
        firebaseDb.child('course').on('value', snapshot => {
            if (snapshot.val() != null) {
                
                    setContactObjects({
                        ...snapshot.val()

                    });
                
            }
        })
    }, [])
    console.log(contactObjects)

    const addOrEdit = (obj) => {
        if (currentId == '')
        firebaseDb.child('course').push(
            obj,
            err => {
                if (err)
                    console.log(err)
                else
                    setCurrentId('')
            })
    else
        firebaseDb.child(`course/${currentId}`).set(
            obj,
            err => {
                if (err)
                    console.log(err)
                else
                    setCurrentId('')
            })
    }

    const onDelete = id => {
        if (window.confirm('Are you sure to delete this record?')) {
            firebaseDb.child(`course/${id}`).remove(
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                })
        }
    }
    const userData = isAuthenticated();
    const user_id = userData.id;

  return (
        <div className="main_body">
        <Topbar/>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">Course Completion</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <ContactForm {...({ currentId, contactObjects, addOrEdit })} ></ContactForm>
                </div>
                <div className="col-md-7">
                    <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                            <tr>
                                <th>Subject Name</th>
                                <th>Percent Completed</th>
                                {/* <th>Email</th> */}
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(contactObjects).map((val,key) =>(
                                   
                                    (user_id == contactObjects[val].email ) ? 
                                (
                                    
                                    <tr key={key}>
                                        
                                        <td>{contactObjects[val].fullName}</td>
                                        <td>{contactObjects[val].mobile}</td>
                                        {/* <td>{contactObjects[val].email}</td> */}
                                        <td className="bg-light">
                                            <a className="btn text-primary" onClick={() => { setCurrentId(val) }}>
                                                <i className="fas fa-pencil-alt"></i>
                                            </a>
                                            <a className="btn text-danger" onClick={() => { onDelete(val) }}>
                                                <i className="far fa-trash-alt"></i>
                                            </a>
                                        </td>
                                    </tr>
                                ) : null 
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Course;