import React from 'react'
// import friends from "./Friends.js"; 

const FriendsCard = (props) => {
    console.log(props)
    return (
        <div>
           <p> Name: { props.people.name } </p> 
            <p> Age: { props.people.age } </p>
            <p> Email: { props.people.email } </p> 
        </div>
    )
};

export default FriendsCard; 
