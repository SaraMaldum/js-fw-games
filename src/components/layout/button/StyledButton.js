import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const StyledBtn = styled(Button)`
    padding: 10px 20px;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    transition: 0.5s;
    background-size: 200% auto;
    color: ${({theme}) => theme.colors.white};
    box-shadow: 0 0 20px #2b2b2b;
    border-radius: 10px;
    background-image: linear-gradient(to right, #3A9E8A 0%, #27423D 51%, #3A9E8A 100%);
    border: none;

    &:hover {
        background-position: right center;
    }
`

export default StyledBtn;