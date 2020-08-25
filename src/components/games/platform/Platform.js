import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { GiGamepad } from 'react-icons/gi';
import styled from 'styled-components';

const StyledListItem = styled(GiGamepad)`
    padding-right: 10px;
    font-size: 30px;
`

function Platforms({ platforms }) {
    return (
        <Row>
            <Col>
                {platforms.map(platformName => {
                    const { platform } = platformName;
                    return (
                        <Col key={platform.name}><StyledListItem /> {platform.name} </Col>
                    )
                })}
            </Col>
        </Row>
    );
}

export default Platforms;



