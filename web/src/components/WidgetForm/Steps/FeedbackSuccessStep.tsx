import { CheckSquare } from "phosphor-react";
import { CloseButton } from "../../CloseButton";
import successImgUrl from '../../../assets/success.svg'


interface FeedbackSuccessStepProps {
    onFeedbackRestartRequested: () => void
}

export function FeedbackSuccessStep({onFeedbackRestartRequested}: FeedbackSuccessStepProps) {
    return (
        <>
            <header className="h-6">
                <CloseButton />
            </header>
            <div className="my-4 flex items-center flex-col">
                <img src={successImgUrl} alt="Sucesso" className="h-9 w-9" />
                {/* <CheckSquare className="h-9 w-9" /> */}
                <h1 className="text-xl text-dk-txt-primary">Agradecemos o feedback!</h1>
                <button type="button" onClick={onFeedbackRestartRequested} title="Enviar outro feedback" className="my-6 py-2 px-6 rounded bg-dk-sfc-secondary border-transparent text-dk-txt-primary">
                    Quero enviar outro
                </button>
            </div>
        </>
    );
}