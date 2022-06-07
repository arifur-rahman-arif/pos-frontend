import React, { useState } from 'react';
import {
    Avatar,
    Box,
    Button,
    Card,
    Checkbox,
    IconButton,
    Link as MuiLink,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel,
    Typography
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { TableToolbar } from '@/components/page-component';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/components/TableHeader.module.scss';
import { BsCartPlus, BsTrash } from 'react-icons/bs';

interface Data {
    calories: number;
    carbs: number;
    fat: number;
    name: string;
    protein: number;
}

/**
 * Create data for table rows
 * @param {string} name
 * @param {number} calories
 * @param {number} fat
 * @param {number} carbs
 * @param {number} protein
 * @returns {Data}
 */
const createData = (name: string, calories: number, fat: number, carbs: number, protein: number): Data => {
    return {
        name,
        calories,
        fat,
        carbs,
        protein
    };
};

const rows = [
    createData(`Product #1`, 305, 3.7, 67, 4.3),
    createData(`Product #2`, 452, 25.0, 51, 4.9),
    createData(`Product #3`, 262, 16.0, 24, 6.0),
    createData(`Product #4`, 159, 6.0, 24, 4.0),
    createData(`Product #5`, 356, 16.0, 49, 3.9),
    createData(`Product #6`, 408, 3.2, 87, 6.5),
    createData(`Product #7`, 237, 9.0, 37, 4.3),
    createData(`Product #8`, 375, 0.0, 94, 0.0),
    createData(`Product #9`, 518, 26.0, 65, 7.0),
    createData(`Product #10`, 392, 0.2, 98, 0.0)
];

// eslint-disable-next-line require-jsdoc
function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = 'asc' | 'desc';

// eslint-disable-next-line require-jsdoc
function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key
    // eslint-disable-next-line no-unused-vars
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy) // eslint-disable-line
        : (a, b) => -descendingComparator(a, b, orderBy); // eslint-disable-line
}

// This method is created for cross-browser compatibility, if you don't
// Need to support IE11, you can use Array.prototype.sort() directly
// eslint-disable-next-line require-jsdoc
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Product name'
    },
    {
        id: 'calories',
        numeric: true,
        disablePadding: false,
        label: 'Calories'
    },
    {
        id: 'fat',
        numeric: true,
        disablePadding: false,
        label: 'Fat (g)'
    },
    {
        id: 'carbs',
        numeric: true,
        disablePadding: false,
        label: 'Carbs (g)'
    },
    {
        id: 'protein',
        numeric: true,
        disablePadding: false,
        label: 'Protein (g)'
    }
];

interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

/**
 * Table head section of user list
 * @param {EnhancedTableProps} props
 * @returns {JSX.Element}
 * @constructor
 */
const EnhancedTableHead = (props: EnhancedTableProps) => {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;

    // eslint-disable-next-line require-jsdoc
    const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead className={styles.table_header}>
            <TableRow>
                <TableCell width="5%">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts'
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align="left"
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                        width="auto"
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
                <TableCell width="5%"></TableCell>
            </TableRow>
        </TableHead>
    );
};

/**
 * User list component
 * @returns {JSX.Element}
 * @constructor
 */
