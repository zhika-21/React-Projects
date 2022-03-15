import {useContext} from "react"
import {TrackerContext} from "../context/GeneralContext"
import{List as LitExpenses,ListItem,Divider,Grid,Button} from "@mui/material"
import { v4 as uuidv4 } from 'uuid';
import {Delete} from "@material-ui/icons"
function List (){
    const {transactions} = useContext(TrackerContext)
    return(
  
        <ListExpenses>
            <ListItem>
                <Grid container spacing={2}>
                <Grid item xs={4}><Button><Delete></Delete></Button></Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}></Grid>
                </Grid>
            </ListItem>
        </ListExpenses>

        

    )
}
export default List
