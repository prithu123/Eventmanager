import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import {addEvent} from '../../actions/EventAction'
import {connect} from 'react-redux'
import uuid from 'uuid'
import PropTypes from 'prop-types'
import {typeToCSS} from '../Util'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


class AddEvent extends Component {
  state = {
    evenid: '',
    eventname: '',
    eventregion: '',
    eventtype: '',
    eventdate:'',
    options : [
      'Sports', 'Movie', 'Art','Cooking','Music','Comedy'
    ],
    eventtype:'',
    errors: {}
  };
  
  onSubmit = (e) => {
    e.preventDefault();

    const {evenid, eventname, eventregion, eventtype,cssname,eventdate,options } = this.state;

    // Check For Errors
    if (eventname === '') {
      this.setState({ errors: { eventname: 'Name is required' } });
      return;
    }

    if (eventregion === '') {
      this.setState({ errors: { eventregion: 'Email is required' } });
      return;
    }

    if (eventtype === '') {
      this.setState({ errors: { eventtype: 'Phone is required' } });
      return;
    }

    const newEvent = {
      eventname,
      eventregion,
      eventtype,
      cssname :typeToCSS(eventtype),
      eventdate
    };

    //// SUBMIT CONTACT ////
    this.props.addEvent(newEvent)
    // Clear State
    this.setState({
      eventname: '',
      eventregion: '',
      eventtype: '',
      eventdate:'',
      errors: {}
    });

    this.props.history.push('/');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  handleChange(e) {
    this.setState({...this.state, eventtype : e.value});
  }
 

  render() {
    const { eventname, eventregion, eventtype, eventdate,errors,options } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Event</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Event Name"
              name="eventname"
              placeholder="Enter Event name"
              value={eventname}
              onChange={this.onChange}
              error={errors.eventname}
            />
            <TextInputGroup
              label="Event Region"
              name="eventregion"
              placeholder="Enter Region"
              value={eventregion}
              onChange={this.onChange}
              error={errors.eventregion}
            />
           
            <Dropdown 
             label="test"
             name="eventtype"
             options={options} 
             onChange={this.handleChange.bind(this)} 
             value={eventtype}
           
            placeholder="Enter Type of a Event" />

              <TextInputGroup
              label="Event Date"
              name="eventdate"
              type="date"
              placeholder="Enter Date"
              value={eventdate}
              onChange={this.onChange}
              error={errors.eventdate}
            />
            <input
              type="submit"
              value="Add Event"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

AddEvent.propTypes = {
  addEvent :PropTypes.func.isRequired
}

export default connect(null,{addEvent}) (AddEvent);
