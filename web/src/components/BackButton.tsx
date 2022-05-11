import { Popover } from "@headlessui/react";
import { ArrowLeft } from "phosphor-react";

interface BackButtonProps{
    callback: () => void;
}

export function BackButton({callback}: BackButtonProps){
    return (
        <button onClick={callback} className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100" title="Voltar a seleção de tipo de feedback">
            <ArrowLeft weight="bold" className="h-4 w-4"/>
        </button>
    )
}