import React, {Component} from 'react'
import axios from 'axios'
import './EditCon.css'
import { useParams, useNavigate } from 'react-router-dom';
import {  PermIdentity, Grid3x3, CalendarToday, Home, Phone } from '@mui/icons-material';

class EditCon extends Component{
    constructor() {
        super();

        this.state= {
            conductor: {}
        }
    }

    componentDidMount() {
        const {id} = this.props.params;
        axios.get('http://localhost/panelApi/conductor/', {
            params: {
                sid: id
            }
        }).then(res => {
            const conductor = res.data;
            this.setState({conductor})
        })
    }

    render(){
        let tempConductor = this.state.conductor;
        return(
            <div className="editCon">
                <div className="widgets">
                    <div className="widgetForm">
                    <h1>Edit Conductor</h1>
          <form>

            
            <div className="updateItem">
              <label>Name</label>
              <input type="text" placeholder= { this.state.conductor.name }
              onChange = {(e) => {
                tempConductor['name'] = e.target.value;
                if(!!(e.target.value))
                  this.setState({conductor: tempConductor});
              }}
                      className='updateItemInput'
              />
            </div>
            <div className="updateItem">
              <label>Date of Birth</label>
              <input type="date" 
              onChange={(e) => {
                
                
                tempConductor['dob'] = e.target.value;
                this.setState({conductor: tempConductor});
              }}
                      className='updateItemInput'
              />
            </div>
            <div className="updateItem">
              <label>Address</label>
              <input type="text" placeholder= { this.state.conductor.address }
              onChange={(e) => {
                tempConductor['address'] = e.target.value;
                if(!!(e.target.value))
                  this.setState({conductor: tempConductor});
              }}
                      className='updateItemInput'
              />
            </div>
            <div className="updateItem">
              <label>Phone Number</label>
              <input type="tel" placeholder= { this.state.conductor.phoneNo }
              onChange={(e) => {
                tempConductor['phoneNo'] = e.target.value;
                if(!!(e.target.value))
                  this.setState({conductor: tempConductor});
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
              var name = this.state.conductor.name.split(" ");
              var num = this.state.conductor.phoneNo.split(" ");
              var data = new FormData();
              data.set('update', true);
              data.set('id', this.state.conductor.id);
              data.set('fName', name[0]);
              data.set('lName', typeof(name[1]) != 'undefined' ? name[1] : "");
              data.set('dob', this.state.conductor.dob);
              data.set('address', this.state.conductor.address);
              data.set('prefix', num[0]);
              data.set('num', num[1]);

              axios.post('http://localhost/panelApi/conductor/', data).
              then(() => {
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
            <span>{ this.state.conductor.id }</span>
          </div>
          <div className="InfoItem">
            <PermIdentity className='IconInfo' />
            <span>{ this.state.conductor.name }</span>
          </div>
          <div className="InfoItem">
            <CalendarToday className='IconInfo' />
            <span>{ this.state.conductor.dob }</span>
          </div>
          <div className="InfoItem">
            <Home className='IconInfo' />
            <span>{ this.state.conductor.address }</span>
          </div>
          <div className="InfoItem">
            <Phone className='IconInfo' />
            <span> { this.state.conductor.phoneNo } </span>
          </div>
        </div>
        </div>
        </div>
            
        )
    }
}

export default (props) =>(
    <EditCon {...props} params={useParams()} navigate={useNavigate()}
    />
  );