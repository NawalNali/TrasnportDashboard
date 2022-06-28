import { MenuItem, Select } from '@mui/material';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './newComlain.css'

export default function NewComplain() {

    const [title, setTitle] = useState();
    const [desc, setDesc]  = useState();
    const [type, setType] = useState();
    const [stdID, setStdID] = useState();

    const [students, setStudents] = useState([]);

    const types = [
        "Driver Problems",
        "Service Problems",
        "Lost Something"

    ]

    useEffect(() => {
        axios.get('http://localhost/panelApi/students/')
        .then(res => {
            setStudents(res?.data);
        })
    })

    const navigate = useNavigate();
    const handleAdd = () => {
        var data = new FormData();
        data.append('title', title);
        data.append('desc', desc);
        data.append('type', type);
        data.append('stdID', stdID);
        axios.post('http://localhost/panelApi/complains/', data)
        .then(res => {
            console.log(res?.data);
        });
        
    }

  return (
    <div className='AddComlain'>
        <div className="form">
            <h1>Add Complain</h1>
            <form>

                <div className="addItem">
                    <label>Title</label>
                    <input type="text" className='addInput' onChange={e => {
                        setTitle(e.target.value);
                    }}/>
                </div>
                
                <div className="addItem">
                    <label>Student</label>
                    <Select className='addInput'>
                        {students.map((value) => {
                            return(
                                <MenuItem value={value.name} onClick={() => {
                                    setStdID(value.id);
                                }}>
                                {value.name}
                                </MenuItem>
                            )
                        })}
                    </Select>

                </div>

                <div className="addItem">
                    <label>Description</label>
                    <textarea className='addInput' style={{height: "70px", resize: 'none'}} cols="40" rows="10" onChange={e => {
                        setDesc(e.target.value);
                    }} />
                </div>

                <div className="addItem">
                    <label>Type</label>
                    <Select className='addInput'>
                        {
                            types.map((value) => {
                                return(
                                    <MenuItem className='addInput' value={value} onClick={() => {
                                        setType(value);
                                    }}>{value}</MenuItem>
                                )
                            })
                        }
                    </Select>
                </div>


            </form>
                <div className="buttonContainer">
                    <div className="addButtonContainer">
                        <span className='confirmAdd'>Confirm Add ?</span>
                        <button type="submit" className='addButton' onClick={e => {
                            e.preventDefault();
                            handleAdd();
                        }}>Add</button>
                    </div>
                    <button className='cancelButton' onClick={(e) => {
                    e.preventDefault();
                    
                    navigate(-1, {replace: true});
                }}>
                        Cancel
                    </button>
                </div>
        </div>        
    </div>
  )
}
