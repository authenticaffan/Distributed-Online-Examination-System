import React from "react";
import { withStyles, ThemeProvider } from "@material-ui/core/styles";
import { connect } from "react-redux";
import QuestionSearchBox from "../../atoms/SearchBox/QuestionSearchBox";
import { searchQuestion } from "../../../redux/actions/questionAction";
import QuestionTable from "../../molecues/QuestionsTable/QuestionTable";
import ViewnUpdateQuestion from "../ViewnUpdateQuestion/ViewnUpdateQuestion";
import { Button } from "@material-ui/core";
import { goBacktoSearch } from "../../../redux/actions/questionAction";
import theme from '../theme'; // Import the custom theme

const useStyles = (theme) => ({
  questionDetails: {
    margin: '20px',
    display: 'inline-block',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3D8D7A', // Change the button background color
    color: '#FFFFFF', // Change the button text color
    '&:hover': {
      backgroundColor: '#2C6B5A', // Change the button background color on hover
    },
  },
});

class QuestionDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  backHandler() {
    this.props.goBacktoSearch();
  }

  render() {
    if (this.props.questionDetails.searched === true) {
      return (
        <ThemeProvider theme={theme}>
          <div className={this.props.classes.questionDetails}>
            <QuestionSearchBox searchCallback={this.props.searchQuestion} />
            <QuestionTable />
          </div>
        </ThemeProvider>
      )
    } else if (this.props.questionDetails.question._id !== undefined) {
      return (
        <ThemeProvider theme={theme}>
          <div className={this.props.classes.questionDetails}>
            <QuestionSearchBox searchCallback={this.props.searchQuestion} className={this.props.classes.questionDetails} />
            <br />
            <ViewnUpdateQuestion className={this.props.classes.questionDetails} />
            <Button onClick={this.props.goBacktoSearch} className={this.props.classes.button}>Back</Button>
          </div>
        </ThemeProvider>
      )
    } else {
      return (
        <ThemeProvider theme={theme}>
          <div className={this.props.classes.questionDetails}>
            <QuestionSearchBox searchCallback={this.props.searchQuestion} />
          </div>
        </ThemeProvider>
      )
    }
  }
}

const mapStatetoProps = state => ({
  user: state.user,
  questionDetails: state.questionDetails
})

export default withStyles(useStyles)(connect(mapStatetoProps, {
  searchQuestion,
  goBacktoSearch
})(QuestionDetails));