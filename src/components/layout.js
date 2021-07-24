import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Header from './header'
import heroBg from '../images/background.png'

function Layout({ children }) {
    return (
        <HeroDiv className="min-h-screen font text-kl-black bg-kl-white">
            <Header className="pt-20 p-4 w-full max-w-4xl mx-auto" />
            <main className="flex-1 px-4 py-8 mx-auto w-full max-w-4xl mt-40">
                {children}

                <footer className="mt-64 mb-20 space-y-10 text-sm">
                    <div className="h-px bg-kl-black w-48"></div>
                    <ul>
                        <li>
                            <a
                                href="mailto:kevin.laminto@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Email
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.facebook.com/kxvn.lx"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/kxvn.lx"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://unsplash.com/@kxvn_lx"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Unsplash
                            </a>
                        </li>
                    </ul>
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
