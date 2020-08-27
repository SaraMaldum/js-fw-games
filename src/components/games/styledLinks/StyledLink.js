import styled from 'styled-components';

const StyledLink = styled.a`
    color: ${({ theme }) => theme.colors.orange};

    &:hover {
        color: ${({ theme }) => theme.colors.orange};
        font-weight: bold;
        text-decoration: none;
    }
`

export default StyledLink;