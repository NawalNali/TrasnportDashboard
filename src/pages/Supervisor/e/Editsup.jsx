import React, { Component } from 'react'
import axios from 'axios'
import './EditSup.css'
import { useParams, useNavigate } from 'react-router-dom';
import {  PermIdentity, Grid3x3, CalendarToday, Home, Phone } from '@mui/icons-material';

class EditSup extends Component {

  constructor() {
    super();

    this.state = {
      supervisor: {}
    }

    
  }
   
  componentDidMount() {
    const {id} = this.props.params;
    axios.get('http://localhost/panelApi/supervisor/', {
        params: {
          sid: id
        }
      }).then(res => {
        const supervisor = res.data;
        this.setState({supervisor})
        
      });
  }

  

  render(){
    let tempSupevisor = this.state.supervisor;
    return (
      <div className='editSup'> 
      <div className="widgets">
        <div className="widgetForm">
          <h1>Edit Supervisor</h1>
          <form>

            
            <div className="updateItem">
              <label>Name</label>
              <input type="text" placeholder= { this.state.supervisor.name }
              onChange = {(e) => {
                tempSupevisor['name'] = e.target.value;
                if(!!(e.target.value))
                  this.setState({supervisor: tempSupevisor});
              }}
                      className='updateItemInput'
              />
            </div>
            <div className="updateItem">
              <label>Date of Birth</label>
              <input type="date" 
              onChange={(e) => {
                
                
                tempSupevisor['dob'] = e.target.value
                
                this.setState({supervisor: tempSupevisor});
              }}
                      className='updateItemInput'
              />
            </div>
            <div className="updateItem">
              <label>Address</label>
              <input type="text" placeholder= { this.state.supervisor.address }
              onChange={(e) => {
                tempSupevisor['address'] = e.target.value;
                if(!!(e.target.value))
                  this.setState({supervisor: tempSupevisor});
              }}
                      className='updateItemInput'
              />
            </div>
            <div className="updateItem">
              <label>Phone Number</label>
              <input type="tel" placeholder= { this.state.supervisor.phoneNo }
              onChange={(e) => {
                tempSupevisor['phoneNo'] = e.target.value;
                if(!!(e.target.value))
                  this.setState({supervisor: tempSupevisor});
              }}
                      className='updateItemInput'
              />
            </div>
            
              
          </form>
          <div className="buttonContainer">
          <div className="updateItemButton">
              <span className='updateConfirm'>Confirm Update ? </span>
            <button className="updateButton"
            onClick={() => {
              var name = this.state.supervisor.name.split(" ");
              var num = this.state.supervisor.phoneNo.split(" ");
              var data = new FormData();
              data.append('update', true);
              data.append('id', this.state.supervisor.id);
              data.append('fName', name[0]);
              data.append('lName', name[1]);
              data.append('dob', this.state.supervisor.dob);
              data.append('address', this.state.supervisor.address);
              data.append('prefix', num[0]);
              data.append('num', num[1]);

              axios.post('http://localhost/panelApi/supervisor/', data)
              .then(() => {
                this.props.navigate(-1, {replace: true});
              })
              

            }}
            >Update</button>
            </div>
            <button className='cancelButton' onClick={() => {
              this.props.navigate(-1, {replace: true});
            }}>
                        Cancel
                    </button>
            </div>
        </div>
        <div className="widgetInfo">
          <h1>Current Information</h1>
          <div className="InfoItem">
            <Grid3x3 className='IconInfo' />
            <span>{ this.state.supervisor.id }</span>
          </div>
          <div className="InfoItem">
            <PermIdentity className='IconInfo' />
            <span>{ this.state.supervisor.name }</span>
          </div>
          <div className="InfoItem">
            <CalendarToday className='IconInfo' />
            <span>{ this.state.supervisor.dob }</span>
          </div>
          <div className="InfoItem">
            <Home className='IconInfo' />
            <span>{ this.state.supervisor.address }</span>
          </div>
          <div className="InfoItem">
            <Phone className='IconInfo' />
            <span> { this.state.supervisor.phoneNo } </span>
          </div>

          
        </div>
      </div>
        </div>
    )
  }
  
}

export default (props) =>(
  <EditSup {...props} params={useParams()} navigate={useNavigate()}
  />
);