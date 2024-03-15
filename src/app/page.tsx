import Header from "@/components/header"
import Section from "@/components/section"

import styles from '@/styles/home.module.css';

const config = {
  "amount": 1,
  "from": { "blockchain": "ETH", "token": { "blockchain": "ETH", "address": null, "symbol": "ETH" } },
  "to": { "blockchain": "thorchain", "token": { "blockchain": "thorchain", "address": null, "symbol": "RUNE" } },
  "theme": {
    "mode": "light",
    "borderRadius": 10,
    "secondaryBorderRadius": 5,
    "singleTheme": true, "colors": { "light": { "primary": "$1d054c" } }
  },
  "affiliate": {
    "ref": "eHvDvg",
    "percent": 0.25,
    "wallets": { "ETH": "your wallet", "BSC": "your wallet", "POLYGON": "your wallet" }
  },
  "apiKey": "c6381a79-2817-4602-83bf-6a641a409e32",
  "walletConnectProjectId": "e24844c5deb5193c1c14840a7af6a40b"
}

export default function Home() {
  return <main>
    <Section>
      <Header />
      <div className="absolute w-[180px] right-[160px] top-[-80px]">
        <img src="1.gif" className="rotate-[120deg]" />
      </div>
      <div className="absolute w-[380px] right-[-60px] top-[260px]">
        <img src="2.gif" className="" />
      </div>
      <div className="flex mx-[120px] gap-[20px]">
        <div className="w-3/6 lg:w-2/6 mt-[40px]">
          <div className="font-title text-3xl">First Time on Dexifier?</div>
          <div className="font-content text-sm my-2">Watch this video</div>
          <iframe src="https://www.youtube.com/embed/pq7g0O76g2E" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
        <div className="w-3/6 lg:w-2/6">
          <iframe className="w-full h-[700px] z-[1] relative" src={`https://widget.rango.exchange/?config=${JSON.stringify(config)}`} />
        </div>
      </div>
    </Section>
    <Section>
    </Section>
    <Section></Section>
    <Section></Section>
    <Section></Section>
  </main>
}
