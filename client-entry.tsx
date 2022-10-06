// import React from 'react';
// import ReactDOM from 'react-dom/client'
// import App from './App'
import './src/index.css';

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

declare const growiFacade: any;

const activate = (): void => {
  const { optionsGenerators } = growiFacade.markdownRenderer;
  optionsGenerators.customGeneratePreviewOptions = (pagePath: string, config: any) => {
    const options = optionsGenerators.generatePreviewOptions(pagePath, config);
    options.components.code = () => 'code';
    options.components.lsx = () => <button>lsx</button>;
    return options;
  };
};

const deactivate = (): void => {
};

// register activate
if ((window as any).pluginActivators == null) {
  (window as any).pluginActivators = {};
}
(window as any).pluginActivators['growi-plugin-jstest'] = {
  activate,
  deactivate,
};
