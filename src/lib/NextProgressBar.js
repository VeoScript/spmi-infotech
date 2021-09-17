import NextNprogress from 'nextjs-progressbar'

export default function NextProgress() {
  return (
    <NextNprogress
      color="#FF9800
      linear-gradient(
        to right,
        #FF9800,
        #FA0300,
        #FF9800,
        #FA0300,
        #FF9800
      );"
      startPosition={0.3}
      stopDelayMs={200}
      height={5}
      showOnShallow={true}
      options={{ easing: 'ease', speed: 500 }}
    />
  )
}