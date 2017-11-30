import * as React from "react";

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name : props.profileData.name
        }

    }
    render() {
        return (<div>
            <h3>My profile name is {this.state.name}</h3>
            <h1>my hobby list are</h1>
          <ul>
            <List data = {this.props.profileData.hobbyList} />
          </ul>
        </div>)


    }
}

class List extends React.Component{
    render()
    {

        return(
        this.props.data.map((list,i)=>
            <li>{i} - {list}</li>
        )
        );
    }
}

export default Profile = Profile