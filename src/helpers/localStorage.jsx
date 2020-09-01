const LocalStorage = () => {

  const setToken = token => {
    localStorage.setItem(
      btoa(process.env.REACT_APP_CUSTOM_LOCALSTORAGE_KEY),
      JSON.stringify(token)
    );
  };

  const setRole = role => {
    localStorage.setItem(
      btoa(process.env.REACT_APP_CUSTOM_LOCALSTORAGE_ROLE),
      JSON.stringify(role)
    );
  };

  const getToken = () => {
    const token = localStorage.getItem(btoa(process.env.REACT_APP_CUSTOM_LOCALSTORAGE_KEY));
    if (token) {
      return JSON.parse(token);
    } else {
      return null;
    }
  };

  const getRole = () => {
    const token = localStorage.getItem(btoa(process.env.REACT_APP_CUSTOM_LOCALSTORAGE_ROLE));
    if (token) {
      return JSON.parse(token);
    } else {
      return null;
    }
  };

  const expiredToken = () => {
    const token = getToken();
    if (token) {
      const exp = token.exp;
      if (exp < Date.now() / 1000) {
        localStorage.clear();
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  };

  const clearToten = () => {
    localStorage.clear();
  };

  return {
    setToken,
    setRole,
    getToken,
    getRole,
    expiredToken,
    clearToten
  };
};

export default LocalStorage;
