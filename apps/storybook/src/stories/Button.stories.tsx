import { Button } from '@repo/ui/src';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  args: { text: 'Click Me!' },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};