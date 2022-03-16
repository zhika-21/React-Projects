import {Box, Card, CardHeader, CardContent,Divider} from "@mui/material"
import Form from "./Form"
 function Tracker(){
     return(
         <Box>
             <Card>
                 <CardHeader title="Tracker" subheader="By me"/>
                 <Divider></Divider>
                 <CardContent>
                     this is content
                 </CardContent>
                 <Form />
             </Card>
             <Box>
             <List/>
              </Box>
         </Box>
     )
 }
 export default Tracker;