const navTab = document.getElementById('nav-tab')
const menuList = document.getElementById('menu-list')
const buyModal = document.getElementById('buy-modal')
const buyForm = document.getElementById('buy-form')
const modalText = document.getElementById('modal-txt')
let isSecondStep = false;

document.getElementById('menu-icon').addEventListener('click', () => {
    navTab.classList.remove('hidden')
    menuList.classList.add('menu-open')
})

document.getElementById('close-tab').addEventListener('click', () => {
    navTab.classList.add('hidden')
    menuList.classList.remove('menu-open')
})

document.addEventListener('click', e => {
    if(e.target.dataset.playguard) {
        buyModal.style.display = 'flex'
    }
    else if(e.target.id === 'back-btn') {
        buyModal.style.display = 'none'
    }
})

//When clicking submit it leads to the 2. step of the purchase
buyForm.addEventListener('submit', e => {
    e.preventDefault()
    if (!isSecondStep) {
        purchaseSecondStep()
        isSecondStep = !isSecondStep
    } else {
        buyForm.innerHTML = ''
        modalText.textContent = '3. You did it!'
    }
    
})

function purchaseSecondStep() {
    modalText.textContent = '2. We are almost there.'
    buyForm.innerHTML = `
        <label for="card-owner">Card Owner</label>
        <input type="text" id="card-owner" name="cardOwner" placeholder="Adam Smith" required/>
        <label for="card-number">Card Number</label>
        <input type="number" id="card-number" name="cardNumber" placeholder="1234 1234 1234 1234" required/>
        <label for="expiring-date">Card Expiring Date</label>
        <input type="month" id="expiring-date" name="expiringDate" placeholder="05/2029" required/>
        <label for="cvv">CVV</label>
        <input type="number" id="cvv" name="cvv" placeholder="123" maxlength="3" required/>
        <button class="solid-btn">Buy</button> 
    `
}