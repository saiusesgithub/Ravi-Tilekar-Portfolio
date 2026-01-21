import React, { useEffect, useState } from "react";

interface SignatureIntroProps {
    onComplete: () => void;
}

export default function SignatureIntro({ onComplete }: SignatureIntroProps) {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Start fade out after 3.5 seconds
        const fadeTimer = setTimeout(() => {
            setFadeOut(true);
        }, 3500);

        // Call onComplete after fade out animation (4 seconds total)
        const completeTimer = setTimeout(() => {
            onComplete();
        }, 4000);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <div className={`preloader ${fadeOut ? 'preloader-fade-out' : ''}`}>
            <div className="preloader-content">
                <div className="signature-animation">
                    <div className="signature-text">Ravi Tilekar</div>
                </div>
                <div className="subtitle-animation">
                    Entrepreneur • Ecosystem Builder • Writer
                </div>
            </div>
        </div>
    );
}