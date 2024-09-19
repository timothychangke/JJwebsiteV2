import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ResponsiveImage } from "../ResponsiveImage";
import { GamePopup } from "../store/GamePopup";

const GameCard = (props) => {
    const router = useRouter();

    return (
        <div className="relative bg-beige border-dark-green border-[6px] rounded-lg px-4 pt-4 pb-28 h-full flex flex-col items-center">
            {props.imgSrc ? (
                <ResponsiveImage alt={`${props.title} icon`} mobileSrc={`/images/Games/${props.imgSrc}`} desktopSrc={`/images/Games/${props.imgSrc}`} mobileSize={80} desktopSize={80}></ResponsiveImage>
            ) : (<></>)}
            <div className='text-center leading-snug flex flex-col justify-between h-full'>
                <div className='grow justify-center items-center flex'>
                    <h3 className='text-xl font-bold'>{props.title}</h3>
                </div>
                <p className='text-black mt-3 text-sm'>{props.description}</p>
                <div className='absolute left-0 -bottom-4 right-0'>
                    <div className='text-black mb-2 font-bold h-16 flex flex-col justify-center text-sm'>
                        {props.values && props.values.map((value, index) => {
                            return (<p key={index}>{value}</p>);
                        })}
                    </div>
                    {props.dialog ? (
                        <GamePopup index={props.index} cart={props.cart} setCart={props.setCart} cartOpen={props.cartOpen} setCartOpen={props.setCartOpen}></GamePopup>
                    ) : (
                        <Button onClick={() => router.push("games/"+props.link)} className='font-bold border-dark-green border-2 rounded-lg bg-light-green text-dark-green hover:border-dark-green hover:text-dark-green hover:bg-normal-green uppercase'>{props.button}</Button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default GameCard;