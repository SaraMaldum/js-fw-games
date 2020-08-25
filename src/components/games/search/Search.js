import React from 'react';
import PropTypes from 'prop-types';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import styled from 'styled-components';

const StyledSearchField = styled(InputGroup)`
    margin-bottom: 20px;
    border: 2px solid #27423D;
    border-radius: 5px;
`

export default function Search( { handleSearch } ) {
    return (
        <>
            <h3>Find your game:</h3>
            <StyledSearchField>
                <FormControl placeholder="Search by name..."
                    onChange={event => handleSearch( event )} />  
            </StyledSearchField>
        </>
    );
}

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired
};