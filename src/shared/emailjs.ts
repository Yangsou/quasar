import {init, send, EmailJSResponseStatus} from '@emailjs/browser';

export type EmailParams = {
  email: string;
  name: string;
  message: string
}
export const emailJsApp = () => init('Tk5A8YYNORzB4I5K8');

export const emailJsAPI = {
  send: ({
    email, name, message
  }: EmailParams): Promise<EmailJSResponseStatus> => {
    // emailJsApp();
    return send('service_imm5c5y', 'template_zp64xcr', {
      from_email: email, from_name: name, message
    }, 'Tk5A8YYNORzB4I5K8')
  }
}
