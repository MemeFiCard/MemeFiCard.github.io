import * as React from 'react'
import '../styles/global.css'
import { TypeAnimation } from 'react-type-animation'
import Marquee from 'react-fast-marquee'
import { Seo } from '../components/seo'

function generateCombination(words) {
    // Shuffle the words array
    let shuffledWords = words.slice() // Make a copy to avoid modifying the original
    for (let i = shuffledWords.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[shuffledWords[i], shuffledWords[j]] = [
            shuffledWords[j],
            shuffledWords[i],
        ]
    }

    return shuffledWords.join(' ')
}

const words = ['MOTHER', 'FATHER', 'SON', 'TRUMP', 'DADDY']

const IndexPage = () => {
    return (
        <main className="bg-black text-white min-h-screen flex items-center justify-center flex-col gap-3">
            <div className="relative z-10 flex flex-col items-center gap-3">
                <h1 className="text-6xl font-medium">M3M3F1.XYZ</h1>
                <div>
                    <TypeAnimation
                        sequence={[
                            'Pay With SOL',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Pay With Mother',
                            1000,
                            'Pay With Daddy',
                            1000,
                            'Pay With Son',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        className="text-4xl font-bold"
                        repeat={Infinity}
                    />
                </div>
                <div className="bg-white text-black text-3xl p-3 cursor-pointer font-bold">
                    Share Now
                </div>
            </div>
            <div className="fixed top-0 left-0 right-0 bottom-0 z-0 blur opacity-50">
                {Array.from({ length: 5 }).map((_, i) => (
                    <>
                        <Marquee speed={50}>
                            <div className="text-6xl text-[#f087ff] font-light">
                                {generateCombination(words)}{' '}
                                {generateCombination(words)}
                            </div>
                        </Marquee>
                        <Marquee speed={100}>
                            <div className="text-6xl text-[#19fb9b] font-light">
                                {generateCombination(words)}{' '}
                                {generateCombination(words)}
                            </div>
                        </Marquee>
                        <Marquee speed={80}>
                            <div className="text-6xl text-[#1fcff1] font-light">
                                {generateCombination(words)}{' '}
                                {generateCombination(words)}
                            </div>
                        </Marquee>
                    </>
                ))}
            </div>

            {/* <div className="cursor-pointer px-4 py-2 bg-white text-black text-3xl shadow">
                Share
            </div> */}
        </main>
    )
}

export default IndexPage
export const Head = () => <Seo />
