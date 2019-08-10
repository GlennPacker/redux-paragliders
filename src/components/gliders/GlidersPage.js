import React from "react";
import { connect } from 'react-redux'
import * as gliderActions from '../../redux/actions/gliderActions'
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'

class GlidersPage extends React.Component {
  state = {
    gliders: [],
    selectedGlider: {
      name: 'iota 2',
      category: 'xc'
    }
  }

  handleChange = (event) => {
    const selectedGlider = {
      ... this.state.selectedGlider,
      name: event.target.value
    }
    this.setState({ selectedGlider });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actions.createGlider(this.state.selectedGlider)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Gliders</h2>
        <h3>Add Glider</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.selectedGlider.name}
        />
        <input type="submit" value="Save" />
        {this.props.gliders.map(glider => (
          <div key={glider.name}>{glider.name}</div>
        ))}
      </form>
    )
  }
}

GlidersPage.propTypes = {
  actions: PropTypes.object.isRequired,
  gliders: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    gliders: state.gliders.gliders
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(gliderActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GlidersPage);
