import {HeaderESP} from '../../components/Header/indexESP'
import { Container, Dados,Sobre, Customizacao, Produtos, ProdutoDescricao, Cards, Certificacoes, Patense, Clientes, BtnUp } from '../../components/style'
import BannerSobre from '../../assets/image/bannerSobre.png'
import BannerSobre2 from '../../assets/image/grupo-patense.png'
import Carousel from 'react-bootstrap/Carousel';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { TfiLocationPin } from 'react-icons/tfi';
import { GiSittingDog } from 'react-icons/gi';
import { FaCat } from 'react-icons/fa';
import { SiMaterialdesignicons } from 'react-icons/si';
import QuemSomos from '../../assets/image/sobrepets.webp'
import { IoPawOutline } from 'react-icons/io5';
import { FaPaw } from 'react-icons/fa';
import { AiOutlineArrowUp } from 'react-icons/ai';
import ProdutoImg from '../../assets/image/Costela.png'
import ProdutoImg2 from '../../assets/image/Bifinho Carne.png'
import ProdutoImg3 from '../../assets/image/Ração Úmida.png'
import Balance from '../../assets/image/balance.webp'    
import Baw from '../../assets/image/baw_waw.webp'
import SpecialDog from '../../assets/image/special_dog.webp'
import Purina from '../../assets/image/purina.webp'
import {FooterESP} from '../../components/Footer/indexESP'
import Pets from '../../assets/image/dogpets2.webp'
import PatenseImg from '../../assets/image/patense.svg'
import PetsMellonImg from '../../assets/image/petsmellon.svg'
import GrupoPatense from '../../assets/image/grupopatense.webp'
import FarolImg from '../../assets/image/farol.svg'
import PatenseAgro from '../../assets/image/logo-cor.svg'
import Zoomies from '../../assets/image/logozoomies.svg'
import { useNavigate, Link } from 'react-router-dom';
import { Conheca } from '../Conheca';


