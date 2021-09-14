import React from 'react'
import Head from 'next/head'
import Layout from '~/layouts/default'
import Header from '~/components/Header'
import DailyConsultations from '~/components/DailyConsultations'

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>SPMI IT</title>
      </Head>
      <Layout>
        <div className="flex flex-col items-center w-full h-full">
          <Header page="Home" />
          <DailyConsultations />
        </div>
      </Layout>
    </React.Fragment>
  )
}
