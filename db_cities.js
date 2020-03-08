'use strict';

const data = {
    "RU": [{
            "country": "Россия",
            "count": "144500000",
            "cities": [{
                    "name": "Рязань",
                    "count": "538962",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
                },
                {
                    "name": "Москва",
                    "count": "12615882",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
                },
                {
                    "name": "Санкт-Петербург",
                    "count": "5383968",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Краснодар",
                    "count": "918145",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
                },
                {
                    "name": "Екатеринбург",
                    "count": "1484456",
                    "link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Ростов-на-Дону",
                    "count": "1130305",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
                },
                {
                    "name": "Воронеж",
                    "count": "1054537",
                    "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
                }
            ]

        },
        {
            "country": "Германия",
            "count": 82175684,
            "cities": [{
                    "name": "Берлин",
                    "count": "3613495",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
                },
                {
                    "name": "Мюнхен",
                    "count": "1456039",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
                },
                {
                    "name": "Франкфурт-на-Майне",
                    "count": "736414",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
                },
                {
                    "name": "Кёльн",
                    "count": "1080394",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
                }
            ]
        },
        {
            "country": "Англия",
            "count": 53012456,
            "cities": [{
                    "name": "Лондон",
                    "count": " 8869898",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
                },
                {
                    "name": "Манчестер",
                    "count": "545500",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
                },
                {
                    "name": "Эдинбург",
                    "count": "488100",
                    "link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Бристоль",
                    "count": "567111",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
                }
            ]

        }
    ],
    "EN": [{
            "country": "Russia",
            "count": "144500000",
            "cities": [{
                    "name": "Ryazan",
                    "count": "538962",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
                },
                {
                    "name": "Moscow",
                    "count": "12615882",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
                },
                {
                    "name": "St Petersburg",
                    "count": "5383968",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Krasnodar",
                    "count": "918145",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
                },
                {
                    "name": "Yekaterinburg",
                    "count": "1484456",
                    "link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Rostov-on-Don",
                    "count": "1130305",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
                },
                {
                    "name": "Voronezh",
                    "count": "1054537",
                    "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
                }
            ]

        },
        {
            "country": "Germany",
            "count": 82175684,
            "cities": [{
                    "name": "Berlin",
                    "count": "3613495",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
                },
                {
                    "name": "Munich",
                    "count": "1456039",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
                },
                {
                    "name": "frankfurt",
                    "count": "736414",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
                },
                {
                    "name": "Cologne",
                    "count": "1080394",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
                }
            ]
        },
        {
            "country": "United Kingdom",
            "count": 53012456,
            "cities": [{
                    "name": "London",
                    "count": " 8869898",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
                },
                {
                    "name": "Manchester",
                    "count": "545500",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
                },
                {
                    "name": "Edinburgh",
                    "count": "488100",
                    "link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Bristol",
                    "count": "567111",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
                }
            ]

        }
    ],
    "DE": [{
            "country": "Russland",
            "count": "144500000",
            "cities": [{
                    "name": "Ryazan",
                    "count": "538962",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
                },
                {
                    "name": "Moskau",
                    "count": "12615882",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
                },
                {
                    "name": "Saint Petersburg",
                    "count": "5383968",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Krasnodar",
                    "count": "918145",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
                },
                {
                    "name": "Jekaterinburg",
                    "count": "1484456",
                    "link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Rostow",
                    "count": "1130305",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
                },
                {
                    "name": "Woronesch",
                    "count": "1054537",
                    "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
                }
            ]

        },
        {
            "country": "Deutschland",
            "count": 82175684,
            "cities": [{
                    "name": "Berlin",
                    "count": "3613495",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
                },
                {
                    "name": "München",
                    "count": "1456039",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
                },
                {
                    "name": "Frankfurt",
                    "count": "736414",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
                },
                {
                    "name": "Köln",
                    "count": "1080394",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
                }
            ]
        },
        {
            "country": "England",
            "count": 53012456,
            "cities": [{
                    "name": "London",
                    "count": " 8869898",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
                },
                {
                    "name": "Manchester",
                    "count": "545500",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
                },
                {
                    "name": "Edinburgh",
                    "count": "488100",
                    "link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Bristol",
                    "count": "567111",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
                }
            ]

        }
    ]
};


