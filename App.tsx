import React from "react";

type AppProps = {
    children?: React.ReactNode;
};

const App: React.FC<AppProps> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default App;