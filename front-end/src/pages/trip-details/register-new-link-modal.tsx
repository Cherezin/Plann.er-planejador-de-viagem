import { ChangeEvent, RefObject } from "react"
import { Modal } from "../../components/modal"
import { Button } from "../../components/button"
import { Link } from "lucide-react"

interface RegisterNewLinkProps{
    modalRef: RefObject<HTMLDivElement>
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    addLink: () => void
    closeModalRegisterNewLink: () => void
}

export function RegisterNewLink({
    modalRef,
    handleInputChange,
    addLink,
    closeModalRegisterNewLink,
}: RegisterNewLinkProps){
    return(
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <Modal ref={modalRef}>
                {/* Cabeçalho do Modal */}
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-lg font-semibold'>Cadastrar novo link</h2>
                    </div>
                </div>
            
                <div className='h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2'>
                    <Link className='size-5 text-zinc-400'/>
                    <input 
                    name='name' 
                    placeholder="Dê um nome ao seu link" 
                    onChange={handleInputChange}
                    className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"/>
                </div>
                <div className='h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2'>
                    <Link className='size-5 text-zinc-400'/>
                    <input 
                    name='url' 
                    placeholder="Digite o link" 
                    onChange={handleInputChange}
                    className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"/>
                </div>

                <Button onClick={() => {addLink(); closeModalRegisterNewLink()}} type="button" size="full">
                    Salvar
                </Button>
                    
            </Modal>
        </div>
    )
}