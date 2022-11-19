import React, { useEffect } from 'react'
import { useRouter } from 'next/router'


const Resume = () => {
    const router = useRouter()
    useEffect(() => {
        router.push('/resume.pdf')
    })
    return (
        <></>
    )
}

export default Resume