import React from 'react';
import './Circles.css';

const Circles = (props) => {
    return ( 

        <div className='Circles'>
       {props.circleNo.map((circle, idx) => 
       <div
           key={circle}
           className={props.selectedCircleIdx === idx ? 'selected' : 'color'}
           onClick={() => props.handleCircleSelection(idx)}
           >{props.selecteCircledIdx === idx ? `${idx+1}` : `${idx+1}`}

           
       </div>
       
       
       
       
       
       )}
     </div>



     






)};

 
export default Circles;