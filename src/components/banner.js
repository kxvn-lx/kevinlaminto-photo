import React from 'react'
import styled from 'styled-components'

import Emoji from './emoji'

function Banner() {
    return (
        <div className="text-center sticky top-10">
            <BannerText className="inline-block py-4 px-4">
                Kevin is available for hire! <Emoji symbol="👋" />
            </BannerText>
        </div>
    )
}

export default Banner

const BannerText = styled.p`
    z-index: 99;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
`
