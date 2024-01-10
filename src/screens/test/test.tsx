import React from "react";
import { Card, Container,Table,Modal,ModalAction} from "../../components";
import messages from "../../messages";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../../utils';
import { usePagination ,usePopupReducer} from "../../hooks";
import { MetaData ,getDefaultMetaData ,PaginatedEntity} from "../../models";
import { Grid, Typography, Button } from "@mui/material";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import { TESTLISTING } from "../../redux/actions";
import { TESTLISTINGAPI } from "../../api";
//Add Imports Here



            const paginatedtest: PaginatedEntity = {
                key: 'test',
                name: TESTLISTING,
                api: TESTLISTINGAPI,
            };
  

            const getDefaultTestFilter = (): MetaData<any> => ({
                ...getDefaultMetaData<any>(),
            });

        
  // Add paginated api metadata



const Test = () => {
    
     

        const {
        entity: test,
         updateFilters,
         applyFilters,
         resetFilters,
         connectFilter,
         fetchPage,
         updateLimit,
       } = usePagination<any>(paginatedtest, getDefaultTestFilter());
        
    //Add Paginated Api Here
       

    //Add Hooks Here
    const reduxDispatch = useDispatch();

    return (
        <Container
            heading={messages?.dashboard?.heading}
        >
            <Card 
            header={
                <Grid
                        container
                        alignItems={'center'}
                        justifyContent={'space-between'}
                    >
                        <Grid item>
                            <Typography variant='h3'>
                                {"test"}
                            </Typography>
                        </Grid>
                        <Grid item>
                            {/* Add Button Here */}
                        </Grid>
                    </Grid>
              } >
            <Table
            specs={[{
    id: 'tet',
    label: 'tet',
},]}
            data={[
              ]}
            metadata={{
                order: '',
                direction: 'asc',
                total: 100,
                page: 1,
                limit: 100,
                filters: {},
                allowedFilters: [''],
              }}
              actions={[,  
                //Add icons here
            ]}
fetchPage={fetchPage}
updateLimit={updateLimit}
            //Add Table Parameters
          />

        </Card>

    
        </Container>
    )
}

export default Test;
