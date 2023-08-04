export type NoteCategories = 'task' | 'randomThought' | 'idea';
export type NoteStatus = 'active' | 'archived';

export interface Note {
    name: string
    category: NoteCategories
    id: string
    content: string
    status: NoteStatus
    createdAt: string
    dates: Array<string>
}