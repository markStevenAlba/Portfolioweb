export const authHeader = () => {
    const accessToken = localStorage.getItem('idToken');
    if (accessToken) {
      return { Authorization: accessToken };
    } else {
      return {};
    }
  }
