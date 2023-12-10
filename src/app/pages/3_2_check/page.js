'use client'

import { useRef } from "react";
import { useState } from "react";
import Voiler from "./voiler";
import Heater from "./heater";
import Pool from "./Pool";
import Elect from "./elect";
import Floor1 from "./floor1";
import Floor2 from "./floor2";
import Floor3 from "./floor3";
import Below1 from "./below1";
import Below2 from "./below2";
import Outside from "./outside";

export default function check(){
    var [result, setResult] = useState('ㅁ')
    var [print, setPrint] = useState()
    var list_name = useRef();
       
    return(
       <div className="main">
            <div className="title">
                <h1>시립마포청소년 센터 일일 점검표</h1>
                <label htmlFor="checkList"><h2>점검표선택</h2>
                    <select onChange={()=>{
                        setResult(list_name.current.value)
                    }} ref={list_name} name="check_item" id="items">
                        <option value="#">점검표를 선택하세요</option>
                        <option value="#">------------------------------------------</option>
                        <option value='Voiler'>보일러, 냉온수기, 수도 사용량</option>
                        <option value='Heater'>공기열 히트펌프</option>
                        <option value="Pool">수영장</option>
                        <option value="Elect">전기</option>
                        <option value="Floor1">미화 1층</option>
                        <option value="Floor2">미화 2층</option>
                        <option value="Floor3">미화 3층</option>
                        <option value="Below1">지하 1층</option>
                        <option value="Below2">지하 2층</option>
                        <option value="Outside">외각</option>
                    </select>
                </label>     
                <button onClick={()=>{
                    if(result=='Voiler'){
                        setPrint(<Voiler/>)
                    }else if(result=='Heater'){
                        setPrint(<Heater/>)
                    }else if(result=='Pool'){
                        setPrint(<Pool/>)
                    }else if(result=='Elect'){
                        setPrint(<Elect/>)
                    }else if(result=='Floor1'){
                        setPrint(<Floor1/>)
                    }else if(result=='Floor2'){
                        setPrint(<Floor2/>)
                    }else if(result=='Floor3'){
                        setPrint(<Floor3/>)
                    }else if(result=='Below1'){
                        setPrint(<Below1/>)
                    }else if(result=='Below2'){
                        setPrint(<Below2/>)
                    }else if(result=='Outside'){
                        setPrint(<Outside/>)
                    }
                   
                }}>확인</button>           
                {/* <button Voiler = {}></button> */}
            </div>
            {/* 타이틀 */}
            <div className="fac_infor">
             {print}
            </div>
       </div>
    //    메인
    )
}