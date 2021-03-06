import React, { useState } from 'react'
import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar'

export default function Home() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }



    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
        </>
    )
}