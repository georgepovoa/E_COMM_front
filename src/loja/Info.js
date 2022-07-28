import React from "react";
import Vrum from './img/vrum-vrum.png'
import Toca_aqui from './img/toca-aqui.png'
import Promo from './img/desconto.png'
import styled from "styled-components";



const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

const Card = styled.div`
display: flex;
flex-direction: column;
width: 25%;
height: 400px;
align-items: center;
text-align: center;

@media (max-width: 768px) {
    width: 65%;
    margin: auto;
  }

`

const Info_img = styled.img`
width: 25%;
margin: 25% auto;
margin-bottom:5% ;
`

const Info_title = styled.p`

margin: 0;
padding: 0;
font-size: 1.25rem;
text-transform: uppercase;
font-weight: 800;
`

const Info_desc = styled.p`
margin-top: 5%;
padding: 0;
font-size: 1.2rem;

`
export default class Info extends React.Component {

    render() {
        return (
            <Container >
                <Card>
                    <Info_img src={Vrum} />
                    <Info_title>Title</Info_title>
                    <Info_desc>Descrever a caracteristica aqui e coisas relevantes</Info_desc>
                </Card>
                <Card>
                    <Info_img src={Toca_aqui} />
                    <Info_title>Title</Info_title>
                    <Info_desc>Descrever a caracteristica aqui e coisas relevantes</Info_desc>
                </Card>
                <Card>
                    <Info_img src={Promo} />
                    <Info_title>Title</Info_title>
                    <Info_desc>Descrever a caracteristica aqui e coisas relevantes</Info_desc>
                </Card>
            </Container>
        )
    }
}