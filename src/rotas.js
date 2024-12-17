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
import { SinglePage } from "./pages/SinglePage";

import { Contato } from "./pages/Contato/index";
import { ContatoEN } from "./pages/Contato/indexEN";
import { ContatoESP } from "./pages/Contato/indexESP";

import { Error } from "./pages/Error";

import { MyPDFViewer } from "./pages/PlanoDeImplementação";
import { MyPDFViewerAmbiental } from "./pages/PoliticaAmbiental";
import { ErrorEN } from "./pages/Error/indexEN";
import { ErrorESP } from "./pages/Error/indexESP";
import { Etica } from "./pages/Etica/Etica";
import SejaUmParceiro from "./pages/Parceiro/SejaUmParceiro";
import BeOurParner from "./pages/Parner/BeOurParner";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/en",
    element: <HomeEN />,
  },
  {
    path: "/esp",
    element: <HomeESP />,
  },
  {
    path: "/conheca",
    element: <Conheca />,
  },
  {
    path: "/conheca-en",
    element: <ConhecaEN />,
  },
  {
    path: "/conheca-esp",
    element: <ConhecaESP />,
  },
  {
    path: "/produtos",
    element: <Produto />,
  },
  {
    path: "/produtos-en",
    element: <ProdutoEN />,
  },
  {
    path: "/produtos-esp",
    element: <ProdutoESP />,
  },
  {
    path: "/servicos",
    element: <Servico />,
  },
  {
    path: "/servicos-en",
    element: <ServicoEN />,
  },
  {
    path: "/servicos-esp",
    element: <ServicoESP />,
  },
  {
    path: "/customizacoes",
    element: <Customizacoes />,
  },
  {
    path: "/customizacoes-en",
    element: <CustomizacoesEN />,
  },
  {
    path: "/customizacoes-esp",
    element: <CustomizacoesESP />,
  },
  {
    path: "/parceria",
    element: <Parceria />,
  },
  {
    path: "/parceria-en",
    element: <ParceriaEN />,
  },
  {
    path: "/parceria-esp",
    element: <ParceriaESP />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/:url_amigavel",
    element: <SinglePage />,
  },
  {
    path: "/contato",
    element: <Contato />,
  },
  {
    path: "/contato-en",
    element: <ContatoEN />,
  },
  {
    path: "/codigo-de-etica",
    element: <Etica />,
  },
  {
    path: "/contato-esp",
    element: <ContatoESP />,
  },
  {
    path: "/pdf-sustentabilidade",
    element: <MyPDFViewer />,
  },
  {
    path: "/pdf-ambiental",
    element: <MyPDFViewerAmbiental />,
  },
  {
    path: "/single-page/:url_amigavel",
    element: <SinglePage />,
  },
  {
    path: "/seja-um-parceiro",
    element: <SejaUmParceiro />,
  },
  {
    path: "/be-our-partner",
    element: <BeOurParner />,
  },
  /*   {
    path: "*",
    element: <Error />,
  }, */
]);
