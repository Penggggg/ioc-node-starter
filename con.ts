import { Container } from 'inversify';
import TYPES from './types';
import { UserCtrl } from './UserCtrl';
import { Util } from './emtities';
import { MyMiddleware } from './middlewares';

export const con = new Container( );

con.bind< Util >( Util ).toSelf( );
con.bind< UserCtrl >( UserCtrl ).toSelf( );
con.bind< MyMiddleware >( MyMiddleware ).toSelf( ); 
