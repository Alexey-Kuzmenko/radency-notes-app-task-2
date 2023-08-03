import styles from './NoteItem.module.scss';
import { Button, Card, CardActions, CardContent, Divider, Typography } from '@mui/material';
import { Note } from '../../models/note.type';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

type NoteItem = Omit<Note, 'id'>;

interface NoteItemProps {
    note: NoteItem,
    deleteHandler: React.MouseEventHandler
    archiveHandler: React.MouseEventHandler
    removeHandler: React.MouseEventHandler
}

export const NoteItem: React.FC<NoteItemProps> = ({ note: { name, category, content, dates, createdAt, status }, deleteHandler, archiveHandler, removeHandler }) => {

    let noteItemIcon = (
        <TaskAltIcon sx={{ marginLeft: '5px' }} />
    );

    if (category === 'idea') {
        noteItemIcon = (
            <LightbulbIcon sx={{ marginLeft: '5px' }} />
        );
    } else if (category === 'randomThought') {
        noteItemIcon = (
            <PsychologyIcon sx={{ marginLeft: '5px' }} />
        );
    }

    let noteItemControls = (
        <>
            <Button variant='contained' size="small" color='error' onClick={deleteHandler}>Delete</Button>
            <Button variant='contained' size="small" color='primary' onClick={() => ({})}>Edit</Button>
            <Button variant='contained' size="small" color='secondary' onClick={archiveHandler}>Archive</Button>
        </>
    );

    if (status === 'archived') {
        noteItemControls = (
            <Button variant='contained' size="small" color='secondary' onClick={removeHandler}>Remove</Button>
        );
    }

    return (
        <Card variant='outlined' className={styles.NoteItem} >
            <CardContent sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                <div className={styles.NoteItem__innerFlexContainer}>
                    <Typography gutterBottom textTransform='uppercase'>
                        {name}
                    </Typography>

                    <Typography textTransform='uppercase'>
                        {category === 'randomThought' ? 'Random Thought' : category} {noteItemIcon}
                    </Typography>
                </div>

                <Divider sx={{ backgroundColor: 'lightgrey', width: '100%' }} />

                <Typography variant="body2" sx={{ marginTop: '15px' }}>
                    <span className={styles.NoteItem__textWrapper}>Created:</span>  {createdAt}
                </Typography>

                <Typography variant="body2" sx={{ marginTop: '15px' }}>
                    <span className={styles.NoteItem__textWrapper}>Content:</span> {content}
                </Typography>

                <Typography variant="body2" sx={{ marginTop: '15px' }}>
                    <span className={styles.NoteItem__textWrapper}>Dates:</span> {dates.join('')}
                </Typography>

            </CardContent>

            <CardActions sx={{ padding: '16px' }}>
                {noteItemControls}
            </CardActions>
        </Card>
    );
};

