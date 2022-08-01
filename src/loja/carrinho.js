import React from "react";

import styled from "styled-components";

import Api from "../API/Api";

import Header from "./IndexComponents/header";

const api = new Api()



const OutContainer = styled.div`
background-color: white;
margin: 0;
width: 100vw;
height: 100vh;
padding: 0;
position: absolute;
top:0;
`

const ContainerCarrinho = styled.div`
color: black;
display: flex;

width: 80%;
height: 80vh;
background-color: white;
margin: auto;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;border-radius: 5px 5px 5px 5px;
margin-top: 65px;

`

const Left = styled.div`
display: flex;
background-color: white;
width: 58%;
flex-direction: column;
border-radius: 5px 5px 5px 5px;
margin-right: 8%;
margin-left: 1%;
`

const ProductsArea = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
overflow: auto;
`

const Product = styled.div`
width: 90%;
height: 25%;
border-bottom: 1px solid #d0d0d0;
margin-bottom: 15px;
margin-top: 15px;
display: flex;
align-items: center;
justify-content: space-around;
margin-left: 8px;
padding-bottom: 12px;

`

const Image = styled.img`
width: 17%;
height: 80%;
margin-right: 7px;

`
const Title = styled.p`
margin: 0;
padding: 0;
font-size:0.6rem;
font-weight: 500;
`

const SubTitle = styled.p`
margin: 0;
padding: 0;
font-size:1.7vh;
font-weight: 500;
`

const QntArea = styled.div`
display:flex;
`

const ButtonQnt = styled.button`
background: none;
border: none;
height: auto;
padding: 8px 16px ;
cursor: pointer;
color: black;


`

const LeftTextArea = styled.div`
display:block;
width: 30%;
`


const Right = styled.div`
display: flex;
background-color: #d0d0d0;
width: 38%;
flex-direction: column;
border-radius: 0px 5px 5px 0px;
padding-left: 7px;

`
const Select = styled.select`
width: 80%;
margin: auto;
height: 20px;
background-color:  #d0d0d0;
border:none;
border-bottom:1px solid black;
margin-bottom: 15px;
`

const IntensAndPrice = styled.div`
display: flex;
justify-content: space-between;
margin-top:25px ;
margin-bottom: 25px;
margin-left: 15px;
margin-right: 15px;
`

const Input = styled.input`
width: 80%;
margin: auto;
height: 15px;
background-color: #d0d0d0;
border:none;
border-bottom:1px solid black;
margin-bottom: 15px;
margin-top: 0px;

`

const Checkout = styled.a`
text-decoration: none;
background-color: #0047ab;
font-size: 0.7rem;
width: fit-content;
padding: 5px 9px;
margin-left: 15px;
margin-top: 25px;
cursor: pointer;
`

const Back = styled.a`
text-decoration: none;
background-color: black;
width: fit-content;
padding: 5px 9px;
font-size: 1rem;
text-align: center;
margin-left: 15px;
margin-top: 7px;
position: absolute;
cursor: pointer;
color: white;
z-index: 999;
`

export default class Carrinho extends React.Component {
    constructor() {
        super();
        this.state = {
            user: "teste 1",
            carrinho: {
                "_id": "",
                "user": "",
                "produtos": [
                ],
                "produtos_abertos": [

                ]
            },
            total_value: 0

        };
    }

    get_carrinho_user = async () => {
        const response = await api.get_carrinho(this.state.user)
        
        for (let i = 0; i < response.data.produtos.length; i++) {
            response.data.produtos_abertos[i].qnt = 1
        }
        this.setState({ carrinho: response.data })
        this.handleValueChange()
    }

    handleQntIncrement = (id) => {
        let nova_lista = this.state.carrinho
        for (let i = 0; i < nova_lista.produtos.length; i++) {
            if (nova_lista.produtos_abertos[i]._id === id) {
                nova_lista.produtos_abertos[i].qnt += 1
            }
        }
        this.setState({ carrinho: nova_lista })
        this.handleValueChange()

    }

    handleValueChange = () => {
        let total_value = 0
        
        
        if(this.state.carrinho.produtos.length === 0){
            if (this.state.total_value!= total_value){
                return this.setState({ total_value: total_value })
               }

        }
        else{
            for (let i = 0; i < this.state.carrinho.produtos.length; i++) {
                // total_qnt +=  this.state.carrinho.produtos_abertos[i].qnt
                total_value += this.state.carrinho.produtos_abertos[i].price * this.state.carrinho.produtos_abertos[i].qnt
            }
            if (this.state.total_value!= total_value){
             return this.setState({ total_value: total_value })
            }
        }
        
    }

    handleRemoveFromCart = async(id) => {
        await api.remove_of_carrinho(this.state.user, id)
        await this.get_carrinho_user()

    }

    async componentDidMount() {
        await this.get_carrinho_user()
    }

    componentDidUpdate(carrinho){
        this.handleValueChange()
    }

    render() {
        const carrinho = this.state.carrinho

        return (

            <OutContainer>
                <Back href="/">Voltar</Back>
                <ContainerCarrinho>
                    <Left>
                    <h5>Shopping Cart</h5>

                        <ProductsArea>
                            {carrinho ? carrinho.produtos_abertos.map(i => {
                                return <>
                                    <Product>
                                        <Image src={i.image} />
                                        <LeftTextArea>
                                            <Title>{i.title}</Title>
                                            <SubTitle>{i.sub_title}</SubTitle>
                                        </LeftTextArea>

                                        <QntArea>
                                            <ButtonQnt>-</ButtonQnt>
                                            <p>{i.qnt}</p>
                                            <ButtonQnt onClick={() => this.handleQntIncrement(i._id)}>+</ButtonQnt>
                                        </QntArea>

                                        <SubTitle>R$ {i.price}</SubTitle>

                                        <ButtonQnt onClick={() => this.handleRemoveFromCart(i._id)}>X</ButtonQnt>
                                    </Product>

                                </>

                            }) : <></>}


                        </ProductsArea>

                    </Left>
                    <Right>
                        <Title>Sumary</Title>
                        
                            <IntensAndPrice>
                                <Title>Total Produtos</Title>
                                <Title> {this.state.total_value}R$</Title>
                            </IntensAndPrice>
                            <div>
                                <Title>Frete</Title>
                                <Select></Select>
                            </div>
                            <div>
                                <Title>PROMO CODIGO</Title>
                                <Input></Input>
                            </div>
                    
                        <Title>Total do pedido {this.state.total_value * 1.03} R$</Title>

                        <Checkout>Checkout</Checkout>
                    </Right>
                </ContainerCarrinho>
            </OutContainer>
        )
    }
}