import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid/DataGrid';
import { Add, Done } from '@mui/icons-material';
import './Alerts.css'
import { GridToolbarContainer } from '@mui/x-data-grid';
import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Alerts() {
    const [alert, setAlert] = useState([]);

    useEffect(
        () => {
            axios.get('http://localhost/panelApi/alerts/')
            .then(res => {
                setAlert(res.data)
            })
        }
    , [])

    


  return (
    <div className='alerts'>
        <h1>Alert List</h1>
        <DataGrid className='alertList'
        rows={alert}
        columns={[
            {field: 'id', headerName:'ID', width: 90},
            {field: 'studentID', headerName:'student ID', width: 90, sortable: false},
            {field: 'studentName', headerName:'student Name', width: 200, sortable: false},
            {field: 'conductor', headerName:'Conductor', width: 200, sortable: false},
            {field: 'issuedTime', headerName:'Issued Time', width: 200, sortable: false},
            {field: 'status', headerName:'Status', width: 200, sortable: false, renderCell: (params) => {
                return(
                <>
                {params.value == 0 ? 'Not Approved' : 'Approved'}
                </>
                )
            }},
            {field: 'action', headerName:'Action', width: 200, sortable: false, renderCell: (params) => {
                return(
                    <>
                    {params.row.status == 0 ?
                        <button className='alertApprove' onClick={() => {
                        var data = new FormData();
                        data.append('status', 1);
                        data.append('ID', params.row.id);
                        axios.post('http://localhost/panelApi/alerts/', data);
                        window.location.reload();
                        
                        
                    }}> Approve </button>
                :
                <></>
                }
                    </>
                )
            }},
        ]}

        rowsPerPageOptions={[10]}
        pageSize={10}
        disableSelectionOnClick
        
        
        />
    </div>
  )
}
