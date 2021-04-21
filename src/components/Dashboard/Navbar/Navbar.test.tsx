import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import Navbar from ".";

describe("Navbar", () => {
  it("should render", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
    expect(getByText(/Dashboard/i)).toBeInTheDocument();
  });
});

