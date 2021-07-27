import React from 'react'
import { Link } from 'gatsby'
import { Player } from '@lottiefiles/react-lottie-player'

import Layout from '../components/layout'
import SEO from '../components/seo'

function NotFoundPage() {
    return (
        <Layout>
            <SEO title="404: Not found" />
            <section className="max-w-lg mx-auto text-center">
                <Player
                    className="h-64"
                    autoplay
                    loop
                    src="https://assets2.lottiefiles.com/packages/lf20_nbxymzfe.json"
                ></Player>

                <h1 className="text-3xl font-medium text-center">404</h1>

                <Link to="/" className="mt-20 inline-block">
                    Back to Home
                </Link>
            </section>
        </Layout>
    )
}

export default NotFoundPage
