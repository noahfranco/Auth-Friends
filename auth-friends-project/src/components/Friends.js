import React from "react"; 
import { axiosWithAuth } from "axios"

class Friends extends React.Component {
    state = {
        friends: []
    }

componentDidMount() {
    this.getData()
}

getData = () => {
    axiosWithAuth()
    .get("http://localhost:5000/api/friends")
    .the(res => {
        this.setState({friends: res.data})
    })
    .catch(error => {
        console.log("ERROR", error)
    })
}
render() {
    return(
        <div>
        <p> This is my Friends Folder </p>
        {/* <p> {} </p>  */}
        </div> 
    )
}


}

export default Friends; 