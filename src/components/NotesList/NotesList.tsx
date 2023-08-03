import styles from './NotesList.module.scss';
import { Note } from '../../models/note.type';
import { Divider, Chip, Alert } from '@mui/material';
import { NoteItem } from '../NoteItem/NoteItem';
import { archiveNote, deleteNote, removeFromArchiveNote } from '../../store/notesSlice';
import { useAppDispatch } from '../../hooks';

interface NotesListProps {
    notes: Array<Note>
    label: 'Notes' | 'Archived notes'
}

export const NotesList: React.FC<NotesListProps> = ({ notes, label }) => {
    const dispatch = useAppDispatch();

    const onDeleteClickHandler = (id: string): void => {
        dispatch(deleteNote(id));
    };

    const onArchiveClickHandler = (id: string): void => {
        dispatch(archiveNote(id));
    };

    const onRemoveClickHandler = (id: string): void => {
        dispatch(removeFromArchiveNote(id));
    }

    const renderNotes = (): JSX.Element[] => {
        return notes.map((note: Note) => {
            return (
                <NoteItem
                    key={note.id}
                    note={note}
                    deleteHandler={() => onDeleteClickHandler(note.id)}
                    archiveHandler={() => onArchiveClickHandler(note.id)}
                    removeHandler={() => onRemoveClickHandler(note.id)}
                />
            );
        });
    };

    return (
        <div className={styles.NotesList}>
            <Divider><Chip label={label} /></Divider>
            {
                !notes.length
                    ?
                    <Alert severity="info">{label === 'Notes' ? 'You don\'t have any notes yet' : 'You don\'t archive any notes yet'}</Alert>
                    :
                    renderNotes()
            }
        </div>
    );
};