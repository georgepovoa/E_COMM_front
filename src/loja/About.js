import React from "react";
import styled from "styled-components";


const Button_a  = styled.a`
display: block;
text-transform:none;
padding: 10px 45px;
background-color: ${props => props.theme.primary};
border: 1px solid ${props => props.theme.primary};
color: ${props => props.theme.secondary};
text-align: center;
width: 10%;
margin: auto;
margin-top: 35px;
`

const Title_about = styled.p`
margin-top:5%;
text-align: center;
font-size: 2rem;
font-weight: 600;

`

const About_desc = styled.p`

text-align: center;
margin: auto;
width: 45%;
margin-top: 35px;
@media (max-width: 768px) {
    width:75%
  }
`

const About_img = styled.img`
width: 20%;
display: block;
margin: auto;
height: 40%;
margin-bottom: 15px;
@media (max-width: 768px) {
    height:auto;
  }
`
const Container = styled.div`
background-color: ${props => props.theme.primary_clear};
margin: 0;
height: auto;

@media (max-width: 768px) {
    height:auto;
  }

`



export default class About extends React.Component {
    componentDidMount() {

      }
    render() {
        
        console.log(this.props.theme)

        return (
            <Container theme={this.props.theme}>
                <Title_about theme={this.props.theme}>
                    ABOUT US
                </Title_about>
                <About_img src="https://picsum.photos/800/?random=5"></About_img>
                <About_desc  theme={this.props.theme}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making itIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it</About_desc>
                <Button_a  theme={this.props.theme}> Read More</Button_a>
           </Container>
        )
    }

}