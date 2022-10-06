import innerText from 'react-innertext';

const CopyButton = ({ text }: { text: string }): JSX.Element => {
  const clickHandler = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <button className="btn btn-sm btn-outline-secondary" onClick={clickHandler}>copy</button>
  );
};

export const withCopyButton = (Code: React.FunctionComponent<any>): React.FunctionComponent<any> => {
  return ({ children, inline, ...props }) => {
    if (inline) {
      return <Code {...props} inline>{children}</Code>;
    }

    return (
      <>
        <Code {...props}>{children}</Code>
        <CopyButton text={innerText(children)} />
      </>
    );
  };
};
