import { ChangeEvent, useEffect, useRef, useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guests";
import { Activities } from "./activities";
import { DestinationAndDateHeader } from "./destination-and-date-header";
import { RegisterNewLink } from "./register-new-link-modal";

interface Link {
    name: string;
    url: string;
}

export function TripDetailsPage(){
    const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)
    const [isRegisterNewLink, setIsRegisterNewLink] = useState(false)
    const [links, setLinks] = useState<Link[]>([])
    const [newLink, setNewLink] = useState({ name: '', url: '' });
    const modalRef = useRef<HTMLDivElement>(null)

    function openGuestModalRegister(){
        setIsCreateActivityModalOpen(true)
    }

    function closeGuestModalRegister(){
        setIsCreateActivityModalOpen(false)
    }

    function openModalRegisterNewLink(){
        setIsRegisterNewLink(true)
    }

    function closeModalRegisterNewLink(){
        setIsRegisterNewLink(false)
    }

    useEffect(() => {
        function hundleClickOutSide(e: MouseEvent) {
            if(modalRef.current && !modalRef.current.contains(e.target as Node)){
                closeGuestModalRegister()
                closeModalRegisterNewLink()
            }
        }
        if(isCreateActivityModalOpen || isRegisterNewLink){
            document.addEventListener('mousedown', hundleClickOutSide)
        } else {
            document.removeEventListener('mousedown', hundleClickOutSide)
        }

        return () => {
            document.removeEventListener('mousedown', hundleClickOutSide)
        };
    }, [isCreateActivityModalOpen, isRegisterNewLink])

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewLink((prevLink) => ({
            ...prevLink,
            [name]: value
        }))
    }

    const addLink = () => {
        if(newLink.name === '' || newLink.url === ''){
            return
        } else {
            setLinks((prevLinks) => [...prevLinks, newLink])
        setNewLink({ name: '', url: '' });
        }
    }

    return (
        <div className="max-w-6xl px-4 py-10 mx-auto space-y-8">

            {/*Cabeçalho*/}
            <DestinationAndDateHeader/>

            <main className="flex gap-16 px-4">
                {/*Atividades*/}
               <Activities 
               openGuestModalRegister = {openGuestModalRegister}
               />

                {/*Links Importantes e Convidados*/}
                <div className="w-80 space-y-6">

                    {/*Links Importantes*/}
                    <ImportantLinks
                    links={links}
                    openModalRegisterNewLink={openModalRegisterNewLink}
                    />
                    
                    <div className='w-full h-px bg-zinc-800'/>
                    
                    {/*Convidados*/}
                    <Guests/>
                </div>

                {isCreateActivityModalOpen &&(
                    <CreateActivityModal
                        modalRef={modalRef}
                        closeGuestModalRegister={closeGuestModalRegister}
                     />
                )}

                {isRegisterNewLink && (
                    <RegisterNewLink
                    closeModalRegisterNewLink={closeModalRegisterNewLink}
                    modalRef={modalRef}
                    handleInputChange={handleInputChange}
                    addLink={addLink}
                    />
                )}

            </main>
        </div>
    )
}