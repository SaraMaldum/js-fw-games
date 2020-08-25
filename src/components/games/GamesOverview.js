import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GAMES_URL } from '../../constants/api';
import GameItems from './GameItems';
import Search from './search/Search';
import StyledSpinner from './spinner/Spinner';
import styled from 'styled-components';

const StyledResultMsg = styled.p`
    text-align: center;
    font-weight: bold;
`

function GamesOverview() {
    const [games, setGames] = useState( [] );
    const [filteredGames, setFilteredGames] = useState( [] );
    const [loading, setLoading] = useState( true );

    useEffect( () => {
        fetch( GAMES_URL )
            .then( response => response.json() )
            .then( json => {
                setGames( json.results );
                setFilteredGames( json.results );
            } )
            .catch( error => console.log( error ) )
            .finally( () => setLoading( false ) );
    }, [] );

    const filterGames = function ( e ) {
        const searchValue = e.target.value.toLowerCase();

        const filteredArray = games.filter( function ( specificGame ) {
            const lowerCaseName = specificGame.name.toLowerCase();

            if ( lowerCaseName.startsWith( searchValue ) ) {
                return true;
            } 
            return false;
        } );
        setFilteredGames( filteredArray );
    }

    if ( loading ) {
        return <StyledSpinner animation="border" size="md"/>;
    }

    return (
        <>
            <Search handleSearch={filterGames} />
            {filteredGames.length === 0 && <StyledResultMsg>No results found</StyledResultMsg>}
            <Row>
                {filteredGames.map( game => {
                    const { id, name, background_image, rating, released } = game;
                    return (
                        <Col sm={6} md={4} key={id}>
                            <GameItems id={id}
                                name={name}
                                background_image={background_image}
                                rating={rating}
                                released={released} />
                        </Col>
                    );
                } )}
            </Row>
        </>
    );
}

export default GamesOverview;