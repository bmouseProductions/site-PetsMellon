import { Button, Card, Row, Col } from "react-bootstrap";
import { Container, Sobre } from "../../components/style";
import QuemSomos from '../../assets/image/sobrepets.webp'
import { HeaderESP } from "../../components/Header/indexESP";
import { FooterESP } from '../../components/Footer/indexESP'
import { AiOutlineCheck } from 'react-icons/ai';
import { ButtonUp } from "../../components/BtnUp";

export const ConhecaESP = ()=>{

    return (
        <div className="bg-light d-flex flex-column justify-content-between fade-in w-100 ">
            <HeaderESP/>
            <Container className="">
                <Sobre className='w-100' data-aos='fade-up' data-aos-duration="2000">
                    <img src={QuemSomos} alt="" className='rounded-1' style={{width:'100%'}} />
                    <Card style={{ width:'100%' }} className='text-left border-0 mt-4 p-0 m-0 mb-4'>
                        <Card.Body className='w-100 p-0'>
                            <div className='d-flex text-center gap-2'>
                                <h1 className="mb-2 p-0 m-0 text-left" style={{color:'#FF9200'}}>Sobre</h1>
                                <h1 className="mb-2 p-0 m-0 text-muted ">Nosotros</h1>
                            </div>
                            <Card.Text className='text-dark lh-6 p-0'>¡Un negocio nuevo, pero desde hace 50 años con la misma calidad! Enfocada en productos PET, nuestra nueva unidad trae la calidad, innovación y sustentabilidad ya marcadas en el ADN del Grupo Patense. Trabajamos como Copackers para las principales marcas de Brasil y del mundo, produciendo con excelencia numerosos productos para perros y gatos.</Card.Text>
                        </Card.Body>
                    </Card>
                </Sobre> 
            </Container>
            <div className='p-0 m-0' style={{backgroundColor:'#f58525'}}>
                <Row className="gap-3 p-3 d-flex justify-content-center w-100 m-0">
                    <h1 className="text-white text-center">
Mascotas de calidad Mellón
</h1>
                    <Col sm={12} lg={5} className="d-flex flex-column p-4 gap-3 rounded-5 " style={{backgroundColor:'#4a1976'}} data-aos="fade-up">
                        <h3 className="text-center" style={{color:"#f58525"}}>
Mascotas de calidad Mellón
</h3>
                        <div className="d-flex flex-column gap-2 text-white">
                            <span><strong style={{color:"#f58525"}}>Zona Industrial: </strong> 7500 m</span>
                            <span><strong style={{color:"#f58525"}}>Número de empleados:</strong> 235 empleados</span>
                            <span><strong style={{color:"#f58525"}}>Ciudad:</strong> Votuporanga - SP</span>
                        </div>
                        <h3 className="text-center" style={{color:"#f58525"}}>Capacidad de  producción</h3>
                        <div className="d-flex flex-column gap-2  text-white">
                            <span><strong style={{color:"#f58525"}}>Snacks (Snacks): </strong> 1500 ton/año</span>
                            <span><strong style={{color:"#f58525"}}>Partes del Cuerpo (Bovinos, Porcinos, Aves y Pescados): </strong> 2.000 ton/año</span>
                            <span><strong style={{color:"#f58525"}}>Alimentos Húmedos (Enlatados):</strong> 4.800 ton/año</span>
                            <span><strong style={{color:"#f58525"}}>Alimento Húmedo (Bolsa): </strong> 4.800 ton/año</span>
                        </div>
                    </Col>

                    <Col sm={12}  lg={5} className="d-flex flex-column p-4 gap-3 rounded-5" style={{backgroundColor:'#4a1976'}} data-aos="fade-up">
                        <h3 className="text-center" style={{color:"#f58525"}}>Capacidad de producción</h3>
                        <div className="d-flex flex-column text-white gap-2">
                            <span><AiOutlineCheck size={20}/>Producción y comercialización de alimentos completos e incompletos para mascotas.</span>
                            <span><AiOutlineCheck size={20}/>Producción y comercialización de ingredientes para la alimentación animal.</span>
                            <span><AiOutlineCheck size={20}/> Snacks para perros y gatos.</span>
                            <span><strong style={{color:"#f58525"}}>Partes del cuerpo:</strong>bovino, porcino, pescado, fémur, espinilla, costilla, rótula, varilla, tráquea, esófago, orejas...</span>
                            <span><strong style={{color:"#f58525"}}>Enlatados:</strong> 100g y 280g</span>
                            <span><strong style={{color:"#f58525"}}>Bolsa: </strong>85g y 100g</span>
                        </div>
                    </Col>
                </Row>
            </div>
            <ButtonUp></ButtonUp>
            <FooterESP/>
        </div>
    );
}