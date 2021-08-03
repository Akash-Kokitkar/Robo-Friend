import React from 'react';



const Card = (props) => {
    const {id ,name,email}=props;

    return (
    <div className='bg-light-green dib br3 pa3 grow ma2'>
        <div>
            <img src={`https://robohash.org/${id}?200x200`} alt='photo' />
        </div>
        <h2>{name} </h2>
        <p>{email}</p>
    </div>
    );



}


export default Card;