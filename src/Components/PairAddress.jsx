import axios from "axios";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../Styles/TokenAddress.module.css";
import Search from "./Search";

const PairAddress = () => {
	const [data, setData] = useState([]);
	const [query, setQuery] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [isFalseQuery, setIsFalseQuery] = useState(false);

	const url = `https://api.dexscreener.com/latest/dex/search?q=${query}`;

	const getData = async () => {
		try {
			setIsLoading(true);
			const response = await axios(url);
			setData(response?.data?.pairs);
			setIsLoading(false);
			setIsFalseQuery(false);
			setIsError(false);
		} catch (error) {
			setIsLoading(false);
			if (error.response.status === 400) {
				setIsFalseQuery(true);
				return;
			} else {
				setIsError(true);
				setIsFalseQuery(false);
			}
		}
	};

	return (
		<div>
			<Search query={query} onChange={(e) => setQuery(e.target.value)} />
			<button onClick={() => getData()}>search</button>

			<div className={styles.tokenAddress__data}>
				{isLoading ? (
					<p>Loading....</p>
				) : isError ? (
					<p>Something went wrong</p>
				) : isFalseQuery ? (
					<p>Please enter valid search query</p>
				) : !data?.length ? (
					<p>Please enter search query</p>
				) : (
					<>
						{data?.slice(0, 10)?.map((ele) => (
							<div key={uuidv4()} className={styles.tokenAddress__row}>
								<div className={styles.baseInfoCard__box}>
									<p>Base Info</p>
									<div>
										<p>Pair Created at</p>
										<p>{ele?.chainId}</p>
									</div>
									<div>
										<p>Symbol</p>
										<p>{ele?.baseToken?.symbol}</p>
									</div>
									<div>
										<p>Dex ID</p>
										<p>{ele?.dexId}</p>
									</div>
									<div>
										<p>Pair Address</p>
										<p className={styles.short}>{ele?.pairAddress}</p>
									</div>
								</div>
								<div className={styles.baseTokenCard__box}>
									<p>Base Token</p>
									<div>
										<p>Name</p>
										<p>{ele?.baseToken?.name}</p>
									</div>
									<div>
										<p>Symbol</p>
										<p>{ele?.baseToken?.symbol}</p>
									</div>
									<div>
										<p>Address</p>
										<p className={styles.short}>{ele?.baseToken?.address}</p>
									</div>
								</div>
								<div className={styles.quoteTokenCard__box}>
									<p>Quote Token</p>
									<div>
										<p>Name</p>
										<p>{ele?.quoteToken.name}</p>
									</div>
									<div>
										<p>Symbol</p>
										<p>{ele?.quoteToken.symbol}</p>
									</div>
									<div>
										<p>Address</p>
										<p className={styles.short}>{ele?.quoteToken.address}</p>
									</div>
								</div>
								<div className={styles.priceCard__box}>
									<p>Price</p>
									<div>
										<p>Price Native</p>
										<p>{ele?.priceNative}</p>
									</div>
									<div>
										<p>Price USD</p>
										<p>{ele?.priceUsd}</p>
									</div>
								</div>
							</div>
						))}
					</>
				)}
			</div>
		</div>
	);
};

export default PairAddress;
