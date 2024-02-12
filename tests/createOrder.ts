import { test, expect } from "@playwright/test";

test("createOrder test", async ({ page }) => {
  await page.goto(
    "https://ilarionhalushka.github.io/jekyll-ecommerce-demo/products/222"
  );
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Products" })
    .click();
  await page
    .locator("li")
    .filter({ hasText: "Sacha the Deer Sacha’s" })
    .getByRole("link")
    .first()
    .click();
  await page.getByRole("button", { name: "Add to cart" }).click();
  await page.getByRole("button", { name: "Checkout" }).click();
  await page.getByLabel("Full name").click();
  await page.getByLabel("Full name").fill("qwqerty");
  await page.getByLabel("Email").click();
  await page.getByLabel("Email").fill("qwerty1234@swadf.com");
  await page.locator(".snipcart-textbox").first().click();
  await page.getByLabel("Street address").fill("qwe");
  await page.getByLabel("City").click();
  await page.getByLabel("City").fill("qwe");
  await page.getByLabel("Country").click();
  await page.getByLabel("Country").fill("qwe");
  await page.getByLabel("Province/State").click();
  await page.getByLabel("Province/State").fill("qwe");
  await page.getByLabel("Postal/ZIP code").click();
  await page.getByLabel("Postal/ZIP code").fill("123");
  await page.getByLabel("Apt/Suite").click();
  await page.getByLabel("Apt/Suite").fill("123");
  await page.getByRole("button", { name: "Continue to payment" }).click();
  await page.getByLabel("Country").click();
  await page.getByLabel("Country").fill("23");
  await page.getByRole("button", { name: "Continue to payment" }).click();
  await page
    .locator(
      ".snipcart-typeahead__content > .snipcart-typeahead__select > .snipcart-typeahead__input > .snipcart-form__select-wrapper > .snipcart-textbox"
    )
    .click();
  await page.getByLabel("Country").fill("qqqqqq");
  await page.getByRole("button", { name: "Continue to payment" }).click();
  await page.getByLabel("Country").click();
  await page.getByText("Afghanistan").click();
  await page.getByLabel("Country").click();
  await page.getByLabel("Country").fill("qqweqeqweqweeqwewqweqewq");
  await page.getByRole("button", { name: "Continue to payment" }).click();
  await page.frameLocator("iframe").getByPlaceholder("Card number").click();
  await page
    .frameLocator("iframe")
    .getByPlaceholder("Card number")
    .fill("4242 4242 4242 42422");
  await page.frameLocator("iframe").getByPlaceholder("MM/YY").click();
  await page.frameLocator("iframe").getByPlaceholder("MM/YY").fill("09/999");
  await page.frameLocator("iframe").getByPlaceholder("CVV").click();
  await page.frameLocator("iframe").getByPlaceholder("CVV").fill("123");
  await page.getByRole("button", { name: "Place order" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Thank you for your order$/ })
    .first()
    .click();
  await page.getByRole("button", { name: "Continue shopping" }).click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Products" })
    .click();
});
// test("test1", async ({ page }) => {
//   await page.goto(
//     "https://ilarionhalushka.github.io/jekyll-ecommerce-demo/products/222222222"
//   );
//   await page
//     .getByRole("navigation")
//     .getByRole("link", { name: "Products" })
//     .click();
//   await page
//     .locator("li")
//     .filter({ hasText: "Sacha the Deer Sacha’s" })
//     .getByRole("link")
//     .first()
//     .click();
//   await page.click("button.snipcart-add-item");
//   await page.getByRole("button", { name: "Checkout" }).click();
//   await page.getByText("Order summaryEdit Sacha the").click();
//});
