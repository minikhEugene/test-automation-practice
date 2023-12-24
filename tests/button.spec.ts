import { expect, test } from "@playwright/test";

test.describe("button interactions", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/buttons");
    await page.getByRole("button", { name: "Consent", exact: true }).click();
  });

  test("Goto Home and come back here", async ({ page }) => {
    await page.locator("#home").click();
    const homeUrl = page.url();
    expect(homeUrl).toBe("https://letcode.in/");
    await page.goBack();
    expect(page.url()).toBe("https://letcode.in/buttons");
  });
  test("Find the color of the button", async ({ page }) => {
    await expect(page.getByLabel("Find the color of the button")).toHaveCSS(
      "background-color",
      "rgb(138, 77, 118)"
    );
  });

  test("disabled button", async ({ page }) => {
    await expect(page.getByRole("button", { name: "Disabled" })).toBeDisabled();
  });

  test("Click and Hold Button", async ({ page }) => {
    const holdButton = page.getByRole("button", { name: "Button Hold!" });
    await holdButton.click();
    await page.mouse.click;
    await new Promise((res) => {
      setTimeout(() => {
        console.log("waiting for 2 sec");
      }, 2000);
    });
  });
});
