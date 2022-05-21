import './Conductor.css';
import axios from 'axios';
import {Edit, Delete, Add} from '@mui/icons-material'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import { DataGrid, GridToolbar, GridToolbarContainer  } from '@mui/x-data-grid';
import React from 'react'

class Conductor extends React.Component{
    constructor() {
        super();

        function handleDelete(sID)
        {
            axios.delete('http://localhost/panelApi/conductor/', 
      {data: sID,
      
      
    }, )

      window.location.reload();
        }

        this.state = {
            conductor: [],
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
      
                  <Link to={"/conductor/" + params.row.id } reloadDocument={true} >
                  <button className='conEdit'><Edit /></button>
                  </Link>
                  <button className='conDelete' onClick={() => handleDelete(params.row.id)}><Delete/></button>
                  </>
                )
              } },
      
              
              
              
            ],
            
          };
    }

    componentDidMount(){
  
        axios.get('http://localhost/panelApi/conductor/')
        .then(response => {
          const conductor = response.data;
          this.setState({ conductor });
          
        })
        .catch(e => {
          console.log(e)
          
        })
      }

      render(){
  
        return (
          <div className='conductor'>
            <h1>Conductor</h1>
            <DataGrid className='conductorList' rows={this.state.conductor}
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
                        axios.post('http://localhost/panelApi/conductor/', data)
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
                              <Link to="/conductor/add/" reloadDocument={true} style={{textDecoration: 'none'}} >
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

export default Conductor;