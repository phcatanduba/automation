const {Builder, By, Key, until} = require('selenium-webdriver');
const { getElement} = require("./login.js");
require("./readCsv.js")

async function updateLinks() {
    await global.driver.wait(until.elementLocated(By.xpath("/html/body/header/nav/d2l-navigation/d2l-navigation-main-footer/div/div/div[2]/a")), 60000);
    
    for (subject of global.subjects) {
        const { link, id, password, url }  = subject
        console.log(link, id, password, url) 
        await global.driver.navigate().to(url)
        await global.driver.sleep(5000)
    }
}

updateLinks()

