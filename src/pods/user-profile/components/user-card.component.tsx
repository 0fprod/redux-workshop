import * as React from "react";
import { Card, CardContent, Button, CardActions, Avatar, CardHeader, makeStyles, TextField, InputLabel } from "@material-ui/core";
import { UserProfileVm } from "../user-profile.vm";
import styled from "styled-components";
import { MockedUser } from "../mockedUserProfile";


interface Props {
    user: UserProfileVm,
    navigateTo: () => void;
}

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%'
    },
    avatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    }
}));

const CardContentStyles = styled.div`
    width:100%;
    display:flex;
    flex-direction: row;
    justify-content: start;
    flex-wrap: wrap;
    #DisplayField {
        margin: 5%;
    }
`;

const DisplayField = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: flex-start;
    margin: 1%;
    padding: 1em;
    background-color: aliceblue;
`;

export const UserCardComponent = (props: Props) => {
    const classes = useStyles({});

    const { user, navigateTo } = props;
    const keysOf: string[] = Object.keys(user);

    const capitalize = (word: string) => {
        let wordLowercase = word.toLocaleLowerCase();
        let wordUppercase = word.toLocaleUpperCase();

        return wordUppercase[0] + wordLowercase.substring(1);
    }

    return (
        <>
            <Card className={classes.root}>
                <CardHeader
                    title={user.login}
                    avatar={<Avatar src={user.avatar_url} className={classes.avatar}></Avatar>}
                    subheader={user.bio}
                />
                <CardContent>
                    <CardContentStyles>

                        {keysOf.map((key, index) =>
                            <DisplayField key={index + key}>
                                <InputLabel key={key + index}>{capitalize(key)}</InputLabel>
                                <span key={index}>{user[key]}</span>
                            </DisplayField>
                        )}

                    </CardContentStyles>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary" onClick={e => navigateTo()}>Back</Button>
                </CardActions>
            </Card>
        </>);
};
