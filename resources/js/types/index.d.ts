export interface User {
    id: number
    name: string
    email: string
    email_verified_at: string
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User
    }
    transactions: {
        id: number
        description: string
        amount: number
        type: string
        category_id: number
        created_at: string
    }[]
    categories: {
        id: number
        category: string
    }[]
}

export interface Categories {
    id: number
    category: string
}
