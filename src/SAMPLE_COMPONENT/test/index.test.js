// user.test.js

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import SampleComponent from "../Index";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders <SampleComponent />", async () => {
  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<SampleComponent />, container);
  });
  expect(container.querySelector("div").textContent).not.toBeNull();
});
