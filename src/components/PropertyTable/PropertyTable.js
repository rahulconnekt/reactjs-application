import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from '@material-ui/core/IconButton'
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        borderRadius: 0
    },
});

function createData(ownerName, contact, ward, zone, streetId, status) {
    return { ownerName, contact, ward, zone, streetId, status };
}

const rows = [
    createData('Demo Property #1', 'Demo Address #123', 'Demo #4', 'Demo Zone', '#123456', 'MAPPED'),
    createData('Demo Property #1', 'Demo Address #123', 'Demo #4', 'Demo Zone', '#123456', 'UNMAPPED'),
    createData('Demo Property #1', 'Demo Address #123', 'Demo #4', 'Demo Zone', '#123456', 'FAILED'),
    createData('Demo Property #1', 'Demo Address #123', 'Demo #4', 'Demo Zone', '#123456', 'ABORTED'),
];

export default function SimpleTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead style={{ backgroundColor: '#F5F6FA' }}>
                    <TableRow>
                        <TableCell align="left" style={{ color: "#A3A6B4" }}>OWNER NAME</TableCell>
                        <TableCell align="left" style={{ color: "#A3A6B4" }}>CONTACT</TableCell>
                        <TableCell align="left" style={{ color: "#A3A6B4" }}>WARD</TableCell>
                        <TableCell align="left" style={{ color: "#A3A6B4" }}>ZONE</TableCell>
                        <TableCell align="left" style={{ color: "#A3A6B4" }}>STREET ID</TableCell>
                        <TableCell align="left" style={{ color: "#A3A6B4" }}>STATUS</TableCell>
                        <TableCell align="center"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell align="left">
                                <span style={{color:'#4D4F5C'}}>{row.ownerName}</span>
                            </TableCell>
                            <TableCell align="left"><span style={{color:'#4D4F5C'}}v>{row.contact}</span></TableCell>
                            <TableCell align="left"><span style={{color:'#4D4F5C'}}>{row.ward}</span></TableCell>
                            <TableCell align="left"><span style={{color:'#4D4F5C'}}>{row.zone}</span></TableCell>
                            <TableCell align="left"><span style={{color:'#4D4F5C'}}>{row.streetId}</span></TableCell>
                            <TableCell align='left' ><span style={{color:row.status == 'MAPPED' ? '#1cb10b' : row.status == 'UNMAPPED' ? '#707070' : row.status == 'ABORTED' ? '#1331F2' : '#F80808'}}>{row.status}</span></TableCell>
                            <TableCell align="justify" padding="checkbox">
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <IconButton>
                                        <VisibilityIcon
                                            style={{
                                                padding: "none",
                                                color: '3b86ff',
                                                cursor: "pointer",
                                            }}
                                        />
                                    </IconButton>
                                    <IconButton>
                                        <DeleteForeverIcon
                                            style={{
                                                padding: "none",
                                                cursor: "pointer",
                                            }}
                                        />
                                    </IconButton>
                                    <IconButton>
                                        <EditIcon
                                            style={{
                                                color: "#f2134f",
                                                cursor: "pointer",
                                            }}
                                        // onClick={toggleModal}
                                        />
                                    </IconButton>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
