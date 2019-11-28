const date = new Date()
const month = date.getMonth() + 1

switch (month) {
    case 12 | 1 | 2:
        document.getElementById('winter').style.display = 'block'
        break;

    case 3 | 4 | 5:
        document.getElementById('spring').style.display = 'block'
        break;

    case 6 | 7 | 8:
        document.getElementById('summer').style.display = 'block'
        break;

    case 9 | 10 | 11:
        document.getElementById('fall').style.display = 'block'
        break;

}
