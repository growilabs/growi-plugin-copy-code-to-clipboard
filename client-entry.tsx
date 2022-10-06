import { withCopyButton } from './src/CodeWithCopyButton';

declare const growiFacade: any;

const activate = (): void => {
  const { optionsGenerators } = growiFacade.markdownRenderer;
  optionsGenerators.customGeneratePreviewOptions = (pagePath: string, config: any) => {
    const options = optionsGenerators.generatePreviewOptions(pagePath, config);
    const Code = options.components.code;

    // replace
    options.components.code = withCopyButton(Code);

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
