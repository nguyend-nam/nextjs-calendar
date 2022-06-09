import { IconAngleLeftSolid } from 'components/icons/components/IconAngleLeftSolid'
import { IconAngleRightSolid } from 'components/icons/components/IconAngleRightSolid'
import cx from 'classnames'

interface CalendarProps {
  year: number
  month: number
  today: number
  hasEvent: number[]
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export function Calendar(props: CalendarProps) {
  const { year, month, today, hasEvent } = props

  /* Calculate start day of current month (2 -> 8) */
  const d = new Date(`${months[month - 1]}, ${year}`)
  const startDay = d.getDay() === 0 ? 8 : d.getDay() + 1

  const prevMonth = month - 1 === 0 ? 12 : month - 1
  const countPrevMonth =
    prevMonth === 12
      ? new Date(year - 1, prevMonth, 0).getDate()
      : new Date(year - 1, prevMonth, 0).getDate()

  /* 3 parts displayed on the calendar */
  const daysOfPrevMonth = startDay - 2
  const daysOfCurrMonth = new Date(year, month, 0).getDate()
  const daysOfNextMonth =
    7 * Math.ceil((daysOfPrevMonth + daysOfCurrMonth) / 7) -
    daysOfPrevMonth -
    daysOfCurrMonth

  const daysOnCalendar = daysOfPrevMonth + daysOfCurrMonth + daysOfNextMonth

  const dayList = []

  for (let i = 0; i < daysOnCalendar; i++) {
    /* Current month */
    if (i >= daysOfPrevMonth && i < daysOfPrevMonth + daysOfCurrMonth) {
      dayList.push(
        <button className="py-2 bg-white">
          <div
            className={cx('py-1', {
              'bg-gray-900 rounded-full text-white font-medium w-8 aspect-square mx-auto':
                i + 1 - daysOfPrevMonth === today,
              'text-indigo-600 font-medium': hasEvent.includes(
                i + 1 - daysOfPrevMonth,
              ),
            })}
          >
            {i - daysOfPrevMonth + 1}
          </div>
        </button>,
      )
    } /* Days of previous or next month */ else
      dayList.push(
        <button className="py-2 bg-gray-100" disabled>
          <div className="py-1 text-gray-400">
            {i < daysOfPrevMonth
              ? countPrevMonth - daysOfPrevMonth + i + 1
              : i - daysOfPrevMonth - daysOfCurrMonth + 1}
          </div>
        </button>,
      )
  }

  return (
    <div>
      <div className="max-w-sm">
        <div className="flex justify-between mb-7">
          <button>
            <IconAngleLeftSolid className="h-5 w-5 fill-gray-400" />
          </button>
          <button>
            <h3 className="text-xl font-semibold">
              {months[(month - 1) % 12]}
            </h3>
          </button>
          <button>
            <IconAngleRightSolid className="h-5 w-5 fill-gray-400" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-0 text-center text-gray-500 mb-3">
          <span>M</span>
          <span>T</span>
          <span>W</span>
          <span>T</span>
          <span>F</span>
          <span>S</span>
          <span>S</span>
        </div>

        <div className="shadow-sm grid grid-cols-7 gap-px border border-gray-200 bg-gray-200 rounded-xl overflow-hidden">
          {dayList}
        </div>
      </div>
    </div>
  )
}
