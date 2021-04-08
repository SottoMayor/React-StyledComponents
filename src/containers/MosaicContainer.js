import React, { Component } from 'react';

import Mosaic from '../components/Mosaic';

import Mosaico1 from '../assets/images/mosaico1.jpg';

import Mosaico2 from '../assets/images/mosaico2.jpg';

import Mosaico3 from '../assets/images/mosaico3.jpg';

import Mosaico4 from '../assets/images/mosaico4.jpg';

export class MosaicContainer extends Component {

    state = {
        MosaicController: [
            {
                reverse: false,
                image: Mosaico1,
                text: 'O sol nasce para todos mas se põe de um jeito exclusivo aqui.'
            },
            {
                reverse: true,
                image: Mosaico2,
                text: 'A chave para a felicidade é a mesma que abre essas portas.'
            },
            {
                reverse: false,
                image: Mosaico3,
                text: 'Vai ser amor a primeira vista. E que vista!'
            },
            {
                reverse: true,
                image: Mosaico4,
                text: 'Mais deslumbrante que o cenário lá fora, só os ambientes aqui dentro.'
            }
        ]
    };

    render() {
        return (
            <React.Fragment>

                {
                    this.state.MosaicController.map( item => {
                        return <Mosaic {...item} key={item.text} />
                    })
                }

            </React.Fragment>
        )
    }
}

export default MosaicContainer;
