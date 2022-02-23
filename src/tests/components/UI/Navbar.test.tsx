/* eslint-disable testing-library/no-node-access */
import userEvent from '@testing-library/user-event'
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../../../components/UI/header/Navbar";


describe("testing in <Navbar/>", () => {
  const renderNavBarComponent = () =>
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

  it("Should match with snapshoot", () => {
    const {asFragment} = renderNavBarComponent();
    const initialRender = asFragment();
    expect(initialRender).toMatchSnapshot();
  });

  it("Should be render", () => {
    const { asFragment } = renderNavBarComponent();
    const initialRender = asFragment();
    expect(initialRender).not.toBeNull();
  });

  it("Should have link marvel, dc,search", () => {
    renderNavBarComponent();
    expect(screen.getByText("Marvel")).toBeInTheDocument();
    expect(screen.getByText("DC")).toBeInTheDocument();
    expect(screen.getByText("Search")).toHaveAttribute('href','/Search')
    
    
  });

  it("Should have a classname", () => {
    renderNavBarComponent();
    const nav = screen.getByRole("navigation");
    const navClass = nav.firstElementChild?.className;
    expect(
      navClass?.includes("flex flex-wrap justify-between items-center mx-auto")
    ).toBeTruthy();
  });

  it("Should exist a label", () => {
    renderNavBarComponent();
    expect(screen.getByLabelText('soyInput')).toBeInTheDocument()
    expect(!!screen.getByLabelText("soyInput")).toBe(true)
  });

  it("Should be disabled", () => {
    renderNavBarComponent();
    const view = screen.getByDisplayValue('im')
    expect(view).not.toBeDisabled()
  })

  it("Should exist a input", () => {
    renderNavBarComponent();
   const input =  document.getElementById('inputTextTest');
   expect(!!input).toBe(true)
  })

  test('types into the input', () => {
    renderNavBarComponent();
    const input = screen.getByDisplayValue('im')
    userEvent.clear(input)
    userEvent.type(input, 'typing')
    expect(input).toHaveValue('typing')
  })

});
