import React from "react";

import styled from "styled-components";

import Api from "../API/Api";

const api = new Api()



const ContainerCarrinho = styled.div`
color: white;

display: flex;
border-radius: 25px;
width: 80%;
height: 80vh;
background-color: black;
margin: auto;
margin-top:10vh;

`

const Left = styled.div`
display: flex;
background-color: black;
width: 65%;
flex-direction: column;
`

const ProductsArea = styled.div`
width: 100%;
height: 100%;
background-color: black;
display: flex;
flex-direction: column;
opacity: 0.5;
overflow: auto;
`

const Product = styled.div`
width: 100%;
height: 25%;
border-bottom: 1px solid black;
margin-bottom: 15px;
margin-top: 15px;
display: flex;
align-items: center;
justify-content: space-around;



`

const Image = styled.img`
width: 17%;
height: 80%;

`
const Title = styled.p`
margin: 0;
padding: 0;
font-size:2vh;
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
color: white;


`

const LeftTextArea = styled.div`
display:block;
width: 30%;
`


const Right = styled.div`
display: flex;
background-color: gray;
width: 35%;
flex-direction: column;
`
const Select = styled.select`
width: 80%;
margin: auto;
height: 27px;
`

const Divider = styled.div`
display: flex;
flex-direction: column;
justify-content:flex-start;
width: 100%;
height: ${props => props.size}%;
border: 1px solid black;
`
const IntensAndPrice = styled.div`
display: flex;
justify-content: space-around;
margin-top:50px ;
margin-bottom: 25px;
`

export default class Carrinho extends React.Component{
    constructor() {
        super();
        this.state = { 
            user:"teste 1",
            carrinho : {
                "_id": "",
                "user": "",
                "produtos": [
                ],
                "produtos_abertos": [
                 
                ]
              },
            total_value:0
            
        };
    }

    get_carrinho_user = async() =>{
        const response = await api.get_carrinho(this.state.user)
        for(let i = 0 ; i<response.data.produtos.length;i++){
            response.data.produtos_abertos[i].qnt = 1
        }
        this.setState({carrinho:response.data})
        this.handleValueChange()
    }
    
    handleQntIncrement = (id) =>{
        console.log("EOQ")
        let nova_lista = this.state.carrinho
        for(let i =0 ; i<nova_lista.produtos.length; i++){
            if (nova_lista.produtos_abertos[i]._id == id){
                console.log("ACHOU")
                nova_lista.produtos_abertos[i].qnt += 1
            }
        }
        this.setState({carrinho:nova_lista})
        this.handleValueChange()

    }

    handleValueChange = () =>{
        let total_value = 0 
        for(let i =0 ; i<this.state.carrinho.produtos.length; i++){
            // total_qnt +=  this.state.carrinho.produtos_abertos[i].qnt
            total_value += this.state.carrinho.produtos_abertos[i].price *this.state.carrinho.produtos_abertos[i].qnt
        }
        this.setState({total_value:total_value})
    }

    async componentDidMount(){
        this.get_carrinho_user()
        this.handleValueChange()
    }

    render(){
        const carrinho = this.state.carrinho
        
        return(
            
        <>
        <ContainerCarrinho>
            <Left>
                <h1>Shopping Cart</h1>
                <ProductsArea>
                    {carrinho? carrinho.produtos_abertos.map(i=>{
                        return <>
                        <Product>
                        <Image src={i.image}/>
                        <LeftTextArea>
                            <Title>{i.title}</Title>
                            <SubTitle>{i.sub_title}</SubTitle>
                        </LeftTextArea>

                        <QntArea>
                            <ButtonQnt>-</ButtonQnt>
                            <p>{i.qnt}</p>
                            <ButtonQnt onClick={() => this.handleQntIncrement(i._id)}>+</ButtonQnt>
                        </QntArea>

                        <p>R$ {i.price}</p>

                        <ButtonQnt>X</ButtonQnt>
                        </Product>

                        </>
                        
                    }):<></>}
                    
                    
                </ProductsArea>

            </Left>
            <Right>
                <Title>Sumary</Title>
                <Divider size = "80">
                    <IntensAndPrice>
                    <Title>ITEMS 3</Title>
                    <Title> {this.state.total_value}</Title>
                    </IntensAndPrice>
                    <div>
                    <Title>Frete</Title>
                    <Select></Select>
                    </div>
                    <div>
                    <Title>PROMO CODIGO</Title>
                    <input></input>
                    </div>
                </Divider>
                <Title>Total do pedido</Title>

                <button>Checkout</button>
            </Right>




        </ContainerCarrinho>
        </>
        )
    }
}