import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ToolsCard from "@/components/common/ToolsCard";

describe("ToolsCard", () => {
  const props = {
    data: {
      id: 1,
      title:
        "The US President wants half of all new vehicles to be zero emissions by 2030",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare sit elit consectetur aliquam...",
    },
    styles: {
      cardW: "w-[160px]",
      cardH: "h-[160px]",
      width: 160,
      height: 160,
      text_transform: "capitalize",
      space: "gap-3",
    },
  };

  it("renders the card title", () => {
    render(<ToolsCard {...props} />);
    const cardTitle = screen.getByText(`${props.data.title}`);
    expect(cardTitle).toBeInTheDocument();
  });

  it("renders the card Description", () => {
    render(<ToolsCard {...props} />);
    const cardDescription = screen.getByText(`${props.data.description}`);
    expect(cardDescription).toBeInTheDocument();
  });
});
