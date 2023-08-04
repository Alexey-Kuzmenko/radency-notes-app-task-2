import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { calcTotals } from '../../store/notesSlice';

export const Stats = () => {
    const { stats, notes, archive } = useAppSelector((state) => state.notes);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(calcTotals());
    }, [notes, archive]);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Note Category</TableCell>
                        <TableCell align='center'>Active</TableCell>
                        <TableCell align='center'>Archive</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow
                    >
                        <TableCell>Task</TableCell>
                        <TableCell align='center'>{stats.task.active}</TableCell>
                        <TableCell align='center'>{stats.task.archived}</TableCell>
                    </TableRow>
                    <TableRow
                    >
                        <TableCell>Random Thought</TableCell>
                        <TableCell align='center'>{stats.randomThought.active}</TableCell>
                        <TableCell align='center'>{stats.randomThought.archived}</TableCell>
                    </TableRow>
                    <TableRow
                    >
                        <TableCell>Idea</TableCell>
                        <TableCell align='center'>{stats.idea.active}</TableCell>
                        <TableCell align='center'>{stats.idea.archived}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

