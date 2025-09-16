import { Card } from '@/components/ui/card'

export default function EmptyState({ message }: { message: string }) {
  return (
    <Card className="p-10 text-center text-gray-400">
      <p>{message}</p>
    </Card>
  )
}
