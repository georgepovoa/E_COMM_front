import React from "react";

import Linkedin from '../img/linkedin.png'

import github from '../img/github.png'

import {ContainerFooter,
    LinkFooter,
    IconsFooter} from '../../StyledCompenents/StyleIndex'

export default class Footer extends React.Component {

    render() {

        return (
            <ContainerFooter>
                <p>
                <LinkFooter href="https://www.linkedin.com/in/georgepovoa/" target="_blank"><IconsFooter src={Linkedin}/></LinkFooter>
                <LinkFooter href="https://github.com/georgepovoa" target="_blank"><IconsFooter src={github}/></LinkFooter>
                </p>
            </ContainerFooter>


        )
    }

}