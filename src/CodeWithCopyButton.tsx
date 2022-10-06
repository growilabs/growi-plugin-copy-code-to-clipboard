// import { useState } from 'react';

const CopyButton = (): JSX.Element => {
  // const [count, setCount] = useState(0);

  return (
    <button className="btn btn-sm btn-outline-secondary">copy</button>
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
        <CopyButton />
      </>
    );
  };
};
