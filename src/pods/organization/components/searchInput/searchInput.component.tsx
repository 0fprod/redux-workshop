import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import styled from 'styled-components';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions'; 

interface Props {
    setOrganization: (name: string) => void;
    loadMembers: (organizationName: string) => void;
}

const Section = styled.section`
    width: 100%;
    margin: 2%;
`;

export const SearchInput = (props: Props) => {
    const { loadMembers, setOrganization } = props;
    const [organization, setLocalOrg] = React.useState('');

    return (
        <Section>
            <Card>
                <CardHeader title='Search an organization in github!'>
                </CardHeader>
                <CardContent>
                    <InputLabel>Organization name:</InputLabel>
                    <Input type='text' onChange={e => setLocalOrg(e.target.value)} />
                </CardContent>
                <CardActions>
                    <Button variant="contained"
                        color="primary"
                        onClick={e => { 
                            setOrganization(organization)
                            loadMembers(organization);
                         }}
                    > Search!</Button>
                </CardActions>
            </Card>

        </Section>
    )
}