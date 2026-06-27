const services = ['Лендинг под ключ', 'Редизайн сайта', 'Первый экран', 'Квиз', 'Заявки в Telegram', 'AI-бот'];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container">
        <h2 className="display text-5xl uppercase md:text-7xl">Услуги</h2>
        <p className="script text-5xl text-clay">сайт как инструмент продаж</p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {services.map((s, i) => <article key={s} className="card rounded-[30px] p-6"><p className="display text-5xl text-champagne/80">0{i + 1}</p><h3 className="mt-5 text-2xl font-black">{s}</h3><p className="mt-4 leading-7 text-graphite/70">Собираю смысл, визуал и путь клиента до заявки.</p></article>)}
        </div>
      </div>
    </section>
  );
}
