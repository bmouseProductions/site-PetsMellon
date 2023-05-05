import { Card,Row, Col } from 'react-bootstrap';
import { HeaderEN } from '../../components/Header/indexEN'
import { FooterEN } from '../../components/Footer/indexEN'
import { Customizacao } from './style';
import { FaPaw } from 'react-icons/fa';
import { ButtonUp } from "../../components/BtnUp";


export const CustomizacoesEN =()=>{
    return (
        <div className='bg-light fade-in'>
            <HeaderEN/>
            <Customizacao className='bg-light'>
                <div className='text-center mt-3 d-flex flex-column align-items-center justify-content-center' style={{backgroundColor:'transparent'}}>
                        <div className='d-flex flex-row align-items-center justify-content-center'>
                            <h1 className='text-muted'>Custom Formulas</h1>
                        </div>
                        <p className='text-dark'>We offer a customized service. This means that each product is modified or adapted according to each client's specifications. We participate fully in their projects, from the ingredients to the technologies to be used, providing fast and effective solutions and maintaining absolute secrecy in each project.</p>
                </div>
                <Row className=' w-100'>
                    <Col>
                        <Card style={{ width:'100%',backgroundColor:'#491A76'}}  className='text-center border-0 mt-4 p-3'>
                            <Card.Body className='d-flex align-items-start flex-column justify-content-start w-100 p-2'>
                                <h3 className='text-white'>Economy Line</h3>
                                <div className='mt-3 d-flex flex-column gap-3 text-white text-left align-items-start w-100'>
                                    <li>√ 65% Meat</li>
                                    <li>√ Artificial Colorant</li>
                                    <li>√ Artificial Preservative</li>
                                    <li>√ Pork Palatabilizer</li>
                                    <li># packaging from 65g to 1,0kg</li>
                                </div>  
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={'4'}>
                        <Card style={{ width:'100%',backgroundColor:'#491A76'}}  className='text-center border-0 mt-4 p-3'>
                            <Card.Body className='d-flex flex-column align-items-start justify-content-start w-100 p-2'>
                                <h3 className='text-white'>Mainstream Line</h3>
                                <div className='mt-3 d-flex flex-column gap-3 text-white text-left align-items-start  w-100'>
                                    <li>√ 70% Meat</li>
                                    <li>√ Artificial Preservative</li>
                                    <li>√ Artificial Colorant</li>
                                    <li>√ Pork Palatabilizer</li>
                                    <li># packagesde 65g to 1,0kg</li>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={'4'}>
                        <Card style={{ width:'100%',backgroundColor:'#491A76'}}  className='text-center border-0 mt-4 p-3'>
                            <Card.Body className='d-flex flex-column align-items-start justify-content-start  w-100 p-2'>
                                <h3 className='text-white'>Premium Line</h3>
                                <div className='mt-3 d-flex flex-column gap-3 text-white text-left align-items-start w-100'>
                                    <li>√ 75% Meat</li>
                                    <li>√ Artificial Preservative</li>
                                    <li>√ Artificial Colorant</li>
                                    <li>√ Chicken Palatabilizer</li>
                                    <li># Packages from 50g to 1,0kg</li>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='w-100'>
                    <Col>
                        <Card style={{ width:'100%',height:'22rem',backgroundColor:'#491A76'}}  className='text-center border-0 mt-4 p-3'>
                            <Card.Body className='d-flex flex-column align-items-start justify-content-start w-100 p-2'>
                                <h3 className='text-white'>High Premium Line</h3>
                                <div className='mt-3 d-flex flex-column gap-3 text-white align-items-start w-100'>
                                    <li>√ 78% Meat</li>
                                    <li>√ Natural Preservative</li>
                                    <li>√ Artificial Coloring</li>
                                    <li>√ Natural Palatabilizer (no additives or preservatives)</li>
                                    <li>√ With added Prebiotics and Probiotics.</li>
                                    <li># packaging from 30g to 1,0kg</li>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card style={{ width:'100%',height:'22rem',backgroundColor:'#491A76'}}  className='text-center border-0 mt-4 p-3'>
                            <Card.Body className='d-flex flex-column align-items-start justify-content-start w-100 p-2'>
                                <h3 className='text-white'>Super Premium Line</h3>
                                <div className='mt-3 d-flex flex-column gap-3 text-white align-items-start w-100'>
                                    <li>√ 80% Meat Product</li>
                                    <li>√ Natural Preservative</li> 
                                    <li>√ Natural Coloring</li> 
                                    <li>√ Selection Palatabilizer (no added cereals, sugar, no pesticides, soy free)</li> 
                                    <li>√ Com adição de Prebióticos e Probióticos.</li> 
                                    <li># embalagens de 30g à 1,0kg</li>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Customizacao>
            <ButtonUp></ButtonUp>
            <FooterEN/>
        </div>
    );
}