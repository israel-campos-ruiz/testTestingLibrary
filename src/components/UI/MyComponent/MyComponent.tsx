import { FC, } from 'react';
interface Props {
    label:string,
    defaultValue:string,
    isDisable:boolean,
    onChange?:any
}

const MyComponent:FC<Props> = ({label,onChange, defaultValue, isDisable}) => {

  return (
    <>
      <label htmlFor="name" aria-label={label}>
       {label}
      </label>
      <input
        onChange={onChange}
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
