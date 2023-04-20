import GlobalReducer from "./GlobalReducer";

const { createContext, useReducer } = require("react");

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {

    const initialState = {
        todos: [],
        edit: {
            todo: {},
            isEdit: false
        }
    }

    const [state, dispatch] = useReducer(GlobalReducer, initialState)




    return (
        <GlobalContext.Provider value={{
            ...state,
            dispatch
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext