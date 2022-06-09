import { storiesOf } from '@storybook/react'
import { Calendar } from './Calendar'

storiesOf('components/Calendar', module).add('basic', () => {
  return (
    <div>
      <Calendar year={2022} month={6} today={9} hasEvent={[5, 26]} />
    </div>
  )
})
