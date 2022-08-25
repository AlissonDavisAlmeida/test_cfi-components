import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ResourceLabelsProvider } from './context/resourceLabels/ResourceLabelsContext';
import { ResourceMessagesProvider } from './context/resourceMessages/ResourceMessagesContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ResourceLabelsProvider>
      <ResourceMessagesProvider>

        <App />
      </ResourceMessagesProvider>
    </ResourceLabelsProvider>
  </React.StrictMode>
);

