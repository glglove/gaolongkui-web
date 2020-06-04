export function getNewsCatList (catId, pageSize= 10, pageNum=1) {
    debugger
    return new Promise((resolve, reject) => {
        switch(catId){
            case 'companyNews':
                if(pageNum == 1){
                    resolve(
                        {
                            state: 1,
                            total: 9,
                            data: [
                                {
                                    id: 1,
                                    str: 'news',
                                    tagId: 'companyNews',
                                    picUrl: 'static/left.png',
                                    headTit: '在非洲卖手机：山寨退出品牌吃香',
                                    headTime: '日期：2013-08-21 14:09:53',
                                    intro: '在一些人奋力扎根北上广时，一些人却将视野投向了遥远的非洲。 张霖(化名)大学一毕业就来到非洲卖手机，不到两年时间里，他跑遍了非洲许多地方，也见证了这里手机市场的变化。...',
                                    detail: {
                                        content: 
                                        `<p>
                                        <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <h2>
                                                在非洲卖手机：山寨退出品牌吃香
                                            </h2>
                                        </div>
                                        <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            时间:2013-08-21 14:12
                                        </div>
                                        <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            在一些人奋力扎根北上广时，一些人却将视野投向了遥远的非洲。 张霖(化名)大学一毕业就来到非洲卖手机，不到两年时间里，他跑遍了非洲许多地方，也见证了这里手机市场的变化。
                                        </div>
                                        <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <table width="100%" style="margin:0px;padding:0px;">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <p>
                                                                &nbsp;&nbsp;&nbsp;&nbsp; 在一些人奋力扎根北上广时，一些人却将视野投向了遥远的非洲。
                                                            </p>
                                                            <p>
                                                                <br />
                                    &emsp;&emsp;张霖(化名)大学一毕业就来到非洲卖手机，不到两年时间里，他跑遍了非洲许多地方，也见证了这里手机市场的变化。
                                                            </p>
                                                            <p>
                                                                <br />
                                    &emsp;&emsp;谈起非洲顾客的喜好，张霖头头是道，比如，南非偏向欧美的消费习惯，北非则偏向中东的消费习惯，有着石油国家的「阔绰」，更爱品质好、价格较高、有一定品牌的手机，而东非和西非购买力相对落后，中低价位尤其是绝对低价位的手机卖得最好。
                                                            </p>
                                                            <p>
                                                                <br />
                                    &emsp;&emsp;再比如，这里的顾客更看重手机的拍照功能，手机像素越高越好卖。此外，FM外放功能也为不少人所关注，「这里人们大多喜欢表现自己、爱拍照，妇女喜欢边干家务边收听广播。」张霖说。
                                                            </p>
                                                            <p>
                                                                <br />
                                    &emsp;&emsp;<strong>山寨手机节节后退</strong>
                                                            </p>
                                                            <p>
                                                                <br />
                                    &emsp;&emsp;张霖告诉《第一财经日报》记者，目前非洲山寨手机市场下滑，品牌手机却呈上升趋势。去年他所在的公司共卖出2400多万台手机，而今年上半年就已经完成了全年的销售任务。
                                                            </p>
                                                            <p>
                                                                <br />
                                    &emsp;&emsp;据相关数据统计，去年我国通信设备对东盟、拉美、非洲出口情况不佳，尤其是对非洲出口大降，去年上半年手机产品对非洲出口额降幅为18.8%。
                                                            </p>
                                                            <p>
                                                                <br />
                                    &emsp;&emsp;在张霖看来，其公司的销售业绩之所以在中国手机销售非洲市场普遍走低的情况下逆流而上，在于老板的深谋远虑。
                                                            </p>
                                                            <p>
                                                                <br />
                                    &emsp;&emsp;三四年前，非洲还是中国山寨手机的天下。一家主攻海外市场的国内手机企业负责人告诉本报记者，那时候卖手机就像卖玩具，「谁进入这个市场谁就能赚钱。」
                                                            </p>
                                                            <p>
                                                                <br />
                                    &emsp;&emsp;然而好景不长。一方面，由于山寨机卖家之间大打价格战，利润空间被不断压缩；另一方面，随着收入的提高和市场的不断发展，非洲居民的品牌意识提高。此外，知识产权保护逐渐加强，非洲市场的山寨手机最终节节后退。
                                                            </p>
                                                            <p>
                                                                <br />
                                    &emsp;&emsp;「现在不仅是在非洲，全球其他地方基本上是品牌型为主导，山寨机没有机会了。」上述手机企业负责人表示，在市场初期，大家「乱棍打死老师傅」，但市场最终将走向品牌，「消费者的认知成熟了，品牌的引导力度在加强，市场以品牌为导向是必然的，包括印度、巴基斯坦、孟加拉这些新兴市场，如果只是做山寨机、靠打价格战，几乎已经没有机会了。」
                                                            </p>
                                                            <p>
                                                                <br />
                                    &emsp;&emsp;上述手机企业负责人还透露，目前，一些非洲国家政府为了阻止中国手机的大量进口，又新增了几项进口条款和认证门槛。
                                                            </p>
                                                            <p>
                                                                <br />
                                    &emsp;&emsp;就在大家争夺山寨手机这块蛋糕时，张霖所在公司开始专注打造品牌。起初，他们只在几个国家布点，如今销售网路已经遍布非洲。张霖所在公司同时经营高、中、低三档品牌，低端产品价格在9~70美元之间，中端价格区间则为100~400美元。
                                                            </p>
                                                            <p>
                                                                <br />
                                    &emsp;<strong>&emsp;品牌建设</strong>
                                                            </p>
                                                            <p>
                                                                <br />
                                    &emsp;&emsp;张霖说，在非洲卖手机，广告宣传很重要。他自豪地宣称，在非洲许多「上档次」的场合，都有他们的手机广告，公司今年将投入700万美元广告预算，在电视、电台、路牌、机场、商场、超市投放广告。
                                                            </p>
                                                            <p>
                                                                <br />
                                    &emsp;&emsp;然而，品牌建设不等于简单地广告投放。张霖说，以前品牌建设比较简单，只是做做广告、投个电视广告，而现在除了广告外，还要在自主研发上加大投入。
                                                            </p>
                                                            <p>
                                                                <br />
                                    &emsp;&emsp;渠道搭建方面，张霖表示，其公司传统渠道与自己创建的渠道并重，在不同国家会有不同的策略。传统渠道主要是卖场、大集市以及商场。在一些对高端手机需求量大的国家，张霖所在公司建立起VIP渠道，发展自己的专营店体系。
                                                            </p>
                                                            <p>
                                                                <br />
                                    &emsp;&emsp;除此之外，张霖所在公司还与南非当地运营商品牌合作，在迦纳、奈及利亚、乌干达、卢安达等国家建立起运营商渠道，做定制机，运营商下订单后，张霖公司交给国内手机生产商生产。张霖表示，出于避税需要或由于一些政府为吸引投资、增加就业主动抛出免税政策，其公司在部分国家建有自己的手机组装工厂。
                                                            </p>
                                                            <p>
                                                                <br />
                                    &emsp;&emsp;张霖说，刚开始做品牌的尴尬是得不到消费者的认可。「尽管我们很用心在开发，但很多当地人习惯地认为『中国=山寨』。」张霖表示，随后，他们的品牌形象有所改观，当地人开始称其产品「a little original」(有一点点原创) ，这让张霖的团队感到欣慰。
                                                            </p>
                                                            <p>
                                                                <br />
                                    &emsp;&emsp;让张霖烦恼的是，他们的产品热卖之后，也开始被拷贝。张霖说，其公司将更加重视知识产权方面的问题，在品牌公示期过后，将加大对拷贝者的打击力度。「这里知识产权保护也在慢慢改观，不少国家由于是前英法殖民地，具有这方面的法律意识。」
                                                            </p>
                                                            <p>
                                                                <br />
                                    &emsp;&emsp;张霖称，就像非洲其他对外开放的市场一样，例如衣服、药品等，手机市场目前还是中国商家占据绝大多数，韩国则是为数不多的进军非洲手机市场的其他国家之一。
                                                            </p>
                                                            <p>
                                                                <br />
                                    &emsp;&emsp;三星已经准备将自己在撒哈拉以南非洲的智能手机份额翻倍，在2013年达到20%，它将集中精力提供较便宜的手机。三星将其2015年非洲营收目标定在100亿美元。
                                                            </p>
                                                            <p>
                                                                <br />
                                    &emsp;&emsp;谈及自己的选择，张霖坦言，困惑在所难免，但非洲生活节奏比较慢，比起国内北上广这些城市，压力也小得多，「下班可以去河里游游泳，去林子里打打猎。」张霖说。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                资料来源：第一财经日报
                                                            </p>
                                    (责任编辑：admin)
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="dede_pages" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <ul class="pagelist" style="text-align:center;">
                                            </ul>
                                        </div>
                                        <div class="boxoff" style="margin:0px;padding:0px;font-size:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <strong>--------------------------------------------------------------------</strong>
                                        </div>
                                    </p>
                                    <p>
                                        <br />
                                    </p>`
                                    }
                                },
                                {
                                    id: 2,
                                    str: 'news',
                                    tagId: 'companyNews',
                                    picUrl: 'static/news_01.jpg',
                                    headTit: '传统GG触控面板需求衰减　台厂面临挑战',
                                    headTime: '日期：2013-08-21 14:12:43',
                                    intro: '根据 DIGITIMES Research 观察，随着苹果(Apple) iPhone 4 /4S及旧款9.7寸 iPad 分别进入产品生命周期尾声，过去台厂极为倚重的苹果传统玻璃对玻璃全贴合式(GG)触控面板需求也将随之式微，且由...',
                                    detail: {
                                        content: `<p>
                                        <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <h2>
                                                传统GG触控面板需求衰减&emsp;台厂面临挑战
                                            </h2>
                                        </div>
                                        <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            时间:2013-08-21 14:09来源:&nbsp;作者:&nbsp
                                        </div>
                                        <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            根据 DIGITIMES Research 观察，随着苹果(Apple) iPhone 4 /4S及旧款9.7寸 iPad 分别进入产品生命周期尾声，过去台厂极为倚重的苹果传统玻璃对玻璃全贴合式(GG)触控面板需求也将随之式微，且由
                                        </div>
                                        <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <table width="100%" style="margin:0px;padding:0px;">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <p>
                                                                &emsp;&emsp;&emsp;根据 DIGITIMES Research 观察，随着苹果(Apple) iPhone 4 /4S及旧款9.7寸 iPad 分别进入产品生命周期尾声，过去台厂极为倚重的苹果传统玻璃对玻璃全贴合式(GG)触控面板需求也将随之式微，且由于苹果转向 In-Cell 内嵌式触控面板及DITO双面ITO薄膜触控，并由日厂生产，在其他客户订单需求及毛利皆不及苹果状况下，台厂难免面临挑战。
                                                            </p>
                                                            <p>
                                                                <br />
                                    &emsp;&emsp;&emsp;DIGITIMES Research预估， 2013年第三季台厂整体手机及平板电脑用触控面板出货量将因此分别较第二季下滑19.7%及28.0%。虽台厂2012年即已预见此状况，积极转向 NB 用大尺寸触控面板生产，但第三季将面临早期 Windows 8 机种市场吸引力及价格竞争力不足以致库存堆积情形。面对此挑战，台湾面板厂友达及群创分别推出低价 NB 用触控面板，并搭配TFT LCD销售，以提高触控NB的价格竞争力。然而尽管如此，预估第三季整体台厂NB用触控面板仍将略为衰退2.1%。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;&emsp;2013下半年台湾触控面板产业主要成长动力除NB用触控面板外，尚包括新款 Kindle Fire 及Nexus 7平板电脑用 OGS 触控面板。然而随着客户对价格要求越来越严苛，此二机种均将面对陆厂莱宝及蓝思旺的挑战，另陆厂欧菲光亦积极研发金属网格(metal mesh)薄膜式触控面板，并已打入联想 NB 供应链，在NB用触控面板亦将正面以价格挑战台厂。预估下半年陆厂占全球平板电脑用触控面板出货比重将突破五成，且在NB用触控面板市占率也将突破一成。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p align="center">
                                                                <img border="0" alt="" src="http://www.mfpcb.com/uploads/allimg/c130822/13M11K5Q6050-12024.jpg" />
                                                            </p>
                                                            <p>
                                                                <br />
                                    全球手机用触控面板出货量变化
                                                            </p>
                                    (责任编辑：admin)
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                    <br />
                                        </div>
                                        <div class="dede_pages" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        </div>
                                    </p>
                                    <p>
                                        <br />
                                    </p>`
                                    }
                                },        
                                {
                                    id: 3,
                                    str: 'news',
                                    tagId: 'companyNews',
                                    picUrl: 'static/left.png',
                                    headTit: '张鸿明：PCB厂Q4可望重启扩产',
                                    headTime: '日期：2013-08-21 13:56:2',
                                    intro: '川宝张鸿明：PCB厂Q4可望重启扩产 川宝（1595）董事长张鸿明昨日表示，从客户端的状况来看，下半年景气较为保守，PCB客户第3季放缓扩产速度，产能开出约递延一季，不过PCB厂也看好...',
                                    detail: {
                                        content: 
                                            `<p>
                                            <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                                <h2>
                                                    张鸿明：PCB厂Q4可望重启扩产
                                                </h2>
                                            </div>
                                            <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                                时间:2013-08-21 13:56来源:&nbsp;作者:&nbsp;点击:&nbsp;111 次
                                            </div>
                                            <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                                川宝张鸿明：PCB厂Q4可望重启扩产 川宝（1595）董事长张鸿明昨日表示，从客户端的状况来看，下半年景气较为保守，PCB客户第3季放缓扩产速度，产能开出约递延一季，不过PCB厂也看好
                                            </div>
                                            <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                                <table width="100%" style="margin:0px;padding:0px;">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <p>
                                                                    &emsp;&emsp;&emsp;川宝张鸿明：PCB厂Q4可望重启扩产
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &emsp;&emsp;&emsp;川宝（1595）董事长张鸿明昨日表示，从客户端的状况来看，下半年景气较为保守，PCB客户第3季放缓扩产速度，产能开出约递延一季，不过PCB厂也看好圣诞节之后的2014年需求，第4季可望重启扩产。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &emsp;&emsp;&emsp;川宝是亚洲最大曝光机厂，80％营收比重来自于PCB硬板厂，董事长张鸿明指出，大陆十二五规划明年将进入尾声，在人力短缺之际，工资上涨成为趋势，预估员工薪资将成长为2倍，随着PCB生产线路更加精细，客户面临愈来愈大的生产瓶颈，自动化生产线将成为主流，除了新厂会导入自动化设备之外，旧厂因应生产轻薄短小的电子产品，也会产生汰换设备的需求，因此虽然PCB产业是历史悠久的老产业，但未来的需求仍看好。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &emsp;&emsp;&emsp;不过张鸿明也坦言，受到景气冲击，从与客户沟通的情况来看，电子产业下半年景气相对保守，2014年看得乐观一些，因此第3季客户的确是放缓扩产速度，时间约递延一季，然而因应圣诞节之后的需求，第4季可望重启扩产。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    资料来源：工商时报
                                                                </p>
                                        (责任编辑：admin)
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                        <br />
                                            </div>
                                            <div class="dede_pages" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            </div>
                                        </p>
                                        <p>
                                            <br />
                                        </p>`
                                    }
                                },  
                                {
                                    id: 4,
                                    str: 'news',
                                    tagId: 'companyNews',
                                    picUrl: 'static/news_no.gif',
                                    headTit: '生益科技中期营收30亿 净利1.97亿',
                                    headTime: '日期：2013-08-21 13:55:18',
                                    intro: '生益科技（600183）公布2013年半年报，上半年公司实现营业收入30.45亿元，同比增长1.15%...',
                                    detail: {
                                        content: 
                                            `<p>
                                            <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                                <h2>
                                                    生益科技中期营收30亿 净利1.97亿
                                                </h2>
                                            </div>
                                            <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                                时间:2013-08-21 13:55来源:&nbsp;作者:&nbsp;点击:&nbsp;102 次
                                            </div>
                                            <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                                <table width="100%" style="margin:0px;padding:0px;">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <p>
                                                                    &emsp;&emsp;&emsp;8月20日晚间，生益科技（600183）公布2013年半年报，上半年公司实现营业收入30.45亿元，同比增长1.15%；归属于上市公司股东的净利润1.97亿元，同比增长5.64%；基本每股收益0.14元。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    资料来源：证券时报网
                                                                </p>
                                        (责任编辑：admin)
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
                                    id: 5,
                                    str: 'news',
                                    tagId: 'companyNews',
                                    picUrl: 'static/news_no.gif',
                                    headTit: '明导 Valor高级顾问在深圳将进行现场演讲',
                                    headTime: '日期：2013-08-21 13:46:49',
                                    intro: '市场呼唤新一代仓储系统，一种能提供专业级仓储管理，通常表现为能管理互为关连的多个仓库，且能包括线上库存、线边库存的系统。显然，这种系统必须可与ERP对接，但更重要的是...',
                                    detail: {
                                        content: 
                                            `<p>
                                            <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                                <h2>
                                                    明导 Valor高级顾问在深圳将进行现场演讲
                                                </h2>
                                            </div>
                                            <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                                时间:2013-08-21 13:46
                                            </div>
                                            <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                                市场呼唤新一代仓储系统，一种能提供专业级仓储管理，通常表现为能管理互为关连的多个仓库，且能包括线上库存、线边库存的系统。显然，这种系统必须可与ERP对接，但更重要的是
                                            </div>
                                            <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                                <table width="100%" style="margin:0px;padding:0px;">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <p>
                                                                    &emsp;&emsp;&emsp;&emsp;市场呼唤新一代仓储系统，一种能提供专业级仓储管理，通常表现为能管理互为关连的多个仓库，且能包括线上库存、线边库存的系统。显然，这种系统必须可与ERP对接，但更重要的是，该系统必须要与实际物料消耗点连接，能够按每个工站记录物料使用和抛料的详细数据，从而实现精益的JIT式物料配送。
                                                                </p>
                                                                <p>
                                                                    &emsp;&emsp;&emsp;&emsp;紧跟市场需求，明导在该演讲上将着重分析以确保整个营运中库存精确无误，物流高效，配送及时，且消除未预期的缺料断线，杜绝过量的物料库存为目标、经济实用、可直接连接到线上、线边的多地点仓储管理系统的关键要素和实现需求。
                                                                </p>
                                                                <p>
                                                                    <br />
                                        &emsp;&emsp;&emsp;&emsp;演讲题目：【明察秋毫 全面彻底掌控物料】<br />
                                        &emsp;&emsp;&emsp;&emsp;日期：2013年8月27日<br />
                                        &emsp;&emsp;&emsp;&emsp;时间：15:00 - 15:25<br />
                                        &emsp;&emsp;&emsp;&emsp;地点：深圳会展中心1号馆A-1R10
                                                                </p>
                                                                <p>
                                                                    <br />
                                        &emsp;&emsp;&emsp;&emsp;通过现场听取演讲，可预约明导或移步参观明导在其分销商伯东(Hakuto)展位#B-1B35设立的相应产品演示且可针对其它做深入了解，包括：
                                                                </p>
                                                                <p>
                                                                    <br />
                                        •&nbsp;一步到位的工程设计<br />
                                        •&nbsp;最前沿的可组装性分析技术<br />
                                        •&nbsp;最前沿的SMT、测试和检查编程技术<br />
                                        •&nbsp;突破性的物料验证及追溯技术<br />
                                        •&nbsp;精益的适时适量（JIT）物料管理 – 为您降低高达75%的物料相关成本<br />
                                        •&nbsp;车间弹性–管理随时变更及无法预测的需求<br />
                                        •&nbsp;实时品管
                                                                </p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                        <br />
                                            </div>
                                            <div class="dede_pages" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            </div>
                                        </p>
                                        <p>
                                            <br />
                                        </p>`
                                    }
                                },    
                                {
                                    id: 6,
                                    str: 'news',
                                    tagId: 'companyNews',
                                    picUrl: 'static/news_no.gif',
                                    headTit: '大陆城市平板电脑整体使用率已达三成',
                                    headTime: '日期：2013-08-21 14:12:43',
                                    intro: '大陆一项调查显示，在平板电脑价格不断下滑，同时在中国，「山寨平板电脑」蓬勃发展等因素下，在大陆的城市人口中，平板电脑的整体使用率，已经达到百分之三十。 这项调查也发...',
                                    detail: {
                                        content: 
                                            `<p>
                                            <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                                <h2>
                                                    大陆城市平板电脑整体使用率已达三成
                                                </h2>
                                            </div>
                                            <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                                时间:2013-08-21 13:30
                                            </div>
                                            <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                                大陆一项调查显示，在平板电脑价格不断下滑，同时在中国，「山寨平板电脑」蓬勃发展等因素下，在大陆的城市人口中，平板电脑的整体使用率，已经达到百分之三十。 这项调查也发
                                            </div>
                                            <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                                <table width="100%" style="margin:0px;padding:0px;">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <p>
                                                                    &nbsp;&nbsp;&nbsp; &emsp;大陆一项调查显示，在平板电脑价格不断下滑，同时在中国，「山寨平板电脑」蓬勃发展等因素下，在大陆的城市人口中，平板电脑的整体使用率，已经达到百分之三十。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &emsp;&emsp;&emsp;这项调查也发现，平板电脑用户，已经把平板电脑，当做他们休闲娱乐活动的首选设备。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &emsp;&emsp;&emsp;调查指出，在大陆「一线到五线」的城市人口中，平板电脑的整体使用率达到百分之三十；而在高收入、高学历的社会阶层，还有部分学生人群中，平板电脑的使用率，更高达百分之四十五左右。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &emsp;&emsp;&emsp;此外，百分之八十四的受访者指出，他们最常使用平板电脑观看网路影片，利用平板电脑阅读电子杂志的比例，也已经接近百分之五十，而且阅读频率与阅读时间，也都多于纸本杂志。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &emsp;&emsp;&emsp;调查指出，平板电脑的重要性，已经与个人电脑（PC），以及智慧型手机，形成「三足鼎立」之势，而且重要性还在不断增加。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    资料来源：工商时报
                                                                </p>
                                        (责任编辑：admin)
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
                                    id: 7,
                                    str: 'news',
                                    tagId: 'companyNews',
                                    picUrl: 'static/news_no.gif',
                                    headTit: '豪赌面板京东方前三季约赚13亿',
                                    headTime: '日期：2013-08-21 13:28:34',
                                    intro: '昨日，京东方发布2013年上半年财务报告及前三季度业绩预告，公告显示，2013年上半年，京东方实现大幅持续盈利，营业总收入162.5亿元，较去年同期增长69.16%，净利润达8.6亿元；2013年...',
                                    detail: {
                                        content: 
                                            `<p>
                                            <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                                <h2>
                                                    豪赌面板京东方前三季约赚13亿
                                                </h2>
                                            </div>
                                            <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                                时间:2013-08-21 13:28
                                            </div>
                                            <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                                昨日，京东方发布2013年上半年财务报告及前三季度业绩预告，公告显示，2013年上半年，京东方实现大幅持续盈利，营业总收入162.5亿元，较去年同期增长69.16%，净利润达8.6亿元；2013年
                                            </div>
                                            <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                                <table width="100%" style="margin:0px;padding:0px;">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <p>
                                                                    &nbsp;&nbsp;&nbsp; &nbsp;昨日，京东方发布2013年上半年财务报告及前三季度业绩预告，公告显示，2013年上半年，京东方实现大幅持续盈利，营业总收入162.5亿元，较去年同期增长69.16%，净利润达8.6亿元；2013年第三季度，预计京东方可实现净利润4 .4-5 .4亿元，同比增长191%-257%，前三季度净利润总和将达13-14亿元。在豪赌面板600亿，又抛出460亿元的天量融资方案之后，这份报表似乎可以让京东方更有一些底气。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    <br />
                                        &emsp;&emsp;据京东方介绍，2013年上半年，京东方已投产的4条生产线满产满销，持续盈利，规模化经营效果凸显；同时，得益于持续的产品结构优化，及高附加值产品比重的进一步提高，京东方主营业务毛利率逐季度环比提升，上半年达23 .45%，远高于行业毛利率水平。此外，由于市场需求相对旺盛，京东方各类新产品不断推出，使得上半年整体营收大幅增加，预计第三季度仍可实现净利润4.4-5.4亿，居全球业内领先水平。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &emsp;&emsp;D isplaysearch数据显示，全球显示产品年市场总额2012年为1231亿美金，2020年预计为1945亿美金，平均年复合增长率为5.9%。其中a-Si T FT -LC D仍为主流，在高性能细分市场上仍有30%的复合增长率；LT PS T FT -LCD年复合成长率为19%；O xide T FT- L C D为50%；L T P SA M O L E D为17%；O xide A M O LED为230%。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &emsp;&emsp;资料显示，京东方近期募集的460亿元主要用于三条生产线建设，分别是合肥8.5代线、鄂尔多斯(6.66, -0.07, -1.04%)A M -O LED项目建设、重庆8.5代线建设。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    资料来源：南方都市报
                                                                </p>
                                        (责任编辑：admin)
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
                                    id: 8,
                                    str: 'news',
                                    tagId: 'companyNews',
                                    picUrl: 'static/news_no.gif',
                                    headTit: '丹邦科技：柔性封装板已可小批量生产',
                                    headTime: '日期：2013-08-21 13:27:36',
                                    intro: '8月20日晚间，丹邦科技披露半年报，上半年公司实现营收1.18亿元，同比增长4.64%，净利润2000万元，同比下降6.86% 。报告期内，公司FPC、COF柔性封装基板及COF产品等各项业务发展基本稳定...',
                                    detail: {
                                        content: 
                                            `<p>
                                            <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                                <h2>
                                                    丹邦科技：柔性封装板已可小批量生产
                                                </h2>
                                            </div>
                                            <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                                时间:2013-08-21 13:27
                                            </div>
                                            <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                                8月20日晚间，丹邦科技披露半年报，上半年公司实现营收1.18亿元，同比增长4.64%，净利润2000万元，同比下降6.86% 。报告期内，公司FPC、COF柔性封装基板及COF产品等各项业务发展基本稳定
                                            </div>
                                            <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                                <table width="100%" style="margin:0px;padding:0px;">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <p>
                                                                    &nbsp;&nbsp;&nbsp; 8月20日晚间，丹邦科技披露半年报，上半年公司实现营收1.18亿元，同比增长4.64%，净利润2000万元，同比下降6.86% 。报告期内，公司FPC、COF柔性封装基板及COF产品等各项业务发展基本稳定。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;&nbsp;&nbsp; 针对市场关注的募投项目进展情况，公司表示，目前基本完成了所有设备的安装调试工作，环保设施初步验收合格，取得了排污许可证，培训了一批工人，为下半年的投产奠定了基础。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;&nbsp;&nbsp; 作为“可穿戴设备”概念股，公司柔性板概念一直是市场关注的焦点。公司表示，上半年“三维柔性基板及工艺技术研发与产业化”项目，已按任务合同书完成各时间节点的研发任务，可以完成柔性封装基板的小批量生产。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;&nbsp;&nbsp; 据公告表述，公司目前主导产品包括FPC、COF柔性封装基板、COF产品，且生产上述产品基材FCCL也均为公司自身进行配套生产，公司目前已经形了“FCCL→FPC”、“FCCL→COF柔性封装基板→COF产品”的较为完整产业链。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    <br />
                                        &nbsp;&nbsp;&nbsp; 同时，公司已启动向特定对象非公开发行股票用于投资“微电子级高性能聚酰亚胺研发与产业化项目”，研发与生产微电子级高性能聚酰亚胺薄膜（PI膜），而PI膜是生产FCCL的重要原料之一。该项目顺利实施后，公司的产业链将进一步向上游延伸，最终形成“PI膜→FCCL→FPC”、“PI膜→FCCL→COF柔性封装基板→COF产品”的更加完善的产业链结构。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;&nbsp;&nbsp; 丹邦科技表示，PI膜项目实施后，一方面能够通过对源头PI膜、FCCL生产的控制，进一步提升FPC、COF柔性封装基板及COF产品等产品的质量，进而推动整个产品线的升级，另一方面，终端COF产品的生产和销售有助于公司更好的了解市场发展趋势，从而能够进行更有针对性的研发，减少研发从实验室到产业化的不确定性，缩短产品及工艺改良周期。因此公司将通过PI膜项目的实施，形成材料技术带动深加工技术的局面，进一步提升产品品质，缩短产品及工艺改良周期，最终不断地提升公司产品的竞争力。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    资料来源：中国证券网
                                                                </p>
                                        (责任编辑：admin)
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
                                    id: 9,
                                    str: 'news',
                                    tagId: 'companyNews',
                                    picUrl: 'static/news_no.gif',
                                    headTit: '超声电子上半年净利润同比增长-64.06%',
                                    headTime: '日期：2013-08-21 13:26:25',
                                    intro: '...',
                                    detail: {
                                        content: 
                                            `<p>
                                            <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                                <h2>
                                                    超声电子上半年净利润同比增长-64.06%
                                                </h2>
                                            </div>
                                            <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                                时间:2013-08-21 13:26
                                            </div>
                                            <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                                <table width="100%" style="margin:0px;padding:0px;">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <p>
                                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 超声电子8月17日公布2013年中报，公司实现营业收入167634.40万元，同比增长-9.13%；实现归属于上市公司股东的净利润4506.20万元，同比增长-64.06%。基本每股收益0.1020元；每股现金流量0.476元；每股净资产4.2658元；净资产收益率2.35%。2013年半年度利润不分配。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    资料来源：东方财富网
                                                                </p>
                                        (责任编辑：admin)
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
                                }                                                                                                                                                                                                                                                                                                  
                            ]
                        }                      
                    )
                }
            break
            case 'hotNews':
                resolve(
                    {
                        state: 1,
                        total: 4,
                        data: [
                            {
                                id: 1,
                                str: 'news',
                                tagId: 'hotNews',
                                picUrl: 'static/left.png',
                                headTit: '中兴手机称将向中高端转型 针对中国市场研发',
                                headTime: '日期：2013-08-21 13:25:26',
                                intro: '8月21日消息，刚刚上任的中兴通讯(17.08, 0.12, 0.71%)高级副总裁、手机事业部中国区总经理叶卫民接受媒体专访时表示，中兴通讯将整合旗下研发中心，专门针对中国市场需求研发手机，...',
                                detail: {
                                    content: `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            中兴手机称将向中高端转型 针对中国市场研发
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        时间:2013-08-21 13:25来源:&nbsp
                                    </div>
                                    <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        8月21日消息，刚刚上任的中兴通讯(17.08, 0.12, 0.71%)高级副总裁、手机事业部中国区总经理叶卫民接受媒体专访时表示，中兴通讯将整合旗下研发中心，专门针对中国市场需求研发手机，
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <table width="100%" style="margin:0px;padding:0px;">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p>
                                                            &nbsp;&nbsp; 8月21日消息，刚刚上任的中兴通讯(17.08, 0.12, 0.71%)高级副总裁、手机事业部中国区总经理叶卫民接受媒体专访时表示，中兴通讯将整合旗下研发中心，专门针对中国市场需求研发手机，并且，中兴通讯将不在推出过多机型，而是向中高端转型。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            <strong>&emsp;&emsp;针对中国市场专门研发手机</strong>
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;叶卫民透露，过去中兴通讯手机的研发都是按照大品牌的思路，机型都是面向全球，中国客户、美国客户的需求和其他国家的需求都在这个大平台上来做，都是一种机型，这种局面将改变。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;他表示，这样不能够非常及时的、快速的满足本地化的需求，因此，中兴通讯现在开始针对中国市场专门有中国研发中心，主要针对中国的三大运营商以及中国消费者特别的需求。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;据悉，中兴通讯手机业务将专门成立一个中国研发团队，倾向于为年轻化、有活力的消费主体研发，这样不会受到其他不同的国家别的需求的干扰，会更快速地反应，把研发周期缩短。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            <br />
                                &emsp;&emsp;“大家看我们以前的手机可能显得比较正统一点的，颜色比较偏黑、四四方方的，我觉得现在我们要改变形象，我们要有亲和感，不要像以前那样，市场变化太快了，我们只有快速决策，只有这样迅速反应才能满足市场的步伐，才能满足市场的节奏”，叶卫民如此说。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;<strong>&emsp;向中高端智能机转型</strong>
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;叶卫民同时表示，2011年中兴通讯非智能向智能机转型，去年是智能机大发展的一年，今年中兴通讯的目标是想由低端智能机向中高端智能机转型。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;例如过去几年，中兴通讯每年机型都超过300款，今年大概中兴通讯在全球所有的机型加在一起也就有一百多款；在高端机领域，在中国市场今年下半年也就是推2-3款。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;但同同时表示，在转型过程中，并代表彻底放弃低端机，中兴通讯在低端机方面也还会做一部分，但是也要培养像中高端机这样的能力，这个不仅仅是产品研发的能力，更重要的是营销的能力，渠道的能力。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            资料来源：新浪科技
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                (责任编辑：admin)
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
                                id: 2,
                                str: 'news',
                                tagId: 'hotNews',
                                picUrl: 'static/left.png',
                                headTit: '金安国纪中期净利1958万 同比下降35%',
                                headTime: '日期：2013-08-21 13:25:26',
                                intro: '日期：2013-08-21 13:22:56',
                                detail: {
                                    content: `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            金安国纪中期净利1958万 同比下降35%
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        时间:2013-08-21 13:22
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <table width="100%" style="margin:0px;padding:0px;">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p>
                                                            &nbsp;&nbsp; 8月20日晚间，金安国纪（002636）发布2013年中报。报告期内，公司实现营业收入11.61亿元，较去年同期增长11.7%；归属于母公司的净利润为1958.22万元，同比下降35.09%。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;报告期内，包括各个子公司在内，公司生产了各类覆铜板1263.79万张，较去年同期增长28.22%。销售各类覆铜板1266.39万张，较去年同期增长31.86%；销售各类半固化片59.3万米，较去年同期下降35.77%。
                                                        </p>
                                                        <p>
                                                            <br />
                                &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            资料来源：中国台湾网
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                (责任编辑：admin)
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
                                str: 'news',
                                tagId: 'hotNews',
                                picUrl: 'static/left.png',
                                headTit: '川宝、牧德大涨 争PCB设备股王',
                                headTime: '日期：2013-08-20 16:21:40',
                                intro: 'PCB设备厂的股王川宝（1595），将于今（20）日举办法说会，不过，有趣的是，另一家PCB设备厂牧德（3563），近来挑战股王价位，昨日双双以80.1元作收。今日川宝法说会由董事长张鸿明...',
                                detail: {
                                    content: `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            川宝、牧德大涨 争PCB设备股王
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        时间:2013-08-20 16:21
                                    </div>
                                    <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        PCB设备厂的股王川宝（1595），将于今（20）日举办法说会，不过，有趣的是，另一家PCB设备厂牧德（3563），近来挑战股王价位，昨日双双以80.1元作收。今日川宝法说会由董事长张鸿明
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <table width="100%" style="margin:0px;padding:0px;">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; PCB设备厂的股王川宝（1595），将于今（20）日举办法说会，不过，有趣的是，另一家PCB设备厂牧德（3563），近来挑战股王价位，昨日双双以80.1元作收。今日川宝法说会由董事长张鸿明亲自主持，其对下半年看法备受外界关注。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 川宝以PCB曝光机设备为主，上半年表现亮丽，税后盈余1.56亿元，每股税后盈余（EPS）达4.04元。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 牧德是以PCB制程的光学检测设备为主，上半年税后盈余1.25亿元，每股税后盈余3.37元。&nbsp;<br />
                                以近3个月股价涨幅来看，川宝上涨逾16%、牧德则狂飙逾22%，外资近两日小幅买超牧德约200张；若以7月营收来看，牧德以8182万元连续第5个月创下单月历史新高，川宝7月营收1.38亿元，较6月1.78亿元减少。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 牧德总经理汪光夏年初时表示，今年以来，IC载板检测精密度需求提高，因此光学检测（AOI）需求大增，牧德除今年购置新竹厂办外，还计划在今年第4季推出外观检测设备上市，牧德也积极成为PCB软、硬板及IC载板等产品一条龙检测设备厂。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 川宝在7月底投资美国Maskless公司（MLI）500万美元，取得其12.1%股权，双方将进行无光罩直接成像曝光机设备技术合作开发及销售，主要着眼于跨足高阶无光罩直接成像曝光领域。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 此外，川宝也表示，PCB制程不断进步，在线宽及线距日益精密下，所以选择与美国（MLI）合作进行高阶生产设备的布局。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            资料来源：自由时报
                                                        </p>
                                (责任编辑：admin)
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
                                id: 4,
                                str: 'news',
                                tagId: 'hotNews',
                                picUrl: 'static/left.png',
                                headTit: '中国为iPhone创造巨大机遇：价格是关键',
                                headTime: '日期：2013-08-20 16:20:08',
                                intro: '根据市场研究公司Canalys的测算，iPhone目前在中国智能手机市场的份额位居第7。这意味着苹果公司丧失了一个巨大的机会：中国智能手机市场正在爆发，过去一年的销量翻了一番多...',
                                detail: {
                                    content: `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            中国为iPhone创造巨大机遇：价格是关键
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        时间:2013-08-20 16:20
                                    </div>
                                    <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        导语：美国CNNMoney网站今天刊登题为《中国是苹果iPhone的机遇之国》(China is Apple's land of iPhone opportunity)的评论文章称，由于中国拥有全球最大的智能手机市场，而且增长速度十分迅猛，
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <table width="100%" style="margin:0px;padding:0px;">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p>
                                                            导语：美国CNNMoney网站今天刊登题为《中国是苹果iPhone的机遇之国》(China is Apple's land of iPhone opportunity)的评论文章称，由于中国拥有全球最大的智能手机市场，而且增长速度十分迅猛，为iPhone创造了巨大的机遇，但能否实现亲民的价格，并与中国移动建立合作关系，却成为这种机遇能否成为现实的关键所在。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            <br />
                                &emsp;&emsp;以下为文章全文：
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;苹果(507.74, 5.41, 1.08%)公司已经习惯了智能手机王者的身份，但在中国，iPhone却很失意。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;根据市场研究公司Canalys的测算，iPhone目前在中国智能手机市场的份额位居第7。这意味着苹果公司丧失了一个巨大的机会：中国智能手机市场正在爆发，过去一年的销量翻了一番多。全球智能手机销量中，目前有三分之一来自中国，超过美国、印度、日本和英国的总和。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;但凡有iPhone销售的地方，苹果公司在当地的智能手机市场几乎不是第一就是第二，但这些市场多数都已经饱和。例如，美国去年的智能手机销量增长了36%，虽然仍然保持良性增长，但却远远落后于中国。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;“智能手机行业正在走向成熟：增长已经从高端转向大众市场，而这恰恰是苹果公司欠缺的。”投资公司Indigo Equity Research分析师尼克·兰戴尔(13.79, -0.03, -0.22%)-米尔斯(Nick Landell-Mills)在上月的报告中说。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;苹果公司可能会在下月出台中国问题的解决方案：该公司有望于9月10日推出传言已久的iPhone 5C低价智能手机。苹果公司CEO蒂姆·库克(Tim Cook)并未在上月的财报电话会议上承认该公司正在开发iPhone 5C，但他的确表示，他们“会十分小心地保持高品质”。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;高品质的发展模式在美国和其他地方的确适用，但在中国，价格才是关键。与美国不同，中国的手机通常得不到运营商的补贴，这就导致iPhone等高端设备超出了很多中国消费者的承受范围。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;“苹果公司的产品很高端，很高价。”投资公司BGC Partners分析师科林·吉利斯(ColinGillis)说，“但在中国，苹果公司需要适应市场。最明确的方式就是开发一款人们买得起的产品。但该公司尚未采取这种措施。”
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;所以，中国消费者才转而购买三星的公司的低价设备。当然，联想、宇龙和中兴等本土厂商的产品也很受青睐。这些公司都已经在中国推出了价格合理的手机，并取得了不俗的份额，而且仍在不断降价。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;他怀疑，苹果公司的“廉价”iPhone售价仍将在400美元左右，这仍然不足以引爆中国市场。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;“你想想看：如果苹果公司售价400美元，其他公司都降到200美元，将会发生什么事情？”吉利斯说。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;即使苹果公司推出价格足以吸引中国消费者的手机，该公司仍将面临一大障碍：苹果公司迟迟未能与该国第一大移动运营商中国移动达成交易。这家公司拥有超过65%的中国手机用户。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;苹果公司与中国移动在补贴问题上存在争议，而投资公司Trefis认为，廉价iPhone更有可能吸引中国移动。Trefis说：“苹果公司的潜力巨大。但要实现这一点，他们就需要一款更便宜的iPhone。”
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            资料来源：新浪微博
                                                        </p>
                                (责任编辑：admin)
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
                        ]
                    }
                ) 
            break  
            case 'industryInformation':
                resolve(
                    {
                        state: 1,
                        total: 4,
                        data: [
                            {
                                id: 1,
                                str: 'news',
                                tagId: 'industryInformation',
                                picUrl: 'static/news_no.gif',
                                headTit: '第三季旺季落空 PCB厂扩产减速',
                                headTime: '日期：2013-08-20 15:43:14',
                                intro: '今年多家PCB厂恢复扩建新厂动作，然而受到景气冲击，精成科 （6191） 川亿重庆厂产能延至本季开出，预计9月才达第一阶段满载产能；F-泰鼎 （4927） 维持本季营收成长5～15％目标，但...',
                                detail: {
                                    content: `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            第三季旺季落空 PCB厂扩产减速
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        时间:2013-08-20 15:43来源:&nbsp;作者:&nbsp;点击:&nbsp;123 次
                                    </div>
                                    <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        今年多家PCB厂恢复扩建新厂动作，然而受到景气冲击，精成科 （6191） 川亿重庆厂产能延至本季开出，预计9月才达第一阶段满载产能；F-泰鼎 （4927） 维持本季营收成长5～15％目标，但
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <table width="100%" style="margin:0px;padding:0px;">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 今年多家PCB厂恢复扩建新厂动作，然而受到景气冲击，精成科 （6191） 川亿重庆厂产能延至本季开出，预计9月才达第一阶段满载产能；F-泰鼎 （4927） 维持本季营收成长5～15％目标，但是新厂一期目前仅开通瓶颈段产能支持旧厂，前段至后段一贯化制程尚未全线量产，也较预期更晚。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 由于Windows 8并未如预期带动换机潮，第三季旺季效应落空，多家NB厂下修全年NB出货目标，拖累上游PCB板厂的扩产进度，产能开出时间点也比预期还要晚。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 去年第四季新增产能的精成科指出，受NB产业景气低档冲击，川亿重庆厂第一阶段产能延至本季开出，目前月产能约50万呎，公司规画在9月，将产能提升至60万呎，比规画的时间点晚。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 照精成科原先规画，川亿重庆产能优先分配给NB，支持当地NB代工厂需求，去年第四季就该投满60万呎产能，今年第二季再增加60万呎设备产能，使其总产能上看120万呎。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; F-泰鼎二厂全制程产能也可能延后，尽管F-泰鼎没有松口新产能延后开出，不过该公司原先规画新厂首季50万呎产能将在8月投入量产，但时序已进入8月下旬，目前只有瓶颈段设备导入量产，以求先支持旧厂产能。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; F-泰鼎旧厂经过改造，加上新厂瓶颈段设备支持，旧厂产能可望再提升一些，因此F-泰鼎仍维持本季营收成长5～15％的内部目标，全年营收成长10～15％的目标也没有松动。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 健鼎 （3044） 湖北仙桃厂对第二阶段的产能投入时程较为宽松，快则第9月慢则10月、第四季，会把产能从40万呎提升至80万呎，产能增幅高达一倍。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 业界表示，景气低档之际，设备价格也会比较低，有利于压缩扩厂成本，不失为一个绝佳的扩产时机点。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 不过下半年景气逊于预期是不争的事实，除了软板厂确定本季营收优于第二季，PCB硬板厂对本季景气多半抱持小幅成长至持平的看法，旺季不旺已成定局。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            资料来源：工商时报
                                                        </p>
                                (责任编辑：admin)
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                <br />
                                    </div>
                                    <div class="dede_pages" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    </div>
                                </p>
                                <p>
                                    <br />
                                </p>`
                                }   
                            },
                            {
                                id: 2,
                                str: 'news',
                                tagId: 'industryInformation',
                                picUrl: 'static/left.png',
                                headTit: 'CPCA走访华东地区第三届 “民族品牌企业”提名企',
                                headTime: '日期：2013-08-19 13:13:19 ',
                                intro: '今年多家PCB厂恢复扩建新厂动作，然而受到景气冲击，精成科 （6191） 川亿重庆厂产能延至本季开出，预计9月才达第一阶段满载产能；F-泰鼎 （4927） 维持本季营收成长5～15％目标，但...',
                                detail: {
                                    content: `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            CPCA走访华东地区第三届 “民族品牌企业”提名企
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        时间:2013-08-19 13:13来源:&nbsp;
                                    </div>
                                    <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        【 PCB中国网 】8月19讯，由中国印制电路行业协会（CPCA）主办的，中国印制电路行业 第三届 "民族品牌企业”评选活动已正式拉开帷幕，8月13-16日中国印制电路行业协会协同我网(PCB中国
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <table width="100%" style="margin:0px;padding:0px;">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            <img border="0" alt="" src="http://www.pcbchinanet.com/Data/201308/images/DSC04332_%E5%89%AF%E6%9C%AC.jpg" width="786" height="535" style="width:573px;height:341px;" />
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp;&nbsp; 【<a class="akey" href="http://www.pcbchinanet.com/" target="_blank">PCB中国网&nbsp;</a>】8月19讯，由中国印制电路行业协会（CPCA）主办的，中国印制电路行业 第三届 "民族品牌企业”评选活动已正式拉开帷幕，8月13-16日中国印制电路行业协会协同我网(PCB中国网），走访了11家优秀民族品牌提名企业--苏州市惠利华电子有限公司、维嘉数控科技（苏州）有限公司、江苏广信感光新材料股份有限公司、扬州永力电子有限公司、镇江华印电路板有限公司、常州市双进电子有限公司、常州紫寅电子电路有限公司、常州市超顺电子有限公司、田菱精细化工（昆山）有限公司、昆山东威电镀设备技术有限公司、上海飞为自动化系统有限公司。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 中国印制电路产业自2001年以来保持了持续的发展，并成为世界最大的印制电路生产地区，涌现了近3000家印制电路板及印制电路板生产相关联的覆铜箔板、专用材料、专用设备与仪器、环保洁净和服务机构等。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 印制电路是一个高度市场化、国际化的产业，在经济全球化日趋明显、市场竞争日益激烈的今天，中国印制电路企业既面临着良好的机遇，又面对着巨大的挑战。今天，PCB及PCB相关产品的工艺、技术、材料等逐步趋同，而市场竞争中企业的“软实力”的作用变得更加明显，优良的企业文化与体现企业文化的高辨识度的企业品牌，是“软实力”的重要内容。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 这次的走访进一步了解了企业的经营状况，一直以来PCB行业里，日、韩、欧美等国在科技创新和技术上一直领先于我国，民族企业是国家经济的基础和“稳定器”，是国家经济发展的“驱动器”，这次“优秀民族品牌”活动对于我国PCB行业的发展与崛起具有重要的意义。现今，中国电子电路产业逐步走向稳定发展和转型提升，全球经济环境的不确定性依然突出，因此中国印制电路企业如何构建具有竞争力的、积极高效的优秀团队，保持持续发展与盈利，在新一轮的竞争中胜出是许多管理者目前最为关心的管理挑战。品牌建设与企业文化发展无疑是关键方向之一。这次的走访每家企业就目前企业的发展状况和未来发展的目标以及如果打造“优秀民族品牌”都谈了自己的观点，更多信息请继续关注。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                (责任编辑：admin)
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                <br />
                                    </div>
                                    <div class="dede_pages" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    </div>
                                </p>
                                <p>
                                    <br />
                                </p>`
                                }                          
                            },   
                            {
                                id: 3,
                                str: 'news',
                                tagId: 'industryInformation',
                                picUrl: 'static/news_03.jpg',
                                headTime: '日期：2013-08-19',
                                headTit: '中国将对IBM等三家美国公司展开安全调查',
                                intro: '据《华尔街日报》17日报道，中国政府机构称，将就安全问题对美国三大科技公司展开调查，三家公司分别是计算机和服务巨头国际商业机器公司(IBM)、存储设备公司EMC和全球领先的企业...',
                                detail: {
                                    content: `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            中国将对IBM等三家美国公司展开安全调查
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        时间:2013-08-19 10:59来源:&nbsp;作者:&nbsp;点击:&nbsp;93 次
                                    </div>
                                    <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        据《华尔街日报》17日报道，中国政府机构称，将就安全问题对美国三大科技公司展开调查，三家公司分别是计算机和服务巨头国际商业机器公司(IBM)、存储设备公司EMC和全球领先的企业
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <table width="100%" style="margin:0px;padding:0px;">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p align="center">
                                                            <img border="0" alt="" src="http://www.mfpcb.com/uploads/allimg/c130822/13M11K3L4030-332Y.jpg" />
                                                        </p>
                                                        <p align="center">
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp;&nbsp; 据《华尔街日报》17日报道，中国政府机构称，将就安全问题对美国三大科技公司展开调查，三家公司分别是计算机和服务巨头国际商业机器公司(IBM)、存储设备公司EMC和全球领先的企业软件巨头甲骨文公司(Oracle)。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            <br />
                                &nbsp;&nbsp;&nbsp;&nbsp; 这听起来像是自食其果的桥段，但绝非偶然。此前有媒体消息称，美国政府对中国网络设备巨头华为高度防范，对华为展开1年多时间的安全调查。美国国会委员会和奥巴马政府均表示，由于担心华为设备可能被中国政府用于间谍活动，美国部分政府机构未批准使用这些设备。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            <br />
                                &nbsp;&nbsp;&nbsp;&nbsp; 而美国政府对华为的多次安全审查最终也并未证明其怀疑。华为坚称公司设备安全可信，公司并非政府的间谍工具。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            <br />
                                &nbsp;&nbsp;&nbsp;&nbsp; 近日，中国则表示，将对美国三大科技企业展开调查，分别是电脑和服务巨头国际商业机器公司(IBM)、存储设备公司EMC和全球领先的企业软体巨头甲骨文公司。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            <br />
                                &nbsp;&nbsp;&nbsp;&nbsp; 有媒体报道，未来几个月与中国政府打交道的美国科技公司或许还会遭遇更多类似的安全调查。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            资料来源：人民网
                                                        </p>
                                (责任编辑：admin)
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
                                id: 4,
                                str: 'news',
                                tagId: 'industryInformation',
                                picUrl: 'static/left.png',
                                headTime: '日期：2013-08-19',
                                headTit: '新iPhone挹注 软板厂营收飙',
                                intro: '软板厂7月营收较6月飙升，法人估，苹果新款iPhone已进入量产期，软板需求可望逐月增温，估第3季单季营收将以台郡成长幅度最大，季增率将达70%，嘉联益季增50%，F-臻鼎季增40%。 法人...',
                                detail: {
                                    content: `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            新iPhone挹注 软板厂营收飙
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        时间:2013-08-19 10:22
                                    </div>
                                    <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        软板厂7月营收较6月飙升，法人估，苹果新款iPhone已进入量产期，软板需求可望逐月增温，估第3季单季营收将以台郡成长幅度最大，季增率将达70%，嘉联益季增50%，F-臻鼎季增40%。 法人
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <table width="100%" style="margin:0px;padding:0px;">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p align="center">
                                                            &nbsp;&nbsp;&nbsp; &nbsp;软板厂7月营收较6月飙升，法人估，苹果新款iPhone已进入量产期，软板需求可望逐月增温，估第3季单季营收将以台郡成长幅度最大，季增率将达70%，嘉联益季增50%，F-臻鼎季增40%。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p align="center">
                                                            <img border="0" alt="" src="http://www.mfpcb.com/uploads/allimg/c130822/13M11K3629D0-23126.jpg" width="561" height="504" style="width:506px;height:473px;" />
                                                        </p>
                                                        <p align="center">
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp;&nbsp; 法人指出，苹果是国内3家软板厂主要的营收来源，营收占比最低的嘉联益比重都达30%，F-臻鼎则有39%，台郡更有高达48%的营收来自苹果。另苹果智能型手机iPhone，更是F-臻鼎及台郡营收重要成长动能来源，因此苹果拉货力道将直接影响厂商营运。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp;&nbsp; 法人估，软板厂第3季营收将呈现逐月成长，估台郡8月营收可望较7月续增20%，9月更将较8月成长24%。另F-臻鼎及嘉联益8月营收估月增率分别为14%及12%，9月营收月增率也将维持16%及15%水平。
                                                        </p>
                                                        <p>
                                                            <br />
                                &nbsp;
                                                        </p>
                                (责任编辑：admin)
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
                            }                        
                        ]
                    }              
                ) 
            break   
            case 'technicalArtical':
                resolve(
                    {
                        state: 1,
                        total: 3,
                        data: [
                            {
                                id: 1,
                                str: 'news',
                                tagId: 'technicalArtical',
                                picUrl: 'static/left.png',
                                headTit: '光电板双雄半年报 健鼎小胜志超',
                                headTime: '日期：2013-08-12 11:01:12',
                                intro: '上市PCB厂光电板厂双雄的健鼎科技(3044-TW及志超科技 (8213) 2013年上半年财报相继出炉，2013年上半年健鼎科技的营收突破200亿元达到202.29亿元新台币（下同），税后盈余11.48亿元，每股税...',
                                detail: {
                                    content: `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            光电板双雄半年报 健鼎小胜志超
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        时间:2013-08-12 11:01来源:&nbsp
                                    </div>
                                    <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        上市PCB厂光电板厂双雄的健鼎科技(3044-TW及志超科技 (8213) 2013年上半年财报相继出炉，2013年上半年健鼎科技的营收突破200亿元达到202.29亿元新台币（下同），税后盈余11.48亿元，每股税
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <table width="100%" style="margin:0px;padding:0px;">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p>
                                                            &nbsp; &emsp;&emsp;上市PCB厂光电板厂双雄的健鼎科技(3044-TW及志超科技 (8213) 2013年上半年财报相继出炉，2013年上半年健鼎科技的营收突破200亿元达到202.29亿元新台币（下同），税后盈余11.48亿元，每股税后盈余为2.18元；而志超科技2013年上半年98.8亿元，每股税后盈余2.11元。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;&emsp;志超科技的2013年第2季财报显示，其营收约50亿元，较第1季成长约2.6%，税后盈余约2.3亿元，扣除库藏股后每股税后盈余0.93元；累计2013年1-6月营收98.8亿元，税后盈余5.2亿元，扣除库藏股后每股税后净利约2.11元。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;&emsp;志超科技主管指出，由于2013年第2季包含员工参与现增价差费用化、子公司出售资产利得提列分红、大陆厂补课教育捐等一次性费用抵销子公司出售资产利得，加上第2季依法提列去年之未分配盈余税及子公司出售资产利得所得税合计近1亿元影响，造成第2季单季所得税率超过23%，而税后盈余仅余约2.3亿元。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;&emsp;对于2013年的后续将无如同第2季的相关一次性费用及税赋，加上新客户导入量产及旺季效应，除合并营收可望持续成长外，所得税率将恢复正常，获利将回归正常的营运水平。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;&emsp;而对于信息产业未来，志超科技认为在面板厂力推eTP触控面板解决方案导入低阶触控笔电设计，触控面板产能大量开出及有破坏性价格出现、Win8降价扩及全尺寸产品的情况下，使得触控笔电之观望已久的买气得以在第3、4季间涌现，对低迷的笔电供应链将是一大帮助，也可带领PCB厂创造销售的契机。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;&emsp;健鼎科技在2013年第2季营收102.27亿元，较第1季的100.02亿元小幅成长2.25%；而第2季营业毛利14.88亿元，营业利益6.74亿元，税前盈余7.21亿元，税后盈余5.4亿元，以目前股本52.56亿元计，每股税后盈余1.03元。这也显示健鼎科技出现2013年的第2季营收成长而获利反向下滑的走势。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;&emsp;健鼎科技在投资于内陆湖北省的仙桃市PCB生产新厂初步完工投入量产之后，今年将进行生产设备的进驻及扩充，健鼎科技主管指出，今年健鼎科技初估资本支出金额在40亿元的水平，仍低于2012年的53亿元水平。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;&emsp;在健鼎科技的产品应用端方面，包括内存模块板、硬盘板、NB板、光电板及汽车板；健鼎科技在中国内陆湖北省投资的仙桃市新厂已陆续进入生产，其湖北仙桃厂并以高成长性的TFT LCD光电板为其主要生产PCB。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;&emsp;同时由健鼎科技并公布2013年7月营收数字显示，其7月营收为34.03亿元，与去年同期的33.05亿元相较，年成长率3%，与上月的32.24亿元相比，月成长率5.5%。健鼎科技累计今年1-7月合并营收为236.32亿元，和去年同期的226.79亿元相比，年成长率为4.2%。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;&emsp;而志超科技7月营收17.8亿元，较6月成长超过15%，也为2013年以来单月营收新高，累计2013年1-7月营收为116.4亿元，较去年同期衰退7.3%。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            资料来源：巨亨网
                                                        </p>
                                (责任编辑：admin)
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                <br />
                                    </div>
                                    <div class="dede_pages" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                    </div>
                                </p>
                                <p>
                                    <br />
                                </p>`
                                }   
                            }, 
                            {
                                id: 2,
                                str: 'news',
                                tagId: 'technicalArtical',
                                picUrl: 'static/left.png',
                                headTit: '中国企业如何把握LED的5000亿产值',
                                headTime: '日期：2013-08-12 09:55:06',
                                intro: '根据“十二五”规划，到2015年，全国LED总产值将高达5000亿元，而全球照明市场规模超过1万亿元。对于这个大蛋糕，中国企业如何把握机会？市场的破局点在哪？ 在中国营销创新联盟和...',
                                detail: {
                                    content: `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            中国企业如何把握LED的5000亿产值
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        时间:2013-08-12 09:55
                                    </div>
                                    <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        根据“十二五”规划，到2015年，全国LED总产值将高达5000亿元，而全球照明市场规模超过1万亿元。对于这个大蛋糕，中国企业如何把握机会？市场的破局点在哪？ 在中国营销创新联盟和
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <table width="100%" style="margin:0px;padding:0px;">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p>
                                                            &emsp;&emsp;根据“十二五”规划，到2015年，全国LED总产值将高达5000亿元，而全球照明市场规模超过1万亿元。对于这个大蛋糕，中国企业如何把握机会？市场的破局点在哪？
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;在中国营销创新联盟和中山大学CHEMBA项目联合举办的CHEMBA中国营销大师论坛上，中国节能协会节能服务产业委员会副主任兼秘书长赵明、雷士照明控股有限公司总裁吴长江、晶科电子（广州）有限公司董事总裁肖国伟、太阳雨太阳能集团有限公司总裁陈荣华、深圳市高工产业研究有限公司总裁张小飞等业内人士进行了深入探讨。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;<strong>市长和市场都必须找</strong>
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;赢周刊：一提起节能环保产业，大家想得更多的是政策扶持、政府支持，而不是经营策略。这个行业的发展是该找市长还是靠市场？
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;赵明：这两点都需要。特别是建筑节能有一块重要的市场，即公共机构，这是一块尚未开发的处女地，同时是一块黄金地。因为公共机构节能的潜力远远没被挖掘出来，建筑节能，比如商业的宾馆楼宇，还存在一些市场化操作的空间。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;道路的绿色照明特别是路灯方面也是很多公司关注的，大家都认为这是一块好领域，但实际上公共机构里的路灯是最难啃的一块，美国已经有城市宣布破产，所以企业选择时要综合考量市场的需求及风险。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;公共机构管理条例里面提出了明确的目标和措施，还有一些政策保障的措施，这对于节能公司进入公共机构提出了保障，但在财务处理方法，包括会计账务方面的处理，还存在很多问题，这值得我们关注。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;到底是找市长还是找市场？要找市长，但最根本的还是要找市场。找市长干什么？第一是培育市场、享受政策，持续发展。节能产业是政府主导型的产业。如果没有“十二五”规划中对节能产业的明确要求，节能产业市场会有这么大的潜力吗？显然是不太可能的。但对企业来说，最重要的还是要开发市场，除了政府培育出来的市场，还要继续开发其他市场。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;吴长江：由于技术的成熟及成本的下降，LED时代已经来临。可能现在很多人还在讲这个市场难做，生意比较箫条，但我认为，在未来三五年，这个行业会是一个爆炸式的增长，为什么？大量传统光源要替换，商场、酒店、写字楼、医院（等）大量的照明场所要替换，经济效益、社会效益已凸显出来了。在这个大环境下，企业怎样抓住机会是我们要考虑的。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;我认为市长和市场都必须要找；搞研究的（人）研究出成果后找市长，通过市长重视这个产业，但做企业的（人）不应该去找市长，而应该找市场。政府拿一块蛋糕出来，大家不按照市场规律去发展企业而是去找市长，可能把关系打通了，拿到的订单一年都做不完。但本来你现在的产能、团队只能经营一两个亿的规模，如果拿了十个亿（订单）回来，就要投资、招兵买马。三年后，这个市场变了，市长也转岗了，那时你被迫裁员，赚的钱可能连设备的折旧（成本）都拿不回来。我不希望政府过多的干预市场，应该让市场自然的更新换代，否则是帮倒忙。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;<strong>&emsp;资源整合是行业最好的出路</strong>
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;赢周刊：雷士在LED领域起步明显稍晚了，前几年为什么不投入？
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;吴长江：这一两年，大家一提到节能环保就激动，特别是LED产业。全球能源稀缺使节能环保成为一种趋势，但作为企业家，作为创业者，我们不可以拿这个概念去忽悠领导、忽悠消费者。我们应该知道，这个产业节能靠什么？原理是什么？怎样节能？经济效益、社会效益在哪里？千万不能抓住这个概念自欺欺人，不但忽悠了领导、忽悠了全社会，还自欺欺人。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;前几年不是我不做LED，而是首先衡量我们的技术是否成熟，产品的残品控制下来没有，经济效益能否产生，能不能带来社会效益。如果做不到，我们就把它放在理论研究阶段，而不是急于推向市场。所以几年前我的战略是密切关注LED产业，紧跟形势，适时出击。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;过去凡是向我们采购LED的（人），我提出的前提条件是，第一，不可以打“雷士照明”这个牌子，第二，保质量。政府要采购，我可以提供，但绝对不推。因为那个时候，做LED是节能了，但不节钱，没有经济效益也没有社会效益，技术还不成熟。曾有这样一句玩笑话，哪里装了LED的路灯，这条路的犯罪率就特别高，因为装上去后一两个月就暗下来了，犯罪率也就高起来了。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;去年LED行业发展突飞猛进，超出了所有人的想象，技术成熟了，成本也有所下降。如今再谈LED取代传统照明光源，是迫在眉睫了，我们必须面对这个现实，做好准备。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;但如今面临的市场环境已和20年前大不相同，不是策划一下、包装一下、打造一个概念就可以赢得市场。如今企业的竞争是综合实力的竞争。光有核心技术还不够，还要有团队、资本、渠道、品牌、管理等的不断创新。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;雷士的LED现在处于高速增长阶段，明年会占到整个销售50%以上的份额，今年至少是30%以上的份额。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;赢周刊：在起步落后的情况下，雷士如何才做到这一点？
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;吴长江：一方面是这个产业成熟了，另一方面我们选择资源整合，与合作伙伴一起开拓市场。去年我们与德豪润达合作（德豪润达斥资收购了雷士20.04%的股权），很多人议论纷纷，其实我们没有别的目的，与股东纷争没有联系，只是为了雷士的发展。我不光在思考雷士的出路，也在思考整个行业未来的出路。只有行业的整合，实现优势互补，资源共享，才能走出一条路子，同时成就LED这个产业，不致比现在这个景象要乱。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;有些方面我们没必要重复投资，这对企业不利，对行业也不利。雷士有条件和能力投入几十亿元去做芯片外延，但一旦投入，一方面要担风险，另一方面我投入三年出来后，有可能这个行业已发生了很大的变化。通过不断整合，不断填补自己的短板，打造一个行业里面综合实力最强的品牌，这就是我们的观点。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;我们要竞争的不是国内企业，我们面对的舞台是全球的舞台，面对的竞争对手是世界很强大的对手，所以我们必须团结一致，资源整合优势互补。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;<strong>品牌缺失带来均等机会</strong>
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;赢周刊：大部分消费者对LED的理解是照明、节能，但很少有人能说出一个LED照明品牌，这对企业来说是商机还是危机？
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;吴长江：既是危机也是商机。危机就是消费者对LED刚开始接受，已经可以形成市场化，但有些企业为了短期效益，不顾质量，这对LED产业是个打击，就像当年节能灯推出来时也面临这样的局面，有些企业模糊了消费者的分辨能力，导致这么多年节能灯没推广开。如果大家能坚持品牌意识，坚持质量，很快就会脱颖而出，这又是一个很好的商机。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;陈荣华：我们去年在A股上市后，募集了资金，想进军LED市场，我们做了市场调研，还有专家团队专门研究这个，后来发现确实水比较深，我们还是先把太阳能做好。当时我们觉得一个没涉足这个行业的人会积极一点，认为是商机，因为（这个行业）没有（成熟的）品牌，会比较好介入，后来发现并不简单。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;对于LED从业人员，机会是大于危机的。行业没有品牌的时候，营销的力量会比较重要，这时候如果有一个好的传播（方法），能进入老百姓心里，可能是一个机会。我曾经讲过，在没有LED来临的时代，中国企业很难打败飞利浦；但到了LED时代，所有东西都被打乱了，大家不知道买什么品牌的LED产品，这对整个行业来讲就是一个机会。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;张小飞：任何一项革新的技术出现，一定（会）有人哭，（也）有人笑，所以对传统照明来说，绝对是危机。传统照明除了渠道，没其他优势，从一个技术非常简单的技术到电子化的半导体化的产品，这个差距非常大，容不得大家含糊，后面的竞争会非常激烈，我认为大部分传统照明企业会死去，但对直接进入LED的企业（来说）是一个机会。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;赢周刊：未来，如果哪家LED企业想在消费者心中占据第一品牌的话，应该怎么做？
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;吴长江：很多老板对做品牌的意识停留在很表面的认知上，就是想方设法找策划来包装，打广告，找品牌代言，他们却没注重另外一点，即客户忠诚度。你可以让别人知道你，但要让人家相信你不容易，做品牌是一个实力的象征，而不是靠策划。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;中国人喜欢走捷径，如果一个企业能做到20年、30年，甚至100年不倒，那就是一个知名品牌，所以坚持很重要，在过程中可能会遇到很多诱惑，但要控制住自己，不要走捷径。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;基础很重要，如果你要建一栋目标是100层的大楼，第一个要考虑的是你有没有这么多钱，把资金准备好。但有了钱，千万不要忙碌建这栋大楼，容易出事，为什么？你要问自己有没有专业的团队，管理的、施工的、技术的。有了团队，建这栋大楼还需要水泥建材；如果建到99层，周边的建材全部用完了，一样不能达到目标。所以要考虑好供应链，还有要搞清楚为什么要建这栋大楼。是自己用还是商用？如果是租出去的话，一定要考虑好周边有没有的市场。
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;陈荣华：进入LED这个产业，每个人的机会都是均等的，但想成为LED行业的领头品牌，就要有一个整合全球性的资源思维，因为现在不缺资本，不缺技术，也不缺市场人才，缺少的是整合这些资源的脑袋，缺少的是思想。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;2008年以后LED应用才开始起来，LED品牌肯定会出来，但不一定是现在。现在LED光源大家听到的都是好的方面，在解决消费者的需求方面，我们做得比较差。无论最后谁会成为领头品牌，它一定是在产品的角度上把需求的问题解决了。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;肖国伟：我认为5年内（LED）产品和技术不可能成型和成熟。要在细分市场里把产品做好，（但）本身产品不成熟，技术不成熟，如果没有产品质量做保障的话，谈品牌是子虚乌有的事情。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;LED会给消费者带来更多的附加值，当你能提供更多的附加值和服务的时候，品牌自然而然就出来了。你讲到笔记本电脑，我想在中国大陆上想到的一定是联想而不是三星，但说到手机的话，想到的肯定是三星而不是联想，这就是细分市场的特点。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            资料来源：赢周刊
                                                        </p>
                                (责任编辑：admin)
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
                                str: 'news',
                                tagId: 'technicalArtical',
                                picUrl: 'static/left.png',
                                headTit: 'PCB厂欣兴、健鼎Q2获利摔大跌',
                                headTime: '日期：2013-08-12 09:46:06',
                                intro: 'PCB厂上季财报相当难看，与IT信息产业高度相关的欣兴 （3037） 、健鼎 （3044） 的单季获利，都创下17～18季以来新低；配股绩优生F-泰鼎 （4927） 更因受汇损侵蚀8,000万元新台币（下同）...',
                                detail: {
                                    content: `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            PCB厂欣兴、健鼎Q2获利摔大跌
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        时间:2013-08-12 09:46
                                    </div>
                                    <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        PCB厂上季财报相当难看，与IT信息产业高度相关的欣兴 （3037） 、健鼎 （3044） 的单季获利，都创下17～18季以来新低；配股绩优生F-泰鼎 （4927） 更因受汇损侵蚀8,000万元新台币（下同）
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <table width="100%" style="margin:0px;padding:0px;">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p>
                                                            &emsp;&emsp;&emsp;PCB厂上季财报相当难看，与IT信息产业高度相关的欣兴 （3037） 、健鼎 （3044） 的单季获利，都创下17～18季以来新低；配股绩优生F-泰鼎 （4927） 更因受汇损侵蚀8,000万元新台币（下同），导致单季获利锐减至4,000万元，创下挂牌以来新低水平，全年度EPS目标恐遭法人下修。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;&emsp;PCB厂近年来积极转型，然而跟着台湾信息产业茁壮的PCB厂多数产能仍集中在信息板上，今年下半年NB、PC旺季效应落空，连带冲击上游PCB硬板厂上半年获利，已经公布财报的一线大厂欣兴、健鼎均逊色。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;&emsp;至于9日公布财报的F-泰鼎，也意外出现大笔汇损。上季受到泰铢重贬4％冲击，单季汇损攀升至8,000万元，冲击上季获利锐减至4,000万元，较第1季大幅衰退68％、年减64.2％，每股税后纯益仅0.41元，创挂牌以来新低水平。不过，就毛利率来看，由于多层板良率优化，从17.22％升至19.28％，累计上半年税后纯益达1.64亿元，每股税后纯益为1.75元。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;&emsp;F-泰鼎的新厂将在下半年加入量产，预计将开出50万呎产能，营收年增率可望维持10％～15％的预估值，但是每股盈余却可能遭修正。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;&emsp;由于新厂导入量产，折旧摊销压力大增，法人圈原预估F-泰鼎的EPS仍可望超过5元，但是第2季汇损幅度超过预期，导致上半年EPS仅1.75元，达标率偏低，法人圈恐下修预估值。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;&emsp;F-泰鼎昨日也公布7月业绩，7月合并营收达到5.83亿元，创下单月历史新高，较6月大幅成长14％，也较去年同期成长了6.97％。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;&emsp;欣兴、健鼎上季获利分别仅3.33亿元、5.4亿元，上半年获利则为8.22亿元、11.48亿元，每股税后纯益0.62元、2.18元，均较去年同期呈现衰退。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;&emsp;而软板厂上季则缺乏苹果新机效应，营收也大幅衰退，软、硬板厂财报同步疲弱。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            资料来源：时报信息
                                                        </p>
                                (责任编辑：admin)
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                <br />
                                    </div>
                                    <div class="dede_pages" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
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