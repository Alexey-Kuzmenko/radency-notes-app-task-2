import { NotesList } from '../../components';
import { useAppSelector } from '../../hooks';

export const ArchivePage = () => {
    const { archive } = useAppSelector((state) => state.notes);
    return (
        <>
            <NotesList notes={archive} label='Archived notes' />
        </>
    );
};