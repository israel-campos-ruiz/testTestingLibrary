/* eslint-disable testing-library/no-node-access */
import userEvent from '@testing-library/user-event'
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MyComponent from '../../../components/UI/MyComponent/MyComponent';

describe("testing in <MyComponent/>", () => {
    const mockfn = jest.fn()
    const initialProps = {
        label:'soyInput',
        onchange:mockfn,
        defaultValue:'',
        isDisable:false,
    }
  const renderMyComponent = (props = initialProps) =>
    render(
  
        <BrowserRouter>
        <MyComponent {...props} />
        </BrowserRouter>
    );

  it("Should match with snapshoot", () => {
    const {asFragment} = renderMyComponent();
    const initialRender = asFragment();
    expect(initialRender).toMatchSnapshot();
  });

  it("Should be render", () => {
    const { asFragment } = renderMyComponent();
    const initialRender = asFragment();
    expect(initialRender).not.toBeNull();
  });


  it("Should exist a label", () => {
    renderMyComponent();
    //bad way
    expect(!!screen.getByLabelText("soyInput")).toBe(true)
    // correct way
    expect(screen.getByLabelText('soyInput')).toBeInTheDocument()
  });

  it("Should be disable", () => {
    renderMyComponent({...initialProps, isDisable:true});
    const { defaultValue } = initialProps
    const view = screen.getByDisplayValue(defaultValue)
    expect(view).toBeDisabled()
  })
  it("Should be enable", () => {
    renderMyComponent({...initialProps, isDisable:false});
    const { defaultValue } = initialProps
    const view = screen.getByDisplayValue(defaultValue)
    expect(view).not.toBeDisabled()
  })


 

  it("Should exist a input", () => {
    renderMyComponent();
   const input =  document.getElementById('inputTextTest');
   const {label} = initialProps
   //bad way
   expect(!!input).toBe(true)
   //correct way 
  expect(screen.getByLabelText(label)).toBeInTheDocument()

  })

  it('Should be able to type', async () => {
      
    renderMyComponent();
    const { defaultValue,} = initialProps
    const input = screen.getByDisplayValue(defaultValue)
    userEvent.type(input, 'typing')  
    expect(input).toHaveValue('typing')
  
  });

  it('Should onChange called',  () => {
    renderMyComponent();
    const { defaultValue, onchange } = initialProps
    const input = screen.getByDisplayValue(defaultValue)
    userEvent.clear(input)
    userEvent.type(input, 'typing') 
    expect(onchange).toHaveBeenCalled()
  });

});
