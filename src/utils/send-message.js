export const sendMessage = (res, status, msg) => {
  return res.status(status).json({ message: msg });
};

// export default sendMessage;
