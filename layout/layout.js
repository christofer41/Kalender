window.addEventListener('load', loadmonthImgs)
window.addEventListener('load', loadSeasonImgs)

const date = new Date()
const month = date.getMonth() + 1
let monthImgs = document.getElementsByClassName('monthImgs')
let seasonImgs = document.getElementsByClassName('seasonImgs')

function makeSeasonImgInvisible() {

    for (let i = 0; i < seasonImgs.length; i++) {
        seasonImgs[i].style.display = 'none'

    }
}

function loadSeasonImgs() {

    switch (month) {
        case 12 | 1 | 2:
            makeSeasonImgInvisible()
            document.getElementById('winter').style.display = 'block'
            break;

        case 3 | 4 | 5:
            makeSeasonImgInvisible()
            document.getElementById('spring').style.display = 'block'
            break;

        case 6 | 7 | 8:
            makeSeasonImgInvisible()
            document.getElementById('summer').style.display = 'block'
            break;

        case 9 | 10 | 11:
            makeSeasonImgInvisible()
            document.getElementById('fall').style.display = 'block'
            break;

    }
}

function makeImgsInvisible() {

    for (let i = 0; i < monthImgs.length; i++) {
        monthImgs[i].style.display = 'none'

    }
}

function loadmonthImgs() {
    switch (month) {

        case 1:
            makeImgsInvisible()
            document.getElementById('january').style.display = 'block'
            break;
        case 2:
            makeImgsInvisible()

            document.getElementById('february').style.display = 'block'
            break;
        case 3:
            makeImgsInvisible()

            document.getElementById('march').style.display = 'block'
            break;
        case 4:
            makeImgsInvisible()
            document.getElementById('april').style.display = 'block'
            break;
        case 5:
            makeImgsInvisible()
            document.getElementById('may').style.display = 'block'
            break;
        case 6:
            makeImgsInvisible()
            document.getElementById('june').style.display = 'block'
            break;
        case 7:
            makeImgsInvisible()
            document.getElementById('july').style.display = 'block'
            break;
        case 8:
            makeImgsInvisible()
            document.getElementById('august').style.display = 'block'
            break;
        case 9:
            makeImgsInvisible()
            document.getElementById('september').style.display = 'block'
            break;
        case 10:
            makeImgsInvisible()
            document.getElementById('october').style.display = 'block'
            break;
        case 11:
            makeImgsInvisible()
            document.getElementById('november').style.display = 'block'
            break;
        case 12:
            makeImgsInvisible()
            document.getElementById('december').style.display = 'block'
            break;
    }
}