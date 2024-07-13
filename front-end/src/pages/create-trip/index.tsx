import { FormEvent, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestsModal } from './invite-guests-modal'
import { ConfirmTripModal } from './confirm-trip-modal'
import { DestinationAndDateStep } from './steps/destination-and-date-steps'
import { WhoWillBeOnTheTrip } from './steps/who-will-be-on-the-trip'

export function CreateTripPage() {
  const navigate = useNavigate()

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)
  const [emailsToInvite, setEmailsToInvite] = useState<string[]> ([])
  const modalRef = useRef<HTMLDivElement>(null)

  function closeGuestInput(){
    setIsGuestsInputOpen(false)
  }

  function openGuestInput(){
    console.log('Botão clicado!');
    setIsGuestsInputOpen(true)
  }

  function openGuestsMoldal(){
    setIsGuestsModalOpen(true)
  }

  function closeGuestsModal(){
    setIsGuestsModalOpen(false)
  }

  function openConfirmTripModal(){
    setIsConfirmTripModalOpen(true)
  }

  function closeConfirmTripModal(){
    setIsConfirmTripModalOpen(false)
  }

  function addNewEmailToInvite(e: FormEvent<HTMLFormElement>){
    e.preventDefault()
    
    const data = new FormData(e.currentTarget)
    const email = data.get('email')?.toString()

    if(!email || emailsToInvite.includes(email)){
      return
    }

    setEmailsToInvite([
      ...emailsToInvite,
      email
    ])

    e.currentTarget.reset()
  }

  function removeEmailFromInvites(emailToRemove: string){
    const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)

    setEmailsToInvite(newEmailList)
  }

  function createTrip(e: FormEvent<HTMLFormElement>){
    e.preventDefault()
    navigate('/trips/123')
  }

  useEffect(() => {
    function hundleClickOutSide(e: MouseEvent) {
    if(modalRef.current && !modalRef.current.contains(e.target as Node)){
      closeGuestsModal()
      closeConfirmTripModal()
    }
  }
    if(isGuestsModalOpen || isConfirmTripModalOpen){
      document.addEventListener('mousedown', hundleClickOutSide)
    } else{
      document.removeEventListener('mousedown', hundleClickOutSide)
    }

    return () => {
      document.removeEventListener('mousedown', hundleClickOutSide)
    };
  }, [isGuestsModalOpen, isConfirmTripModalOpen]);

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className=' flex flex-col items-center gap-3'>
        <img src="/logo.svg" alt="plann.er" />
        <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className='space-y-4'>

          <DestinationAndDateStep 
            closeGuestInput={closeGuestInput}
            openGuestInput={openGuestInput}
            isGuestsInputOpen={isGuestsInputOpen}
          />

          {isGuestsInputOpen && (
            <WhoWillBeOnTheTrip
              openGuestsMoldal={openGuestsMoldal}
              openConfirmTripModal={openConfirmTripModal}
              emailsToInvite={emailsToInvite}
             />
          )}
        </div>

        <p className="text-sn text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a href="#" className="text-zinc-300 underline">termos de uso</a>  e <a href="#" className="text-zinc-300 underline">políticas de privacidade</a>.
        </p>
      </div>

      {isGuestsModalOpen && (
        <InviteGuestsModal 
        emailsToInvite={emailsToInvite}
        addNewEmailToInvite={addNewEmailToInvite}
        removeEmailFromInvites={removeEmailFromInvites}
        modalRef={modalRef}
        />
      )}

      {isConfirmTripModalOpen && (
        <ConfirmTripModal
        createTrip={createTrip}
        modalRef={modalRef}
        />
      )}
        

    </div>
  )
}


