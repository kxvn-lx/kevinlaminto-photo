import PropTypes from 'prop-types'
import React from 'react'

import Header from './header'

function Layout({ children }) {
    return (
        <div className="min-h-screen font text-kl-black bg-kl-white">
            <Header className="mt-20 p-4 w-full max-w-5xl mx-auto" />
            <main className="flex-1 px-4 py-8 mx-auto w-full max-w-5xl mt-40">
                {children}

                <footer className="text-xs text-gray-500 mt-64 text-center mb-20">
                    <p>Copyright © Kevin Laminto All rights reserved.</p>
                </footer>
            </main>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
