import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
function BoxContent({player,clickFunction}) {
    if (player){
        return (
            <div style={{paddingTop:"6px",paddingBottom:"6px"}} className='col-4'>
                       <div  style={{width:"100%",height:"100%",padding:'auto',border:"2px solid black"}}>

            {(player==='1')?<CloseIcon style={{fontSize:"3rem",color:"red",marginTop:"10px",marginBottom:"10px"}}/>:(player==='2')?<RadioButtonUncheckedIcon style={{marginTop:"10px",marginBottom:"10px",color:"green",fontSize:"3rem"}}/>:null
    
            }
    </div>
            </div>
        )
    }
    else{
       return ( <div style={{paddingTop:"6px",paddingBottom:"6px"}} className='col-4'>
           <div  style={{width:"100%",height:"100%",padding:'auto',cursor:"pointer",border:"2px solid black"}} onClick={clickFunction}>
           <SportsEsportsIcon style={{fontSize:'3rem',color:"black",marginTop:"10px",marginBottom:"10px"}}/>
           </div>
       </div>)
    }
  
}

export default BoxContent
