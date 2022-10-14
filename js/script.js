let adding = document.querySelectorAll(".portfolio .portfolio-items figure i")
let productName = document.querySelectorAll(".portfolio .portfolio-items figure figcaption h3")
let content = document.querySelector("#content")
let productsPrice = document.querySelectorAll(".portfolio .portfolio-items figure")
let bill=document.querySelector(".box")
let boxPrice = document.querySelector(".total-price")
let price =0
let total = 0
    
    adding.forEach(function (item,item2) {
        item.onclick = function () {
            productsPrice.forEach(function (item) {
                item.onclick = function () {
                    price=item.getAttribute("price")
                    total+= parseInt(price)
                    boxPrice.innerHTML=`$${total}`
                    content.innerHTML +=    `<div style="display:flex; justify-content: space-between;border-top: 1px solid #eee; padding:10px">
                                                    ${productName[item2].textContent} 
                                                    <div>${price}</div>
                                            </div>`
                    if (total > 900) {
                        boxPrice.innerHTML=`<del>${total} </del> <h6>>></h6> $${total*90/100}`
                    }
                }
            })
                                    bill.style.opacity="1"
    }
    
    })
content.style.lineHeight = "1.8"
