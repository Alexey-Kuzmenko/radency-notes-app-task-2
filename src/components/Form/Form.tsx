import { Button, FormControl, InputLabel, MenuItem, Select, TextField, FormHelperText } from '@mui/material';
import styles from './Form.module.scss';
import cn from 'classnames';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { NoteCategories } from '../../models/note.type';

interface FormValues {
    name: string
    category: NoteCategories
    content: string
}

export const Form = () => {

    const {
        control,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset
    } = useForm<FormValues>({
        defaultValues: {
            name: '',
            category: 'task',
            content: ''
        },
        mode: 'onBlur'
    });

    const onFormSubmitHandler: SubmitHandler<FormValues> = (formData): void => {
        // ! debug
        console.log(formData);
        // dispatch
        reset();
    };

    const onFormResetHandler = (): void => {
        reset();
    };

    return (
        <form className={styles.Form} onSubmit={handleSubmit(onFormSubmitHandler)}>
            <div className={styles.Form__innerFlexContainer}>

                <Controller
                    name='name'
                    control={control}
                    rules={{ required: { value: true, message: 'This field is required' } }}
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
                    rules={{ required: { value: true, message: 'This field is required' } }}
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
                        Add
                    </Button>

                    <Button variant="contained" color="error" size='medium' onClick={onFormResetHandler}>
                        Clear
                    </Button>
                </div>

            </div>
        </form>
    );
};


