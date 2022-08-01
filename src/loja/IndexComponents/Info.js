import React from "react";
import Vrum from '../img/vrum-vrum.png'
import Toca_aqui from '../img/toca-aqui.png'
import Promo from '../img/desconto.png'

import {
    ContainerInfo,
    CardInfo,
    InfoImg,
    InfoTitle,
    InfoDesc
} from "../../StyledCompenents/StyleIndex"


export default class Info extends React.Component {

    render() {
        return (
            <ContainerInfo >
                <CardInfo>
                    <InfoImg src={Vrum} />
                    <InfoTitle>Title</InfoTitle>
                    <InfoDesc>Descrever a caracteristica aqui e coisas relevantes</InfoDesc>
                </CardInfo>
                <CardInfo>
                    <InfoImg src={Toca_aqui} />
                    <InfoTitle>Title</InfoTitle>
                    <InfoDesc>Descrever a caracteristica aqui e coisas relevantes</InfoDesc>
                </CardInfo>
                <CardInfo>
                    <InfoImg src={Promo} />
                    <InfoTitle>Title</InfoTitle>
                    <InfoDesc>Descrever a caracteristica aqui e coisas relevantes</InfoDesc>
                </CardInfo>
            </ContainerInfo>
        )
    }
}