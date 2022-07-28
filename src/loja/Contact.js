import React from "react";
import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const Title = styled.h1`
    font-size: 1.8rem;
    font-weight: 500;
    margin-left: 7%;
    margin-bottom: 3%;
`

const Esquerd_div = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    margin-left: 7%;
    margin-right: 7%;



`
const Direita_div = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0;
    padding: 0;


`


const Input = styled.input`
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

const Input_text = styled.textarea`
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

const Diretia_img = styled.img`
display: block;
width: 100%;
height: 68%;


`

const P = styled.p`
margin-bottom: 7px;
`

const Button =styled.button`
display: block;
background-color: #121313;
padding: 10px;
border: 1px solid #121313;
color: #ffffff;
border-radius: 5px;
margin-top: 0px;
width: 30%;
`


export default class Contact extends React.Component {

    render() {
        return (<>
            <Title>REQUEST A CALL BACK</Title>

            <Container>
                <Esquerd_div>
                    <P>Nome</P>
                    <Input></Input>
                    <P>Email</P>
                    <Input></Input>
                    <P>Assunto</P>
                    <Input></Input>
                    <P>Mensagem</P>
                    <Input_text />
                    <Button>Enviar</Button>
                </Esquerd_div>
                <Direita_div>
                    <Diretia_img src="https://picsum.photos/800/?random=123"></Diretia_img>
                </Direita_div>
                
            </Container>
            
        </>
        )
    }
}