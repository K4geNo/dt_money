import { ReactNode, createContext, useMemo, useState } from 'react'

import { Categories } from '@/types'

interface CategoryContextProps {
    categories: Categories[]
    setCategories: (categories: Categories[]) => void
}

const INITIAL_STATE: CategoryContextProps = {
    categories: [],
    setCategories: () => {
        throw new Error('setCategories() not implemented')
    },
}

export const CategoryContext =
    createContext<CategoryContextProps>(INITIAL_STATE)

interface CategoryProviderProps {
    children: ReactNode
}

export const CategoryProvider = ({ children }: CategoryProviderProps) => {
    const [categories, setCategories] = useState<Categories[]>([])

    const contextValue = useMemo(
        () => ({ categories, setCategories }),
        [categories, setCategories],
    )

    return (
        <CategoryContext.Provider value={contextValue}>
            {children}
        </CategoryContext.Provider>
    )
}
