/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Moment from 'react-moment'

export default function DisplayNews({ news }) {
  return (
    <div className="flex flex-col w-full h-full overflow-y-auto p-3 space-y-2">
      {news.articles.map((({ source, title, url, urlToImage, publishedAt, content }, i) => {
        return (
          <div className="flex flex-row items-center w-full h-full border border-nature-white border-opacity-20 space-x-3" key={i}>
            <div className="flex w-full max-w-sm h-full">
              <img
                src={ !urlToImage ? 'https://blog.remitly.com/wp-content/uploads/2018/06/philippines-1195394_1920.jpg' : urlToImage }
                alt="news_image"
                className="w-full h-full max-h-[28rem] object-cover bg-nature-dim"
              />
            </div>
            <div className="flex flex-col w-full max-w-full px-3 py-2 space-y-2">
              <div className="flex flex-col w-full">
                <h1 className="font-bold text-xl">{ title }</h1>
                <h6 className="font-light text-xs text-nature-black text-opacity-80">
                  <Moment date={ publishedAt } format='LL' />
                </h6>
              </div>
              <div className="flex w-full">
                <h1 className="font-light text-sm line-clamp-2">
                  {!content ? 'No content available' : content}
                </h1>
              </div>
              <div className="flex w-full">
                <h1 className="font-bold text-sm text-nature-light">{ source.name }</h1>
              </div>
              <div className="flex w-full">
                <Link href={url}>
                  <a target="_blank" className="flex items-center px-3 py-[5px] space-x-1 border border-nature-white border-opacity-20 transition ease-in-out duration-100 hover:scale-95">
                    <span className="font-light text-xs">Read More...</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        )
      }))}
    </div>
  )
}