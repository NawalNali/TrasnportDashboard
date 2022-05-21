import './Bus.css'
import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import BCard from '../../components/Card/Card';

export default function Bus() {
    const [spacing, setSpacing] = React.useState(2);
    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
      };
      const jsx = `
<Grid container spacing={${spacing}}>
`;
    return (
        <div className="Bus">
            <Grid sx={{flexGrow: 2}} container >
                <Grid container justifyContent="center" spacing={17}>
          {[0, 1, 2, 3, 4, 5].map((value) => (
            <Grid key={value} item sx={{width: 400}}>
                
              <BCard number={value} />
            </Grid>
          ))}
                </Grid>
                
            </Grid>
        </div>
    )
}

