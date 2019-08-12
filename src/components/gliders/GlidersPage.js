import React from "react";
import { connect } from 'react-redux';
import * as gliderActions from '../../redux/actions/gliderActions';
import * as manufacturerActions from '../../redux/actions/manufacturerActions';
import GliderList from '../gliderList';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

class GlidersPage extends React.Component {
  componentDidMount() {
    const { gliders, manufacturers, actions } = this.props;

    if (!gliders.length) {
      actions.loadGliders().catch(error => {
        alert('loading gliders failed' + error);
      });
    }

    if (!manufacturers.length) {
      actions.loadManufacturers().catch(error => {
        alert('loading manufacturers failed' + error);
      });
    }
  }

  render() {
    return (
      <GliderList gliders={this.props.gliders} />
    )
  }
}

GlidersPage.propTypes = {
  actions: PropTypes.object.isRequired,
  gliders: PropTypes.array.isRequired,
  manufacturers: PropTypes.array.isRequired,
}

function mapStateToProps(state) {
  return {
    gliders:
      (!state.manufacturers.list || !state.manufacturers.list.length)
        ? []
        : state.gliders.list.map(glider => {
          return {
            ...glider,
            manufacturer: state.manufacturers.list.find(m => m.id === glider.manufacturerId)
          }
        }),
    manufacturers: state.manufacturers.list
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadGliders: bindActionCreators(gliderActions.loadGliders, dispatch),
      loadManufacturers: bindActionCreators(manufacturerActions.loadManufacturers, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GlidersPage);
