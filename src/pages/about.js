import React from 'react'

import Layout from '../components/layout'
import ScrollToTop from '../components/scrollToTop'
import SEO from '../components/seo'

function about() {
    return (
        <Layout>
            <SEO title="About" />
            <ScrollToTop />
            <section className="max-w-lg mt-20">
                <p>
                    Kevin Laminto (b.1999) is a photographer and creative
                    director based in Melbourne, Australia. His works primarily
                    revolves around contemporary, fashion, lifestyle, and
                    portrait photography. for inquiries, commissions, and
                    questions, feel free to email Kevin directly at:{' '}
                    <a
                        href="mailto:kevin.laminto@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        kevin.laminto@gmail.com
                    </a>
                    .
                </p>
            </section>
        </Layout>
    )
}

export default about
