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
        return <Spinner animation="border" size="md" />;
    }

    return (
        <>
            <Heading title="Game details" />
            <Row>
                <Col md={6}>
                    <Image src={gamesDetail.background_image}/>
                    <a href={gamesDetail.website} >Website Link: {gamesDetail.website}</a>
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