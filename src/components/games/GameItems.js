import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import StyledBtn from '../layout/button/StyledButton';
import styled from 'styled-components';

const StyledCard = styled(Card)`
    filter: drop-shadow(5px 5px 10px #2b2b2b);
    height: 410px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.darkGrey}
`
const StyledImg = styled(Card)`
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 180px;
`

function GameItems({ id, name, background_image, rating, released }) {
    return (
        <StyledCard>
            <StyledImg variant="top" img={background_image} alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Released: {released}</Card.Text>
                <Card.Text>Game rating: {rating}</Card.Text>
                <Link to={'games/' + id}>
                    <StyledBtn variant="secondary" block>
                        View details
                    </StyledBtn>
                </Link>
            </Card.Body>
        </StyledCard>
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
