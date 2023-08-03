import { NotesList } from "../../components";
import { useAppSelector } from "../../hooks";

export const Archivepage = () => {
    const { archive } = useAppSelector((state) => state.notes);
    return (
        <>
            <NotesList notes={archive} label='Archived notes' />
        </>
    );
};