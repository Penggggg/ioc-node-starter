import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import TYPES from './types';

@injectable( )
export class Util {

  sayHello = ( ) => console.log('hello')

}