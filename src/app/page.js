import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className="main">
    <div className="title">
        <h1>시립마포청소년센터 일일 업무일지</h1>
        <table>
            <tr>
              <th>소장</th>
              <th>담당</th>
              <th>팀장</th>
            </tr>
            <tr>
              <td>김소장</td>
              <td>김담당</td>
              <td>김팀장</td>
            </tr>
        </table>
    </div> 
    {/* title */}
    <div className="date">
      <ul className="date_infor">
          <li>일시</li>
          <li>2023년</li>
          <li>12월</li>
          <li>05일</li>
          <li>화요일</li>
      </ul>
      <ul className="auth">
        <li>작성자 :</li>
        <li>김소장</li>
      </ul>
    </div>
    {/* date */}
    <div className="content">
      <div className="workers">
        <div className="titles">
          <h1>I.근무현황</h1>
        </div>
        {/* titles */}
        <table className="worker_infor">
          <tr>
              <th>직책</th>
              <th>근무자명</th>
              <th>담당업무</th>
              <th className="new_table">직책</th>
              <th>근무자명</th>
              <th>담당업무</th>
          </tr>
          <tr>
              <td className="role">시설기사</td>
              <td>김시설</td>
              <td>시설점검 등</td>
              <td className="new_table role">미화</td>
              <td>남미주</td>
              <td>미화관리(주간)</td>
          </tr>
          <tr>
              <td className="role">미화</td>
              <td>여미주</td>
              <td>미화관리(주간)</td>
              <td className="new_table role">미화</td>
              <td>남미야</td>
              <td>미화관리(야간)</td>
          </tr>
          <tr>
              <td className="role">미화</td>
              <td>여야미</td>
              <td>미화관리(주간)</td>
              <td className="new_table role">미화</td>
              <td>여샤워</td>
              <td>미화관리(샤워실)</td>
          </tr>
        </table>
      </div>
      {/* workers */}
      <div className="fac">
        <div className="titles">
          <h1>II.시설현황</h1>
        </div>
      {/* titles */}
      <div className="fac_infor">
        <table>
          <tr>
            <th colspan="7">보일러, 냉온수기, 수도 사용량</th>
          </tr>
          <tr>
            <th colspan="2">구분</th>
            <th>전월 지침</th>
            <th>전일 지침</th>
            <th>금일 지침</th>
            <th>사용량</th>
            <th>월누계</th>
          </tr>
          <tr>
            <th rowspan="2">보일러 1호</th>
            <td>도시가스 사용량 <br />(m2) 22:00</td>
            <td>245,384</td>
            <td>245,384</td>
            <td>245,384</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
          <td>가동시간<br />(청소년센터, min)</td>
            <td>245,384</td>
            <td>245,384</td>
            <td>245,384</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <th className="top_double" rowspan="2">보일러 2호</th>
            <td className="top_double">도시가스 사용량 <br />(m2) 22:00</td>
            <td className="top_double">204,204</td>
            <td className="top_double">204,204</td>
            <td className="top_double">204,204</td>
            <td className="top_double">0</td>
            <td className="top_double">0</td>
          </tr>
          <tr>
          <td>가동시간<br />(청소년센터, min)</td>
          <td>230,350</td>
          <td>230,350</td>
          <td>230,350</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <th className="top_double" rowspan="2">냉온수기</th>
            <td className="top_double">가스직화식<br />냉온수기(m2)<br />22:00</td>
            <td className="top_double">118,276</td>
            <td className="top_double">118,276</td>
            <td className="top_double">118,276</td>
            <td className="top_double">0</td>
            <td className="top_double">0</td>
          </tr>
          <tr>
          <td>가동시간(h)</td>
          <td>1,333</td>
          <td>1,333</td>
          <td>1,333</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <th className="top_double" colspan="2">
              급수 유량계(일간/주간)<br />(m2) 09:00
            </th>
            <td className="top_double">330,736</td>
            <td className="top_double">330,888</td>
            <td className="top_double">330,906</td>
            <td className="top_double">18</td>
            <td className="top_double">170</td>
          </tr>
        </table>
        {/* 보일러, 냉온수기 사용량 */}
        <table className="margin_top">
          <tr>
            <th colspan="9">공기열 히트펌프</th>
          </tr>
          <tr>
            <th rowspan="2">구분</th>
            <th rowspan="2">7월 지침</th>
            <th colspan="2">온수 온도(도씨)</th>
            <th rowspan="2">소비전류(A)</th>
            <th colspan="2">압축냉매온도(1/2) <br />(R-407C)</th>
            <th colspan="2">압축기 냉매압력(1/2)</th>
          </tr>
          <tr>
            <th>입구</th>
            <th>출구</th>
            <th>1-흡입/토출</th>
            <th>2-흡입/토출</th>
            <th>1-고압/저압</th>
            <th>2-고압/저압</th>
          </tr>
          <tr>
            <td>계량기1</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>계량기2</td>
            <td>437,138</td>
            <td>52</td>
            <td>48</td>
            <td></td>
            <td>29/30</td>
            <td>32/33</td>
            <td>2.0/0.8</td>
            <td>1.4/1.4</td>
          </tr>
          <tr>
            <th colspan="1" className="top_double">구분</th>
            <th colspan="2" className="top_double">전일</th>
            <th colspan="2" className="top_double">금일</th>
            <th colspan="2" className="top_double">회수량</th>
            <th colspan="2" className="top_double">월누계</th>
          </tr>
          <tr>
            <th>생산(Mw)</th>
            <td colspan="2"></td>
            <td colspan="2"></td>
            <td colspan="2"></td>
          </tr>
          <tr>
            <th>소비(Kw)</th>
            <td colspan="2">441,191</td>
            <td colspan="2">441,266</td>
            <td colspan="2">75</td>
            <td colspan="2">4,128</td>
          </tr>
        </table>
        {/* 공기열 히트펌프 */}
        <table className="margin_top">
          <tr>
            <th colspan="8">수영장: 25m*5레인(11.1m) 수량 385.9톤, 다층여과기(175m3/H)</th>
          </tr>
          <tr>
            <th rowspan="2">정류기 현황</th>
            <th colspan="2">VOLTAGE</th>
            <th colspan="2">AMPERE</th>
            <th colspan="2">TEMPERATURE</th>
            <th>비고</th>
          </tr>
          <tr>
            <td colspan="2">44.9V</td>
            <td colspan="2">21.9A</td>
            <td colspan="2">30.3도C</td>
            <td></td>
          </tr>
          <tr>
            <th rowspan="2" className="top_double">수질점검결과</th>
            <th rowspan="2" className="top_double">잔류염소 <br />(0.4~1.0)</th>
            <th rowspan="2" className="top_double">PH <br />(6.8~8.6)</th>
            <th rowspan="2" className="top_double">탁도</th>
            <th colspan="2" className="top_double">수온</th>
            <th rowspan="2" className="top_double">실내온도</th>
            <th rowspan="2" className="top_double">기타</th>
          </tr>
          <tr>
            <th>성인풀 <br />(28.5~29.5도c)</th>
            <th>유아풀 <br />(29.5~30.5도c)</th>
          </tr>
          <tr>
            <th>05:00</th>
            <td>-</td>
            <td>-</td>
            <td>양호</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td></td>
          </tr>
          <tr>
            <th>09:00</th>
            <td>0.24</td>
            <td>7.25</td>
            <td>양호</td>
            <td>29.1</td>
            <td>28.9</td>
            <td>29.7</td>
            <td></td>
          </tr>
          <tr>
            <th>13:00</th>
            <td>0.29</td>
            <td>7.33</td>
            <td>양호</td>
            <td>29.2</td>
            <td>28.9</td>
            <td>29.8</td>
            <td></td>
          </tr>
          <tr>
            <th>17:00</th>
            <td>0.29</td>
            <td>7.36</td>
            <td>양호</td>
            <td>29.2</td>
            <td>29.0</td>
            <td>29.7</td>
            <td></td>
          </tr>
          <tr>
            <th>21:00</th>
            <td>0.49</td>
            <td>7.39</td>
            <td>양호</td>
            <td>29.2</td>
            <td>29.0</td>
            <td>29.5</td>
            <td></td>
          </tr>
          <tr>
            <th className="top_double">약품재고현황</th>
            <th className="top_double">입고량</th>
            <th className="top_double">사용량</th>
            <th className="top_double">재고량</th>
            <th className="top_double" colspan="2">금월사용누계</th>
            <th className="top_double" colspan="2">비고</th>
          </tr>
          <tr>
            <th>소금(포)</th>
            <td>100/100</td>
            <td>1</td>
            <td>178</td>
            <td colspan="2">18</td>
            <td colspan="2">6.29, 7/7 입고</td>
          </tr>
          <tr>
            <th>응집제(개)</th>
            <td>10</td>
            <td>0</td>
            <td>23</td>
            <td colspan="2">3</td>
            <td colspan="2">8/10 입고</td>
          </tr>
          <tr>
            <th>PH조절제(통)</th>
            <td>20</td>
            <td>0</td>
            <td>29</td>
            <td colspan="2">2</td>
            <td colspan="2">8/9 입고</td>
          </tr>
          <tr>
          <th>아비타(말)</th>
            <td>50</td>
            <td>0</td>
            <td>51</td>
            <td colspan="2">9</td>
            <td colspan="2">8/9 입고</td>
          </tr>
        </table>
        {/* 수영장 */}
        <table className="margin_top">
          <tr>
            <th colspan="7">전기</th>
          </tr>
          <tr>
            <th rowspan="4">변압기 <br />(500Kw)</th>
            <th colspan="2">시간</th>
            <th colspan="2">온도(도c)</th>
            <th colspan="2">비고</th>
          </tr>
          <tr>
            <th colspan="2">09:00</th>
            <td colspan="2">38</td>
            <td colspan="2"></td>
          </tr>
          <tr>
            <th colspan="2">17:00</th>
            <td colspan="2">42</td>
            <td colspan="2"></td>
          </tr>
          <tr>
            <th colspan="2">22:00</th>
            <td colspan="2">41</td>
            <td colspan="2"></td>
          </tr>
          <tr>
            <th rowspan="5" className="top_double">센터 <br />(X200배)</th>
            <th className="top_double">구분</th>
            <th className="top_double">7월 지침</th>
            <th className="top_double">전일</th>
            <th className="top_double">금일</th>
            <th className="top_double">사용량</th>
            <th className="top_double">월누계</th>
          </tr>
          <tr>
            <th>중간13</th>
            <td>2,090.96</td>
            <td>2,169.44</td>
            <td>1,169.61</td>
            <td>34</td>
            <td>15,730</td>
          </tr>
          <tr>
            <th>최대14</th>
            <td>1,296.87</td>
            <td>1,344.54</td>
            <td>1,344.54</td>
            <td>0</td>
            <td>9,534</td>
          </tr>
          <tr>
            <th>경부하15</th>
            <td>1,420.95</td>
            <td>1,460.56</td>
            <td>1,465.37</td>
            <td>962</td>
            <td>8,884</td>
          </tr>
          <tr>
            <th colspan="4">합계</th>
            <td>996</td>
            <td>34,148</td>
          </tr>
          <tr>
            <th rowspan="5" className="top_double">센터정화조</th>
            <th className="top_double">구분</th>
            <th className="top_double">7월 지침</th>
            <th className="top_double">전일</th>
            <th className="top_double">금일</th>
            <th className="top_double">사용량</th>
            <th className="top_double">월누계</th>
          </tr>
          <tr>
            <th>중간13</th>
            <td>2,257</td>
            <td>2,266</td>
            <td>2,266</td>
            <td>0</td>
            <td>9</td>
          </tr>
          <tr>
            <th>최대14</th>
            <td>1,411</td>
            <td>1,419</td>
            <td>1,419</td>
            <td>0</td>
            <td>8</td>
          </tr>
          <tr>
            <th>경부하15</th>
            <td>1,464</td>
            <td>1,469</td>
            <td>1,469</td>
            <td>0</td>
            <td>5</td>
          </tr>
          <tr>
            <th colspan="4">합계</th>
            <td>0</td>
            <td>22</td>
          </tr>
        </table>
      </div>
      {/* fac_infor */}
      <div className="clean_up">
         <div className="titles">
            <h1>III.미화현황</h1>
          </div>
          <table>
            <tr>
              <th>층</th>
              <th>장소(업무)</th>
              <th>담당자</th>
              <th>점검자</th>
            </tr>
            <tr>
              <th rowspan="17">1층</th>
              <th>관장실</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>통합사무실</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>I will센터 사무실</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>I will센터 상담실</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>멀티미디어실</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>방카, 회실의 1,2,3</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>로비, 복도</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>콤마</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>키움나루</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>행복나루</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>사랑나루</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>창의나루</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>생각나루</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>상상나루</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>세미나실</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>안내데스크</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>화장실</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th rowspan="5">2층</th>
              <th>열린공연나루</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>청소년방송국</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>방송문화콘텐츠</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>로비 및 출입구</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>화장실</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th rowspan="3">3층</th>
              <th>체육관</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>복도</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>화장실</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th rowspan="7">외부</th>
              <th>출입문유리</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>주출입구</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>부출입구 계단</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>야외공연장</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>건물주변 청결유지</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>쓰레기 분리수거</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>비상계단</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th rowspan="11">B1</th>
              <th>생체 사무실</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>건강나루</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>피아노나루</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>소리나루</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>화장실</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>여자샤워장-계단</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>여자탈의실</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>수영장 홀</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>내부복도, 계단</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>로비 및 복도</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>출입문 유리</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th rowspan='4'>B2</th>
              <th>주차장</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>화장실</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>복도</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>탕비실</th>
              <td></td>
              <td></td>
            </tr>
          </table>
      </div>
      {/* clean_up */}
      </div>
      {/* fac */}
    </div>
    {/* content */}
    
</div> //main
  )
}
