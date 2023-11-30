import React from 'react'
import './Game.css'
import { one, two, three, four, five, six } from './images.jsx'
import { useState } from 'react'

export const Game = () => {
   let image = {
      1: one,
      2: two,
      3: three,
      4: four,
      5: five,
      6: six
   }

   const [selectedNumber, setSN] = useState("");
   const [totalScore, settotalScore] = useState(0);


   //resets totalScore
   let resetTS = () => {
      settotalScore(0);
   }

   //sets select number : 
   const setSNfunc = (value) => {
      console.log(value);
      setSN(value);
   }

   //sets image corresponding to rolled dice and changes total score
   const diceGo = () => {
      if(selectedNumber===""){
         alert("Please select a number first !");
      }
      else{
         let rndInt = Math.floor(Math.random() * 6) + 1;
      setDiceNo(image[rndInt]);
      if (selectedNumber === rndInt) {
         settotalScore(totalScore + selectedNumber)
      }
      else {
         settotalScore(totalScore - 2);
      }
      //sets selected number to 0 when once rolled
      setSN("");
      
      }


   }
   const [diceNo, setDiceNo] = useState(image[1]);

   const [showRules,setShowRules] = useState(false)
   const rulesList=()=>{
      setShowRules(!showRules);
   }



   return (

      <>
         <div className="main">

            <div className="topSection">
               <div className="tright">
                  <h1 id="score">{totalScore}</h1>
                  <h2 id="tscore">Total Score</h2>
               </div>
               <div className="tleft">
                  <div className="buttons" >
                     <button className="diceButton" id='1' onClick={() => setSNfunc(1)}><p className='dicebn' >1</p></button>
                     <button className="diceButton" id='2' onClick={() => setSNfunc(2)}><p className='dicebn' >2</p></button>
                     <button className="diceButton" id='3' onClick={() => setSNfunc(3)}><p className='dicebn' >3</p></button>
                     <button className="diceButton" id='4' onClick={() => setSNfunc(4)}><p className='dicebn' >4</p></button>
                     <button className="diceButton" id='5' onClick={() => setSNfunc(5)}><p className='dicebn' >5</p></button>
                     <button className="diceButton" id='6' onClick={() => setSNfunc(6)}><p className='dicebn' >6</p></button>
                  </div>
                  <div id='SelectNumber'>
                     <h4 >Select Number : {selectedNumber}</h4>
                  </div>

               </div>
            </div>

            <div className="bottomSection">

               <div className="diceImage" onClick={diceGo}>
                  <img src={diceNo} className="diceImage" alt="" />
               </div>
               <div >
                  <h3 id='clickImage'>Click on dice to roll</h3>
               </div>

               <div >
                  <button className="reset" onClick={resetTS}>Reset</button>
               </div>
               <div >
                  <button className="rules" onClick={rulesList}>Rules</button>
               </div>
            </div>
               {showRules? <div className="rulesCont">
                  <h4 id='howtoplay'>How to play dice game ?</h4>
                  <div className="rulesSec">
                    <p className='ruleslist'>Select any number</p>
                    <p className='ruleslist'>Click on dice image</p>
                    <p className='ruleslist'>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
                    <p className='ruleslist'>if you get wrong guess then  2 point will be dedcuted </p>
                  </div>
               </div> : ""}

         </div>


      </>
   )
}
