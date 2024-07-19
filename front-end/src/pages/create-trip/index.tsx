import { FormEvent, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestsModal } from './invite-guests-modal'
import { ConfirmTripModal } from './confirm-trip-modal'
import { DestinationAndDateStep } from './steps/destination-and-date-steps'
import { WhoWillBeOnTheTrip } from './steps/who-will-be-on-the-trip'
import { DateRange } from 'react-day-picker'
import { api } from '../../lib/axios'

export function CreateTripPage() {
  const navigate = useNavigate()

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)
  const [emailsToInvite, setEmailsToInvite] = useState<string[]> ([
    'diego@rocketseat.com.br',
    'john@acme.com'
  ])
  const modalRef = useRef<HTMLDivElement>(null)

  const [destination, setDestination] = useState('')
  const [ownerName, setOwnerName] = useState('')
  const [ownerEmail, setOwnerEmail] = useState('')
  const [eventStartAndEndDate, setEventStartAndEndDate] = useState<DateRange | undefined>()

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

  async function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!destination) {
      return
    }

    if (!eventStartAndEndDate?.from || !eventStartAndEndDate?.to) {
      return
    }

    if (emailsToInvite.length === 0) {
      return
    }

    if (!ownerName || !ownerEmail) {
      return
    }

    const response = await api.post('/trips', {
      destination,
      starts_at: eventStartAndEndDate.from,
      ends_at: eventStartAndEndDate.to,
      emails_to_invite: emailsToInvite,
      owner_name: ownerName,
      owner_email: ownerEmail
    })

    const { tripId } = response.data

    navigate(`/trips/${tripId}`)
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
            setDestination={setDestination}
            eventStartAndEndDate={eventStartAndEndDate}
            setEventStartAndEndDate={setEventStartAndEndDate}
            
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
        setOwnerName={setOwnerName}
        setOwnerEmail={setOwnerEmail}
        />
      )}
        

    </div>
  )
}


