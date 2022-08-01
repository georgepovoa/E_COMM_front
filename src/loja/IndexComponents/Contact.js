import React from "react";
import {ContainerContact,
    TitleContact,
    EsquerdaContact,
    DireitaContact,
    InputContact,
    InputTextContact,
    DiretiaImgContact,
    PContact,
    ButtonContact} from "../../StyledCompenents/StyleIndex"

    import Api from "../../API/Api";



    const api =new Api()
    

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            email:"",
            assunto:"",
            mensagem:""
        };
    
        this.handleChangeNome = this.handleChangeNome.bind(this);
        this.handleChangeAssunto = this.handleChangeAssunto.bind(this);
        this.handleChangeMensagem = this.handleChangeMensagem.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChangeNome(event) {
        this.setState({nome: event.target.value});
      }
      handleChangeAssunto(event) {
        this.setState({assunto: event.target.value});
      }
      handleChangeMensagem(event) {
        this.setState({mensagem: event.target.value});
      }
      handleChangeEmail(event) {
        this.setState({email: event.target.value});
      }
    
      async handleSubmit(event) {
        var mensagem = {
            nome: this.state.nome,
            email:this.state.email,
            assunto:this.state.assunto,
            mensagem:this.state.mensagem
        }

        alert('A name was submitted: ');
        event.preventDefault();
        await api.postMensagem(mensagem)
      }

    render() {
        return (<>
            <TitleContact id="contact">REQUEST A CALL BACK</TitleContact>

            <ContainerContact>
                <EsquerdaContact>
                <form onSubmit={this.handleSubmit}>
                    <PContact >Nome</PContact>
                    <InputContact type="text" value={this.state.value} onChange={this.handleChangeNome}></InputContact>
                    <PContact >Email</PContact>
                    <InputContact type="text" value={this.state.value} onChange={this.handleChangeEmail}></InputContact>
                    <PContact>Assunto</PContact>
                    <InputContact type="text" value={this.state.value} onChange={this.handleChangeAssunto}></InputContact>
                    <PContact>Mensagem</PContact>
                    <InputTextContact type="text" value={this.state.value} onChange={this.handleChangeMensagem}/>
                    <ButtonContact type="submit" value="Submit">Enviar</ButtonContact>
                </form>

                </EsquerdaContact>
                <DireitaContact>
                    <DiretiaImgContact src="https://picsum.photos/800/?random=123"/>
                </DireitaContact>
                
            </ContainerContact>
            
        </>
        )
    }
}