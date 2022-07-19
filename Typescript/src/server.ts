/*
  yarn add typescript -D
  yarn tsc --init
  tsconfig.json -> "outDir": "./dist"
*/

import express from 'express';
import { createCourse } from './routes';

const app = express();

app.get('/', createCourse);

app.listen(3333);
