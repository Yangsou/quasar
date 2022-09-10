import {init, send, EmailJSResponseStatus} from '@emailjs/browser';
import { config } from './config';

export type EmailParams = {
  email: string;
  name: string;
  message: string
}
export const emailJsApp = () => init(config.emailjsPublicKey as string);

export const emailJsAPI = {
  send: ({
    email, name, message
  }: EmailParams): Promise<EmailJSResponseStatus> => {
    return send(config.emailjsServiceId as string, config.emailjsTemplateId as string, {
      from_email: email, from_name: name, message
    }, config.emailjsPublicKey)
  }
}
