import { Button, Card } from "react-bootstrap";
import { Container, Sobre } from "../../components/style";
import QuemSomos from '../../assets/image/sobrepets.webp'
import { Header } from "../../components/Header";
import { Footer } from '../../components/Footer'

export const Conheca = ()=>{
    return (
        <div>
            <Header/>
            <Container>
                <Sobre className='w-100'>
                    <img src={QuemSomos} alt="" className='rounded-1' style={{width:'100%'}} />
                    <Card style={{ width: '100%' }} className='text-left border-0 mt-4 p-0 m-0 mb-4'>
                        <Card.Body className='w-100 p-0'>
                            <div className='d-flex text-center gap-2'>
                                <h1 className="mb-2 p-0 m-0 text-left" style={{color:'#FF9200'}}>Sobre</h1>
                                <h1 className="mb-2 p-0 m-0 text-muted">Nós</h1>
                            </div>
                            <Card.Text className='text-dark lh-6 p-0'>Um novo negócio, mas há 50 anos com a mesma qualidade! Voltada para os produtos PET, nossa nova unidade traz a qualidade, inovação e sustentabilidade já marcados no DNA do Grupo Patense. Trabalhamos como Copackers para grandes marcas do Brasil e do mundo, produzindo inúmeros produtos para cães e gatos com excelência..</Card.Text>
                            <Button className='w-100 border-0 mb-3 p-2 mt-4 text-center m-auto me-3'style={{backgroundColor:'#00B494'}}><h4>Política Ambiental</h4></Button>
                            <Button className='w-100 border-0 mb-3 p-2 mt-4 text-center m-auto'style={{backgroundColor:'#00B494'}}><h4>Plano de implementação</h4></Button>
                        </Card.Body>
                    </Card>
                </Sobre>
            </Container>
            <Footer/>
        </div>
    );
}