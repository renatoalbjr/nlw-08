import { Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { BackButton } from "../../BackButton";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../../ScreenshotButton";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType,
    onFeedbackRestartRequested: () => void,
    onFeedbackSubmit: () => void;
}

export function FeedbackContentStep({feedbackType, onFeedbackRestartRequested, onFeedbackSubmit}: FeedbackContentStepProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType];
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [comment, setComment] = useState<string | null>(null);

    function handleSubmitFeedback(event: FormEvent){
        event.preventDefault();

        console.log({
            comment,
            screenshot,
        });
        onFeedbackSubmit();
    }

    return (
        <>
        <header className="text-xl leading-6 flex items-center gap-2">
            <BackButton callback={onFeedbackRestartRequested}/>
            <img className="h-6 w-6" src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} />
            <span>
                {feedbackTypeInfo.title}
            </span>        
            <CloseButton />
        </header>

        <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
            <textarea 
            placeholder={feedbackTypeInfo.message}
            className="min-w-[19rem] w-full min-h-[7rem] text-dk-txt-primary placeholder:text-zinc-400 text-sm bg-transparent py-2 px-3 resize-none border-zinc-600 rounded scrollbar-track-transparent scrollbar-thumb-zinc-700 scrollbar-thin scrollbar-rounded focus:outline-none focus:ring-transparent focus:border-brand-500 focus:border-2"
            name="Descrição do feedback"
            title="Deixe seu feedback"
            onChange={(event) => setComment(event.target.value)}
            ></textarea>

            <footer className="mt-2 gap-2 flex items-center row justify-center">
                <ScreenshotButton screenshot={screenshot} onScreenshotTaken={setScreenshot} />
                <button disabled={(!comment || comment?.length === 0)} type="submit" className="w-full bg-brand hover:bg-brand-hover focus:bg-brand-hover transition-colors text-white rounded py-2 px-6 outline-none disabled:opacity-50 disabled:hover:bg-brand" title="Enviar feedback">
                    Enviar feedback
                </button>
            </footer>
        </form>

        </>
    );
}