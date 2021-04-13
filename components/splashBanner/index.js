import React, { useState, useEffect} from 'react';
import Image from 'next/image'
import { Button, Typography } from '@material-ui/core';
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
        <section >
            <Image
                src='/img/12721.jpg'
                height={screen.height  * .7}
                width={screen.width}
                layout='responsive'
                // layout='intrinsic'
                // layout='fill'
                objectFit='cover'
                objectPosition='100% 80%'
                alt='Banner image'
            // className={classes.mainImg}
            // style={classes.imgContainer}
            />
            <div style={{ position: 'absolute', top: "20%", left: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Typography style={{alignSelf: "flex-start", fontSize: '24px',}}>
                    Hello,
            </Typography>
            <Typography style={{alignSelf: "flex-start", fontSize: '18px',}}>
                    my name is <strong style={{color: "red"}}>Erik Hirsch</strong>
            </Typography>
            <Typography style={{alignSelf: "flex-start", fontSize: '14px',}}>
                    - Full Stack Web Developer -
            </Typography>
            <Button variant="outlined" >Contact me</Button>
            </div>
        </section>
    )
}

export default SplashBanner