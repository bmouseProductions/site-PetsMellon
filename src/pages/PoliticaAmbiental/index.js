import politicaAmbiental from '../../assets/politica-ambiental.pdf'

export const MyPDFViewerAmbiental  = () => {
  return (
    <embed className='w-100 vh-100' src={politicaAmbiental} type="application/pdf" width="100%"/>
  );
};
