import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {deleteEvents} from '../../actions/EventAction'
import {connect} from 'react-redux'
import {convertToDate} from '../Util'



class Event extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = (eventid ,notify) => {
    this.props.deleteEvents(eventid)
    notify()
  };

  render() {
    const { id, eventname, eventregion, eventtype,cssname,eventdate } = this.props.event;
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {eventname}{' '}
          <i
            onClick={() =>
              this.setState({
                showContactInfo: !this.state.showContactInfo
              })
            }
            className="fas fa-sort-down"
            style={{ cursor: 'pointer' }}
          />
          <i
            className="fas fa-times"
            style={{ cursor: 'pointer', float: 'right', color: 'red' }}
            onClick={this.onDeleteClick.bind(this, id, this.props.notify)}
          />
          <Link to={`contact/edit/${id}`}>
            <i
              className={cssname}
              style={{
                cursor: 'pointer',
                float: 'right',
                color: 'black',
                marginRight: '1rem'
              }}
            />
          </Link>
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item fas fa-location-arrow"> Place: {eventregion}</li>
            <li className="list-group-item fas fa-building"> Event: {eventname}</li>
            <li className="list-group-item fas fa-calendar" > Time: { convertToDate(eventdate) }</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Event.propTypes = {
  event: PropTypes.object.isRequired,
  deleteEvents :PropTypes.func.isRequired,
  notify : PropTypes.func.isRequired
};

export default  connect(null,{deleteEvents}) (Event);
