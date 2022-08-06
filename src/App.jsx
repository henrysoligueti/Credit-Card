import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.scss';
import Card from './components/Card';
import Form from './components/Form';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <div className="d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-7 col-xs-9">
              <Card />
              <Form />
            </div>
          </div>
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
