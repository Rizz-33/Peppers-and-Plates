import { createContext } from "react";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {


    const contextValue = {
        
    }
    return (
        <StoreContextProvider value={contextValue}>
            {props.children}
        </StoreContextProvider>
    )
}

export default StoreContextProvider;