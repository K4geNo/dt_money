import { ReactNode, createContext, useState } from "react";

interface TransactionProps {
    description: string
    amount: number
    category: string
    type: string
}

interface TransactionContextProps {
    state: TransactionProps[]
    setState: React.Dispatch<React.SetStateAction<TransactionProps[]>>
}

const DEFAULT_VALUES: TransactionContextProps  = {
    state: [{
        description: '',
        amount: 0,
        category: '',
        type: "income"
    }],
    setState: () => {}
}

export const TransactionContext = createContext<TransactionContextProps>(DEFAULT_VALUES)

interface TransactionProviderProps {
    children: ReactNode
}

export const TransactionProvider = ({ children }: TransactionProviderProps) => {
    const [state, setState] = useState(DEFAULT_VALUES.state)

    return (
        <TransactionContext.Provider
            value={{
                state,
                setState
            }}
        >
            {children}
        </TransactionContext.Provider>
    )
}
