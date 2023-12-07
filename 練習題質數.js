//輸入要取質數的範圍
const input = document.getElementById("input")
//執行要開始猜的按鈕
const answer = document.getElementById("answer")
//計算總共有幾個數是質數
const count = document.getElementById("count")
//放入範圍內全部的質數
const inside = document.getElementById("inside")

let range = parseInt(input.value)
let num = []
answer.addEventListener('click',() => {
    num = []
		for (let i = 2 ; i < parseInt(input.value); i++) {
			isprime = true;
			for (let b = 2; b <= Math.sqrt(i) + 1; b++) {
				if (i % b == 0 && i != b) {
					isprime = false;
					break;
				}
				isprime = true;
			}
			if (isprime) {
				num.push(i);
			}
		}

		
		console.log(num);
        str= num.length
        console.log(str);
		b = num.join("，")

        inside.innerText = b
        count.innerText ="質數有"+ str + "個"
})
