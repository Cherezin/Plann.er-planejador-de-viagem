import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { Button } from "../../../components/button";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import { format } from 'date-fns'
import "react-day-picker/dist/style.css"

interface DestinationAndDateStepProps{
    isGuestsInputOpen: boolean
    closeGuestInput: () => void
    openGuestInput: () => void
    setDestination: (destination: string) => void
    eventStartAndEndDate: DateRange | undefined
    setEventStartAndEndDate: (date: DateRange | undefined) => void
}


 
export function DestinationAndDateStep(props: DestinationAndDateStepProps){
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
    

    function openDatePicker(){
        return setIsDatePickerOpen(true)
    }

    function closeDataPicker(){
        return setIsDatePickerOpen(false)
    }
    
    const displayedDate = props.eventStartAndEndDate && props.eventStartAndEndDate.from && props.eventStartAndEndDate.to
    ? format(props.eventStartAndEndDate.from, "d' de 'LLL").concat(' até ').concat(format(props.eventStartAndEndDate.to, "d' de 'LLL"))
     : null

    return(
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            
            <div className='flex items-center gap-2 flex-1'>
                <MapPin className='size-5 text-zinc-400'/>
                <input 
                disabled={props.isGuestsInputOpen} 
                type="text" 
                placeholder="Para onde você vai?" 
                className="bg-transparent text-lg placeholder-zinc-400 outline-none"
                onChange={e => props.setDestination(e.target.value)}
                />
            </div>
                
            <button onClick={openDatePicker} disabled={props.isGuestsInputOpen} className='flex items-center gap-2 text-left w-{240px} flex-1'> 
                <Calendar className='size-5 text-zinc-400'/>
 
                <span className="text-lg text-zinc-400 flex-1">
                    {displayedDate || 'Quando'}
                </span>
            </button>

            {isDatePickerOpen && (
                <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
                    <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold">Selecione a data</h2>
                                <button type="button" onClick={closeDataPicker}>
                                    <X className="size-5 text-zinc-400"  />
                                </button>
                            </div>
                        </div>  
                          
                        <DayPicker mode="range" selected={props.eventStartAndEndDate}  onSelect={props.setEventStartAndEndDate}/>
                        
                    </div>
                </div>   
            )}
            

            <div className='w-px h-6 bg-zinc-800'></div>

            {props.isGuestsInputOpen ? (
                <Button onClick={props.closeGuestInput} variant="secundary">
                    Alterar local/data
                    <Settings2 className='size-5' />
                </Button>
            ) : (
                <Button onClick={props.openGuestInput}>
                    Continuar 
                    <ArrowRight className='size-5' />
                </Button>
            )}
            </div>
    )
}