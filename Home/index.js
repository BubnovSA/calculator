import React, { useEffect, useState } from 'react';
import cs from 'classnames';

import styles from './styles.css';

const Home = () => {
    // calories = калории
    // squirrels = белки
    // fats = жиры
    // carbohydrates = углеводы

    const listProducts = [
        {
            name: 'Кунжут',
            calories: 573,
            squirrels: 17.73,
            fats: 49.67,
            carbohydrates: 23.45,
            weight: 0,
            price: 56,
            number: 1
        },
        {
            name: 'Крабовые палочки',
            calories: 99,
            squirrels: 15.18,
            fats: 0.9,
            carbohydrates: 6.85,
            weight: 0,
            price: 60,
            number: 2
        },
        {
            name: 'Соус спайс',
            calories: 390,
            squirrels: 0.9,
            fats: 33.4,
            carbohydrates: 23.9,
            weight: 0,
            price: 25,
            number: 3
        },
        {
            name: 'Лосось',
            calories: 146,
            squirrels: 21.62,
            fats: 5.93,
            carbohydrates: 0,
            weight: 0,
            price: 180,
            number: 4
        },
        {
            name: 'Угорь',
            calories: 184,
            squirrels: 18.44,
            fats: 11.66,
            carbohydrates: 0,
            weight: 0,
            price: 150,
            number: 5
        },
        {
            name: 'Тунец',
            calories: 108,
            squirrels: 23.38,
            fats: 0.95,
            carbohydrates: 0,
            weight: 0,
            price: 120,
            number: 6
        },
        {
            name: 'Огурец',
            calories: 15,
            squirrels: 0.67,
            fats: 0.11,
            carbohydrates: 3.63,
            weight: 0,
            price: 24,
            number: 7
        },
        {
            name: 'Яблоко',
            calories: 52,
            squirrels: 0.26,
            fats: 0.17,
            carbohydrates: 13.81,
            weight: 0,
            price: 15,
            number: 8
        },
        {
            name: 'Виноград',
            calories: 69,
            squirrels: 0.72,
            fats: 0.16,
            carbohydrates: 18.1,
            weight: 0,
            price: 29,
            number: 9
        },
        {
            name: 'Соус Терияки',
            calories: 160,
            squirrels: 1,
            fats: 0,
            carbohydrates: 38,
            weight: 0,
            price: 40,
            number: 10
        },
        {
            name: 'Соус Унаги',
            calories: 140,
            squirrels: 1.5,
            fats: 0,
            carbohydrates: 34,
            weight: 0,
            price: 50,
            number: 11
        },
        {
            name: 'Сыр творожный',
            calories: 238,
            squirrels: 6.1,
            fats: 22.2,
            carbohydrates: 3.5,
            weight: 0,
            price: 60,
            number: 12
        },
        {
            name: 'Сыр мраморный',
            calories: 352,
            squirrels: 25,
            fats: 28,
            carbohydrates: 0,
            weight: 0,
            price: 60,
            number: 13
        },
        {
            name: 'Сыр с плесенью',
            calories: 353,
            squirrels: 21.4,
            fats: 28.74,
            carbohydrates: 2.34,
            weight: 0,
            price: 100,
            number: 14
        },
        {
            name: 'Болгарский перец',
            calories: 26,
            squirrels: 0.99,
            fats: 0.3,
            carbohydrates: 6.03,
            weight: 0,
            price: 20,
            number: 15
        },
        {
            name: 'Яйцо',
            calories: 65,
            squirrels: 5.54,
            fats: 4.37,
            carbohydrates: 0.34,
            weight: 0,
            price: 16,
            number: 16
        },
        {
            name: 'Креветки',
            calories: 144,
            squirrels: 27.59,
            fats: 2.35,
            carbohydrates: 1.24,
            weight: 0,
            price: 120,
            number: 17
        },
        {
            name: 'Тобика',
            calories: 71,
            squirrels: 10,
            fats: 3,
            carbohydrates: 1,
            weight: 0,
            price: 200,
            number: 18
        },
        {
            name: 'Лист нори',
            calories: 348,
            squirrels: 40,
            fats: 2,
            carbohydrates: 40,
            weight: 0,
            price: 400,
            number: 19
        },
        {
            name: 'Мука',
            calories: 334,
            squirrels: 10.3,
            fats: 1.1,
            carbohydrates: 70.6,
            weight: 0,
            price: 6,
            number: 20
        },
        {
            name: 'Соль',
            calories: 0,
            squirrels: 0,
            fats: 0,
            carbohydrates: 0,
            weight: 0,
            price: 1,
            number: 21
        },
        {
            name: 'Сахар',
            calories: 387,
            squirrels: 0,
            fats: 0,
            carbohydrates: 99.98,
            weight: 0,
            price: 9,
            number: 22
        },
        {
            name: 'Зеленый лук',
            calories: 32,
            squirrels: 1.83,
            fats: 0.19,
            carbohydrates: 7.34,
            weight: 0,
            price: 65,
            number: 23
        },
        {
            name: 'Курица копченая',
            calories: 150,
            squirrels: 22,
            fats: 6,
            carbohydrates: 1.5,
            weight: 0,
            price: 40,
            number: 24
        },
        {
            name: 'Имбирь',
            calories: 79,
            squirrels: 1.43,
            fats: 0.55,
            carbohydrates: 17.93,
            weight: 0,
            price: 25,
            number: 25
        },
        {
            name: 'Авокадо',
            calories: 212,
            squirrels: 2,
            fats: 20,
            carbohydrates: 6,
            weight: 0,
            price: 40,
            number: 26
        },
        {
            name: 'Панировочные сухари',
            calories: 290,
            squirrels: 9,
            fats: 2,
            carbohydrates: 60,
            weight: 0,
            price: 25,
            number: 27
        },
        {
            name: 'Соус барбекю',
            calories: 86,
            squirrels: 0.8,
            fats: 0.1,
            carbohydrates: 19.8,
            weight: 0,
            price: 0,
            number: 28
        },
        {
            name: 'Морковь',
            calories: 41,
            squirrels: 0.93,
            fats: 0.24,
            carbohydrates: 9.58,
            weight: 0,
            price: 10,
            number: 29
        },
        {
            name: 'Ананас',
            calories: 48,
            squirrels: 0.54,
            fats: 0.12,
            carbohydrates: 12.63,
            weight: 0,
            price: 60,
            number: 30
        },
        {
            name: 'Икра красная',
            calories: 252,
            squirrels: 24.6,
            fats: 17.9,
            carbohydrates: 4,
            weight: 0,
            price: 60,
            number: 31
        },
        {
            name: 'Салат листовой',
            calories: 16,
            squirrels: 1.36,
            fats: 0.15,
            carbohydrates: 2.79,
            weight: 0,
            price: 50,
            number: 32
        },
        {
            name: 'Рис',
            calories: 330,
            squirrels: 0.53,
            fats: 6.06,
            carbohydrates: 72.79,
            weight: 0,
            price: 13,
            number: 33
        },
        {
            name: 'Васаби',
            calories: 333,
            squirrels: 3,
            fats: 12.5,
            carbohydrates: 48,
            weight: 0,
            price: 90,
            number: 34
        },
        {
            name: 'Соевый соус',
            calories: 53,
            squirrels: 6.28,
            fats: 0.04,
            carbohydrates: 7.61,
            weight: 0,
            price: 10,
            number: 35
        },
        {
            name: 'Кляр',
            calories: 345,
            squirrels: 7,
            fats: 0.6,
            carbohydrates: 78,
            weight: 0,
            price: 20,
            number: 36
        },
        {
            name: 'Сыр Пармезан',
            calories: 392,
            squirrels: 35.75,
            fats: 25.83,
            carbohydrates: 3.22,
            weight: 0,
            price: 150,
            number: 37
        },
        {
            name: 'Помидоры',
            calories: 18,
            squirrels: 0.88,
            fats: 0.2,
            carbohydrates: 3.92,
            weight: 0,
            price: 20,
            number: 38
        },
        {
            name: 'Чука',
            calories: 80,
            squirrels: 2.98,
            fats: 2.1,
            carbohydrates: 13.9,
            weight: 0,
            price: 40,
            number: 39
        },
        {
            name: 'Бекон',
            calories: 541,
            squirrels: 37.04,
            fats: 41.78,
            carbohydrates: 1.43,
            weight: 0,
            price: 100,
            number: 40
        },
        {
            name: 'Морской коктеиль в масле',
            calories: 190,
            squirrels: 17,
            fats: 8.5,
            carbohydrates: 1,
            weight: 0,
            price: 120,
            number: 41
        },
        {
            name: 'Сыр сулугуни',
            calories: 282,
            squirrels: 20,
            fats: 22,
            carbohydrates: 0.24,
            weight: 0,
            price: 120,
            number: 42
        },
        {
            name: 'Лук жаренный',
            calories: 625,
            squirrels: 6,
            fats: 46,
            carbohydrates: 44,
            weight: 0,
            price: 50,
            number: 43
        },
        {
            name: 'Соус бургер',
            calories: 330,
            squirrels: 0.7,
            fats: 30,
            carbohydrates: 14.5,
            weight: 0,
            price: 30,
            number: 44
        },
        {
            name: 'Майонез',
            calories: 620,
            squirrels: 0.3,
            fats: 67,
            carbohydrates: 3,
            weight: 0,
            price: 20,
            number: 45
        },
        {
            name: 'Сыр Моцарелла',
            calories: 302,
            squirrels: 25.96,
            fats: 20,
            carbohydrates: 3.83,
            weight: 0,
            price: 50,
            number: 46
        },
        {
            name: 'Лук жаренный',
            calories: 580,
            squirrels: 6,
            fats: 44,
            carbohydrates: 40,
            weight: 0,
            price: 50,
            number: 47
        },
        {
            name: 'Соус сырный',
            calories: 440,
            squirrels: 1.5,
            fats: 44,
            carbohydrates: 10,
            weight: 0,
            price: 60,
            number: 48
        },
    ];

    const [data, setData] = useState(listProducts);
    const [nameProduct, setNameProduct] = useState('');

    // валидация и итоговый экран
    const [isValid, setValid] = useState(false);
    const [isViewResult, setViewResult] = useState(false);

    // накрутка
    const [profit, setProfit] = useState(200);

    const viewResult = () => {
        const totalData = data.filter(item => item.weight > 0);
    
        let calories = 0;
        let squirrels = 0;
        let fats = 0;
        let carbohydrates = 0;
        let weight = 0;
        let price = 0;

        for (let i = 0; i < totalData.length; i++) {
            calories = calories + (totalData[i].calories * (totalData[i].weight / 100));
            squirrels = squirrels + (totalData[i].squirrels * (totalData[i].weight / 100));
            fats = fats + (totalData[i].fats * (totalData[i].weight / 100));
            carbohydrates = carbohydrates + (totalData[i].carbohydrates * (totalData[i].weight / 100));
            weight = weight + totalData[i].weight;
            price = price + ((totalData[i].price * totalData[i].weight) / 100);
        }

        return (
            <div className={styles.totalContainer}>
                <div className={styles.totalItem}>
                    <div className={styles.totalFieldName}>
                        Название
                    </div>
                    <div className={styles.totalFieldValue}>
                        { nameProduct }
                    </div>
                </div>
                <div className={styles.totalItem}>
                    <div className={styles.totalFieldName}>
                        Калории
                    </div>
                    <div className={styles.totalFieldValue}>
                        { calories.toFixed(2) }
                    </div>
                </div>
                <div className={styles.totalItem}>
                    <div className={styles.totalFieldName}>
                        Белки
                    </div>
                    <div className={styles.totalFieldValue}>
                        { `${squirrels.toFixed(2)} г` }
                    </div>
                </div>
                <div className={styles.totalItem}>
                    <div className={styles.totalFieldName}>
                        Жиры
                    </div>
                    <div className={styles.totalFieldValue}>
                        { `${fats.toFixed(2)} г` }
                    </div>
                </div>
                <div className={styles.totalItem}>
                    <div className={styles.totalFieldName}>
                        Углеводы
                    </div>
                    <div className={styles.totalFieldValue}>
                        { `${carbohydrates.toFixed(2)} г` }
                    </div>
                </div>
                <div className={styles.totalItem}>
                    <div className={styles.totalFieldName}>
                        Итоговый вес
                    </div>
                    <div className={styles.totalFieldValue}>
                        { `${weight.toFixed(2)} г` }
                    </div>
                </div>
                <div className={styles.totalItem}>
                    <div className={styles.totalFieldName}>
                        Себестоимость
                    </div>
                    <div className={styles.totalFieldValue}>
                        { `${price.toFixed(2)} ₽` }
                    </div>
                </div>
                <div className={styles.totalItem}>
                    <div className={styles.totalFieldName}>
                        Итоговая цена
                    </div>
                    <div className={styles.totalFieldValue}>
                        { `${(price * (profit/100)).toFixed(2)} ₽` }
                    </div>
                </div>
            </div>
        );
    };

    const viewCalculator = () => {
        return (
            <>
                <div className={styles.nameBlock}>
                    <div className={styles.nameContainer}>
                        <div>
                            Название блюда:
                        </div>
                        <input
                            className={styles.nameProductInputStyle}
                            placeholder='Название'
                            value={nameProduct}
                            onChange={(e) => setNameProduct(e.target.value)}
                        />
                        <div 
                            onClick={() => setNameProduct('')}
                            className={styles.clear}
                        >
                            x
                        </div>
                    </div>
                </div>
                <div className={styles.main}>
                    {
                        data.sort((a, b) => (a.number - b.number)).map((item) => {
                            const { name, weight, price } = item || {};

                            const currentItem = data.find(item => item.name === name);
                            const newDataList = data.filter(item => item.name !== name);

                            return (
                                <div 
                                    key={name}
                                    className={cs(
                                        styles.item,
                                        {[styles.itemActive]: currentItem.weight > 0}
                                    )} 
                                >
                                    <div className={styles.itemName}>
                                        { name }
                                    </div>
                                    <div className={styles.itemInputContainer}>
                                        <input
                                            type="number"
                                            className={styles.itemInputStyle}
                                            placeholder='Цена за 100 г, ₽'
                                            value={price ? price : null}
                                            onChange={(e) => {
                                                setData([
                                                    ...newDataList,
                                                    {
                                                        ...currentItem,
                                                        price: Number(e.target.value)
                                                    }
                                                ])
                                            }}
                                        />
                                        {/* <div 
                                            onClick={() => {
                                                setData([
                                                    ...newDataList,
                                                    {
                                                        ...currentItem,
                                                        price: 0
                                                    }
                                                ])
                                            }}
                                            className={styles.itemClear}
                                        >
                                            x
                                        </div> */}
                                        <span
                                            style={{
                                                color: 'white',
                                                paddingLeft: '10px',
                                                paddingRight: '20px',
                                                fontSize: '1.5rem'
                                            }}
                                        >
                                            ₽
                                        </span>
                                    </div>
                                    <div className={styles.itemInputContainer}>
                                        <input
                                            type="number"
                                            className={styles.itemInputStyle}
                                            placeholder='Вес, г'
                                            value={weight ? weight : null}
                                            onChange={(e) => {
                                                setData([
                                                    ...newDataList,
                                                    {
                                                        ...currentItem,
                                                        weight: Number(e.target.value)
                                                    }
                                                ])
                                            }}
                                        />
                                        {/* <div 
                                            onClick={() => {
                                                setData([
                                                    ...newDataList,
                                                    {
                                                        ...currentItem,
                                                        weight: 0
                                                    }
                                                ])
                                            }}
                                            className={styles.itemClear}
                                        >
                                            x
                                        </div> */}
                                        <span
                                            style={{
                                                color: 'white',
                                                paddingLeft: '10px',
                                                fontSize: '1.5rem'
                                            }}
                                        >
                                            грам
                                        </span>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </>
        );
    };

    const viewContent = isViewResult ? (
        viewResult()
    ) : (
        viewCalculator()
    );

    useEffect(() => {
        const isHaveListNotNull = data.filter(item => item.weight > 0);

        if (
            nameProduct.length > 3 && 
            isHaveListNotNull.length && 
            profit >= 0
        ) {
            setValid(true)
        } else {
            if (isValid === false) return;

            setValid(false)
        }

    }, [data, nameProduct, profit]);

    return (
        <div className={styles.wrap}>
            <div className={styles.header}>
                Калькулятор
            </div>
            {
                viewContent
            }
            <div className={styles.lineControl}>
                {
                    !isViewResult &&
                        <div className={styles.totalProfitText}>
                            Накрутка (%):
                        </div>
                }
                {
                    !isViewResult &&
                        <input
                            type="number"
                            className={styles.itemInputStyle}
                            placeholder='Накрутка, %'
                            value={profit ? profit : null}
                            onChange={(e) => {
                                setProfit(Number(e.target.value))
                            }}
                        />
                }
                {
                    !isViewResult &&
                        <div
                            onClick={() => {
                                if (isValid) setViewResult(!isViewResult);
                            }}
                            className={cs(
                                styles.btnItem,
                                {[styles.btnItemDisabled]: !isValid}
                            )}
                        >
                            Рассчитать
                        </div>
                }
                <div
                    onClick={() => {
                        if (isViewResult) return setViewResult(!isViewResult);

                        window.location.reload();
                    }}
                    className={cs(styles.btnItemClear)}
                >
                    {
                        isViewResult ? "Назад" : "Очистить"
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
