import NextNprogress from 'nextjs-progressbar'

export default function NextProgress() {
  return (
    <NextNprogress
      color="#DBADEC
      linear-gradient(
        to right,
        #EE85A2,
        #BC4899,
        #E779B8,
        #DBADEC,
        #2F0C49
      );"
      startPosition={0.3}
      stopDelayMs={200}
      height={5}
      showOnShallow={true}
      options={{ easing: 'ease', speed: 500 }}
    />
  )
}