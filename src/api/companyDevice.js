export function getCompanyDeviceCatList (catId) {
    debugger
    return new Promise((resolve, reject) => {
        switch(catId){
            case 'companyDevice':
                resolve(
                    {
                        state: 1,
                        total: 8,
                        data: [
                            {
                                id: 1,
                                str: 'companyDevice',
                                tagId: 'companyDevice',
                                // picUrl: 'static/companyDevice_01.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006042714803573.jpg',
                                headTit: '自动沉金线',
                                headTime: '时间:2018-08-18 06:05',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <br />
                                </p>
                                <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    <h2>
                                        自动沉金线
                                    </h2>
                                </div>
                                <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    时间:2018-08-18 06:05
                                </div>
                                <div class="picbox" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006042714803573.jpg" id="bigimg" alt="" border="0" />&nbsp;自动沉金线
                                </div>
                                <p>
                                    <br />
                                </p>
                                <p>
                                    <br />
                                </p>`
                                }
                            }, 
                            {
                                id: 2,
                                str: 'companyDevice',
                                tagId: 'companyDevice',
                                // picUrl: 'static/companyDevice_02.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006042731373338.jpg',
                                headTit: '外观检测机',
                                headTime: '日期：18-08-23 21:22',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            外观检测机
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        时间:2018-08-18 06:04
                                    </div>
                                    <div class="picbox" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006042731373338.jpg" id="bigimg" alt="" border="0" />&nbsp;外观检测机</a>
                                    </div>
                                    <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <div style="margin:0px;padding:0px;">
                                        </div>
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
                                id: 3,
                                str: 'companyDevice',
                                tagId: 'companyDevice',
                                // picUrl: 'static/companyDevice_03.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006042748343923.jpg',
                                headTit: '内层自动AOI',
                                headTime: '日期：18-08-23 21:22',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            内层自动AOI
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        时间:2018-08-18 06:02
                                    </div>
                                    <div class="picbox" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006042748343923.jpg" id="bigimg" alt="" border="0" />&nbsp内层自动AOI</a>
                                    </div>
                                </p>
                                <p>
                                    <br />
                                </p>`
                                }
                            },  
                            {
                                id: 4,
                                str: 'companyDevice',
                                tagId: 'companyDevice',
                                // picUrl: 'static/companyDevice_04.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006042766243828.jpg',
                                headTit: '钻房',
                                headTime: '时间:2018-08-18 06:02',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            钻房
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        时间:2018-08-18 06:02
                                    </div>
                                    <div class="picbox" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006042766243828.jpg" id="bigimg" alt="" border="0" />&nbsp;钻房</a>
                                    </div>
                                </p>
                                <p>
                                    <br />
                                </p>`
                                }
                            },  
                            {
                                id: 5,
                                str: 'companyDevice',
                                tagId: 'companyDevice',
                                // picUrl: 'static/companyDevice_05.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006042787415481.jpg',
                                headTit: '全自动内层DES蚀刻线',
                                headTime: '时间:2018-08-18 06:02',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            全自动内层DES蚀刻线
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        时间:2018-08-18 06:01
                                    </div>
                                    <div class="picbox" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src=" https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006042787415481.jpg" id="bigimg" alt="" border="0" />&nbsp;全自动内层DES蚀刻线</a>
                                    </div>
                                </p>
                                <p>
                                    <br />
                                </p>`
                                }
                            },   
                            {
                                id: 6,
                                str: 'companyDevice',
                                tagId: 'companyDevice',
                                // picUrl: 'static/companyDevice_06.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006042803420087.jpg',
                                headTit: '菲林自动光学检测机',
                                headTime: '时间:2018-08-18 06:02',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            菲林自动光学检测机
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        时间:2018-08-18 06:01
                                    </div>
                                    <div class="picbox" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006042803420087.jpg" id="bigimg" alt="" border="0" />&nbsp;菲林自动光学检测机</a>
                                    </div>
                                </p>
                                <p>
                                    <br />
                                </p>`
                                }
                            },     
                            {
                                id: 7,
                                str: 'companyDevice',
                                tagId: 'companyDevice',
                                // picUrl: 'static/companyDevice_07.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006042821968876.jpg',
                                headTit: 'OSP生产线',
                                headTime: '时间:2018-08-18 06:00',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <br />
                                </p>
                                <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    <h2>
                                        OSP生产线
                                    </h2>
                                    <p>
                                        时间:<span style="color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">2018-08-18 06:00</span>
                                    </p>
                                    <p>
                                        <br />
                                    </p>
                                </div>
                                <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006042821968876.jpg" id="bigimg" width="300" alt="" border="0" />&nbsp;OSP生产线</a>
                                </div>
                                <p>
                                    <br />
                                </p>
                                <p>
                                    <br />
                                </p>`
                                }
                            },   
                            {
                                id: 8,
                                str: 'companyDevice',
                                tagId: 'companyDevice',
                                // picUrl: 'static/companyDevice_08.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006042841161463.jpg',
                                headTit: 'CCD自动曝光机',
                                headTime: '时间:2018-08-18 05:58',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            CCD自动曝光机
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        时间:2018-08-18 05:58
                                    </div>
                                    <div class="picbox" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006042841161463.jpg" id="bigimg" alt="" border="0" />&nbsp;</a><a href="http://www.mfpcb.com/uploads/allimg/180818/1-1PQP60004.jpg">CCD自动曝光机
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
        }            
    })     
}