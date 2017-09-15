import 'reflect-metadata';
import * as Koa from 'koa';
import * as path from 'path';
import * as KoaLog from 'koa-logs-full';
import { createKoaServer, useKoaServer, Action, useContainer } from 'routing-controllers';
import { UserCtrl } from './UserCtrl';
import { con } from './con';
import TYPES from './types';

const app = new Koa( );

app
  .use( test )
  .use( errHandler )
  .use( KoaLog( app, {
      logdir: path.join( __dirname, 'logs')
  }))

useContainer( con );

useKoaServer( app, {
  defaults: {
    paramOptions: {
      required: true
    }
  },
  authorizationChecker,
  routePrefix: '/api',
  controllers: [ UserCtrl ]
  // controllers: [ con.get< UserCtrl >( TYPES.UserCtrl ) ]
});
app.listen( 4000 );

console.log(`app is listening in 4000`)


async function test ( ctx, next ) {
  Object.assign( ctx, { hzp: 123 })
  await next( );
}

async function errHandler( ctx, next ){

  try {

    await next( );

  } catch ( e ) {

    console.log( e );
    // 自定义错误类型区分，如权限错误等
    return ctx.body = {
      msg: 'error'
    };
  }
};

async function authorizationChecker( action: Action, roles: string[]) {
  console.log('i am authorizationChecker')
  await sleep( 1000 );
  return true;
}

function sleep( time ) {
  return new Promise(( ok ,noOK ) => {
    setTimeout(( ) => {
      ok( );
    }, time );
  })
}