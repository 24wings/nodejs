import { Route, required, validate } from '../Core';



@Route.Controller({ service: "gameClient" })
export default class extends Route.BaseRoute {
    doAction(action: string, method: string) {
        switch(action){
            case 'connect':
            return this.connect;
        }
    }
    async before(){
        await this.next();
    }
    async after(){}

    async connect(){
        let time = new Date().getTime();
        this.ctx.body={ok:true,data:time};
    }

}