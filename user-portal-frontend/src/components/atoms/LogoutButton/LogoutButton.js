import { Button } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../../redux/actions/loginAction";
import './logoutbtn.css';

class LogoutButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render(){
    return(
    <Button
      variant='contained'
      color='#3D8D7A'
      onClick={()=>(this.props.logoutUser())}
    >
      Logout
    </Button>)
  }
}

const mapStatetoProps = state =>({
  user:state.user
})

export default connect(mapStatetoProps,{
  logoutUser
})(LogoutButton)