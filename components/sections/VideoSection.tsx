import React from 'react'
import { PlayIcon } from '../icons'

export default function VideoSection() {
  return ( 
    <section className={`bg-[url('/video.png')] grid place-content-center bg-no-repeat bg-cover h-[30rem] container mx-auto`}>
        <PlayIcon />
    </section>
  )
}
