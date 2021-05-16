import React,{useState,useEffect} from 'react'
import BoxContent from './BoxContent'
import MyModel from './MyModel';

function Home2() {
    const [click,setClick]=useState(1);
    const [open,setopen]=useState(false);

    const [message,setmessage]=useState('')
    const [playerdata, setplayerData] = useState({box1:{player:null},box2:{player:null},box3:{player:null},box4:{player:null},box5:{player:null},box6:{player:null},box7:{player:null},box8:{player:null},box9:{player:null}})
    const result=()=>{
        if (playerdata.box1.player && playerdata.box2.player===playerdata.box1.player && playerdata.box3.player===playerdata.box1.player ){
            setmessage('tada player '+playerdata.box1.player+' is winner');setopen(true);
        }
        else  if (playerdata.box4.player && playerdata.box5.player===playerdata.box4.player && playerdata.box6.player===playerdata.box4.player ){
            setmessage('tada player '+playerdata.box4.player+' is winner');setopen(true);

        }
        else  if (playerdata.box7.player && playerdata.box7.player===playerdata.box8.player  && playerdata.box9.player===playerdata.box7.player){
            setmessage('tada player '+playerdata.box7.player+' is winner');setopen(true);

        }
        else  if (playerdata.box1.player && playerdata.box5.player===playerdata.box1.player && playerdata.box9.player===playerdata.box1.player ){
            setmessage('tada player '+playerdata.box1.player+' is winner');setopen(true);

        }
        else  if (playerdata.box3.player && playerdata.box5.player===playerdata.box3.player && playerdata.box7.player===playerdata.box3.player ){
            setmessage('tada player '+playerdata.box3.player+' is winner');setopen(true);

        }
        else  if (playerdata.box1.player && playerdata.box4.player===playerdata.box1.player && playerdata.box7.player===playerdata.box1.player ){
            setmessage('tada player '+playerdata.box1.player+' is winner');setopen(true);

        }
        else  if (playerdata.box2.player && playerdata.box5.player===playerdata.box2.player && playerdata.box8.player===playerdata.box2.player ){
            setmessage('tada player '+playerdata.box2.player+' is winner');setopen(true);

        }
        else if (playerdata.box3.player && playerdata.box6.player===playerdata.box3.player && playerdata.box9.player===playerdata.box3.player ){
            setmessage('tada player '+playerdata.box3.player+' is winner');setopen(true);

        }
        else{
            console.log('waiting');
        }
    }
const playAgain=()=>{
    setplayerData({box1:{player:''},box2:{player:''},box3:{player:''},box4:{player:''},box5:{player:''},box6:{player:''},box7:{player:''},box8:{player:''},box9:{player:''}});
    setplayerData({box1:{player:null},box2:{player:null},box3:{player:null},box4:{player:null},box5:{player:null},box6:{player:null},box7:{player:null},box8:{player:null},box9:{player:null}});
    setopen(false)
    setClick(1)
}
  const clickresp=(valb)=>{

    if (click%2===0){
        if(valb==='box1'){
            setplayerData((prevalue)=>{
                return{
                    ...prevalue,
                    box1:{player:'2'}
                }
                }
                );
        }
        else if(valb==='box2'){
            setplayerData((prevalue)=>{
                return{
                    ...prevalue,
                    box2:{player:'2'}
                }
                }
                );
        }
        else if(valb==='box3'){
            setplayerData((prevalue)=>{
                return{
                    ...prevalue,
                    box3:{player:'2'}
                }
                }
                );
        }
        else if(valb==='box4'){
            setplayerData((prevalue)=>{
                return{
                    ...prevalue,
                    box4:{player:'2'}
                }
                }
                );
        }
        else if(valb==='box5'){
            setplayerData((prevalue)=>{
                return{
                    ...prevalue,
                    box5:{player:'2'}
                }
                }
                );
        }
        else if(valb==='box6'){
            setplayerData((prevalue)=>{
                return{
                    ...prevalue,
                    box6:{player:'2'}
                }
                }
                );
        }
        else if(valb==='box7'){
            setplayerData((prevalue)=>{
                return{
                    ...prevalue,
                    box7:{player:'2'}
                }
                }
                );
        }
        else if(valb==='box8'){
            setplayerData((prevalue)=>{
                return{
                    ...prevalue,
                    box8:{player:'2'}
                }
                }
                );
        }
        else if(valb==='box9'){
            setplayerData((prevalue)=>{
                return{
                    ...prevalue,
                    box9:{player:'2'}
                }
                }
                );
        }
        else{
console.log(null)
        }
    }
    else{
        if(valb==='box1'){
            setplayerData((prevalue)=>{
                return{
                    ...prevalue,
                    box1:{player:'1'}
                }
                }
                );
        }
        else if(valb==='box2'){
            setplayerData((prevalue)=>{
                return{
                    ...prevalue,
                    box2:{player:'1'}
                }
                }
                );
        }
        else if(valb==='box3'){
            setplayerData((prevalue)=>{
                return{
                    ...prevalue,
                    box3:{player:'1'}
                }
                }
                );
        }
        else if(valb==='box4'){
            setplayerData((prevalue)=>{
                return{
                    ...prevalue,
                    box4:{player:'1'}
                }
                }
                );
        }
        else if(valb==='box5'){
            setplayerData((prevalue)=>{
                return{
                    ...prevalue,
                    box5:{player:'1'}
                }
                }
                );
        }
        else if(valb==='box6'){
            setplayerData((prevalue)=>{
                return{
                    ...prevalue,
                    box6:{player:'1'}
                }
                }
                );
        }
        else if(valb==='box7'){
            setplayerData((prevalue)=>{
                return{
                    ...prevalue,
                    box7:{player:'1'}
                }
                }
                );
        }
        else if(valb==='box8'){
            setplayerData((prevalue)=>{
                return{
                    ...prevalue,
                    box8:{player:'1'}
                }
                }
                );
        }
        else if(valb==='box9'){
            setplayerData((prevalue)=>{
                return{
                    ...prevalue,
                    box9:{player:'1'}
                }
                }
                );
        }
        else{
console.log(null)
        }
       
    }
    
    setClick(click+1)

  }
   useEffect(() => {
      result() 
   })
    return (<>
        <div className="app-header">
            <p className="heading-text">React Tic Toc Toe</p>
            <div className="row justify-content-center">
            <div  className="col-10 mx-auto">
            <div className="row">
            <div className="row first_row">
                <BoxContent  player={playerdata.box1.player} clickFunction={()=>{
                    clickresp('box1')
                }}/>
            <BoxContent player={playerdata.box2.player} clickFunction={()=>{
                    clickresp('box2')
                }}/>

           
            <BoxContent player={playerdata.box3.player} clickFunction={()=>{
                    clickresp('box3')
                }}/>


            </div>
            <div className="row second_row">
            <BoxContent player={playerdata.box4.player} clickFunction={()=>{
                    clickresp('box4')
                }}/>

            <BoxContent player={playerdata.box5.player} clickFunction={()=>{
                    clickresp('box5')
                }}/>

            <BoxContent player={playerdata.box6.player} clickFunction={()=>{
                    clickresp('box6')
                }}/>


            </div>
            <div className="row third_row">
            <BoxContent player={playerdata.box7.player} clickFunction={()=>{
                    clickresp('box7')
                }}/>

 
            <BoxContent player={playerdata.box8.player} clickFunction={()=>{
                    clickresp('box8')
                }}/>

            <BoxContent player={playerdata.box9.player} clickFunction={()=>{
                    clickresp('box9')
                }}/>


            </div>
            </div>
            

            </div>
                        </div><br/><br/>
                        <button onClick={playAgain} className="btn btn-outline-light">Reset Game</button>
        </div>
        <MyModel openModel={open} closeModel={()=>{setopen(false)}}><><div className="app-header2">
            <p className="heading-text">{message}</p>
            <br/>
            <button onClick={playAgain} className="btn btn-outline-danger">Play Again</button></div></>
        </MyModel>
        </>
    )
}

export default Home2
