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

                <ul className="text-sm mt-20">
                    <li>
                        <a href="mailto:kevin.laminto@gmail.com">Email</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/kxvn.lx">Facebook</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/kxvn.lx">
                            Instagram
                        </a>
                    </li>
                    <li>
                        <a href="https://unsplash.com/@kxvn_lx">Unsplash</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
