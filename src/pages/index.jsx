import React from 'react'
import Head from 'next/head'
import Layout from '~/layouts/default'
import Header from '~/components/Header'
import CarouselComponent from '~/components/CarouselComponent'
import DailyConsultations from '~/components/DailyConsultations'

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>SPMI IT</title>
      </Head>
      <Layout>
        <div className="flex flex-col items-center w-full h-full overflow-hidden">
          <Header page="Home" />
          <div className="flex flex-col w-full h-full overflow-y-auto">
            <CarouselComponent />
            <DailyConsultations />
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}
