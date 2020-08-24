import React from 'react';
import Row from 'react-bootstrap/Row';
import { GiGamepad } from 'react-icons/gi';

function Platforms( { platforms } ) {
    return (
        <Row>
            <ul >
                {platforms.map( platformName => {
                    const { platform } = platformName;
                    return (
                        <li key={platform.name}>{platform.name} <GiGamepad /></li>
                    )
                } )}
            </ul>
        </Row>
    );
}

export default Platforms;



