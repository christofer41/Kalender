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

switch (month) {
    case 11:
        document.getElementById('november').style.display = 'block'
        break;

    case 12:
        document.getElementById('december').style.display = 'block'
        break;

    case 1:
        document.getElementById('january').style.display = 'block'
        break;
    case 2:
        document.getElementById('february').style.display = 'block'
        break;
    case 3:
        document.getElementById('march').style.display = 'block'
        break;
    case 4:
        document.getElementById('april').style.display = 'block'
        break;
    case 5:
        document.getElementById('may').style.display = 'block'
        break;
    case 6:
        document.getElementById('june').style.display = 'block'
        break;
    case 7:
        document.getElementById('july').style.display = 'block'
        break;
    case 8:
        document.getElementById('august').style.display = 'block'
        break;
    case 9:
        document.getElementById('september').style.display = 'block'
        break;
    case 10:
        document.getElementById('october').style.display = 'block'
        break;
}
