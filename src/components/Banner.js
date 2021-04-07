import React from 'react';

import Form from '../containers/Form';

import styled from 'styled-components';

import Container from '../styled-components/Container';

import Logo from '../styled-components/Logo';

import BackgroundIMG from '../assets/images/bg-form.jpg';

import Arrow from '../assets/images/arrow.png';

const BannerContainer = styled(Container)`

    background-image: url(${BackgroundIMG});
    background-size: 100% 100%;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-end;

    @media screen and (max-width: 768px){
        justify-content: center;
    }

`

const ArrowContainer = styled(Logo)`

    display: flex;
    justify-content: center;
    position: relative;
    top: -24px;

    & > img{
        width: 48px;
        height: 48px;
    }

    @media screen and (max-width: 768px){

        top: -20px;

        & > img{
            width: 40px;
            height: 40px
        }

    }

    @media screen and (max-width: 576px){

        top: -16px;

        & > img{
            width: 32px;
            height: 32px;
        }

    }

`


const Banner = () => {
    return (
        <React.Fragment>

            <BannerContainer>

                <Form/>

            </BannerContainer>

            <ArrowContainer>
                <img src={Arrow} alt="Arrow"/>
            </ArrowContainer>

        </React.Fragment>
    )
}

export default Banner;
