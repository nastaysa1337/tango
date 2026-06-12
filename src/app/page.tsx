const services = [
  {
    title: 'Лендинг под запуск',
    text: 'Страница, которая быстро объясняет ценность продукта, прогревает доверие и ведёт к заявке.',
  },
  {
    title: 'Сайт эксперта',
    text: 'Упаковка личности, опыта, кейсов, отзывов и оффера в единую дорогую систему.',
  },
  {
    title: 'Редизайн и усиление',
    text: 'Пересобираю старый сайт так, чтобы он выглядел современно, уверенно и дороже.',
  },
]

const cases = [
  'Premium personal brand',
  'Astrology expert platform',
  'Beauty studio landing',
  'Course launch page',
]

const steps = ['Диагностика', 'Смыслы', 'Структура', 'Дизайн', 'Адаптив', 'Запуск']

const packages = [
  {
    name: 'Start',
    price: 'от 45 000 ₽',
    features: ['лендинг до 6 блоков', 'структура и тексты', 'адаптив', 'базовая анимация'],
  },
  {
    name: 'Premium',
    price: 'от 85 000 ₽',
    features: ['полная упаковка', 'вау-дизайн', 'анимации при скролле', 'подготовка к рекламе'],
  },
  {
    name: 'Signature',
    price: 'от 150 000 ₽',
    features: ['сайт под ключ', 'стратегия', 'сложные секции', 'эффект дорогого бренда'],
  },
]

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="logo" href="#top">NASTASYA</a>
        <nav>
          <a href="#services">Услуги</a>
          <a href="#work">Кейсы</a>
          <a href="#price">Пакеты</a>
          <a href="#contact">Связаться</a>
        </nav>
      </header>

      <section id="top" className="hero section">
        <div className="heroGlow" />
        <p className="eyebrow">Digital упаковка / сайты / маркетинг</p>
        <h1>Сайты, которые выглядят дорого и продают до того, как клиент написал.</h1>
        <p className="lead">
          Я собираю визуал, смыслы и структуру в цельный сайт для экспертов, брендов и бизнесов,
          которым нужен не шаблон, а ощущение статуса.
        </p>
        <div className="actions">
          <a className="button primary" href="https://www.instagram.com/mynameisnastasya" target="_blank" rel="noreferrer">Написать в Instagram</a>
          <a className="button" href="#work">Смотреть подход</a>
        </div>
        <div className="stats">
          <span><b>3+ года</b> маркетинга</span>
          <span><b>premium</b> визуал</span>
          <span><b>full-cycle</b> сайт под ключ</span>
        </div>
      </section>

      <section className="marquee" aria-label="services marquee">
        <span>branding</span><span>web design</span><span>landing pages</span><span>strategy</span><span>motion</span><span>premium packaging</span>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Не просто красиво</p>
          <h2>Сайт должен продавать уровень, а не объяснять, почему ты не как все.</h2>
        </div>
        <p className="bigText">
          Я не делаю безликие страницы «о себе». Я вытаскиваю сильные смыслы, собираю оффер,
          усиливаю доверие и делаю визуал, из-за которого тебя воспринимают дороже.
        </p>
      </section>

      <section id="services" className="section">
        <p className="eyebrow">Что можно заказать</p>
        <h2>Услуги</h2>
        <div className="cards three">
          {services.map((item) => (
            <article className="card" key={item.title}>
              <span className="cardNumber">0{services.indexOf(item) + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="section darkBlock">
        <p className="eyebrow">Визуальное направление</p>
        <h2>Кейсы и форматы, под которые можно собрать сайт</h2>
        <div className="showcase">
          {cases.map((item) => (
            <div className="mockup" key={item}>
              <div className="mockupTop" />
              <h3>{item}</h3>
              <p>Структура, визуал, оффер, доверие, CTA и адаптивная версия.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Процесс</p>
          <h2>Я веду проект от хаоса в голове до готового сайта.</h2>
        </div>
        <div className="timeline">
          {steps.map((step, index) => (
            <div className="step" key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="price" className="section">
        <p className="eyebrow">Пакеты</p>
        <h2>Можно начать с понятного объёма и вырасти в большую упаковку.</h2>
        <div className="cards three">
          {packages.map((item) => (
            <article className="card price" key={item.name}>
              <h3>{item.name}</h3>
              <strong>{item.price}</strong>
              <ul>
                {item.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section final" id="contact">
        <p className="eyebrow">Финальный CTA</p>
        <h2>Хватит выглядеть дешевле, чем ты есть.</h2>
        <p>
          Напиши мне, и я скажу, какую упаковку можно собрать под твой продукт, экспертность или бренд.
        </p>
        <a className="button primary" href="https://www.instagram.com/mynameisnastasya" target="_blank" rel="noreferrer">Обсудить сайт</a>
      </section>
    </main>
  )
}
