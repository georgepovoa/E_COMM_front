import React from "react";
import styled from "styled-components";



const Container = styled.div`

    display: flex;
    flex-direction: row;
    background-color: #212529;
    width: 100%;
    height: 100vh;
    


`

const Left = styled.div`
    display: flex;
    width: 41%;
    background-color:  ${props => props.theme.acent1};
    @media (max-width: 768px) {
    width: 60%;
  }
    
`

const Right = styled.div`
    display: flex;
    width: 59%;
    background-color: ${props => props.theme.primary_clear};
    @media (max-width: 768px) {
    width: 40%;
  }
`

const Text_left_title = styled.div`
    margin-left:35% ;
    margin-right: 10%;
    margin-top: 25%;
    color:white ;
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 1.2;
    @media (max-width: 768px) {
    margin-left:12px;
    font-size: 3vh;
    margin-top: 25vh;
  }
`

const Text_left_sub = styled.div`

    margin-top: 10%;
    color:${props => props.theme.primary_clear} ;
    font-size: 0.9rem;
`
const Button_a = styled.a`
    display: inline-block;
    text-transform:none;
    padding: 10px 45px;
    background-color: ${props => props.theme.primary_shade};
    border: 1px solid ${props => props.theme.primary_shade};
    color: ${props => props.theme.primary_clear};
    margin-top: 35px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    @media (max-width: 768px) {
        padding: 5px 23px;
    
  }

`

const Right_img = styled.img`
    width: 100%;
    height: 100%;
`

const Accent_txt = styled.p`
margin: 0;
color: ${props =>props.theme.primary};
`


export default class Banner extends React.Component {

    render() {
        return (
            <Container theme={this.props.theme}>
                <Left theme={this.props.theme}>
                    <Text_left_title theme={this.props.theme}><p>YOU GET ANY PRODUCT <Accent_txt theme={this.props.theme}>ON 10% DISCOUNT </Accent_txt></p>
                        <Text_left_sub theme={this.props.theme}>It is a long established fact that a reader will be distracted by</Text_left_sub>
                        <Button_a theme={this.props.theme}>Buy Now</Button_a>
                    </Text_left_title>

                </Left>
                <Right theme={this.props.theme}>
                    <Right_img src="https://picsum.photos/800/?random=5" />
                </Right>

            </Container>
        )
    }
}