import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../styles_mini_slider.css";
import { Navigation } from "swiper";

import {TitleMiniSlider,
  PriceMiniSlider,
  SectionTitleMiniSlider,
  MiniSliderImg,
  ContainerMiniSlider,
  ButtonBuyMiniSlider} from '../../StyledCompenents/StyleIndex'

import Api from "../../API/Api";



const api =new Api()




export default class MiniSlider extends React.Component {

  constructor() {
    super();
    this.state = { 
        product_list : [],
        att : true,
        mobile:window.innerWidth>760?true:false
    };
}

handleResize = () => {
  if (window.innerWidth < 760) {
      this.setState({mobile:false})
  } else {
    this.setState({mobile:true})
  }
}

  get_all_products =async  () =>{
    let result =await api.get_products()
    this.setState({product_list:result.data})
    
  }

  add_to_carrinho = async (id_product) =>{
    await api.add_to_carrinho(this.props.user,id_product)
    this.props.atualizar()
  }

  verifyProductInCart = (id) =>{
    for (let i=0; i<this.props.carrinho.produtos.length;i++){
      
      if(this.props.carrinho.produtos[i] === id){
        return true
      }

    }
    return false

  }

  componentDidMount(){
    this.get_all_products()
    window.addEventListener("resize", this.handleResize)
}
  render() {
    
    const product_list = this.state.product_list
    return (
      <ContainerMiniSlider theme={this.props.theme}>
        <div className="mini">
          <SectionTitleMiniSlider theme={this.props.theme}>SectionTitleMiniSlider</SectionTitleMiniSlider>
          <Swiper
            slidesPerView={this.state.mobile?4:1}
            spaceBetween={20}
            navigation={true} modules={[Navigation]}
            className="mySwiper"
          >
            {product_list.map((product) => {
              return (
                <SwiperSlide key={product._id}>
                  <MiniSliderImg src={product.image} />
                  <div>
                    <TitleMiniSlider theme={this.props.theme}>{product.title}</TitleMiniSlider>
                    <PriceMiniSlider theme={this.props.theme}>{product.price}R$</PriceMiniSlider>
                    {this.verifyProductInCart(product._id) ? 
                    <ButtonBuyMiniSlider theme={this.props.theme}  opacity = {"true"}>In Cart</ButtonBuyMiniSlider>
                    :
                    <ButtonBuyMiniSlider theme={this.props.theme} onClick={() => this.add_to_carrinho(product._id)} >Buy</ButtonBuyMiniSlider>
                  }
                  
                    

                  </div>
                </SwiperSlide>)
            })}
          </Swiper>
        </div>
      </ContainerMiniSlider>
    )
  }
}   