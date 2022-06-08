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
  {
    name: 'Cody Fisher',
    avatar:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    date: 'January 10th, 2022',
    time: '5:00 PM',
    location: 'Starbucks',
  },
  {
    name: 'Esther Howard',
    avatar:
      'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    date: 'January 10th, 2022',
    time: '5:00 PM',
    location: 'Starbucks',
  },
  {
    name: 'Jenny Wilson',
    avatar:
      'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    date: 'January 10th, 2022',
    time: '5:00 PM',
    location: 'Starbucks',
  },
  {
    name: 'Kristin Watson',
    avatar:
      'https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    date: 'January 10th, 2022',
    time: '5:00 PM',
    location: 'Starbucks',
  },
  {
    name: 'Cameron Williamson',
    avatar:
      'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    date: 'January 10th, 2022',
    time: '5:00 PM',
    location: 'Starbucks',
  },
]

storiesOf('components/CalendarCard', module).add('basic', () => {
  return (
    <div className="min-w-max">
      <CalendarCard
        name={data[0].name}
        avatar={data[0].avatar}
        date={data[0].date}
        time={data[0].time}
        location={data[0].location}
      />
      <hr />
      <CalendarCard
        name={data[1].name}
        avatar={data[1].avatar}
        date={data[1].date}
        time={data[1].time}
        location={data[1].location}
        isFirstLoading
      />
    </div>
  )
})
