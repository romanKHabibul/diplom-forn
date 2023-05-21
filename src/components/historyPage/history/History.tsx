import cl from './History.module.scss'

const History = () => {
    return (
        <div className={cl.history}>
        <div className="container">
        <div className={cl.historyItems}>
            <h2 className={cl.title} id="UP">
                Сталинградская битва 1942-1943 года
            </h2>
            <p className={cl.subtext}>
                С июля 1942-го по февраль 1943-го в Сталинградской битве наши генералы Рокоссовский, Ватутин и Тимошенко оказались сильнее Паулюса, Гота, Манштейна и изменили ход войны в пользу СССР, уничтожив крупнейшую группировку вермахта и его союзников
            </p>
            <img src="./image/history1.jpg" alt="Stalingrad" />
            <p className={cl.text}>
                Сталинградская битва 1942-1943 года началась на правобережье Дона, в ней участвовало более 2 млн человек, в том числе армии Италии, Румынии, Венгрии и Хорватии, а погибло более миллиона. Она была отмечена самыми кровавыми уличными боями в разрушенном Сталинграде и невероятным героизмом советских солдат трех фронтов, который потряс немцев, уничтожил группу армий «В» и подорвал их боевой дух.
            </p>
            <h2 className={cl.title} id="DATE">
                Даты битвы
            </h2>
            <p className={cl.text}>
                Началом Сталинградского сражения считается 17 июля 1942 года. Тогда авангарды 6-й армии Паулюса на реках Чир и Цимла вступили в бой с подразделениями 62-й и 64-й армий Сталинградского фронта. Завершение — 2 февраля 1943-го, когда в плен сдалась гитлеровская группировка, основу которой составляли остатки 6-й армии вермахта, а также подразделения 8-й итальянской, 3-й и 4-й румынских и 2-й венгерских армий в Сталинградском котле.
            </p>
            <h2 className={cl.title} id="step">
                Ход битвы
            </h2>
            <p className={cl.text}>
                К середине июля 1942-го на Сталинградском направлении превосходство противника над Красной армией в самолетах было более чем в два раза. В танках и артиллерии — в 1,3 раза. К концу июля – началу августа немцы выдавили подразделения 62-й и 64-й армий на левобережье Дона. Часть наших дивизий оказалась в окружении.
                <br/><br/>
                28 июля Сталин издал приказ №227 «Ни шагу назад!». К отступающим применялись самые жесткие меры, вплоть до расстрела. За три недели наступления немецкие танки 4-й армии Гота подошли к Сталинграду с юга, 14-й танковый корпус — с севера, шесть дивизий 6-й армии Паулюса — с запада.
            </p>
            <img loading='lazy' src="./image/history2.jpg" alt="Stalingrad" />
            <p className={cl.text}>
                23 августа город на Волге был уничтожен самой массовой суточной бомбардировкой в истории войны — 2 тысячи самолето-вылетов 4-го воздушного флота люфтваффе разрушили город, где до начала боев проживало около 400 тысяч человек, убив пятую часть горожан. Весь сентябрь немцы пытались сбросить наши войска в Волгу.
                <br/><br/>
                Тракторный завод под обстрелами продолжал выпускать танки, которые с проходной уходили в бой. Подкрепления шли с левого берега Волги катерами и баржами. Их подвергали постоянным бомбежкам люфтваффе.
            </p>
            <img loading='lazy' src="./image/history3.jpg" alt="Stalingrad" />
            <p className={cl.text}>
                14 октября пять немецких дивизий начали наступление при поддержке тысячи самолетов. К 11 ноября немцы вышли к Волге на участке в полкилометра. Но потеряли до половины личного состава.
                <br/><br/>
                19 ноября в рамках операции «Уран» началось контрнаступление Красной армии. 23 ноября в районе Калача-на-Дону огромная фашистская группировка, пытавшаяся захватить Сталинград, была окружена. В течение декабря были разгромлены итальянские, румынские и некоторые немецкие части. Мы отбили попытки танковых дивизий Манштейна пробить коридор к Паулюсу. В январе 1943-го 6-я армия советскими ударами была разделена на две части.
                <br/><br/>
                31 января была ликвидирована южная группировка фашистов, пленен фельдмаршал Паулюс с 24 генералами. 2 февраля капитулировала северная группировка немцев.
            </p>
            <h2 className={cl.title} id="END">
                Итоги и значение
            </h2>
            <p className={cl.text}>
                Капитуляция 20 немецких дивизий стала днем национального траура для Третьего рейха и сильным ударом по психике Гитлера. Победа СССР в Сталинграде переломила ход Второй мировой войны. Ни Турция, ни Япония, бывшие союзниками Германии, не рискнули начать боевые действия против Советского Союза. А США и Британия вынуждены были согласиться с главной ролью СССР в подавлении Германии — увеличились поставки в Союз вооружений, приблизилось открытие Второго фронта.
            </p>
        </div>
        </div>
        <ul className={cl.nav}>
            <li>
                <a href="/history/#UP" className="">
                    Наверх
                </a>
            </li>  
            <li>
                <a href="/history/#DATE" className="">
                    Даты битвы   
                </a>
            </li> 
            <li>
                <a href="/history/#step" className="">
                    Ход битвы
                </a>
            </li> 
            <li>
                <a href="/history/#END" className="">
                    Итоги и значение
                </a>
            </li> 
        </ul>
        </div>
    )
}

export default History
