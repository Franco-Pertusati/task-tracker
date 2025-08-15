export interface Task {
  id: number
  title?: string
  transcurredTime: number
  isPlaying: boolean
  completed: boolean
  tag: Tag
  repeat?: boolean
  repeated?: number
}

export interface Tag {
  id: number
  name: string
  objective?: number
}

export interface TaskGroup {
  id: number
  title: string
  repeat?: boolean
  repeated?: number
  tasks: Task[]
}
