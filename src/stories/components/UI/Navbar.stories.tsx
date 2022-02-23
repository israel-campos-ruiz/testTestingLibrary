import { ComponentStory, ComponentMeta } from '@storybook/react' 
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../../../components/UI/header/Navbar'

export default {
    title: 'Header/navbar',
    component: Navbar,
}as ComponentMeta<typeof Navbar>

const Template:ComponentStory<typeof Navbar> = args => (
    <BrowserRouter>
    <Navbar {...args} />
  </BrowserRouter>
) 

export const NavbarTemplate = Template.bind({});
