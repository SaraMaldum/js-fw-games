import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { GAMES_URL } from '../../constants/api';
import Heading from '../layout/heading/Heading';
import Platforms from './platform/Platform';
import Genres from './genres/Genres';
import StyledSpinner from './spinner/Spinner';
import styled from 'styled-components';
import Trailers from './trailers/Trailers';
import { HiLink } from 'react-icons/hi';
import StyledLink from './styledLinks/StyledLink';
import SimilarGames from "./similarGames/SimilarGames";

//Styled components
const StyledRow = styled(Row)`
    margin-Bottom: 20px;
`

const StyledImage = styled(Image)`
    max-width: 90%;
    margin-bottom: 20px;
    border-radius: 50px;
    filter: drop-shadow(5px 5px 5px gray);
`

function GameDetail() {
    const [gamesDetail, setGamesDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    let { id } = useParams();

    const url = GAMES_URL + '/' + id;

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setGamesDetail(json))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    });

    if (loading) {
        return <StyledSpinner animation="border" size="md" />;
    }

    return (
        <>
            <Heading title="Game details" />
            <StyledRow>
                <Col md={12}>
                    <h2>{gamesDetail.name}</h2>
                    <StyledImage className="rounded mx-auto d-block" src={gamesDetail.background_image} />
                </Col>

                <Col md={12}>
                    <p>{gamesDetail.description_raw}</p>
                </Col>

                <Col md={12}>
                    <h3>Did you like this game? Check out these suggestions: </h3>
                    <SimilarGames />
                </Col>

                <Col md={4}>
                    <h3>Platforms:</h3>
                    <Platforms platforms={gamesDetail.platforms} />
                </Col>

                <Col md={4}>
                    <h3>Genres:</h3>
                    <Genres genres={gamesDetail.genres} />
                </Col>

                <Col md={4}>
                    <h3>Game link:</h3>
                    <StyledLink href={gamesDetail.website}><HiLink /> {gamesDetail.website}</StyledLink>
                </Col>

                <Col md={8}>
                    <h3>Game trailers: </h3>
                    <Trailers />
                </Col>

            </StyledRow>
        </>
    );

}
export default GameDetail;