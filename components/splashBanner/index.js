import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    imgContainer: {
        overflow: 'visible'
    },
    mainImg: {
        // minHeight: '300px!important',
        minHeight: '650px'
    },
})

const SplashBanner = () => {

    const classes = useStyles();

    const [screen, setScreen] = useState({ height: 800, width: 2400 });
    const [screenHeight, setScreenHeight] = useState(800);
    const [screenWidth, setScreenWidth] = useState(2400);

    useEffect(() => {
        setScreen({height: window.innerHeight, width: window.innerWidth})
    }, [])

    useEffect(()=>{
        setScreenHeight(screen.height * .7)
        setScreenWidth(screen.width)
    }, [screen])

    useEffect(() => {

        const handleResize = () => {
            setScreen({height: window.innerHeight, width: window.innerWidth})
        }

        window.addEventListener('resize', handleResize)
        // return window.removeEventListener('resize', handleResize)
    }, [])
  console.log("screen height", screenHeight)
    console.log("screen width", screenWidth)
    console.log("screen", screen)

    return (
        <section >
            <Image
                src='/img/12721.jpg'
                height={screenHeight}
                width={screenWidth}
                layout='responsive'
                // layout='intrinsic'
                // layout='fill'
                objectFit='cover'
                objectPosition='100% 80%'
                alt='Banner image'
                // className={classes.mainImg}
                // style={classes.imgContainer}
            />
            <Typography style={{ position: 'absolute', top: "20%", left: "50%" }}>
                Hello, my name is Erik Hirsch
            </Typography>
        </section>
    )
}

export default SplashBanner