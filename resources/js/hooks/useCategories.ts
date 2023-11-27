import { CategoryContext } from '@/Context/CategoryContext'
import { useContext } from 'react'

/**
 * Custom hook that provides access to the category context.
 * Throws an error if used outside of a CategoryProvider.
 * @returns The category context.
 */
export const useCategories = () => {
    const context = useContext(CategoryContext)
    if (!context) {
        throw new Error('useCategories must be used within a CategoryProvider')
    }
    return context
}
