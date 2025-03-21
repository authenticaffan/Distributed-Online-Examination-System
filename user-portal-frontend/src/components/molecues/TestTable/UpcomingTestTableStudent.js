import React from "react";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { TableBody, TableCell, TableRow, Table, TableHead, TableContainer, Paper, Button } from "@material-ui/core";
import { getDatePretty, getTimePretty } from "../../../helper/common";
import { getTestById } from "../../../redux/actions/studentTestAction";

const useStyles = (theme)=> ({
  tableBorder:{
    background:'#e7e7e7',
    padding:'15px'
  },
  tableHeader:{
    background:'#3D8D7A',
    color:'white'
  }
})

class UpcomingTestTableStudent extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  onTestClick(event,id) {
    this.props.getTestById({testid:id});
  }

  onTestRegister(event,id) {
    this.props.studentTestRegister({testid:id});
  }


  render() {
    return(<div className={this.props.classes.tableBorder}>
      <TableContainer component={Paper} className={this.props.classes.table}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead >
            <TableRow>
              <TableCell align="left" className={this.props.classes.tableHeader}>Test</TableCell>
              <TableCell className={this.props.classes.tableHeader}>Status</TableCell>
              <TableCell className={this.props.classes.tableHeader}>total<br/>marks</TableCell>
              <TableCell className={this.props.classes.tableHeader}>Duration<br/>(hours)</TableCell>
              <TableCell className={this.props.classes.tableHeader}>Test start</TableCell>
              <TableCell className={this.props.classes.tableHeader}>Test end</TableCell>
              <TableCell className={this.props.classes.tableHeader}>Result</TableCell>
              <TableCell className={this.props.classes.tableHeader}>View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.testlist.map((test,index)=>(
              <TableRow key={index}>
                <TableCell>{test.title}</TableCell>
                <TableCell style={{textTransform:'lowercase'}}>{test.status}</TableCell>
                <TableCell>{test.maxmarks}</TableCell>
                <TableCell>{getTimePretty(test.duration)}</TableCell>
                <TableCell>{getDatePretty(test.startTime)}</TableCell>
                <TableCell>{getDatePretty(test.endTime)}</TableCell>
                <TableCell>{getDatePretty(test.resultTime)}</TableCell>
                <TableCell><Button onClick={(event)=>(this.onTestClick(event,test._id))}>View</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
      </TableContainer>
    </div>)
  }
}

const mapStatetoProps = state => ({
  testlist : state.testDetails.list
})

export default withStyles(useStyles)(connect(mapStatetoProps,{
  getTestById
})(UpcomingTestTableStudent));
