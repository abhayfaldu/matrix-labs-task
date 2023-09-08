import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../Styles/TokenAddress.module.css";

const url =
	"https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8";

const TokenAddress = () => {
	const [data, setData] = useState([]);

	const getData = async () => {
		try {
			const response = await axios(url);
			setData(response.data.pairs);
		} catch (error) {
			throw new Error(error);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	console.log("data:", data);

	return (
		<div className={styles.tokenAddress__section}>
			{data?.slice(0, 10)?.map((ele) => (
				<div key={ele.baseToken.address} className={styles.tokenAddress__row}>
					<div className={styles.baseInfoCard__box}>
						<p>Base Info</p>
						<div>
							<p>Pair Created at</p>
							<p>{ele.chainId}</p>
						</div>
						<div>
							<p>Symbol</p>
							<p>{ele.baseToken.symbol}</p>
						</div>
						<div>
							<p>Dex ID</p>
							<p>{ele.dexId}</p>
						</div>
						<div>
							<p>Pair Address</p>
							<p className={styles.short}>{ele.pairAddress}</p>
						</div>
					</div>
					<div className={styles.baseTokenCard__box}>
						<p>Base Token</p>
						<div>
							<p>Name</p>
							<p>{ele.baseToken.name}</p>
						</div>
						<div>
							<p>Symbol</p>
							<p>{ele.baseToken.symbol}</p>
						</div>
						<div>
							<p>Address</p>
							<p className={styles.short}>{ele.baseToken.address}</p>
						</div>
					</div>
					<div className={styles.quoteTokenCard__box}>
						<p>Quote Token</p>
						<div>
							<p>Name</p>
							<p>{ele.quoteToken.name}</p>
						</div>
						<div>
							<p>Symbol</p>
							<p>{ele.quoteToken.symbol}</p>
						</div>
						<div>
							<p>Address</p>
							<p className={styles.short}>{ele.quoteToken.address}</p>
						</div>
					</div>
					<div className={styles.priceCard__box}>
						<p>Price</p>
						<div>
							<p>Price Native</p>
							<p>{ele.priceNative}</p>
						</div>
						<div>
							<p>Price USD</p>
							<p>{ele.priceUsd}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default TokenAddress;
