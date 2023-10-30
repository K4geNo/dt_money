import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../Dialog";

export function TransactionModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="bg-green-500 p-2 rounded-md text-white">Nova transação</button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-white">
                        Nova transação
                    </DialogTitle>
                </DialogHeader>

                <form>
                    <div className="flex flex-col">
                        <label htmlFor="name">Nome</label>
                        <input type="text" name="name" id="name" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="value">Valor</label>
                        <input type="number" name="value" id="value" />
                    </div>

                    <div className="flex justify-end">
                        <button type="submit">Salvar</button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
