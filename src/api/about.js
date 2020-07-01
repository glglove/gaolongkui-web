export function getAboutCatList (catId) {
    debugger
    return new Promise((resolve, reject) => {
        switch(catId){
            case 'companyProfile':
                resolve(
                    {
                        state: 1,
                        data: {
                            id: 1,
                            tagId: 'companyProfile',
                            str: 'about',
                            contentData: {
                                tit: '企业简介',
                                content: 
                                    `<p>
                                        <strong><span style="font-size:14px;"><span style="font-family:arial, helvetica, sans-serif;">企业简介</span></span></strong><br />
                                        <p style="color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            &nbsp;
                                        </p>
                                        <p style="color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <span style="font-size:14px;"><span style="font-family:arial, helvetica, sans-serif;">&nbsp; &nbsp; &nbsp; &nbsp;翔翎电子有限公司坐落于惠州市国家级的高新技术开发区，成立于2013年，是一家高新技术企业。于2013年6月开始组建生产，投资资金1亿人民币。年销售达1.5亿到2亿人民币， 厂区占地面积为25000平方米，厂房面积为15000平方米，印制线路板生产能力每月达60000平方米。拥有积极进取，诚信负责，经验丰富的经营管理团队，公司快速反应。品质优先.客户至上的理念为核心经营理念。<br />
                                        <br />
                                        &nbsp; &nbsp; &nbsp;公司以单.双层铝基多层到（4-32）层板制作生产，公司核心产品主要用于汽车电子.新能源及汽车智能电子.通讯及网络.工控能源及消费等领域，产品主要分布在欧美，亚洲等地区。</span></span><br />
                                        <br />
                                        <span style="font-size:14px;"><span style="font-family:arial, helvetica, sans-serif;">&nbsp; &nbsp; 公司在注重内部建设的同时，积极推动相关环保政策，遵从环保法规教育和宣导全体员工保护自然资源是大家的责任，全员参与，积极推动环境保护工作，始终贯彻</span></span><span style="font-family:arial, helvetica, sans-serif;font-size:14px;color:#222222;">"可靠，节能，环保</span><span style="font-family:arial, helvetica, sans-serif;font-size:14px;color:#222222;">"的制作理念。<br />
                                        &nbsp; &nbsp; 公</span><span style="color:#222222;font-family:arial, helvetica, sans-serif;font-size:14px;">司已取得UL，CQC产品认证和ISO9000，IS014001体系认证，并致力于成长为行业一流的线路板制造服务企业，为客户，员工，社会创造最大的价值。</span>
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
            case 'speech':
                resolve(
                    {
                        state: 1,
                        data: {
                            id: 1,
                            tagId: 'speech',
                            str: 'about',
                            contentData: {
                                tit: '企业简介',
                                content: 
                                    `<p style="line-height:40px;font-size:12px">
                                    <div style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        董事长致辞
                                    </div>
                                    <div style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        &nbsp;
                                    </div>
                                    <p style="color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        &nbsp; &nbsp; 今天，翔翎电子有限公司的网站正式与大家见面了。因为有了网站，我们之间的距离不再遥远，亲爱的朋友，不管您现在身处何方，我都真诚地感谢您登陆我们企业的网站，和我们一起分享成长和收获的快乐！
                                    </p>
                                    <p style="color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <br />
                                    </p>
                                    <p style="color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        &nbsp; &nbsp; &nbsp; 翔翎电子有限公司于2013年诞生于惠州大亚湾之畔，是惠州市国资委属下以线路板为主的惠州市大型企业。成立以来，翔翎始终肩负着市委市政府赋予的国有资产保值增值、增强核心竞争力的重任，肩负着优化产业结构、不断改革发展的使命，不断助力惠州经济发展。
                                    </p>
                                    <p style="color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <br />
                                    </p>
                                    <p style="color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        &nbsp; &nbsp; &nbsp; &nbsp; 励精重组改革，创新发展，翔翎已经逐步成长为涉及汽车电子.新能源汽车电源及汽车智能电子.通讯及网络.工控能源及消费类等众多领域，跨越欧美.亚洲等地区，翔翎以“科技创新+总部经济”为双轮驱动，致力寻求智能化发展、全球化发展，以深圳为总部，着力建设研发中心、营销中心、资金中心、利润中心，并积极谋划全球化战略布局。
                                    </p>
                                    <p style="color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <br />
                                    </p>
                                    <p style="color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        &nbsp; &nbsp; &nbsp; &nbsp; 沧海横流，遥看大江东逝；岁月更迭，见证策马奔腾。翔翎的成长镌刻了翔翎人敢为人先、创新求变的文化烙印，翔翎的改革融合了翔翎人坚韧不拔、矢志不渝的拼搏精神，翔翎的未来承载了可持续发展、基业长青的社会期盼，铸就了翔翎“文化引领、融合创新、永续经营”的企业理念。
                                    </p>
                                    <p style="color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <br />
                                    </p>
                                    <div style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        &nbsp; &nbsp; &nbsp; &nbsp; 万物化生，力行厚德。翔翎人以“成为国际领先、世界知名的线路板产品及服务提供商”为目标，在创新中求发展，在竞争中谋合作，不忘初心，继续前行，开创翔翎发展的新纪元。
                                    </div>
                                </p>`
                            }                            
                        }
                    }               
                ) 
            break  
            case 'companyFramework':
                resolve(
                    {
                        state: 1,
                        data: {
                            id: 1,
                            tagId: 'companyFramework',
                            str: 'about',
                            contentData: {
                                tit: '',
                                content: 
                                    `<p>
                                    <strong>企业架构</strong><span style="color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;"></span>
                                    <div style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        &nbsp;
                                    </div>
                                <span style="color:#595959;background-color:#FFFFFF;font-family:arial, helvetica, sans-serif;font-size:14px;line-height:25px;">&nbsp;中国的社会已处于创新和强盛时代，创新是基于对行业有着深刻的理解。</span>
                                </p>
                                <p>
                                    <br />
                                </p>`
                            }
                        }
                    }                
                ) 
            break   
            case 'companyCulture':
                resolve(
                    {
                        state: 1,
                        data: {
                            id: 1,
                            tagId: 'companyCulture',
                            str: 'about',
                            contentData: {
                                tit: '',
                                content: 
                                    `<p>
                                    <span style="color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">&nbsp;</span><strong>企业文化</strong><span style="color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;"></span>
                                    <div style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <br />
                                <span style="font-family:arial, helvetica, sans-serif;font-size:14px;">企业精神：敬业奉献，追求卓越。</span>
                                    </div>
                                    <div style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        &nbsp;
                                    </div>
                                    <div style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <span style="font-size:14px;"><span style="font-family:arial, helvetica, sans-serif;">创业理念：成功源于诚信，努力终有回报。</span></span>
                                    </div>
                                    <div style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        &nbsp;
                                    </div>
                                    <div style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <span style="font-size:14px;"><span style="font-family:arial, helvetica, sans-serif;">创新理念：是基于对行业有着深刻的理解。</span></span>
                                    </div>
                                    <div style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        &nbsp;
                                    </div>
                                    <div style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <span style="font-size:14px;"><span style="font-family:arial, helvetica, sans-serif;">合作理念：打过一次交道，便是永远的朋友。</span></span>
                                    </div>
                                    <div style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        &nbsp;
                                    </div>
                                    <div style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <span style="font-size:14px;"><span style="font-family:arial, helvetica, sans-serif;">管理理念：规范、严谨、先进、高效。</span></span>
                                    </div>
                                    <div style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        &nbsp;
                                    </div>
                                    <div style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <span style="font-size:14px;"><span style="font-family:arial, helvetica, sans-serif;">人才理念：人才是翔翎最重要的资源。</span></span>
                                    </div>
                                    <div style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        &nbsp;
                                    </div>
                                    <div style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <span style="font-size:14px;"><span style="font-family:arial, helvetica, sans-serif;">工作作风：雷厉风行，跑步前进</span></span>
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