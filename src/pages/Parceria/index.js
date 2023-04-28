import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Parceiro, Container } from '../../components/style'
import { Button, Form, Row } from 'react-bootstrap';
import ParceiroImg from '../../assets/image/catparceiro.webp'
import { ButtonUp } from "../../components/BtnUp";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"
import { Spinner } from 'react-bootstrap';
import {  useState } from 'react';


export const Parceria =()=>{

    const [loading, setLoading] = useState(false);

function handleFormSubmit(event) {

    event.preventDefault();
    setLoading(true);
    axios.post('https://backend-a63h.onrender.com/enviar-email', {
        nome: event.target.nome.value,
        email: event.target.email.value,
        telefone: event.target.telefone.value,
        cidadeUF: event.target.cidadeUF.value,
        empresa: event.target.empresa.value,
        mensagem: event.target.mensagem.value
    }).then(() => {
        setLoading(false);
        toast.success('Mensagem enviada com sucesso!');
        event.target.reset();
    }).catch(() => {
        setLoading(false);
        toast.error('Erro ao enviar a mensagem.');
    });
}




    return (
        <div className='bg-light fade-in'>
            <Header/>
            <ToastContainer/>
            <Container >
                <div className='d-flex text-center gap-2 mt-2 w-100 justify-content-center mb-3'>
                    <h1 className="mb-2 p-0 m-0 text-left" style={{color:'#FF9200'}}>Seja um</h1>
                    <h1 className="mb-2 p-0 m-0 text-muted ">Parceiro</h1>
                </div>
                <Parceiro>
                    <Row className=''>
                        <img src={ParceiroImg} alt="" className='rounded-5 img-fluid m-auto img-parceiro'/>
                    </Row>
                    <Row className=''>
                        <p className='text-muted'>A Pets Mellon trabalha como co-packer para sua marca. Estamos empenhados em fornecer um padrão de qualidade excepcional para o seu produto finalizado, garantindo uma experiência diferenciada e exclusiva para seus clientes. Por isso, trabalhamos em estreita colaboração com nossos parceiros para encontrar soluções personalizadas que atendam às suas necessidades específicas e garantam sua total satisfação.</p>
                        <Form onSubmit={handleFormSubmit} method='post' className='w-100  mb-3 d-flex flex-column'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="name" placeholder="Nome Completo" name="nome" style={{borderColor:'#FF9200'}} className="bg-light"/>
                            </Form.Group>
                            <Form.Group className="mb-3 bg-light" controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" placeholder="Email" name="email" style={{borderColor:'#FF9200'}}  className="bg-light"/>
                            </Form.Group>
                            <Form.Group className="mb-3 bg-light" controlId="exampleForm.ControlInput1">
                                <Form.Control type="telefone" placeholder="Telefone" name="telefone" style={{borderColor:'#FF9200'}}  className="bg-light"/>
                            </Form.Group>
                            <Form.Group className="mb-3 bg-light" controlId="exampleForm.ControlInput1">
                                <Form.Control type="telefone" placeholder="Cidade/ UF" name="cidadeUF" style={{borderColor:'#FF9200'}}  className="bg-light"/>
                            </Form.Group>
                            <Form.Group className="mb-3 bg-light" controlId="exampleForm.ControlInput1">
                                <Form.Control type="telefone" placeholder="Sua empresa" name="empresa" style={{borderColor:'#FF9200'}} className="bg-light"/>
                            </Form.Group>
                            <Form.Group className="mb-3 bg-light" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={3} placeholder="Digite aqui sua mensagem..." name="mensagem" style={{borderColor:'#FF9200'}} className="bg-light"/>
                            </Form.Group>
                            <Button type="submit" className='border-0 p-3  align-self-end' style={{backgroundColor:'#FF9200'}}>
    {loading ? <Spinner animation="border" size="sm" className='me-2' /> : null}
    Enviar sua Mensagem
</Button>
                        </Form>
                    </Row>
                </Parceiro>
            </Container>
            <ButtonUp></ButtonUp>
            <Footer/>
        </div>
    );
}   