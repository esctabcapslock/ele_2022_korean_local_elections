
const jj = temp0
const jj_arr = [...jj.querySelectorAll('tr')]
// tmp = jj.querySelectorAll('tr')[4]

out = ''
for (let cnt in jj_arr){
if (cnt==0) continue
tmp = jj_arr[cnt]

const [선거구, 관할구역] = [tmp.childNodes[0], tmp.childNodes[1]]
const [name, 선거구명] = 선거구.innerText.split('\n')
const 명 = 관할구역.childNodes[0].childNodes[0].textContent.replaceAll(' 일부','일부')
const 관할구역명 = namu_name_to_dongname(명)
const 비례의원수 = 8
console.log(cnt,명,관할구역, '관할구역명',관할구역명)
// return {시군구명, 비례의원수, 광역의원선거구명, 기초의원선거구명, 기초의원선출수, 담당동}
for (let 담당동 of 관할구역명){
    let data =  {시군구명:관할구역명, 비례의원수, 광역의원선거구명:선거구명, 기초의원선거구명:'None', 기초의원선출수:'None', 담당동};

    ((data)=>{
        const {시군구명, 비례의원수, 광역의원선거구명, 기초의원선거구명, 기초의원선출수, 담당동} = data;
        out += `${담당동}, ${비례의원수}, 제주?, 제주특별자치시-${광역의원선거구명}, None, None\n`
    })(data);
}
}