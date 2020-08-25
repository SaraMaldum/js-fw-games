import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledH1 = styled.h1`
    margin: 30px;
    text-align: center;
    color: #DB896B;
`

function Heading({ title }) {
    return <StyledH1>{title}</StyledH1>;
}

Heading.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Heading; 