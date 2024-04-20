import React, { useEffect, useState } from 'react'
import Data from "./Data.json"
import "./management.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const Management = () => {
    const [idx, setIdx] = useState(0)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        mobile:""
    })

    const handleChange = (e) =>{
        setFormData({
            ...formData,[e.target.name]:e.target.value
        })
    }

    const saveEmployee = (e)=>{
        e.preventDefault()
        let len=Data.length;
        formData.id=len+1
        // console.log(formData)
        // Data.push(formData)
        const newDataObject = {
            id: formData.id,
            name: formData.name,
            email: formData.email,
            mobile: formData.mobile
          };
          Data.push(newDataObject)
        // console.log(newDataObject) 
        handleClose()
    }

    useEffect(() => {
    }, [])
    


    return (
        <div>
            <div className="header">
                <h1>Management</h1>
                <button onClick={handleShow}>Add Employee</button>
            </div>
            <div className="details">
                <div className="lists">
                    {
                        Data.map((v, idx) => {
                            return (
                                <div style={{ display: "flex", justifyContent: "space-between", padding: "0.5vmax 1vmax" }}>
                                    <button onClick={() => setIdx(v.id)}>{v.name}</button>
                                    <button>X</button>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="information">
                    <h3>Employee  Information:</h3>
                    <hr />
                    <div className="det">
                        {
                            <>
                                <h2>Logo</h2>
                                <p>{Data[idx].name}</p>
                                <p>{Data[idx].email}</p>
                                <p>{Data[idx].mobile}</p>
                            </>
                        }
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={saveEmployee}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name='name' placeholder="Enter Name" onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control type="text" name='mobile' placeholder="Enter Number" onChange={handleChange}/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Management