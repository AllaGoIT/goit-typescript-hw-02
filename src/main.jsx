import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx';

import ImageModal from './components/ImageModal/ImageModal.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>, <ImageModal/>
  </React.StrictMode>
)