const dropdownLists = document.querySelector('.dropdown-lists'),
    dropdownDefault = document.querySelector('.dropdown-lists__list--default'),
    dropdownSelect = document.querySelector('.dropdown-lists__list--select'),
    dropdownAutocomplete = document.querySelector('.dropdown-lists__list--autocomplete'),
    dropdownCol = document.querySelectorAll('.dropdown-lists__col'),
    // dropdownCountryDefault = dropdownDefault.querySelector('.dropdown-lists__countryBlock'),
    dropdownCountry = dropdownLists.querySelectorAll('.dropdown-lists__countryBlock'),
    input = document.querySelector('#select-cities'),
    button = document.querySelector('.button'),
    closeButton = document.querySelector('.close-button');


const init = () => {
    dropdownLists.style.display = 'none';
    dropdownCol.forEach(item => item.remove());

};


// функция создания элементов
const createBlockElement = (className, content) => {
    const div = document.createElement('div');
    div.classList.add(className);
    div.textContent = content;
    return div;
};

// вывод списков dropdown-lists__list
const showCountryInfo = (country, col, top) => {
    const countryBlock = dropdownCountry[0].cloneNode(),
        totalLine = createBlockElement('dropdown-lists__total-line', '');

    totalLine.appendChild(createBlockElement('dropdown-lists__country', country.country));
    totalLine.appendChild(createBlockElement('dropdown-lists__count', country.count));
    countryBlock.appendChild(totalLine);

    const showCities = (cities) => {
        let sortCities = cities,
            count;

        if (top) {
            sortCities.sort((prev, next) => next.count - prev.count);
            count = 3;
        } else {
            count = cities.length;
        }

        //вывод городов
        for (let i = 0; i < count; i++) {
            const citiLine = createBlockElement('dropdown-lists__line', '');
            citiLine.appendChild(createBlockElement('dropdown-lists__city', sortCities[i].name));
            citiLine.appendChild(createBlockElement('dropdown-lists__count', sortCities[i].count));
            countryBlock.appendChild(citiLine);
        }
    };

    showCities(country.cities);
    col.appendChild(countryBlock);
};

// вывод списка select
const showCountrySelect = (country) => {

    const col = dropdownCol[0].cloneNode();
    for (let item of data.RU) {
        // находим нужную страну
        if (item.country === country) {
            showCountryInfo(item, col);
        }
    }
    dropdownSelect.appendChild(col);
};

// вывод default
const showDropdownLists = () => {

    if (dropdownDefault.children.length === 0) {
        const col = dropdownCol[0].cloneNode();
        for (let item of data.RU) {
            showCountryInfo(item, col, 3);
        }
        dropdownDefault.appendChild(col);
    }
};

// поиск совпадений input и значений в data
const searchInputItems = (input) => {
    const reg = new RegExp(`^${input}.?`, `i`);
    const col = dropdownCol[0].cloneNode();
    for (let item of data.RU) {
        const countryBlock = dropdownCountry[0].cloneNode();
        console.log(reg.test(item.country));

        if (reg.test(item.country)) {
            const totalLine = createBlockElement('dropdown-lists__total-line', '');
            totalLine.appendChild(createBlockElement('dropdown-lists__country', item.country));
            totalLine.appendChild(createBlockElement('dropdown-lists__count', item.count));
            countryBlock.appendChild(totalLine);
        }

        if (item.cities) {
            for (let city of item.cities) {
                if (reg.test(city.name)) {
                    const citiLine = createBlockElement('dropdown-lists__line', '');
                    citiLine.appendChild(createBlockElement('dropdown-lists__city', city.name));
                    citiLine.appendChild(createBlockElement('dropdown-lists__count', city.count));
                    countryBlock.appendChild(citiLine);
                }
            }
        }

        if (countryBlock.children.length !== 0) {
            col.appendChild(countryBlock);
        }
    }

    console.log(col);
    if (col.children.length === 0) {
        const line = createBlockElement('dropdown-lists__total-line', '');
        line.appendChild(createBlockElement('dropdown-lists__country', 'Ничего не найдено'));
        col.appendChild(line);
    }
    dropdownAutocomplete.appendChild(col);

};

