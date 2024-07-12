import { test, expect } from "@playwright/test";

const userName = "john";
const pass = "1qa@WS3ed";

// test("has correct title", async ({ page }) => {
//   await page.goto("https://psaf.star.lanit.ru/verdicts");

//   //Expect a title "to contain" a substring.
//   const label = page.locator(".text-light");
//   await expect(label).toContainText(/АФ-События/, { ignoreCase: true });
// });

// test("AF-request has all fields", async ({ page }) => {
//   await page.goto("https://psaf.star.lanit.ru/verdicts");
//   // const attribute_button = page.locator("//p[contains(text(),'Атрибуты')]");
//   // await attribute_button.click();
//   await expect(page.locator("thead")).toContainText("Дата АФ-События");
//   await expect(page.locator("thead")).toContainText("ID получателя");
//   await expect(page.locator("thead")).toContainText("ID запроса");
//   await expect(page.locator("thead")).toContainText("ID СЦР плательщика");
//   await expect(page.locator("thead")).toContainText("ID СЦР получателя");
//   await expect(page.locator("thead")).toContainText("Тип Запроса");
//   await expect(page.locator("thead")).toContainText("Вердикт");
//   await expect(page.locator("thead")).toContainText("Правило");
//   await expect(page.locator("thead")).toContainText("ФПО");
//   await expect(page.locator("thead")).toContainText("Атрибут");
//   await expect(page.locator("thead")).toContainText("Номер СЦР плательщика");
//   await expect(page.locator("thead")).toContainText("ИНН плательщика");
//   await expect(page.locator("thead")).toContainText("ОГРН плательщика");
//   await expect(page.locator("thead")).toContainText("ХЭШ СНИЛС плательщика");
//   await expect(page.locator("thead")).toContainText("Телефон плательщика");
//   await expect(page.locator("thead")).toContainText("Тип ДУЛ плательщика");
//   await expect(page.locator("thead")).toContainText("ХЭШ ДУЛ плательщика");
//   await expect(page.locator("thead")).toContainText("ID ФПО");
//   await expect(page.locator("thead")).toContainText("Номер СЦР получателя");
//   await expect(page.locator("thead")).toContainText("ИНН получателя");
//   await expect(page.locator("thead")).toContainText("ОГРН плательщика");
//   await expect(page.locator("thead")).toContainText("ХЭШ СНИЛС получателя");
//   await expect(page.locator("thead")).toContainText("Телефон получателя");
//   await expect(page.locator("thead")).toContainText("Тип ДУЛ получателя");
//   await expect(page.locator("thead")).toContainText("ХЭШ ДУЛ получателя");
//   await expect(page.locator("thead")).toContainText("Назначение");
//   await expect(page.locator("thead")).toContainText("ID запроса");
//   await expect(page.locator("thead")).toContainText("Дата запроса");
//   await expect(page.locator("thead")).toContainText("ID операции");
//   await expect(page.locator("thead")).toContainText("Идентификатор ТСП");
//   await expect(page.locator("thead")).toContainText("Идентификатор СиС");
//   await expect(page.locator("thead")).toContainText("Тип операции");
//   await expect(page.locator("thead")).toContainText(
//     "Идентификатор СиС «Привязка» (Оплата С2В с ранее привязанного к ЮЛ СЦР ФЛ)"
//   );
//   await expect(page.locator("thead")).toContainText(
//     "Идентификатор СиС «Доверенность ФП на совершение операций от имени Клиента»"
//   );

//   await page.waitForTimeout(2000);
//   //await expect(f).toContainText(/АФ-События/, { ignoreCase: true });
// });

test("AF-request date-time filters", async ({ page }) => {
  await page.goto("https://psaf.star.lanit.ru/verdicts");
  const datetimeDropdown = page.locator(
    "//body[1]/div[1]/div[1]/main[1]/article[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/form[1]/div[1]/div[1]/div[1]/div[1]/div[1]/p[1]"
  );
  await page.getByRole("button", { name: "Фильтры" }).click();
  await datetimeDropdown.click();

  const datetimeFilterWrapper = page.locator(
    "//body/div[@id='app']/div[1]/main[1]/article[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/form[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]"
  );
  await expect(datetimeFilterWrapper).toContainText("1 час");
  await expect(datetimeFilterWrapper).toContainText("1 день");
  await expect(datetimeFilterWrapper).toContainText("1 неделя");
  await expect(datetimeFilterWrapper).toContainText("1 месяц");
  await expect(datetimeFilterWrapper).toContainText("Указать период");
  await page.waitForTimeout(2000);
});

test("AF-request date-time filters", async ({ page }) => {
  await page.goto("https://psaf.star.lanit.ru/verdicts");

  await page.waitForTimeout(2000);
});
