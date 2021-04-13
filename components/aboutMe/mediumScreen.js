import React from 'react';
import Image from 'next/image'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    section: {
        // position: "relative",
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "lightgray"
    },
    mainHeader: {
        fontSize: "32px",
        fontWeight: "bold",
        marginTop: "5%",
        marginLeft: "20%",

        marginBottom: "2.5%",
    },
    aboutMeContainer: {
        flex: "3",
    },
    text: {
        marginBottom: "1%",
        marginLeft: "15%",
        marginRight: "5%",
        fontSize: "18px"
        // marginRight: "15%",
    },
    collageContainer: {
        // width: "100%,
        position: "relative",
        marginTop: "5%",
        flex: "1",
        minWidth: "500px",
        overflow: "hidden"
    },
    //------ Medium Size Specific Classes --------
    paragraphContainer: {
        display: "flex",
        justifyContent: "space-around",
        marginLeft: "10%",
        marginRight: "5%"
    },
    imgMd: {
        flex: 1,
        margin: "2.5%",
    },
    textMd: {
        fontSize: "18px",
        flex: 3,
        margin: "2.5%",
    },
});

const MediumScreen = ({screen}) => {

    const classes = useStyles();

    return(
        <section className={classes.section}  >
                    <Typography className={classes.mainHeader}>
                        About
                    </Typography>
                    <div className={classes.paragraphContainer}>
                        <Typography className={classes.textMd}>
                            Hey everyone! My name is Erik Hirsch, and I am an accredited and certified full stack web developer who possesses the necessary programming and front/back end expertise that guarantees high functioning, aesthetically pleasing results. As a founding member of Third Project Development, I have a rich background within the web and app (Android and IOS) development sphere and enjoy leveraging those collective skills to give my clients the second to none service and outcomes they deserve.
                        </Typography>
                        <div className={classes.imgMd}>
                            <Image
                                src='/img/profilePicture.jpg'
                                height={400}
                                width={500}
                                layout='intrinsic'
                                // layout='responsive'
                                objectFit='contain'
                                objectPosition='100% 80%'
                                alt='Personal Photo'
                            />
                        </div>
                    </div>
                    <div className={classes.paragraphContainer}>
                        <div className={classes.imgMd}>
                            <Image
                                src='/img/profilePicture.jpg'
                                height={240}
                                width={screen.width * .15}
                                layout='intrinsic'
                                // layout='responsive'
                                objectFit='contain'
                                objectPosition='100% 80%'
                                alt='Personal Photo'
                            />
                        </div>
                        <Typography className={classes.textMd}>
                            Backing up a bit, I was born and raised in Southern California and have always admired the concept of developing. Being able to intertwine my creativity and problem-solving abilities with my passion for learning and skill development is what unanimously inspired me to choose web development as a career. This, along with my commitment, resilience, and strong work ethic that was instilled in me at a young age, inevitably became the catalyst for me to earn my certificate in full stack web development from UCLA Extension in July of 2020. Furthermore, I also hold a certificate in business management from Victor Valley College and developed in-depth knowledge on how to fabricate responsive websites and mobile applications, all of which has positioned me to become the respected web developing asset I am today at Third Project Development.
                        </Typography>
                    </div>
                    <div className={classes.paragraphContainer}>
                        <Typography className={classes.textMd}>
                            As a professional with a notable "go-getter" attitude, helping people obtain their web/app development goals is the fundamental driver behind my passion for what I do. I built my services on a foundation of authenticity, quality, and trust, and every effort I perform is aimed to raise the industry standards bar as a whole. Overall, I have a genuine ardency for team collaboration and hold a robust inventory of accomplishments to date, all of which can give you the peace of mind that your full stack development objectives are in the best possible hands to succeed.
                        </Typography>
                        <div className={classes.imgMd}>
                            <Image
                                src='/img/profilePicture.jpg'
                                height={220}
                                width={screen.width * .125}
                                // layout='intrinsic'
                                layout='intrinsic'
                                objectFit='contain'
                                // objectPosition='40% 100%'
                                alt='Personal Photo'
                            />
                        </div>
                    </div>
                    <div className={classes.paragraphContainer}>
                        <div className={classes.imgMd}>
                            <Image
                                src='/img/12721.jpg'
                                height={600}
                                width={500}
                                layout='intrinsic'
                                // layout='responsive'
                                objectFit='contain'
                                // objectPosition='100% 80%'
                                alt='Personal Photo'
                            />
                        </div>
                        <Typography className={classes.textMd}>
                            There is no denying that I love my career, and I take pride in delivering top-quality, fully tailored services that support my client in reaching new levels of digital success. However, in my free time, you can find me enjoying the outdoors, animals, avidly hiking, and being a proud husband and father. In fact, my family is my biggest inspiration and motivation that pushes me to be the best that I can be.
                        </Typography>
                    </div>
                </section>
    )
}

export default MediumScreen