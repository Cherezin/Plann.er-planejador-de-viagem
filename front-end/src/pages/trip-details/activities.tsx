import { CircleCheck, CircleDashed, Plus, X } from "lucide-react";
import { Button } from "../../components/button";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";
import { format } from "date-fns";

interface Activity {
    date: string
    activities: {
        id:string
        title: string
        occurs_at: string
    }[]
}
interface ActivitiesPropries{
    openGuestModalRegister: () => void
}

export function Activities(props: ActivitiesPropries){
    const{ tripId } = useParams()
    const[activities, setActivities] = useState<Activity[]>([])
    const [checkedActivities, setCheckedActivities] = useState<{ [key: string]: boolean }>({});
    
    useEffect(() => {
        api.get(`/trips/${tripId}/activities`).then(response => setActivities(response.data.activities))
    }, [tripId])

    function toggleChecked(id: string){
        setCheckedActivities(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }))
    }

    function removeActividties(id: string){
        setActivities(prevActivities => prevActivities.map( activaty => ({
            ...activaty,
            activities: activaty.activities.filter(act => act.id !== id)
        })
        ))
    }

    return(
        <div className="flex-1 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-semibold">Atividades</h2>

                        <Button onClick={props.openGuestModalRegister}>
                            <Plus className='size-5' />
                            Cadastrar atividade
                        </Button>
                    </div>

                    {/*Dias*/}
                    <div className="space-y-8">

                        {activities.map(category => {
                            return(
                                <div key={category.date} className="space-y-2.5">
                                    <div className="flex gap-2 items-baseline">
                                        <span className="text-xl text-zinc-300 font-semibold">Dia {format(category.date, "d")}</span>
                                        <span className="text-xs text-zinc-500">{format(category.date, 'EEEE')}</span>
                                    </div>
                                    {category.activities.length > 0 ? (
                                        <div className="space-y-2.5">
                                            {category.activities.map(activity => {
                                                return(
                                                <div key={activity.id} className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                                                    <button onClick={() => toggleChecked(activity.id)}>
                                                        {checkedActivities[activity.id] ? (<CircleCheck className="text-green-400"/>) : (<CircleDashed />)}
                                                    </button>
                                                    <span className="text-zinc-100">{activity.title}</span>
                                                    
                                                    <span className="text-zinc-400 text-sm ml-auto items-center">
                                                        {format(activity.occurs_at, 'HH:mm')}h
                                                        <button onClick={() => removeActividties(activity.id)} className="ml-3 align-middle">
                                                        <X className="bg-zinc-800 rounded-lg hover:bg-red-900"/>
                                                        </button>
                                                    </span>
                                                </div>)
                                            })}
                                        </div>
                                    ) : (
                                        <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data</p> 
                                    )}
                                </div>
                            )
                        })}

                    </div>
                </div>
    )
}