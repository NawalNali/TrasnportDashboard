import './Students.css';
import axios from 'axios';
import {Edit, Delete, Add} from '@mui/icons-material'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import { DataGrid, GridToolbar, GridToolbarContainer  } from '@mui/x-data-grid';
import React from 'react'

class Student extends React.Component{
    constructor() {
        super();

        function handleDelete(sID)
        {
            axios.delete('http://localhost/panelApi/students/', 
      {data: sID,
      
      
    }, )

      window.location.reload();
        }

        this.state = {
            students: [],
            columns : [
              { field: 'id', headerName: 'ID', flex: 0.5, },
              { field: 'name', headerName: 'Name', flex: 2 },
              { field: 'dob', headerName: 'Date of Birth', flex: 2, sortable: false },
              { field: 'address', headerName: 'Address', flex: 3, sortable: false},
              { field: 'phoneNo', headerName: 'Phone Number', flex: 2, sortable: false },
              { field: 'notes', headerName: 'Notes', flex: 3, editable: true, sortable: false },
              { field: 'assign', headerName: 'Assigned On', flex: 2 },
              { field: 'action', headerName: 'Action', flex: 2, sortable: false, renderCell: (params) => {
                return (
                  <>
      
                  <Link to={"/students/" + params.row.id } reloadDocument={true} >
                  <button className='stdEdit'><Edit /></button>
                  </Link>
                  <button className='stdDelete' onClick={() => handleDelete(params.row.id)}><Delete/></button>
                  </>
                )
              } },
      
              
              
              
            ],
            
          };
    }
}