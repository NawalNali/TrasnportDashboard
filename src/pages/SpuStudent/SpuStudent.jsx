import { DataGrid, GridToolbar, GridToolbarContainer  } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './SpuStudent.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, MenuItem, Select } from '@mui/material';
export default function SpuStudent() {
    const [student, setStudent] = useState([]);
    const [route, setRoute] = useState([]);

    const [popup, setPopup] = useState(false);
    const [open, setOpen] = useState(false);

    const [stdID, setStdID] = useState();
    const [routeID, setRouteID] = useState();
    
      const handleClose = () => {
        setPopup(false);
      };

    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost/panelApi/lernatastudent/')
        .then(res => {
            setStudent(res?.data);
        })

        axios.get("http://localhost/panelApi/route/")
        .then(res => {
            setRoute(res?.data);
        })
    }, []);

    function handleRegister()
    {
        var data = new FormData();
        data.append('id', stdID);
        data.append('routeID', routeID);
        axios.post('http://localhost/panelApi/lernatastudent/', data);

    }

    function handleunRegister()
    {
        var data = new FormData();
        data.append('unregister', true);
        data.append('id', stdID);
        axios.post('http://localhost/panelApi/lernatastudent/', data);

    }


  return (
    <div className='student'>
        <h1>Students</h1>
        <DataGrid className='studentList' 
        rows={student}
        columns={
            [
                { field: 'id', headerName: 'ID', flex: 0.8 },
                { field: 'fName', headerName: 'First Name', flex: 1, sortable: false },
                { field: 'lName', headerName: 'Last Name', flex: 1, sortable: false },
                { field: 'DOB', headerName: 'Date of Birth', flex: 2, sortable: false, filterable: false },
                { field: 'address', headerName: 'Address', flex: 3, sortable: false, filterable: false },
                { field: 'status', headerName: 'Status', flex: 2, sortable: false, filterable: false, renderCell: (params) => {
                    return(
                        params.row.status == 1? "Registered" : "Not Registered"
                    )
                } },
                { field: 'action', headerName: 'Action', flex: 2, sortable: false, filterable: false, renderCell: (params) =>{
                    return(
                        
                        <>
                        
                        {   params.row.status == 0?
                            <button className='stdRegister' onClick={e => {
                                setStdID(params.row.id);
                                setPopup(true);
                                
                                
                            }}>Register</button>
                            :
                            <button className='stdDelete' onClick={() => {
                                setStdID(params.row.id);
                                setOpen(true);
                            }}>Cancel Registeration</button>
                            }

                                
                        </>
                    )
                } }

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
                    <GridToolbar className='toolbar'/>
                    <Button startIcon={<ArrowBackIcon />} className="BackButton"
                    onClick={() => {
                        navigate('/students', {replace: true});
                    }}>
                      Back
                  </Button>
                    </Stack>
                  </GridToolbarContainer>
                )
              }
            }
            
          }

          componentsProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
        
        />
                                    <Dialog open={popup} onClose={handleClose}>
                                    <DialogTitle>Choose Route</DialogTitle>
                                    <DialogContent>
                                    <DialogContentText>
                                        Choose Route for Student
                                    </DialogContentText>
                                    <Select>
                                    {route.map((value) => {
                                        return(
                                        <MenuItem onClick={() => {
                                            setRouteID(value.id)
                                            
                                        }} value={value.id}>{value.routeName}</MenuItem>
                                        )
                                    })}
                                    </Select>
                                    </DialogContent>
                                    <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button onClick={e => {
                                        
                                        
                                        handleRegister();
                                        handleClose();
                                        window.location.reload();
                                    }}>Subscribe</Button>
                                    </DialogActions>
                                </Dialog>

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
