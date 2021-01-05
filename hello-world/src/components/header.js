import React from 'react'

export default function Header(props) {
    return (
        <div style={{color:`purple`}}>
            <h1>Hello {props.headertext} Gatsby World</h1>
            <em>this is from the header component</em>
        </div>
    )
}