const showCity = (city, cityName) => {

    input.value = cityName;
    closeButton.style.display = 'block';

    const col = dropdownCol[0].cloneNode();
    const countryBlock = dropdownCountry[0].cloneNode();
    countryBlock.appendChild(city);
    col.appendChild(countryBlock);
    dropdownSelect.appendChild(col);

    let link;

    for (let key of data.RU) {

        for (let city of key.cities) {
            if (city.name === cityName) {
                link = city.link;
            }
        }
    }
    button.setAttribute('href', link);
};


// основное выполнение + слушатели
init();
input.addEventListener('click', () => {
    showDropdownLists();
    dropdownLists.style.display = 'block';
});

dropdownLists.addEventListener('mouseover', (event) => {
    const target = event.target.closest('.dropdown-lists__line');

    if (target) {
        target.classList.add('dropdown-lists__city--ip');
    }
});

dropdownLists.addEventListener('mouseout', (event) => {
    const target = event.target.closest('.dropdown-lists__line');

    if (target) {
        target.classList.remove('dropdown-lists__city--ip');
    }
});

dropdownLists.addEventListener('click', (event) => {

    let target = event.target;



    // если кликнули на страну
    if (target.closest('.dropdown-lists__total-line')) {
        target = target.closest('.dropdown-lists__total-line');
        if (target.closest('.dropdown-lists__list--default') || target.closest('.dropdown-lists__list--autocomplete')) {

            if (dropdownSelect.children.length !== 0) {
                dropdownSelect.removeChild(dropdownSelect.querySelector('.dropdown-lists__col'));
            }

            const country = target.querySelector('.dropdown-lists__country').textContent;
            document.querySelector('.label').style.display = 'none';
            input.value = country;
            closeButton.style.display = 'block';
            showCountrySelect(country);
            dropdownDefault.style.display = 'none';
            dropdownAutocomplete.style.display = 'none';
            dropdownSelect.style.display = 'block';
        }

        if (target.closest('.dropdown-lists__list--select')) {

            input.value = '';
            document.querySelector('.label').style.display = 'block';
            dropdownDefault.style.display = 'block';
            dropdownSelect.style.display = 'none';
            dropdownAutocomplete.style.display = 'none';
            closeButton.style.display = 'none';


            dropdownSelect.removeChild(dropdownSelect.querySelector('.dropdown-lists__col'));

        }
    } else if (target.closest('.dropdown-lists__line')) {

        if (dropdownSelect.children.length !== 0) {
            dropdownSelect.removeChild(dropdownSelect.querySelector('.dropdown-lists__col'));
        }

        target = target.closest('.dropdown-lists__line');
        const city = target.cloneNode(true);
        showCity(city, target.querySelector('.dropdown-lists__city').textContent);
        document.querySelector('.label').style.display = 'none';
        dropdownDefault.style.display = 'none';
        dropdownAutocomplete.style.display = 'none';
        dropdownSelect.style.display = 'block';

    }
});

input.addEventListener('input', () => {

    if (dropdownAutocomplete.children.length !== 0) {
        dropdownAutocomplete.removeChild(dropdownAutocomplete.querySelector('.dropdown-lists__col'));
    }

    if (input.value.length !== 0) {
        document.querySelector('.label').style.display = 'none';
        dropdownDefault.style.display = 'none';
        dropdownSelect.style.display = 'none';
        dropdownAutocomplete.style.display = 'block';

        closeButton.style.display = 'block';

        searchInputItems(input.value);
    } else {
        document.querySelector('.label').style.display = 'block';
        dropdownDefault.style.display = 'block';
        dropdownAutocomplete.style.display = 'none';
        dropdownSelect.style.display = 'none';
        closeButton.style.display = 'none';

    }
});

closeButton.addEventListener('click', () => {
    input.value = '';
    document.querySelector('.label').style.display = 'block';
    dropdownLists.style.display = 'none';
    dropdownDefault.style.display = 'block';
    dropdownAutocomplete.style.display = 'none';
    dropdownSelect.style.display = 'none';
    closeButton.style.display = 'none';
});

button.addEventListener('click', (event) => {
    if (input.value.length === 0) {
        event.preventDefault();
    }
});