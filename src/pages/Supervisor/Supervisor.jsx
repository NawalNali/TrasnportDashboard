import React from 'react'
import './Supervisor.css'
import { DataGrid, GridToolbar, GridToolbarContainer  } from '@mui/x-data-grid';
import axios from 'axios';
import {Edit, Delete, Add} from '@mui/icons-material'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { Link } from "react-router-dom";

class Supervisor extends React.Component {
  
  
  constructor() {
    super();
    
    function handleDelete(sID) {
      axios.delete('http://localhost/panelApi/supervisor/', 
      {data: sID,
      
      
    }, )
      .then(res => {
        console.log(res.data)
      })

      window.location.reload();
    }

   

    
    this.state = {
      supervisor: [],
      columns : [
        { field: 'id', headerName: 'ID', width: 90, },
        { field: 'name', headerName: 'Name', width: 160 },
        { field: 'dob', headerName: 'Date of Birth', width: 90, sortable: false },
        { field: 'address', headerName: 'Address', width: 160, sortable: false},
        { field: 'phoneNo', headerName: 'Phone Number', width: 130, sortable: false },
        { field: 'notes', headerName: 'Notes', width: 260, editable: true, sortable: false },
        { field: 'assign', headerName: 'Assigned On', width: 120 },
        { field: 'action', headerName: 'Action', width: 150, sortable: false, renderCell: (params) => {
          return (
            <>

            <Link to={"/supervisor/" + params.row.id } reloadDocument={true} >
            <button className='supEdit'><Edit /></button>
            </Link>
            <button className='supDelete' onClick={() => handleDelete(params.row.id)}><Delete/></button>
            </>
          )
        } },

        
        
        
      ],
      
    };

    
  }

componentDidMount(){
  
  axios.get('http://localhost/panelApi/supervisor/')
  .then(response => {
    const supervisor = response.data;
    this.setState({ supervisor });
    
  })
  .catch(e => {
    console.log(e)
    
  })
}





render(){
  
  return (
    <div className='supervisor'>
      <h1>Supervisor</h1>
      <DataGrid className='supervisorList' rows={this.state.supervisor}
                columns={this.state.columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                disableSelectionOnClick
                editMode='cell'
                onCellEditCommit={(params, event) => {
                  
                  var data = new FormData();
                  data.append('notesAdd', true);
                  data.append('notes', params.value != null ? params.value : "");
                  data.append('id', params.id);
                  axios.post('http://localhost/panelApi/supervisor/', data)
                  .then(res => {
                    console.log(res);
                  });
                  
                }}
                components={
                  {
                    Toolbar: () =>{
                      return(
                      <GridToolbarContainer className='toolBarContainer'>
                        <Stack direction="row"  >
                        <GridToolbar className='toolbar'/>
                        <Link to="/supervisor/add/" reloadDocument={true} style={{textDecoration: 'none'}} >
                        <Button startIcon={<Add />} className="AddButton">
                            Add Record
                        </Button>
                        </Link>
                        
                      </Stack>
                      </GridToolbarContainer>
                      )
                    }
                  }
                }
                
                />
                
                </div>
  )
}
}

export default Supervisor;
