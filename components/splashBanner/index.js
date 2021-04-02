import React from 'react';
import Image from 'next/image'
import { Typography } from '@material-ui/core';

const SplashBanner = () => {
    return (
        <div 
        // style={{ maxHeight: '400px', height: '500px', width: '100%' }}
        >
            <Image
                src='/img/12721.jpg'
                height={800} 
                width={2400}
                layout='responsive'
                // layout='intrinsic'
                // layout='fill'
                objectFit='cover'
                objectPosition='100% 100%'
                alt='Banner image'
                // style={{height: '100%', width: '100%', objectFit: 'cover'}}
                
            />
                {/* <img
                src='/img/12721.jpg'
                // height={400} 
                // width={800}
                // layout='responsive'
                // layout='intrinsic'
                // layout='fill'
                // objectFit='cover'
                // alt='Banner image'
                style={{height: '100%', width: '100%', objectFit: 'cover'}}
                
            /> */}
            <Typography style={{ position: 'absolute', top: "20%", left: "50%" }}>
                Hello, my name is Erik Hirsch
            </Typography>
        </div>
    )
}

export default SplashBanner