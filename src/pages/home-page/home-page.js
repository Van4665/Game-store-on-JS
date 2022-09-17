import React from 'react';
import { GameItem } from '../../components/game-item';
import './home-page.css';

const GAMES = [
    {
        image: '/game-covers/assassins_creed_odyssey.jpg',
        title: 'Assassin’s Creed Odyssey',
        genres: ['Паркур', 'РПГ', 'Открытый мир'],
        price: 2343,
        video: 'https://www.youtube.com/embed/AQaSqKjbX60',
        id: 1,
        description: "Совершите настоящую одиссею и станьте легендарным героем Спарты в Assassin’s Creed® Одиссея. Вас ждет увлекательное путешествие, в ходе которого вы сами сможете определить собственную судьбу в мире, разрываемом противоречиями. Станьте свидетелем исторических событий и исследуйте многогранный мир, который меняется в зависимости от принятых вами решений.",
    },
    {
        image: '/game-covers/assassins_creed_origin.jpg',
        title: 'Assassin’s Creed Origins',
        genres: ['Паркур', 'РПГ', 'Открытый мир'],
        video: 'https://www.youtube.com/embed/x_1GwlWSil4',
        price: 2433,
        id: 2,
        description: 'Действие Assassin’s Creed® Истоки разворачивается в Древнем Египте. Это новое начало истории. Вас ждет множество захватывающих сюжетов. Вам предстоит исследовать великие пирамиды и разыскивать таинственные гробницы, а также освоить новую систему боя. А еще вы узнаете, с чего началась история Братства ассасинов.'
    },
    {
        image: '/game-covers/assassins_creed_syndicate.jpeg',
        title: 'Assassin’s Creed Syndicate',
        genres: ['Паркур', 'РПГ'],
        video: 'https://www.youtube.com/embed/F-fMRAWNZ4w',
        price: 790,
        id: 3,
        description: 'Лондон, 1868 год. Индустриальная революция, эпоха невероятных изобретений. Немыслимые ранее технологии меняют жизнь миллионов. Люди устремляются в Лондон, вдохновленные новыми возможностями, жаждущие стать частью нового мира, над которым будут не властны короли, императоры, политики и священники, мира, где деньги сравняют всех.'
    },
    {
        image: '/game-covers/assassins_creed_3.jpg',
        title: 'Assassin’s Creed lll',
        genres: ['Паркур', 'РПГ'],
        video: 'https://www.youtube.com/embed/-pUhraVG7Ow',
        price: 789,
        id: 4,
        description: 'Переживите события Американской революции заново или впервые в обновленной версии Assassins Creed® III с улучшенной графикой и усовершенствованной игровой механикой. В комплект входят все дополнения для одиночной игры и обновленная версия Assassins Creed Liberation'
    },
    {
        image: '/game-covers/assassins_creed_flag.jpg',
        title: 'Assassin’s Creed Black Flag',
        video: 'https://www.youtube.com/embed/OwVe4ZNeQZk',
        genres: ['Паркур', 'РПГ'],
        price: 750,
        id: 5,
        description: 'История Assassins Creed IV Черный флаг начинается в 1715 году, когда пираты, контролируя и море, и сушу, основали собственную республику беззакония на Карибах. Они грабили, присваивая несметные богатства, и полностью парализовали международную торговлю и движение судов. Пираты стали силой, угрожающей государственным структурам Европы, взбудоражили воображение миллионов и оставили после себя наследие, которое живет до сих пор.'
    },
    {
        image: '/game-covers/assassins_creed_valhalla.png',
        title: 'Assassin’s Creed Valhalla',
        genres: ['Паркур', 'РПГ', 'Открытый мир'],
        video: 'https://www.youtube.com/embed/ssrNcwxALS4',
        price: 2863,
        id: 6,
        description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
    },
    {
        image: '/game-covers/assassins_creed.jpg',
        title: 'Assassin’s Creed',
        genres: ['Паркур', 'РПГ'],
        video: 'https://www.youtube.com/embed/RjQ6ZtyXoA0',
        price: 499,
        id: 7,
        description: 'Действие происходит в 1191 году н. э. Третий крестовый поход разрывает на части Святую землю. Вы играете за Альтаира, который намерен остановить боевые действия, ослабив обе стороны конфликта.'
    },
    {
        image: '/game-covers/assassins_creed_unity.jpg',
        title: 'Assassin’s Creed Unity',
        genres: ['Паркур', 'РПГ'],
        video: 'https://www.youtube.com/embed/xzCEdSKMkdU',
        price: 470,
        id: 8,
        description: 'Париж, 1789 год. В период Французской революции на улицах некогда великолепного города царят ужас и полная неразбериха. По мостовым текут реки крови простолюдинов, дерзнувших бросить вызов угнетателям'
    },
    {
        image: '/game-covers/assassins_creed_revelations.jpg',
        title: 'Assassin’s Creed Revelations',
        genres: ['Паркур', 'РПГ'],
        video: 'https://www.youtube.com/embed/HMsbMK9Odoc',
        price: 456,
        id: 9,
        description: 'Эцио Аудиторе отправляется на поиски ответов – в погоню за истиной. В игре «Assassins Creed Revelations», мастер-ассасин отправляется на родину великого наставника Альтаира, где его ждет множество открытий и откровений. Путь его будет невероятно трудным, ведь противостоять герою будет армия тамплиеров, обосновавшаяся в Константинополе, столице Османской империи'
    },
]

export const HomePage = () => {
    return (
        <div className="home-page">
            { GAMES.map(game => <GameItem game={game} key={game.id}/>) }
        </div>
    )
}
