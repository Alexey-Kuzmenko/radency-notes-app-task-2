import styles from './Editpage.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { Form } from '../../components';
import { useAppSelector } from '../../hooks';
import { Button } from '@mui/material';


export const EditPage = () => {
    const navigation = useNavigate();
    const { id } = useParams();
    const { notes } = useAppSelector((state) => state.notes);
    const note = notes.find((note) => note.id === id);

    const goHome = () => {
        navigation('/', { replace: true });
    };

    return (
        <div className={styles.EditPage}>
            <Form role='edit' defaultValues={{ name: note ? note.name : '', category: note ? note.category : 'task', content: note ? note.content : '' }} id={id} />
            <Button variant="contained" sx={{ alignSelf: 'flex-end' }} onClick={goHome}>Go home</Button>
        </div>
    );
};
