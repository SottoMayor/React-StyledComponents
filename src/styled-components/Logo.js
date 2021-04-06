import styled from 'styled-components';

const Logo = styled.figure`

    width: auto;
    height: auto;

    & > img{
        width: 185px;
        height: auto;
    }

    @media screen and (max-width: 768px){

        & > img{
            margin-bottom: 15px;
            width: 150px
        }

    }

    @media screen and (max-width: 576px){

        & > img{
            margin-bottom: 15px;
            width: 135px
        }

    }

`

export default Logo;