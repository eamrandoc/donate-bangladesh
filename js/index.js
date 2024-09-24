// const mainBalance = document.getElementById('main-balance').innerText;
// const noakhaliBalance = document.getElementById('noakhali-balance').innerText;
// const noakhaliFund = document.getElementById('noakhali-fund').value;
// const feniBalance = document.getElementById('feni-balance').innerText;
// const feniFund = document.getElementById('feni-fund').value;
// const quotaBalance = document.getElementById('quota-balance').innerText;
// const quotaFund = document.getElementById('quota-fund').value;
// console.table({mainBalance, noakhaliBalance,noakhaliFund,feniBalance,feniFund,quotaBalance,quotaFund});
// 1st row 
document.getElementById('noakhali-donate').addEventListener('click', function () {
    const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
    const noakhaliBalance = parseFloat(document.getElementById('noakhali-balance').innerText);
    const noakhaliFund = parseFloat(document.getElementById('noakhali-fund').value);
    const addBalance = noakhaliBalance + noakhaliFund ;
    document.getElementById('noakhali-balance').innerText = addBalance.toFixed(2) ;
    const remainBalance = mainBalance - noakhaliFund;
    document.getElementById('main-balance').innerText = remainBalance.toFixed(2);
    
    
    const historyContainer = document.createElement('div');
    historyContainer.className= 'border border-solid border-borderbg rounded-2xl p-8';
    historyContainer.innerHTML = `
    <p class="text-xl font-bold text-primaryText">${noakhaliFund.toFixed(2)} Taka is Donated for ${document.getElementById('noakhali-title').innerText}</p>
        <p class="font-light text-primaryText text-opacity-70"> Date: ${new Date()}</p>    
    `
    const historyList= document.getElementById('history-list');
    historyList.insertBefore(historyContainer , historyList.firstChild);


   

})

// 2nd row 
document.getElementById('feni-donate').addEventListener('click', function () {
    const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
    const feniBalance = parseFloat(document.getElementById('feni-balance').innerText);
    const feniFund = parseFloat(document.getElementById('feni-fund').value);
    const addBalance = feniBalance + feniFund ;
    document.getElementById('feni-balance').innerText = addBalance.toFixed(2) ;
    const remainBalance = mainBalance - feniFund;
    document.getElementById('main-balance').innerText = remainBalance.toFixed(2);

    const historyContainer = document.createElement('div');
    historyContainer.className= 'border border-solid border-borderbg rounded-2xl p-8';
    historyContainer.innerHTML = `
    <p class="text-xl font-bold text-primaryText">${feniFund.toFixed(2)} Taka is Donated for ${document.getElementById('feni-title').innerText}</p>
        <p class="font-light text-primaryText text-opacity-70"> Date: ${new Date()}</p>
    `
    const historyList= document.getElementById('history-list');
    historyList.insertBefore(historyContainer , historyList.firstChild);
})

// 3rd row 
document.getElementById('quota-donate').addEventListener('click', function () {
    const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
    const quotaBalance = parseFloat(document.getElementById('quota-balance').innerText);
    const quotaFund = parseFloat(document.getElementById('quota-fund').value);
    const addBalance = quotaBalance + quotaFund ;
    document.getElementById('quota-balance').innerText = addBalance.toFixed(2) ;
    const remainBalance = mainBalance - quotaFund;
    document.getElementById('main-balance').innerText = remainBalance.toFixed(2);

    const historyContainer = document.createElement('div');
    historyContainer.className= 'border border-solid border-borderbg rounded-2xl p-8';
    historyContainer.innerHTML = `
    <p class="text-xl font-bold text-primaryText">${quotaFund.toFixed(2)} Taka is Donated for ${document.getElementById('quota-title').innerText}</p>
        <p class="font-light text-primaryText text-opacity-70"> Date: ${new Date()}</p>    
    `
    const historyList= document.getElementById('history-list');
    historyList.insertBefore(historyContainer , historyList.firstChild);
   
})

// toggle event 
// historyTab
const historyTab= document.getElementById('history-tab')
historyTab.addEventListener('click' , function () {
    historyTab.classList.add('bg-primaryBtn');
    historyTab.classList.remove('text-opacity-70',  'border', 'border-solid',  'border-borderbg');
    donateTab.classList.remove('bg-primaryBtn');
    donateTab.classList.add('text-opacity-70',  'border', 'border-solid',  'border-borderbg');



    document.getElementById('donate-container').classList.add('hidden');
    document.getElementById('history-container').classList.remove('hidden');


    
})
// donateTab
const donateTab = document.getElementById('donate-tab')
donateTab.addEventListener('click' , function () {
    donateTab.classList.remove('text-opacity-70', 'border', 'border-solid',  'border-borderbg')
    donateTab.classList.add('bg-primaryBtn');
    historyTab.classList.add('text-opacity-70',  'border', 'border-solid',  'border-borderbg')
    historyTab.classList.remove('bg-primaryBtn');
   

    document.getElementById('donate-container').classList.remove('hidden');
    document.getElementById('history-container').classList.add('hidden');
    
});


             