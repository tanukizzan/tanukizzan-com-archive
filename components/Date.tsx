import { parseISO, format } from 'date-fns'
import { ja } from 'date-fns/locale'

type Props = {
  dateString: string
}

export default function Date({ dateString }: Props) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'yyyy/MM/dd')}</time>
}