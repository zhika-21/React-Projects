import {Box, Card, CardHeader, CardContent,Divider} from "@mui/material"
 function Tracker(){
     return(
         <Box>
             <Card>
                 <CardHeader title="Tracker" subheader="By me"/>
                 <Divider></Divider>
                 <CardContent>
                     this is content
                 </CardContent>
             </Card>
             <Box>
             <List/>
              </Box>
         </Box>
     )
 }
 export default Tracker;