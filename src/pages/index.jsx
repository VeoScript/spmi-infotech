import React from 'react'
import Head from 'next/head'

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>SPMI IT</title>
      </Head>
      <div className="flex flex-row items-center justify-center w-full h-screen">
        <h1 className="font-bold text-5xl">SPMI IT | HOME</h1>
      </div>
    </React.Fragment>
  )
}
