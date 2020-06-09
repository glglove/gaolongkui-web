export function getProductCatList (catId, pageSize= 10, pageNum=1) {
    debugger
    return new Promise((resolve, reject) => {
        switch(catId){
            case 'total':
                if(pageNum == 1){
                    resolve({
                        state: 1,
                        total: 40,
                        data: [
                            {
                                id: 1,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_01.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052122591943.jpg',
                                headTit: '单面喷锡金属铝基板',
                                headTime: '日期：13-08-22 04:17',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <br />
                                </p>
                                <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    <h2>
                                        单面喷锡金属铝基板
                                    </h2>
                                </div>
                                <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    日期：<span>18-08-23 21:22</span>&nbsp;
                                </div>
                                <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052122591943.jpg" />
                                </div>
                                <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    <strong>产品详细说明</strong>
                                </div>
                                <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    &emsp;&emsp;
                                </div>
                                <div class="boxoff" style="margin:0px;padding:0px;font-size:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    <strong>----------------------------------</strong>
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
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_02.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052140185118.jpg',
                                headTit: '四层+沉金+半孔（哑黑油）',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            四层+沉金+半孔（哑黑油）
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:19</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052140185118.jpg" />
                                    </div>
                                    <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <strong>产品详细说明</strong>
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        &emsp;&emsp;
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
                                tagId: 'special',
                                // picUrl: 'static/special_03.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052158812095.jpg',
                                headTit: '双面+喷锡+碳油板）',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            双面+喷锡+碳油板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:19</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052158812095.jpg" />
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
                                id: 4,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_04.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052178959849.jpg',
                                headTit: '四层+沉金+半孔（哑黑油）',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            双面+喷锡+汽车板 (2)
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:19</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052178959849.jpg" />
                                    </div>
                                    <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <strong>产品详细说明</strong>
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        &emsp;&emsp;
                                    </div>
                                </p>
                                <p>
                                    <br />
                                </p>`
                                }
                            },
                            {
                                id: 5,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_05.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052193659958.jpg',
                                headTit: '十层+沉金 (2)',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            十层+沉金 (2)
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:18</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052193659958.jpg" />
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
                                id: 6,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_06.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052210525790.jpg',
                                headTit: '六层+锣台阶盲槽+无人机',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            六层+锣台阶盲槽+无人机
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:18</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052210525790.jpg" />
                                    </div>
                                    <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <strong>产品详细说明</strong>
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        &emsp;&emsp;
                                    </div>
                                </p>
                                <p>
                                    <br />
                                </p>`
                                }
                            },
                            {
                                id: 7,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_07.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052225641655.jpg',
                                headTit: '六层+沉金+单面密集 BGA33mil线',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            六层+沉金+单面密集 BGA33mil线
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:17</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052225641655.jpg" />
                                    </div>
                                    <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <strong>产品详细说明</strong>
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        &emsp;&emsp;
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
                                id: 8,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_08.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052242974918.jpg',
                                headTit: '六层+沉金+BGA (2)',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            六层+沉金+BGA (2)
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:17</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052242974918.jpg" />
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
                                id: 9,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_09.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052257845155.jpg',
                                headTit: '单面铝基板C',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            单面铝基板C
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:16</span>
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052257845155.jpg" />
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
                                id: 10,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_10.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052275864864.jpg',
                                headTit: '单面铝基板',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            单面铝基板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:16</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052275864864.jpg" />
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
                                id: 11,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_11.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052292176876.jpg',
                                headTit: '单面路基板',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            单面路基板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:15</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052292176876.jpg" />
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
                                id: 12,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_12.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052310230011.jpg',
                                headTit: '单面沉金铜基板',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            单面沉金铜基板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:15</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052310230011.jpg" />
                                    </div>
                                    <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <strong>产品详细说明</strong>
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        &emsp;&emsp;
                                    </div>
                                </p>
                                <p>
                                    <br />
                                </p>`
                                }
                            }                                                                                                                                                                                                                                                                                                                                                     
                        ]                     
                    }) 
                }else if(pageNum== 2){
                    resolve({
                        state: 1,
                        total: 40,
                        data: [
                            {
                                id: 13,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_13.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052328295700.jpg',
                                headTit: '单面沉金陶瓷板',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            单面沉金陶瓷板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:14</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052328295700.jpg" />
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
                                id: 14,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_14.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052344726213.jpg',
                                headTit: '单面OSP金属铜基板',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            单面OSP金属铜基板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:14</span>
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052344726213.jpg" />
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
                                id: 15,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_15.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052360473267.jpg',
                                headTit: '16层智能家居板',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            16层智能家居板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:14</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052360473267.jpg" />
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
                                id: 16,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_16.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052374949197.jpg',
                                headTit: '12层沉金板',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            12层沉金板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:13</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052374949197.jpg" />
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
                                id: 17,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_17.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052392866829.jpg',
                                headTit: '10层BGA沉金板',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            10层BGA沉金板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:13</span>
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052392866829.jpg" />
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
                                id: 18,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_18.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052413379350.jpg',
                                headTit: '8层埋孔喷锡板',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            8层埋孔喷锡板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:12</span>
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052413379350.jpg" />
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
                                id: 19,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_19.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052428719097.jpg',
                                headTit: '8层BGA阻抗',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            8层BGA阻抗
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:12</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052428719097.jpg" />
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
                                id: 20,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_20.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052453945567.jpg',
                                headTit: '6层沉金阻抗板',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            6层沉金阻抗板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:11</span>
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052453945567.jpg" />
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
                                id: 21,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_21.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052475600098.jpg',
                                headTit: '6层BGA板',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            6层BGA板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:11</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052475600098.jpg" />
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
                                id: 22,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_22.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052491813533.jpg',
                                headTit: '4层阻抗板',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            4层阻抗板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:10</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052491813533.jpg" />
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
                                id: 23,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_23.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052507968384.jpg',
                                headTit: '4层金板',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            4层金板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:10</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052507968384.jpg" />
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
                                id: 24,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_24.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052523110891.jpg',
                                headTit: '4层沉金阻抗',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            4层沉金阻抗
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:10</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052523110891.jpg" />
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
                    })                     
                }else if (pageNum == 3){
                    resolve({
                        state: 1,
                        total: 40,
                        data: [      
                            {
                                id: 25,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_25.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052539192359.jpg',
                                headTit: '4层沉金显卡板',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            4层沉金显卡板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:09</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052539192359.jpg" />
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
                                id: 1,
                                str: 'productShow',
                                tagId: 'phone',
                                // picUrl: 'static/index_line01.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051752196396.jpg',
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
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051752196396.jpg" />
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
                                // picUrl: 'static/index_line06.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051777355877.jpg',
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
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051777355877.jpg" />
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
                                // picUrl: 'static/index_line07.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051805043461.jpg',
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
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051805043461.jpg" />
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
                                // picUrl: 'static/index_line08.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051819048510.jpg',
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
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051819048510.jpg" />
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
                            },
                            {
                                id: 5,
                                str: 'productShow',
                                tagId: 'phone',
                                // picUrl: 'static/index_linetwo_01.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051836118962.jpg',
                                headTit: '4层沉金HDI板',
                                headTime: '日期：17-09-23 21:22',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            4层沉金HDI板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>13-08-22 04:15</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051836118962.jpg" />
                                    </div>
                                    <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <strong>产品详细说明</strong>
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        &emsp;&emsp;<span style="color:#6F6F6F;line-height:25px;">4层沉金HDI板</span><br />
                                <span style="color:#6F6F6F;line-height:25px;">·最小线宽 3mil 线隙 5mil</span><br />
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
                                id: 6,
                                str: 'productShow',
                                tagId: 'phone',
                                // picUrl: 'static/index_linetwo_02.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051858588930.jpg',
                                headTit: '8层HDI板',
                                headTime: '日期：17-09-23 21:22',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            8层HDI板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>13-08-22 04:14</span>
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051858588930.jpg" />
                                    </div>
                                    <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <strong>产品详细说明</strong>
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        &emsp;&emsp;<span style="color:#6F6F6F;line-height:25px;">8层HDI板</span><br />
                                <span style="color:#6F6F6F;line-height:25px;">·最小线宽 3mil 线隙 3mil</span><br />
                                <span style="color:#6F6F6F;line-height:25px;">·最小孔径 0.1mm</span><br />
                                <span style="color:#6F6F6F;line-height:25px;">·板厚 1.2mm</span>
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
                                id: 1,
                                str: 'productShow',
                                tagId: 'double',
                                // picUrl: 'static/index_linetwo_03.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051883586182.jpg',
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
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051883586182.jpg" />
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
                                // picUrl: 'static/index_linetwo_08.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051912652883.jpg',
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
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051912652883.jpg" />
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
                                // picUrl: 'static/index_linetwo_09.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051929857777.jpg',
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
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051929857777.jpg" />
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
                                // picUrl: 'static/index_linetwo_10.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051946669002.jpg',
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
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051946669002.jpg" />
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
                                id: 1,
                                str: 'productShow',
                                tagId: 'impedance',
                                // picUrl: 'static/index_linetwo_11.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051997052980.jpg',
                                headTit: '6层沉金阻抗板',
                                headTime: '日期：13-08-22 04:17',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            6层沉金阻抗板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>13-08-21 07:34</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051997052980.jpg" />
                                    </div>
                                    <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <strong>产品详细说明</strong>
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        &emsp;&emsp;<span style="color:#6F6F6F;line-height:25px;">6层沉金阻抗板</span><br />
                                <span style="color:#6F6F6F;line-height:25px;">·最小线宽 5mil 线隙 5mil</span><br />
                                <span style="color:#6F6F6F;line-height:25px;">·最小孔径 0.2mm</span><br />
                                <span style="color:#6F6F6F;line-height:25px;">·板厚 1.60mm</span>
                                    </div>
                                </p>
                                <p>
                                    <br />
                                </p>`
                                }
                            },                                                       
                        ]                     
                    })                      
                }else if (pageNum == 4){
                    resolve(
                        {
                            state: 1,
                            total: 40,
                            data: [ 
                                {
                                    id: 2,
                                    str: 'productShow',
                                    tagId: 'impedance',
                                    // picUrl: 'static/index_linetwo_12.jpg',
                                    picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052012305789.jpg',
                                    headTit: '8层埋孔喷锡板',
                                    headTime: '日期：13-08-21 07:36',
                                    intro: '...',
                                    detail: {
                                        content: 
                                        `<p>
                                        <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <h2>
                                                8层埋孔喷锡板
                                            </h2>
                                        </div>
                                        <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            日期：<span>13-08-21 07:34</span>
                                        </div>
                                        <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052012305789.jpg" />
                                        </div>
                                        <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <strong>产品详细说明</strong>
                                        </div>
                                        <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            &emsp;&emsp;<span style="color:#6F6F6F;line-height:25px;">8层埋孔喷锡板</span><br />
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
                                    id: 3,
                                    str: 'productShow',
                                    tagId: 'impedance',
                                    // picUrl: 'static/index_linetwo_13.jpg',
                                    picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052029721350.jpg',
                                    headTit: '8层BGA阻抗板',
                                    headTime: '日期：13-08-21 07:35',
                                    intro: '...',
                                    detail: {
                                        content: 
                                        `<p>
                                        <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <h2>
                                                8层BGA阻抗板
                                            </h2>
                                        </div>
                                        <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            日期：<span>13-08-21 07:33</span>&nbsp;
                                        </div>
                                        <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052029721350.jpg" />
                                        </div>
                                        <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <strong>产品详细说明</strong>
                                        </div>
                                        <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            &emsp;&emsp;<span style="color:#6F6F6F;line-height:25px;">8层BGA阻抗板</span><br />
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
                                    tagId: 'impedance',
                                    // picUrl: 'static/index_linetwo_14.jpg',
                                    picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052044190995.jpg',
                                    headTit: '4层沉金阻抗板',
                                    headTime: '日期：13-08-21 07:35',
                                    intro: '...',
                                    detail: {
                                        content: 
                                        `<p>
                                        <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <h2>
                                                4层沉金阻抗板
                                            </h2>
                                        </div>
                                        <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            日期：<span>13-08-21 07:33</span>&nbsp;
                                        </div>
                                        <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052044190995.jpg" />
                                        </div>
                                        <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <strong>产品详细说明</strong>
                                        </div>
                                        <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            &emsp;&emsp;<span style="color:#6F6F6F;line-height:25px;">4层沉金阻抗板&nbsp;</span><br />
                                    <span style="color:#6F6F6F;line-height:25px;">·最小线宽 5mil 线隙 6mil&nbsp;</span><br />
                                    <span style="color:#6F6F6F;line-height:25px;">·最小孔径 0.35mm&nbsp;</span><br />
                                    <span style="color:#6F6F6F;line-height:25px;">·板厚 1.60mm</span>
                                        </div>
                                    </p>
                                    <p>
                                        <br />
                                    </p>`
                                    }
                                },   
                                {
                                    id: 5,
                                    str: 'productShow',
                                    tagId: 'impedance',
                                    // picUrl: 'static/index_linetwo_15.jpg',
                                    picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052058175308.jpg',
                                    headTit: '4层阻抗板',
                                    headTime: '日期：13-08-21 07:35',
                                    intro: '...',
                                    detail: {
                                        content: 
                                        `<p>
                                        <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <h2>
                                                4层阻抗板
                                            </h2>
                                        </div>
                                        <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            日期：<span>13-08-21 07:31</span>&nbsp;
                                        </div>
                                        <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052058175308.jpg" />
                                        </div>
                                        <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <strong>产品详细说明</strong>
                                        </div>
                                        <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            &emsp;&emsp;<span style="color:#6F6F6F;line-height:25px;">&nbsp;4层阻抗板</span><br />
                                    <span style="color:#6F6F6F;line-height:25px;">·最小线宽 5mil 线隙 5mil</span><br />
                                    <span style="color:#6F6F6F;line-height:25px;">·最小孔径 0.20mm</span><br />
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
                            ]
                        }                   
                    )                     
                }             
            break
            case 'more':
                resolve(                         
                    {
                        state: 1,
                        total: 0,
                        data: [
                            // {
                            //     id: 1,
                            //     str: 'productShow',
                            //     tagId: 'more',
                            //     picUrl: 'static/left.png',
                            //     headTit: '单面喷锡金属铝基板',
                            //     headTime: '日期：18-08-23 21:22',
                            //     intro: '...',
                            //     detail: {
                            //         content: 
                            //         `<p>
                            //         <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                            //             <h2>
                            //                 单面喷锡金属铝基板
                            //             </h2>
                            //         </div>
                            //         <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                            //             日期：<span>18-08-23 21:22</span>&nbsp;点击：<span>256</span>
                            //         </div>
                            //         <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                            //             <img src="http://www.mfpcb.com/uploads/allimg/180823/180823/1-1PR3212249210.jpg" />
                            //         </div>
                            //         <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                            //             <strong>产品详细说明</strong>
                            //         </div>
                            //     </p>
                            //     <p>
                            //         <br />
                            //     </p>`
                            //     }
                            // }, 
                            // {
                            //     id: 2,
                            //     str: 'productShow',
                            //     tagId: 'more',
                            //     picUrl: 'static/left.png',
                            //     headTit: '单面喷锡金属铝基板',
                            //     headTime: '日期：18-08-23 21:22',
                            //     intro: '...',
                            //     detail: {
                            //         content: 
                            //         `<p>
                            //         <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                            //             <h2>
                            //                 单面喷锡金属铝基板
                            //             </h2>
                            //         </div>
                            //         <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                            //             日期：<span>18-08-23 21:22</span>&nbsp;点击：<span>256</span>
                            //         </div>
                            //         <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                            //             <img src="http://www.mfpcb.com/uploads/allimg/180823/180823/1-1PR3212249210.jpg" />
                            //         </div>
                            //         <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                            //             <strong>产品详细说明</strong>
                            //         </div>
                            //     </p>
                            //     <p>
                            //         <br />
                            //     </p>`
                            //     }
                            // },  
                        ]
                    }                       
                )
            break

            case 'high':
                resolve({
                    state: 1,
                    total: 0,
                    data: [                              
                    ]                     
                }) 
            break  

            case 'aluminium':
                resolve({
                    state: 1,
                    total: 0,
                    data: [
                            
                    ]                     
                }) 
            break 

            case 'phone':
                resolve(
                    {
                        state: 1,
                        total: 6,
                        data: [
                            {
                                id: 1,
                                str: 'productShow',
                                tagId: 'phone',
                                // picUrl: 'static/index_line01.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051752196396.jpg',
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
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051752196396.jpg" />
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
                                // picUrl: 'static/index_line06.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051777355877.jpg',
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
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051777355877.jpg" />
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
                                // picUrl: 'static/index_line07.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051805043461.jpg',
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
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051805043461.jpg" />
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
                                // picUrl: 'static/index_line08.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051819048510.jpg',
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
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051819048510.jpg" />
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
                            },
                            {
                                id: 5,
                                str: 'productShow',
                                tagId: 'phone',
                                // picUrl: 'static/index_linetwo_01.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051836118962.jpg',
                                headTit: '4层沉金HDI板',
                                headTime: '日期：17-09-23 21:22',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            4层沉金HDI板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>13-08-22 04:15</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051836118962.jpg" />
                                    </div>
                                    <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <strong>产品详细说明</strong>
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        &emsp;&emsp;<span style="color:#6F6F6F;line-height:25px;">4层沉金HDI板</span><br />
                                <span style="color:#6F6F6F;line-height:25px;">·最小线宽 3mil 线隙 5mil</span><br />
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
                                id: 6,
                                str: 'productShow',
                                tagId: 'phone',
                                // picUrl: 'static/index_linetwo_02.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051858588930.jpg',
                                headTit: '8层HDI板',
                                headTime: '日期：17-09-23 21:22',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            8层HDI板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>13-08-22 04:14</span>
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051858588930.jpg" />
                                    </div>
                                    <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <strong>产品详细说明</strong>
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        &emsp;&emsp;<span style="color:#6F6F6F;line-height:25px;">8层HDI板</span><br />
                                <span style="color:#6F6F6F;line-height:25px;">·最小线宽 3mil 线隙 3mil</span><br />
                                <span style="color:#6F6F6F;line-height:25px;">·最小孔径 0.1mm</span><br />
                                <span style="color:#6F6F6F;line-height:25px;">·板厚 1.2mm</span>
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
                                // picUrl: 'static/index_linetwo_03.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051883586182.jpg',
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
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051883586182.jpg" />
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
                                // picUrl: 'static/index_linetwo_08.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051912652883.jpg',
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
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051912652883.jpg" />
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
                                // picUrl: 'static/index_linetwo_09.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051929857777.jpg',
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
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051929857777.jpg" />
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
                                // picUrl: 'static/index_linetwo_10.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051946669002.jpg',
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
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051946669002.jpg" />
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
            
            case 'impedance':
                resolve({
                    state: 1,
                    total: 5,
                    data: [
                        {
                            id: 1,
                            str: 'productShow',
                            tagId: 'impedance',
                            // picUrl: 'static/index_linetwo_11.jpg',
                            picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051997052980.jpg',
                            headTit: '6层沉金阻抗板',
                            headTime: '日期：13-08-22 04:17',
                            intro: '...',
                            detail: {
                                content: 
                                `<p>
                                <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    <h2>
                                        6层沉金阻抗板
                                    </h2>
                                </div>
                                <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    日期：<span>13-08-21 07:34</span>&nbsp;
                                </div>
                                <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006051997052980.jpg" />
                                </div>
                                <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    <strong>产品详细说明</strong>
                                </div>
                                <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    &emsp;&emsp;<span style="color:#6F6F6F;line-height:25px;">6层沉金阻抗板</span><br />
                            <span style="color:#6F6F6F;line-height:25px;">·最小线宽 5mil 线隙 5mil</span><br />
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
                            id: 2,
                            str: 'productShow',
                            tagId: 'impedance',
                            // picUrl: 'static/index_linetwo_12.jpg',
                            picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052012305789.jpg',
                            headTit: '8层埋孔喷锡板',
                            headTime: '日期：13-08-21 07:36',
                            intro: '...',
                            detail: {
                                content: 
                                `<p>
                                <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    <h2>
                                        8层埋孔喷锡板
                                    </h2>
                                </div>
                                <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    日期：<span>13-08-21 07:34</span>
                                </div>
                                <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052012305789.jpg" />
                                </div>
                                <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    <strong>产品详细说明</strong>
                                </div>
                                <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    &emsp;&emsp;<span style="color:#6F6F6F;line-height:25px;">8层埋孔喷锡板</span><br />
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
                            id: 3,
                            str: 'productShow',
                            tagId: 'impedance',
                            // picUrl: 'static/index_linetwo_13.jpg',
                            picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052029721350.jpg',
                            headTit: '8层BGA阻抗板',
                            headTime: '日期：13-08-21 07:35',
                            intro: '...',
                            detail: {
                                content: 
                                `<p>
                                <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    <h2>
                                        8层BGA阻抗板
                                    </h2>
                                </div>
                                <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    日期：<span>13-08-21 07:33</span>&nbsp;
                                </div>
                                <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052029721350.jpg" />
                                </div>
                                <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    <strong>产品详细说明</strong>
                                </div>
                                <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    &emsp;&emsp;<span style="color:#6F6F6F;line-height:25px;">8层BGA阻抗板</span><br />
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
                            tagId: 'impedance',
                            // picUrl: 'static/index_linetwo_14.jpg',
                            picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052044190995.jpg',
                            headTit: '4层沉金阻抗板',
                            headTime: '日期：13-08-21 07:35',
                            intro: '...',
                            detail: {
                                content: 
                                `<p>
                                <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    <h2>
                                        4层沉金阻抗板
                                    </h2>
                                </div>
                                <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    日期：<span>13-08-21 07:33</span>&nbsp;
                                </div>
                                <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052044190995.jpg" />
                                </div>
                                <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    <strong>产品详细说明</strong>
                                </div>
                                <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    &emsp;&emsp;<span style="color:#6F6F6F;line-height:25px;">4层沉金阻抗板&nbsp;</span><br />
                            <span style="color:#6F6F6F;line-height:25px;">·最小线宽 5mil 线隙 6mil&nbsp;</span><br />
                            <span style="color:#6F6F6F;line-height:25px;">·最小孔径 0.35mm&nbsp;</span><br />
                            <span style="color:#6F6F6F;line-height:25px;">·板厚 1.60mm</span>
                                </div>
                            </p>
                            <p>
                                <br />
                            </p>`
                            }
                        },   
                        {
                            id: 5,
                            str: 'productShow',
                            tagId: 'impedance',
                            // picUrl: 'static/index_linetwo_15.jpg',
                            picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052058175308.jpg',
                            headTit: '4层阻抗板',
                            headTime: '日期：13-08-21 07:35',
                            intro: '...',
                            detail: {
                                content: 
                                `<p>
                                <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    <h2>
                                        4层阻抗板
                                    </h2>
                                </div>
                                <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    日期：<span>13-08-21 07:31</span>&nbsp;
                                </div>
                                <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052058175308.jpg" />
                                </div>
                                <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    <strong>产品详细说明</strong>
                                </div>
                                <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    &emsp;&emsp;<span style="color:#6F6F6F;line-height:25px;">&nbsp;4层阻抗板</span><br />
                            <span style="color:#6F6F6F;line-height:25px;">·最小线宽 5mil 线隙 5mil</span><br />
                            <span style="color:#6F6F6F;line-height:25px;">·最小孔径 0.20mm</span><br />
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
                    ]                     
                }) 
            break  

            case 'special':
                if(pageNum == 1){
                    resolve({
                        state: 1,
                        total: 25,
                        data: [
                            {
                                id: 1,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_01.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052122591943.jpg',
                                headTit: '单面喷锡金属铝基板',
                                headTime: '日期：13-08-22 04:17',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <br />
                                </p>
                                <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    <h2>
                                        单面喷锡金属铝基板
                                    </h2>
                                </div>
                                <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    日期：<span>18-08-23 21:22</span>&nbsp;
                                </div>
                                <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052122591943.jpg" />
                                </div>
                                <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    <strong>产品详细说明</strong>
                                </div>
                                <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    &emsp;&emsp;
                                </div>
                                <div class="boxoff" style="margin:0px;padding:0px;font-size:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    <strong>----------------------------------</strong>
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
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_02.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052140185118.jpg',
                                headTit: '四层+沉金+半孔（哑黑油）',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            四层+沉金+半孔（哑黑油）
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:19</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052140185118.jpg" />
                                    </div>
                                    <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <strong>产品详细说明</strong>
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        &emsp;&emsp;
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
                                tagId: 'special',
                                // picUrl: 'static/special_03.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052158812095.jpg',
                                headTit: '双面+喷锡+碳油板）',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            双面+喷锡+碳油板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:19</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052158812095.jpg" />
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
                                id: 4,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_04.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052178959849.jpg',
                                headTit: '四层+沉金+半孔（哑黑油）',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            双面+喷锡+汽车板 (2)
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:19</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052178959849.jpg" />
                                    </div>
                                    <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <strong>产品详细说明</strong>
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        &emsp;&emsp;
                                    </div>
                                </p>
                                <p>
                                    <br />
                                </p>`
                                }
                            },
                            {
                                id: 5,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_05.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052193659958.jpg',
                                headTit: '十层+沉金 (2)',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            十层+沉金 (2)
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:18</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052193659958.jpg" />
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
                                id: 6,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_06.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052210525790.jpg',
                                headTit: '六层+锣台阶盲槽+无人机',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            六层+锣台阶盲槽+无人机
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:18</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052210525790.jpg" />
                                    </div>
                                    <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <strong>产品详细说明</strong>
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        &emsp;&emsp;
                                    </div>
                                </p>
                                <p>
                                    <br />
                                </p>`
                                }
                            },
                            {
                                id: 7,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_07.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052225641655.jpg',
                                headTit: '六层+沉金+单面密集 BGA33mil线',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            六层+沉金+单面密集 BGA33mil线
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:17</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052225641655.jpg" />
                                    </div>
                                    <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <strong>产品详细说明</strong>
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        &emsp;&emsp;
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
                                id: 8,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_08.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052242974918.jpg',
                                headTit: '六层+沉金+BGA (2)',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            六层+沉金+BGA (2)
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:17</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052242974918.jpg" />
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
                                id: 9,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_09.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052257845155.jpg',
                                headTit: '单面铝基板C',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            单面铝基板C
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:16</span>
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052257845155.jpg" />
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
                                id: 10,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_10.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052275864864.jpg',
                                headTit: '单面铝基板',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            单面铝基板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:16</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052275864864.jpg" />
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
                                id: 11,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_11.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052292176876.jpg',
                                headTit: '单面路基板',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            单面路基板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:15</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052292176876.jpg" />
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
                                id: 12,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_12.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052310230011.jpg',
                                headTit: '单面沉金铜基板',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            单面沉金铜基板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:15</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052310230011.jpg" />
                                    </div>
                                    <div class="labeltitle" style="margin:0px;padding:0px;font-size:14px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <strong>产品详细说明</strong>
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        &emsp;&emsp;
                                    </div>
                                </p>
                                <p>
                                    <br />
                                </p>`
                                }
                            },                                                                                                                                                                                                                                                                                                                                                     
                        ]                     
                    }) 
                }else if(pageNum== 2){
                    resolve({
                        state: 1,
                        total: 25,
                        data: [
                            {
                                id: 13,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_13.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052328295700.jpg',
                                headTit: '单面沉金陶瓷板',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            单面沉金陶瓷板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:14</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052328295700.jpg" />
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
                                id: 14,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_14.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052344726213.jpg',
                                headTit: '单面OSP金属铜基板',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            单面OSP金属铜基板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:14</span>
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052344726213.jpg" />
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
                                id: 15,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_15.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052360473267.jpg',
                                headTit: '16层智能家居板',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            16层智能家居板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:14</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052360473267.jpg" />
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
                                id: 16,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_16.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052374949197.jpg',
                                headTit: '12层沉金板',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            12层沉金板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:13</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052374949197.jpg" />
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
                                id: 17,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_17.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052392866829.jpg',
                                headTit: '10层BGA沉金板',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            10层BGA沉金板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:13</span>
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052392866829.jpg" />
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
                                id: 18,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_18.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052413379350.jpg',
                                headTit: '8层埋孔喷锡板',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            8层埋孔喷锡板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:12</span>
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052413379350.jpg" />
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
                                id: 19,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_19.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052428719097.jpg',
                                headTit: '8层BGA阻抗',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            8层BGA阻抗
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:12</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052428719097.jpg" />
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
                                id: 20,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_20.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052453945567.jpg',
                                headTit: '6层沉金阻抗板',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            6层沉金阻抗板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:11</span>
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052453945567.jpg" />
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
                                id: 21,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_21.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052475600098.jpg',
                                headTit: '6层BGA板',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            6层BGA板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:11</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052475600098.jpg" />
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
                                id: 22,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_22.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052491813533.jpg',
                                headTit: '4层阻抗板',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            4层阻抗板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:10</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052491813533.jpg" />
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
                                id: 23,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_23.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052507968384.jpg',
                                headTit: '4层金板',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            4层金板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:10</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052507968384.jpg" />
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
                                id: 24,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_24.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052523110891.jpg',
                                headTit: '4层沉金阻抗',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            4层沉金阻抗
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:10</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052523110891.jpg" />
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
                    })                     
                }else if (pageNum == 3){
                    resolve({
                        state: 1,
                        total: 25,
                        data: [      
                            {
                                id: 25,
                                str: 'productShow',
                                tagId: 'special',
                                // picUrl: 'static/special_25.jpg',
                                picUrl: 'https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052539192359.jpg',
                                headTit: '4层沉金显卡板',
                                headTime: '日期：18-08-23 21:19',
                                intro: '...',
                                detail: {
                                    content: 
                                    `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            4层沉金显卡板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        日期：<span>18-08-23 21:09</span>&nbsp;
                                    </div>
                                    <div class="picview" style="margin:0px 0px 40px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <img src="https://zry-wuhan.oss-cn-beijing.aliyuncs.com/picture/2006052539192359.jpg" />
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
                    })                      
                }
            break              
            
        }                  
    })     
}