import styled from 'styled-components';

const Footer = styled.footer`
    color: ${({theme}) => theme.colors.blue};
    font-weight: bold;
    background-color: ${({theme}) => theme.colors.darkGrey};
    padding: 10px;
    border-radius: 0;
    display: flex;
    margin-top: auto;
    justify-content: center;
    flex-shrink: 0;
`;

export default Footer;
