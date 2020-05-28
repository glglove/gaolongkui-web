export function getProductCatList (catId, pageSize = 10, pageNum = 1) {
    debugger
    return new Promise((resolve, reject) => {
        switch(catId){
            case 'more':
                resolve(                         
                    {
                        state: 1,
                        total: 2,
                        data: [
                            {
                                id: 1,
                                str: 'productShow',
                                tagId: 'more',
                                picUrl: '../../../../static/left.png',
                                headTit: '单面喷锡金属铝基板',
                                headTime: '日期：18-08-23 21:22',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            单面喷锡金属铝基板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:22</span>&nbsp;点击：<span>256</span>
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="http://www.mfpcb.com/uploads/allimg/180823/180823/1-1PR3212249210.jpg" />
                                    </div>
                                    <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <strong>产品详细说明</strong>
                                    </div>
                                </p>
                                <p>
                                    <br />
                                </p>`
                                }
                            }, 
                            {
                                id: 2,
                                str: 'productShow',
                                tagId: 'more',
                                picUrl: '../../../../static/left.png',
                                headTit: '单面喷锡金属铝基板',
                                headTime: '日期：18-08-23 21:22',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            单面喷锡金属铝基板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:22</span>&nbsp;点击：<span>256</span>
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="http://www.mfpcb.com/uploads/allimg/180823/180823/1-1PR3212249210.jpg" />
                                    </div>
                                    <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <strong>产品详细说明</strong>
                                    </div>
                                </p>
                                <p>
                                    <br />
                                </p>`
                                }
                            },  
                        ]
                    }                       
                )
            break

            case 'high':
                resolve({
                    state: 1,
                    total: 2,
                    data: [
                        {
                            id: 1,
                            tit: 'high分类',
                            content: '这是High分类下的内容'
                        },
                        {
                            id: 2,
                            tit: 'high分类',
                            content: '这是High分类下的内容'
                        },                              
                    ]                     
                }) 
            break  

            case 'aluminium':
                resolve({
                    state: 1,
                    total: 2,
                    data: [
                        {
                            id: 1,
                            tit: 'aluminium',
                            content: '这是aluminium下的内容'
                        },
                        {
                            id: 2,
                            tit: 'aluminium',
                            content: '这是aluminium下的内容'
                        },                              
                    ]                     
                }) 
            break 

            case 'phone':
                resolve(
                    {
                        state: 1,
                        total: 4,
                        data: [
                            {
                                id: 1,
                                str: 'productShow',
                                tagId: 'phone',
                                picUrl: '../../../../static/left.png',
                                headTit: '二阶盲埋沉金HDI',
                                headTime: '日期：13-08-22 04:17',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            二阶盲埋沉金HDI
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>13-08-22 04:17</span>&nbsp;点击：<span>232</span>
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="http://www.mfpcb.com/uploads/201008/20100811181117928.jpg" />
                                    </div>
                                    <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <strong>产品详细说明</strong>
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        &emsp;&emsp;<span style="color:#6F6F6F;line-height:25px;">二阶盲埋沉金HDI</span><br />
                                <span style="color:#6F6F6F;line-height:25px;">&nbsp; 层数：14/L</span><br />
                                <span style="color:#6F6F6F;line-height:25px;">·最小线宽&nbsp;0.05mm 线隙 0.05mm&nbsp;</span><br />
                                <span style="color:#6F6F6F;line-height:25px;">·最小孔径 0.08mm</span><br />
                                <span style="color:#6F6F6F;line-height:25px;">·板厚 1.60mm</span>
                                    </div>
                                    <div class="boxoff" style="margin:0px;padding:0px;font-size:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <strong>----------------------------------</strong>
                                    </div>
                                </p>
                                <p>
                                    <br />
                                </p>`
                                }
                            }, 
                            {
                                id: 2,
                                str: 'productShow',
                                tagId: 'phone',
                                picUrl: '../../../../static/left.png',
                                headTit: '盲孔HDI板',
                                headTime: '日期：18-08-23 21:22',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            盲孔HDI板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>13-08-22 04:17</span>&nbsp;点击：<span>234</span>
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="http://www.mfpcb.com/uploads/201008/20100811181033695.jpg" />
                                    </div>
                                    <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <strong>产品详细说明</strong>
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        &emsp;&emsp;<span style="color:#6F6F6F;line-height:25px;">盲孔HDI板</span><br />
                                <span style="color:#6F6F6F;line-height:25px;">·最小线宽 4mil 线隙 5mil</span><br />
                                <span style="color:#6F6F6F;line-height:25px;">·最小孔径 0.2mm</span><br />
                                <span style="color:#6F6F6F;line-height:25px;">·板厚 1.60mm</span>
                                    </div>
                                </p>
                                <p>
                                    <br />
                                </p>`
                                }
                            },  
                            {
                                id: 3,
                                str: 'productShow',
                                tagId: 'phone',
                                picUrl: '../../../../static/left.png',
                                headTit: '6层BGA手机板',
                                headTime: '日期：18-08-23 21:22',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            6层BGA手机板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>13-08-22 04:16</span>&nbsp;点击：<span>176</span>
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="http://www.mfpcb.com/uploads/201008/20100811180905492.jpg" />
                                    </div>
                                    <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <strong>产品详细说明</strong>
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        &emsp;&emsp;<span style="color:#6F6F6F;line-height:25px;">6层BGA手机板</span><br />
                                <span style="color:#6F6F6F;line-height:25px;">·最小线宽 4mil 线隙 5mil</span><br />
                                <span style="color:#6F6F6F;line-height:25px;">·最小孔径 0.25mm</span><br />
                                <span style="color:#6F6F6F;line-height:25px;">·板厚 1.60mm</span>
                                    </div>
                                </p>
                                <p>
                                    <br />
                                </p>`
                                }
                            },  
                            {
                                id: 4,
                                str: 'productShow',
                                tagId: 'phone',
                                picUrl: '../../../../static/left.png',
                                headTit: '8层沉金HDI板',
                                headTime: '日期：17-09-23 21:22',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            8层沉金HDI板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>13-08-22 04:16</span>&nbsp;点击：<span>190</span>
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="http://www.mfpcb.com/uploads/201008/20100811180706324.jpg" />
                                    </div>
                                    <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <strong>产品详细说明</strong>
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        &emsp;&emsp;<span style="color:#6F6F6F;line-height:25px;">8层沉金HDI板&nbsp;</span><br />
                                <span style="color:#6F6F6F;line-height:25px;">·最小线宽 3mil 线隙 3mil</span><br />
                                <span style="color:#6F6F6F;line-height:25px;">·最小孔径 0.1mm</span><br />
                                <span style="color:#6F6F6F;line-height:25px;">·板厚 1.6mm</span>
                                    </div>
                                </p>
                                <p>
                                    <br />
                                </p>`
                                }
                            }                                                       

                        ]
                    }                     
                ) 
            break  
            
            case 'double':
                resolve(
                    {
                        state: 1,
                        total: 4,
                        data: [
                            {
                                id: 1,
                                str: 'productShow',
                                tagId: 'double',
                                picUrl: '../../../../static/left.png',
                                headTit: '双面喷锡板',
                                headTime: '日期：13-08-22 04:17',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            双面喷锡板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>13-08-21 07:36</span>&nbsp;点击：<span>210</span>
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="http://www.mfpcb.com/uploads/201008/20100811180405327.jpg" />
                                    </div>
                                    <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <strong>产品详细说明</strong>
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        &emsp;&emsp;<span style="color:#6F6F6F;line-height:25px;">双面喷锡板</span><br />
                                <span style="color:#6F6F6F;line-height:25px;">·最小线宽 5mil 线隙 5mil</span><br />
                                <span style="color:#6F6F6F;line-height:25px;">·最小孔径 0.30mm</span><br />
                                <span style="color:#6F6F6F;line-height:25px;">·板厚 1.00mm</span>
                                    </div>
                                </p>
                                <p>
                                    <br />
                                </p>`
                                }
                            }, 
                            {
                                id: 2,
                                str: 'productShow',
                                tagId: 'double',
                                picUrl: '../../../../static/left.png',
                                headTit: '双面金手指板',
                                headTime: '日期：13-08-21 07:36',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            双面金手指板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>13-08-21 07:36</span>&nbsp;点击：<span>285</span>
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="http://www.mfpcb.com/uploads/201008/20100811180143586.jpg" />
                                    </div>
                                    <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <strong>产品详细说明</strong>
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        &emsp;&emsp;
                                        <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin:0px;padding:0px;color:#6F6F6F;" class="ke-zeroborder">
                                            <tbody>
                                                <tr>
                                                    <td height="25">
                                                        <p>
                                                            &nbsp;双面金手指板<br />
                                ·最小线宽 5mil 线隙 6mil<br />
                                ·最小孔径 0.35mm<br />
                                ·板厚 1.60mm
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </p>
                                <p>
                                    <br />
                                </p>`
                                }
                            },  
                            {
                                id: 3,
                                str: 'productShow',
                                tagId: 'double',
                                picUrl: '../../../../static/left.png',
                                headTit: '双面绑定板',
                                headTime: '日期：13-08-21 07:35',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            双面绑定板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>13-08-21 07:35</span>&nbsp;点击：<span>179</span>
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="http://www.mfpcb.com/uploads/201008/20100811180056319.jpg" />
                                    </div>
                                    <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <strong>产品详细说明</strong>
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        &emsp;&emsp;<span style="color:#6F6F6F;line-height:25px;">双面绑定板</span><br />
                                <span style="color:#6F6F6F;line-height:25px;">·最小线宽 5mil 线隙 5mil</span><br />
                                <span style="color:#6F6F6F;line-height:25px;">·最小孔径 0.50mm</span><br />
                                <span style="color:#6F6F6F;line-height:25px;">·板厚 1.60mm</span>
                                    </div>
                                    <div class="boxoff" style="margin:0px;padding:0px;font-size:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <strong>----------------------------------</strong>
                                    </div>
                                </p>
                                <p>
                                    <br />
                                </p>`
                                }
                            },  
                            {
                                id: 4,
                                str: 'productShow',
                                tagId: 'double',
                                picUrl: '../../../../static/left.png',
                                headTit: '双面板',
                                headTime: '日期：13-08-21 07:35',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            双面板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>13-08-21 07:35</span>&nbsp;点击：<span>148</span>
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="http://www.mfpcb.com/uploads/201008/20100811180006686.jpg" />
                                    </div>
                                    <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <strong>产品详细说明</strong>
                                    </div>
                                </p>
                                <p>
                                    <br />
                                </p>`
                                }
                            }                                                       

                        ]
                    }                   
                ) 
            break                
            
            case 'impedance':
                resolve({
                    state: 1,
                    total: 2,
                    data: [
                        {
                            id: 1,
                            tit: 'impedance',
                            content: '这是impedance下的内容'
                        },
                        {
                            id: 2,
                            tit: 'impedance',
                            content: '这是impedance下的内容'
                        },                              
                    ]                     
                }) 
            break  

            case 'special':
                resolve({
                    state: 1,
                    total: 2,
                    data: [
                        {
                            id: 1,
                            tit: 'special',
                            content: '这是special下的内容'
                        },
                        {
                            id: 2,
                            tit: 'special',
                            content: '这是special下的内容'
                        },                              
                    ]                     
                }) 
            break              
            
        }            
    })     
}