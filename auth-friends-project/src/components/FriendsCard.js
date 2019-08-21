import React from 'react'
import friends from "./Friends.js"; 

const FriendsCard = (props) => {
    return (
        <div>
           <p> Name: { props.friends.name } </p> 
            <p> Age: { props.friends .age } </p>
            <p> Email: { props.friends.email } </p> 
        </div>
    )
};

export default FriendsCard; 
