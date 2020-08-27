import styled from 'styled-components';

const StyledResultMsg = styled.p`
    font-weight: bold;
    color: ${({theme}) => theme.colors.error};
`

export default StyledResultMsg;