import React from 'react'
import ReactImageAppear from 'react-image-appear'

function Image({ src, alt, className }) {
    return (
        <div className={`${className}`}>
            <ReactImageAppear
                src={src}
                animation="fadeIn"
                alt={alt}
                className={className}
                showLoader={false}
            />
        </div>
    )
}

export default Image
