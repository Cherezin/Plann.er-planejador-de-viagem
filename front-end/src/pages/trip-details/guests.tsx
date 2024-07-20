import { CheckCircle, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";

interface Participants{
    id: string
    name: string | null
    email: string
    is_confirmed: boolean
}

export function Guests(){
    const{ tripId } = useParams()
    const[participants, setParticipants] = useState<Participants[]>([])
    
    useEffect(() => {
        api.get(`/trips/${tripId}/participants`).then(response => setParticipants(response.data.participants))
    }, [tripId])

    return(
        <div className="space-y-6">
                        <h2 className="font-semibold text-xl">Convidados</h2>

                        <div className="space-y-5">
                            {participants.map((participants, i) => {
                                return(
                                    <div key={participants.id} className="flex items-center justify-between gap-4">
                                        <div className="space-y-1.5">
                                            <span className="block font-medium text-zinc-100">{participants.name ?? `Convidado${i}`}</span>
                                            <span  className="block font-medium text-zinc-400 text-sm truncate ">{participants.email}</span>  
                                        </div>
                                        {participants.is_confirmed ?
                                         (<CheckCircle className="size-5 shrink-0 text-green-400" />)
                                         : (<CircleDashed />)}
                                    </div>
                                )
                            })}
                           
                        </div>

                        <Button size="full" variant="secundary">
                            <UserCog className='size-5' />
                            Gerenciar convidados
                        </Button>

                    </div>
    )
}