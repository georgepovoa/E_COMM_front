import styled from "styled-components";
// About.js

export const AboutButton  = styled.a`
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

export const TitleAbout = styled.p`
    margin-top:5%;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;

`

export const AboutDesc = styled.p`

    text-align: center;
    margin: auto;
    width: 45%;
    margin-top: 35px;
    @media (max-width: 768px) {
        width:75%
      }
`

export const AboutImg = styled.img`
    width: 20%;
    display: block;
    margin: auto;
    height: 40%;
    margin-bottom: 15px;
    @media (max-width: 768px) {
        height:auto;
      }
`
export const ContainerAbout = styled.div`
    background-color: ${props => props.theme.primary_clear};
    margin: 0;
    height: auto;

    @media (max-width: 768px) {
        height:auto;
      }

`

// About.js


//Banner.js

export const ContainerBanner = styled.div`

    display: flex;
    flex-direction: row;
    background-color: #212529;
    width: 100%;
    height: 100vh;
    


`

export const LeftBanner = styled.div`
    display: flex;
    width: 41%;
    background-color:  ${props => props.theme.acent1};
    @media (max-width: 768px) {
    width: 60%;
}
    
`

export const RightBanner = styled.div`
    display: flex;
    width: 59%;
    background-color: ${props => props.theme.primary_clear};
    @media (max-width: 768px) {
    width: 40%;
  }
`

export const TextLeftTitleBanner = styled.div`
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

export const TextLeftSubBanner = styled.div`

    margin-top: 10%;
    color:${props => props.theme.primary_clear} ;
    font-size: 0.9rem;
`
export const ButtonBanner = styled.a`
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

export const RightImgBanner = styled.img`
    width: 100%;
    height: 100%;
`

export const AccentTxtBanner = styled.p`
    margin: 0;
    color: ${props =>props.theme.primary};
`

//Banner.js


// Contact.js
export const ContainerContact = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export const TitleContact = styled.h1`
    font-size: 1.8rem;
    font-weight: 500;
    margin-left: 7%;
    margin-bottom: 3%;
`

export const EsquerdaContact = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    margin-left: 7%;
    margin-right: 7%;



`
export const DireitaContact = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0;
    padding: 0;


