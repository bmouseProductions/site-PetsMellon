import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'
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

export const Produto = ()=>{
    return (
        <div className="bg-light fade-in">
            <Header/>
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
                        <h1 className='me-3 text-white'>Nossos Produtos</h1>
                        <IoPawOutline className='' size={40} color={'#fff'}/>
                    </div>
                    <p className='text-white'>Atuando como co-packer na fabricação de alimentos para animais, oferecemos soluções de altíssima qualidade para os nossos parceiros. Todos os nossos produtos são balanceados e estão de acordo com as exigências dos órgãos fiscalizadores. Possuímos alta tecnologia nos processos industriais e o nosso portfólio engloba toda a linha de alimentos completos, alimentos específicos e os produtos mastigáveis destinados aos animais de companhia.</p>
                </ProdutoDescricao>
            </Produtos>
            <Container>
                <Row className='mt-2 mb-5 '>
                <div className='text-center mt-5 d-flex flex-row justify-content-center mb-5'>
                        <h1 className='me-3 text-muted'>Tipos de Produtos</h1>
                        <IoPawOutline className='' size={40} color={'#f58525'}/>
                    </div>
                    <Col sm={12} lg={4} data-aos="zoom-in-up">
                        <Card className='p-0 m-0 border-0 '>
                            <Card.Img variant="top" src={ProdutoImg}/>
                            <Card.Body className=''>
                                <h3 >Natural Body Parts</h3>
                                <p className='fs-5'>
                                Classificados como produtos mastigáveis, os Body Parts são produtos à base de subprodutos de origem animal, podendo abarcar ingredientes de origem vegetal. São destinados exclusivamente aos animais de companhia, com a finalidade de diversão ou agrado, contendo valor nutricional insignificante. Como exemplo temos as orelhas naturais e os ossos pequenos, médios e grandes de bovinos e suínos.
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
                                Os snacks são identificados como alimentos específicos. São produtos compostos por ingredientes, matérias-primas ou aditivos destinados exclusivamente à alimentação de animais de companhia com finalidade de agrado, prêmio ou recompensa, podendo possuir propriedades específicas. Temos como exemplo os bifinhos e petiscos em geral.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} lg={4} data-aos="zoom-in-up">
                        <Card className='p-0 m-0 border-0'>
                            <Card.Img variant="top" src={ProdutoImg3}/>
                            <Card.Body className=''>
                                <h3>Ração Úmida</h3>
                                <p className='fs-5'>
                                São classificados como alimentos completos, os enlatados e bolsas geralmente se diferenciam apenas na embalagem apresentada. São alimentos capazes de atender integralmente as exigências nutricionais, podendo possuir propriedades específicas ou funcionais, compostas por ingredientes ou matérias-primas e aditivos destinados exclusivamente à alimentação de animais de companhia.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <ButtonUp></ButtonUp>
            <Footer/>
        </div>
    );
}