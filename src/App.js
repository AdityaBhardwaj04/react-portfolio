import './App.scss';
import Home from './components/Home';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
