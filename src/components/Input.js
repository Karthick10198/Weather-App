import React from 'react';
import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core';
import './Input.css';

const Inputer = ({input,setInput,findWeather}) => {

    const handleChange = (event) => {
        setInput(event.target.value); 
    }

    const handleClick =(event)=> {
        event.preventDefault();
        findWeather();
    }
    
    console.log(input);
 
    return (
        <div className='inputbox'>
            <div className='inputbox__field'>
                <h1>Google Weather App</h1>
                <p>powered By</p>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/150px-Google_%22G%22_Logo.svg.png' 
                alt='logo' />
                <form>
                <Input placeholder='Enter your city name' onChange={handleChange} value={input} /> 
                <br />
                <Button variant="contained" color="primary" type="submit" onClick={handleClick}>
                    Search
                </Button>
                </form>

            </div>
            
        </div> 
    )
}

export default Inputer
