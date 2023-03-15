import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'
import { Container, Produtos, ProdutoDescricao } from '../../components/style';
import { Carousel } from 'react-bootstrap';
import { IoPawOutline } from 'react-icons/io5';
import ProdutoImg from '../../assets/image/Costela.png'
import ProdutoImg2 from '../../assets/image/Bifinho Carne.png'
import ProdutoImg3 from '../../assets/image/Ração Úmida.png'

export const Produto = ()=>{
    return (
        <div>
            <Header/>
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
                        <Carousel.Item>
                            <img
                            className="d-block w-100 img-carousel"
                            src={ProdutoImg2}
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
                            src={ProdutoImg2}
                            alt="First slide"/>
                        </Carousel.Item>
                </Carousel>
                <ProdutoDescricao>
                    <div className='text-center mt-5 d-flex flex-row m-auto'>
                        <h1 className='me-3 text-white'>Nossos Produtos</h1>
                        <IoPawOutline className='' size={40} color={'#fff'}/>
                    </div>
                    <p className='text-white text-center'>Atuando com copacker na fabricação de alimentos para animais, oferecemos soluções de altíssima qualidade para os nossos parceiros.Todos os nossos produtos são balanceados e estão de acordo com as exigências dos órgãos fiscalizadores. Possuimos alta tecnologia nos processosindustriais e o nosso portifólio engloba toda a linha de alimentos completos, alimentos específicos e os produtos mastigáveis destinados aos animais de companhia.</p>
                </ProdutoDescricao>
            </Produtos>
            <Footer/>
        </div>
    );
}