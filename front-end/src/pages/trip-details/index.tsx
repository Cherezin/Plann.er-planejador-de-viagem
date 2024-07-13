import { Calendar, MapPin, Plus, Settings2, CircleCheck, CircleDashed, Link2, UserCog } from "lucide-react";

export function TripDetailsPage(){
    return (
        <div className="max-w-6xl px-4 py-10 mx-auto space-y-8">

            {/*Cabeçalho*/}
            <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <MapPin className="size-5 text-zinc-400" />
                    <span className=" text-zinc-100">Espirito Santo, Brasil</span>
                </div>

                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                        <Calendar className="size-5 text-zinc-400" />
                        <span className=" text-zinc-100">17 a 23 de Agosto</span>
                    </div>

                    <div className='w-px h-6 bg-zinc-800'></div>

                    <button className='bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700'>
                    Alterar local/data
                    <Settings2 className='size-5' />
                    </button>
                </div>
            </div>

            <main className="flex gap-16 px-4">
                <div className="flex-1 space-y-6">

                    {/*Local e data*/}
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-semibold">Atividades</h2>
                        <button className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
                            <Plus className='size-5' />
                            Cadastrar atividade 
                        </button>
                    </div>

                    <div className="space-y-8">

                        {/*Dia 17*/}
                        <div className="space-y-2.5">
                            <div className="flex gap-2 items-baseline">
                                <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
                                <span className="text-xs text-zinc-500">Sábado</span>
                            </div>
                            <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data</p>
                        </div>

                        {/*Dia 18*/}
                        <div className="space-y-2.5">
                            <div className="flex gap-2 items-baseline">
                                <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
                                <span className="text-xs text-zinc-500">Domingo</span>
                            </div>
                            <div className="space-y-2.5">
                                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                                    <CircleCheck className="size-5 text-lime-300" />
                                    <span className="text-zinc-100">Corrida de Kart</span>
                                    <span className="text-zinc-400 text-sm ml-auto">14:00h</span>
                                </div>
                                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                                    <CircleCheck className="size-5 text-lime-300" />
                                    <span className="text-zinc-100">Cinema</span>
                                    <span className="text-zinc-400 text-sm ml-auto">18:00h</span>
                                </div>
                            </div>
                        </div>

                        {/*Dia 19*/}
                        <div className="space-y-2.5">
                            <div className="flex gap-2 items-baseline">
                                <span className="text-xl text-zinc-300 font-semibold">Dia 19</span>
                                <span className="text-xs text-zinc-500">Segunda</span>
                            </div>
                            <div className="space-y-2.5">
                                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                                    <CircleCheck className="size-5 text-lime-300" />
                                    <span className="text-zinc-100">Academia em grupo</span>
                                    <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
                                </div>
                                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                                    <CircleCheck className="size-5 text-lime-300" />
                                    <span className="text-zinc-100">Almoço</span>
                                    <span className="text-zinc-400 text-sm ml-auto">12:00h</span>
                                </div>
                                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                                    <CircleCheck className="size-5 text-lime-300" />
                                    <span className="text-zinc-100">Gaming session</span>
                                    <span className="text-zinc-400 text-sm ml-auto">18:00h</span>
                                </div>
                                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                                    <CircleCheck className="size-5 text-lime-300" />
                                    <span className="text-zinc-100">Jantar</span>
                                    <span className="text-zinc-400 text-sm ml-auto">21:00h</span>
                                </div>
                            </div>
                        </div>

                        {/*Dia 20*/}
                        <div className="space-y-2.5">
                            <div className="flex gap-2 items-baseline">
                                <span className="text-xl text-zinc-300 font-semibold">Dia 20</span>
                                <span className="text-xs text-zinc-500">Terça</span>
                            </div>
                            <div className="space-y-2.5">
                                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                                    <CircleCheck className="size-5 text-lime-300" />
                                    <span className="text-zinc-100">Academia em grupo</span>
                                    <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
                                </div>
                                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                                    <CircleDashed className="size-5 text-zinc-400" />
                                    <span className="text-zinc-100">Almoço</span>
                                    <span className="text-zinc-400 text-sm ml-auto">12:00h</span>
                                </div>
                                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                                    <CircleDashed className="size-5 text-zinc-400" />
                                    <span className="text-zinc-100">Jantar</span>
                                    <span className="text-zinc-400 text-sm ml-auto">21:00h</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="w-80 space-y-6">

                    {/*Links Importantes*/}
                    <div className="space-y-6">
                        <h2 className="font-semibold text-xl">Links importantes</h2>
                        <div className="space-y-5">
                            <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1.5">
                                    <span className="block font-medium text-zinc-100">Reserva do AirBnb</span>
                                    <a href="#" className="block font-medium text-zinc-400 text-xs truncate hover:text-zinc-200">https://www.airbnb.com.br/rooms/10470001112121212121</a>  
                                </div>
                                <Link2 className="text-zinc-400 size-5 shrink-0"/>
                            </div>
                            <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1.5">
                                    <span className="block font-medium text-zinc-100">Reserva do AirBnb</span>
                                    <a href="#" className="block font-medium text-zinc-400 text-xs truncate hover:text-zinc-200">https://www.airbnb.com.br/rooms/10470001112121212121</a>  
                                </div>
                                <Link2 className="text-zinc-400 size-5 shrink-0"/>
                            </div>
                        </div>
                        <button className='bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg h-11 px-5font-medium flex items-center gap-2 hover:bg-zinc-700'>
                            <Plus className='size-5' />
                            Cadastrar novo Link
                    </button>
                    </div>
                    
                    <div className='w-full h-px bg-zinc-800'/>
                    
                    {/*Convidados*/}
                    <div className="space-y-6">
                        <h2 className="font-semibold text-xl">Convidados</h2>

                        <div className="space-y-5">
                            <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1.5">
                                    <span className="block font-medium text-zinc-100">Jessica White</span>
                                    <span  className="block font-medium text-zinc-400 text-sm truncate ">jessica.white44@yahoo.com</span>  
                                </div>
                                <CircleDashed className="text-zinc-400 size-5 shrink-0"/>
                            </div>
                            <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1.5">
                                    <span className="block font-medium text-zinc-100">Dr. Rita Pacocha</span>
                                    <span  className="block font-medium text-zinc-400 text-sm truncate ">lacy.stiedemann@gmail.com</span>  
                                </div>
                                <CircleDashed className="text-zinc-400 size-5 shrink-0"/>
                            </div>
                        </div>

                        <button className='bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg h-11 px-5font-medium flex items-center gap-2 hover:bg-zinc-700'>
                            <UserCog className='size-5' />
                            Gerenciar convidados
                        </button>

                    </div>
                </div>
            </main>
        </div>
    )
}