import {HeaderEN} from '../../components/Header/indexEN'
import {FooterEN} from '../../components/Footer/indexEN'
import { Container, Produtos, ProdutoDescricao } from '../../components/style';
import { Carousel, Row, Col, Card  } from 'react-bootstrap';
import { IoPawOutline } from 'react-icons/io5';
import ProdutoImg from '../../assets/image/Femur Bovino.webp'
import ProdutoImg2 from '../../assets/image/Bifinho Peito de Peru.webp'
import ProdutoImg3 from '../../assets/image/Ração Úmida.webp'
import BififnhoCarne from '../../assets/image/Bifinho Carne.png'
import BififnhoChurrasco from '../../assets/image/Bifinho Churrasco.png'
import BififnhoGalinha from '../../assets/image/Bifinho Galinha Caipira.png'
import Costela from '../../assets/image/Costela.png'
import Cut from '../../assets/image/Cut 03.png'
import Esofago from '../../assets/image/Esôfago.png'
import FemurSuino from '../../assets/image/Femur Suíno.png'
import MixDeRecorte from '../../assets/image/Mix de Recorte.png'
import OrelhaBovina from '../../assets/image/Orelha Bovina.png'
import OrelhaSuina from '../../assets/image/Orelha Suína.png'
import Sassame from '../../assets/image/Sassame.png'


import { ButtonUp } from "../../components/BtnUp";

export const ProdutoEN = ()=>{
    return (
        <div className="bg-light fade-in">
            <HeaderEN/>
            <Produtos>
                <Carousel className='mt-3 carousel-md' style={{width: "100%"}} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <Carousel.Item>
                            <img
                            className="d-block w-100 img-carousel"
                            src={ProdutoImg3}
                            alt="First slide"/>
               
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 img-carousel"
                            src={ProdutoImg}
                            alt="First slide"/>
                          
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 img-carousel"
                            src={ProdutoImg2}
                            alt="First slide"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 img-carousel"
                            src={BififnhoCarne}
                            alt="First slide"/>
                       
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 img-carousel"
                            src={BififnhoChurrasco}
                            alt="First slide"/>
                         
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 img-carousel"
                            src={BififnhoGalinha}
                            alt="First slide"/>
                      
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 img-carousel"
                            src={Costela}
                            alt="First slide"/>
                       
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 img-carousel"
                            src={Cut}
                            alt="First slide"/>
                     
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 img-carousel"
                            src={Esofago}
                            alt="First slide"/>
                       
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 img-carousel"
                            src={FemurSuino}
                            alt="First slide"/>
                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 img-carousel"
                            src={Sassame}
                            alt="First slide"/>
                        
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 img-carousel"
                            src={OrelhaBovina}
                            alt="First slide"/>
                           
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 img-carousel"
                            src={OrelhaSuina}
                            alt="First slide"/>
                        </Carousel.Item>
                </Carousel>
                <ProdutoDescricao data-aos='fade-up' data-aos-duration="2000">
                    <div className='text-center mt-5 d-flex flex-row m-auto'>
                        <h1 className='me-3 text-white'>Our Products</h1>
                        <IoPawOutline className='' size={40} color={'#fff'}/>
                    </div>
                    <p className='text-white'>Acting as a copacker in the manufacture of animal feed, we offer very high-quality resources to our partners. All our products are balanced and are in accordance with the requirements of the regulatory agencies. We have high technology in industrial processes and our portfolio encompasses the entire line of complete foods, specific foods and chewable products intended for pets.</p>
                </ProdutoDescricao>
            </Produtos>
            <Container>
                <Row className='mt-2 mb-5 '>
                <div className='text-center mt-5 d-flex flex-row justify-content-center mb-5'>
                        <h1 className='me-3 text-muted'>
Product Types
</h1>
                        <IoPawOutline className='' size={40} color={'#f58525'}/>
                    </div>
                    <Col sm={12} lg={4} data-aos="zoom-in-up">
                        <Card className='p-0 m-0 border-0 '>
                            <Card.Img variant="top" src={ProdutoImg}/>
                            <Card.Body className=''>
                                <h3 >Natural Body Parts</h3>
                                <p className='fs-5'>
                                Classified as chewable products, Body Parts are products based on animal by-products and can include ingredients of vegetable origin. They are intended exclusively for companion animals, for the purpose of amusement or pleasure, containing negligible nutritional value. As an example, we have the natural ears and small, medium and large bones of cattle and pigs.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} lg={4} data-aos="zoom-in-up">
                        <Card className='p-0 m-0 border-0'>
                            <Card.Img variant="top" src={ProdutoImg2} />
                            <Card.Body className=''>
                                <h3>Snacks</h3>
                                <p className='fs-5'>
                                Snacks are identified as specific foods. They are products composed of ingredients, raw materials or additives intended exclusively for the feeding of pets for the purpose of pleasure, prize or reward, and may have specific properties. We have as an example the steaks and snacks in general.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} lg={4} data-aos="zoom-in-up">
                        <Card className='p-0 m-0 border-0'>
                            <Card.Img variant="top" src={ProdutoImg3}/>
                            <Card.Body className=''>
                                <h3>Wet feed</h3>
                                <p className='fs-5'>
                                They are classified as complete foods. Cans and bags usually differ only in the packaging. They are foods capable of fully meeting the nutritional requirements, and may have specific or functional properties, composed of ingredients or raw materials and additives intended exclusively for the feeding of pets.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <ButtonUp></ButtonUp>
            <FooterEN/>
        </div>
    );
}