export function getContactCatList (catId) {
    debugger
    return new Promise((resolve, reject) => {
        switch(catId){
            case 'contact':
                resolve(
                    {
                        state: 1,
                        data: {
                            id: 1,
                            tagId: 'contact',
                            str: 'contact',
                            contentData: {
                                tit: '联系我们',
                                content: 
                                    `<p>
                                    <div style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <span style="font-size:14px;"><strong>深圳市翔翎精密电子有限公司</strong></span><br />
                                <br />
                                <strong>公司地址：</strong>深圳市宝安区沙井街道共和社区第一工业区B区3栋104
                                    </div>
                                    <div style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        Tel : 0755-23357396&nbsp; &nbsp;Fax : 0755-<span style="color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">23357396&nbsp;</span>
                                    </div>
                                    <div style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <strong>工厂地址：</strong><span style="color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">深圳市宝安区沙井街道共和社区第一工业区B区3栋</span>
                                    </div>
                                    <div style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        Tel : <span style="color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">0755-23357396&nbsp; &nbsp;Fax : 0755-</span><span style="color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">23357396&nbsp;</span>
                                    </div>
                                    <p style="color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <strong>公司邮箱：</strong>
                                    </p>
                                    <div style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        &nbsp;
                                    </div>
                                    <div style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <strong>本公司市场部有关人员的联系方式：</strong>
                                    </div>
                                    <div style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        *******
                                    </div>
                                </p>
                                <p>
                                    <br />
                                </p>`
                            }
                        }
                    }                    
                )
            break    
        }            
    })     
}