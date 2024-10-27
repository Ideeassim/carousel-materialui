import React from "react";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, NextIcon } from '@mui/material'
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ImagesArray from './image';

function App1(){
    const headings=['good morning','ekaaro','amesiere']
    
    return(<div>
    <Paper className="paperbox">
        <Carousel NextIcon={<SkipNextIcon/>} PrevIcon={<SkipPreviousIcon/>}>
   
        {ImagesArray.map((item,index)=>{
          return  <img src={item.imgURL} style={ {maxWidth:'70%', maxHeight:'40%' }} className='imgbox'/>
             
        })}
            
   
      </Carousel>
    </Paper>    
    </div>)
}

export default App1;