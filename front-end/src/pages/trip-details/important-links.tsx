import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";


interface Link {
    name: string;
    url: string;
}
interface ImportantLinksProps{
    openModalRegisterNewLink: () => void
    links: Link[]
}

export function ImportantLinks({openModalRegisterNewLink, links}:ImportantLinksProps){
    return(
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links importantes</h2>
            <div className="space-y-5">
                {links.length > 0 ? (
                    links.map((link, index) => (
                        <div key={index} className="flex items-center justify-between gap-4">
                            <div className="space-y-1.5">
                                <span className="block font-medium text-zinc-100">
                                    {link.name}
                                </span>
                                <a href="#" className="block font-medium text-zinc-400 text-xs truncate hover:text-zinc-200">
                                    {link.url}
                                </a>  
                            </div>
                            <Link2 className="text-zinc-400 size-5 shrink-0"/>
                        </div>
                    ))
                ) : (
                    <p className="text-zinc-500">Nenhum link adicionado</p>
                )}
            </div>
            
            <Button onClick={openModalRegisterNewLink} size="full" variant="secundary">
                <Plus className='size-5' />
                Cadastrar novo Link
            </Button>
        </div>
    )
}