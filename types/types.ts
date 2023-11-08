//Taskのデータ型を定義
export type Task = {
  id: string
  created_at: string
  title: string
  user_id: string | undefined
}

//Noticeのデータ型を定義
export type Notice = {
  id: string
  created_at: string
  content: string
  user_id: string | undefined
}
