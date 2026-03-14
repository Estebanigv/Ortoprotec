/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Protesis from './pages/Protesis';
import Ortesis from './pages/Ortesis';
import Plantillas from './pages/Plantillas';
import Calzados from './pages/Calzados';
import Patients from './pages/Patients';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Agenda from './pages/Agenda';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="nosotros" element={<About />} />
          <Route path="productos" element={<Products />} />
          <Route path="productos/protesis" element={<Protesis />} />
          <Route path="productos/ortesis" element={<Ortesis />} />
          <Route path="productos/plantillas" element={<Plantillas />} />
          <Route path="productos/calzados" element={<Calzados />} />
          <Route path="pacientes" element={<Patients />} />
          <Route path="testimonios" element={<Testimonials />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="agenda" element={<Agenda />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
