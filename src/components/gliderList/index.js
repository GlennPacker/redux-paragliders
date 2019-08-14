import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const GliderList = ({ gliders }) => (
  <>
    <h2>Gliders</h2>
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Manufacturer</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {gliders.map(glider => (
          <tr key={glider.name}>
            <td>
              <Link to={"/glider/" + glider.slug}>
                {glider.name}
              </Link>
              &nbsp;
              <Link to={"/manage/glider/" + glider.slug}>
                Edit
              </Link>
            </td>
            <td>
              {glider.manufacturer.name}
            </td>
            <td>{glider.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
)

GliderList.propTypes = {
  gliders: PropTypes.array.isRequired,
}

export default GliderList;