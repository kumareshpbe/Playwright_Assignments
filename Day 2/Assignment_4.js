function launchbrowser(str) {
    if (str == "chrome") {
        console.log("this is chrome browser")
    }
    else {
        console.log("this is not a chrome browser")
    }

}

function runTests(testtype) {
 switch (testtype) {
    case "smoke":
        console.log("this is Smoke test")
        break;
    case "sanity":
        console.log("this is Sanity test")
        break;
    case "regression":
        console.log("this is Regression test")
        break;
    default:
        console.log("this is smoke_Default test")
        break;
 }

}

let browser = "firefox"
let testtype = "black"
launchbrowser(browser)
runTests(testtype)