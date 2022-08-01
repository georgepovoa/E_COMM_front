import React from "react";
import {ContainerBanner,
    LeftBanner,
    RightBanner,
    TextLeftTitleBanner,
    TextLeftSubBanner,
    ButtonBanner,
    RightImgBanner,
    AccentTxtBanner} from "../../StyledCompenents/StyleIndex"

export default class Banner extends React.Component {

    render() {
        return (
            <ContainerBanner theme={this.props.theme}>
                <LeftBanner theme={this.props.theme}>
                    <TextLeftTitleBanner theme={this.props.theme}><div>YOU GET ANY PRODUCT <AccentTxtBanner theme={this.props.theme}>ON 10% DISCOUNT </AccentTxtBanner></div>
                        <TextLeftSubBanner theme={this.props.theme}>It is a long established fact that a reader will be distracted by</TextLeftSubBanner>
                        <ButtonBanner theme={this.props.theme}>Buy Now</ButtonBanner>
                    </TextLeftTitleBanner>

                </LeftBanner>
                <RightBanner theme={this.props.theme}>
                    <RightImgBanner src="https://picsum.photos/800/?random=5" />
                </RightBanner>

            </ContainerBanner>
        )
    }
}