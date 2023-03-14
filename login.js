const {Builder, By, Key, WebDriver, Capabilities} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
require('dotenv').config({path: __dirname + '/.env'});

const login = process.env.login
const password = process.env.password
const link = process.env.link

console.log(login, password, link)

global.driver = new Builder().forBrowser('chrome').build();

run()

async function run() {
    await global.driver.get(link);
    const loginBar = await getElement("/html/body/div[2]/div[3]/div/div[2]/form/div[1]/input");
    await loginBar.sendKeys(login);
    const passwordBar = await getElement("/html/body/div[2]/div[3]/div/div[2]/form/div[3]/input");
    await passwordBar.sendKeys(password);
    const enterButton = await getElement("/html/body/div[2]/div[3]/div/div[2]/form/div[5]/button");
    await enterButton.click();
}

async function getElement(xpath) {
    return await global.driver.findElement(By.xpath(xpath))
}

module.exports = { getElement };