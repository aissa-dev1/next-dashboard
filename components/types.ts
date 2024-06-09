import { Comment } from "@/redux/types/data";

interface Options<T> {
  filterKey: T;
  filterValue: string;
}

export type FilesFilterKey = "fileName" | "fileType" | "fileSize";

export type PostsFilterKey = "postDescription" | "liked" | "notLiked";

export type ProjectsFilterkey = "projectName" | "status";

export type RemindersFilterKey = "reminderTitle" | "reminderStatus";

export type TasksFilterKey = "task" | "completed" | "notCompleted";

export interface FileOptions extends Options<FilesFilterKey> {}

export interface EachCommentProps extends Comment {
  postId: string;
}

export interface PostOptions {
  filterKey: PostsFilterKey;
  filterValue: string;
}

export interface ProjectOptions extends Options<ProjectsFilterkey> {}

export interface ReminderOptions extends Options<RemindersFilterKey> {}

export interface TaskOptions extends Options<TasksFilterKey> {
  content: string;
}
