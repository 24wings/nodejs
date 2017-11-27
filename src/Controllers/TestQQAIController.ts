import { Route, required, validate } from '../Core';



@Route.Controller({ service: "testQQAI" })
export default class extends Route.BaseRoute {
    doAction(action: string, method: string) {
        switch (action) {
            case "faceMerge": return this.testFaceMerge;
            //      case 'faceDetect':return this.faceDetect;
            case 'qqai/Cosmetic': return this.testFaceMerge;
            default: return this.testFaceMerge;
        }
    }
    async before() {
        await this.next();
    }
    display() {

    }
    async after() { }

    async testFaceMerge() {
        await this.display();
    }



}