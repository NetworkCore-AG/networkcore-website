import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { chargingLinksProduct, chargingLinksEnquiry } from "../src/data/chargingLinks";

describe("Charging Links commercial rules", () => {
  test("is for Distribution Partners only", () => {
    assert.equal(chargingLinksProduct.audience, "Distribution Partner");
    assert.equal(chargingLinksEnquiry({ name: "Test", email: "test@example.com", consent: true }).type, "Distribution Partner");
  });
  test("uses only public pricing", () => {
    assert.equal(chargingLinksProduct.pricing, "public");
  });
  test("requires affirmative privacy consent", () => {
    assert.throws(() => chargingLinksEnquiry({ name: "Test", email: "test@example.com", consent: false }));
    assert.equal(chargingLinksEnquiry({ name: "Test", email: "test@example.com", consent: true }).consent, true);
  });
});