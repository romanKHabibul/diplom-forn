import cl from './About.module.scss'

const About = () => {
    const inf = [
        {id: 1, imgLeft: "./image/images1.jpg", imgRight: "./image/images2.jpg", title: "Что это за битва?", description: "Одно из важнейших сражений Второй Мировой войны между Красной армией и вермахтом при поддержке армий стран «Оси», закончившееся победой РККА"},
        {id: 2, imgLeft: "./image/images2.jpg", imgRight: "./image/images1.jpg", title: "Для чего сайт?", description: "Данный веб-ресурс - место объединения информации об уроженцах Златоуста, принимавших участие в Сталинградской битве"},
        {id: 3, imgLeft: "./image/images1.jpg", imgRight: "./image/images2.jpg", title: "Что ещё можно узнать?", description: "Помимо списка героев, выполненного по основам Бессмертного полка, на сайте также расположена информация о боях"}
    ]

    return (
        <div className="container">
        <div className={cl.about}>
            {Array.isArray(inf) && inf.map((card, index) => 
                inf?.length ?
                <div data-aos='fade-up' data-aos-delay={50 * index * 2} className={cl.card} key={card.id}>
                    <img src={card.imgLeft} alt="hero" />
                    <div data-aos='fade-up' data-aos-delay={60 * index * 2} className={cl.info}>
                        <h3 className={cl.title}>
                            {card.title}
                        </h3>
                        <p className={cl.text}>
                            {card.description}
                        </p>
                    </div>
                    <img data-aos='fade-up' data-aos-delay={70 * index * 2} src={card.imgRight} alt="hero" />
                </div>

            :

            <h2>К сожалению, не удалось загрузить информацию. Повторите попытку чуть позже</h2>

            )}

            <div className={cl.label}>
                <h2 className={cl.textBack}>
                    Подвиг народа
                </h2>
            </div>
            
        </div>
        </div>
    )
}

export default About