const UserList = (): JSX.Element => {
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<keyof Data>('calories');
    const [selected, setSelected] = useState<readonly string[]>([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [filterName, setFilterName] = useState('');

    // eslint-disable-next-line valid-jsdoc
    /**
     * Handle the table sorting
     * @param {React.MouseEvent<unknown>} event
     * @param {keyof Data} property
     */
    const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    /**
     * Handle the select all click
     * @param {ChangeEvent<HTMLInputElement>} event
     */
    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.name);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    /**
     * Handle the click
     * @param {React.MouseEvent<unknown>} event
     * @param {string} name
     */
    const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected: readonly string[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }

        setSelected(newSelected);
    };

    /**
     * Handle the table pagination button
     * @param {unknown} event
     * @param {number} newPage
     * @returns void
     */
    const handleChangePage = (event: unknown, newPage: number): void => setPage(newPage);

    /**
     * Handle the table pagination button
     * @param {React.ChangeEvent<HTMLInputElement>} event
     */
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    /**
     * Handle the checkbox of the table rows
     * @param {string} name
     * @returns {boolean}
     */
    const isSelected = (name: string): boolean => selected.indexOf(name) !== -1;

    /**
     * Handle the name filter option in table
     * @param {any} event
     * @returns void
     */
    const handleFilterByName = (event: any): void => setFilterName(event.target.value);

    // Avoid a layout jump when reaching the last page-component with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h4">Product list</Typography>

                <Link href="/dashboard/product/create" passHref>
                    <Button
                        variant="contained"
                        size="medium"
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            gap: '10px',
                            fontSize: '1rem'
                        }}
                    >
                        Create product
                        <IconButton
                            sx={{
                                fontSize: '1.2rem',
                                color: 'inherit',
                                p: 0,
                                mt: -0.4
                            }}
                        >
                            <BsCartPlus />
                        </IconButton>
                    </Button>
                </Link>
            </Stack>

            <Card sx={{ px: 2, pt: 3 }}>
                <Box sx={{ width: '100%' }}>
                    <Paper sx={{ width: '100%', mb: 2 }}>
                        <TableToolbar
                            numSelected={selected.length}
                            filterName={filterName}
                            onFilterName={handleFilterByName}
                        />
                        <TableContainer>
                            <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size="medium">
                                <EnhancedTableHead
                                    numSelected={selected.length}
                                    order={order}
                                    orderBy={orderBy}
                                    onSelectAllClick={handleSelectAllClick}
                                    onRequestSort={handleRequestSort}
                                    rowCount={rows.length}
                                />
                                <TableBody>
                                    {stableSort(rows, getComparator(order, orderBy))
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row, index) => {
                                            const isItemSelected = isSelected(row.name);
                                            const labelId = `enhanced-table-checkbox-${index}`;

                                            return (
                                                <TableRow
                                                    hover
                                                    role="checkbox"
                                                    aria-checked={isItemSelected}
                                                    tabIndex={-1}
                                                    key={row.name}
                                                    selected={isItemSelected}
                                                >
                                                    <TableCell width="5%">
                                                        <Checkbox
                                                            onClick={(event) => handleClick(event, row.name)}
                                                            color="primary"
                                                            checked={isItemSelected}
                                                            inputProps={{
                                                                'aria-labelledby': labelId
                                                            }}
                                                        />
                                                    </TableCell>
                                                    <TableCell
                                                        component="th"
                                                        id={labelId}
                                                        scope="row"
                                                        padding="none"
                                                        align="left"
                                                    >
                                                        <Stack
                                                            direction="row"
                                                            alignItems="center"
                                                            spacing={2}
                                                            sx={{
                                                                width: '100%'
                                                            }}
                                                        >
                                                            <Avatar>
                                                                <Image
                                                                    src="/static/mock-images/avatars/avatar_1.jpg"
                                                                    alt={row.name}
                                                                    layout="fill"
                                                                ></Image>
                                                            </Avatar>
                                                            <Link
                                                                href="/dashboard/product/unique-product"
                                                                passHref
                                                            >
                                                                <Typography
                                                                    variant="subtitle2"
                                                                    noWrap
                                                                    sx={{ cursor: 'pointer' }}
                                                                >
                                                                    <MuiLink>{row.name}</MuiLink>
                                                                </Typography>
                                                            </Link>
                                                        </Stack>
                                                    </TableCell>
                                                    <TableCell align="left">{row.calories}</TableCell>
                                                    <TableCell align="left">{row.fat}</TableCell>
                                                    <TableCell align="left">{row.carbs}</TableCell>
                                                    <TableCell align="left">{row.protein}</TableCell>
                                                    <TableCell align="left" width="5%">
                                                        <IconButton>
                                                            <BsTrash />
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })}
                                    {emptyRows > 0 && (
                                        <TableRow
                                            style={{
                                                height: 53 * emptyRows
                                            }}
                                        >
                                            <TableCell colSpan={6} />
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </Box>
            </Card>
        </>
    );
};
export default UserList;
