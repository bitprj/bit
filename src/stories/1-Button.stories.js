import React from 'react'
import Button from '../components/shared/low/Button'

export default { title: 'Button' }

export const withText = () => <Button>Hello Button</Button>;

export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
)