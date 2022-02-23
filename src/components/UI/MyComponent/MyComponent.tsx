import { FC, ChangeEvent } from 'react';
interface Props {
    label:string,
    onchange:(e:ChangeEvent<HTMLInputElement>) => void,
    defaultValue:string,
    isDisable:boolean,
}

const MyComponent:FC<Props> = ({label,onchange, defaultValue, isDisable}) => {

  return (
    <>
      <label htmlFor="name" aria-label={label}>
       {label}
      </label>
      <input
        onChange={onchange}
        id="inputTextTest"
        type="text"
        name="name"
        defaultValue={defaultValue}
        disabled={isDisable}
    
      />
    </>
  );
};

export default MyComponent;
