'use strict';

(function () {

    const boxName = document.querySelectorAll('.box-name');         // получаем все параметры фильтрации    
    const box = document.querySelectorAll('.box');                  // получаем все блоки, которые нужно отфильтровать

    boxName.forEach(function (item) {                               // перебираем все параметры фильтрации 
        item.addEventListener('click', function (event) {           // на каждый параметр вешаем событие на клик
            let filteringOption = event.target.dataset.filter;      // получаем значение параметра, который необходимо применить

            box.forEach(function (item) {                                                           // перебираем все блоки, которые нужно отфильтровать
                item.classList.remove('hide-block');                                                // очищаем прошлые добавления скрывающего классса

                if (!item.classList.contains(filteringOption) && filteringOption !== 'all') {       // если нет класса соответстыующего праметру фильтра
                    item.classList.add('hide-block');                                               // добавляем скрывающий класс
                }
            })

        })
    })
})();