//here js for calender manipulations

function setDates(month) {
    const lastCellInCalender = 42;




    //number of cell in kalender in first week
    const firstDay = getFirstDayOfMonth(month);
    //in month
    const numberOfDays = getNumberOfDays(month);
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

setDates(1);