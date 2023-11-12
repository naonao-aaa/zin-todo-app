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

//EditedTaskのデータ型は、Task型から'created_at'と'user_id'を取り除いたデータ型とする。
export type EditedTask = Omit<Task, 'created_at' | 'user_id'>

//EditedNoticeのデータ型は、Notice型から'created_at'と'user_id'を取り除いたデータ型とする。
export type EditedNotice = Omit<Notice, 'created_at' | 'user_id'>
