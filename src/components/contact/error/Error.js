import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledErrorMsg = styled.div`
    color: ${({ theme }) => theme.colors.error};
    font-weight: bold;
`;

function ErrorMsg({ children }) {
    return (
        <StyledErrorMsg>{children}</StyledErrorMsg>
    );
}

ErrorMsg.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ErrorMsg;