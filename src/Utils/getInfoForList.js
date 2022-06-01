import axios from "axios";

const getInfoForList = async (count = 100 ,result) => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${count}&page=1&sparkline=true&price_change_percentage=1h`)
        .then(res => {
            res.data.map((cur) => {
                result.push({
                    'id': cur.id,
                    'name': cur.name,
                    'symbol': cur.symbol,
                    'price': cur.current_price,
                    'img': cur.image,
                    'total_volume': cur.total_volume,
                    'price_change_percentage_1h_in_currency': cur.price_change_percentage_1h_in_currency,
                    'sparkline_in_7d': cur.sparkline_in_7d
                })
            })
        })
}
export default getInfoForList
