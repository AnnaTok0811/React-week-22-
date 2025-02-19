import React from "react";
import Card from "./Card/Card";


function CardList() {
    return (
        <div className="container">
            <Card
                title="Харли Квин"
                imgLink="https://i.pinimg.com/736x/5a/54/08/5a54086a92eac2dfb6102d40fa8f2855.jpg"
                description="DC"
                alterego="Доктор Харлин Фрэнсис Квинзель"
                work="Суперзлодейка"

            />
            <Card
                title="Джокер"
                imgLink="https://i.pinimg.com/736x/2c/73/a3/2c73a3be6e1cec819cb51cad443598f5.jpg"
                description="DC"
                alterego="Джек Освальд Уайт"
                work="Суперзлодей"
            />
            <Card
                title="Бэтмен"
                imgLink="https://i.ebayimg.com/images/g/YGkAAOSwKuBiy9UQ/s-l1600.jpg"
                description="DC"
                alterego="Брюс Уэйн"
                work="Борец за справедливость"

            />
            <Card
                title="Дэдпул"
                imgLink="https://i.pinimg.com/736x/c9/b2/65/c9b26536fafe94cd7aa6f77e26447635.jpg"
                description="Marvel"
                alterego="Уэйд Уи́лсон"
                work="Наёмный убийца"

            />
        </div>
    );
}

export default CardList;