import { Route, required, validate } from '../Core';



@Route.Controller({ service: "qqai" })
export default class extends Route.BaseRoute {
    doAction(action: string, method: string) {
        switch (action) {
            case "faceMerge": return this.faceMerge;
            case 'faceCosmetic': return this.faceCosmetic;
            case "detectFace": return this.detectFace;
            default: return this.faceMerge;
        }



    }


    /**
     * 
     * @api {post}  /qqai.faceMerge  腾讯人工智能 人脸融合
     * @apiName 人脸融合
     * @apiVersion 0.0.1
     * @apiGroup qqai
     * 
     * @apiSuccessExample  Success_Response:
     *  HTTP/1.1 200 OK
     *  {
     *      "image":"data;base64...",
     *       "model":1
     *  }
     * 
     * 
     */
    async    faceMerge() {
        let { image, model } = this.ctx.request.body;

        var miniType = image.match(/\/.*;/)[0];
        console.log(miniType);

        image = image.replace(`data:image${miniType}base64,`, '');
        console.log("参数：", image, model);
        let data = await this.service.qqai.machineView.faceMerge(image, model);
        this.ctx.body = { ok: true, data: data.ret == 0 ? `data:image${miniType}base64,` + data.data.image : data.ret };
        //ss
    }


    async faceCosmetic( @required image: string, cosmetic: number) {
        this.ctx.body = await this.service.qqai.machineView.faceCosmetic(cosmetic, image);

    }
    async before() {
        await this.next();
    }
    after() { }

    async detectFace() {
        let { image, model } = this.ctx.request.body;

        var miniType = image.match(/\/.*;/)[0];
        console.log(miniType);

        image = image.replace(`data:image${miniType}base64,`, '');
        var data = await this.service.qqai.machineView.detectFace(image, model ? model : 1);
        this.ctx.body = { ok: true, data };

    }
} 