import React from 'react';
import Paper from '@material-ui/core/Paper';

class MyHome extends React.Component
{
  render() {
    return (
      <Paper className = "home" elevation = {20}>
        <div>
        <h1 className = "title">Welcome</h1>
        </div>
        <br/>
        <div className = "text">
          <h1>This is a react-redux project using material ui.</h1>
        </div>
      </Paper>
    )
  }
}
export default MyHome
