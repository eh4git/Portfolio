import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    mainHeader: {
        fontSize: "32px",
        fontWeight: "bold",
        marginTop: "5%",
        marginLeft: "20%",
        marginBottom: "2.5%",
    },
    text: {
        marginBottom: "1%",
        marginLeft: "15%",
        // marginRight: "15%",
    },
    imgContainer: {
        marginTop: "10%",
        flex: "1"
    },
})

const AboutMe = () => {

    const classes = useStyles();

    const [screen, setScreen] = useState({ height: 800, width: 2400 });
    const [screenHeight, setScreenHeight] = useState(800);
    const [screenWidth, setScreenWidth] = useState(2400);

    useEffect(() => {
        setScreen({ height: window.innerHeight, width: window.innerWidth })
    }, [])

    useEffect(() => {
        setScreenHeight(screen.height)
        setScreenWidth(screen.width)
    }, [screen])

    useEffect(() => {

        const handleResize = () => {
            console.log("resize")
        }

        window.addEventListener('resize', handleResize)
        // return window.removeEventListener('resize', handleResize)
    }, [])


    return (
        <section style={{ position:"relative", display: "flex", flexWrap: "wrap" }}>
            <div style={{flex: "3"}}>
                <Typography className={classes.mainHeader}>
                    About
                </Typography>
                <Typography className={classes.text}>
                    Hey everyone! My name is Erik Hirsch, and I am an accredited and certified full stack web developer who possesses the necessary programming and front/back end expertise that guarantees high functioning, aesthetically pleasing results. As a founding member of Third Project Development, I have a rich background within the web and app (Android and IOS) development sphere and enjoy leveraging those collective skills to give my clients the second to none service and outcomes they deserve.
                </Typography>
                <Typography className={classes.text}>
                    Backing up a bit, I was born and raised in Southern California and have always admired the concept of developing. Being able to intertwine my creativity and problem-solving abilities with my passion for learning and skill development is what unanimously inspired me to choose web development as a career. This, along with my commitment, resilience, and strong work ethic that was instilled in me at a young age, inevitably became the catalyst for me to earn my certificate in full stack web development from UCLA Extension in July of 2020. Furthermore, I also hold a certificate in business management from Victor Valley College and developed in-depth knowledge on how to fabricate responsive websites and mobile applications, all of which has positioned me to become the respected web developing asset I am today at Third Project Development.
                </Typography>
                <Typography className={classes.text}>
                    As a professional with a notable "go-getter" attitude, helping people obtain their web/app development goals is the fundamental driver behind my passion for what I do. I built my services on a foundation of authenticity, quality, and trust, and every effort I perform is aimed to raise the industry standards bar as a whole. Overall, I have a genuine ardency for team collaboration and hold a robust inventory of accomplishments to date, all of which can give you the peace of mind that your full stack development objectives are in the best possible hands to succeed.
                </Typography>
                <Typography className={classes.text}>
                    There is no denying that I love my career, and I take pride in delivering top-quality, fully tailored services that support my client in reaching new levels of digital success. However, in my free time, you can find me enjoying the outdoors, animals, avidly hiking, and being a proud husband and father. In fact, my family is my biggest inspiration and motivation that pushes me to be the best that I can be.
                </Typography>
            </div>
            <div className={classes.imgContainer}>
            <Image
                src='/img/profilePicture.jpg'
                height={screenHeight*.4}
                width={screenWidth*.3}
                layout='fixed'
                // layout='responsive'
                objectFit='contain'
                // objectPosition='100% 80%'
                alt='Personal Photo'
                // className={classes.img}
            />
              <Image
                src='/img/profilePicture.jpg'
                height={screenHeight*.4}
                width={screenWidth*.3}
                layout='fixed'
                // layout='responsive'
                objectFit='contain'
                // objectPosition='100% 80%'
                alt='Personal Photo'
                // className={classes.img}
            />
              <Image
                src='/img/profilePicture.jpg'
                height={screenHeight*.4}
                width={screenWidth*.3}
                layout='fixed'
                // layout='responsive'
                objectFit='contain'
                // objectPosition='100% 80%'
                alt='Personal Photo'
                // className={classes.img}
            />
            </div>
        </section>
    )
}

export default AboutMe