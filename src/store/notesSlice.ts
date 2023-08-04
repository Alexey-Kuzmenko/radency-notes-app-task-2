import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Note } from '../models/note.type';
import { FormValues } from '../components';
import { generateDate } from '../helpers/generateDate';
import { findDates } from '../helpers/findDates';
import { v4 as uuidv4 } from 'uuid';

interface NotesState {
    notes: Array<Note>
    archive: Array<Note>,
    stats: {
        task: { active: number, archived: number },
        randomThought: { active: number, archived: number },
        idea: { active: number, archived: number }
    }
}

const initialState: NotesState = {
    notes: [],
    archive: [],
    stats: {
        task: { active: 0, archived: 0 },
        randomThought: { active: 0, archived: 0 },
        idea: { active: 0, archived: 0 },
    },
};

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote(state, { payload: { name, category, content } }: PayloadAction<FormValues>) {
            const newNote: Note = {
                name,
                category,
                content,
                id: uuidv4(),
                status: 'active',
                createdAt: generateDate(),
                dates: findDates(content)
            };

            state.notes.push(newNote);
        },
        deleteNote(state, { payload }: PayloadAction<string>) {
            state.notes = state.notes.filter((note) => note.id !== payload);
        },
        archiveNote(state, { payload }: PayloadAction<string>) {
            const note = state.notes.find((note) => note.id === payload);

            if (state.archive.find((note) => note.id === payload)) {
                return;
            }

            if (note) {
                note.status = 'archived';
                state.archive.push(note);
                state.notes = state.notes.filter((note) => note.id !== payload);
            }
        },
        removeFromArchiveNote(state, { payload }: PayloadAction<string>) {
            const note = state.archive.find((note) => note.id === payload);

            if (state.notes.find((note) => note.id === payload)) {
                return;
            }

            if (note) {
                note.status = 'active';
                state.notes.push(note);
                state.archive = state.archive.filter((note) => note.id !== payload);
            }
        },
        editNote(state, { payload }: PayloadAction<{ formData: FormValues, id: string }>) {
            const { formData, id } = payload;
            const note = state.notes.find((note) => note.id === id);

            if (note) {
                const noteIndex = state.notes.indexOf(note);

                note.name = formData.name;
                note.category = formData.category;
                note.content = formData.content;
                note.dates = findDates(formData.content);

                const notesCopy = [...state.notes];
                notesCopy[noteIndex] = note;
                state.notes = notesCopy;
            }
        },
        calcTotals(state) {
            const allNotes = [...state.notes, ...state.archive];

            const stats = {
                task: { active: 0, archived: 0 },
                randomThought: { active: 0, archived: 0 },
                idea: { active: 0, archived: 0 }
            };

            allNotes.forEach((note) => {
                const { category, status } = note;

                if (status === 'archived') {
                    stats[category].archived++;
                } else {
                    stats[category].active++;
                }
            });

            state.stats = stats;
        }
    }
});

export const { addNote, deleteNote, archiveNote, removeFromArchiveNote, editNote, calcTotals } = notesSlice.actions;

export default notesSlice.reducer;