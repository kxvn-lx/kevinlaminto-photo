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

                <footer className="mt-64 mb-20 space-y-10">
                    <div className="h-px bg-kl-black w-48"></div>
                    <p>
                        Follow{' '}
                        <a
                            href="https://www.instagram.com/kevin.lx_/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @kevin.lx_
                        </a>
                    </p>
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
