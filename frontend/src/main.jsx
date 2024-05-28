import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App'
import './index.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Accounts from './pages/Accounts'
import Contacts from './pages/Contacts'
import Opportunities from './pages/Opportunities'
import Orders from './pages/Orders'
import Quotes from './pages/Quotes'
import Invoices from './pages/Invoices'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/" exact component={Home} />
        <Route path="/accounts" component={Accounts} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/opportunities" component={Opportunities} />
        <Route path="/orders" component={Orders} />
        <Route path="/quotes" component={Quotes} />
        <Route path="/invoices" component={Invoices} />
    </Routes>
  </Router>
);