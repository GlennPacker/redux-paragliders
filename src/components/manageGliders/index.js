import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { loadGliders, saveGlider } from '../../redux/actions/gliderActions';
import { loadManufacturers } from '../../redux/actions/manufacturerActions';
import PropTypes from 'prop-types';
import GliderForm from '../gliderForm';
import { newGlider } from '../../../tools/mockData'

const ManageGliders = ({ gliders, manufacturers, loadGliders, loadManufacturers, saveGlider, ...props }) => {
  const [glider, setGlider] = useState({ ...props.glider })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (!gliders.length) {
      loadGliders().catch(error => {
        alert('loading gliders failed' + error);
      });
    }

    if (!manufacturers.length) {
      loadManufacturers().catch(error => {
        alert('loading manufacturers failed' + error);
      });
    }
  }, [gliders, manufacturers])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setGlider(glider => ({
      ...glider,
      [name]: name === 'manufacturerId' ? parseInt(value) : value
    }))
  }

  const onSave = (event) => {
    event.preventDefault();
    saveGlider(glider)
    props.history.push('/gliders')
  }
  return (
    <>
      <h2>Glider Admin</h2>
      <GliderForm
        glider={glider}
        errors={errors}
        manufacturers={manufacturers}
        onChange={handleChange}
        onSave={onSave}
      />
    </>
  )
}

ManageGliders.propTypes = {
  history: PropTypes.object.isRequired,
  loadGliders: PropTypes.func.isRequired,
  loadManufacturers: PropTypes.func.isRequired,
  glider: PropTypes.object.isRequired,
  gliders: PropTypes.array.isRequired,
  manufacturers: PropTypes.array.isRequired,
  saveGlider: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    glider: newGlider,
    gliders: state.gliders.list,
    manufacturers: state.manufacturers.list,
  }
}

const mapDispatchToProps = {
  loadGliders,
  loadManufacturers,
  saveGlider
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageGliders);
