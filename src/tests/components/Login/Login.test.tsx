import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import {createMemoryHistory} from 'history'

import Login from "../../../pages/Login";
describe("testing in component <Login/>", () => {
  const loginComponent = () =>
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

 const changeRoute = (route:string) :string =>  {
    const history = createMemoryHistory()
    const button = screen.getByRole('button');
    fireEvent.click(button);
    history.push(route);
    return history.location.pathname
 }

  it("Should be render the first time", () => {
    const { asFragment } = loginComponent();
    const initialRender = asFragment();
    expect(initialRender).not.toBeNull();
  });

  it("Should be a button", () => {
    loginComponent();
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it("Should be make a change page to Marvel",() => {
      loginComponent();
     const changePage = changeRoute('/marvel')
     expect(changePage).toBe('/marvel');
  });
  it("Should be make a change page to DC",() => {
      loginComponent();
      const changePage = changeRoute('/DC')
      expect(changePage).toBe('/DC');
     
   });
   it("Should be make a change page to Search",() => {
    loginComponent();
    const changePage = changeRoute('/search')
    expect(changePage).toBe('/search')
   });
});
