import React from 'react'

export default function Layout() {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                {/*content for each page */}
            </div>
            <footer>
                <p>Copyright 2021 Jamie Roszel</p>
            </footer>
        </div>
    )
}