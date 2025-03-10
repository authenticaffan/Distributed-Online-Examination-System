import React from "react";
import TextField from "@material-ui/core/TextField";
import './loginForm.css';
import Button from "@material-ui/core/Button";
import { withStyles, ThemeProvider } from "@material-ui/core/styles";
import { loginRequestAction } from "../../../redux/actions/loginAction";
import { connect } from "react-redux";
import theme from '../theme'; // Import the custom theme

const useStyles = () => ({
  inputfield: {
    display: 'block',
    margin: '20px',
  },
  loginbtn: {
    margin: '0px 40px',
    backgroundColor: '#3D8D7A',
  },
});

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  emailInputHandler = (event) => {
    this.setState({
      ...this.state,
      email: event.target.value
    });
  }

  passwordInputHandler = (event) => {
    this.setState({
      ...this.state,
      password: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.loginRequestAction(this.state);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <form className="form-class" onSubmit={(event) => (this.handleSubmit(event))}>
          <div className="form-title" color="primary">LOGIN</div>
          <TextField
            variant='outlined'
            className={this.props.classes.inputfield}
            label="Email"
            placeholder='enter email'
            type='email'
            error_text=''
            value={this.state.email}
            onChange={(event) => (this.emailInputHandler(event))}
            required
          />
          <TextField
            variant='outlined'
            label="Password"
            className={this.props.classes.inputfield}
            placeholder='enter password'
            type='password'
            error_text=''
            value={this.state.password}
            onChange={(event) => (this.passwordInputHandler(event))}
            required
          />
          <Button
            variant='contained'
            type='submit'
            className={this.props.classes.loginbtn}
          >
            Login
          </Button>
        </form>
      </ThemeProvider>
    );
  }
}

const mapStatetoProps = state => ({
  state: state.user
});

export default withStyles(useStyles)(connect(mapStatetoProps, {
  loginRequestAction
})(LoginForm));