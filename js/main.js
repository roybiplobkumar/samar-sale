let total = 0;
function cardBox(target) {
  const productName = target.childNodes[3].childNodes[3].childNodes[0].innerText;
  const productPrizeStr =
    target.childNodes[3].childNodes[3].childNodes[2].innerText.split(" ")[0];
  const productPrizeNum = parseFloat(productPrizeStr);
  const totalPrize = document.getElementById("total-prize");
  total += productPrizeNum;
  totalPrize.innerText = total;

  const productList = document.getElementById("product-list");

  const li = document.createElement("p");
  const counter = productList.childElementCount;
  li.innerHTML = `<b>${counter + 1}. ${productName}</b>`;

  productList.appendChild(li);

  totalPrize.innerHTML = `${total.toFixed(2)} <b>Tk</b>`;

  // **********************
  const makePurchaseBtn = document.getElementById("make-purchase");
  const totalPrizeValue = parseFloat(totalPrize.innerText);

  if (totalPrizeValue > 1) {
    makePurchaseBtn.removeAttribute("disabled");
  }
  const applyBtn = document.getElementById("apply-btn");
  const discount = document.getElementById("discount");
  const discountPrize = totalPrizeValue * (20 / 100);
  const totalTK = document.getElementById("total");
  const totalTkPay = totalPrizeValue - discountPrize;
  const InputFiled = document.getElementById("coupon-code").value;

  if (totalPrizeValue > 200) {
    applyBtn.removeAttribute("disabled");

    if (totalPrizeValue > 200) {
      applyBtn.removeAttribute("disabled");

      
    }
   
  }

  return totalPrizeValue;
 
}

const applyBin=document.getElementById("apply-btn");
applyBin.addEventListener('click',function(){
  const discount = document.getElementById("discount");
  const totalTK = document.getElementById("total");
  const InputFiled = document.getElementById("coupon-code").value;
  const InputFiled1 = document.getElementById("coupon-code").value='';
  
        const discountPrize = total * (20 / 100);

        if (InputFiled === "SELL200") {
          discount.innerText = discountPrize.toFixed(2);
          totalTK.innerText = (total - discountPrize).toFixed(2);
        } else {
          alert("Please input the correct value");
        }
})

function goHome() {
  window.location.href = "index.html";
}




function he(){
  return 5;

}

console.log(cardBox())