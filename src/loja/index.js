import React from "react"

import Slider from "./IndexComponents/Slider"
import Header from "./IndexComponents/header"
import MiniSlider from "./IndexComponents/MiniSlider"
import Info from "./IndexComponents/Info"
import Banner from "./IndexComponents/Banner"

import Contact from "./IndexComponents/Contact"
import About from "./IndexComponents/About"
import Footer from "./IndexComponents/Footer"
import {Lista_de_paletas} from "./pallets"
import ColorHolder from "./PalletHolder"
import Api from "../API/Api"

import { Routes, Route, Link } from "react-router-dom";

const api = new Api();



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
    }
    get_carrinho_user = async() =>{
        const response = await api.get_carrinho(this.state.user)
        this.setState({carrinho:response.data})
    }
    
    componentDidMount(){
        this.get_carrinho_user()
    }


    render() {
        console.log(this.state.carrinho)
        return <>
            <Header theme={this.state.theme} carrinho ={this.state.carrinho} ></Header>
            <Slider theme={this.state.theme}></Slider>
            <Info theme={this.state.theme}></Info>
            <Banner theme={this.state.theme}></Banner>
            <MiniSlider theme={this.state.theme} user = {this.state.user} carrinho = {this.state.carrinho} atualizar = {this.get_carrinho_user}></MiniSlider>
            <About theme={this.state.theme}></About>
            <Contact theme={this.state.theme}></Contact>
            <Footer theme={this.state.theme}></Footer>
            <ColorHolder theme={this.state.theme} change_theme = {this.changeTheme}></ColorHolder>
        </>
    }
}
export default Loja