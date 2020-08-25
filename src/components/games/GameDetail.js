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

//Styled components
const StyledImage = styled(Image)`
    width: 100%;
    margin-bottom: 20px;
    border-radius: 50px;
    filter: drop-shadow(5px 5px 5px gray);
`

const StyledWebLink = styled.a`
    color: ${({ theme }) => theme.colors.orange};

    &:hover {
        color: ${({ theme }) => theme.colors.orange};
        font-weight: bold;
        text-decoration: none;
    }
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
            <Row>
                <Col md={12}>
                    <h2>{gamesDetail.name}</h2>
                    <StyledImage src={gamesDetail.background_image} />
                </Col>

                <Col md={12}>
                    <p>{gamesDetail.description_raw}</p>
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
                    <StyledWebLink href={gamesDetail.website} >{gamesDetail.website}</StyledWebLink>
                </Col>
            </Row>
        </>
    );

}
export default GameDetail;