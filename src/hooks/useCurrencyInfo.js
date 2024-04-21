import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
	const [currencyData, setCurrencyData] = useState({});

	useEffect(() => {
		fetch(`https://v6.exchangerate-api.com/v6/7080586ec1cf1458f6b04220/latest/${currency}`)
			.then((res) => res.json())
			.then((res) => setCurrencyData(res.conversion_rates))	//obtaining the conversion rates only from the json

		// alternate link - https://api.exchangerate-api.com/v4/latest/${currency} 	data -> res[rates]
	}, [currency])
	console.log(currencyData);
	return currencyData;	// returns the Object containing all the exchange rates wrt 'currency' parameter from the API
}

export default useCurrencyInfo;