import React, { Component } from "react"

import Slider from "./Slider"
import Header from "./header"
import Mini_slider from "./Mini_slider"
import Info from "./Info"
import Banner from "./Banner"

import Contact from "./Contact"
import About from "./About"
import Footer from "./Footer"
import {Lista_de_paletas} from "./pallets"
import ColorHolder from "./PalletHolder"
import Api from "../API/Api"
import { Routes, Route, Link } from "react-router-dom";

const api = new Api();
console.log(Lista_de_paletas[-1])



class Loja extends React.Component {
    constructor() {
        super();
        this.state = { 
            theme: Lista_de_paletas.slice(-1)[0] ,
            user:"teste 1",
            carrinho : {
                "_id": "",
                "user": "",
                "produtos": [
                ],
                "produtos_abertos": [
                 
                ]
              }
        };
    }

    changeTheme =(Theme) =>{
        this.setState({theme:Theme})
        console.log("OK")
    }
    get_carrinho_user = async() =>{
        const response = await api.get_carrinho(this.state.user)
        this.setState({carrinho:response.data})
    }
    
    componentDidMount(){
        this.get_carrinho_user()
    }


    render() {
        return <>
            <Header theme={this.state.theme} carrinho ={this.state.carrinho}></Header>
            <Slider theme={this.state.theme}></Slider>
            <Info theme={this.state.theme}></Info>
            <Banner theme={this.state.theme}></Banner>
            <Mini_slider theme={this.state.theme} user = {this.state.user} carrinho = {this.state.carrinho}></Mini_slider>
            <About theme={this.state.theme}></About>
            <Contact theme={this.state.theme}></Contact>
            <Footer theme={this.state.theme}></Footer>
            <ColorHolder theme={this.state.theme} change_theme = {this.changeTheme}></ColorHolder>

        </>
    }
}
export default Loja