import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import sessionController from './app/controllers/sessionController';

import authMiddleware from './app/middlewares/auth'

const routes = new Router();
const upload = multer(multerConfig)

routes.post('/users', UserController.store)
routes.post('/session', sessionController.store)

// rotas autenticadas
routes.use(authMiddleware)
routes.put('/users', authMiddleware, UserController.update)

// Upload de arquivos
routes.post('/files', upload.single('file'), ( res, req) => {
    return res.json({message: 'Tudo okay.'})
});

export default routes;