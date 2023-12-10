import { useState } from 'react';
import styles from './table.module.css'
import check_list from '../3_1_check_list/page';
export default function Voiler(){
    var pmArr = [245384,245384,204204,230350,118276,1333,330736];
    var pdArr = [245384,245384,204204,230350,118276,1333,330888];
    var [today,setToday] = useState('0','0','0','0','0','0','0');
    return (
               // <form action="/3_1_check_list" method='post'>
        <table className={styles.table}>        
        <thead>
          <th className={styles.titles} colSpan="7">
          보일러, 냉온수기, 수도 사용량
          <input className={styles.submit} type='submit' value={'제출'} />
          
          </th>
        </thead>
        <tbody>
          <th colSpan="2">구분</th>
          <th>전월 지침</th>
          <th>전일 지침</th>
          <th>금일 지침</th>
          <th>사용량</th>
          <th>월누계</th>
        </tbody>
        <tr>
          <th rowSpan="2">보일러 1호</th>
          <td className={styles.td}>도시가스 사용량 <br />(m2) 22:00</td>
          <td>{pmArr[0].toLocaleString()}</td>
          <td>{pdArr[0].toLocaleString()}</td>
          <td className={styles.td}>
            <input 
                className={styles.input} 
                onChange={(e)=>{
                    var open = [...today]
                    open.splice(0,1,e.currentTarget.value)
                    setToday(open)
                }}
                type="number" 
                name="" 
                id="" 
                value={today[0]}
                placeholder='값을 입력해 주세요' 
            />
          </td>
          <td><input 
            className={styles.input}
            type="number" 
            name="" 
            id="" 
            readOnly
            value={today[0]-pdArr[0]}
            /></td>
          <td>
          <input 
            className={styles.input}
            type="number" 
            name="" 
            id="" 
            readOnly
            value={today[0]-pmArr[0]}
            />            
          </td>
        </tr>
        <tr>
        <td>가동시간<br />(청소년센터, min)</td>
        <td><input
            className={styles.displayNone}
            type="number" name="m0" id="" value={pmArr[1]}/>{pmArr[1].toLocaleString()}</td>
        <td><input
            className={styles.displayNone}
            type="number" name="d0" id="" value={pdArr[1]}/>{pdArr[1].toLocaleString()}</td>
          <td>
          <input 
                className={styles.input} 
                onChange={(e)=>{
                    var open = [...today]
                    open.splice(1,1,e.currentTarget.value)
                    setToday(open)
                }}
                type="number" 
                name="" 
                id="" 
                value={today[1]}
                placeholder='값을 입력해 주세요' 
            />
          </td>
          <td>
          <input 
            className={styles.input}
            type="number" 
            name="" 
            id="" 
            readOnly
            value={today[1]-pdArr[1]}
            />
          </td>
          <td>
          <input 
            className={styles.input}
            type="number" 
            name="" 
            id="" 
            readOnly
            value={today[1]-pmArr[1]}
            />
          </td>
        </tr>
        <tr>
          <th className="top_double" rowSpan="2">보일러 2호</th>
          <td className="top_double">도시가스 사용량 <br />(m2) 22:00</td>
          <td><input
            className={styles.displayNone}
            type="number" name="" id="" value={pmArr[2]}/>{pmArr[2].toLocaleString()}</td>
        <td><input
            className={styles.displayNone}
            type="number" name="" id="" value={pdArr[2]}/>{pdArr[2].toLocaleString()}</td>
          <td className="top_double">
          <input 
                className={styles.input} 
                onChange={(e)=>{
                    var open = [...today]
                    open.splice(2,1,e.currentTarget.value)
                    setToday(open)
                }}
                type="number" 
                name="" 
                id="" 
                value={today[2]}
                placeholder='값을 입력해 주세요' 
            />
          </td>
          <td className="top_double">
          <input 
            className={styles.input}
            type="number" 
            name="" 
            id="" 
            readOnly
            value={today[2]-pdArr[2]}
            />
          </td>
          <td className="top_double">
          <input 
            className={styles.input}
            type="number" 
            name="" 
            id="" 
            readOnly
            value={today[2]-pmArr[2]}
            />
          </td>
        </tr>
        <tr>
        <td>가동시간<br />(청소년센터, min)</td>
        <td><input
            className={styles.displayNone}
            type="number" name="" id="" value={pmArr[3]}/>{pmArr[3].toLocaleString()}</td>
        <td><input
            className={styles.displayNone}
            type="number" name="" id="" value={pdArr[3]}/>{pdArr[3].toLocaleString()}</td>
        <td>
        <input 
                className={styles.input} 
                onChange={(e)=>{
                    var open = [...today]
                    open.splice(3,1,e.currentTarget.value)
                    setToday(open)
                }}
                type="number" 
                name="" 
                id="" 
                value={today[3]}
                placeholder='값을 입력해 주세요' 
            />
        </td>
          <td>
          <input 
            className={styles.input}
            type="number" 
            name="" 
            id="" 
            readOnly
            value={today[3]-pdArr[3]}
            />
          </td>
          <td>
          <input 
            className={styles.input}
            type="number" 
            name="" 
            id="" 
            readOnly
            value={today[3]-pmArr[3]}
            />
          </td>
        </tr>
        <tr>
          <th className="top_double" rowSpan="2">냉온수기</th>
          <td className="top_double">가스직화식<br />냉온수기(m2)<br />22:00</td>
          <td><input
            className={styles.displayNone}
            type="number" name="" id="" value={pmArr[4]}/>{pmArr[4].toLocaleString()}</td>
        <td><input
            className={styles.displayNone}
            type="number" name="" id="" value={pdArr[4]}/>{pdArr[4].toLocaleString()}</td>
          <td className="top_double">
          <input 
                className={styles.input} 
                onChange={(e)=>{
                    var open = [...today]
                    open.splice(4,1,e.currentTarget.value)
                    setToday(open)
                }}
                type="number" 
                name="" 
                id="" 
                value={today[4]}
                placeholder='값을 입력해 주세요' 
            />
          </td>
          <td className="top_double">
          <input 
            className={styles.input}
            type="number" 
            name="" 
            id="" 
            readOnly
            value={today[4]-pdArr[4]}
            />
          </td>
          <td className="top_double">
          <input 
            className={styles.input}
            type="number" 
            name="" 
            id="" 
            readOnly
            value={today[4]-pmArr[4]}
            />
          </td>
        </tr>
        <tr>
        <td>가동시간(h)</td>
        <td><input
            className={styles.displayNone}
            type="number" name="" id="" value={pmArr[5]}/>{pmArr[5].toLocaleString()}</td>
        <td><input
            className={styles.displayNone}
            type="number" name="" id="" value={pdArr[5]}/>{pdArr[5].toLocaleString()}</td>
        <td>
        <input 
                className={styles.input} 
                onChange={(e)=>{
                    var open = [...today]
                    open.splice(5,1,e.currentTarget.value)
                    setToday(open)
                }}
                type="number" 
                name="" 
                id="" 
                value={today[5]}
                placeholder='값을 입력해 주세요' 
            />
        </td>
          <td>
          <input 
            className={styles.input}
            type="number" 
            name="" 
            id="" 
            readOnly
            value={today[5]-pdArr[5]}
            />
          </td>
          <td>
          <input 
            className={styles.input}
            type="number" 
            name="" 
            id="" 
            readOnly
            value={today[5]-pmArr[5]}
            />
          </td>
        </tr>
        <tr>
          <th className="top_double" colSpan="2">
            급수 유량계(일간/주간)<br />(m2) 09:00
          </th>
          <td><input
            className={styles.displayNone}
            type="number" name="" id="" value={pmArr[6]}/>{pmArr[6].toLocaleString()}</td>
        <td><input
            className={styles.displayNone}
            type="number" name="" id="" value={pdArr[6]}/>{pdArr[6].toLocaleString()}</td>
          <td className="top_double">
          <input 
                className={styles.input} 
                onChange={(e)=>{
                    var open = [...today]
                    open.splice(6,1,e.currentTarget.value)
                    setToday(open)
                }}
                type="number" 
                name="" 
                id="" 
                value={today[6]}
                placeholder='값을 입력해 주세요' 
            />
          </td>
          <td className="top_double">
          <input 
            className={styles.input}
            type="number" 
            name="" 
            id="" 
            readOnly
            value={today[6]-pdArr[6]}
            />
          </td>
          <td className="top_double">
          <input 
            className={styles.input}
            type="number" 
            name="" 
            id="" 
            readOnly
            value={today[6]-pmArr[6]}
            />
          </td>
        </tr>
      </table>  
        // </form>
    )
}