import React from 'react';
import PropTypes from 'prop-types';

function ErrorMsg( { children } ) {
    return (
        <div>{children}</div>
    );
}

ErrorMsg.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ErrorMsg;