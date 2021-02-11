/**
 * @author [D5haN]
 * @email [dulangah2@gmail.com]
 * @create date 2021-02-10 15:29:08
 * @modify date 2021-02-10 15:29:17
 * @desc [Response Service]
 */
/**
 * Get Error Code From Exception
 * @param err Exception
 */
export const GetErrorCode = (err) => {
  if (err.message) return parseInt(err.message.split(":").slice(-1)[0]) || 500;
  return 500;
};

/**
 * Get Error Message From Exception
 * @param err Exception
 */
export const GetErrorMessage = (err) => {
  if (!err.message) return null;
  const err_msg_split = err.message.split(":");
  return err_msg_split.length > 1
    ? err_msg_split.slice(0, -1).join(":")
    : err.message;
};

/**
 * Payload Response
 * @param message Message
 * @param Payload Response Data Payload
 */
export const PayloadResponse = (message, payload = {}) => {
  return {
    payload,
    message: message,
    success: true,
  };
};

/**
 * Exception Response
 * @param err Exception
 */
export const Exception = (err) => {
  const err_message = GetErrorMessage(err);
  return {
    message: err_message,
    success: false,
  };
};
