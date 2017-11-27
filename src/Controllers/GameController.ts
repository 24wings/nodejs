import { Route, required, validate } from '../Core';



@Route.Controller({ service: "game" })
export default class extends Route.BaseRoute {
    doAction(action: string, method: string) {
        switch(action){
            case 'gfk':
            return this.gfk;
        }
    }

    gfk(username,password){

    }


    
    
    async before(){  
        await this.next();
    }
 
    async after(){

    }
}