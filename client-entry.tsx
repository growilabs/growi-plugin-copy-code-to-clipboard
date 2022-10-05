import React from 'react';
// import ReactDOM from 'react-dom/client'
// import App from './App'
import './src/index.css';

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

declare const growiFacade: any;

export const activateJstest = (): void => {
  growiFacade.markdownRenderer.optionsGenerators.customGeneratePreviewOptions = (pagePath: string, config: any) => {
    const options = growiFacade.markdownRenderer.optionsGenerators.generatePreviewOptions(pagePath, config);
    options.components.code = () => 'code';
    options.components.lsx = () => <button>lsx</button>;
    return options;
  };
};

(window as any).growiFacade = {
  activateJstest,
};
