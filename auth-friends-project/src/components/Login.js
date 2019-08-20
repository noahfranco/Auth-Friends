import React from "react"; 
import axios from "axios"; 
import { Formik } from "formik"; 

class Login extends React.Component {
    state = {
        credentials: {
            username: "", 
            password: ""
        }
    }

    handleChange = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value 
            }
        });
    };
     loginCall = event => {
        event.preventDefault(); 
        axios
            .post("http://localhost:5000/api/login", this.state.credentials) 
            .then(res => {
                console.log(res)
                localStorage.setItem("token", res.data.payload)
            })
            .catch(error => {
                console.log("ERROR", error)
            })
     }
     
     render() {
         return(
             <p> placeholder </p> 
         )
     }
}; 

export default Login; 