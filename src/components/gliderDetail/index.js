import React from "react";
import { connect } from 'react-redux';
import { loadGliders } from '../../redux/actions/gliderActions';
import { loadManufacturers } from '../../redux/actions/manufacturerActions';
import PropTypes from 'prop-types';

class GliderDetail extends React.Component {
    componentDidMount() {
        const { gliders, manufacturers, loadGliders, loadManufacturers } = this.props;

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
    }

    render() {
        return (
            <h2>Glider Detail</h2>

        )
    }
}

GliderDetail.propTypes = {
    loadGliders: PropTypes.func.isRequired,
    loadManufacturers: PropTypes.func.isRequired,
    gliders: PropTypes.array.isRequired,
    manufacturers: PropTypes.array.isRequired,
}

function mapStateToProps(state) {
    return {
        gliders: state.gliders.list,
        manufacturers: state.manufacturers.list,
    }
}

const mapDispatchToProps = {
    loadGliders,
    loadManufacturers
}

export default connect(mapStateToProps, mapDispatchToProps)(GliderDetail);
