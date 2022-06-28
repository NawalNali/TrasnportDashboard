import { NativeSelect } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import Input from '../../components/dobInput/Input';
import './Bus.css'
import './NewBus.css'

export default function ModifyBus() {
    const [bus, setBus] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();
    const errRef = useRef();
    const [errMsg, setErrMsg] = useState('');

    const [seatN, setSeatN] = useState();
    const [fName, setFname] = useState();
    const [lName, setLname] = useState();
    const [dob, setDob] = useState();
    const [address, setAddress] = useState();
    const [prefix, setPrefix] = useState();
    const [num, setNum] = useState();

    useEffect(() => {
        axios.get('http://localhost/panelApi/bus/', {
            params: {
                sid: id
            }
        }).then(res => {
            setBus(res?.data);
        })
    }, [])

    useEffect(() => {
        setSeatN(bus.noseats);
    }, [bus])

    useEffect(() => {
        if(seatN > 256) 
        {
            setErrMsg('Number of Seats should be less than 256');
        }
        else {
            setErrMsg('');
        }
        
    }, [seatN])

    const handleEdit = () => {
        const data = new FormData();
        data.append('id', id);
        data.append('noseats', seatN);
        data.append('update', true);
        axios.post('http://localhost/panelApi/bus/', data);
        navigate(-1, {replace: true});
    }

    

  return (
    <div className='Bus'>
        <div className="form">
            <h1>Modify Bus #{bus.id}</h1>
            <form>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                
                
                <div className="addItem">
                    <label>Number of Seats</label>
                    <input type="number" required
                    value={seatN}
                    className="addInput"
                    onChange={(e) => setSeatN(e.target.value)}
                    />

                </div>
                

                <div className="buttonContainer">
                        <div className={errMsg ? "offscreen" : "addButtonContainer"}>
                        <span className='confirmAdd'>Confirm Add ?</span>
                        <button type="submit" className='addButton' onClick={e => {
                            e.preventDefault();
                            handleEdit();
                            
                        }}>Add</button>
                    </div>
                    <button className='cancelButton' onClick={(e) => {
                    e.preventDefault();
                    
                    navigate(-1, {replace: true});
                }}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}
