import { AtSign, Plus, X } from "lucide-react"
import { FormEvent, RefObject } from "react"

interface InviteGuestsModalProps {
    emailsToInvite: string[]
    addNewEmailToInvite: (e: FormEvent<HTMLFormElement>) => void
    removeEmailFromInvites: (email: string) => void
    modalRef:  RefObject<HTMLDivElement>;
    
}

export function InviteGuestsModal(props: InviteGuestsModalProps){

    return(
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
          <div ref={props.modalRef} className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
            
            {/* Cabeçalho do Modal */}
            <div className='space-y-2'>
              <div className='flex items-center justify-between'>
                <h2 className='text-lg font-semibold'>Selecionar convidados</h2>
              </div>
              <p className='text-sm text-zinc-400'>
                Os convidados irão receber e-mails para confirmar a participação na viagem.
              </p>
            </div>
            
            {/* Lista de emails */}
            <div className='flex flex-wrap gap-2'>

              {props.emailsToInvite.map(email => {
                return(
                  <div key={email} className='py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2'>
                    <span className='text-zinc-300'>{email}</span>
                    <button type='button'>
                      <X onClick={() => props.removeEmailFromInvites(email)} className='size-4 text-zinc-400'/>
                    </button>
                  </div>
                )
              })}

            </div>

            <div className='w-full h-px bg-zinc-800'/>

            <form onSubmit={props.addNewEmailToInvite} className='p-2.5 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2'>
              <div className='px-2 flex items-center flex-1 gap-2'>
                <AtSign className='size-5 text-zinc-400'/>
                <input 
                type="email" 
                name='email' 
                placeholder="Digite o e-mail do convidado" 
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"/>
              </div>

              <button type='submit' className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
                Convidar
                <Plus className='size-5'/>
              </button>
            </form>
          </div>
        </div>
    )
}