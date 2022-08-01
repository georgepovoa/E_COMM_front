import React from "react";
import {
    ContainerHeader,
    LogoHeader,
    MenuA,
    CarrinhoNumber,
    CarrinhoDiv
} from '../../StyledCompenents/StyleIndex'


export default class Header extends React.Component {

    render() {
        return (<>
            <ContainerHeader theme={this.props.theme} >
                <LogoHeader theme={this.props.theme}>LogoHeader</LogoHeader>
                <MenuA theme={this.props.theme} href="#home">Home</MenuA>
                <MenuA theme={this.props.theme} href="#about">About</MenuA>
                <MenuA theme={this.props.theme} href="#contact">Contact</MenuA>
                <CarrinhoDiv>
                    <MenuA theme={this.props.theme} href="/carrinho">CARRINHO </MenuA>
                    <CarrinhoNumber theme={this.props.theme} sem_padding>{this.props.carrinho.produtos.length}</CarrinhoNumber>
                </CarrinhoDiv>

            </ContainerHeader>
        </>)
    }
}