import React from "react";

import {AboutButton,
  TitleAbout,
  AboutDesc,
  AboutImg,
  ContainerAbout} from "../../StyledCompenents/StyleIndex"

  import randomlogo from '../img/randomlogo.png'




export default class About extends React.Component {
    componentDidMount() {

      }
    render() {
        

        return (
            <ContainerAbout theme={this.props.theme} >
                <TitleAbout theme={this.props.theme} id="about">
                    ABOUT US
                </TitleAbout>
                <AboutImg src={randomlogo}></AboutImg>
                <AboutDesc  theme={this.props.theme}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making itIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it</AboutDesc>
                <AboutButton  theme={this.props.theme}> Read More</AboutButton>
           </ContainerAbout>
        )
    }

}