async function sendData(fromId,toId,amount) {
  const response = await fetch('http://localhost:9000/transfer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fromId: fromId,
      toId: toId,
      amount:amount,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

 const result= await response.json()
 console.log(result)
}

sendData(2,1,100)