import { RequireBodyParams } from "../configurations";
import { ISendEmailReqBody, IValidStatus } from "../Interfaces";

/**
 * @description Checking incoming parameters for a POST request
 * @param {ISendEmailReqBody} data
 * @return {IValidStatus}
 */
const requestBodyValidation = (data: ISendEmailReqBody) => {
  let valid: IValidStatus = {
    status: true,
  };

  let coincidence = 0;
  const verificationCount = RequireBodyParams.length;

  for (const key in data) {
    RequireBodyParams.map((item) => {
      if (key === item) {
        coincidence++;
      }
    });

    // if value is empty
    if (String(data[key]).trim() === "") {
      valid = {
        status: false,
        message: `Parameters \"${key}\" cannot be empty`,
      };
    }
  }

  // if not enough parameters
  if (coincidence !== verificationCount) {
    valid = {
      status: false,
      message: "Missing require parameters",
    };
  }

  return valid;
};

export { requestBodyValidation };
