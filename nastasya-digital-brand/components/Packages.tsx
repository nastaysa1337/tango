const packs = [['Старт','от 30 000 ₽'], ['Бизнес','от 45 000 ₽'], ['Заявки','от 70 000 ₽']];

export default function Packages() {
  return (
    <section id="packages" className="py-20">
      <div className="container">
        <h2 className="display text-5xl uppercase md:text-7xl">Пакеты</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {packs.map(([n, p], i) => <article key={n} className={`rounded-[34px] p-7 ${i===1 ? 'bg-graphite text-milk' : 'card'}`}><h3 className="display text-4xl uppercase">{n}</h3><p className="script mt-1 text-4xl text-champagne">{p}</p><p className="mt-5 leading-7 opacity-70">Структура, текст, дизайн, мобильная версия и форма заявки.</p></article>)}
        </div>
      </div>
    </section>
  );
}
