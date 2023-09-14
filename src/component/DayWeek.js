import React,{useState} from 'react';

const DayWeek = () => {
  const choose=["choose","week","Month"]
  const weekDay=["Select","sunday","monday","tuesday","thursday","friday","saturday"]
  const months=["Select","January","February","March","April","May","Jun","July","August","September","October","November","December"]
  const [chooseValue,setChooseValue]=useState("week");
  const handleChange=(e)=>{
    setChooseValue(e.target.value)
  }
  const optionsToDisplay = chooseValue === 'week' ? weekDay : months;

  return (
    <div>
        <form>
        <label>Select an option: </label>
        <select onChange={handleChange}>
                {choose.map((value)=>{
                    return(
                        <option value={value}>{value}</option>
                    )
                    
                })}
                value={chooseValue}
                
            </select><br/>
            <label>Select a {chooseValue === 'week' ? 'day' : 'month'}: </label>
            <select>
               
                {optionsToDisplay.map((value)=>{
                    return(
                        <option value={value}>{value}</option>
                    )
                    
                })}
            </select>
        </form>

    </div>
  )
}

export default DayWeek