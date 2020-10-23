import React, { Component } from 'react';
import Event from './Event';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getEvents} from '../../actions/EventAction'
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Events extends Component {

 componentDidMount () {

   this.props.getEvents();
 }
  notify = ()=>{  
    toast.success('Deletion is successful')  
} 

 render() {
    const { events } = this.props;
    const { regionname } = this.props.match.params;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Event List</span> 
        </h1>
        {
       events
        .filter(event => event.eventregion.toUpperCase() === regionname.toUpperCase() )
        .map (event => (
          
          <Event key={event.evenid} event={event} notify={this.notify}/>
         ))
        }
        <ToastContainer />
      </React.Fragment>
    );
  }
}
Events.propTypes = {
  events : PropTypes.array.isRequired,
  getEvents : PropTypes.func.isRequired
}
const mapStateToprops =(state) => ({
  events: state.event.events
});

//  const mapDispatchToProps = (dispatch) =>({

//   getEvents: getEvents(dispatch)

//  });

export default connect(mapStateToprops,{getEvents}) (Events);