`


export const InputContact = styled.input`
    border-radius: 0;
    height: 20px;
    display: block;
    width: 100%;
    height: calc(0.6em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    margin-bottom:7%;
`

export const InputTextContact = styled.textarea`
    border-radius: 0;
    height: 35px;
    display: block;
    width: 100%;
    height: calc(5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    
    margin-bottom: 2%;


`

export const DiretiaImgContact = styled.img`
    display: block;
    width: 100%;
    height: 68%;


`

export const PContact = styled.p`
    margin-bottom: 7px;
`

export const ButtonContact =styled.button`
    display: block;
    background-color: #121313;
    padding: 10px;
    border: 1px solid #121313;
    color: #ffffff;
    border-radius: 5px;
    margin-top: 0px;
    width: 30%;
    @media (max-width: 768px) {
        width: 65%;
        margin-top: 3px;
        margin-bottom: 15px;
      
      }
`

// Contact.js


// Footer.js
export const ContainerFooter = styled.footer`
    display: flex;
    height: 20vh;
    background-color: black;
    color: white;
    justify-content: center;
    align-items: center;

`

export const LinkFooter = styled.a`
    text-decoration: none;
    color: white;
`


export const IconsFooter = styled.img`
    width: 30px;
    height: 30px;
    margin:15px;
`
// Footer.js


// Header.js
export const ContainerHeader = styled.div`
    margin:0px;
    position: fixed;
    background-color:${props => props.theme.primary_shade};
    color : ${props => props.theme.primary_clear};
    display:flex;
    justify-content: space-around ;
    flex-wrap: wrap;
    align-items:center;
    font-family: 'Roboto', sans-serif;
    height: 5vh;
    align-content: center;
    width: 100%;
    z-index: 999;
`

export const LogoHeader =  styled.a `
    color: ${props => props.theme.primary_clear};;
    text-align: center;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 600;

`
export const MenuA = styled.a`
    color: ${props => props.theme.primary_clear};;
    text-align: center;
    text-transform: uppercase;
    font-size: 0.85rem;
    font-weight: 600;
    text-decoration: none;
`

export const CarrinhoNumber = styled.div`
    width: 22px;
    height: 100%;
    background-color: ${props => props.theme.primary_clear};
    color: ${props => props.theme.primary_shade};
    border-radius: 50%;
    text-align: center;
    align-self: center;
    font-size: 1rem;
    margin-left: 7px;
`

export const CarrinhoDiv = styled.div`
    display: flex;
`

// Header.js


// Info.js
export const ContainerInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    height: 400px;
    align-items: center;
    text-align: center;

    @media (max-width: 768px) {
        width: 65%;
        margin: auto;
        height: 30%;
      }

`

export const InfoImg = styled.img`
    width: 25%;
    margin: 25% auto;
    margin-bottom:5% ;
`

export const InfoTitle = styled.p`

    margin: 0;
    padding: 0;
    font-size: 1.25rem;
    text-transform: uppercase;
    font-weight: 800;
`

export const InfoDesc = styled.p`
    margin-top: 5%;
    padding: 0;
    font-size: 1.2rem;

`
// Info.js


// Mini_slider.js

export const TitleMiniSlider = styled.p`
    font-size: 1.2rem;
    margin: 0;
    padding: 0;
    font-weight: 700;

`

export const PriceMiniSlider = styled.p`
    font-size: 1rem;
    margin: 0;
    padding: 0;
    font-weight: 400;
    margin-bottom: 0px;


`

export const SectionTitleMiniSlider = styled.p`
    margin-top:0;
    margin-left: 7px;
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 1.2;
`

export const MiniSliderImg = styled.img`
    display: block ;
    width: 200px ;
    height: 200px ;
    object-fit: cover ;
    margin: 0 ;
`

export const ContainerMiniSlider = styled.div`
    margin: 0;
    padding-top: 50px;
    height: 30%;
    align-items: center;
    display: block;
`

export const ButtonBuyMiniSlider =styled.a`
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
//Mini_slider.js


//Slider.js

export const ContainerSlider = styled.div`

    width: 100%;
    height: 100vh;
    background: ${props =>props.theme.primary};
    @media (max-width: 768px) {
  }

`


export const TitleSlider = styled.h1`
    margin: 0;
    color: ${props => props.theme.secondary};
    font-size: 3rem ;
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    margin-top:25px;
    padding: 0;

    @media (max-width: 768px) {
      text-align: initial;
      
      }

`
export const DescriptionSlider = styled.p`
    margin: 0;
    margin-top:5px;
    text-align: initial;
    color: ${props => props.theme.secondary};
    font-size: 60%;
    @media (max-width: 768px) {
      text-align: initial;
        margin-right: 15%;

      }

`

export const ALinkSlider = styled.a`
    display: inline-block;
    padding: 10px 45px;
    background-color: ${props => props.theme.acent1};
    border: 1px solid ${props => props.theme.acent1};
    color: ${props => props.theme.secondary};
    margin-top: 35px;
    margin-bottom: 45px;
    text-decoration: none;
    @media (max-width: 768px) {
    margin-left:7px;
      font-size: 60%;
      padding: 5px 23px;
  }
    `

export const ImageSlider = styled.img`
    display: block;
    width: 35%;
    height: 60%;
    margin-left: 5%;
@media (max-width: 768px) {
    width: 35%;
    height:50%;
  }`


export const TextAreaSlider = styled.div`
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    margin-left:35px ;
    justify-content: center;

    margin-bottom: 0;
    width: 50%;
    font-size: 2rem;
    
    
    height: 100%;
    @media (max-width: 768px) {
        width: 100%;
        font-size: 1.2rem;
  }

`
//Slider.js
