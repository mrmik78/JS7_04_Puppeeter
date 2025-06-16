let page;

beforeEach(async () => {
  page = await browser.newPage();
  });

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
        await page.goto("https://github.com/team");
    });

  test("The h1 header content", async () => {
    jest.setTimeout(5000);
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual("GitHub · Build and ship software on a single, collaborative platform · GitHub");
  });

  test("The first link attribute", async () => {
    jest.setTimeout(2000);
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    jest.setTimeout(2000);
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  });
});

describe("Github page tests 2", () => {
   beforeEach(async () => {
        await page.goto("https://github.com/enterprise");
    });
     test("Test title", async () => {
      jest.setTimeout(2000);
      const title = await page.title();
      expect(title).toEqual("The AI Powered Developer Platform. · GitHub");
     });

     test("Sign in button", async () => {
    jest.setTimeout(2000);
    const btnSelector = "a[href='/account/enterprises/new']";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Start free for 30 days")
    });

    test("Test new title", async () => {
    jest.setTimeout(3000);
        await page.click("a[href='/account/enterprises/new']");
    const actual = await page.title();
    expect(actual).toEqual("Sign in to GitHub · GitHub")
    });
});