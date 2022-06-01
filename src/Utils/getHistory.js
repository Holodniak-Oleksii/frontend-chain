const getHistory = async (labels, dataRate, currency) => {
  let response = await fetch(`https://api.binance.com/api/v3/trades?symbol=${currency}USDT&limit=1000`, {method: 'GET', headers: {Accept: 'application/json'}});
  let commits = await response.json();

  for(let i = 0 ; i < commits.length; i++){
    dataRate.push(commits[i].price);
  }
  for(let i = 0; i < commits.length + 100; i++){
    labels[i] = '';
  }
}
export default getHistory
