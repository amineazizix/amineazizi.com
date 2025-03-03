import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <main className="container-main row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <div className="w-full h-full">
          <p className="promise-content my-10 py-15 md:mt-20 md:py-20">
            G&apos;day, I&apos;m Amine Azizi, 
            a <span className="focus-word">Senior Software Engineer</span>. 
            <br/> I help teams worldwide get their ideas and products to the moon. 
            I&apos;m serious about creating amazing <span className="focus-word"> tools</span>, <span className="focus-word">practices</span>, and <span className="focus-word">open works</span> for creators, entrepreneurs, and creative teams.</p>
        </div>
      </main>

      <div className="overflow-hidden">
        <div className="relative w-max overflow-hidden animate-infinite-slide-slow mb-10 md:mb-15">
          <div className="inline-block">
            <div className="portfolio-item"><Image src="/portfolio/allocab.png" alt="Allocab" width={160} height={160}/> </div>
            <div className="portfolio-item"><Image src="/portfolio/blockpulse.png" alt="Blockpulse" width={160} height={160}/> </div>
            <div className="portfolio-item"><Image src="/portfolio/sfr_business.svg" alt="SFR Business" width={160} height={160}/> </div>
            <div className="portfolio-item"><Image src="/portfolio/teamoty.png" alt="Teamoty" width={160} height={160}/> </div>
            <div className="portfolio-item"><Image src="/portfolio/legalplace.png" alt="Legalplace" width={160} height={160}/> </div>
            <div className="portfolio-item"><Image src="/portfolio/skaalab.svg" alt="Skaalab" width={160} height={160}/> </div>
            <div className="portfolio-item"><Image src="/portfolio/place2swap.png" alt="Place2swap" width={160} height={160}/> </div>
            <div className="portfolio-item"><Image src="/portfolio/jules.png" alt="Jules" width={160} height={160}/> </div>
            <div className="portfolio-item"><Image src="/portfolio/cdiscount.png" alt="Cdiscount" width={160} height={160}/> </div>
          </div>
          <div className="inline-block">
            <div className="portfolio-item"><Image src="/portfolio/allocab.png" alt="Allocab" width={160} height={160}/> </div>
            <div className="portfolio-item"><Image src="/portfolio/blockpulse.png" alt="Blockpulse" width={160} height={160}/> </div>
            <div className="portfolio-item"><Image src="/portfolio/sfr_business.svg" alt="SFR Business" width={160} height={160}/> </div>
            <div className="portfolio-item"><Image src="/portfolio/teamoty.png" alt="Teamoty" width={160} height={160}/> </div> 
            <div className="portfolio-item"><Image src="/portfolio/place2swap.png" alt="Place2swap" width={160} height={160}/> </div>
            <div className="portfolio-item"><Image src="/portfolio/legalplace.png" alt="Legalplace" width={160} height={160}/> </div>
            <div className="portfolio-item"><Image src="/portfolio/skaalab.svg" alt="Skaalab" width={160} height={160}/> </div>
            <div className="portfolio-item"><Image src="/portfolio/jules.png" alt="Jules" width={160} height={160}/> </div>
            <div className="portfolio-item"><Image src="/portfolio/cdiscount.png" alt="Cdiscount" width={160} height={160}/> </div>
          </div>
        </div>
        <div className="relative h-[100px] w-max overflow-hidden animate-infinite-slide">
          <div className="inline-block">
            <div className="portfolio-item"><Image src="/portfolio/veepee.png" alt="Veepee" width={160} height={160}/> </div>
            <div className="portfolio-item"><Image src="/portfolio/lalchimiste.png" alt="L'alchimiste" width={160} height={160}/> </div>
            <div className="portfolio-item"><Image src="/portfolio/edbridg.png" alt="Edbridg" width={160} height={160}/> </div>
            <div className="portfolio-item"><Image src="/portfolio/wechsra.png" alt="Wechsra" width={160} height={160}/> </div>
            <div className="portfolio-item"><Image src="/portfolio/wscripted.png" alt="Wscripted" width={160} height={160}/> </div>
            <div className="portfolio-item"><Image src="/portfolio/expresscanada.png" alt="Express Canada" width={160} height={160}/> </div>
            <div className="portfolio-item"><Image src="/portfolio/imadrassa.png" alt="Imadrassa" width={160} height={160}/> </div>
          </div>
          <div className="inline-block">
            <div className="portfolio-item"><Image src="/portfolio/veepee.png" alt="Veepee" width={160} height={160}/> </div>
            <div className="portfolio-item"><Image src="/portfolio/lalchimiste.png" alt="L'alchimiste" width={160} height={160}/> </div>
            <div className="portfolio-item"><Image src="/portfolio/edbridg.png" alt="Edbridg" width={160} height={160}/> </div>
            <div className="portfolio-item"><Image src="/portfolio/wechsra.png" alt="Wechsra" width={160} height={160}/> </div>
            <div className="portfolio-item"><Image src="/portfolio/wscripted.png" alt="Wscripted" width={160} height={160}/> </div>
            <div className="portfolio-item"><Image src="/portfolio/expresscanada.png" alt="Express Canada" width={160} height={160}/> </div>
            <div className="portfolio-item"><Image src="/portfolio/imadrassa.png" alt="Imadrassa" width={160} height={160}/> </div>
          </div>
        </div>
      </div>
    </div>
  );
}
