import { Input } from '../Input'

interface SearchProps {
    setSearch: (search: string) => void
}

export function Search({ setSearch }: SearchProps) {
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const search = e.target.value

        setSearch(search)
    }

    return (
        <div className="flex w-full mt-16 gap-x-4">
            <Input
                className="flex-1 w-full border-none focus:ring focus:ring-green-light"
                placeholder="Busque por uma transação"
                onChange={(e) => handleSearch(e)}
            />
        </div>
    )
}
