import React from 'react';

import GrayStripe from '../styled-components/GrayStripe';

import StandardParagraph from '../styled-components/StandartParagraph';

import styled from 'styled-components';

const GrayStripeHolderUP = styled(GrayStripe)`

    margin-top: -55px;
    box-sizing: border-box;
    padding: 45px calc(2% + 7px);
    text-align: center;

    & > h2{
        margin-bottom: 15px
    }

`

const HolderUP = () => {
    return (
        <GrayStripeHolderUP>

            <h2>Viva a vida que você sempre sonhou</h2>

            <StandardParagraph>
                Coberturas e apartamentos de frente para o mar no João Paulo
            </StandardParagraph>

        </GrayStripeHolderUP>
    )
}

export default HolderUP
