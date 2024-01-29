import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            count : 1,
            count1 : 10
        }
    }

    render(){
        return (
            <div className="user-card">
                <h2>Count : {this.state.count}</h2>
                <h2>Count : {this.state.count1}</h2>
                <button onClick={() => {
                    this.setState({
                        count : this.state.count + 1,
                        count1 : this.state.count1 + 10
                    })
                }}>Count Incrementer</button>
                <h2>Name : {this.props.name}</h2>
                <h3>Location : {this.props.location}</h3>
            </div>
          )
    };
}

export default UserClass