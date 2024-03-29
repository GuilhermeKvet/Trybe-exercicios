import { Router } from 'express';
import TransferController from '../Controllers/TransferController';

const routes = Router();

routes.post(
  '/transfer',
  (req, res, next) => new TransferController(req, res, next).create(),
);

routes.get(
  '/transfer',
  (req, res, next) => new TransferController(req, res, next).findAllTransfers(),
);

routes.get(
  '/transfer/:key',
  (req, res, next) => new TransferController(req, res, next).findTransferByKey(),
);

export default routes;