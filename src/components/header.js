import { graphql, useStaticQuery, Link } from 'gatsby'
import React from 'react'

function Header({ className }) {
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
        <header className={`${className}`}>
            <div className="w-72">
                <Link to="/" className="no-underline">
                    <h1 className="text-3xl font-bold text-black">
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
            </div>
        </header>
    )
}

export default Header
