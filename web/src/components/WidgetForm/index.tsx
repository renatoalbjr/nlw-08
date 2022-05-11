import { CloseButton } from "../CloseButton";

import bugImgUrl from '../../assets/bug.svg';
import ideaImgUrl from '../../assets/idea.svg';
import thoughtImgUrl from '../../assets/thought.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title: "Problema",
        message: "Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo...",
        image: {
            source: bugImgUrl,
            alt: 'Imagem de uma minhoca roxa'
        }
    },
    IDEA: {
        title: "Ideia",
        message: "Teve uma ideia de melhoria ou de nova funcionalidade? Conta pra gente!",
        image: {
            source: ideaImgUrl,
            alt: 'Imagem de uma lâmpada amarela'
        }
    },
    OTHER: {
        title: "Outro",
        message: "Queremos te ouvir. O que você gostaria de nos dizer?",
        image: {
            source: thoughtImgUrl,
            alt: 'Imagem de uma nuvem'
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [isFeedbackSent, setIsFeedbackSent] = useState<boolean>(false);

    function handleRestartRequest(){
        setFeedbackType(null);
        setIsFeedbackSent(false);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            {!isFeedbackSent?
            <>
                {!feedbackType ? 
                    <FeedbackTypeStep onFeedbackTypeSelection={setFeedbackType} />
                    : 
                    <FeedbackContentStep feedbackType={feedbackType} onFeedbackRestartRequested={handleRestartRequest} onFeedbackSubmit={() => setIsFeedbackSent(true)}/>        
                }
            </>
            :
            <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartRequest}/>
            }
            
            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    );
}