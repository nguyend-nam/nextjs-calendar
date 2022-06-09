import { storiesOf } from '@storybook/react'
import { CalendarCard } from './CalendarCard'

const data = [
  {
    name: 'Jane Cooper',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    date: 'January 10th, 2022',
    time: '5:00 PM',
    location: 'Starbucks',
  },
]

storiesOf('components/CalendarCard', module).add('basic', () => {
  return (
    <div>
      {data.map((user) => (
        <CalendarCard
          name={user.name}
          avatar={user.avatar}
          date={user.date}
          time={user.time}
          location={user.location}
        />
      ))}
    </div>
  )
})
