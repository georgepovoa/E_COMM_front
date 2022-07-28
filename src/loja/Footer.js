import React from "react";
import styled from 'styled-components'

import Linkedin from './img/linkedin.png'

import github from './img/github.png'


const Footer_container = styled.footer`
display: flex;
height: 20vh;
background-color: black;
color: white;
justify-content: center;
align-items: center;

`

const Link = styled.a`
text-decoration: none;
color: white;
`


const Icons = styled.img`
width: 30px;
height: 30px;
margin:15px;
`


export default class Footer extends React.Component {

    render() {

        return (
            <Footer_container>
                <p>
                <Link href="https://www.linkedin.com/in/georgepovoa/" target="_blank"><Icons src={Linkedin}/></Link>
                <Link href="https://github.com/georgepovoa" target="_blank"><Icons src={github}/></Link>
                </p>
            </Footer_container>

        )
    }

}