import './Schedule.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid/DataGrid';
import { Button, Stack, Typography } from '@mui/material';
import { GridToolbarContainer } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { Add } from '@mui/icons-material';

export default function Schedule() {
    const [data, setData] = useState([]);
    const columns = [
        {field: 'id', headerName: 'ID', width:90, sortable: false},
        {field: 'routeName', headerName: 'Route', width:120, sortable: false},
        {field: 'goingTimes', headerName: 'Going Times', width:200, sortable: false},
        {field: 'departTimes', headerName: 'Daparture Times', width:200, sortable: false},
        {field: 'stops', headerName: 'Bus Stops', width:200, sortable: false},
        {field: 'notes', headerName: 'Notes', width:200, sortable: false},
        {field: 'action', headerName: 'Actions', width:175, sortable: false},



    ]
    useEffect(() => {
        axios.get("http://localhost/panelApi/route/")
        .then(res => {
            setData(res.data);
        })
    }, []);

    return(
        <div className='Schedule'>
            <h1>Bus Schedule</h1>
            <DataGrid className='scheduleList'
                      rows={data}
                      columns={columns}
                      pageSize={10}
                      rowsPerPageOptions={[10]}
                      disableSelectionOnClick
                      editMode='cell'
                      onCellEditCommit={(params, _) => {
                        var data = new FormData();
                        data.append('notesAdd', true);
                        data.append('notes', params.value != null ? params.value : "");
                        data.append('id', params.id);
                        axios.post("http://localhost/panelApi/route", data);

                      }}
                      
                      components={
                        {
                            Toolbar: () => {
                                return(
                                    <GridToolbarContainer className='toolBarContainer'>
                                        <Stack direction="row">
                                            <Link to='/schedule/add' reloadDocument={true} style={{textDecoration: 'none'}}>
                                                <Button startIcon={<Add />} className="AddButton">
                                                    Add Route
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