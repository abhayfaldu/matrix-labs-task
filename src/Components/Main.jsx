import React, {useState, useEffect} from 'react'

const Main = () => {
  const [data, setData] = useState([])
  console.log(data)

  const getData = async () => {
    try {
      // Use the fetch API to make an asynchronous HTTP request
      const res= await fetch('https://api.dexscreener.com/latest/dex/tokens/:tokenAddreses');
      const body = await res.json()
      console.log(body)

      /* if (!response.ok) { */
      /*   throw new Error('Network response was not ok'); */
      /* } */
      /**/
      /* // Parse the response JSON */
      /* const result = await response.json(); */
      /**/
      /* // Update the state with the fetched data */
      /* setData(result); */
      /* setIsLoading(false); */
    } catch (error) {
      /* setError(error); */
      /* setIsLoading(false); */
    }
  };

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>Main</div>
  )
}

export default Main
