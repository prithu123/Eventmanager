import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';



export default class SearchRegion extends Component {
  state = {
    regionname: ''
  };  
  
  onChange = e => this.setState({ [e.target.name]: e.target.value });



    render() {
      const {regionname}=this.state
        return (
            <div>
                <form class="form-inline active-cyan-4">
                <input 
                class="form-control form-control-sm mr-3 w-75" 
                type="text" 
                placeholder="Enter your city name" 
                aria-label="Search"    
                onChange={this.onChange}
                name="regionname"/>
                <Link to={`/events/${regionname}`}>
            <i
              className="fas fa-search"
           

              style={{
                cursor: 'pointer',
                float: 'right',
                color: 'black',
                marginRight: '1rem'
              }}
            />
          </Link>
                </form>
            </div>
        )
    }
}
