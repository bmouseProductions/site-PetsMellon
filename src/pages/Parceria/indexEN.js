import { HeaderEN } from '../../components/Header/indexEN'
import { FooterEN } from '../../components/Footer/indexEN'
import { Parceiro, Container } from '../../components/style'
import { Button, Form, Row } from 'react-bootstrap';
import ParceiroImg from '../../assets/image/catparceiro.webp'
import { ButtonUp } from "../../components/BtnUp";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"
import { Spinner } from 'react-bootstrap';
import {  useState } from 'react';


export const ParceriaEN =()=>{

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
            <HeaderEN/>
            <ToastContainer/>
            <Container >
                <div className='d-flex text-center gap-2 mt-2 w-100 justify-content-center mb-3'>
                    <h1 className="mb-2 p-0 m-0 text-left" style={{color:'#FF9200'}}>Be a</h1>
                    <h1 className="mb-2 p-0 m-0 text-muted ">partner</h1>
                </div>
                <Parceiro>
                    <Row className=''>
                        <img src={ParceiroImg} alt="" className='rounded-5 img-fluid m-auto img-parceiro'/>
                    </Row>
                    <Row className=''>
                        <p className='text-muted'>Pets Mellon works as a Copacker for your brand. Our intention is to bring the highest quality standard to your finished product and provide a different and exclusive experience for it. We seek much more than a client, we want a partner to find together the way we can best serve you, aiming at your satisfaction and a long-lasting partnership.</p>
                        <Form onSubmit={handleFormSubmit} method='post' className='w-100  mb-3 d-flex flex-column'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="name" placeholder="Full Name" name="nome" style={{borderColor:'#FF9200'}} className="bg-light"/>
                            </Form.Group>
                            <Form.Group className="mb-3 bg-light" controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" placeholder="Email" name="email" style={{borderColor:'#FF9200'}}  className="bg-light"/>
                            </Form.Group>
                            <Form.Group className="mb-3 bg-light" controlId="exampleForm.ControlInput1">
                                <Form.Control type="telefone" placeholder="Phone" name="telefone" style={{borderColor:'#FF9200'}}  className="bg-light"/>
                            </Form.Group>
                            <Form.Group className="mb-3 bg-light" controlId="exampleForm.ControlInput1">
                                <Form.Control type="text" placeholder="City/State" name="cidadeUF" style={{borderColor:'#FF9200'}}  className="bg-light"/>
                            </Form.Group>
                            <Form.Group className="mb-3 bg-light" controlId="exampleForm.ControlInput1">
                                <Form.Control type="telefone" placeholder="Your Company" name="empresa" style={{borderColor:'#FF9200'}} className="bg-light"/>
                            </Form.Group>
                            <Form.Group className="mb-3 bg-light" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={3} placeholder="Enter your message here..." name="mensagem" style={{borderColor:'#FF9200'}} className="bg-light"/>
                            </Form.Group>
                            <Button type="submit" className='border-0 p-3  align-self-end' style={{backgroundColor:'#FF9200'}}>
    {loading ? <Spinner animation="border" size="sm" className='me-2' /> : null}
    Send your message
</Button>
                        </Form>
                    </Row>
                </Parceiro>
            </Container>
            <ButtonUp></ButtonUp>
            <FooterEN/>
        </div>
    );
}   