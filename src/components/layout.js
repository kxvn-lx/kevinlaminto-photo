import PropTypes from 'prop-types'
import React from 'react'

import Header from './header'

function Layout({ children }) {
    return (
        <div className="flex flex-wrap min-h-screen font">
            <div className="w-full md:w-1/3 px-4 py-8">
                <Header />
            </div>

            <main className="flex-1 px-4 py-8 mx-auto md:ml-auto w-full md:w-2/3 md:max-w-xl md:mr-40">
                {children}

                <footer className="text-xs text-gray-500 mt-20">
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
