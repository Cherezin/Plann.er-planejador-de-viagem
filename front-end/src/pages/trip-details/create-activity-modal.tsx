import { Calendar, Tag } from "lucide-react";
import { RefObject } from "react";

interface CreateActivityModalProps{
    modalRef: RefObject<HTMLDivElement>
}

export function CreateActivityModal(props: CreateActivityModalProps){
    return(
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
        <div ref={props.modalRef} className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
                
            {/* Cabeçalho do Modal */}
            <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-lg font-semibold'>Cadastrar atividade</h2>
                    </div>
                    <p className='text-sm text-zinc-400'>
                    Todos convidados podem vizualizar as atividades.
                    </p>
                </div>
    
                <form  className='space-y-3'>
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
                            name='occours_at' 
                            placeholder="Data e horário da atividade" 
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 [color-scheme: dark]"/>
                        </div>
                    </div>
                

                <button  type='submit' className='bg-lime-300 text-lime-950 w-full justify-center rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-lime-400'>
                Salvar atividade
                </button>
                </form>
            </div>
        </div>
    )
}