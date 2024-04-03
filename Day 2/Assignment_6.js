const { log } = require("console")


function oddnumbers() {
    for (let index = 1; index <= 25; index++) {
        if (index % 2 !== 0)
            log(index + " is a odd number")
    }

}

oddnumbers()