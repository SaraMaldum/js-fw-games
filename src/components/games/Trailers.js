import React, { useEffect, useState } from "react";
import { GAMES_URL } from "../../constants/api";
import { useParams } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Trailers() {
    const [displayTrailer, setDisplayTrailer] = useState([]);

    let { id } = useParams();
    const trailerUrl = GAMES_URL + '/' + id + '/movies';

    useEffect(() => {
        fetch(trailerUrl)
            .then(response => response.json())
            .then(json => setDisplayTrailer(json))
            .catch(error => console.log(error))
    });

    console.log(setDisplayTrailer);
    return (
        <Row md={12}>
            {displayTrailer.map(idTrailer => {
                const { results } = idTrailer;
                return (
                    <Col key={results.preview}>
                        {results.preview}
                    </Col>
                )
            })}\
        </Row>
    )

}

export default Trailers;