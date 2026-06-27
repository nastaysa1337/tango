export default function Hero() {
  return (
    <section className="py-20 md:py-28">
      <div className="container grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-graphite/10 bg-white/35 px-4 py-2 text-xs font-black uppercase tracking-[.22em] text-clay">premium digital atelier</p>
          <h1 className="display text-[18vw] uppercase leading-[.78] md:text-[112px]">САЙТЫ<span className="script block text-6xl normal-case tracking-normal text-clay md:text-8xl">для бизнеса</span></h1>
          <p className="mt-8 max-w-xl text-2xl font-semibold leading-tight">которые выглядят дороже и приводят заявки</p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-graphite/72">Я создаю лендинги, редизайн, квизы и digital-упаковку для бизнеса, которому нужен понятный образ, доверие и заявки.</p>
          <a href="#contact" className="btn btn-primary mt-8">Написать “АУДИТ”</a>
        </div>
        <div className="card flex aspect-[4/5] items-end rounded-[36px] bg-gradient-to-br from-graphite via-clay to-champagne p-8 text-milk">
          <p className="display text-4xl uppercase leading-none">хаос → структура → заявки</p>
        </div>
      </div>
    </section>
  );
}
