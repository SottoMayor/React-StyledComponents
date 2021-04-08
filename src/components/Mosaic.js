import React from 'react';

import styled from 'styled-components';

import BlueStripe from '../styled-components/BlueStripe';

import StandardParagraph from '../styled-components/StandartParagraph';

const BlueStripeMosaic = styled(BlueStripe)`
    width: 35%;

    @media screen and (max-width: 768px){
        
        padding: 90px;
        box-sizing: border-box;
        width: 100%;
    }

`

const ParagraphMosaic = styled(StandardParagraph)`

    margin-top: 100px;
    color: #464b51;
    font-size: 23px;

    @media screen and (max-width: 768px){
        text-align: center;
        margin-top: 0px;
        font-size: 20px;
    }

    @media screen and (max-width: 576px){
        font-size: 18px;
    }


`

const Mosaic = (props) => {

    const Piece = styled.section`

    display: flex;
    flex-direction: ${props.reverse ? 'row-reverse' : 'row'};
    height: 300px;

    @media screen and (max-width: 768px){
        height: auto;
        flex-direction: column;
    }
    
    `

    const ImgMosaic = styled.div`

    width: 65%;
    height: 300px;
    background-image: url(${props.image});
    background-size: cover;
    background-position: center;

    @media screen and (max-width: 768px){
        width: 100%;
    }

    `


    return (
        <Piece>
            
            <BlueStripeMosaic>
                
                <ParagraphMosaic>
                    {props.text}
                </ParagraphMosaic>

            </BlueStripeMosaic>

            <ImgMosaic/>

        </Piece>
    )
}

export default Mosaic
