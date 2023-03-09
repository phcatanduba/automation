const {Builder, By, Key} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
require('dotenv').config({path: __dirname + '/.env'});

const login = process.env.login
const password = process.env.password
const link = process.env.link

console.log(login, password, link)

let driver = undefined

async function run() {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get(link);
    const loginBar = await getElement("/html/body/div[2]/div[3]/div/div[2]/form/div[1]/input");
    await loginBar.sendKeys(login);
    const passwordBar = await getElement("/html/body/div[2]/div[3]/div/div[2]/form/div[3]/input");
    await passwordBar.sendKeys(password);
    const enterButton = await getElement("/html/body/div[2]/div[3]/div/div[2]/form/div[5]/button");
    await enterButton.click();
    await driver.get("www.google.com");
}

async function getElement(xpath) {
    return await driver.findElement(By.xpath(xpath))
}

run();