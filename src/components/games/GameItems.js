import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function GameItems( { id, name, background_image, rating, released } ) {
    return (
        <Card>
            <Card.Img variant="top" src={background_image} alt="Game cover photo" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Release date: {released}</Card.Text>
                <Card.Text>Game rating: {rating}</Card.Text>
                <Link to={'games/' + id}>
                    <Button variant="secondary" block>
                        View details
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

GameItems.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    background_image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    released: PropTypes.node.isRequired,
};

export default GameItems;
