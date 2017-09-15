import { createParamDecorator, Action } from 'routing-controllers';

export function UserFromSession( options: { required?: boolean }) {
  return createParamDecorator({
    required: ( options && options.required ) || false,
    value: async ( action: Action ) => {
      console.log('i am injecting...') 
      await sleep( 2000 );
      return { name: 'hzp' };
    }
  })
}

function sleep( time ) {
  return new Promise(( ok ,noOK ) => {
    setTimeout(( ) => {
      ok( );
    }, time );
  })
}