import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: 'NodeJS',
    duration: 10,
    educator: 'Marcello',
  });

  CreateCourseService.execute({
    name: 'ReactJS',
    educator: 'Diego',
  });

  return response.send();
}
