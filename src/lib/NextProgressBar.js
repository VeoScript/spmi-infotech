import NextNprogress from 'nextjs-progressbar'

export default function NextProgress() {
  return (
    <NextNprogress
      color="#00B7F1
      linear-gradient(
        to right,
        #00B7F1,
        #016BB9,
        #00B7F1,
        #016BB9,
        #252C36
      );"
      startPosition={0.3}
      stopDelayMs={200}
      height={5}
      showOnShallow={true}
      options={{ easing: 'ease', speed: 500 }}
    />
  )
}