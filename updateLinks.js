const {Builder, By, Key, until} = require('selenium-webdriver');
const { ShadowRootPromise } = require('selenium-webdriver/lib/webdriver.js');
const { getElement} = require("./login.js");
require("./readCsv.js")

async function updateLinks() {
    await global.driver.wait(until.elementLocated(By.xpath("/html/body/header/nav/d2l-navigation/d2l-navigation-main-footer/div/div/div[2]/a")), 60000);
    
    for (subject of global.subjects) {
        const { link, id, password, url }  = subject
        console.log(link, id, password, url) 
        const description = `
        <p><span style="color: #085394;">Reunião síncrona na ferramenta Zoom Meetings que tem como objetivo promover a interação entre colegas de classe e o professor-tutor. Nela, o diálogo sobre temas relevantes da disciplina atuará como um conciliador dos estudos apresentados no módulo.</span></p>
        <p><strong><span style="color: #085394;">A participação não é obrigatória, mas sim, enriquecedora.</span></strong></p>
        <p><strong><span style="color: #085394;">ID: ${id}</span></strong></p>
        <p><strong><span style="color: #085394;">Senha: ${password}</span></strong></p>
        <p><span style="color: #085394;">Utilize os recursos da plataforma Zoom e aproveite!</span></p>
        `        
        await global.driver.navigate().to(url)
        
        for(let i = 4; i <= 13; i++) {
            const moduleXpath = `/html/body/div[3]/div/div[1]/div[2]/div[1]/div/ul[2]/li[${4}]/a/div/div/div[2]/div/div/div[1]/div/div[1]`
            const activityXpath = `/html/body/div[3]/div/div[1]/div[2]/div[1]/div/ul[2]/li[${4}]/ul/li[2]/a/div/div/div[2]/div/div/div[1]/div/div[1]`
            const linkXpath = `/html/body/div[3]/div/div[2]/div/div/div[7]/div[1]/div/ul/li[1]/div[1]/div/div[2]/div/div/div[1]/d2l-dropdown-context-menu`
            const editLinkXpath = `/html/body/div[3]/div/div[2]/div/div/div[7]/div[1]/div/ul/li[1]/div[1]/div/div[2]/div/div/div[1]/d2l-dropdown-context-menu/d2l-dropdown-menu/d2l-menu/d2l-menu-item[4]`
            const urlXpath = `/html/body/div/div[2]/div[2]/form/div/div[2]/input`
            const updateUrlXpath = `/html/body/div/div[3]/div/div/div[1]/button[1]`
            const descriptionXpath = `/html/body/div[3]/div/div[2]/div/div/div[7]/div[1]/div/ul/li[1]/div[1]/div/div[2]/div/div/form/div/div[1]/div/div[2]/div/div/d2l-html-block//div`
            const editDescriptionXpath = `/html/body/div[3]/div/div[2]/div/div/div[7]/div[1]/div/ul/li[1]/div[1]/div/div[2]/div/div/form/div/div[2]/d2l-htmleditor//div[1]/div/div[1]/div[1]/d2l-htmleditor-toolbar-full//div[1]/div[1]/div/d2l-htmleditor-button[8]//button/svg`
            const inputDescriptionXpath = `/html/body/div[3]/div/div[2]/div/div/div[7]/div[1]/div/ul/li[1]/div[1]/div/div[2]/div/div/form/div/div[2]/d2l-htmleditor//div[1]/div/div[2]/d2l-htmleditor-sourcecode-dialog//d2l-dialog/div/div/div[2]`
            const updateDescriptionXpath = `/html/body/div[3]/div/div[2]/div/div/div[7]/div[1]/div/ul/li[1]/div[1]/div/div[2]/div/div/form/div/div[2]/d2l-htmleditor//div[1]/div/div[2]/d2l-htmleditor-sourcecode-dialog//d2l-dialog/d2l-button[1]`
            
            //await global.driver.wait(until.elementLocated(By.xpath(moduleXpath)), 60000);
            const moduleElement = await getElement(moduleXpath)
            await moduleElement.click()

            await global.driver.sleep(2000)
            
            //await global.driver.wait(until.elementLocated(By.xpath(activityXpath)), 60000);
            const activityElement = await getElement(activityXpath)
            await activityElement.click()

            await global.driver.sleep(2000)
            
            await global.driver.wait(until.elementLocated(By.xpath(linkXpath)), 60000);
            const linkElement = await getElement(linkXpath)
            await linkElement.click()

            await global.driver.wait(until.elementLocated(By.xpath(editLinkXpath)), 60000);
            const editLinkElement = await getElement(editLinkXpath)
            await editLinkElement.click()

            //await global.driver.wait(until.elementLocated(By.xpath(urlXpath)), 60000);
            const urlElement = await getElement("/html/body/div/div[1]/a/span")
            await urlElement.sendKeys(link)

            //await global.driver.wait(until.elementLocated(By.xpath(updateUrlXpath)), 60000);
            const updateUrlElement = await getElement(updateUrlXpath)
            await updateUrlElement.click()

            //await global.driver.wait(until.elementLocated(By.xpath(descriptionXpath)), 60000);
            const descriptionElement = await getElement(descriptionXpath)
            await descriptionElement.click()

            //await global.driver.wait(until.elementLocated(By.xpath(editDescriptionXpath)), 60000);
            const editDescriptionElement = await getElement(editDescriptionXpath)
            await editDescriptionElement.click()
            
            //await global.driver.wait(until.elementLocated(By.xpath(inputDescriptionXpath)), 60000);
            const inputDescriptionElement = await getElement(inputDescriptionXpath)
            await inputDescriptionElement.sendKeys(description)

            //await global.driver.wait(until.elementLocated(By.xpath(updateDescriptionXpath)), 60000);
            const updateDescriptionElement = await getElement(updateDescriptionXpath)
            await updateDescriptionElement.click()
        }
    }
}

updateLinks()

