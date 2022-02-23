import { FC, useState } from 'react';
import MyComponent from '../components/UI/MyComponent/MyComponent';

const Search: FC = () => {
 const [state, setState] =  useState('im')
 const handleChange = (e:any) => {
   setState(e.target.value)
 }
  return (
    <MyComponent label='imLabel' onchange={handleChange} isDisable={false} defaultValue={state} />
  )
}

export default Search