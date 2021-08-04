
import './App.css';
import {useRoutes} from 'react-router-dom';
import {ScrollToTop} from './components/ScrollToTop';
import {Loader} from './components/Loader';
import { lazy,Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = lazy(()=>import('./pages/Home/Home'));
const Error = lazy(()=>import('./pages/Error/Error'));
const Word = lazy(()=>import('./pages/Word/Word'));



function App() {

  const mainRoutes = [
    { path: '/', element: <Home /> },
    {path : "/error",element : <Error/>},
    {path : '/word/:word',element : <Word/>}
  ]


  const mainRouting = useRoutes(mainRoutes);

  return (
    <>
    <ScrollToTop />
    <Suspense fallback={<Loader />}>

    {mainRouting}
    </Suspense>
  </>
  );
}

export default App;
