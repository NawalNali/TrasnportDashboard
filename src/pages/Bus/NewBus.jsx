import { NativeSelect, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/dobInput/Input';
import './NewBus.css';

export default function NewBus() {

    const [bus, setBus] = useState([]);
    
    const [errMsg, setErrMsg] = useState('');


    const errRef = useRef();

    const [id, setID] = useState();
    const [seatN, setSeatN] = useState();
    const [fName, setFname] = useState();
    const [lName, setLname] = useState();
    const [dob, setDob] = useState();
    const [address, setAddress] = useState();
    const [prefix, setPrefix] = useState();
    const [num, setNum] = useState();
  
  const navigate = useNavigate();
    
  useEffect(() => {
    axios.get('http://localhost/panelApi/bus/')
    .then(res => {
      setBus(res?.data);
      
    });
  },[]);

      useEffect(() => {
        for(var i = 0; i < bus.length; i++)
       {
        if(bus[i].id == id)
        {
            setErrMsg('This ID Exists');
            break;
        }
        else
            setErrMsg('');
       }

      }, [id]);

      const handleAdd = () => {
        var data = new FormData();
        data.append('id', id);
        data.append('noseats', seatN);
        data.append('fName', fName);
        data.append('lName', lName);
        data.append('dob', dob);
        data.append('address', address);
        data.append('num', num);
        data.append('prefix', prefix);
        data.append('insert', true);


        axios.post('http://localhost/panelApi/bus/', data);
        navigate(-1, {replace: true});
      }






  return (
    <div className='Bus'>
        <div className="form">
            <h1>Add Bus</h1>
            <form>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <div className="addItem">
                    <label>ID</label>
                    <input required value={id} type="number" className='addInput' 
                    onChange={(e) => setID(e.target.value)} />
                </div>
                
                <div className="addItem">
                    <label>Number of Seats</label>
                    <input type="number" required
                    value={seatN}
                    className="addInput"
                    onChange={(e) => setSeatN(e.target.value)}
                    />

                </div>
                <h2>Drvier Information</h2>
                <div className="addItem">
                    <label>First Name </label>
                    <input className='addInput' required
                    onChange={(e) => setFname(e.target.value)}  />
                </div>

                <div className="addItem">
                    <label>Last Name </label>
                    <input className='addInput' required
                    onChange={(e) => setLname(e.target.value)}  />
                </div>

                <div className="addItem">
                    <label>Date of Birth </label>
                    <Input className="addInput" 
                    onchange={(e) => setDob(e.target.value)}
                    />
                </div>

                <div className="addItem">
                    <label>Address</label>
                    <input type="text" className='addInput'
                    onChange={(e) => setAddress(e.target.value)} />
                </div>
             
                <div className="phone">
                    <div className='addItem'>
                        <NativeSelect className='prefixMenu' onChange={e => {
                            setPrefix(e.target.value)
                        }}>
                            <option value="">Prefix</option>
                            <option value="+963">+963</option>
                        </NativeSelect>
                    </div>
                    <div className='addItem'>
                        <label>Phone Number</label>
                        <input required type="number" className='addInput' onChange={e => {
                            if(e.target.value.length != 9)
                            {
                                setErrMsg('Number Have to Be 9 Digits');
                            }
                            else if(e.target.value.length == 9)
                            {
                                setErrMsg('');
                                setNum(e.target.value)
                            }
                            
                        }}/>
                    </div>
                    </div>

                <div className="buttonContainer">
                        <div className={errMsg ? "offscreen" : "addButtonContainer"}>
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
            </form>
        </div>  
    </div>
  )
}
