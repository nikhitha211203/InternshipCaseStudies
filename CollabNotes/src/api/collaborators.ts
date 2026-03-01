export interface Collaborator {
  id: string
  name: string
  role: string
  email: string
}

// Named export
export interface Collaborator {
  id: string
  name: string
  role: string
  email: string
}

export async function fetchCollaborators(): Promise<Collaborator[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  
  return users.map((u: any) => ({
    id: String(u.id),
    name: u.name,
    role: 'Tester', 
    email: u.email,
  }))
}