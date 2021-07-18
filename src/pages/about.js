import React from 'react'

import Layout from '../components/layout'
import ScrollToTop from '../components/scrollToTop'
import SEO from '../components/seo'

function about() {
    return (
        <Layout>
            <SEO
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
                title="About"
            />
            <ScrollToTop />
            <section className="bg-red-400">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Officia, fugit, repellat aut obcaecati sit facere est
                    laboriosam, omnis unde debitis quia quasi ratione nulla
                    voluptatum suscipit mollitia enim magnam quod!
                </p>
            </section>
        </Layout>
    )
}

export default about
