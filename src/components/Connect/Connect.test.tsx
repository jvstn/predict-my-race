import React from "react";
import { render } from "@testing-library/react";
import Connect from "./";
import { BrowserRouter } from "react-router-dom";

describe("Connect", () => {
  it("should render", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Connect />
      </BrowserRouter>
    );

    expect(getByText(/Connect now/i)).toBeInTheDocument();
  });
});
