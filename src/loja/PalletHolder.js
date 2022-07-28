import React from "react";
import styled from "styled-components";
import {Lista_de_paletas} from './pallets'

const Container = styled.div`
position: fixed;
height: 95%;
width: 5%;
background-color: none;
bottom: 0;
right:0 ;
display: ${props => props.display === "true" ? "flex" : "none"};
flex-direction: column;
align-items: center;
z-index: 3;

opacity: 0.8;

`
const ColorDiv = styled.div`
width: 30px;
height: 30px;
border-radius: 50%;
background: linear-gradient(to left, ${props => props.theme.secondary} 50%, ${props => props.theme.primary} 50%);
margin-top: 25px;
`
const Arrow_fdc = styled.button`
background:none;
border: none;
z-index: 999;
`

const Opener = styled.div`
position: fixed;
width: 50px;
height: 25%;
bottom: 33%;
right:0 ;
display: ${props => props.display === "false" ? "flex" : "none"};
flex-direction: column;
align-items: center;
z-index: 3;
writing-mode: vertical-rl;
text-orientation: mixed;
font-size: 18px;
font-weight: 600;
background-color: ${props => props.theme.primary};
`



export default class ColorHolder extends React.Component {
    constructor() {
        super();
        this.state = { display: "true" };
    }

    HandleClose = () => {
        console.log("EOQ")
        this.setState({ display: "false" })

    }

    HandleOpen = () => {
        console.log("FON")
        this.setState({ display: "true" })

    }


    render() {
console.log(this.props.theme)
        return (<>
            <Container display={this.state.display} theme = {this.props.theme}>
            <Arrow_fdc onClick={() => this.HandleClose()}>X</Arrow_fdc>
            
            
                {Lista_de_paletas.map(paleta =>{
                return <ColorDiv theme={paleta} onClick={() => this.props.change_theme(paleta)}></ColorDiv>

                })}
                
                
                {/* <ColorDiv theme={Primeiro_teste} onClick={() => this.props.change_theme(Primeiro_teste)}></ColorDiv>
                <ColorDiv theme={Segundo_teste} onClick={() => this.props.change_theme(Segundo_teste)}></ColorDiv>
                <ColorDiv theme={Terceiro_teste} onClick={() => this.props.change_theme(Terceiro_teste)}></ColorDiv>
                <ColorDiv theme={Quarto_teste} onClick={() => this.props.change_theme(Quarto_teste)}></ColorDiv>
                <ColorDiv theme={Verde_escuro} onClick={() => this.props.change_theme(Verde_escuro)}></ColorDiv>
                <ColorDiv theme={Roxo} onClick={() => this.props.change_theme(Roxo)}></ColorDiv> */}

            </Container>
            <Opener display={this.state.display}  onClick={() => this.HandleOpen()} theme = {this.props.theme}>
                Abrir Paletas de cores
                </Opener>
            

            </>)
    }

}