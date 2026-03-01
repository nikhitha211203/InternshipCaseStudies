import { useQuery } from '@tanstack/react-query'
import { fetchCollaborators, type Collaborator } from '../api/collaborators'
import { useUserStore } from '../store/userStore'
import { useEffect } from 'react'

export default function CollaboratorList() {
  const setNotes = useUserStore((state) => state.setNotes)

  const { data, isLoading } = useQuery<Collaborator[]>({
    queryKey: ['collaborators'],
    queryFn: fetchCollaborators,
  })

  useEffect(() => {
    if (data) {
      setNotes(
        data.map((c) => ({
          id: c.id,
          title: c.name,
          status: 'active',
          message: c.role,
          author: c.email,
        }))
      )
    }
  }, [data, setNotes])

  if (isLoading) return <div>Loading...</div>

  return (
    <ul>
      {data?.map((c) => (
        <li key={c.id}>
          {c.name} ({c.role})
        </li>
      ))}
    </ul>
  )
}