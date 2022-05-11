import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { LoadingIcon } from "./LoadingIcon";

interface ScreenshotButtonProps {
    screenshot: string|null,
    onScreenshotTaken: (ss: string | null) => void,
}

export function ScreenshotButton({screenshot, onScreenshotTaken}: ScreenshotButtonProps) {
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

    async function handleTakeScreenshot(){
        setIsTakingScreenshot(true);

        const canvas = await html2canvas(document.querySelector('html')!); 
        const base64image = canvas.toDataURL('image/png');

        onScreenshotTaken(base64image);
        setIsTakingScreenshot(false);
    }

    if(screenshot){
        return (
            <div>
                <button 
                type="button" 
                className="p-1 w-10 h-10 rounded border overflow-hidden border-dk-stroke text-dk-txt-secondary hover:text-dk-txt-primary flex justify-end items-end" 
                title="Remover screenshot do feedback"
                onClick={() => onScreenshotTaken(null)}
                style={{
                    backgroundImage: `url(${screenshot})`,
                    backgroundPosition: 'right bottom',
                    backgroundSize: 50
                }}
                >
                    <Trash weight="fill" />
                </button>
            </div>
        );
    }

    return (
        <button 
        type="button" 
        className="text-dk-txt-primary bg-dk-sfc-secondary rounded border-transparent p-2" 
        title="Tirar screenshot para anexar ao feedback"
        onClick={handleTakeScreenshot}
        >
            {isTakingScreenshot ?
            <LoadingIcon />
            :
            <Camera className="h-6 w-6" weight="regular"/>
            }
        </button>
    );
}