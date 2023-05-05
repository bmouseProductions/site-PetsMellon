import { createBrowserRouter } from "react-router-dom";

import { Conheca } from "./pages/Conheca/index";
import { ConhecaEN } from "./pages/Conheca/indexEN";
import { ConhecaESP } from "./pages/Conheca/indexESP";

import { Home } from "./pages/Home/index";
import { HomeEN } from "./pages/Home/indexEN";
import { HomeESP } from "./pages/Home/indexESP";

import { Produto } from "./pages/Produtos/index";
import { ProdutoEN } from "./pages/Produtos/indexEN";
import { ProdutoESP } from "./pages/Produtos/indexESP";

import { Servico } from "./pages/Servicos/index";
import { ServicoEN } from "./pages/Servicos/indexEN";
import { ServicoESP } from "./pages/Servicos/indexESP";

import { Customizacoes } from "./pages/Customizacoes/index";
import { CustomizacoesEN } from "./pages/Customizacoes/indexEN";
import { CustomizacoesESP } from "./pages/Customizacoes/indexESP";

import { Parceria } from "./pages/Parceria/index";
import { ParceriaEN } from "./pages/Parceria/indexEN";
import { ParceriaESP } from "./pages/Parceria/indexESP";

import { Blog } from "./pages/Blog";

import { Contato } from "./pages/Contato/index";
import { ContatoEN } from "./pages/Contato/indexEN";
import { ContatoESP } from "./pages/Contato/indexESP";

import { Error } from "./pages/Error";


import { MyPDFViewer } from "./pages/PlanoDeImplementação";
import { MyPDFViewerAmbiental } from "./pages/PoliticaAmbiental";
import { SinglePage } from "./pages/SinglePage";
import { ErrorEN } from "./pages/Error/indexEN";
import { ErrorESP } from "./pages/Error/indexESP";


export const Router = createBrowserRouter([

    {
      path:'/site',
      element:<Home/>
    },
    {
      path:'/site/en',
      element:<HomeEN/>
    },
    {
      path:'/site/esp',
      element:<HomeESP/>
    },
    {
      path:'/site/conheca',
      element:<Conheca/>
    },
    {
      path:'/site/conheca-en',
      element:<ConhecaEN/>
    },
    {
      path:'/site/conheca-esp',
      element:<ConhecaESP/>
    },
    {
      path:'/site/produtos',
      element:<Produto/>
    },
    {
      path:'/site/produtos-en',
      element:<ProdutoEN/>
    },
    {
      path:'/site/produtos-esp',
      element:<ProdutoESP/>
    },
    {
      path:'/site/servicos',
      element:<Servico/>
    },
    {
      path:'/site/servicos-en',
      element:<ServicoEN/>
    },
    {
      path:'/site/servicos-esp',
      element:<ServicoESP/>
    },
    {
      path:'/site/customizacoes',
      element:<Customizacoes/>
    },
    {
      path:'/site/customizacoes-en',
      element:<CustomizacoesEN/>
    },
    {
      path:'/site/customizacoes-esp',
      element:<CustomizacoesESP/>
    },
    {
      path:'/site/parceria',
      element:<Parceria/>
    },
    {
      path:'/site/parceria-en',
      element:<ParceriaEN/>
    },
    {
      path:'/site/parceria-esp',
      element:<ParceriaESP/>
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
      path:'/site/contato-en',
      element:<ContatoEN/>
    },
    {
      path:'/site/contato-esp',
      element:<ContatoESP/>
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
    },

])
  
