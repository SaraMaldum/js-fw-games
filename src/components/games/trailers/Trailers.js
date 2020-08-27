import React, { useEffect, useState } from "react";
import { GAMES_URL } from "../../../constants/api";
import { useParams } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RiMovieFill } from 'react-icons/ri';
import NoResultMsg from '../resultMsg/NoResultMsg';
import StyledLink from '../styledLinks/StyledLink';

function Trailers() {
    const [displayTrailer, setDisplayTrailer] = useState([]);

    let { id } = useParams();
    const trailerUrl = GAMES_URL + '/' + id + '/movies';

    useEffect(() => {
        fetch(trailerUrl)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setDisplayTrailer(json.results);
            })
            .catch((error) => console.log(error));
    }, [trailerUrl]);

    return (
        <Row md={12}>
            <Col>
                {displayTrailer.length === 0 && <NoResultMsg>Sorry, there are no trailers of this game at this point.</NoResultMsg>}
                {displayTrailer.map((trailer) => {
                    return (
                        <>
                            <Col md={12} key={trailer.id}>
                                <StyledLink href={trailer.data.max}><RiMovieFill /> {trailer.data.max}</StyledLink>
                            </Col>
                        </>
                    )
                })}
            </Col>
        </Row>
    );

}

export default Trailers;