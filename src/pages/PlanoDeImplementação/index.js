
import planoDeImplementação from '../../assets/plano-de-implementacao.pdf'

export const MyPDFViewer= () => {
  return (
    <embed className='w-100 vh-100' src={planoDeImplementação} type="application/pdf" width="100%"/>
  );
};
