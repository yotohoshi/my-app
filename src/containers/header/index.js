import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';
import DynamicSideBar from '../sidebar/sideBar'
import Collapse from '@material-ui/core/Collapse';
import {connect} from 'react-redux';
import HomeAction from '../../actions/HeaderAction/headerAction';

class Header extends React.Component
{
  handleClick = (event) => {
    this.props.showRightMenu(event);
  };

  handleClose = () => {
    this.props.closeRightMenu();
  };

  loopMenu(content)
  {
    let menu = [];
    for( let i in content)
    {
      menu.push(<a href={content[i].link} key = {content[i].label}target="_blank" rel="noopener noreferrer"><MenuItem key = {content[i].label}>{content[i].label}</MenuItem></a>);
    }
    return(
      <div>
        {menu}
      </div>
    )
  }

  render()
  {
    return (
      <div className = "root">
        <AppBar className="appbar">

          <Toolbar className = "toolbar">
            <div>
            <ListItem button onClick={()=>{this.props.SideBarOpen()}} >
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
            </ListItem>
            </div>

            <Typography variant="h6" className = "grow">
              <span className = "titleColor">Design System</span>
            </Typography>

          </Toolbar>

        </AppBar>


        <div>
        <List>
          <Collapse in={this.props.listOpenState} timeout="auto" unmountOnExit>
            <div className="list">
            <List component="div">
              <DynamicSideBar/>
            </List>
            </div>
          </Collapse>
        </List>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    anchorEl: state.headerReducer.anchorEl,
    rightContent: state.headerReducer.rightContent
  }
}

const mapDispatchtoProps = (dispatch) =>{
  return{
    showRightMenu: (event) => {dispatch(HomeAction.ShowRightMenu(event))},
    closeRightMenu: () => {dispatch(HomeAction.CloseRightMenu())}
  }
}



export default connect(mapStateToProps,mapDispatchtoProps)(Header);
