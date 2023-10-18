export default {};
export async function getMessage(token){
  try {
    const ret = await fetch("http://10.200.155.156:5001", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const obj = await ret.json();
    return obj;
  } catch (error) {
    throw error;
  }
}

export async function login(username, password){
  try {
    const ret = await fetch("http://10.200.155.156:5001/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify({username, password})
    });
    const obj = await ret.json();
    return obj;
  } catch (error) {
    throw error;
  }
}