var webdriver = require('selenium-webdriver')
var By = require('selenium-webdriver').By
var until = require('selenium-webdriver').until

async function test() {
    var driver = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build()
    try {
        driver.manage().window().maximize()
        driver.manage().deleteAllCookies()
        driver.get('http://google.com')
        driver.quit()   
    } catch(err) {
        console.log(err)
    }
}

test()