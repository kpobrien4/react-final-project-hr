import React, { Component } from 'react'
import { connect } from 'react-redux';
import Col from '../components/Col';
import Row from '../components/Row';

import { addTrack } from '../actions';

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      notes: '',
      show: false
    }
  }

  showModal = e => {
    this.setState({
      show: true
    })
  }

  handleChange = e => {
   const { name, value } = e.target;
    
   this.setState({
    [name]: value
   })
  }
  
  handleSubmit = e => {
    e.preventDefault();

    this.props.addTrack( this.state, this.props.history )
  }
  
  render() {
    return (
        <div>
        <h2>Add a track:</h2>
      <form id="track-form" onSubmit={ this.handleSubmit }>
        <Row>
          <Col s={12} m={4} l={6}>
            <div className="input-field">
              <input type="text" name="title" id="title" value={this.state.title} onChange={this.handleChange} required/>
              <label htmlFor="title">Title</label>
            </div>
          </Col>
        </Row>
        <label htmlFor="notes">Notes</label>
        <div className="input-field">
          <textarea name="notes" id="notes" cols="30" rows="50" value={ this.state.notes } onChange={this.handleChange} required></textarea>
        </div>
        <input type="submit" value="Add Track" className="btn light-blue darken-1 addbutton"  />
      </form>
      </div>
    )
  }
}

export default connect(null, { addTrack })(Form)