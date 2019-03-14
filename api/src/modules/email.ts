import * as parser from 'body-parser';
import { URL } from 'url';

import { Response, NextFunction, Router, Request } from 'express';

import { MailService } from '../services/mail.service';
import { config } from '../config';

export class EmailModule {

    public router: Router;

    constructor() {
        this.router = Router();
        this.registerRoutes();
    }

    public registerRoutes() {
        this.router.use(parser.urlencoded({ extended: true }));

        this.router.post('/', this.sendEmail.bind(this));
    }

    public async sendEmail(req: Request, res: Response, next: NextFunction) {
        const subject = 'Aicura Solutions - Mini Hack';
        let destinationEmail = [process.env.DESTINATION];

        if (req.body.email) {
            destinationEmail = [...destinationEmail, req.body.email];
        }

        const mailer = new MailService(subject, config.replyTo, destinationEmail);
        const content = { subject, data: req.body };

        try {
            await mailer.send('form', content);
        } catch (error) {
            console.log(error);
        }

        const path = req.body._redirect;

        const origin = req.headers.origin || req.headers.referer || '';
        const redirect = new URL(`${origin}/${path}/confirm.html`);

        res.redirect(redirect.toString());
    }
}

export default new EmailModule().router;
