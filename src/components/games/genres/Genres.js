import React from 'react';
import Row from 'react-bootstrap/Row';
import { GiPistolGun } from 'react-icons/gi';

function Genres( { genres } ) {
    return (
        <Row>
            <ul>
                {genres.map( genresName => {
                    const { name } = genresName;
                    return (
                        <li key={genresName.name}>
                            {name} <GiPistolGun />
                        </li>
                    )
                } )}
            </ul>
        </Row >
    )
}
export default Genres;