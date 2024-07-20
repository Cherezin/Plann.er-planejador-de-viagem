import { useEffect, useRef, useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guests";
import { Activities } from "./activities";
import { DestinationAndDateHeader } from "./destination-and-date-header";


export function TripDetailsPage(){
    const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)
    const modalRef = useRef<HTMLDivElement>(null)

    function openGuestModalRegister(){
        setIsCreateActivityModalOpen(true)
    }

    function closeGuestModalRegister(){
        setIsCreateActivityModalOpen(false)
    }

    useEffect(() => {
        function hundleClickOutSide(e: MouseEvent) {
            if(modalRef.current && !modalRef.current.contains(e.target as Node)){
                closeGuestModalRegister()
            }
        }
        if(isCreateActivityModalOpen){
            document.addEventListener('mousedown', hundleClickOutSide)
        } else {
            document.removeEventListener('mousedown', hundleClickOutSide)
        }

        return () => {
            document.removeEventListener('mousedown', hundleClickOutSide)
        };
    }, [isCreateActivityModalOpen])

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
                    <ImportantLinks/>
                    
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

            </main>
        </div>
    )
}