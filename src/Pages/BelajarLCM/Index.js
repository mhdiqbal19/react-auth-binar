import axios from "axios";
import React, {Component} from "react";

class Belajar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: []
        };
    }
    componentDidMount(){
        axios.get(`https://reqres.in/api/users?page=1`)
        .then(response => {
          this.setState ({data: response.data.data});
          console.log(response.data.data);
        })
        .catch((err) => console.log(err))
    }
    render() { 
    
    return (
        <div>
        <h1>Test</h1>
        {
            this.state.data.map((item) => (
                <h1>{item.first_name}</h1>  
            ))
        }
        </div>
    )
    }
}
 
export default Belajar;