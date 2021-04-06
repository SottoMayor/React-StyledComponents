import styled from 'styled-components';

const StandardParagraph = styled.p`

    margin-bottom: 10px;
    font-size: 18px;

    @media screen and (max-width: 768px){
        font-size: 16px;
    }

    media screen and (max-width: 576px){
        margin-bottom: 8px;
        font-size: 15px;
    }

`

export default StandardParagraph;