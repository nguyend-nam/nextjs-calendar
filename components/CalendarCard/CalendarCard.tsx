import { Skeleton } from 'components/Skeleton'
import { IconCalendarSolid } from 'components/icons/components/IconCalendarSolid'
import { IconLocationDotSolid } from 'components/icons/components/IconLocationDotSolid'
import { IconEllipsisHSolid } from 'components/icons/components/IconEllipsisHSolid'

interface UserProps {
  name: string
  avatar: string
  date: string
  time: string
  location: string
  isFirstLoading?: boolean
}

export function CalendarCard(props: UserProps) {
  const { name, avatar, date, time, location, isFirstLoading = false } = props

  return (
    <div className="min-w-max bg-white divide-y divide-gray-200">
      {isFirstLoading ? (
        <div className="flex items-center p-1 pt-5 pb-5">
          <div className="h-14 w-14 mr-2.5">
            <Skeleton className="rounded-full h-14 w-14" />
          </div>

          <div className="mr-3 ml-3 w-full">
            <Skeleton className="h-4 w-28 rounded mb-3" />
            <Skeleton className="h-4 w-96 rounded" />
          </div>

          <button>
            <IconEllipsisHSolid className="h-5 w-5 fill-gray-500" />
          </button>
        </div>
      ) : (
        <div className="flex items-center p-1 pt-5 pb-5">
          <img
            className="rounded-full h-14 w-14 mr-2.5"
            src={avatar}
            alt={name}
          />

          <div className="mr-3 ml-3 w-full text-sm">
            <div className="font-medium text-gray-900 mb-2.5">{name}</div>
            <div className="flex text-gray-500">
              <div className="flex items-center border-r-2 p-0.5 pl-0 pr-3.5 mr-3">
                <IconCalendarSolid className="h-4 w-5 mr-3 fill-gray-400" />
                <div>
                  {date} at {time}
                </div>
              </div>
              <div className="flex items-center">
                <IconLocationDotSolid className="h-4 w-5 mr-3 fill-gray-400" />
                <div>{location}</div>
              </div>
            </div>
          </div>

          <button>
            <IconEllipsisHSolid className="h-5 w-5 fill-gray-500" />
          </button>
        </div>
      )}
    </div>
  )
}