export const HomeESP = ()=>{

    const navigate = useNavigate()

    function redirectCustom(){
        navigate(`/site/customizacoes-esp`)
    }

    function redirectConheca(){
        navigate(`/site/conheca-esp`)
    }

    function redirectProdutos(){
        navigate(`/site/produtos-esp`)
    }

    function redirectPatense(){
        window.location.href='https://patense.com.br/';
    }

    function redirectFarol(){
        window.location.href='https://www.farol.ind.br/';
    }

    function redirectPatenseAgro(){
        window.location.href='https://www.patenseagroecologia.com.br/';
    }

    function redirectZoomies(){
        window.location.href='https://lojazoomies.com/';
    }


    return(
        <div className='bg-light fade-in'>
            <HeaderESP/>
            <Carousel className='carousel' style={{width: "100%"}}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 img-carousel"
                        src={BannerSobre}
                        alt="First slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 img-carousel"
                        src={BannerSobre2}
                        alt="First slide"/>
                    </Carousel.Item>
                </Carousel>
            <Container className=''>
                <Dados className='text-white' data-aos='fade-up' data-aos-duration="2000">
                    <Card className='d-flex align-items-center justify-content-center p-2 rounded-0 rounded-top border-0 border-bottom-1 border-dados-radius-start' style={{backgroundColor:'#F52369'}}>
                        <Card.Body className='d-flex align-items-center justify-content-center gap-3 text-center' style={{fontSize:'0.8rem'}}> <TfiLocationPin size={36}/><Link to="/site/contato-esp" className='text-white'>Contacto</Link></Card.Body>
                    </Card>

                    <Card className='d-flex align-items-center justify-content-center p-2 rounded-0 border-0 border-dados' style={{backgroundColor:'#491A76'}}>
                        <Card.Body className='d-flex align-items-center justify-content-center gap-3'><GiSittingDog size={36}/><Link to="/site/customizacoes-esp"  className='text-white'>Fórmulas personalizadas</Link></Card.Body>
                    </Card>

                    <Card className='d-flex align-items-center justify-content-center p-2 rounded-0 border-0 border-dados' style={{backgroundColor:'#491A76'}}>
                        <Card.Body className='d-flex align-items-center justify-content-center gap-3'><FaCat size={36}/><Link to="/site/produtos-esp"  className='text-white'>Tipos de productos</Link></Card.Body>
                    </Card>
                    <Card className='d-flex align-items-center justify-content-center p-2 border-0 rounded-0 rounded-bottom border-dados border-dados-radius-end' style={{backgroundColor:'#F52369',}}>
                        <Card.Body className='d-flex align-items-center justify-content-center gap-3'> <SiMaterialdesignicons size={36}/><Link to="/site/servicos-esp"  className='text-white'>Todo para tu Marca</Link></Card.Body>
                    </Card>
                </Dados>
                <Sobre className='w-100' data-aos='fade-up' data-aos-duration="2000">
                    <img src={QuemSomos} alt="" className='rounded-1' style={{width:'100%'}} />
                    <Card style={{ width: '100%' }} className='text-left border-0 mt-4 p-0 m-0 mb-4'>
                        <Card.Body className='w-100 p-0'>
                            <div className='d-flex text-center gap-2'>
                                <h1 className="mb-2 p-0 m-0 text-left" style={{color:'#FF9200'}}>Sobre</h1>
                                <h1 className="mb-2 p-0 m-0 text-muted ">Nosotros</h1>
                            </div>
                            <Card.Text className='text-dark lh-6 p-0'>¡Un negocio nuevo, pero desde hace 50 años con la misma calidad! Enfocada en productos PET, nuestra nueva unidad trae la calidad, innovación y sustentabilidad ya marcadas en el ADN del Grupo Patense. Trabajamos como Copackers para las principales marcas de Brasil y del mundo, produciendo con excelencia numerosos productos para perros y gatos.</Card.Text>
                            <Button onClick={()=> redirectConheca()} className='w-100 border-0 mb-3 p-3 mt-4 text-center m-auto shadow-lg'style={{backgroundColor:'#491A76'}}><h4>Quieres saber más...</h4></Button>
                        </Card.Body>
                    </Card>
                </Sobre> 
            </Container>
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
                </Carousel>
                <ProdutoDescricao data-aos='fade-up' data-aos-duration="2000">
                    <div className='text-center mt-5 d-flex flex-row m-auto'>
                        <h1 className='me-3 text-white'>Nuestros productos</h1>
                        <IoPawOutline className='' size={40} color={'#fff'}/>
                    </div>
                    <p className='text-white'>Actuando como copacker en la fabricación de alimentos para animales, ofrecemos soluciones de alta calidad para nuestros socios, todos nuestros productos son balanceados y cumplen con los requisitos de los organismos de control. Contamos con alta tecnología en procesos industriales y nuestro portafolio incluye toda la línea de alimentos completos, alimentos específicos y productos masticables para mascotas.</p>
                    <Button onClick={()=> redirectProdutos()} className='w-100 border-0 mb-3 p-3 mt-4 text-center m-auto shadow-lg'style={{backgroundColor:'#491A76'}}><h4>Ver Todo...</h4></Button>
                </ProdutoDescricao>
            </Produtos>
            <Container>     
                <Customizacao className=''>
                    <img src={Pets} alt="Cachorrinho" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"/>
                    <Cards>
                        <div className='text-center mt-3 d-flex flex-row align-items-center justify-content-center' style={{backgroundColor:'transparent'}}>
                            <h1 className='me-3 text-muted'>Personalizaciones</h1>
                            <IoPawOutline className='text-muted' size={40} />
                        </div>
                        <Card data-aos='fade-up' data-aos-duration="2000" style={{ width: '100%' }} className='text-center border-0 mt-4 p-3 shadow-lg'>
                            <Card.Body className='d-flex align-items-center justify-content-start gap-3 w-100 p-2'>
                                <FaPaw className='' size={30} color={'#fff'}/>
                                <h3 className='text-white'>Línea Económica</h3>
                            </Card.Body>
                        </Card>
                        <Card data-aos='fade-up' data-aos-duration="2000" style={{ width: '100%' }} className='text-center border-0 mt-4 p-3 shadow-lg'>
                            <Card.Body className='d-flex align-items-center justify-content-start gap-3 w-100 p-2'>
                                <FaPaw className='' size={30} color={'#fff'}/>
                                <h3 className='text-white'>Línea principal</h3>
                            </Card.Body>
                        </Card>
                        <Card data-aos='fade-up' data-aos-duration="2000" style={{ width: '100%'}} className='text-center border-0 mt-4 p-3 shadow-lg'>
                            <Card.Body className='d-flex align-items-center justify-content-start gap-3 w-100 p-2'>
                                <FaPaw className='' size={30} color={'#fff'}/>
                                <h3 className='text-white'>Línea Premium</h3>
                            </Card.Body>
                        </Card>
                        <Card data-aos='fade-up' data-aos-duration="2000" style={{ width: '100%' }} className='text-center border-0 mt-4 p-3 shadow-lg'>
                            <Card.Body className='d-flex align-items-center justify-content-start gap-3 w-100 p-2'>
                                <FaPaw className='' size={30} color={'#fff'}/>
                                <h3 className='text-white'>Línea Premium</h3>
                            </Card.Body>
                        </Card>
                        <Card data-aos='fade-up' data-aos-duration="2000" style={{ width: '100%' }} className='text-center border-0 mt-4 p-3 shadow-lg'>
                            <Card.Body className='d-flex align-items-center justify-content-start gap-3 w-100 p-2'>
                                <FaPaw className='' size={30} color={'#fff'}/>
                                <h3 className='text-white'>Línea Premium Alta</h3>
                            </Card.Body>
                        </Card>
                        <Button data-aos='fade-up' data-aos-duration="2000" onClick={()=> redirectCustom()} className='w-100 border-0 mb-3 p-3 mt-4 text-center m-auto shadow-lg'style={{backgroundColor:'#F58525'}}><h4>Quieres saber más…</h4></Button>
                    </Cards>
                </Customizacao>
            </Container>
            <Patense className='w-100'>
                <img data-aos="fade-right" src={GrupoPatense} alt="Grupo Patense" style={{width:'60%'}} className='p-3 mt-4' />
                <Row className='w-100 p-2 gap-3'>
                    <Col data-aos='fade-up' data-aos-duration="2000" sm={10} xl={1} onClick={()=> redirectPatense()} className='m-auto img-xl bg-light rounded-3 p-3 d-flex align-items-center justify-content-center shadow-lg'>
                        <img src={PatenseImg} alt="Patense" style={{width:'30%'}} className='p-3'/>
                    </Col>
                    <Col data-aos='fade-up' data-aos-duration="2000" sm={10} xl={1} onClick={()=> redirectFarol()} className='m-auto bg-light rounded-3 p-3 d-flex align-items-center justify-content-center shadow-lg'>
                        <img src={FarolImg} alt="Farol" style={{width:'30%'}} className='p-3'/>
                    </Col>
                    <Col data-aos='fade-up' data-aos-duration="2000" sm={10} xl={1} className='m-auto bg-light rounded-3 p-3 d-flex align-items-center justify-content-center shadow-lg'>
                        <img src={PetsMellonImg} alt="Pets Mellon" style={{width:'30%'}} className='p-3'/>
                    </Col>
                    <Col data-aos='fade-up' data-aos-duration="2000" sm={10} xl={1} onClick={()=> redirectZoomies()} className='m-auto bg-light rounded-3 p-3 d-flex align-items-center justify-content-center shadow-lg'>
                        <img src={Zoomies} alt="Farol" style={{width:'20%'}} className='p-3'/>
                    </Col>
                  {/*   <Col data-aos='fade-up' data-aos-duration="2000" sm={10} xl={1} onClick={()=> redirectPatenseAgro()}  className='m-auto bg-light rounded-3 p-3 d-flex align-items-center justify-content-center shadow-lg'>
                        <img src={PatenseAgro} alt="Patense Agroecologia" style={{width:'40%'}} className='p-3'/>
                    </Col> */}
                </Row>
                <div className='w-100' style={{backgroundColor:'#F58525'}}>
                   <h1 style={{color:'#F58525'}}>.</h1>
                </div>
            </Patense>
            <Clientes data-aos='fade-up' data-aos-duration="2000">
                <div className='text-center mt-5 d-flex flex-row m-auto'>
                    <h1 className='me-3 text-white'>Nuestros clientes</h1>
                    <IoPawOutline className='' size={40} color={'#fff'}/>
                </div>
                <Carousel className='mt-3 carousel-lg text-dark p-5' style={{width: "100%"}}>
                        <Carousel.Item style={{color:'#000'}}>
                            <img
                            className="d-block w-100 img-carousel"
                            src={Balance}
                            alt="First slide"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 img-carousel"
                            src={Baw}
                            alt="First slide"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 img-carousel"
                            src={Purina}
                            alt="First slide"/>
                        </Carousel.Item>
                        <Carousel.Item  className=''>
                            <img
                            className="d-block w-100 img-carousel"
                            src={SpecialDog}
                            alt="First slide"/>
                        </Carousel.Item>
                </Carousel>
            </Clientes>
            <Certificacoes className='bg-white'>
                    <div className='d-flex flex-column text-center gap-2' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <h1 className="mb-2 p-0 m-0 text-left" style={{color:'#4A1976'}}>Certificaciones </h1>
                        <div className='d-flex align-items-center gap-2'>
                            <h1 className="mb-2 p-0 m-0 text-muted">en Curso</h1>
                            <IoPawOutline className='text-muted' size={40} color={'#'}/>
                        </div>
                    </div>
                    <img src="https://petsmellon.com.br/themes/pets/images/duns.jpg" alt="" data-aos='fade-up' data-aos-duration="3000"/>
                    <img src="https://petsmellon.com.br/themes/pets/images/GFSI.jpg" alt="" data-aos='fade-up' data-aos-duration="3000"/>
                    <img src="https://petsmellon.com.br/themes/pets/images/smeta.webp" alt="" data-aos='fade-up' data-aos-duration="3000"/>
            </Certificacoes>
            <BtnUp  href="#" className='position-fixed bottom-0 end-0 mb-2 me-3 btn p-3'><AiOutlineArrowUp size={25} style={{color:'white'}}/></BtnUp>
            <FooterESP/>
        </div>

    )
    
}