import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { GAMES_URL } from '../../constants/api';
import Heading from '../layout/heading/Heading';
import Platforms from './platform/Platform';
import Genres from './genres/Genres';
import styled from 'styled-components';

//Styled components
const StyledImage = styled(Image)`
    width: 100%;
    margin-top: 30px;
    margin-bottom: 20px;
    border-radius: 50px;
    filter: drop-shadow(5px 5px 5px gray);
`  
const StyledSpinner = styled(Spinner)`
    position: relative;
    top: 50%;
    left: 50%;
    margin-top: 50px;
    color: #E3683B;
`

const StyledWebLink = styled.a`
    color: #3A9E8A;
    position: relative;
    top: 0;
    left: 7%;
`

function GameDetail() {
    const [gamesDetail, setGamesDetail] = useState( null );
    const [loading, setLoading] = useState( true );

    let { id } = useParams();

    const url = GAMES_URL + '/' + id;

    useEffect( () => {
        fetch( url )
            .then( response => response.json() )
            .then( json => setGamesDetail( json ) )
            .catch( error => console.log( error ) )
            .finally( () => setLoading( false ) );
    } );

    if ( loading ) {
        return <StyledSpinner animation="border" size="md" />;
    }

    return (
        <>
            <Heading title="Game details" />
            <Row>
                <Col md={6}>
                    <StyledImage src={gamesDetail.background_image}/>
                    <StyledWebLink href={gamesDetail.website} >Website Link: {gamesDetail.website}</StyledWebLink>
                </Col>

                <Col>
                    <h2>{gamesDetail.name}</h2>
                    <p>{gamesDetail.description_raw}</p>
                </Col>

                <Col md={6}>
                    <h3 >Platforms:</h3>
                    <Platforms platforms={gamesDetail.platforms} />
                </Col>

                <Col md={6}>
                    <h3>Genres:</h3>
                    <Genres genres={gamesDetail.genres} />
                </Col>
            </Row>
        </>
    );

}
export default GameDetail;