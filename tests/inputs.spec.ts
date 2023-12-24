import { test, expect } from "@playwright/test";

test.describe("input testing", () => {
  const inputsEndpoint = "/edit";
  let token: string;

  test.beforeEach(async ({ page }) => {
    await page.goto(inputsEndpoint);
  });

  test("fill the input with data", async ({ page }) => {
    await page.getByRole("button", { name: "Consent", exact: true }).click();
    // await page.pause();
    await page.locator("#fullName").fill("Yevhen Minikh");
    await page.keyboard.down("Tab");
    await page.keyboard.press("ArrowRight");
    await page.locator("#join").pressSequentially(" person", { delay: 200 });
    // await page.pause();
    const inputValue = await page.getAttribute("#getMe", "value");
    expect(inputValue).toBe("ortonikc");
    await page.locator("#clearMe").clear();
    await expect(page.locator("#noEdit")).toBeDisabled();
    await expect(page.locator("#dontwrite")).toHaveAttribute("readonly");
  });
});
