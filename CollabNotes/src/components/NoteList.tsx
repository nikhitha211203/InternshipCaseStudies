import { useUserStore } from '../store/userStore'

export default function NotesList() {
  const notes = useUserStore((state) => state.notes)

  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <strong>{note.title}</strong> - {note.status}
          <p>{note.message}</p>
          <em>by {note.author}</em>
        </li>
      ))}
    </ul>
  )
}
