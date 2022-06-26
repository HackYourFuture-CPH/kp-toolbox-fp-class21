import React, { useEffect } from "react";

export default function Heading({ title }) {
    const [title, setTitle] = useState('Hello and welcome to the KAOSPILOT toolbox !')
    useEffect(() => {
        setTitle(title)
    }, [title])
    return (
        <>
            {title}
        </>
    )
}