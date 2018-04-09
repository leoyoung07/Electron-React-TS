import { Application } from 'spectron';
import getApp from './getapp';

let app: Application;

jest.setTimeout(30000);

afterEach(async () => {
  if (app && app.isRunning()) {
    return await app.stop();
  }
});
beforeEach(async () => {
  app = getApp();
  return await app.start();
});

test('application count', async () => {
  expect(await app.client.getWindowCount()).toBeGreaterThanOrEqual(1);
});
