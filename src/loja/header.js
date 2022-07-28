import React from "react";
import styled from 'styled-components';

const Container = styled.div`
margin:0px;
position: fixed;
background-color:${props => props.theme.primary_shade};
color : ${props => props.theme.primary_clear};
display:flex;
justify-content: space-between ;
flex-wrap: wrap;
align-items:center;
font-family: 'Roboto', sans-serif;
font-size: 1rem;
font-weight: 400;
line-height: 1.5;
height: 5vh;
align-content: center;
width: 100%;
z-index: 999;
`

const Logo =  styled.span `
font-size: 20px;
font-weight: 700;
color: ${props => props.theme.primary_clear};;
margin-top: 5px;
`
const MenuA = styled.a`
padding: 10px 10px;
color: ${props => props.theme.primary_clear};;
text-align: center;
text-transform: uppercase;
font-size: 0.8rem;
font-weight: 600;
`

const Carrinho_number = styled.div`
width: 25px;
height: 70%;
background-color: ${props => props.theme.primary_clear};
color: ${props => props.theme.primary_shade};
border-radius: 50%;
text-align: center;
align-self: center;
`

const Carrinho_div = styled.div`
display: flex;
`


export default class Header extends React.Component{

    render(){
        console.log(this.props.carrinho)
        return(<>
        <Container theme={this.props.theme}>
            <Logo theme={this.props.theme}>Logo</Logo>
            <MenuA theme={this.props.theme}>Home</MenuA>
            <MenuA theme={this.props.theme}>About</MenuA>
            <MenuA theme={this.props.theme}>Contact</MenuA>
            <Carrinho_div>
            <MenuA theme={this.props.theme} href="/carrinho">CARRINHO </MenuA>
            <Carrinho_number theme={this.props.theme} sem_padding>{this.props.carrinho.produtos.length}</Carrinho_number>
            </Carrinho_div>
            
        </Container>
        </>)
    }
}