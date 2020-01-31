import * as React from "react";
import { MemberVm } from "../../member.vm";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  container: {
    maxHeight: '40vh',
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  centered: {
    display: 'flex',
    justifyContent: 'center'
  },
  clickable: {
    cursor: 'pointer'
  }
}));

interface Props {
  onClickUserProfile: (userId: number) => void;
  organization: string;
  members: MemberVm[]
}

export const MembersTableComponent = (props: Props) => {
  const classes = useStyles({});
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (
    <>
      <Card className={classes.root}>
        <CardHeader title={`Members of ${props.organization}`}></CardHeader>
        <CardContent>
          <Paper>
            <TableContainer className={classes.container}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Avatar</TableCell>
                    <TableCell align="left">Github Id</TableCell>
                    <TableCell align="left">Github username</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.members.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
                    <TableRow key={row.id} onClick={() => props.onClickUserProfile(row.id)} className={classes.clickable}>
                      <TableCell scope="row" className={classes.centered}>
                        <Avatar src={row.avatar_url} className={classes.avatar}></Avatar>
                      </TableCell>
                      <TableCell align="left">{row.id}</TableCell>
                      <TableCell align="left">{row.login}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10]}
              component="div"
              count={props.members.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>

        </CardContent>
      </Card>
    </>
  );
};
