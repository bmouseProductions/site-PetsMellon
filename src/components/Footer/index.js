import Logo from '../../assets/image/logoBlack.png'

import { BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { Container } from '../../components/style';



export const Footer = ()=>{
    return (
        <div style={{backgroundColor:'#F52369'}} >
            <Container className='text-white d-flex flex-column gap-3 p-3'>
                <div className='d-flex align-items-center justify-content-center gap-3 mt-3'>
                    <a href="https://www.instagram.com/petsmellon/" target={'_blank'} className='text-white '>
                        <BsInstagram size={30}/>
                    </a>
                    <a href="https://www.facebook.com/Pets-Mellon-112578531217330" target={'_blank'}  className='text-white '>
                        <AiOutlineFacebook size={35}/>
                    </a>
                </div>
                <span className='text-center mb-3'>© Pets Mellon 2023. Todos os direitos reservados. Desenvolvido por:<a href="https://www.bmouseproductions.com/" target={'_blank'} className='text-dark'> BMouse Productions</a></span>
            </Container>
        </div>
    );
}