import React from 'react'
import './SeasonDisplay.css'
const seasonConfig = {
    winter:{
        text:"Burr it is cold",
        iconName:"snowflake",
        iconColor:"blue"
    },
    summer:{
        text:"Let's hit the beach",
        iconName:"sun",
        iconColor:"yellow"
    }
}

const getSeason=(lat,month)=>{
    if(month>2 && month<9){
        return lat>0 ? 'summer' : 'winter'
    }else{
        return lat>0 ? 'winter' : 'summer'
    }
}
const SeasonDisplay = (props)=>{
    const season = getSeason(props.lat,new Date().getMonth());
    const {text,iconName,iconColor} = seasonConfig[season]
    return (
        <div  className={`text-center ${season}`}>
            <i className={`${iconName} ${iconColor} massive icon icon-left`}></i>
            <h1>{text}</h1>
            <i className={`${iconName} ${iconColor} massive icon icon-right`}></i>
        </div>
    )
}

export default SeasonDisplay;