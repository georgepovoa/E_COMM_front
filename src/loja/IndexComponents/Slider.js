import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "../styles.css";
import Logo from '../img/bola_passaro.svg';
import Logo_black from '../img/bola_passaro_black.svg';
import Api from "../../API/Api";

import {
    ContainerSlider,
    TitleSlider,
    DescriptionSlider,
    ALinkSlider,
    ImageSlider,
    TextAreaSlider
} from '../../StyledCompenents/StyleIndex'


const api = new Api();

const check_api = async () => {
    await api.check_api()

}

export default class Slider extends React.Component {

    componentDidMount() {
        check_api()
    }
    render() {

        return (
            <ContainerSlider theme={this.props.theme} id="home">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <ImageSlider src={Logo} fill="#FFF" />
                        <TextAreaSlider className="text-area">
                            <TitleSlider theme={this.props.theme}>Teste de Titulo</TitleSlider>
                            <DescriptionSlider theme={this.props.theme}>There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't
                                look even slightly believable.</DescriptionSlider>
                            <ALinkSlider href="#" theme={this.props.theme}>SEI Lá</ALinkSlider>
                        </TextAreaSlider>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageSlider src={Logo_black} />
                        <TextAreaSlider className="text-area">
                            <TitleSlider theme={this.props.theme}>Teste de Titulo</TitleSlider>
                            <DescriptionSlider theme={this.props.theme}>There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't
                                look even slightly believable.</DescriptionSlider>
                            <ALinkSlider href="#" theme={this.props.theme}>SEI Lá</ALinkSlider>
                        </TextAreaSlider>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageSlider src="https://picsum.photos/800?random=3" />
                        <TextAreaSlider className="text-area">
                            <TitleSlider theme={this.props.theme}>Teste de Titulo</TitleSlider>
                            <DescriptionSlider theme={this.props.theme}>There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't
                                look even slightly believable.</DescriptionSlider>
                            <ALinkSlider href="#" theme={this.props.theme}>SEI Lá</ALinkSlider>
                        </TextAreaSlider>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageSlider src="https://picsum.photos/800?random=4" />
                        <TextAreaSlider className="text-area">
                            <TitleSlider theme={this.props.theme}>Teste de Titulo</TitleSlider>
                            <DescriptionSlider theme={this.props.theme}>There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't
                                look even slightly believable.</DescriptionSlider>
                            <ALinkSlider href="#" theme={this.props.theme}>SEI Lá</ALinkSlider>
                        </TextAreaSlider>
                    </SwiperSlide>
                </Swiper>

            </ContainerSlider>)
    }


}

