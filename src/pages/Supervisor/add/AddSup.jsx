import React from 'react'
import './AddSup.css'
import axios from 'axios'
import NativeSelect from '@mui/material/NativeSelect';
import { useNavigate } from 'react-router-dom';

export default function AddSup() {

    var data = new FormData();
    const navigate = useNavigate();
    const handleAdd = () => {
        axios.post('http://localhost/panelApi/supervisor/', data);
        navigate(-1, {replace: true});
        
    }

  return (
    <div className='AddSup'>
        <div className="widgets">
            <div className="form">
                <h1>Add Supervisor</h1>
                <form>
                    
                    <div className='addItem'>
                        <label>First Name</label>
                        <input type="text" className='addInput' onChange={e => {
                            data.set('fName', e.target.value);
                        }}/>
                    </div>
                    <div className='addItem'>
                        <label>Last Name</label>
                        <input type="text" className='addInput' onChange={e => {
                            data.set('lName', e.target.value);
                        }}/>
                    </div>
                    
                    <div className='addItem'>
                        <label>Date of Birth</label>
                        <input type="date" className='addInput' onChange={e => {
                            data.set('dob', e.target.value);
                        }}/>
                    </div>
                    <div className='addItem'>
                        <label>Address</label>
                        <input type="text" className='addInput' onChange={e => {
                            data.set('address', e.target.value);
                        }}/>
                    </div>
                    <div className="phone">
                    <div className='addItem'>
                        <NativeSelect className='prefixMenu' onChange={e => {
                            data.set('prefix', e.target.value);
                        }}>
                            <option value="">Prefix</option>
                            <option value="+963">+963</option>
                            <option value="+20">+20</option>
                            <option value="+961">+961</option>
                        </NativeSelect>
                    </div>
                    <div className='addItem'>
                        <label>Phone Number</label>
                        <input type="number" className='addInput' onChange={e => {
                            data.set('num', e.target.value);
                            
                        }}/>
                    </div>
                    </div>
                </form>
                <div className="buttonContainer">
                <div className="addButtonContainer">
                    <span className="confirmAdd">Confirm Add ?</span>
                    <button type='submit' className='addButton' onClick={handleAdd}>
                        Add
                    </button>
                    
                </div>
                <button className='cancelButton' onClick={() => {
                    navigate(-1, {replace: true});
                }}>
                        Cancel
                    </button>
                </div>
                
                
            </div>
        </div>
    </div>
  )
}
