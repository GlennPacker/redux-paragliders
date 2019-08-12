import React from "react";
import { connect } from 'react-redux'
import * as gliderActions from '../../redux/actions/gliderActions'
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'

class GlidersPage extends React.Component {
  componentDidMount() {
    this.props.actions.loadGliders().catch(error => {
      alert('loading gliders failed' + error);
    });
  }

  render() {
    return (
      <>
        <h2>Gliders</h2>
        {this.props.gliders.map(glider => (
          <div key={glider.name}>{glider.name}</div>
        ))}
      </>
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
