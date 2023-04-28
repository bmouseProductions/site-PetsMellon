import { Card,Row, Col } from 'react-bootstrap';
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Customizacao } from './style';
import { FaPaw } from 'react-icons/fa';
import { ButtonUp } from "../../components/BtnUp";


export const Customizacoes=()=>{
    return (
        <div className='bg-light fade-in'>
            <Header/>
            <Customizacao className='bg-light'>
                <div className='text-center mt-3 d-flex flex-column align-items-center justify-content-center' style={{backgroundColor:'transparent'}}>
                        <div className='d-flex flex-row align-items-center justify-content-center'>
                            <h1 className='text-muted'>Fórmulas Customizadas</h1>
                        </div>
                        <p className='text-dark'>Oferecemos um serviço personalizado. Isso significa que cada produto é modificado ou adaptado de acordo com a especificação de cada cliente. Participamos integralmente dos projetos dos mesmos, desde os ingredientes até as tecnologias a serem utilizadas, fornecendo soluções rápidas e efetivas e mantendo o sigilo abslouto em cada projeto.</p>
                </div>
                <Row className=' w-100'>
                    <Col>
                        <Card style={{ width:'100%',backgroundColor:'#491A76'}}  className='text-center border-0 mt-4 p-3'>
                            <Card.Body className='d-flex align-items-start flex-column justify-content-start w-100 p-2'>
                                <h3 className='text-white'>Linha Econômica</h3>
                                <div className='mt-3 d-flex flex-column gap-3 text-white text-left align-items-start w-100'>
                                    <li>√ 65% de Cárneos</li>
                                    <li>√ Corante Artificial</li>
                                    <li>√ Conservante Artificial</li>
                                    <li>√ Palatabilizante Suíno</li>
                                    <li># embalagens de 65g à 1,0kg</li>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={'4'}>
                        <Card style={{ width:'100%',backgroundColor:'#491A76'}}  className='text-center border-0 mt-4 p-3'>
                            <Card.Body className='d-flex flex-column align-items-start justify-content-start w-100 p-2'>
                                <h3 className='text-white'>Linha Mainstream</h3>
                                <div className='mt-3 d-flex flex-column gap-3 text-white text-left align-items-start  w-100'>
                                    <li>√ 70% de Cárneos</li>
                                    <li>√ Conservante Artificial</li>
                                    <li>√ Corante Artificial</li>
                                    <li>√ Palatabilizante Suíno</li>
                                    <li># embalagens de 65g à 1,0kg</li>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={'4'}>
                        <Card style={{ width:'100%',backgroundColor:'#491A76'}}  className='text-center border-0 mt-4 p-3'>
                            <Card.Body className='d-flex flex-column align-items-start justify-content-start  w-100 p-2'>
                                <h3 className='text-white'>Linha Premium</h3>
                                <div className='mt-3 d-flex flex-column gap-3 text-white text-left align-items-start w-100'>
                                    <li>√ 75% de Cárneos</li>
                                    <li>√ Conservante Artificial</li>
                                    <li>√ Corante Artificial</li>
                                    <li>√ Palatabilizante Frango</li>
                                    <li># embalagens de 50g à 1,0kg</li>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='w-100'>
                    <Col>
                        <Card style={{ width:'100%',height:'22rem',backgroundColor:'#491A76'}}  className='text-center border-0 mt-4 p-3'>
                            <Card.Body className='d-flex flex-column align-items-start justify-content-start w-100 p-2'>
                                <h3 className='text-white'>Linha High Premium</h3>
                                <div className='mt-3 d-flex flex-column gap-3 text-white align-items-start w-100'>
                                    <li>√ 78% de Cárneos</li>
                                    <li>√ Conservante Natural</li>
                                    <li>√ Corante Artificial</li>
                                    <li>√ Palatabilizante Natural (sem aditivos ou conservantes)</li>
                                    <li>√ Com adição de Prebióticos e Probióticos.</li>
                                    <li># embalagens de 30g à 1,0kg</li>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card style={{ width:'100%',height:'22rem',backgroundColor:'#491A76'}}  className='text-center border-0 mt-4 p-3'>
                            <Card.Body className='d-flex flex-column align-items-start justify-content-start w-100 p-2'>
                                <h3 className='text-white'>Linha Super Premium</h3>
                                <div className='mt-3 d-flex flex-column gap-3 text-white align-items-start w-100'>
                                    <li>√√ 80% de Cárneos</li>
                                    <li>√ Conservante Natural</li> 
                                    <li>√ Corante Natural</li> 
                                    <li>√ Palatabilizante Selection (sem adição de cereais, açúcar, sem agrotóxico, livre de soja)</li> 
                                    <li>√ Com adição de Prebióticos e Probióticos.</li> 
                                    <li># embalagens de 30g à 1,0kg</li>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Customizacao>
            <ButtonUp></ButtonUp>
            <Footer/>
        </div>
    );
}