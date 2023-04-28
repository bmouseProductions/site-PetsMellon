import { BtnUp } from '../../components/style'
import { AiOutlineArrowUp } from 'react-icons/ai';

export const ButtonUp = () =>{
    return(
        <BtnUp  href="#" className='position-fixed bottom-0 end-0 mb-2 me-3 btn p-3'><AiOutlineArrowUp size={25} style={{color:'white'}}/></BtnUp>
    )
}