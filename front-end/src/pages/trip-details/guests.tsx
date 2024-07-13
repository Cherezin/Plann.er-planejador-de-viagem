import { CircleDashed, UserCog } from "lucide-react";

export function Guests(){
    return(
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
    )
}