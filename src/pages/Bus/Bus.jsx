import './Bus.css'
import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import BCard from '../../components/Card/Card';
import axios from 'axios';
import usePagination from '../../Pagination';
import { Box, Button, Pagination, Stack } from '@mui/material';
import { Add, ExpandMore } from '@mui/icons-material';
import { Link } from 'react-router-dom';


export default function Bus() {
    const [spacing, setSpacing] = React.useState(2);
    const [bus, setBus] = useState([]);
    
    const [page, setPage] = useState(1);
   
/*
    useEffect(() => {
      axios.get('http://localhost/panelApi/bus/')
      .then(res => {
        setBus(res?.data);
      });
    });
    */

    //Pageination
    const PER_PAGE = 9

    const count = Math.ceil(bus.length / PER_PAGE);
    const _DATA = usePagination(bus, PER_PAGE);
   
      
    var currentData = _DATA.currentData().map((bus) => {
      return(
        
        <Grid key={bus} item sx={{width: 400}}>
      
      <BCard bus={bus} />
  </Grid>
      );
    })
    const handlePageChange = (e, p) => {
      setPage(p);
    _DATA.jump(p);
 
    
    
    }

    //END Pagination
    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
      };
      const jsx = `
<Grid container spacing={${spacing}}>
`;
    return (
        <Box p="5" className='Bus'>
          <Stack direction="row">
          <Pagination count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handlePageChange}
          
          />
          <Link to="/bus/add/" reloadDocument={true} style={{textDecoration: 'none'}}>
            <Button startIcon={<Add />} className="AddButton">
                            Add New Bus
            </Button>
            </Link>

          </Stack>

<div className="Bus">
            <Grid sx={{flexGrow: 2}} container >
                <Grid container justifyContent="center" spacing={17}>
              {currentData}
                </Grid>
                
            </Grid>
        </div>

        <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handlePageChange}
      />

        </Box>

    )
}

