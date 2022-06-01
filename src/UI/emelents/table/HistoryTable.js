import * as React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import {TableFooter, TableHead} from "@mui/material";
import {Skeleton} from "@mui/lab";

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};


export default function HistoryTable({rows, loading}) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const styleCellNormalHead = {
        color: '#fff' ,backgroundColor: '#181818', fontWeight:'bold', fontFamily: 'Tahoma', height: '30px', borderBottom: 0
    }

    const styleCellNormal = {
        color: '#fff', borderColor: 'rgb(72,71,71)'
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 5));
        setPage(0);
    };

    const handlesearch= ()=>{
        return (rowsPerPage > 0
                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : rows
        )
    }

    if(loading){
        return (
            <Skeleton variant="rectangular"  sx={{ bgcolor: '#1a1a1a', marginTop: '50px' }}
                      width={'100%'} height={'20vh'} />
        )
    }else {
        return (
            <div style={{width: '100%', marginTop: '20px'}}>
                    <TableContainer component={Paper} sx={{borderRadius: '20px', width: '100%', border: 0, backgroundColor: '#222'}}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center" style={styleCellNormalHead}>Дата ставки</TableCell>
                                    <TableCell align="center" style={styleCellNormalHead}>Монета</TableCell>
                                    <TableCell align="center" style={styleCellNormalHead}>Ціна під час ставки</TableCell>
                                    <TableCell align="center" style={styleCellNormalHead}>Результат</TableCell>
                                    <TableCell align="center" style={styleCellNormalHead}>Ставка</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {handlesearch().map((row, idx) => (
                                    <TableRow key={idx} hover>
                                        <TableCell style={styleCellNormal} align="center">
                                            {new Date(row.date).toLocaleString()}
                                        </TableCell>
                                        <TableCell align="center" style={styleCellNormal}>
                                            {row.currency}
                                        </TableCell>
                                        <TableCell align="center" style={styleCellNormal}>
                                            ${row.rate}
                                        </TableCell>
                                        <TableCell align="center" style={styleCellNormal}>
                                            {row.result ? 'Виграш': "Проіграш"}
                                        </TableCell>
                                        <TableCell align="center" style={styleCellNormal}>
                                            {row.score}
                                        </TableCell>
                                    </TableRow>
                                ))}

                                {emptyRows > 0 && (
                                    <TableRow style={{height: 53 * emptyRows}}>
                                        <TableCell colSpan={6}/>
                                    </TableRow>
                                )}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TablePagination style={{color: "white", borderBottom: 0}}
                                                     rowsPerPageOptions={[]}
                                                     colSpan={3}
                                                     count={rows.length}
                                                     rowsPerPage={rowsPerPage}
                                                     page={page}
                                                     SelectProps={{
                                                         inputProps: {
                                                             'aria-label': 'rows per page',
                                                         },
                                                         native: true,
                                                     }}
                                                     onPageChange={handleChangePage}
                                                     onRowsPerPageChange={handleChangeRowsPerPage}
                                                     ActionsComponent={TablePaginationActions}
                                    />
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </TableContainer>
            </div>
        );
    }
}
