import { createBrowserRouter } from "react-router-dom";
import { Conheca } from "./pages/Conheca";
import { Home } from "./pages/Home";
import { Produto } from "./pages/Produtos";
import { Servico } from "./pages/Servicos";
import { Customizacoes } from "./pages/Customizacoes";
import { Parceria } from "./pages/Parceria";
import { Blog } from "./pages/Blog";
import { Contato } from "./pages/Contato";
import { Error } from "./pages/Error";
import { MyPDFViewer } from "./pages/PlanoDeImplementação";
import { MyPDFViewerAmbiental } from "./pages/PoliticaAmbiental";
import { SinglePage } from "./pages/SinglePage";


export const Router = createBrowserRouter([

    {
      path:'/site',
      element:<Home/>
    },
    {
      path:'/site/conheca',
      element:<Conheca/>
    },
    {
      path:'/site/produtos',
      element:<Produto/>
    },
    {
      path:'/site/servicos',
      element:<Servico/>
    },
    {
      path:'/site/customizacoes',
      element:<Customizacoes/>
    },
    {
      path:'/site/parceria',
      element:<Parceria/>
    },
    {
      path:'/site/blog',
      element:<Blog/>
    },
    {
      path:'/site/contato',
      element:<Contato/>
    },
    {
      path:'/site/pdf-sustentabilidade',
      element:<MyPDFViewer/>
    },
    {
      path:'/site/pdf-ambiental',
      element:<MyPDFViewerAmbiental/>
    },
    {
      path:'/site/single-page',
      element:<SinglePage/>
    },
    {
      path:'*',
      element:<Error/>
    }

])
  
