import React from 'react'
import Head from 'next/head'
import Layout from '~/layouts/default'
import Header from '~/components/Header'
import DisplayNews from '~/components/DisplayNews'

export default function News({ news }) {
  return (
    <React.Fragment>
      <Head>
        <title>News</title>
      </Head>
      <Layout>
        <div className="flex flex-col items-center w-full h-full overflow-hidden">
          <Header page="News" />
          <DisplayNews news={news} />
        </div>
      </Layout>
    </React.Fragment>
  )
}

export async function getServerSideProps() {
  const result = await fetch(`https://newsapi.org/v2/top-headlines?country=ph&apiKey=${process.env.NEWS_API_KEY}`)
  const news = await result.json()
  return {
    props: {
      news
    }
  }
}