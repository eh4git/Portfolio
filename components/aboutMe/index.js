import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { Typography } from '@material-ui/core';
import { makeStyles,  } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery"
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
        marginRight: "5%",
        fontSize: "18px"
        // marginRight: "15%",
    },
    imgContainer: {
        // width: "100%,
        position: "relative",
        marginTop: "5%",
        flex: "1",
        minWidth: "500px",
        overflow: "hidden"
    },
    img1: {
        position: 'absolute',
        // top: 100,
        right: "20%",
        zIndex: 3,
    },
    img2: {
        position: 'absolute',
        // top: "-20%",
        left: "50%",
        zIndex: 2,
    },
    img3: {
        position: 'absolute',
        top: "65%",
        right: "1%",
        zIndex: 1,
    }
})

const AboutMe = () => {

    const classes = useStyles();
    const matches = useMediaQuery('(min-width:600px)');

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
        <section style={{ position: "relative", display: "flex", flexWrap: "wrap", backgroundColor: "lightgray" }}>
            {/* {`(min-width:600px) matches: ${matches}`} */}
            <div style={{ flex: "3" }}>
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
                <div className={classes.img1}>
                    <Image
                        src='/img/profilePicture.jpg'
                        height={500}
                        width={400}
                        layout='intrinsic'
                        // layout='responsive'
                        objectFit='contain'
                        // objectPosition='100% 80%'
                        alt='Personal Photo'

                    />
                </div>
                <div className={classes.img2}>
                    <Image
                        src='/img/profilePicture.jpg'
                        height={500}
                        width={400}
                        // layout='intrinsic'
                        layout='responsive'
                        objectFit='contain'
                        // objectPosition='40% 100%'
                        alt='Personal Photo'

                    />
                </div>
                <div className={classes.img3}>
                    <Image
                        src='/img/12721.jpg'
                        height={screenHeight * .3}
                        width={screenWidth * .25}
                        layout='intrinsic'
                        // layout='responsive'
                        objectFit='contain'
                        // objectPosition='100% 80%'
                        alt='Personal Photo'

                    />\
            </div>
            </div>
        </section>
    )
}

export default AboutMe