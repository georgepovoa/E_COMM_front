import React, { Component } from "react"
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import styled from "styled-components";
import "./styles.css";
import Logo from './img/bola_passaro.svg'
import Logo_black from './img/bola_passaro_black.svg'
import Api from "../API/Api";



const Container = styled.div`
    width: 100%;
    height: 100%;
    background: ${props =>props.theme.primary};
`


const Title = styled.h1`
color: ${props => props.theme.secondary};
font-size: 4rem ;
font-weight: bold;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
margin: 0;
padding: 0;
@media (max-width: 500px) {
    font-size:3rem;
    margin-right: 35px;
  }
`
const Description = styled.p`
color: ${props => props.theme.secondary};
@media (max-width: 500px) {
    display:none;
  }
`

const A_link = styled.a`
    display: inline-block;
    padding: 10px 45px;
    background-color: ${props => props.theme.acent1};
    border: 1px solid ${props => props.theme.acent1};
    color: ${props => props.theme.secondary};
    margin-top: 35px;
    margin-bottom: 45px;
    text-decoration: none;
    @media (max-width: 500px) {
    margin-left:7px;
  }
    `

const Image = styled.img`
@media (max-width: 768px) {
    width: 60%;
  }`


const Text_area = styled.div`
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    margin-left:35px ;
    justify-content: center;

    margin-bottom: 0;
    width: 50%;
    
    
    height: 100%;
    @media (max-width: 768px) {
        width: 100%;
  }

`
const api = new Api();

const check_api =async  () =>{
    let result =await api.check_api()
    console.log(result.data)
    
}



export default class Slider extends React.Component {

    componentDidMount(){
        check_api()
    }
    render() {

        return (
            <Container theme = {this.props.theme}>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <Image src={Logo} fill="#FFF"/>
                        <Text_area className="text-area">
                            <Title theme = {this.props.theme}>Teste de Titulo</Title>
                            <Description theme = {this.props.theme}>There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't
                                look even slightly believable.</Description>
                            <A_link href="#" theme = {this.props.theme}>SEI Lá</A_link>
                        </Text_area>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={Logo_black} />
                        <Text_area className="text-area">
                            <Title theme = {this.props.theme}>Teste de Titulo</Title>
                            <Description theme = {this.props.theme}>There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't
                                look even slightly believable.</Description>
                            <A_link href="#" theme = {this.props.theme}>SEI Lá</A_link>
                        </Text_area>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="https://picsum.photos/800?random=3" />
                        <Text_area className="text-area">
                            <Title theme = {this.props.theme}>Teste de Titulo</Title>
                            <Description theme = {this.props.theme}>There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't
                                look even slightly believable.</Description>
                            <A_link href="#" theme = {this.props.theme}>SEI Lá</A_link>
                        </Text_area>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="https://picsum.photos/800?random=4" />
                        <Text_area className="text-area">
                            <Title theme = {this.props.theme}>Teste de Titulo</Title>
                            <Description theme = {this.props.theme}>There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't
                                look even slightly believable.</Description>
                            <A_link href="#" theme = {this.props.theme}>SEI Lá</A_link>
                        </Text_area>
                    </SwiperSlide>
                </Swiper>

            </Container>)
    }


}

