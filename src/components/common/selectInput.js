import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({ name, label, onChange, defaultOption, value, error, options }) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <div className="field">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="form-control"
      >
        <option value="">{defaultOption}</option>
        {
          options.map(option => {
            return (
              <option key={option.id} value={option.id}>{option.name}</option>
            );
          })
        }
      </select>
      <div className="input">{error}</div>
    </div>
  </div>
)

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  defaultOption: PropTypes.string,
  value: PropTypes.number,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
}

// onChange: PropTypes.func.isRequired,

export default SelectInput;