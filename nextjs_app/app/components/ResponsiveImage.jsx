import React from 'react';
import Image from 'next/image';

export const ResponsiveImage = (props) => {
    return (
        <>
            <Image alt={props.alt} className='block lg:hidden' src={props.mobileSrc} width={props.mobileSize} height={props.mobileSize}></Image>
            <Image alt={props.alt} className='hidden lg:block' src={props.desktopSrc} width={props.desktopSize} height={props.desktopSize}></Image>
        </>
    )
}