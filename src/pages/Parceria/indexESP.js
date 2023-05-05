import { HeaderESP } from '../../components/Header/indexESP'
import { FooterESP } from '../../components/Footer/indexESP'
import { Parceiro, Container } from '../../components/style'
import { Button, Form, Row } from 'react-bootstrap';
import ParceiroImg from '../../assets/image/catparceiro.webp'
import { ButtonUp } from "../../components/BtnUp";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"
import { Spinner } from 'react-bootstrap';
import {  useState } from 'react';


export const ParceriaESP =()=>{

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
            <HeaderESP/>
            <ToastContainer/>
            <Container >
                <div className='d-flex text-center gap-2 mt-2 w-100 justify-content-center mb-3'>
                    <h1 className="mb-2 p-0 m-0 text-left" style={{color:'#FF9200'}}>Sea un </h1>
                    <h1 className="mb-2 p-0 m-0 text-muted ">Socio</h1>
                </div>
                <Parceiro>
                    <Row className=''>
                        <img src={ParceiroImg} alt="" className='rounded-5 img-fluid m-auto img-parceiro'/>
                    </Row>
                    <Row className=''>
                        <p className='text-muted'>Mascotas Mellón trabaja como Copacker para su marca. Nuestra intención es llevar el más alto estándar de calidad a tu producto terminado y brindar una experiencia diferente y exclusiva para tu marca. Buscamos mucho más que un cliente, queremos un socio para encontrar juntos la forma en que podemos servirle mejor, buscando su satisfacción y una sociedad duradera.</p>
                        <Form onSubmit={handleFormSubmit} method='post' className='w-100  mb-3 d-flex flex-column'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="name" placeholder="Nombre completo" name="nome" style={{borderColor:'#FF9200'}} className="bg-light"/>
                            </Form.Group>
                            <Form.Group className="mb-3 bg-light" controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" placeholder="Correo electrónico" name="email" style={{borderColor:'#FF9200'}}  className="bg-light"/>
                            </Form.Group>
                            <Form.Group className="mb-3 bg-light" controlId="exampleForm.ControlInput1">
                                <Form.Control type="telefone" placeholder="Teléfono" name="telefone" style={{borderColor:'#FF9200'}}  className="bg-light"/>
                            </Form.Group>
                            <Form.Group className="mb-3 bg-light" controlId="exampleForm.ControlInput1">
                                <Form.Control type="telefone" placeholder="Estado de la Ciudad" name="cidadeUF" style={{borderColor:'#FF9200'}}  className="bg-light"/>
                            </Form.Group>
                            <Form.Group className="mb-3 bg-light" controlId="exampleForm.ControlInput1">
                                <Form.Control type="telefone" placeholder="Su empresa" name="empresa" style={{borderColor:'#FF9200'}} className="bg-light"/>
                            </Form.Group>
                            <Form.Group className="mb-3 bg-light" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={3} placeholder="Escribe tu mensaje aquí..." name="mensagem" style={{borderColor:'#FF9200'}} className="bg-light"/>
                            </Form.Group>
                            <Button type="submit" className='border-0 p-3  align-self-end' style={{backgroundColor:'#FF9200'}}>
    {loading ? <Spinner animation="border" size="sm" className='me-2' /> : null}
    envía tu mensaje
</Button>
                        </Form>
                    </Row>
                </Parceiro>
            </Container>
            <ButtonUp></ButtonUp>
            <FooterESP/>
        </div>
    );
}   