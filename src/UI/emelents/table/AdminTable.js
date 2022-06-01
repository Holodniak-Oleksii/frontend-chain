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
import {Button, InputAdornment, TableHead, TextField} from "@mui/material";
import {Skeleton} from "@mui/lab";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import {Backdrop, Fade, Modal, useMediaQuery} from "@mui/material";
import {useContext} from "react";
import {AuthContext} from "../../../context/AuthContext";
import Box from "@mui/material/Box";
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import axios from "axios";

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};


export default function AdminTable({rows, loading}) {
    const token = useContext(AuthContext)
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length -1) : 0;
    const [search, setSearch] = React.useState("");
    const [itemDel, setDel] = React.useState("");
    const [number, setNumber] = React.useState(0);
    const [iD, setID] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const styleCellNormalHead = {
        color: '#fff' ,backgroundColor: '#181818', fontWeight:'bold', fontFamily: 'Tahoma', height: '30px', borderBottom: 0
    }

    const styleCellNormal = {
        color: '#fff', borderColor: 'rgb(18,18,18)'
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 5));
        setPage(0);
    };

    const handlesearch= ()=>{
        let searchList = rows.filter( (person)=>
            person.name.toLowerCase().includes(search)
        )
        return (rowsPerPage > 0
                ? searchList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : searchList
        )
    }
    const deleteItem = (el) => {
        axios.post(`${process.env.REACT_APP_API}/api/auth/delete`, {'data': el},{
            headers:{
                'Authorization': `Bearer ${token.token}`
            }})
        rows.splice(rows.indexOf(el), 1);
        setDel(el)
    }
    const setPrice = (el) => {
        setNumber(el.score)
        setID(rows.indexOf(el))
    }

    if(loading){
        return (
            <Skeleton variant="rectangular"  sx={{ bgcolor: '#1a1a1a', marginTop: '50px' }}
                      width={'100%'} height={'20vh'} />
        )
    }else {
        return (
            <div style={{width: '100%'}}>
                <TextField variant="outlined"
                           className={'tb__field'}
                           sx={{
                               label: {color: 'white'},
                               input: {color: 'white', border: 'white'},
                               fieldset: {borderColor: '#464141'}
                           }}
                           onChange={(e) => setSearch(e.target.value)}
                           InputProps={{
                               startAdornment: (<InputAdornment position="start"><SearchIcon
                                   sx={{color: 'white'}}/></InputAdornment>),
                           }}
                />
                <SetPrice open={open} prices={number} id={iD} rows={rows} setPrice={setNumber} handleClose={handleClose}/>
                <TableContainer component={Paper} sx={{borderRadius: '20px', width: '100%', border: 0, backgroundColor: '#222'}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" style={styleCellNormalHead}>Id</TableCell>
                                <TableCell align="center" style={styleCellNormalHead}>Логін</TableCell>
                                <TableCell align="center" style={styleCellNormalHead}>Email</TableCell>
                                <TableCell align="center" style={styleCellNormalHead}>Рахунок</TableCell>
                                <TableCell align="center" style={styleCellNormalHead}/>
                                <TableCell align="center" style={styleCellNormalHead}/>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {handlesearch().map((row, idx) => (
                                row.role !== 'Admin'?
                                    <TableRow key={idx} hover>
                                        <TableCell style={styleCellNormal} align="center">
                                            {row._id}
                                        </TableCell>
                                        <TableCell align="center" style={styleCellNormal}>
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="center" style={styleCellNormal}>
                                            {row.email}
                                        </TableCell>
                                        <TableCell align="center" style={styleCellNormal}>
                                            ${row.score}
                                        </TableCell>
                                        <TableCell align="center" style={styleCellNormal}>
                                            <DeleteIcon style={{cursor: 'pointer'}} onClick={()=>{deleteItem(row)}
                                            } fontSize={'large'}/>
                                        </TableCell>
                                        <TableCell align="center" style={styleCellNormal}>
                                            <PriceChangeIcon style={{cursor: 'pointer'}} onClick={()=>{
                                                setPrice(row)
                                                handleOpen()
                                            }} fontSize={'large'}/>
                                        </TableCell>
                                    </TableRow>
                                :""
                            ))}

                            {emptyRows > 0 && (
                                <TableRow style={{height: 53 * emptyRows}}>
                                    <TableCell colSpan={6}/>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div className={'profile__footer'}>
                    <TablePagination style={{color: "white", borderBottom: 0}}
                                     rowsPerPageOptions={[]}
                                     colSpan={3}
                                     count={rows.length-1}
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
                </div>
            </div>
        );
    }
}
function SetPrice({handleClose, open, prices, setPrice, id, rows}){

    const token = useContext(AuthContext)

    const style = {
        width: '100%',
        label:{color: '#ed6c02'},
        input: { color: '#ed6c02', border: '#ed6c02' },
        fieldset: {borderColor: '#ed6c02'}
    };

    const matches500 = useMediaQuery('(min-width:500px)')

    const styles = {position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: matches500 === true ? 400 : 250, bgcolor: '#191919', borderRadius: '10px',
        boxShadow: 24, px: 4, pb: 4, pt: 5
    };
    const changePrice = () => {
      axios.post(`${process.env.REACT_APP_API}/api/auth/edit`, {'id': rows[id]._id, 'score': prices},{
         headers:{
          'Authorization': `Bearer ${token.token}`
      }})
      rows[id].score = prices
    }

    return(
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{timeout: 500,}}
            >
                <Fade in={open}>
                    <Box sx={styles}>

                        <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
                            <PriceCheckIcon sx={{color: '#ed6c02', mr: 1, my: 0.5 }} />
                            <TextField name="price" value={prices} onChange={(e)=>{
                                setPrice(e.target.value)
                            }} label="Рахунок" type={'number'} variant="standard" sx={style} color="warning"/>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
                            <Button variant="contained" onClick={()=>{
                                handleClose()
                                changePrice()
                            }} color="warning" sx={{px: 4, py: 1, fontSize: '16px'}}>
                                Змінити
                            </Button>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}

