import * as React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {TableBody} from "@mui/material";
import ComplainedData from "./ComplainedData";

type Props = {
    searchedName:string
}

const ComplainedInfo:React.FC<Props> = React.memo(({searchedName}) => {

    return (

        <>
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                    <TableHead sx = {{marginBottom:"20px"}}>
                        <TableRow>
                            <TableCell align="left">Подали жалобу</TableCell>
                            <TableCell align="left">Категория</TableCell>
                            <TableCell align="left">Коменттарий</TableCell>
                            <TableCell align="right">Статус жалобы</TableCell>
                            <TableCell align="right">Сначала новые</TableCell>
                            {/*<TableCell align="right">*/}
                            {/*    <Grid container alignContent="end" sx={{border:'1px solid red', marginLeft:'200px',width:'100px'}} width="200px">*/}
                            {/*        <Grid>Сначала новые</Grid>*/}
                            {/*        <Grid><ExpandMoreOutlinedIcon/></Grid>*/}
                            {/*    </Grid>*/}
                            {/*</TableCell>*/}

                            {/*<TableCell align="right"><Box>Сначала новые <ExpandMoreOutlinedIcon/></Box> </TableCell>*/}
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{marginBottom:'20px'}}>
                        <ComplainedData searchedName={searchedName}/>
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    );
});

export default ComplainedInfo;