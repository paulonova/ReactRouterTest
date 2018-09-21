import React from 'react';

const PortifolioItems = (props) =>{
    console.log(props); 
    return(
        <div>
            <h1>A thing I´ve done</h1>
            <p>Individual portifolio item page that shows ID: {props.match.params.id}</p>
        </div>
    )    
};


export default PortifolioItems;