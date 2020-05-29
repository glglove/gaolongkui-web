export function getProductionLineCatList (catId) {
    debugger
    return new Promise((resolve, reject) => {
        switch(catId){
            case 'productionLine':
                resolve(
                    {
                        state: 1,
                        data: {
                            id: 1,
                            tagId: 'productionLine',
                            str: 'productionLine',
                            contentData: {
                                tit: '生产流程',
                                content: 
                                    `<p>
                                    <span style="color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;font-size:14px;"><span style="color:#555555;font-family:宋体;line-height:21px;">一、开料</span></span><span style="color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;"></span>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">目的：根据工程资料MI的要求，在符合要求的大张板材上，裁切成小块生产板件．符合客户要求的小块板料．</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">流程：大板料→按MI要求切板→锔板→啤圆角＼磨边→出板</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">二、钻孔</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">目的：根据工程资料（客户资料），在所开符合要求尺寸的板料上，相应的位置钻出所求的孔径．</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">流程：叠板销钉→上板→钻孔→下板→检查＼修理</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">三、沉铜</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">目的：沉铜是利用化学方法在绝缘孔壁上沉积上一层薄铜．</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">流程：粗磨→挂板→沉铜自动线→下板→浸1%稀H2SO4→加厚铜</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">四、图形转移</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">目的：图形转移是生产菲林上的图像转移到板上</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">流程：（蓝油流程）：磨板→印第一面→烘干→印第二面→烘干→爆光→冲影→检查；（干膜流程）：麻板→压膜→静置→对位→曝光→静置→冲影→检查</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">五、图形电镀</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">目的：图形电镀是在线路图形裸露的铜皮上或孔壁上电镀一层达到要求厚度的铜层与要求厚度的金镍或锡层．</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">流程：上板→除油→水洗二次→微蚀→水洗→酸洗→镀铜→水洗→浸酸→镀锡→水洗→下板</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">六、退膜</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">目的：用NaOH溶液退去抗电镀覆盖膜层使非线路铜层裸露出来．</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">流程：水膜：插架→浸碱→冲洗→擦洗→过机；干膜：放板→过机</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">七、蚀刻</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">目的：蚀刻是利用化学反应法将非线路部位的铜层腐蚀去．</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">八、绿油</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">目的：绿油是将绿油菲林的图形转移到板上，起到保护线路和阻止焊接零件时线路上锡的作用</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">流程：磨板→印感光绿油→锔板→曝光→冲影；磨板→印第一面→烘板→印第二面→烘板</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">九、字符</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">目的：字符是提供的一种便于辩认的标记</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">流程：绿油终锔后→冷却静置→调网→印字符→后锔</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">十、镀金手指</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">目的：在插头手指上镀上一层要求厚度的镍＼金层，使之更具有硬度的耐磨性</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">流程：上板→除油→水洗两次→微蚀→水洗两次→酸洗→镀铜→水洗→镀镍→水洗→镀金</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">十、镀锡板</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">目的：喷锡是在未覆盖阻焊油的裸露铜面上喷上一层铅锡，以保护铜面不蚀氧化，以保证具有良好的焊接性能．</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">流程：微蚀→风干→预热→松香涂覆→焊锡涂覆→热风平整→风冷→洗涤风干</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">十一、成型</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">目的：通过模具冲压或数控锣机锣出客户所需要的形状成型的方法有机锣，啤板，手锣，手切</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">说明：数据锣机板与啤板的精确度较高，手锣其次，手切板最低具只能做一些简单的外形．</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">十二、测试</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">目的：通过电子100％测试，检测目视不易发现到的开路，短路等影响功能性之缺陷．</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">流程：上模→放板→测试→合格→FQC目检→不合格→修理→返测试→OK→REJ→报废</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">十三、终检&emsp;</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">目的：通过100％目检板件外观缺陷，并对轻微缺陷进行修理，避免有问题及缺陷板件流出．</span>
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <span style="font-size:14px;">具体工作流程：来料→查看资料→目检→合格→FQA抽查→合格→包装→不合格→处理→检查OK</span>
                                    </p>
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