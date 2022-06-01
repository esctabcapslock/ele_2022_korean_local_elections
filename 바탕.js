k = [...temp1.querySelectorAll('table')]
const 도명 = k.filter(v=>v.textContent).filter(v=>v.textContent.startsWith('구·시·군'))

function namu_name_to_dongname(ex){
    const out = []
    let 구명 = null
    for (let name of ex.split(',')){
        name = name.trim()
        const dx = name.split(' ')
        if (dx.length == 1){
            // console.log(dx)
            const 동명 = name
            if (구명 !== null){
                out.push(`${구명} ${동명}`)
            }else{
                out.push(` ${동명}`)
                
            }
        }else if(dx.length == 2){
            구명 = dx[0]
            const 동명 = dx[1]
            out.push(`${구명} ${동명}`)
        }else{
            throw("error")
        }
    }
    return out
}
namu_name_to_dongname('장안구 정자1동, 정자2동, 정자3동')

function cal_name(cnt){
// cnt = 2
// console.log(`${namelist[cnt]}. ${namelist[]}`)
console.log('cnt',cnt)
const ex = namelist[cnt]
const 담당동 = namu_name_to_dongname(ex.textContent)
const 기초의원선거구 = ex.previousElementSibling

const [기초의원선거구명, 기초의원선출수] = [기초의원선거구.childNodes[0].childNodes[0].textContent, 기초의원선거구.childNodes[0].childNodes[1].textContent]
let 광역의원선거구 = 기초의원선거구.previousElementSibling

while (광역의원선거구 === null){
    광역의원선거구 = namelist[--cnt].previousElementSibling.previousElementSibling
}

const 광역의원선거구명 = 광역의원선거구.textContent
let 시군구 = 광역의원선거구.previousSibling
while (시군구 === null){
    while (null === namelist[--cnt].previousElementSibling.previousElementSibling){}
		시군구 = namelist[cnt].previousElementSibling.previousElementSibling.previousSibling
}

const [시군구명, 비례의원수] = [시군구.childNodes[0].childNodes[0].textContent, 시군구.childNodes[0].childNodes[1].textContent]

console.log({시군구명, 비례의원수, 광역의원선거구명, 기초의원선거구명, 기초의원선출수, 담당동})
return {시군구명, 비례의원수, 광역의원선거구명, 기초의원선거구명, 기초의원선출수, 담당동}
}

out = []

for (let t of 도명){
namelist = [...t.querySelectorAll('td:last-child')]
for(let i in namelist){
    if (i > 0){
        const {시군구명, 비례의원수, 광역의원선거구명, 기초의원선거구명, 기초의원선출수, 담당동} = cal_name(i);
        for(let 동 of 담당동){
            const temp = 시군구명+동
            out += `${temp}, ${비례의원수}, ${시군구명}, ${시군구명}-${광역의원선거구명}, ${시군구명}-${기초의원선거구명}, ${기초의원선출수}\n`

        }
    }   
}
}
