import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Header from './header'
import heroBg from '../images/background.png'

function Layout({ children }) {
    return (
        <HeroDiv className="min-h-screen font text-kl-black bg-kl-white">
            <Header className="pt-20 p-4 w-full max-w-5xl mx-auto" />
            <main className="flex-1 px-4 py-8 mx-auto w-full max-w-5xl mt-40">
                {children}

                <footer className="text-xs text-gray-500 mt-64 text-center mb-20">
                    <p>Copyright © Kevin Laminto All rights reserved.</p>
                </footer>
            </main>
        </HeroDiv>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout

const HeroDiv = styled.div`
    background-image: url(${heroBg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top center;
`
