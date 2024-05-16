import { useEffect } from "react"

export const useCloseModal = (close, ref) => {
    useEffect(() => {
        const handleClick = (e) => {
            // aka, clicking outside the modal
            if (!ref && !ref?.current) return;
            if (ref?.current && !ref?.current?.contains(e.target)) {
                close();
            }
        }

        document.addEventListener('click', handleClick, true); // true means that the event will be captured in the capturing phase not the bubbling phase

        return () => {
            document.removeEventListener('click', handleClick);
        }

    }, [close]);


}