import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid/DataGrid'
import { GridToolbar, GridToolbarContainer } from '@mui/x-data-grid/components';
import axios from 'axios';
import './complains.css'
import { Button, Stack } from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
export default function Complains() {

  const [complains, setComplains] = useState([]);

  const navigate = useNavigate();

  useEffect(() =>{
    axios.get('http://localhost/panelApi/complains/')
    .then(res => {
      setComplains(res?.data);
    })
  }, [])


  function handleDelete(sID)
  {
    axios.delete('http://localhost/panelApi/complains/', {
      data: sID
    });
    window.location.reload();
  }
  return (
    <div className='complain'>
      <h1>Complains</h1>
        <DataGrid className='complainList'
        rows={complains}
        columns={[
          { field: 'id', headrName: 'ID', flex: 0.6, hideable: false },
          { field: 'stdID', headerName: 'Student ID', flex:0.8, sortable: false, hideable: true },
          { field: 'title', headerName: 'Title', flex: 1, sortable: false },
          { field: 'desc', headerName: 'Description', flex: 2, sortable: false, hideable: true },
          { field: 'type', headerName: 'Type', flex: 1, sortable: false, hideable: false },
          { field: 'stdName', headerName: 'Student Name', flex: 1, sortable: false, hideable: true },
          { field: 'time', headerName: "Time", flex: 1.0, sortable: true, hideable: false },
          { field: 'action', headerName: "Action", flex: 1.5, sortable: false, hideable: false, filterable: false, renderCell: (params) =>{
            return(
              <>
              <button className='compDelete' onClick={() => {handleDelete(params.row.id)}}> <Delete /> </button>
              </>
            )
          } }
        ]}
       
        onRowClick={params => {
          navigate('/complains/' + params.row.id);
        }}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick

        components={
          {
            Toolbar: () => {
              return(
                <GridToolbarContainer className='toolBarContainer'>
                    <Stack direction="row">
                      <GridToolbar />
                    <Link to="/complains/add" reloadDocument={true} style={{textDecoration: 'none'}} >
                    <Button startIcon={<Add />}>
                      New Complain
                    </Button>
                    </Link>
                    </Stack>
                    </GridToolbarContainer>
              )
            }
          }
        }
        ></DataGrid>
    </div>
  )
}
