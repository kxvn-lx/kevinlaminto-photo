import React from 'react'

import Layout from '../components/layout'
import ScrollToTop from '../components/scrollToTop'
import SEO from '../components/seo'

function series() {
    return (
        <Layout>
            <SEO
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
                title="Series"
            />
            <ScrollToTop />
            <section className="grid grid-rows-1 gap-4">
                {[...Array(10)].map((x, i) => (
                    <div key={i} className="w-full h-60 bg-blue-400"></div>
                ))}
            </section>
        </Layout>
    )
}

export default series
