import { test, describe, expect } from "vitest";
import { render, screen } from "@testing-library/svelte";
import Title from "./Title.svelte";

describe("Title", () => {
  test("should render properly", () => {
    render(Title, { title: "Testing Title" });

    const title = screen.getByRole("heading", { name: "Testing Title" });

    expect(title).toBeInTheDocument();
  });
});
