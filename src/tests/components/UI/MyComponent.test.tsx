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
  const write = 'typing';
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

  it('should render a input', () => {
    renderMyComponent();
    const { label } = initialProps;
    expect(screen.getByLabelText(label)).toBeInTheDocument();
  });

  it('should be able to type', () => {
    renderMyComponent();
    const { defaultValue } = initialProps;
    const input = screen.getByDisplayValue(defaultValue);
    userEvent.type(input, write);
    expect(input).toHaveValue(write);
  });

  it('should onChange called', () => {
    const mockfn = jest.fn();
    renderMyComponent({ ...initialProps, onChange: mockfn });
    let { defaultValue, onChange } = initialProps;
    onChange = mockfn;
    const input = screen.getByDisplayValue(defaultValue);
    userEvent.type(input, write);
    expect(onChange).toHaveBeenCalled();
  });
});
