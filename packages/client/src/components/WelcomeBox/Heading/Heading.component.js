import PropTypes from 'prop-types';
import React from "react";

export const Heading = ({ title }) => {
    return (title)
}

Heading.propTypes = {
    title: PropTypes.string
}

Heading.defaultProps = {
    title: 'Hello and welcome to the KAOSPILOT toolbox !',
};