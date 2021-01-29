let count = 0;
let tally = 1;
let likesInt = setInterval(function() {
    let hearts = document.querySelector('button.wpO6b div.QBdPU span');
    let arrowBtn = document.querySelector('a.coreSpriteRightPaginationArrow');


    if (hearts) {
        hearts.click();
        count += 1;
        console.log("you've liked " + count + " photos")
        if (count >= tally) {
            clearInterval(likesInt);
            console.log("this the last picture");
        }
        arrowBtn.click();

    }


}, 4000);
likesInt;