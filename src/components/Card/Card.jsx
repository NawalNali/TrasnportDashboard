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
  

export default function BCard({number}) {

    const [stats, setState] = useState(false)
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
          image="https://www.cnet.com/a/img/resize/88d27b6d70f740c10c7af118794c79a5de900b3d/2019/12/14/1387f7f7-6cbe-4a14-a9a7-e9f4c9741b65/baby-yoda-news-door-cb-1.jpg?auto=webp&width=1092"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Bus #{number}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Number of Seats: 3
        </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
          
            <Button>Edit</Button>
            <Switch checked={stats} 
            onChange={() => {
                setState(!stats)
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
            ID: 
          </Typography>
          <Typography paragraph>
            Name:
          </Typography>
          <Typography paragraph>
            Address:
          </Typography>
          <Typography paragraph>
            DOB:
          </Typography>
          <Typography paragraph>
            Notes:
          </Typography>
        </CardContent>
            </Collapse>
            
        
      
    </Card>
    </div>
  )
}
