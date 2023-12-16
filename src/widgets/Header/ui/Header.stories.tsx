import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta = {
  title: 'widgets/Header',
  component: Header,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ligth: Story = {
  args: {}
};
export const Dark: Story = {
  args: {}
};
