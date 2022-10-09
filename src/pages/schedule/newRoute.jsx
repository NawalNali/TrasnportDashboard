import { Add } from '@mui/icons-material';
import axios from 'axios';
import React, { useRef } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TimePicker from 'react-time-picker';
import './Schedule.css'

export default function NewRoute() {

    const [going, setGoing] = useState([0]);
    const [depart, setDepart] = useState([0]);
    const [gClick, setgClick] = useState(0);
    const [dClick, setdClick] = useState(0);

    const [id, setID] = useState();
    const [routeName, setRouteName] = useState();
    const [goingTimes, setGoingTimes] = useState();
    const [departTimes, setDepartTimes] = useState();
    const [stops, setStops] = useState();
    const [notes, setNotes] = useState("");

    const [routes, setRoutes] = useState([]);
    const [errMsg, setErrMsg] = useState('');
    const errRef = useRef();
/*
    useEffect(() => {
        axios.get('http://localhost/panelApi/route/')
        .then(res => {
            setRoutes(res?.data);
        })
    }, [])
    */

    useEffect(() => {
        for(var i = 0; i < routes.length; i++)
        {
            if(routes[i].id == id)
            {
                setErrMsg('This ID Exists');
                break;
            }
            else
            setErrMsg('');
        }
        if(id > 100)
        {
            setErrMsg("ID SHOULD BE > 100");
        }
    }, [id]);

  
    

    const navigate = useNavigate();
    const handleAdd = () => {
        var gTime = "";
        var dTime = "";
        for(var i = 0; i < 3; i++)
        {
            if(goingTimes[i])
                gTime += goingTimes[i] + "\n";
        }
        for(var i = 0; i < 3; i++)
        {   if(departTimes[i])
                dTime += departTimes[i] + "\n";
        }
        console.log(gTime);
        var data = new FormData();
        data.append('id', id);
        data.append('routeName', routeName);
        data.append('goingTimes', gTime);
        data.append('departTimes', dTime);
        data.append('stops', stops);
        data.append('notes', notes);
        data.append('insert', true);
        axios.post('http://localhost/panelApi/route/', data)
        .then(() => {
            navigate(-1, {replace: true});
        })
       
        
    }

    
  return (
    
    <div className="Schedule">
    <div className='AddRoute'>
        <div className="widgets">
            <div className="form">
                <h1>Add New Route</h1>
                <form>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <div className="addItem">
                        <label>ID</label>
                        <input type="number" className='addInput' min="1" max="150" onChange={e => {
                            setID(e.target.value);
                            
                        }} />
                    </div>

                    <div className="addItem">
                        <label>Route Name</label>
                        <input type="text" className='addInput' onChange={e => {
                            setRouteName(e.target.value);
                            
                        }} />
                    </div>

                    <div className="addItem">
                        <span style={{display: 'flex'}}><label>Going Times</label> <button className={going.length < 3 ? '' : 'offscreen'}
                        onClick={e => {
                            e.preventDefault();
                            setGoing([...going, going.length])
                            
                            
                        }}
                        style={{border: 'none', backgroundColor: 'white'}}
                        ><Add style={{height: '20px', width: '20px', color: 'green'}}/></button></span>
                        {
                            going.map((index) => {
                                return(
                                    
                                    <TimePicker name='goingTime' locale='sv-sv' className="addInput" clockIcon={null} disableClock 
                                                maxTime="11:00:00" minTime="06:00:00" clearIcon={null} 
                                                onChange={(e) => {
                                                    
                                                    setGoingTimes({ ...goingTimes, 
                                                        [index]: e
                                                    });
                                                    
                                                    
                                                }}
                                                
                                                />
                                )
                            })
                        }
                    </div>

                    <div className="addItem">
                        <span><label>Departure Times</label>
                        <button className={depart.length < 3 ? '' : 'offscreen'}
                         onClick={e => {
                            e.preventDefault();
                            setDepart([...depart, depart.length]);
                        }}
                        style={{border: 'none', backgroundColor: 'white'}}
                        >
                         <Add style={{height: '20px', width: '20px', color: 'green'}}/>   
                        </button>
                        </span>
                        {
                            depart.map((index) => {
                                return(
                                    <TimePicker name='departTime' locale='sv-sv' className="addInput" clockIcon={null} disableClock 
                                                maxTime="17:30:00" minTime="12:00:00" clearIcon={null} 
                                                onChange={(e) => {
                                                    setDepartTimes({...departTimes,
                                                        [index] : e
                                                    })
                                                }} />
                                )
                            })
                        }
                        
                    </div>

                    <div className="addItem">
                        <label>Stops</label>
                        <textarea className='addInput' cols="40" rows="10" style={{resize: 'none', height: '50px'}} onChange={e => {
                            setStops(e.target.value);
                        }} />
                    </div>
                    
                    <div className="addItem">
                        <label>Notes</label>
                        <textarea className='addInput' cols="40" rows="10" style={{resize: 'none', height: '50px'}} onChange={e => {
                            setNotes(e.target.value);
                        }} />
                    </div>
                    
                <div className="buttonContainer">
                <div className="addButtonContainer">
                    <span className="confirmAdd">Confirm Add ?</span>
                    <button type='submit' className={errMsg ? 'offscreen' : 'addButton'} onClick={(e) => {
                        e.preventDefault();
                        handleAdd();
                    }}>
                        Add
                    </button>
                    
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
    </div>
    </div>
  )
}
