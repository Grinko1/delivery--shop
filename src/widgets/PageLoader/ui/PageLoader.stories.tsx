import type { Meta, StoryObj } from '@storybook/react';
import { PageLoader } from './PageLoader';

const meta = {
  title: 'widgets/PageLoader',
  component: PageLoader,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {

  }

} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ligth: Story = {
  args: { }
};
export const Dark: Story = {
  args: { }
};
