"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function BackToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 300)
        }
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.6, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.6, y: 20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="
            fixed bottom-8 right-8 z-100
            w-[200px] h-12
            rounded-[10px]
            bg-black text-white
            border border-white/20
            flex items-center justify-center
            shadow-xl
            hover:scale-110 active:scale-95
            transition-transform
          "
                >
                    <p className="font-semibold text-xl mx-2">Back to Top</p>
                    <svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.47352 0.419954C8.74114 0.151058 9.10405 5.55723e-07 9.48246 5.39183e-07C9.86087 5.22642e-07 10.2238 0.151058 10.4914 0.419954L18.5643 8.53397C18.7006 8.66628 18.8093 8.82455 18.8841 8.99955C18.9589 9.17454 18.9983 9.36275 18.9999 9.5532C19.0016 9.74365 18.9655 9.93252 18.8937 10.1088C18.822 10.2851 18.716 10.4452 18.582 10.5799C18.448 10.7146 18.2887 10.8211 18.1133 10.8932C17.9379 10.9653 17.75 11.0016 17.5605 10.9999C17.371 10.9983 17.1838 10.9587 17.0097 10.8836C16.8356 10.8084 16.6781 10.6991 16.5465 10.5621L9.48246 3.46217L2.41847 10.5621C2.14932 10.8234 1.78884 10.968 1.41467 10.9647C1.0405 10.9614 0.682569 10.8106 0.417979 10.5446C0.153388 10.2787 0.00330536 9.91896 5.38833e-05 9.54288C-0.0031976 9.1668 0.140643 8.80449 0.400595 8.53397L8.47352 0.419954Z" fill="white" />
                    </svg>

                </motion.button>
            )}
        </AnimatePresence>
    )
}
