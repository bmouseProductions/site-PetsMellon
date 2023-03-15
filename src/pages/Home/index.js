import {Header} from '../../components/Header'
import { Container, Dados,Sobre, Customizacao, Produtos, ProdutoDescricao, Cards, Servicos, Certificacoes } from '../../components/style'
import BannerSobre from '../../assets/image/bannerSobre.png'
import BannerSobre2 from '../../assets/image/grupo-patense.png'
import Carousel from 'react-bootstrap/Carousel';
import { Button, Card } from 'react-bootstrap';
import { TfiLocationPin } from 'react-icons/tfi';
import { GiSittingDog } from 'react-icons/gi';
import { FaCat } from 'react-icons/fa';
import { SiMaterialdesignicons } from 'react-icons/si';
import QuemSomos from '../../assets/image/sobrepets.webp'
import { IoPawOutline } from 'react-icons/io5';
import { FaPaw } from 'react-icons/fa';
import ProdutoImg from '../../assets/image/Costela.png'
import ProdutoImg2 from '../../assets/image/Bifinho Carne.png'
import ProdutoImg3 from '../../assets/image/Ração Úmida.png'
import {Footer} from '../../components/Footer/index'
import Accordion from 'react-bootstrap/Accordion';
import Pets from '../../assets/image/dogpets2.webp'

