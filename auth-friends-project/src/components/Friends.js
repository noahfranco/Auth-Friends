import React from "react"; 
import { axiosWithAuth } from "../utils/AxiosWithAuth"; 
import FriendsCard from "./FriendsCard.js"; 
// import axios from "axios";

class Friends extends React.Component {
    state = {
        friends: []
    }

componentDidMount() {
    this.getData(); 
}

getData = () => {
    axiosWithAuth()
    .get("http://localhost:5000/api/friends")
    .then(res => {
        console.log("testing axios call", res)
        this.setState({friends: res.data})
    })
    .catch(error => {
        console.log("ERROR", error)
    })
}
render() {
    this.getData()
    // console.log("testing")
    return(
        <div>
        <p> This is my Friends Folder </p>
        { this.state.friends.map(people => {
          return <FriendsCard key={people.id}  people={people} /> 
        })} 
        </div> 
    )
}


}

export default Friends; 