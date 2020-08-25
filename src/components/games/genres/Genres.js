import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GiPistolGun } from 'react-icons/gi';
import styled from 'styled-components';

const StyledListItem = styled(GiPistolGun)`
    padding-right: 10px;
    font-size: 30px;
`

function Genres({ genres }) {
    return (
        <Row>
            <Col>
                {genres.map(genresName => {
                    const { name } = genresName;
                    return (
                        <Col key={genresName.name}>
                            <StyledListItem /> {name}
                        </Col>
                    )
                })}
            </Col>
        </Row >
    )
}
export default Genres;