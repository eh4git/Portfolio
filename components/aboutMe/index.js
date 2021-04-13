import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MediumScreen from './mediumScreen'
import LargeScreen from './largeScreen'

const AboutMe = () => {

    const [screen, setScreen] = useState({ height: 800, width: 2400 });

    useEffect(() => {
        setScreen({ height: window.innerHeight, width: window.innerWidth })
    }, [])

    useEffect(() => {

        const handleResize = () => {
            setScreen({ height: window.innerHeight, width: window.innerWidth })
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
            {screen.width < 960 && <span>Small</span>}
            {screen.width > 960 && screen.width < 1280 && <MediumScreen screen={screen} />}
            {screen.width > 1280 && <LargeScreen screen={screen} />}
        </>
    )
}

export default AboutMe