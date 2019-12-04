// Functions to use from outside:
// * setDates(month)
//    - set dates in calender view for actual month
//    - inputs:
//      month - is a month number starts from 1 to 12

// const holidays = [
//     [],
//     [],
//     ...
//     [
//         { name: 'julafton', day: 24 },
//         { name: 'jul', day: 25 },
//     ]
// ];

const holidays = [
    [
        { name: 'Nyårsdagen', day: 1 },
        { name: 'Trettondedag jul', day: 6 },
    ],
    [],
    [],
    [
        { name: 'Långfredagen', day: 19 },
        { name: 'Påskdagen', day: 21 },
        { name: 'Annandag påsk', day: 22 },
    ],
    [
        { name: 'Första maj', day: 1 },
        { name: 'Kristi himmelfärdsdag', day: 30 },
    ],
    [
        { name: 'Sveriges nationaldag', day: 6 },
        { name: 'Pingstdagen', day: 9 },
        { name: 'Midsommar', day: 22 },
    ],
    [],
    [],
    [],
    [],
    [
        { name: 'Alla helgons dag', day: 2 },
    ],
    [
        { name: 'Juldagen', day: 25 },
        { name: 'Annandag jul', day: 26 },
    ]
];

function arrangeHolidays(month) {
    console.log(holidays[month - 1]);
    const lastDay = getNumberOfDays(month);
    for (let i = 1; i<= lastDay; i++){
        console.log(i);
    }
}



let currentMonth = new Date().getMonth() + 1; // 1, 2, 3....12
setDates(currentMonth);
setMonthName(currentMonth);
setArrowsVisibility(currentMonth);

checkExcessDays(currentMonth);

arrangeHolidays(currentMonth);

function setDates(month) {
    const lastCellInCalender = 42;

    //number of cell in kalender in first week
    const firstDay = getFirstDayOfMonth(month);
    //in month
    const numberOfDays = getNumberOfDays(month);

    // Hide or show last row in calender depend on number of cells needed
    const lastRowElem = document.getElementById('last-calend-row');
    lastRowElem.style.display = 'none';
    if (firstDay + numberOfDays > 35) {
        lastRowElem.style.display = 'flex';
    }

    //clean cells before the first day
    for (let d = 1; d < firstDay; d++) {
        //get html-elem.for whole month-day cell
        const dayElem = document.getElementById('d-' + d.toString());
        //get html-element with day number
        const dateElem = dayElem.getElementsByClassName('date')[0];
        dateElem.innerText = '';
        console.log('clean', d);
    }

    //fill in number of day of the month to cells step by step
    let i = 1;
    for (let day = firstDay; day < firstDay + numberOfDays; day++) {
        console.log(day, i);
        const dayElem = document.getElementById('d-' + day.toString());
        const dateElem = dayElem.getElementsByClassName('date')[0];
        // console.log(dayElem);
        // console.log(dateElem);
        dateElem.innerText = i.toString();
        i = i + 1;
    }

    //clean cells after the last day of the month
    for (let d = firstDay + numberOfDays; d < lastCellInCalender + 1; d++) {
        const dayElem = document.getElementById('d-' + d.toString());
        const dateElem = dayElem.getElementsByClassName('date')[0];
        dateElem.innerText = '';
        console.log('clean', d);
    }

}

function getFirstDayOfMonth(month) {
    const firstDayOfMonth = [2, 5, 5, 1, 3, 6, 1, 4, 7, 2, 5, 7];
    return firstDayOfMonth[month-1]
}

function getNumberOfDays(month) {
    const numberOfDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return numberOfDaysInMonth[month - 1]
}

function setMonthName(month) {
    const monthNames = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'];
    const monthNameElem = document.getElementById('calend-month-name');
    monthNameElem.innerText = monthNames[month - 1];
}

function setArrowsVisibility(month) {
    document.getElementById('calend-nav-btn-back').style.display = 'block';
    document.getElementById('calend-nav-btn-forward').style.display = 'block';
    if (currentMonth === 1) {
        document.getElementById('calend-nav-btn-back').style.display = 'none';
    }
    if (currentMonth === 12) {
        document.getElementById('calend-nav-btn-forward').style.display = 'none';
    }
}

function monthBack() {
    if (currentMonth === 1) {
        return
    }
    currentMonth = currentMonth - 1;
    setDates(currentMonth);
    setMonthName(currentMonth);
    setArrowsVisibility(currentMonth);

    checkExcessDays(currentMonth)
}

function monthForward() {
    if (currentMonth === 12) {
        return
    }
    currentMonth = currentMonth + 1;
    setDates(currentMonth);
    setMonthName(currentMonth);
    setArrowsVisibility(currentMonth);

    checkExcessDays(currentMonth)
}

/**
 * Goes through every day to find excess days
 */
function checkExcessDays(){
    let start;
    let end;

    for (let i = 1; i <= 42; i++) {
        document.getElementById("d-" + i).style.visibility = "visible";
    }

    switch(currentMonth){

        case 1:
            start = 1;
            end = 33;
            break;

        case 2:
            start = 4;
            end = 33;
            break;

        case 3:
            start = 4;
            end = 36;
            break;

        case 4:
            start = 0;
            end = 31;
            break;

        case 5:
            start = 2;
            end = 34;
            break;

        case 6:
            start = 5;
            end = 36;
            break;

        case 7:
            start = 0;
            end = 32;
            break;

        case 8:
            start = 3;
            end = 35;
            break;

        case 9:
            start = 6;
            end = 37;
            break;

        case 10:
            start = 1;
            end = 33;
            break;

        case 11:
            start = 4;
            end = 35;
            break;

        case 12:
            start = 6;
            end = 38;
            break;

        }
        removeExcessDays(start, end)
}

/**
 * Removes every excess day that takes up space
 *
 * @param {number} start Where we will stop removing the boxes at the beginning of the calender
 * @param {number} end Where we will stop removing the boxes at the end of the calender
 */
function removeExcessDays(start, end){

    for (let i = 1; i <= start; i++){
        document.getElementById("d-" + i).style.visibility = "hidden";
    }

    for (let i = end; i <= 42; i++) {
        document.getElementById("d-" + i).style.visibility = "hidden"

    }
}