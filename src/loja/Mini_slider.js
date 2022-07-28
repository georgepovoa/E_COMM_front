import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/pagination";
import "./styles_mini_slider.css";
import { Navigation } from "swiper";

import Api from "../API/Api";


const Title = styled.p`
font-size: 1.2rem;
margin: 0;
padding: 0;
font-weight: 700;

`

const Price = styled.p`
font-size: 1rem;
margin: 0;
padding: 0;
font-weight: 400;
margin-bottom: 0px;


`

const Section_title = styled.p`
margin-top:0;
margin-left: 7px;
font-size: 2.5rem;
font-weight: 500;
line-height: 1.2;
`

const Mini_slider_img = styled.img`
display: block !important;
width: 200px !important;
height: 200px !important;
object-fit: cover !important;
margin: 0 !important;
`

const Container = styled.div`
margin: 0;
padding-top: 50px;
height: 30%;
align-items: center;
display: block;
`

const Button_buy =styled.a`
    display: inline-block;
    text-transform:none;
    padding: 5px 25px;
    background-color: ${props => props.theme.primary_shade};
    border: 1px solid ${props => props.theme.primary_shade};
    color: ${props => props.theme.primary_clear};
    margin-top: 0px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    opacity: ${props =>props.opacity?0.5:1};
    cursor:pointer;
`

const api =new Api()




export default class Mini_slider extends React.Component {

  constructor() {
    super();
    this.state = { 
        product_list : [],
        att : true,
        mobile:window.innerWidth>900?true:false
    };
}

handleResize = () => {
  if (window.innerWidth < 900) {
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
    let result = await api.add_to_carrinho(this.props.user,id_product)
    this.setState({att:! this.state.att})
  }

  verifyProductInCart = (id) =>{
    console.log(this.props.carrinho.produtos.length)
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
      <Container theme={this.props.theme}>
        <div className="mini">
          <Section_title theme={this.props.theme}>Section_title</Section_title>
          <Swiper
            slidesPerView={this.state.mobile?5:1}
            spaceBetween={20}
            navigation={true} modules={[Navigation]}
            className="mySwiper"
          >
            {product_list.map((product) => {
              return (
                <SwiperSlide>
                  <Mini_slider_img src={product.image} />
                  <div>
                    <Title theme={this.props.theme}>{product.title}</Title>
                    <Price theme={this.props.theme}>{product.price}R$</Price>
                    {this.verifyProductInCart(product._id) ? 
                    <Button_buy theme={this.props.theme}  opacity>In Cart</Button_buy>
                    :
                    <Button_buy theme={this.props.theme} onClick={() => this.add_to_carrinho(product._id)} >Buy</Button_buy>
                  }
                  
                    

                  </div>
                </SwiperSlide>)
            })}
          </Swiper>
        </div>
      </Container>
    )
  }
}   