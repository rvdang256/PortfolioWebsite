import Layout from './components/Layout';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path = 'about' element={<About/>} />
        <Route path = 'skills' element={<Skills/>} />
        <Route path = 'portfolio' element={<Portfolio/>} />

      </Route>

    </Routes>
    </>
  );
}

export default App;
