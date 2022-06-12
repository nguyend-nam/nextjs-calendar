import { Layout } from 'components/Layout'
import { CalendarCard } from 'components/CalendarCard'
import { Calendar } from 'components/Calendar'
import { Heading } from 'components/Heading'
import { Card } from 'components/Card'
import { Text } from 'components/Text'
import { Button } from 'components/Button'

const currDate = {
  year: 2022,
  month: 6,
  day: 10,
  hasEvent: [17, 27],
}

const events = [
  {
    name: 'Jane Cooper',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    date: 'June 17th, 2022',
    time: '5:00 PM',
    location: 'Starbucks',
  },
  {
    name: 'Cody Fisher',
    avatar:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    date: 'June 27th, 2022',
    time: '6:00 PM',
    location: 'Tim Hortons',
  },
  {
    name: 'Esther Howard',
    avatar:
      'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    date: 'July 10th, 2022',
    time: '7:00 PM',
    location: 'Silverburn',
  },
  {
    name: 'Jenny Wilson',
    avatar:
      'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    date: 'September 10th, 2022',
    time: '8:00 PM',
    location: 'Starbucks',
  },
  {
    name: 'Kristin Watson',
    avatar:
      'https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    date: 'November 10th, 2022',
    time: '9:00 PM',
    location: 'Starbucks',
  },
]

const CalendarPage = () => {
  return (
    <Layout>
      <div className="space-y-px">
        <Heading as="h3">Calendar</Heading>
        <Text className="text-gray-500">Upcoming meetings.</Text>
      </div>

      <Card className="flex flex-col xl:flex-row">
        <div className="grow mr-14 divide-y divide-slate-100">
          {events.map((user, index) => (
            <CalendarCard
              key={index}
              name={user.name}
              avatar={user.avatar}
              date={user.date}
              time={user.time}
              location={user.location}
            />
          ))}
        </div>
        <div className="grow">
          <Calendar
            className="mt-4 mb-8 xl:mr-0 mx-auto"
            year={currDate.year}
            month={currDate.month}
            today={currDate.day}
            hasEvent={currDate.hasEvent}
          />
          <Button className="w-full" appearance="primary">
            Add event
          </Button>
        </div>
      </Card>
    </Layout>
  )
}

export default CalendarPage
