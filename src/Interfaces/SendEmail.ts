export interface IValidStatus {
  status: boolean;
  message?: string;
}

export interface ISendEmailReqBody {
  [key: string]: {
    emailTo?: string;
    subject?: string;
    name?: string;
    email?: string;
    message?: string;
    data?: any;
  };
}
