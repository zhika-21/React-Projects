import {GetDerivedStateFromError, FormControl,InputLabel,TextField,Select} from '@mui/material'

function  Form  ()  {
    const {formData,setForData,dispacher} =useContext(TrackerContext)
  return (
 <Grid container spacing={2}>
     <Grid item xs={6}>
         <FormControl fullWidth>
             <InputLabel>Type</InputLabel>
             <Select value={formData.type} onChange={(e)=> setFormData(prev({...prev,type:e.target.value}))}>
                 <MenuItem value="Income">Income</MenuItem>
                 <MenuItem value="Expence">Expence</MenuItem>
             </Select>
         </FormControl>
     </Grid>
     <Grid item xs={6}>
         <FormControl>
             <InputLabel>Amount</InputLabel>
             <TextField type="number"/>
           
         </FormControl>
     </Grid>
     <Grid item xs={12}/>
     <Button onClick={()=>dispatcher({type:"addTransaction",payload:formData})}>Add Expense</Button>
     

 </Grid>
  )
}

export default Form