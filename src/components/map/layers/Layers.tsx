import React from 'react';

type Props = {
    children: JSX.Element | JSX.Element[]
}

const Layers : React.FC<Props> = ({ children }) => {
    return(
        <div>
            {children}
        </div>
    )
};

export default Layers;

