import { graphql, useStaticQuery, Link } from 'gatsby'
import React from 'react'

function Header() {
    const { site } = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header className="sticky p-4 w-72 top-20 left-20">
            <Link to="/" className="no-underline">
                <h1 className="text-3xl font-bold">
                    {site.siteMetadata.title}
                </h1>
            </Link>

            <nav className="mt-4">
                <ul>
                    <li>
                        <Link to="/about" activeClassName="active">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/series" activeClassName="active">
                            Series
                        </Link>
                    </li>
                </ul>
            </nav>

            <ul className="text-sm mt-20">
                <li>Email</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Unsplash</li>
            </ul>
        </header>
    )
}

export default Header
