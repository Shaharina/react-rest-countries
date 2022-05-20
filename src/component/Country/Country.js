import React from 'react';
import './Country.css';


const Country = (props) => {
    const {area, region, name, flags} = props.country;
    //console.log(props.country);
    


    return (
        <div className='country'>
            <h1>Name : {name.common}</h1>
            <img src={flags.png} alt="" />
            <p>Area: {area}</p>
            <p>Region: {region}</p>
            
        </div>
    );
};



// const Country = (props) => {
//     console.log(props.country.area);
//     const {area, region, population, name}=props.country;
    
//     return (
//         <div className='country'>
//             <h2>Country Name: {name.common} </h2>
//             <p>population: {population}     </p>
//             <p><small>Region: {region}</small> </p>
//             <p><small>Area:  {area}</small></p>
//         </div>
//     );
// };

export default Country;