const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until

const browser = new webdriver.Builder()
    .forBrowser('chrome')
    .build()

async function login() {
    try {
        browser.get('https://classpass.com/login')
        console.log('1. login')
        browser.getTitle().then( title => console.log('1.5 print title', title) )
        browser.findElement(By.name('email')).sendKeys('davidmieloch@gmail.com')
        console.log('2.email')
        browser.findElement(By.name('password')).sendKeys('30s3Q0Ga@T8&&4V')
        console.log('3. pw')
        console.log('4. sleep 1000ms')
        browser.sleep(1000)
        console.log('5. submit click')
        browser.findElement(By.css('.bt.bt--lg.bt--width-full.mt')).click()
        console.log('6. nav to classes')
        browser.get('https://classpass.com/classes')
        console.log('7. sleep 3000 ms')
        browser.sleep(3000)
        console.log('8. getting lis and saving them in a variable called elements')
        console.log(browser.findElements(By.xpath("//section/ul/li")).getText())
        console.log('9.quitting')
        browser.quit()
    } catch (err) {
        console.log(err)
    }
}

function runSequence() {
    login()
    modifySearchFilter()
    let workoutClasses = scrapeClassData()
    let elligibleClasses = workoutClasses.map( workoutClass => meetsCriteriaToBookClass(workoutClass) )
    return joinClass(elligibleClass[0]) // if that class becomes full try the class at the next index
}

function clickClasses() {
    console.log('clicking classes')
}

function locations() {
        // locations: Manhattan: East Village, Midtown, Midtown East, Union Square, West Village
    return browser.findElements(webdriver.By.xpath('//li[1]/ul/li[7]/a')).click()
}

function changeDateFilter() {
    // click on date links
}

async function scrapeClassData() {
    // fill an object with: time - class name - location - type
    try {
        const workoutClassData = browser.findElements(By.css('.class-list__class.js-infinite-scroll-item'))
        console.log('workoutClassData', workoutClassData)
        return workoutClassData
    } catch (err) {
        console.log(err)
    }
    
}

function meetsCriteriaToBookClass(workoutClass) {
    // if class passed in meets some conditional join class
}

function joinClass() {
    // click reserve
    // click checkbox understand
    // click reserve this class
}

function modifySearchFilter() {
    function timeSlider() {
        // class time slider to filter results to only a certain time range for that day
    }

    

    function studios() {
        // studios: filter by specific studios
    }
}

login()