import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)
    const yOffset = 400

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        // Button is displayed after scrolling for *yOffset pixels
        const toggleVisibility = () => {
            setIsVisible(window.pageYOffset > yOffset)
        }

        window.addEventListener('scroll', toggleVisibility)

        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    //scroll-to-top classes: fixed, bottom:0, right:0
    return (
        <React.Fragment>
            {isVisible && (
                <button
                    type="button"
                    onClick={scrollToTop}
                    className="scrollTop"
                >
                    <FaArrowUp title="Scroll to top icon" size="30" />
                </button>
            )}
        </React.Fragment>
    )
}
