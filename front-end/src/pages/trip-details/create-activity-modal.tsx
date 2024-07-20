import { Calendar, Tag } from "lucide-react";
import { FormEvent, RefObject } from "react";
import { Button } from "../../components/button";
import { Modal } from "../../components/modal";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
//import { useParams } from "react-router-dom";

interface CreateActivityModalProps{
    modalRef: RefObject<HTMLDivElement>,
    closeGuestModalRegister: () => void
}

export function CreateActivityModal(props: CreateActivityModalProps){
    const { tripId } = useParams()

    async function createActivity(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
    
        const data = new FormData(event.currentTarget)
    
        const title = data.get('title')?.toString()
        const occurs_at = data.get('occurs_at')?.toString()
    
        await api.post(`/trips/${tripId}/activities`, {
          title,
          occurs_at
        })
    
        window.document.location.reload()
      }

    return(
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <Modal ref={props.modalRef}>
                
                {/* Cabeçalho do Modal */}
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-lg font-semibold'>Cadastrar atividade</h2>
                    </div>
                    <p className='text-sm text-zinc-400'>
                        Todos convidados podem vizualizar as atividades.
                    </p>
                </div>
        
                <form onSubmit={createActivity} name='title' className='space-y-3'>
                    <div className='h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2'>
                        <Tag className='size-5 text-zinc-400'/>
                        <input 
                        name='title' 
                        placeholder="Qual a atividade?" 
                        className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"/>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className='h-14 px-4 flex-1 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2'>
                            <Calendar className='size-5 text-zinc-400'/>
                            <input 
                            type='datetime-local'
                            name='occurs_at' 
                            placeholder="Data e horário da atividade" 
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 [color-scheme: dark]"/>
                        </div>
                    </div>

                    <Button type="submit" size="full">
                        Salvar atividade
                    </Button>
                </form>
            </Modal>
        </div>
    )
}