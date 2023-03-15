import { createBrowserRouter } from "react-router-dom";
import { Conheca } from "./pages/Conheca";
import { Home } from "./pages/Home";
import { Produto } from "./pages/Produtos";
import { Servico } from "./pages/Servicos";
import { Customizacoes } from "./pages/Customizacoes";
import { Parceria } from "./pages/Parceria";
import { Blog } from "./pages/Blog";


export const Router = createBrowserRouter([

    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/conheca',
      element:<Conheca/>
    },
    {
      path:'/produtos',
      element:<Produto/>
    },
    {
      path:'/servicos',
      element:<Servico/>
    },
    {
      path:'/customizacoes',
      element:<Customizacoes/>
    },
    {
      path:'/parceria',
      element:<Parceria/>
    },
    {
      path:'/blog',
      element:<Blog/>
    },

])
  
