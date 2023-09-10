 import { useRef ,useEffect } from "react";

 export default function (ref ,fn ,burgerBtnRef){
    useEffect(() => {
        const listener = (event) => {
            if (burgerBtnRef.current && burgerBtnRef.current.contains(event.target)) {
                return;
            }
            if (!ref.current || ref.current.contains(event.target)) return;
            fn();
        }
        document.addEventListener("mousedown", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
        };
    } ,[ref ,fn ,burgerBtnRef])
 }