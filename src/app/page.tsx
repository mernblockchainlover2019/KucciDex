import Header from "@/components/header";
import Footer from "@/components/footer";
import Section from "@/components/section";
import { Widget } from "@rango-dev/widget-embedded";
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
      <div className="grid grid-cols-3 mx-[120px] gap-[20px]">
        <div>
          <div className={styles.textVideoTitle}>First Time on Dexifier?</div>
          <div className={"my-2 " + styles.textVideoSubtitle}>Watch this video</div>
          <iframe src="https://www.youtube.com/embed/pq7g0O76g2E" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
        <div className="col-span-2 relative">
          <iframe className="w-[360px] h-[700px] z-[1] relative" src={`https://widget.rango.exchange/?config=${JSON.stringify(config)}`} />
          <div className="absolute w-[180px] right-[40px] top-[-200px]">
            <img src="1.gif" className="rotate-[120deg]" alt="gif1" />
          </div>
          <div className="absolute w-[380px] right-[-180px] top-[140px]">
            <img src="2.gif" className="" alt="gif2" />
          </div>
        </div>
      </div>
    </Section>
    <Section>
      <div className="grid grid-cols-2 ml-[120px] mr-[40px] gap-[60px]">
        <div className={styles.textSectionTitle28}>
          <span className={styles.textHighlight}>Easy</span> & Infinite Exchange routes
        </div>
        <div></div>
        <div className="relative">
          <div className="absolute w-[333px] left-[120px] top-[0px]">
            <img src="3.gif" className="rotate-[-95deg]" alt="gif3" />
          </div>
          <div className="absolute w-[280px] left-[0px] top-[-40px]">
            <img src="5.gif" className="rotate-[75deg]" alt="gif5" />
          </div>
        </div>
        <div className={styles.textExchange}>
          We automatically find the fastest & cheapest trade routes for you. <br /><br />
          With 50+ Blockchains supported, and 1000s of coins, there are no limits to what you can trade.
        </div>
      </div>
    </Section>
    <Section>
      <div className="grid mx-[120px] gap-[40px]">
        <div className={styles.textSectionTitle48}>
          <span className={styles.textHighlight}>Privacy</span> comes first
        </div>
        <div className={styles.textSectionContent}>
          At Dexifier, we believe in the unalienable right to privacy and freedom in the financial world. In a landscape cluttered with mandatory sign-ups and invasive KYC checks, we stand apart. Dexifier is your gateway to a decentralized exchange experience that fiercely protects your anonimity and financial privacy.
        </div>
        <div className={"font-bold " + styles.textSectionContent}>
          No Logins, No Cookies, No KYC -- EVER.
        </div>
        <div className="grid grid-cols-3 gap-[20px]">
          <div className={styles.cardPrivacy}>NO logins/ signups</div>
          <div className={styles.cardPrivacy}>No cookies</div>
          <div className={styles.cardPrivacy}>NO kyc</div>
        </div>
      </div>
    </Section>
    <Section>
      <div className="grid mx-[80px] mt-[60px] p-[120px] pt-[40px] border gap-[20px]">
        <div className={"text-center " + styles.textSectionTitle40}>
          <span className={styles.textHighlight}>Frequently</span> traded pairs
        </div>
        <div className="grid grid-cols-3 mt-[40px] gap-[20px]">
          <div className={"grid gap-[30px] underline " + styles.textSectionContent}>
            <a href="#">ETH to BTC</a>
            <a href="#">LTC to ETH</a>
            <a href="#">USDT to BTC</a>
            <a href="#">BTC to XRP</a>
            <a href="#">BTC to USDT</a>
            <a href="#">ETH to BTC LTC to ETH</a>
          </div>
          <div className={"grid gap-[30px] underline " + styles.textSectionContent}>
            <a href="#">ETH to BTC</a>
            <a href="#">LTC to ETH</a>
            <a href="#">USDT to BTC</a>
            <a href="#">BTC to XRP</a>
            <a href="#">BTC to USDT</a>
            <a href="#">ETH to BTC LTC to ETH</a>
          </div>
        </div>
        <div className="absolute w-[180px] left-[0px] top-[-140px]">
          <img src="1.gif" className="rotate-[-95deg]" alt="gif1" />
        </div>
        <div className="absolute w-[480px] right-[120px] bottom-[-20px]">
          <img src="4.gif" className="rotate-[35deg]" alt="gif4" />
        </div>
      </div>
    </Section>
    <Section>
      <div className="flex ml-[120px] mr-[40px] mt-[140px] gap-[20px]">
        <div className="w-[55%] p-[40px] border">
          <div className={styles.textSectionTitle40}>
            <span className={styles.textHighlight}>24/7</span> Customer Support
          </div>
          <div className={"mt-[40px] " + styles.textSectionContent}>
            Having trouble with a swap? Head to our Discord, open a ticket or ask a question. Our international team & community are ready to help, around the clock.
          </div>
          <div className={"mt-[80px] " + styles.buttonJoin}>
            Join Discord
          </div>
        </div>
        <div className="w-[45%] flex items-center">
          <img src="customer.png" alt="customer" />
        </div>
        <div className="absolute w-[260px] left-[-120px] top-[-120px]">
          <img src="5.gif" className="rotate-[-150deg]" alt="gif5" />
        </div>
      </div>
    </Section>
    <Section>
      <div className="flex ml-[120px] mr-[40px] gap-[20px]">
        <div className={"w-[45%] " + styles.textSectionTitle40}>
          <span className={styles.textHighlight}>Wallets</span> & Projects supported
          <div className="relative">
            <div className="absolute w-[400px] left-[-80px] top-[60px]">
              <img src="2.gif" className="rotate-[0deg]" alt="gif2" />
            </div>
            <div className="absolute w-[260px] right-[120px] top-[140px]">
              <img src="5.gif" className="rotate-[-150deg]" alt="gif5" />
            </div>
          </div>
        </div>
        <div className="w-[55%] grid grid-cols-3 gap-x-[70px] gap-y-[35px] wallets" style={{ gridAutoRows: '150px' }}>
          <div className="bg-white"><img src="wallets/xdefi.jpg" alt="xdefi" /></div>
          <div className="bg-white"><img src="wallets/metamask.jpg" alt="metamask" /></div>
          <div className="bg-white"><img src="wallets/phantom.jpg" alt="phantom" /></div>
          <div className="bg-white"><img src="wallets/keplr.jpg" alt="keplr" /></div>
          <div className="bg-white"><img src="wallets/tronlink.png" alt="tronlink" /></div>
          <div className="bg-white"><img src="wallets/apptopia.png" alt="apptopia" /></div>
          <div><img src="wallets/rango.png" alt="rango" /></div>
          <div><img src="wallets/thor.png" alt="thor" /></div>
          <div><img src="wallets/maya.png" alt="maya" /></div>
          <div><img src="wallets/1inch.svg" alt="1inch" /></div>
          <div><img src="wallets/across.png" alt="across" /></div>
        </div>
      </div>
    </Section>
    <Section>
      <div className="grid grid-cols-2 ml-[120px] mr-[40px] gap-[20px]">
        <div>
          <div className={"mt-[80px] " + styles.textCommunity}>
            <span className={styles.textHighlight}>Join</span> Our Community!
          </div>
          <div className={"mt-[60px] mr-[160px] " + styles.textSectionContent}>
            Discover the latest insights on Discord, engage with fellow crypto enthusiasts on Telegram, follow our pulse on Twitter, catch our informative and entertaining videos on YouTube.
          </div>
          <div className="mt-[240px] p-[20px] border flex">
            <div className={"flex items-center " + styles.textSocials}>socials</div>
            <div className="ml-auto flex gap-[20px] h-[50px]">
              <img src="socials/discord.svg" alt="discord" />
              <img src="socials/telegram.svg" alt="telegram" />
              <img src="socials/twitter.svg" alt="twitter" />
              <img src="socials/youtube.svg" alt="youtube" />
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute w-[330px] left-[120px] top-[60px]">
            <img src="3.gif" className="rotate-[-160deg]" alt="gif3" />
          </div>
          <div className="absolute w-[280px] left-[40px] top-[240px]">
            <img src="5.gif" className="rotate-[6deg]" alt="gif5" />
          </div>
        </div>
      </div>
    </Section>
    <Footer />
  </main>
}
