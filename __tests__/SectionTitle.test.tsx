import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SectionTitle from "@/components/common/SectionTitle";

describe("SectionTitle", () => {
  const props = {
    title: "featured",
  };

  it("renders the section title", () => {
    render(<SectionTitle {...props} />);
    const sectionTitle = screen.getByText(`${props.title}`);
    expect(sectionTitle).toBeInTheDocument();
  });
});
