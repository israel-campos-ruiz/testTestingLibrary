import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MyComponent from '../../../components/UI/MyComponent/MyComponent';

interface Props {
  label: string;
  defaultValue: string;
  isDisable: boolean;
  onChange?: jest.Mock | null;
}
describe('testing in <MyComponent/>', () => {
  const initialProps: Props = {
    label: 'soyInput',
    onChange: null,
    defaultValue: '',
    isDisable: false,
  };
  const renderMyComponent = (props = initialProps) =>
    render(
      <BrowserRouter>
        <MyComponent {...props} />
      </BrowserRouter>
    );

  it('should match with snapshoot', () => {
    const { asFragment } = renderMyComponent();
    const initialRender = asFragment();
    expect(initialRender).toMatchSnapshot();
  });

  it('should be render', () => {
    const { asFragment } = renderMyComponent();
    const initialRender = asFragment();
    expect(initialRender).not.toBeNull();
  });

  it('should render a label', () => {
    renderMyComponent();
    expect(screen.getByLabelText('soyInput')).toBeInTheDocument();
  });

  it('should be disabled', () => {
    renderMyComponent({ ...initialProps, isDisable: true });
    const { defaultValue } = initialProps;
    const view = screen.getByDisplayValue(defaultValue);
    expect(view).toBeDisabled();
  });
  it('should be enabled', () => {
    renderMyComponent({ ...initialProps, isDisable: false });
    const { defaultValue } = initialProps;
    const view = screen.getByDisplayValue(defaultValue);
    expect(view).not.toBeDisabled();
  });

  it('should render an input', () => {
    renderMyComponent();
    const { label } = initialProps;
    expect(screen.getByLabelText(label)).toBeInTheDocument();
  });

  it('should be able to type', () => {
    renderMyComponent();
    const { defaultValue } = initialProps;
    const input = screen.getByDisplayValue(defaultValue);
    const write = 'typing';
    userEvent.type(input, write);
    expect(input).toHaveValue(write);
  });

  it('should handle onChange event properly', () => {
    const handleOnChange = jest.fn();
    renderMyComponent({ ...initialProps, onChange:handleOnChange });
    const { defaultValue } = initialProps;  
    const input = screen.getByDisplayValue(defaultValue);
    const write = 'typing';
    userEvent.type(input, write);
    expect(handleOnChange).toHaveBeenCalled();
  });
});
