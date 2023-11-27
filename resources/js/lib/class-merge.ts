import clsx, { ClassValue } from 'clsx'

import { twMerge } from 'tailwind-merge'

/**
 * Merges multiple class names into a single string.
 * @param inputs - The class names to merge.
 * @returns The merged class names as a string.
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(...inputs))
}
