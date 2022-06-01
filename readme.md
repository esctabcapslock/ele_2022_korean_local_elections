# ele_2022_korean_local_elections
- 2022 전국 8대 동시지방선거 결과 분석 (광역/기초의원 중심) 

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />이 프로젝트는 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>라이센스로 제공됩니다.

- 잡다한 썰은 [만들면서.md](./만들면서.md) 참조
- [지방선거 판도학적으로 흥미로운 선거구 목록 정리한 파일](./%EC%A7%80%EB%B0%A9%EC%84%A0%EA%B1%B0%20%ED%8C%90%EB%8F%84%ED%95%99%EC%A0%81%EC%9C%BC%EB%A1%9C%20%ED%9D%A5%EB%AF%B8%EB%A1%9C%EC%9A%B4%20%EC%84%A0%EA%B1%B0%EA%B5%AC%20%EB%AA%A8%EC%9D%8C.md) 
- 지도만 만들고 데이터는 다중에 입힐 것임

### 출처
#### 선거구 자료
- 다음 두 자료를 교차검증 후, 보정해서 사용
- 통계청 [제8회 전국동시지방선거 선거구 및 의원정수 현황](https://www.nec.go.kr/site/lvt/ex/bbs/View.do?cbIdx=1514&bcIdx=183568&relCbIdx=1129), 대한민국 통계청, 2022.05.24
- [제8회 전국동시지방선거/선거구](https://namu.wiki/w/%EC%A0%9C8%ED%9A%8C%20%EC%A0%84%EA%B5%AD%EB%8F%99%EC%8B%9C%EC%A7%80%EB%B0%A9%EC%84%A0%EA%B1%B0/%EC%84%A0%EA%B1%B0%EA%B5%AC), 나무위키, 2022.01.26 확인
    - 다음 스크립트로 파싱 후, 선관위 자료와 대조
        - [바탕.js](./%EB%B0%94%ED%83%95.js)
        - [제주파싱.js](./%EC%A0%9C%EC%A3%BC%ED%8C%8C%EC%8B%B1.js)

#### 경계 자료
- 다음 네 자료를 이용, 부족한 경우 내가 수정함
    - 거창군 상동/원상동은 찍었음
    - [대한민국 행정동 경계파일 2022.04.01](https://github.com/vuski/admdongkor)
        - 내가 예전에 만든것 말고 이거 사용함
        - 내가 만든것보다 일부 경계 부정확
        - 약간 수정해서 사용
    - [대한민국 최신 행정구역(SHP) 2022.01 읍면동, 리](http://www.gisdeveloper.co.kr/?p=2332), gisdeveloper, 
        - 경계가 없는 경우 사용
    - [고운동 투표구 명칭 및 관할구역 공고](./%EA%B3%A0%EC%9A%B4%EB%8F%99%20%ED%88%AC%ED%91%9C%EA%B5%AC%20%EB%AA%85%EC%B9%AD%20%EB%B0%8F%20%EA%B4%80%ED%95%A0%EA%B5%AC%EC%97%AD%20%EA%B3%B5%EA%B3%A0.hwp), 세종시선거관리위원회, 2022.06.02 확인
    - [도담동 주요시설 소개](https://www.sejong.go.kr/dong/sub05_1206.do), 세종시청, 2022.06.02 확인
    - [제주특별자치도 리·통 및 반 설치 조례 별표](./(%EB%B3%84%ED%91%9C)(%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EB%A6%AC%C2%B7%ED%86%B5%20%EB%B0%8F%20%EB%B0%98%20%EC%84%A4%EC%B9%98%20%EC%A1%B0%EB%A1%80).hwp), 행정안전부, 2022.06.02 확인
