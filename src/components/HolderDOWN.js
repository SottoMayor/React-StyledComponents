import React from 'react';
import Container from '../styled-components/Container';

import GrayStripe from '../styled-components/GrayStripe';

import StandardParagraph from '../styled-components/StandartParagraph';



const HolderDOWN = () => {
    return (
        <GrayStripe style={{textAlign: 'center'}} >

            <Container>
                <h3>
                    PASSE O FINAL DE ANO NO SEU APARTAMENTO DECORADO E PRONTO PARA MORAR:
                </h3>
            </Container>

            <Container>

                <StandardParagraph>
                    <u>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in 
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker 
                        including versions of Lorem Ipsum.
                    </u>
                </StandardParagraph>

            </Container>

        </GrayStripe>
    )
}

export default HolderDOWN
