const tokenConfig = (getState) => {
  const token = getState().auth.token;

  const config = {
    headers: {
      Content_type: "application/json",
    },
  };

  if (token) {
    config.headers["token"] = token;
  }

  return config;
};

export default tokenConfig;
