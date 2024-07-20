import { User } from "lucide-react";
import { FormEvent, RefObject } from "react";
import { Button } from "../../components/button";
import { Modal } from "../../components/modal";

interface ConfirmTripModalProps{
    modalRef:  RefObject<HTMLDivElement>;
    createTrip: (e: FormEvent<HTMLFormElement>) => void
    setOwnerEmail: (email: string) => void
    setOwnerName: (name: string) => void
}

export function ConfirmTripModal(props: ConfirmTripModalProps){
  return(
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
        
      <Modal ref={props.modalRef}>
            
        {/* Cabeçalho do Modal */}
        <div className='space-y-2'>
          <div className='flex items-center justify-between'>
            <h2 className='text-lg font-semibold'>Confirmar criação de viagem</h2>
          </div>
          <p className='text-sm text-zinc-400'>
            Para concluir a criação da viagem para <span className='text-zinc-100 font-semibold'>Florianópolis</span>, Brasil nas datas de <span className='text-zinc-100 font-semibold'>16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:
          </p>
        </div>

        <form onSubmit={props.createTrip} className='space-y-3'>
          <div className='h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2'>
            <User className='size-5 text-zinc-400'/>
            <input 
            name='nome' 
            placeholder="Seu nome completo" 
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            onChange={e => props.setOwnerName(e.target.value)}
            />
          </div>

          <div className='h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2'>
            <User className='size-5 text-zinc-400'/>
            <input 
            type='email'
            name='email' 
            placeholder="Seu e-mail pessoal" 
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            onChange={e => props.setOwnerEmail(e.target.value)}
            />
          </div>

          <Button size="full" type="submit">
            Confirmar criação da viagem
          </Button>
        </form>
      </Modal>
    </div>
  )
}