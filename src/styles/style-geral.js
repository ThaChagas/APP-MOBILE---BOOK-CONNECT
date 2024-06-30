import styled from "styled-components/native";

const Container = styled.View`

    flex: 1;
    background-color: #FAE6D8;
    align-items: center;
    justify-content: center;

`;

const MeuText = styled.Text`
    font-size: ${props => props.fontSize || 18};
    color: ${props => props.cor || '#788896'};
    font-weight: 600
`;


export {
    Container,
    MeuText
}
