import './Students.css';
import axios from 'axios';
import {Edit, Delete, Add} from '@mui/icons-material'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import { DataGrid, GridToolbar, GridToolbarContainer,  GridToolbarQuickFilter } from '@mui/x-data-grid';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Box } from '@mui/system';


export default function Student() {
        const [students, setStudents] = useState([]); 
        const [stdID, setStdID] = useState();

        const [open, setOpen] = useState(false);
/*
        useEffect(() => {
          axios.get('http://localhost/panelApi/students/')
          .then(res => {
            
            setStudents(res?.data);
          })
        }, [])
*/
        function handleunRegister()
        {
            var data = new FormData();
            data.append('unregister', true);
            data.append('id', stdID)
            //axios.post('http://localhost/panelApi/lernatastudent/', data);
            window.location.reload();
        }

        

            return(
              <div className='student'>
                <h1>Registerd Students</h1>
                <DataGrid className='studentList' 
                rows={students}
                columns={
                  [
                    { field: 'id', headerName: 'ID', flex: 0.8, },
                    { field: 'name', headerName: 'Name', flex: 2 },
                    { field: 'address', headerName: 'Address', flex: 3, sortable: false},
                    { field: 'route', headerName: "Route", flex:2 },
                    { field: 'registerd', headerName: 'Registered', flex: 2 },
                    { field: 'action', headerName: 'Action', flex: 2, sortable: false, renderCell: (params) => {
                      return (
                        <>
            
                       
                        <button className='stdDelete' onClick={() => {
                          setStdID(params.row.id);
                          setOpen(true);
                        }}>
                        Cancel Registration
                        </button>
                        </>
                      )
                    } }, 
                  ]
                }
                

                pageSize={10}
                rowsPerPageOptions={[10]}
                disableSelectionOnClick

                components={
                  {
                    Toolbar: () => {
                      return(
                        <GridToolbarContainer className='toolBarContainer'>
                          <Stack direction="row">
                            <Link to="/students/register/" reloadDocument={true} style={{textDecoration: 'none'}}>
                          <Button startIcon={<Add />} className="AddButton">
                            Register New Student
                        </Button>
                        </Link>

                        
                          </Stack>
                        </GridToolbarContainer>
                      )
                    }
                  }
                }
                
                />

<Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
          {"Cancel Bus Service Registeration ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to cancel Bus Service for This Student ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Disagree</Button>
          <Button onClick={() => {
            handleunRegister();
            setOpen(false);
            window.location.reload();
          }} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>

              </div>
            )
            
          }