export const Home = ()=>{
    return(
        <div className=''>
            <Header/>
            <Carousel className='mt-3 carousel' style={{width: "100%"}}>
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
            <Container>
                <Dados className='text-white'>
                    <Card className='d-flex align-items-center justify-content-center p-2 rounded-0 rounded-top border-0 border-bottom-1' style={{backgroundColor:'#F52369'}}>
                        <Card.Body className='d-flex align-items-center justify-content-center gap-3 text-center ' style={{fontSize:'0.8rem'}}> <TfiLocationPin size={36}/>Av. Emílio Arroio Hernades, 3299 - Pozzobon, Votuporanga - SP, 15503-027</Card.Body>
                    </Card>

                    <Card className='d-flex align-items-center justify-content-center p-2 rounded-0 border-0' style={{backgroundColor:'#491A76'}}>
                        <Card.Body className='d-flex align-items-center justify-content-center gap-3'><GiSittingDog size={26}/>Tudo para o seu Cachorro.</Card.Body>
                    </Card>

                    <Card className='d-flex align-items-center justify-content-center p-2 rounded-0 border-0' style={{backgroundColor:'#491A76'}}>
                        <Card.Body className='d-flex align-items-center justify-content-center gap-3'><FaCat size={26}/>Tudo para o seu Gato.</Card.Body>
                    </Card>

                    <Card className='d-flex align-items-center justify-content-center p-2 border-0 rounded-0 rounded-bottom' style={{backgroundColor:'#F52369',}}>
                        <Card.Body className='d-flex align-items-center justify-content-center gap-3'> <SiMaterialdesignicons size={26}/>Tudo para a sua Marca.</Card.Body>
                    </Card>
                </Dados>
                <Sobre className='w-100'>
                    <img src={QuemSomos} alt="" className='rounded-1' style={{width:'100%'}} />
                    <Card style={{ width: '100%' }} className='text-left border-0 mt-4 p-0 m-0 mb-4'>
                        <Card.Body className='w-100 p-0'>
                            <div className='d-flex text-center gap-2'>
                                <h1 className="mb-2 p-0 m-0 text-left" style={{color:'#FF9200'}}>Sobre</h1>
                                <h1 className="mb-2 p-0 m-0 text-muted ">Nós</h1>
                            </div>
                            <Card.Text className='text-dark lh-6 p-0'>Um novo negócio, mas há 50 anos com a mesma qualidade! Voltada para os produtos PET, nossa nova unidade traz a qualidade, inovação e sustentabilidade já marcados no DNA do Grupo Patense. Trabalhamos como Copackers para grandes marcas do Brasil e do mundo, produzindo inúmeros produtos para cães e gatos com excelência..</Card.Text>
                            <Button className='w-100 border-0 mb-3 p-3 mt-4 text-center m-auto'style={{backgroundColor:'#491A76'}}><h4>Saiba Mais</h4></Button>
                          
                        </Card.Body>
                    </Card>
                </Sobre> 
            </Container>
            <Produtos>
                <Carousel className='mt-3 carousel-md' style={{width: "100%"}}>
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
                <ProdutoDescricao>
                    <div className='text-center mt-5 d-flex flex-row m-auto  '>
                        <h1 className='me-3 text-white'>Nossos Produtos</h1>
                        <IoPawOutline className='' size={40} color={'#fff'}/>
                    </div>
                    <p className='text-white'>Atuando com copacker na fabricação de alimentos para animais, oferecemos soluções de altíssima qualidade para os nossos parceiros.Todos os nossos produtos são balanceados e estão de acordo com as exigências dos órgãos fiscalizadores. Possuimos alta tecnologia nos processosindustriais e o nosso portifólio engloba toda a linha de alimentos completos, alimentos específicos e os produtos mastigáveis destinados aos animais de companhia.</p>
                </ProdutoDescricao>
            </Produtos>
            <Customizacao>
                <Cards>
                    <div className='text-center mt-3 d-flex flex-row align-items-center justify-content-center' style={{backgroundColor:'transparent'}}>
                        <h1 className='me-3 text-muted'>Customizações</h1>        
                        <IoPawOutline className='text-muted' size={40} />
                    </div>
                    <Card style={{ width: '100%' }} className='text-center border-0 mt-4 p-3'>
                        <Card.Body className='d-flex align-items-center justify-content-start gap-3 w-100 p-2'>
                            <FaPaw className='' size={30} color={'#fff'}/>
                            <h3 className='text-white'>Linha Econômica</h3>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '100%' }} className='text-center border-0 mt-4 p-3'>
                        <Card.Body className='d-flex align-items-center justify-content-start gap-3 w-100 p-2'>
                            <FaPaw className='' size={30} color={'#fff'}/>
                            <h3 className='text-white'>Linha Mainstream</h3>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '100%'}} className='text-center border-0 mt-4 p-3'>
                        <Card.Body className='d-flex align-items-center justify-content-start gap-3 w-100 p-2'>
                            <FaPaw className='' size={30} color={'#fff'}/>
                            <h3 className='text-white'>Linha Premium</h3>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '100%' }} className='text-center border-0 mt-4 p-3'>
                        <Card.Body className='d-flex align-items-center justify-content-start gap-3 w-100 p-2'>
                            <FaPaw className='' size={30} color={'#fff'}/>
                            <h3 className='text-white'>Linha High Premium</h3>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '100%' }} className='text-center border-0 mt-4 p-3'>
                        <Card.Body className='d-flex align-items-center justify-content-start gap-3 w-100 p-2'>
                            <FaPaw className='' size={30} color={'#fff'}/>
                            <h3 className='text-white'>Linha High Premium</h3>
                        </Card.Body>
                    </Card>
                    <Button className='w-100 border-0 mb-3 p-3 mt-4 text-center m-auto'style={{backgroundColor:'#F58525'}}><h4>Saiba Mais</h4></Button>
                </Cards>
            </Customizacao>
            <Certificacoes className=''>
                    <div className='d-flex flex-column text-center gap-2'>
                        <h1 className="mb-2 p-0 m-0 text-left" style={{color:'#4A1976'}}>Certificações</h1>
                        <div className='d-flex align-items-center gap-2'>
                            <h1 className="mb-2 p-0 m-0 text-muted">em Cursos</h1>
                            <IoPawOutline className='text-muted' size={40} color={'#'}/>
                        </div>
                    </div>
                    <img src="https://petsmellon.com.br/themes/pets/images/duns.jpg" alt="" />
                    <img src="https://petsmellon.com.br/themes/pets/images/GFSI.jpg" alt="" />
                    <img src="https://petsmellon.com.br/themes/pets/images/smeta.webp" alt="" />
            </Certificacoes>
            <Footer/>
        </div>
    )
}