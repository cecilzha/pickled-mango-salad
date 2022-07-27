import React from 'react';

type Props = {
    children: JSX.Element
}

const Controls : React.FC<Props> = ({ children }) => {
    return <div>{children}</div>
}

export default Controls;
