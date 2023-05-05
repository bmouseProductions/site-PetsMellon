import { BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { Container } from '../style';



export const FooterEN = ()=>{
    return (
        <div style={{backgroundColor:'#F52369'}} >
            <Container className='text-white d-flex flex-column gap-2 p-3'>
                <div className='d-flex align-items-center justify-content-center gap-3 mt-3'>
                    <a href="https://www.instagram.com/petsmellon/" target={'_blank'} className='text-white '>
                        <BsInstagram size={30}/>
                    </a>
                    <a href="https://www.facebook.com/Pets-Mellon-112578531217330" target={'_blank'}  className='text-white '>
                        <AiOutlineFacebook size={35}/>
                    </a>
                </div>
                <span className='text-center mb-3 fs-5'>All rights reserved. Developed by:<a href="https://www.bmouseproductions.com/" target={'_blank'} className='text-white fs-5'> Bmouse Productions</a></span>
            </Container>
        </div> 
    );
}  