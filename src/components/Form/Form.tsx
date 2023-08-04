import { Button, FormControl, InputLabel, MenuItem, Select, TextField, FormHelperText } from '@mui/material';
import styles from './Form.module.scss';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { NoteCategories } from '../../models/note.type';
import { useAppDispatch } from '../../hooks';
import { addNote, editNote } from '../../store/notesSlice';

interface FormProps {
    role?: 'create' | 'edit'
    id?: string
    defaultValues: {
        name: string
        category: NoteCategories
        content: string
    }
}

export interface FormValues {
    name: string
    category: NoteCategories
    content: string
}

export const Form: React.FC<FormProps> = ({ role = 'create', defaultValues, id = '' }) => {
    const dispatch = useAppDispatch();

    const {
        control,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset
    } = useForm<FormValues>({
        defaultValues,
        mode: 'onBlur'
    });

    const onFormSubmitHandler: SubmitHandler<FormValues> = (formData): void => {
        dispatch(addNote(formData));
        reset();
    };

    const onFromEditSubmitHandler: SubmitHandler<FormValues> = (formData): void => {
        dispatch(editNote({ formData, id }));
    };

    const onFormResetHandler = (): void => {
        reset();
    };

    return (
        <form className={styles.Form} onSubmit={handleSubmit(role === 'create' ? onFormSubmitHandler : onFromEditSubmitHandler)}>
            <div className={styles.Form__innerFlexContainer}>

                <Controller
                    name='name'
                    control={control}
                    rules={{ required: { value: true, message: 'This field is required' }, pattern: { value: /[\S\s]+[\S]+/, message: 'Invalid value' } }}
                    render={({ field }) =>
                        <TextField
                            {...field}
                            id="note-name"
                            label="Name"
                            variant="outlined"
                            type='text'
                            inputProps={{ maxLength: 20 }}
                            helperText={errors.name?.message ? errors.name.message : ''}
                            error={errors.name ? true : false}
                        />
                    }
                />

                <Controller
                    name='category'
                    control={control}
                    rules={{ required: { value: true, message: 'This field is required' } }}
                    render={({ field }) =>
                        <FormControl fullWidth error={errors.category ? true : false}>
                            <InputLabel id="note-type">Category</InputLabel>
                            <Select
                                {...field}
                                labelId="note-type"
                                id="note-type"
                                label="Category"
                            >
                                <MenuItem value={'task'}>Task</MenuItem>
                                <MenuItem value={'randomThought'}>Random Thought</MenuItem>
                                <MenuItem value={'idea'}>Idea</MenuItem>
                            </Select>
                            {
                                errors.category?.message ? <FormHelperText>{errors.category.message}</FormHelperText> : null
                            }
                        </FormControl>
                    }
                />

                <Controller
                    name='content'
                    control={control}
                    rules={{ required: { value: true, message: 'This field is required' }, pattern: { value: /[\S\s]+[\S]+/, message: 'Invalid value' } }}
                    render={({ field }) =>
                        <TextField
                            {...field}
                            id="note-content"
                            label="Content"
                            multiline
                            rows={4}
                            inputProps={{ maxLength: 50 }}
                            helperText={errors.content?.message ? errors.content.message : ''}
                            error={errors.content ? true : false}
                        />
                    }
                />

                <div className={styles.Form__controls}>
                    <Button variant="contained" color='success' size='medium' type='submit' disabled={!isValid}>
                        {role === 'create' ? 'Create Note' : 'Edit note'}
                    </Button>

                    <Button variant="contained" color="error" size='medium' onClick={onFormResetHandler}>
                        Clear
                    </Button>
                </div>

            </div>
        </form>
    );
};


