import './Card.css'
import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Collapse } from '@mui/material';
import Switch from '@mui/material/Switch';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import { Expand, ExpandMoreOutlined } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  

export default function BCard({bus}) {

    const [stats, setState] = useState(false);

    useEffect(() => {
      setState(bus.available != 0 ? true : false);
    },[])

    const changeSwitch = () => {
      var data = new FormData();
      data.append('switch', true);
      data.append('id', bus.id);
      data.append('available', stats == 1 ? 0 : 1);
      /*axios.post('http://localhost/panelApi/bus/', data)
      .then(() => {
        setState(!stats);
      });*/
    }

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
  return (
    <div>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://freepngimg.com/thumb/bus/6-2-bus-png-file.png"
          onClick={handleExpandClick}
          alt="Bus"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Bus #{bus.id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Number of Seats: {bus.noseats}
        </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
            <Link to={"/bus/" + bus.id} reloadDocument={true} style={{textDecoration: 'none'}}>
            <Button>Edit</Button>
            </Link>
            <Switch checked={bus.available != 0 ? true : false} 
            onChange={() => {
                changeSwitch();
            }}
            
            />
            <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
        </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
          <Typography paragraph>Diver Information</Typography>
          <Typography paragraph>
            Name:{bus.driverName}
          </Typography>
          <Typography paragraph>
            Address:{bus.driverAddress}
          </Typography>
          <Typography paragraph>
            DOB:{bus.driverdob}
          </Typography>
          <Typography paragraph>
            Phone Number:
          </Typography>
          <Typography >
          {bus.driverPhone}
          </Typography>
        </CardContent>
            </Collapse>
            
        
      
    </Card>
    </div>
  )
}
