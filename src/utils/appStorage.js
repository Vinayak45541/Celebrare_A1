// 24 hours TTL in miliseconds
const TTL = 24 * 60 * 60 * 1000;

export const setUserWithTTL = (key, value) => {

  const now = new Date().getTime();
  const item = {
    value,
    expiry: now + TTL,
  };

  localStorage.setItem(
    key,
    JSON.stringify(item)
  );
};



export const getUserWithTTL = (key) => {

  const itemStr = localStorage.getItem(key);
  if (!itemStr) return null;
  const item = JSON.parse(itemStr); 
  const now = new Date().getTime();

  if (now > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  
  return item.value;
};


export const removeUser = (key) => {
  localStorage.removeItem(key);
};