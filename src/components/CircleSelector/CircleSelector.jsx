import React from 'react';
import './CircleSelector.css';

const CircleSelector = (props) => {
    return ( 
        <div className='CircleSelector'>
        {props.circleNo.map((circle, idx) => 
            <button
            key={circle}
            className={props}
            
            ></button>
        )}
        
        
        
        
       
        
        </div>
     );
}
 
export default CircleSelector;