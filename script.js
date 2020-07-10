'use strict';

(function () {
    const FILTER_BUTTON = document.querySelector('#filterButton');

    FILTER_BUTTON.addEventListener('click', onFilterButtonClick);

    function onFilterButtonClick() {
        console.log(getFilters());
        console.log(getGoods());
    }
})();