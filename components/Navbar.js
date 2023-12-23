import React, {useEffect, useState} from 'react'
// import link from next
import Link from 'next/link'
import props from './links'
export default function Navbar() {
    // check if the system has dark mode enabled
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        // check if the system has dark mode enabled
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true);
        }
    }
    )
    return (
        <nav className={
            darkMode ? "navbar navbar-expand-lg navbar-dark bg-dark" : "navbar navbar-expand-lg navbar-light bg-light"
        }>
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="/">{props.title}</a> */}
                <Link href="/"><a className={"navbar-brand"}>{props.title}</a></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {(() => {
                            // const pages = props['pages'].map((item, index) => (
                            //     <li className="nav-item">
                            //         <a className="nav-link" href={item.link}>{props.text}</a>

                            //     </li>
                            // ));



                            // return the array from the function
                            return (<>
                                {props['pages'].map((item, index) => {
                                    return (
                                        <li className="nav-item" key={index}>
                                            {/* <a className="nav-link" href={item.link}>{item.text}</a> */}
                                            <Link className={"nav-link"} href={item.link}>
                                                <a className='nav-link'>{item.text}</a>
                                            </Link>


                                        </li>
                                    )
                                })}

                            </>)

                        })()}


                    </ul>
                </div>
            </div>
        </nav >

    )
}

