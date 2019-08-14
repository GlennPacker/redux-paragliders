import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/textInput';
import SelectInput from '../common/selectInput';

// onSave, 
const GliderForm = ({ glider, manufacturers, saving = false, errors = {}, onSave, onChange }) => (
  <form name="gliderForm" onSubmit={onSave}>
    <h1>{glider.id ? 'Edit' : 'Add'} Glider</h1>
    {
      errors.onSave && (
        <div
          className="alert alert-danger"
          role="alert"
        >
          {errors.onSave}
        </div>
      )
    }
    <TextInput
      name="name"
      label="name"
      placeholder="name"
      value={glider.name}
      error={errors.name}
      onChange={onChange}
    />

    <SelectInput
      name="manufacturerId"
      label="Manufacturer"
      value={glider.manufacturerId}
      defaultOption="Select Manufacturer"
      options={manufacturers}
      onChange={onChange}
    />

    <TextInput
      name="category"
      placeholder="category"
      label="Category"
      value={glider.category}
      error={errors.category}
      onChange={onChange}
    />

    <button type="submit" disabled={saving} className="btn btn-primary" >
      {saving ? "Saving..." : "Save"}
    </button>
    {/* onClick={onSave} */}
  </form>
)

GliderForm.propTypes = {
  glider: PropTypes.object.isRequired,
  manufacturers: PropTypes.array.isRequired,
  errors: PropTypes.object,
  saving: PropTypes.bool,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default GliderForm;