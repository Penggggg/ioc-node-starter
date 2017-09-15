import 'reflect-metadata';
import { Context } from 'koa';
import { inject, injectable } from 'inversify';
import { Util } from './emtities';
import TYPES from './types';
import { MyMiddleware } from './middlewares';
import * as request from 'superagent';
import { JsonController, Controller, Param, Body, CookieParams, Location, Redirect, HttpCode, 
  Header, NotFoundError, UseBefore, Authorized, 
  Get, Post, Put, Delete, Ctx, QueryParam, BodyParam, HeaderParams } from 'routing-controllers';
import { UserFromSession } from './decorator';

class User {
  name: string
  sex: string 
}

@UseBefore(MyMiddleware)
@JsonController('/users')
@injectable( )
export class UserCtrl {

  private util: Util;

  public constructor( @inject( Util ) util: Util ) {
    this.util = util;
  }
  
  @Get('/')
  @Authorized( )
  async getAll( ) {
    await sleep( 1000 );
    return "hahah"
  }

  @Get('/:id')
  async getOne( @Param("id") id: number, @QueryParam("name",{ required: true }) name: string ) {
    // await request.get('localhost:4000');
    // throw new NotFoundError('没找到');
    console.log( name )
    this.util.sayHello( );
    return `This action returns user @${id} `
  }

  @Post('/')
  async post( @Body({ validate: true }) user: User, @BodyParam('name') name: string ) {
    console.log( name );
    console.log( user );
    return 'Saving user... '
  }

  @Put('/:id')
  async put( @Param("id") id: number, @Body( ) user: any ) {
    return `Updating a user...${id} `
  }

  @Delete('/:id')
  async remove( @Param("id") id: number, @Ctx( ) ctx: Context, @UserFromSession({ }) user ) {
    // console.log( ctx.hzp )
    console.log( user );
    return `Removing user `
  }

}

function sleep( time ) {
  return new Promise(( ok ,noOK ) => {
    setTimeout(( ) => {
      console.log('ok')
      ok( );
    }, time );
  })
}