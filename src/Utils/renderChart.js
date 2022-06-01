async function renderChart(ctx, data, currency, labels) {
  let dataRates = []
  const socket = new WebSocket(`wss://stream.binance.com:9443/ws/${currency}usdt@trade`);
  socket.addEventListener('message', function (event) {
    let socketJson = JSON.parse(event.data);
    if (socketJson.p) {
      dataRates.push(socketJson.p);
      if (dataRates.length > 1000) {
        dataRates.shift();
      }
    }
  })
  setInterval(()=>{
    if (dataRates.length !== 0) {
      if(data.length >= 1000){
        data.shift()
        labels.shift()
        ctx.update('none');
      }
        data.push(dataRates[dataRates.length - 1])
        labels.push('')
        ctx.update('none')
    }
  }, 300)
}
export default renderChart
