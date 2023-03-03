describe('Testing', () => {
    it('should scroll without errors', async () => {
        await browser.url(`https://webdriver.io/blog`)

        await $("(//div[contains(.,'setup/testrunner.js')])[10]").scrollIntoView();
        await browser.pause(1000);
        await $("(//div[contains(.,'queryElements/singleElements.js')])[11]").scrollIntoView();
        await browser.pause(1000);
        await $("(//div[contains(.,'vue.test.ts')])[7]").scrollIntoView();
    })
})

