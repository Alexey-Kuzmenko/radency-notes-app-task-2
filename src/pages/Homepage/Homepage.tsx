import { Form, NotesList, Stats } from '../../components';
import { useAppSelector } from '../../hooks';

// ! testing
// const notes = [
//     {
//         name: 'Note 1',
//         category: 'task',
//         id: '10',
//         content: 'some content',
//         status: 'active',
//         createdAt: generateDate(),
//         dates: ['11/01/2023']
//     },
//     {
//         name: 'Note 2',
//         category: 'randomThought',
//         id: '15',
//         content: 'some content',
//         status: 'active',
//         createdAt: generateDate(),
//         dates: ['15/05/2023']
//     },
//     {
//         name: 'Note 3',
//         category: 'idea',
//         id: '13',
//         content: 'some content',
//         status: 'active',
//         createdAt: generateDate(),
//         dates: ['11/09/2023']
//     },

// ];

export const Homepage = () => {
    const { notes } = useAppSelector((state) => state.notes);
    return (
        <div>
            <Form defaultValues={{ name: '', category: 'task', content: '' }} />
            <NotesList notes={notes} label='Notes' />
            <Stats />
        </div>
    );
};