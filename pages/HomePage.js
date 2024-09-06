import BasePage from "./BasePage";

export default class HomePage {

    constructor() {
        this.navBar = "#nav";
        this.subItem1 = "#pages-nav";
        this.subItem2 = "#homeMenu";
        this.subItem3 = "#feedback";
    }

    async visit() {
        await page.goto("http://zero.webappsecurity.com/index.html");
        await page.waitForSelector(this.navBar);
    }

    async isNavBarDisplayed() {
        await page.waitForSelector(this.subItem1);
        await page.waitForSelector(this.subItem2);
        await page.waitForSelector(this.subItem3);
    }
}
