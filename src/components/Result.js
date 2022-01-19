import { Button } from '@material-ui/core';
import React from 'react'; 
import './Result.css';

const Result = ({temp,desc,icon,setTemp }) => {
    
    return (
        <div className='result'>
            <div className='result__box'>
                 <h1> Temperature : {temp}  </h1>
                <p> {desc} </p>
                <img src = {icon} alt="logo" />
                <br />
                <Button variant="contained" color="default" 
                onClick= {()=> {
                    setTemp(""); 
                    }}>
                    Back
                </Button>
            </div>
            
        </div>
    )
}

export default Result;
