import React, { useEffect, useState } from 'react';
import cs from 'classnames';

import ResultString from '../../components/ResultString';
import listProducts from '../../data/index.json';

import styles from './styles.css';

const Home = () => {
    const [data, setData] = useState(listProducts);
    const [nameProduct, setNameProduct] = useState('');

    const [isValid, setValid] = useState(false);
    const [isViewResult, setViewResult] = useState(false);

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
                <ResultString
                    title={'Название'}
                    value={nameProduct}
                />
                <ResultString
                    title={'Калории'}
                    value={calories.toFixed(2)}
                />
                <ResultString
                    title={'Белки'}
                    value={`${squirrels.toFixed(2)} г`}
                />
                <ResultString
                    title={'Жиры'}
                    value={`${fats.toFixed(2)} г`}
                />
                <ResultString
                    title={'Углеводы'}
                    value={`${carbohydrates.toFixed(2)} г`}
                />
                <ResultString
                    title={'Итоговый вес'}
                    value={`${weight.toFixed(2)} г`}
                />
                <ResultString
                    title={'Себестоимость'}
                    value={ `${price.toFixed(2)} ₽` }
                />
                <ResultString
                    title={'Итоговая цена'}
                    value={ `${(price * (profit/100)).toFixed(2)} ₽` }
                />
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
