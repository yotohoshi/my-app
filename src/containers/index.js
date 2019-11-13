import React  from 'react';
import { Route, Switch, HashRouter} from 'react-router-dom';
import "../../node_modules/react-vis/dist/style.css";
import Header  from './header';
import MyColor from '../components/contentlist/Colors/colors.js';
import MyIconography from '../components/contentlist/Iconography/iconograpy.js';
import MyHome from '../components/contentlist/Home/home.js';
import Error from '../components/contentlist/Error/error.js';
import MyButtons from '../components/contentlist/Components/Buttons/buttons.js';
import MyTables from '../components/contentlist/Components/Tables/tables.js';
import MySpinner from '../components/contentlist/Components/Spinner/spinner.js';
import MyProgress from '../components/contentlist/Components/Progress/progress.js';
import MyMessageBar from '../components/contentlist/Components/MessageBar/messageBar.js';
import MyDialog from '../components/contentlist/Components/Dialog/dialog.js';
import MyNotification from '../components/contentlist/Components/Notification/notification.js';
import MySearchField from '../components/contentlist/Components/SearchField/searchField.js';
import MyLine from '../components/contentlist/Charts/Line/line.js';
import MyCircularGridLine from'../components/contentlist/Charts/CircularGridLine/circularGridLine.js';
import MyVerticalBar from '../components/contentlist/Charts/VerticalBar/verticalBar.js';
import MyArea from '../components/contentlist/Charts/Area/area.js';
import MyPie from '../components/contentlist/Charts/Pie/pie.js';
import MyScatterplot from '../components/contentlist/Charts/Scatterplot/scatterplot.js';
import MyAvatar from '../components/contentlist/Components/Avatar/avatar.js';
import MyMarkdown from '../components/contentlist/Components/Markdown/markdown.js';
import {connect} from 'react-redux';
import AppAction from '../actions/AppAction/appAction.js'

class App extends React.Component
{
  handleNavOpen = () =>{
    this.props.leftMenuOpen();
  };

  render()
  {
    return(
       <HashRouter >
      <div className= 'App' >
         <div>
         <Header SideBarOpen={this.handleNavOpen} listOpenState = {this.props.leftOpen}/>
         </div>

         <div className = {this.props.leftOpen ? "move-right" : "default"}>
             <div className = "content">
             <Switch>
             <Route path = "/" component = {MyHome}  key = "/home" exact/>
             <Route path = "/my-app" component = {MyHome} key = "/my-app" exact/>
             <Route path = "/colors" component = {MyColor} key = "/colors"/>
             <Route path = "/icons" component = {MyIconography} key = "/icons"/>
             <Route path = "/components/button" component = {MyButtons} key = "/components/button"/>
             <Route path = "/components/table" component = {MyTables} key = "/components/table"/>
             <Route path = "/components/spinner" component = {MySpinner} key = "/components/spinner"/>
             <Route path = "/components/progress" component = {MyProgress} key = "/components/progress"/>
             <Route path = "/components/messagebar" component = {MyMessageBar} key = "/components/messagebar"/>
             <Route path = "/components/dialog" component = {MyDialog} key = "/components/dialog"/>
             <Route path = "/components/notification" component = {MyNotification} key = "/components/notification"/>
             <Route path = "/components/avatar" component = {MyAvatar} key = "/components/avatar"/>
             <Route path = "/components/searchfield" component = {MySearchField} key = "/components/searchfield"/>
             <Route path = "/components/markdown" component = {MyMarkdown} key = "/components/markdown"/>
             <Route path = "/charts/line" component = {MyLine} key = "/charts/line"/>
             <Route path = "/charts/circulargridline" component = {MyCircularGridLine} key = "/charts/circulargridline"/>
             <Route path = "/charts/verticalbar" component = {MyVerticalBar} key = "/charts/verticalbar"/>
             <Route path = "/charts/area" component = {MyArea} key = "/charts/area"/>
             <Route path = "/charts/pie" component = {MyPie} key = "/charts/pie"/>
             <Route path = "/charts/scatterplot" component = {MyScatterplot} key = "/charts/scatterplot"/>
             <Route  component = {Error} key = "error"/>
             </Switch>
             </div>
         </div>
      </div>
      </HashRouter>

    );
  }
}
const mapStateToProps = (state) =>{
  return{
    leftOpen: state.appReducer.leftOpen,
    data: state.appReducer.data
  }
}

const mapDispatchtoProps = (dispatch) =>{
  return{
    leftMenuOpen: () => {dispatch(AppAction.LeftMenuOpen())},
  }
}

export default connect(mapStateToProps,mapDispatchtoProps)(App);
