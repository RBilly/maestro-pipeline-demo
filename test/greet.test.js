import assert from "node:assert/strict";
import { test } from "node:test";

import { greet, farewell } from "../src/greet.js";

test("greets by name", () => {
  assert.equal(greet("Ada"), "Hello, Ada!");
});

test("bids farewell by name", () => {
  assert.equal(farewell("Ada"), "Goodbye, Ada!");
});
