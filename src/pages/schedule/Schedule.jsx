import './Schedule.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid/DataGrid';
import { Button, makeStyles, Stack, Typography, withStyles } from '@mui/material';
import { GridToolbarContainer } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { Add, Delete } from '@mui/icons-material';
import styled from 'styled-components';

export default function Schedule() {
    const [data, setData] = useState([]);

    const handleDelete = (sID) => {
        axios.delete('http://localhost/panelApi/route/', {
            data: sID
        });

        window.location.reload();
    }

    const columns = [
        {field: 'id', headerName: 'ID', flex:0.6, sortable: false, hideable: false},
        {field: 'routeName', headerName: 'Route', flex: 0.8, sortable: false, hideable: false},
        {field: 'goingTimes', headerName: 'Going', maxWidth: 80, sortable: false, hideable: false},
        {field: 'departTimes', headerName: 'Daparture', maxWidth: 80, sortable: false, hideable: false},
        {field: 'stops', headerName: 'Bus Stops', flex: 1, sortable: false, hideable: false},
        {field: 'notes', headerName: 'Notes', flex: 0.8, sortable: false, hideable: false, editable: true},
        {field: 'action', headerName: 'Actions', flex: 0.8, sortable: false, hideable: false, renderCell: (params) => {
            return(
                <>
                <button className='conDelete' onClick={() => handleDelete(params.row.id)}><Delete/></button>
                </>
            )
        }},



    ]
    useEffect(() => {
        axios.get("http://localhost/panelApi/route/")
        .then(res => {
            setData(res.data);
            console.log(res?.data);
        })
    }, []);

    const StyledDataGrid = styled(DataGrid)({
        root: {
          "& .MuiDataGrid-renderingZone": {
            maxHeight: "none !important"
          },
          "& .MuiDataGrid-cell": {
            lineHeight: "unset !important",
            maxHeight: "none !important",
            whiteSpace: "normal"
          },
          "& .MuiDataGrid-row": {
            maxHeight: "none !important"
          }
        }
      });

    return(
        <div className='Schedule'>
            <h1>Bus Schedule</h1>
            <DataGrid className='scheduleList'
                      sx={{
                        "& .MuiDataGrid-renderingZone": {
                            maxHeight: "none !important"
                          },
                          "& .MuiDataGrid-cell": {
                            lineHeight: "unset !important",
                            maxHeight: "none !important",
                            whiteSpace: "normal"
                          },
                          "& .MuiDataGrid-row": {
                            maxHeight: "none !important"
                          }
                      }}
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
                        axios.post("http://localhost/panelApi/route/", data);

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