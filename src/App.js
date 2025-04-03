import logo from './logo.svg';
import './App.css';
import ListBusesComponet from './components/ListBusesComponent';
import HeaderComponet from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBusesComponent from './components/AddBusesComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponet/>

        <div className='container'>
          <Routes>
            <Route exact path='/' element = {<ListBusesComponet />}></Route>
            <Route exact path='/buses' element = {<ListBusesComponet />}></Route>
            <Route exact path='/add-bus' element = {<AddBusesComponent />}></Route>
            <Route exact path='/edit-bus/:id' element = {<AddBusesComponent />}></Route>

          </Routes>

        </div>
        <FooterComponent />

      </BrowserRouter>
    </div>
  );
}

export default App;
