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
                        total: 11,
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
                                intro: '...',
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
                            {
                                id: 5,
                                str: 'news',
                                tagId: 'hotNews',
                                picUrl: 'static/left.png',
                                headTit: '柔性屏幕+多摄像头 FlexCam概念全景相机',
                                headTime: '日期：2013-08-20 16:10:00',
                                intro: '位于加拿大安大略省金斯顿的皇后大学，其人类媒体实验室(Human Media Lab)刚刚发布了一个视频，炫耀的则是一款新的全景相机产品——FlexCam。镜头位于设备的背面，而使用者则可以将它...',
                                detail: {
                                    content: `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            柔性屏幕+多摄像头 FlexCam概念全景相机
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        时间:2013-08-20 16:10
                                    </div>
                                    <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        位于加拿大安大略省金斯顿的皇后大学，其人类媒体实验室(Human Media Lab)刚刚发布了一个视频，炫耀的则是一款新的全景相机产品——FlexCam。镜头位于设备的背面，而使用者则可以将它
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
                                                            <img border="0" alt="" src="http://www.mfpcb.com/uploads/allimg/c130822/13M11K4BHF-19602.jpg" />
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 位于加拿大安大略省金斯顿的皇后大学，其人类媒体实验室(Human Media Lab)刚刚发布了一个视频，炫耀的则是一款新的全景相机产品——FlexCam。镜头位于设备的背面，而使用者则可以将它弯曲起来使用，并拍摄全景照片。这项研究最初发布于2012年，但是展示其具体功能的一则视频却刚刚出现在YouTube上。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;当相机弯曲的时候，取景器就能捕捉到更多的区域。然后，软件会将每个镜头的信息整合到一起。尽管还只是一个雏形，但皇后大学的研究人员已经做得相当新颖。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;目前尚不清楚其所采用的柔性面板的生产厂家，但该设备也不是唯一一款具有表现柔性OLED的高科技装备。三星和LG也已宣布了将在不久推出相关产品的计划(三星还注册了Galaxy Gear这个可能会用于智能手表的商标)。
                                                        </p>
                                                        <p>
                                                            <br />
                                &emsp;&emsp;“现在通过遥控驾驶等技术已经把车内互联及无人驾驶的基础做的很好了，车里面的控制已经实现了一体化，可以把对路况的感知是转弯还是刹车等等反映到里面来，北京理工大学对此已经有了很多年的研究，我们两家技术结合起来，相信很快就能看到从北京开到深圳的无人驾驶汽车了。”比亚迪相关负责人说。
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
                                                            资料来源：新摄影
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
                                id: 6,
                                str: 'news',
                                tagId: 'hotNews',
                                picUrl: 'static/left.png',
                                headTit: '比亚迪突围汽车电子：明年推内置Android车型',
                                headTime: '日期：2013-08-20 16:07:24',
                                intro: '8月20日下午消息，比亚迪(33.75, -0.53, -1.55%)近日邀请媒体探访深圳总部，与一线管理者和技术人员面对面，展示比亚迪的未来布局。据比亚迪相关负责人透露，比亚迪汽车电子已经有多年...',
                                detail: {
                                    content: `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            比亚迪突围汽车电子：明年推内置Android车型
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        时间:2013-08-20 16:07
                                    </div>
                                    <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        8月20日下午消息，比亚迪(33.75, -0.53, -1.55%)近日邀请媒体探访深圳总部，与一线管理者和技术人员面对面，展示比亚迪的未来布局。据比亚迪相关负责人透露，比亚迪汽车电子已经有多年
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <table width="100%" style="margin:0px;padding:0px;">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p>
                                                            &nbsp;&nbsp; 8月20日下午消息，比亚迪(33.75, -0.53, -1.55%)近日邀请媒体探访深圳总部，与一线管理者和技术人员面对面，展示比亚迪的未来布局。据比亚迪相关负责人透露，比亚迪汽车电子已经有多年积累，明年将有内置Android操作系统的新车上市。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;“车内互联在技术上是可行的，3G视频等开放式在技术实现上没有问题，主要是考虑到流量和费用的方面问题。”上述负责人表示，以后在车内一样可以玩微博、微信，费用方面，会设置一定的流量免费期，期满之后再付费。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;谈到汽车操作系统，他介绍说，目前比亚迪的汽车主要还是采用WIN CE操作系统，采用Android操作系统的车型正在研发，预计明年会上市。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;<br />
                                &emsp;&emsp;“长期来看Android肯定是的大趋势，但是Android面临的一个很重要问题是可靠性问题，如果发生死机、病毒感染等问题会对汽车的驾驶安全造成影响。”这位负责人说，未来比亚迪可能将推出一个名为QNX，即能有Win CE系统的稳定，又能保持Android系统的高兼容性。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;目前，比亚迪在汽车电子设备领域共有12000名员工，产值已经达到了一年70-80亿的水平，最初一个车型只有10%左右的部件是自研的，现在到思锐车型已经达到30%-40%了，未来这个比重会越来越高。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;在无人驾驶领域，比亚迪也投入研发力量，目前正与北京理工大学一起研发无人驾驶技术，并将参加今年的全国无人驾驶比赛。
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
                                                            资料来源：新浪科技
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
                                id: 7,
                                str: 'news',
                                tagId: 'hotNews',
                                picUrl: 'static/left.png',
                                headTit: '三星中国市场陷入困境：营收增长乏力',
                                headTime: '日期：2013-08-20 16:05:02',
                                intro: '北京时间8月19日晚间消息，上周末韩联社报道称，三星在中国市场正陷入困境。 尽管研究公司都对三星在中国的智能手机销量持乐观态度，但三星实际上困难重重。市场调研公司Strat...',
                                detail: {
                                    content: `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            三星中国市场陷入困境：营收增长乏力
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        时间:2013-08-20 16:05
                                    </div>
                                    <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        北京时间8月19日晚间消息，上周末韩联社报道称，三星在中国市场正陷入困境。 尽管研究公司都对三星在中国的智能手机销量持乐观态度，但三星实际上困难重重。市场调研公司Strat
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <table width="100%" style="margin:0px;padding:0px;">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 北京时间8月19日晚间消息，上周末韩联社报道称，三星在中国市场正陷入困境。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;尽管研究公司都对三星在中国的智能手机销量持乐观态度，但三星实际上困难重重。市场调研公司Strategy Analytics称，三星第二季度智能手机销量为1530万台，Canalys则将这一数据定为1550万台，但如此大规模的销量似乎并没有为三星带来强劲的营收增长。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;韩联社称，三星今年上半年净销售额为77.2万亿韩元(约合694亿美元)，其中来自中国市场的净销售额为12.6万亿韩元(约合113亿美元)，占16.4%，低于去年同期的20.4%，但中国以外的其它地区这一数据都没有下降。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;今年上半年，美洲市场净销售额为20.6万亿韩元(约合186亿美元)，占三星总净销售额的26.7%，紧接着的亚非市场(中国除外)占比为23.3%，欧洲市场占比为21.5%。美洲市场在三星净销售额所占比例提升了4.3%，亚非市场所占比例提升了2.7%，而欧洲则稍微下滑了0.6%。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;<strong>中国市场之困</strong>
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;在中国，智能手机厂商一直都活得很艰难，因为这里价格战无处不在。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;上月苹果(507.74, 5.41, 1.08%)公司发布的第三财季财报显示，大中华区营收大幅下降，同比下降了14%，环比下降43%。许多人将其归咎于iPhone定价过高，并且近期没有推出新设备，这使得不少用户转投Android阵营。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;三星利用苹果公司的这一弱点重拳出击，它针对不同层次的用户推出了价格不等的手机，论手机销量，三星绝对是中国智能手机行业的老大。但营收差距越来越小，苹果仅第三财季营收就高达46.5亿美元，而三星上半年营收为113亿美元。人们不仅要问，三星到底怎么了？
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;<strong>低价手机策略拖低营收</strong>
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;关键问题就在于：低价手机对营收贡献不足。正因为iPhone定价很高，苹果不需要卖出许多手机就能获得不错的营收。三星手机销量虽高，但高销量并不意味着高营收。事实证明，破纪录的销售数据不利于营收增长。随着小米等中国智能手机竞争者的出现，三星也感受到了一些压力。小米对每款售出的手机进行补贴，因而可以将价格维持在较低水平。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;<br />
                                &emsp;&emsp;小米CEO雷军称，小米的核心业务策略不依赖于智能手机的销量(这与三星和苹果不同)，小米有三大核心业务：电子商务(配件销售)、与电信运营商的合作交易以及游戏等互联网服务。Canalys称，在小米一代和二代智能手机推动下，第二季度小米手机销量已经超过苹果。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;<strong>&emsp;三星处境艰难</strong>
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;三星统治了中国智能手机市场，但随着客户争夺战愈演愈烈，三星可能需要做出更多努力。当前，苹果iPhone有很大的号召力，在用户心目中已经成为了身份的象征，另一方面，越来越多公司开始瞄准中低端智能手机市场，而以前这是三星的天下。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;除了小米外，联想、宇龙酷派、中兴和华为都在追赶三星的步伐，就连中国移动也将推出两款自有品牌的廉价手机。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;三星仍然可以在中国低收入人群中扩大自己的市场份额，但它需要迅速行动，因为越来越多公司正在后面追赶，随时准备超越它。
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
                                                            资料来源：新浪科技
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
                                id: 8,
                                str: 'news',
                                tagId: 'hotNews',
                                picUrl: 'static/left.png',
                                headTit: '软板苹果族群将一路旺到年底',
                                headTime: '日期：2013-08-20 16:00:18',
                                intro: '苹果新产品对零组件的拉货效应显现，F-臻鼎、嘉联益、台郡相关软性印刷电路板供应链率先反映，第3季将呈现跳跃式成长，并一路旺到年底。 臻鼎表示，下半年传统旺季来临，客户端...',
                                detail: {
                                    content: `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            软板苹果族群将一路旺到年底
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        时间:2013-08-20 16:00
                                    </div>
                                    <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        苹果新产品对零组件的拉货效应显现，F-臻鼎、嘉联益、台郡相关软性印刷电路板供应链率先反映，第3季将呈现跳跃式成长，并一路旺到年底。 臻鼎表示，下半年传统旺季来临，客户端
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <table width="100%" style="margin:0px;padding:0px;">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 苹果新产品对零组件的拉货效应显现，F-臻鼎、嘉联益、台郡相关软性印刷电路板供应链率先反映，第3季将呈现跳跃式成长，并一路旺到年底。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 臻鼎表示，下半年传统旺季来临，客户端新产品大举出笼，大陆智慧型手机也明显窜起，下半年营收可望至少逐月成长到11月。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 台郡被市场认定是苹果占营收比重最高、概念浓郁的台系软性印刷电路板（FPC）供应链，也乐观下半年营收大幅成长，本季起跃增，季增率更上看一倍。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 业界表示，全球FPC大厂相对不多，台商近年竞争力明显提升，苹果下半年大举推出新产品，贡献的营收力道也相对其他产业突出。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 台郡、嘉联益、臻鼎三家苹果台系FPC供应链，7月营收已率先苹果相关零组件大幅度反弹，月增率各为66.26%、55.72%、29.64%，台郡、嘉联益都重返10亿元大关，臻鼎也近50亿元，同步改写今年次高，意味苹果推出新产品的脚步已近。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 臻鼎7月营收月增率虽仅近三成，在于产品兼具传统印刷电路板（PCB）、高密度连接（HDI）板及FPC，但主力产品FPC增幅可观，且整体营收比6月一口气增加11.05亿元，都超出嘉联益、台郡7月营收。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 苹果FPC供应链7月起营收跃增，相关上游基材软性铜箔基板（FCCL）厂台虹科技、新扬科技更已凸显来自FPC的拉货效应，7月营收同创历史新高，新扬科月增率27.09%，台虹FCCL产品增加18.07%。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 台虹、新扬科看好FPC来自无胶（2L）FCCL的需求，均已扩产，台虹脚步最快，本季较第2季增加50%，新扬科9月底投产，并逐季增加15%，迎接来自FPC的旺季订单需求。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 台虹表示，观察订单展望，苹果相关FPC厂普遍预期下半年会比上半年增加逾五成，甚至上看增幅一倍。
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
                                                            资料来源：经济日报
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
                                tagId: 'hotNews',
                                picUrl: 'static/left.png',
                                headTit: '台湾半导体产值 逐季增',
                                headTime: '日期：2013-08-20 15:56:19',
                                intro: '根据台湾半导体产业协会（TSIA）、工研院IEK、经济部ITIS计划的共同统计，第2季台湾整体IC产业产值达新台币4,800亿元，较第1季大幅成长16.8%，主要受惠于行动装置强劲销售。不过，因第...',
                                detail: {
                                    content: `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            台湾半导体产值 逐季增
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        时间:2013-08-20 15:56
                                    </div>
                                    <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        根据台湾半导体产业协会（TSIA）、工研院IEK、经济部ITIS计划的共同统计，第2季台湾整体IC产业产值达新台币4,800亿元，较第1季大幅成长16.8%，主要受惠于行动装置强劲销售。不过，因第
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <table width="100%" style="margin:0px;padding:0px;">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 根据台湾半导体产业协会（TSIA）、工研院IEK、经济部ITIS计划的共同统计，第2季台湾整体IC产业产值达新台币4,800亿元，较第1季大幅成长16.8%，主要受惠于行动装置强劲销售。不过，因第2季基期已高，预估第3季成长将趋缓，整体产值约达5,069亿元，季增率为5.6%。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;由于第2季台湾半导体生产链营收表现大幅优于预期，加上预估第3季持续成长，先前预估今年全年半导体产业产值为17,856亿元，已上修4.7%到18,703亿元，年成长率亦由原先预估的9.3%大幅上修到14.4%。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;虽然全球PC/NB市场出货量持续衰退，但因低价行动装置热卖，加上大陆暑假提前拉货效应发酵，第2季台湾IC设计业产值为新台币1,216亿元，较第1季大幅成长20.2%。而在半导体制造部份，同样受惠于行动装置强劲需求，第2季产值季增16.7%达2,174亿元，其中，晶圆代工产业单季产值达1,973亿元，季增率达16%，存储器制造产业则受惠于DRAM价格大涨，单季产值季增19.5%达565亿元。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;受惠于通讯芯片客户订单回笼，带动封测业第2季整体表现，加上上游晶圆代工第2季营收强劲反弹，支撑封测厂的接单，封测产业第2季表现同样不差，平均季成长率13.4%，亦较去年同期成长4.4%。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;第3季虽然是半导体产业传统旺季，但因第2季基期已高，所以预估本季台湾半导体产业产值达5,069亿元，季成长率仅5.6%。在IC设计业部份，随着中国大陆低价行动装置出货持续成长，预估第3季产值将季增10%达1,338亿元。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;在IC制造业方面，第3季由于上游设计业者库存管理的因素，产生供应链库存水位偏高的状况，对于IC制造厂商下单态度转趋保守，成长的幅度预期将会较第2季成长率出现缩小态势，其中晶圆代工产业本季产值将达2,050亿元，季成长率3.9%，至于封测产业本季产值季增率约介于4~5%间。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;今年半导体业最大需求来自于行动装置出货的强劲成长，尤其大陆及新兴市场的低价产品出货量成长十分快速，将带动台湾半导体生产链业绩优于去年，因此预估今年产业景气循环在第1季落底后，第2季及第3季逐季走高，第4季再进行库存修正，预估全年台湾半导体产业总产值将达18,703亿元，较去年大增14.4%，亦优于全球半导体市场平均3~5%的成长率。
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
                                                            资料来源：元器件交易网
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
                                id: 10,
                                str: 'news',
                                tagId: 'hotNews',
                                picUrl: 'static/left.png',
                                headTit: '江西信丰集聚发展电子信息产业',
                                headTime: '日期：2013-08-20 15:53:52',
                                intro: '走进江西省赣州市信丰朝阳聚声泰科技有限公司,生产车间里一片繁忙景象,29条流水生产线上,工人们进行着注塑、贴膜、检测、打包等操作,忙而有序。 与这火热生产场景相互印证的是一...',
                                detail: {
                                    content: `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            江西信丰集聚发展电子信息产业
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        时间:2013-08-20 15:53
                                    </div>
                                    <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        走进江西省赣州市信丰朝阳聚声泰科技有限公司,生产车间里一片繁忙景象,29条流水生产线上,工人们进行着注塑、贴膜、检测、打包等操作,忙而有序。 与这火热生产场景相互印证的是一
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <table width="100%" style="margin:0px;padding:0px;">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 走进江西省赣州市信丰朝阳聚声泰科技有限公司,生产车间里一片繁忙景象,29条流水生产线上,工人们进行着注塑、贴膜、检测、打包等操作,忙而有序。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 与这火热生产场景相互印证的是一串飘红的数字:2012年信丰县电子信息企业实现主营业务收入39.5亿元;今年上半年,电子龙头企业可立克实现产值2.5亿,同比增长35.5%,朝阳聚声泰产值达1.1亿元,同比增长280.5%,信丰金利达电子出口创汇225万美元,比去年全年出口创汇增加一倍……
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 信丰县依托江西唯一的省级电子器件产业基地平台,按照“体现特色、错位发展”的思路,加速与深圳、东莞、广州、惠州“电子信息业走廊”等的无缝对接,力促电子信息产业提档升级,努力将电子信息产业打造成产值超百亿元产业,力争把信丰打造成全省电子信息产业集群发展先行区。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 近年来,信丰不断拓展产业发展平台,积极承接长珠闽、珠三角等沿海发达地区电子信息产业转移,2011年被认定为江西省电子信息产业基地。今年4月,工信部明确提出支持信丰电子信息产业基地创建新型工业化产业示范基地。信丰突出招引产业上下游配套的“增链”、“壮链”、“补链”项目,组织专业队深入产业转移核心城市进行招商。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 目前,信丰现有电子信息产业项目73个,其中已投产企业44家,在建项目16个,拟开工建设项目13个。信丰县电子信息产业基地已初步形成了从覆铜板、线路板、电子元器件到光电、家电终端产品等较为完整的产业链,产业集群效应已初步显现。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 虽然信丰县电子信息产业基地已初步形成了元器件、家电、线路板、家电4大产业,但除捷威科技、永兴电子等少数几家企业生产终端产品外,大部分企业仅能生产扬声器、连接线、线路板、变压器等低端电子元器件,而且同构现象较为严重,链条衔接得不够紧密。为此,信丰县加大引入世界500强、国内200强的知名电子企业力度,以期达到“引进一个,带进一串”的良好效果。目前,在信丰县电子信息产业基地,科之光集团已完成征地468亩,项目建成后可实现产值20亿元以上;线路板集控区13个线路板项目已全部放线,今年内可全部开工建设,项目建成后可实现产值40亿元以上……
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 目前,信丰县正着力把握沿海发达地区产业转移的机遇,根据现有产业基础,围绕电子信息产业中的龙头企业引进了一批上下游配套企业,拉长了产业链条,促进了产业集聚发展。如可立克、福昌发、恒升等电子企业分别为园区龙头企业配套生产电子变压器、电子包装、线路板、电子塑胶等产品,天科企业则为可立克配套生产磁性材料等产品。
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
                                                            资料来源：经济日报
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
                                id: 11,
                                str: 'news',
                                tagId: 'hotNews',
                                picUrl: 'static/left.png',
                                headTit: '法人：今年PCB 软板表现优于硬板',
                                headTime: '日期：2013-08-20 15:49:12',
                                intro: 'PCB厂上半年财报公布，法人看好软板厂今年营运优于硬板厂，分别调升台郡（6269）、F-臻鼎（4958）今年EPS预估值分别将达11元及6元新台币（下同）左右；硬板厂除了汽车板景气相对较佳...',
                                detail: {
                                    content: `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            法人：今年PCB 软板表现优于硬板
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        时间:2013-08-20 15:49
                                    </div>
                                    <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        PCB厂上半年财报公布，法人看好软板厂今年营运优于硬板厂，分别调升台郡（6269）、F-臻鼎（4958）今年EPS预估值分别将达11元及6元新台币（下同）左右；硬板厂除了汽车板景气相对较佳
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <table width="100%" style="margin:0px;padding:0px;">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; PCB厂上半年财报公布，法人看好软板厂今年营运优于硬板厂，分别调升台郡（6269）、F-臻鼎（4958）今年EPS预估值分别将达11元及6元新台币（下同）左右；硬板厂除了汽车板景气相对较佳，NB、PC景气仍旧疲弱，上季财报表现普遍逊于预期。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 法人认为，受惠于苹果新机启动拉货潮，这一季软板厂的产能利用率将大幅提升，此将使营业费用率明显下滑，加上单季营收将大幅度成长，是上修软板厂今年每股盈余预估值主因，法人推估，台郡今年每股盈余上看11元，表现优于去年。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; F-臻鼎目前软板营收比重约莫6成，法人预估，臻鼎本季营收至少成长30％，每股盈余预估可达6元。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 硬板厂方面，因Window 8效应不如预期，年底触控笔店的渗透率也比预期还低，第3季几乎没有旺季效应，除了高阶机种竞相采用的任意层连接板（Anylayer HDI）、汽车板景气相对畅旺以外，PC、NB相关的应用并不看好，对照相关板厂欣兴（3037）、健鼎（3044）、瀚宇博（5469）等公司，景气看法也相对保守。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 欣兴因上半EPS仅0.62元，对第3季景气展望相当保守，外资目前最低目标价已经砍至19元。
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
                if(pageNum == 1){
                    resolve(
                        {
                            state: 1,
                            total: 14,
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
                                },
                                {
                                    id: 5,
                                    str: 'news',
                                    tagId: 'industryInformation',
                                    picUrl: 'static/left.png',
                                    headTime: '日期：2013-08-19 10:10:22',
                                    headTit: '日本电子业衰退的虚与实',
                                    intro: '很多国内媒体对日本电子业分析起来头头是道，但实际上连什么是日本电子业都没弄清。索尼、松下、夏普等巨亏企业远非日本电子业的全部，日本电子业的整体技术实力仍不可撼动，...',
                                    detail: {
                                        content: `<p>
                                        <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <h2>
                                                日本电子业衰退的虚与实
                                            </h2>
                                        </div>
                                        <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            时间:2013-08-19 10:10
                                        </div>
                                        <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            很多国内媒体对日本电子业分析起来头头是道，但实际上连什么是日本电子业都没弄清。索尼、松下、夏普等巨亏企业远非日本电子业的全部，日本电子业的整体技术实力仍不可撼动，
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
                                                                <img border="0" alt="" src="http://www.mfpcb.com/uploads/allimg/c130822/13M11K3513240-163O.jpg" />
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;&emsp;很多国内媒体对日本电子业分析起来头头是道，但实际上连什么是日本电子业都没弄清。索尼、松下、夏普等巨亏企业远非日本电子业的全部，日本电子业的整体技术实力仍不可撼动，在经历积极的艰难转型之后，日本电子业很可能迎来凤凰涅槃，唱衰日本电子业还为时过早。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;“日本电子业到底怎么了？”、“日本电子业巨头为何亏损那么严重？”、“日本电子业今后是继续衰退还是出现转机？”，诸如此类的问题，经常有国内的朋友问起。他们也曾试图从媒体报道中自己去寻求答案，但发现扑面而来的是一片唱衰论调，尤其这些年日本电子业巨头亏损屡创新高，唱衰论调也随着渐达顶峰。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;说实话，这些问题都难以回答，尤其是对日本电子业未来走向的预测恐怕没有人是靠谱的。然而，换个角度来说，我始终从直观上觉得很多国内媒体虽然对日本电子业分析起来头头是道，但实际上连基本前提都没弄清楚，即什么是日本的电子业？
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;很多媒体在报道时明显存在一叶障目、瞎子摸象的倾向，比如一旦索尼、松下、夏普等公布的财报出现巨亏，便立刻会有评论沉渣泛起，对整个日本电子业唱衰。先不谈这些财报亏损的具体原因，也先不追究这些亏损是全部门都亏损还是整体亏损，只要追问一句“索尼、松下、夏普等同于日本电子业吗？”，便知唱衰论至少存在以偏概全，因为日本的电子业远不止那么简单。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;<strong>&emsp;日本电子业整体仍不可撼动</strong>
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;汽车业和电子业是日本“产业立国”路线下培育出来的两大支柱产业，但与汽车相比，电子业其实更让日本人感到骄傲。因为在汽车行业，欧美存在完全可以与丰田、日产等抗衡的企业，但在电子业，日本曾几乎垄断了全球所有的顶尖技术。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;即使目前被视为日本电子业主要竞争对手的三星和苹果，实际上仍对日本的技术存在严重的依赖。三星的技术班底基本上是从日企挖的墙角，索尼流失的技术人才即大多流向了三星。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;有人看到日本对华贸易赤字扩大就欢欣鼓舞，殊不知这恐怕恰恰说明了中国产业培育的不足，实际上韩国对日本就长期处于贸易赤字，而总赤字的约60%发生在材料和精密部件的进口方面。三星、LG等大企业产品制造所需的核心材料、核心零件基本上是进口自日本。采购价格显然不菲，但对韩国产业的崛起无疑推动力巨大。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;而很大程度上说，苹果算是“美国创意＋日本技术”的结晶，就拿iPhone5而言，美国Fomalhaut Techno Solutions公司曾对其进行显微镜分拆，结果显示一半以上的零件供应来自日本，京瓷、东芝、村田制作所、AKM旭化成、尔必达等都是苹果重要的零件供应商，在约1000个组成零件中，仅日本村田制作所就提供了400多个，采购成本约占生产总成本的40%。更致命的是，很多零件只有日本才能生产制造，比如高端音圈马达零件等，没了它，iPhone摄像头就无法运作。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;换句话说，失去了日本如此多的零件供应，苹果再有创意都将难以做出产品来。而相比之下，在整个生产链中，中国仅承担下游组装角色，与处于上游制造环节的日本差距甚远，准确地说中国还只是组装大国，远非制造业大国，更谈不上是制造业强国。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;当看到索尼、夏普或松下亏损就想唱衰整个日本电子业之前，不妨先多看一眼这些小而精悍、技术一流的电子部件供应企业，他们实际上随着苹果的崛起赚得金盆钵满。要评价整个日本电子业现状，需要将B2B业务与B2C业务加以区分，不应混为一谈，前者主要是部件、材料、生产设备等的交易，后者则是面向消费者、经营消费产品。媒体过度关注电子业终端，而忽视了其他环节。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;实际上，若说索尼、松下、夏普等是日本电子业的“脸面”，那么其核心的“心脏”则是一批从事B2B业务的企业，他们主要负责全球产业链中高端部件、设备的制造，人们未感觉到其存在，但其生产的部件隐藏在众多成型的高科技产品中。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;<strong>&emsp;索尼、松下、夏普远非日本电子业全部</strong>
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;日本电子企业数量众多，电子业对日本之所以重要，还在于其解决了庞大的就业。在日本，职员人数最多的15家企业中有9家系电子企业，其中日立集团的员工数多达约39万，比排第二位的丰田汽车还整整多出约7万，堪与日本一个中等规模城市的人口相匹敌。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;在这些数量众多的电子企业中，存在三大巨头，即日媒俗称的“综合电机3社”，分别是日立、东芝、三菱电机；而有时日媒会称“电机大型8社”，这是指除了这三大巨头外，再加上松下、索尼、富士通、夏普、NEC等5家企业。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;从业务内容来划分的话，松下、索尼、夏普属于“家电系”，顾名思义是侧重于做电视、冰箱、空调等产品；日立、东芝、三菱电机则属于“重电系”，侧重于基础设施、产业用电机等的生产制造；而富士通和NEC则属于“情报通信系”，主要生产情报通信机等。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;就现状而言，目前相对业绩糟糕的是“家电系”电子企业，因为在电视、冰箱等家电领域，劳动力成本比日本便宜的中国、韩国等都已经可以制造出高质量的产品，日本企业在这一领域的技术优势已逐渐丧失。但其他类别的电子企业虽然也有出现亏损的，但整体上还是保持优势，更没有到媒体所谓的“崩溃”地步。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;更严格地说，日本所有的综合性电子企业巨头，业务范围实际上均超乎想象地广泛，从家电、半导体、通信、产业机器人(45.130, -1.17, -2.53%)、金融、钢铁到不动产、物流、化学、宇宙产业等，跨度都非常大。与之相比，目前风光无限的苹果，业务范围是相对单一的，对于其与索尼的竞争，索尼原董事长兼CEO出井伸之在接受笔者采访时曾分析称，“索尼没有经历过倒闭危机，而苹果已出现多次倒闭危险。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;任何一家公司的发展都围绕着一条水平线起起伏伏，苹果目前处于兴盛期，处在水平线上方，而低迷期的索尼可能处于水平线之下，但一切都有可能变化，波浪式起伏。苹果的创新是改进型创新，并非原创性的。我不认为索尼在竞争中失败了，也许10年后会重返巅峰，这谁也不能预测，这就是竞争的有趣之处。”
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;<strong>日本电子业在经历转型</strong>
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;实际上，日本的电子企业几乎都在经历艰难的转型。上月底，笔者就曾带国内某电网公司及大学的研究者们前往日立集团大瓮事务所参观，大瓮事务所在的日立市正是日立集团的发祥地，这决定了大瓮事务所在整个日立集团中的地位独特且重要。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;日立出动了十几位管理层及负责人接待，精心地向我们展示了日立在智能城市、节能环保等诸多领域的努力和成绩。看完后，大家感叹日立的实力还是很强，而我则直觉：这哪是那个印象中靠冰箱、空调知名的日立，分明是一个盯住未来商机的崭新企业。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;日本电子业目前是“前有强敌、后有追兵”，上世纪80年代那种打遍天下无敌手的光辉岁月正渐告终结。这与大环境剧烈变动有关，更与很多日本电子企业自身的战略决断屡屡失误有关。这些失误值得详细分析，但凭借长年积累的经验和技术，日本电子业有可能在未来实现凤凰涅槃，而唱衰实在还为时过早。
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
                                                                资料来源：创事记
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
                                    id: 6,
                                    str: 'news',
                                    tagId: 'industryInformation',
                                    picUrl: 'static/news_no.gif',
                                    headTime: '日期：2013-08-19 09:50:47',
                                    headTit: '探讨LED行业未来发展：国际LED芯片巨头众说纷纭',
                                    intro: 'CREE、LumiLEDs(美国流明)和日亚的企业代表在近日美国拉斯维加斯LED展(LED Show)举办的会议上一起探讨了应用于一般照明的LED的未来进展。会议主题是探讨在最近几年中，LED芯片是否能以同...',
                                    detail: {
                                        content: `<p>
                                        <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <h2>
                                                探讨LED行业未来发展：国际LED芯片巨头众说纷纭
                                            </h2>
                                        </div>
                                        <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            时间:2013-08-19 09:50
                                        </div>
                                        <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            CREE、LumiLEDs(美国流明)和日亚的企业代表在近日美国拉斯维加斯LED展(LED Show)举办的会议上一起探讨了应用于一般照明的LED的未来进展。会议主题是探讨在最近几年中，LED芯片是否能以同
                                        </div>
                                        <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <table width="100%" style="margin:0px;padding:0px;">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <p>
                                                                &emsp;&emsp;&emsp;CREE、LumiLEDs(美国流明)和日亚的企业代表在近日美国拉斯维加斯LED展(LED Show)举办的会议上一起探讨了应用于一般照明的LED的未来进展。会议主题是探讨在最近几年中，LED芯片是否能以同样的速度继续推进照明产品的流明输出和功效。会议上探讨的方向更侧重于LED技术如何满足不同的固态照明(SSL)系统质量和成本目标。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;&emsp;Cree公司产品销售经理Paul Scheidt、日亚公司的LED销售经理Erik Swenson以及飞利浦流明的美洲地区营销经理Chad Stalker对LED和SSL系统将如何发展有决然不同的想法。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;&emsp;飞利浦流明代表Stalker首先发言表示，LED在未来的功效进步将先进于系统级组件级别，LED将继续改善，但速度较慢。他补充说，“LED系统将继续推动改善。”他的演讲内容主要包括组件级别的进步，outside of efficacy，可以提高系统的功效并提供更高质量的光。他表示，用较好的红色LED和荧光粉转换&emsp;&emsp;&emsp;白光LED混合很关键，采用石灰绿色LED的飞利浦Hue灯就是颜色可调产品趋势的一个例子。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;&emsp;日亚代表Swenson观点主要围绕中功率LED，他说，中功率LED相比大功率LED能更迅速的改善产品功效，提供更好的质量和美观、更好地满足许多应用的要求。中等功率器件具有的经济规模优势是大功率器件所无法比拟的。如日亚757 LED应用领域包括路灯、改造灯、显示背光、汽车应用等，广泛的适用性更可能提供增加的成本优势。中功率LED在制造业也提供了非凡的收益优势，且中功率产量更高。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;&emsp;Cree代表Paul Scheidt也如Stalker一样，专注于系统级问题。他表示早期LED相对于驱动、散热和光学系统，更关注其成本问题，现如今，LED在SSL系统所占成本的百分比已稳步下降了很多年。他列举了几种不同的方法以解决系统的成本问题，如使用不同类型的LED和不同的系统架构。他认为AC-LED技术方法或许能减除驱动部分的成本，但是AC-驱动的设计需要更多的LED，因为在同一时间点不是所有的LED都被驱动。他还表示，AC系统的闪烁问题无法得到解决，EMI问题需要额外的电路，本质上就是一个驱动器集成电路。谈到中功率LED，Scheidt说，在许多情况下，LED转换的色彩都不够满意，问题就在于你要强力驱动LEDs，却试图限制系统中的LED数量。不过Scheidt对中功率器件的评论大多都是冲着塑料封装的LED。值得注意的是，日亚化学工业表示，其757 LED实际上采用的是陶瓷复合包装。该公司并没有透露细节，但Swenson此前曾表示，该产品提供的流明和颜色维护可以匹配高功率LED。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;&emsp;Scheidt最后的结论认为，在许多应用中，如改型灯具，高电压、高功率LED能提供最佳的系统级方法。他说，这些组件简化了驱动程序的设计，也符合应用要求的光分布和品质。一些SSL产品，如路灯和天花板troffers使用大量的单发射LED，一直是高电压设计的驱动程序级别，这些产品都很成功，拥有业界领先的SSL系统功效。
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
                                                                资料来源：ＬＥＤ制造
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
                                    tagId: 'industryInformation',
                                    picUrl: 'static/news_no.gif',
                                    headTime: '日期：2013-08-19 09:49:38',
                                    headTit: '联想：智能手机市场正向中低端转移',
                                    intro: '联想集团董事局主席兼CEO杨元庆日前表示，智能手机市场正在发生一些转变，而在新兴市场的品牌、快速研发、自主制造等优势，让联想处于有利地位。 季度内，联想集团售出1200万部...',
                                    detail: {
                                        content: `<p>
                                        <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <h2>
                                                联想：智能手机市场正向中低端转移
                                            </h2>
                                        </div>
                                        <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            时间:2013-08-19 09:49
                                        </div>
                                        <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            联想集团董事局主席兼CEO杨元庆日前表示，智能手机市场正在发生一些转变，而在新兴市场的品牌、快速研发、自主制造等优势，让联想处于有利地位。 季度内，联想集团售出1200万部
                                        </div>
                                        <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <table width="100%" style="margin:0px;padding:0px;">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <p>
                                                                &emsp;&emsp;&emsp;联想集团董事局主席兼CEO杨元庆日前表示，智能手机市场正在发生一些转变，而在新兴市场的品牌、快速研发、自主制造等优势，让联想处于有利地位。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;&emsp;季度内，联想集团售出1200万部智能手机，推动移动互联业务部门营收大幅增长105%至12亿美元，占联想集团总销售额14%。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;&emsp;杨元庆认为，智能手机市场正在发生一些改变：第一，整体市场开始从高端向到中低端市场转变，中低端智能手机的市场增速更高；第二，新兴市场成为主要的市场；第三；智能手机更新周期越来越快，运营商与用户签约的周期越来越短。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;&emsp;杨元庆认为，这样的市场改变非常利好联想。他进一步解释称，联想在新兴市场更有品牌，品开发周期更短，上市的速度和上量的速度非常快。同时，自主研发和制造的模式，也给了联想更高的效率和竞争成本。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;&emsp;联想集团打算今年销售5000万部智能手机及1000万部平板电脑。杨元庆，他对联想向PC+厂商转型成功，充满信心。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;&emsp;最新的财报显示，联想集团第一财季营收为88亿美元，同比增长10%；净利润为1.74亿美元，同比增长23%。
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
                                                                资料来源：ＦＰＤ制造
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
                                    tagId: 'industryInformation',
                                    picUrl: 'static/left.png',
                                    headTime: '日期：2013-08-19 09:37:55',
                                    headTit: '汽车进入自动化世代 PCB等产业抢进',
                                    intro: '在2010年起全球汽车产业由电子化世代进一步进入到自动化世代，也形成更加对于电子侦测、通讯应用的依赖，在台湾的电子产业圈也形成包括光学及PCB等产业抢进此一必需具备高可靠度...',
                                    detail: {
                                        content: `<p>
                                        <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <h2>
                                                汽车进入自动化世代 PCB等产业抢进
                                            </h2>
                                        </div>
                                        <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            时间:2013-08-19 09:37
                                        </div>
                                        <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            在2010年起全球汽车产业由电子化世代进一步进入到自动化世代，也形成更加对于电子侦测、通讯应用的依赖，在台湾的电子产业圈也形成包括光学及PCB等产业抢进此一必需具备高可靠度
                                        </div>
                                        <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <table width="100%" style="margin:0px;padding:0px;">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <p>
                                                                &emsp;&emsp;&emsp;在2010年起全球汽车产业由电子化世代进一步进入到自动化世代，也形成更加对于电子侦测、通讯应用的依赖，在台湾的电子产业圈也形成包括光学及PCB等产业抢进此一必需具备高可靠度门坎的领域。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;&emsp;IEK资深分析师江柏风指出，在全球汽车产业而言，1880的汽车产业为内燃机世代，于1950进入电子化世全，而自2010年起进入自动化的世代，也形成更加对于电子侦测、通讯应用的依赖，进一步推升对于PCB的需求。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;&emsp;从目前的汽车自动化电子的发展来看，并以进入到自动化安全气囊、前视系统、后视系统、侧视系统、车队通讯、行人防护、行人侦测、主动巡航、红外线侦测等，江柏风指出，汽车电子化等程度不再是单一功能等电动化，而是串联许多机构做出实时反应，引领汽车更加安全并自动回避意外等发生，这些都将使PCB在汽车应用等渗透率节节升高。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;&emsp;而在光学组件厂方面，包括佳凌科技 (4976) 及华晶科技 (3059) 等厂商都在抢入汽车光学产品领域，佳凌科技总经理刘嘉彬说，车载包括后视到环舱视讯系统等配备，对于微型镜头等需求将达到8颗，虽然目前在出厂新车对于这些视讯配备仍为选购配备或售后市场配备，但预估在欧美各国立法之后，最快2015年将成为车辆出厂的标准配备，将大量刺激对于光学组件的需求。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;&emsp;而在台湾PCB厂中，目前以敬鹏 (2355) 为汽车板的龙头，估计其2012年汽车板产值达到114亿元，而在其它PCB厂如欣兴电子 (3037) 、精成科技 (6191) 、健鼎科技 (3044) 及耀华电子 (2367) 及竞国实业 (6108) 等PCB厂都大力在切入汽车板市场，也都在争取此一规模日趋扩大的市场。
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
                                    id: 9,
                                    str: 'news',
                                    tagId: 'industryInformation',
                                    picUrl: 'static/left.png',
                                    headTime: '日期：2013-08-19 09:35:38',
                                    headTit: '台湾IC设计Q3营运不旺 Q4淡季效应可望淡化',
                                    intro: 'IC设计陆续召开完第 2 季法说会，多数厂商对第 3 季的看法皆偏向保守，其中手机晶片联发科(2454-TW)由于中国大陆智慧型手机与平板电脑市场需求推升，营收增幅看法较同业积极，其他...',
                                    detail: {
                                        content: `<p>
                                        <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <h2>
                                                台湾IC设计Q3营运不旺 Q4淡季效应可望淡化
                                            </h2>
                                        </div>
                                        <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            时间:2013-08-19 09:35
                                        </div>
                                        <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            IC设计陆续召开完第 2 季法说会，多数厂商对第 3 季的看法皆偏向保守，其中手机晶片联发科(2454-TW)由于中国大陆智慧型手机与平板电脑市场需求推升，营收增幅看法较同业积极，其他
                                        </div>
                                        <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <table width="100%" style="margin:0px;padding:0px;">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <p>
                                                                &emsp;&emsp;&emsp;IC设计陆续召开完第 2 季法说会，多数厂商对第 3 季的看法皆偏向保守，其中手机晶片联发科(2454-TW)由于中国大陆智慧型手机与平板电脑市场需求推升，营收增幅看法较同业积极，其他如驱动IC联咏(3034-TW)、类比IC立錡(6286-TW)与致新(8081-TW)等相关厂商，分别因产业库存修正，以及PC相关需求疲弱等因素，而面临第 3 季旺季不旺的窘境，不过也因第 3 季营运提前修正，因此各家对第 4 季的淡季效应看法较为乐观。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;&emsp;就中长期而言，驱动IC受惠萤幕解析度提升，营运看法仍正面，类比IC则是积极布局其他电子产品如面板电源IC，与平板电脑周边IC产品，期望开创新营运动能，但PC相关产品干扰，营运表现仍得面临逆风。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                <br />
                                    &emsp;&emsp;&emsp;今年上半年IC设计营运表现以手机相关最佳，如联发科第 2 季就缴出亮眼成绩单，第 3 季预期营收可增5-13%，毛利率也持续上扬，展现旺季成长力道，也显示智慧型手机与平板电脑的浪潮下，相关厂商营运有成长空间。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;&emsp;同样在行动装置产品带动下，驱动IC上半年也有不错成果，其中联咏、旭曜等相关厂商营收皆亮眼，不过由于大尺寸面板库存进入修正期，中小尺寸虽然需求佳，但也不免一同跟着调整，因此第 3 季各家营收看法也偏向保守，其中联咏就估第 3 季营收约与第 2 季持平，但看好第 3 季营运提前修正，第 4 季淡季修正幅度可望较少。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;&emsp;相对手机相关IC，类比IC立錡与致新，由于营运仍与PC关联性较高，因此第 3 季在PC产业表现压抑影响下，营收看法保守，但两家皆积极布局其他新领域，主要动能来自面板电源IC，支撑下半年营收，而立錡则看好，第 4 季英特尔新平台带动下，营运仍有期待的空间。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;&emsp;整体第 3 季来看，IC设计营运成长表现较佳的领域仍以手机相关为主，其中以联发科为首，营收季增幅度看法最乐观，而其余厂商则是各自表现，不过许多厂商由于第 2 季出货基期垫高，因此第 3 季不免要面临库存修正的压力，导致旺季不旺，多数厂商寄望在第 3 季营运提前修正后，第 4 季淡季下滑幅度可望较以往还少。
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
                                                                资料来源：巨亨网<br />
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
                                    id: 10,
                                    str: 'news',
                                    tagId: 'industryInformation',
                                    picUrl: 'static/left.png',
                                    headTime: '日期：2013-08-19 09:29:03',
                                    headTit: '建滔化工PCB订单旺 料下半年覆铜面板售价回升',
                                    intro: '建滔化工(00148)今年上半年纯利按年增长2.8%，至9.3亿港元（下同）；营收按年增2.9%，至170.8亿元。集团主席张国荣于今天记者会上表示，上半年工业特别是化工方面相当具有挑战，集团...',
                                    detail: {
                                        content: `<p>
                                        <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <h2>
                                                建滔化工PCB订单旺 料下半年覆铜面板售价回升
                                            </h2>
                                        </div>
                                        <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            时间:2013-08-19 09:29
                                        </div>
                                        <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            建滔化工(00148)今年上半年纯利按年增长2.8%，至9.3亿港元（下同）；营收按年增2.9%，至170.8亿元。集团主席张国荣于今天记者会上表示，上半年工业特别是化工方面相当具有挑战，集团
                                        </div>
                                        <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <table width="100%" style="margin:0px;padding:0px;">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <p>
                                                                &emsp;&emsp;建滔化工(00148)今年上半年纯利按年增长2.8%，至9.3亿港元（下同）；营收按年增2.9%，至170.8亿元。集团主席张国荣于今天记者会上表示，上半年工业特别是化工方面相当具有挑战，集团仍能在传统业务上企稳并有增长已属不错。他表示，对下半年业务有信心。
                                                            </p>
                                                            <p>
                                                                <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
                                    &nbsp;&nbsp;&nbsp; 集团上半年覆铜面板出货量比去年同期上升8%，集团旗下建滔积层板(01888)主席张国华表示，上半年集团旗下设备使用率达到百分之百，随着下半年广东江门及江苏江阴的两个工厂投入使用，产能料提升10%。他指，集团今年全年覆铜面板销售目标为9200万张，上半年已售出4300万张，有信心完成全年目标。上半年铜价回落集团亦调低售价，张国华称，现时铜价已回升至每吨740美元，预计下半年覆铜面板价格会有所提升。
                                                            </p>
                                                            <p>
                                                                <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
                                    &nbsp;&nbsp;&nbsp; 印刷线路板业务上半年保持平稳，集团董事莫湛雄表示，虽然传统电子产品需求放缓，但网络通讯设备和智能手机、平板电脑等产品需求强劲。他指，下半年该板块订单旺盛，集团亦将相应拓展产能，其中高密度互接(HDI)产能将大幅增加20%。
                                                            </p>
                                                            <p>
                                                                <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
                                    &nbsp;&nbsp;&nbsp; 集团在缅甸及泰国已开设厂房，面对内地人工上升压力，张国荣表示，缅甸将是集团下一步重点拓展工厂的地区，待该国2015年大选政局稳定后，集团将加大在缅甸的投资力度。
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
                                                                资料来源：华富财经
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
                                    id: 11,
                                    str: 'news',
                                    tagId: 'industryInformation',
                                    picUrl: 'static/left.png',
                                    headTime: '日期：2013-08-19 09:27:49',
                                    headTit: '触控笔记本OGS面板 低价版问世',
                                    intro: '触控笔记本今年市场渗透率估约15％，表现不如预期，第3季触控笔记本OGS面板下跌了5~8％，希望刺激需求。DisplaySearch研究总监谢忠利指出，近期低价版本问世，触控面板价格已经降到...',
                                    detail: {
                                        content: `<p>
                                        <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <h2>
                                                触控笔记本OGS面板 低价版问世
                                            </h2>
                                        </div>
                                        <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            时间:2013-08-19 09:27
                                        </div>
                                        <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            触控笔记本今年市场渗透率估约15％，表现不如预期，第3季触控笔记本OGS面板下跌了5~8％，希望刺激需求。DisplaySearch研究总监谢忠利指出，近期低价版本问世，触控面板价格已经降到
                                        </div>
                                        <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <table width="100%" style="margin:0px;padding:0px;">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <p>
                                                                &emsp;&emsp;&emsp;触控笔记本今年市场渗透率估约15％，表现不如预期，第3季触控笔记本OGS面板下跌了5~8％，希望刺激需求。DisplaySearch研究总监谢忠利指出，近期低价版本问世，触控面板价格已经降到30美元，年底前可望看到25美元，触控笔记本在终端市场价差也将缩小到50美元以下。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &nbsp;&nbsp;&nbsp; &emsp;今年初笔记本品牌厂商乐观看得触控笔记本市场，一般认为，今年触控笔记本市场渗透率会有25~30％的高水平，不过上半年买气不佳，下半年态度明显转趋保守。DisplaySearch先前预估今年触控笔记本渗透率应有18％，但是近期将预估值下修至15％。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &nbsp;&nbsp;&nbsp; &emsp;谢忠利分析，触控面板在笔记本的应用未能普及、甚至进一步刺激出笔记本需求，很大的原因在于上半年只有贵的解决方案。以13寸、14寸OGS触控面板为例，成本高达50美元，反映在终端价格可能高达100美元；对于消费者来说，要多花新台币3,000元买触控功能，其实诱因不大。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &nbsp;&nbsp;&nbsp; &emsp;但现在触控面板厂已经推出低价方案，有利于降低触控笔记本在终端市场的售价。目前13寸、14寸OGS触控面板低价版本，报价已经下探到30美元，供应商增加后有机会降至25美元。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &nbsp;&nbsp;&nbsp; &emsp;面板双虎强v调标准化及经济切割制程，友达推出的eTP是把触控感应玻璃边框空间缩小，直接与外壳机构件结合，搭配后段全贴合。群创Innotouch则是接近LCM组装模式，缩小边框厚度，由于采用口字胶贴合设计，报价更具竞争力。专业触控面板厂也强化垂直集成，胜华推DB1，先做LCM和OGS贴合，再组装背光模块，以提高生产良率。宸鸿也计划在今年第3季推出低成本的OGS方案。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &nbsp;&nbsp;&nbsp; &emsp;整体来看，触控面板厂透过良率提升、以及材料成本的控制，推动第3季触控笔记本OGS面板报价下跌了5~8％。由于微软有意增加Win 8触控控制 IC厂商的认证数，既有厂商在报价上都更积极，市场推估第3季触控IC跌价幅度高达10~15％。
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
                                    id: 12,
                                    str: 'news',
                                    tagId: 'industryInformation',
                                    picUrl: 'static/left.png',
                                    headTime: '日期：2013-08-12 15:05:54',
                                    headTit: 'IPC北美PCB行业报告预测今年保持适度增长',
                                    intro: '2013年8月9日，美国伊利诺伊州班诺克本—IPC-国际电子工业联接协会最近发布了PCB制造业市场和商业年度报告——《北美地区PCB行业2012-2013年分析及预测》，报告显示，北美地区PCB制造业...',
                                    detail: {
                                        content: `<p>
                                        <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <h2>
                                                IPC北美PCB行业报告预测今年保持适度增长
                                            </h2>
                                        </div>
                                        <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            时间:2013-08-12 15:05
                                        </div>
                                        <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            2013年8月9日，美国伊利诺伊州班诺克本—IPC-国际电子工业联接协会最近发布了PCB制造业市场和商业年度报告——《北美地区PCB行业2012-2013年分析及预测》，报告显示，北美地区PCB制造业
                                        </div>
                                        <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <table width="100%" style="margin:0px;padding:0px;">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <p>
                                                                &nbsp;&nbsp;&nbsp;&nbsp; 2013年8月9日，美国伊利诺伊州班诺克本—IPC-国际电子工业联接协会最近发布了PCB制造业市场和商业年度报告——《北美地区PCB行业2012-2013年分析及预测》，报告显示，北美地区PCB制造业到2013年底可望恢复适度增长，并将持续到2016年，全球PCB制造业也是如此。
                                                            </p>
                                                            <p>
                                                                <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp; 该报告按照刚性板和挠性板对以下项目分别提供当前数据及分析，数据包括：市场规模，销售增长率，产品类型销售量和子行业市场销售量，产品组合（大批量、周转快、原型），增值服务的收入趋势，板层，材料趋势，劳动力和研发投入趋势，员工平均收入，美国的进出口额等。
                                                            </p>
                                                            <p>
                                                                <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp; 报告中对美国及全球PCB制造业截止到2016年的预测数据，由PCB行业著名分析师Hayao Nakahara博士提供。
                                                            </p>
                                                            <p>
                                                                <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp; 报告全文70页，IPC会员享特价优惠，参与调研的公司将免费收到一份报告。
                                                            </p>
                                                            <p>
                                                                <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp; 参与调研，请联系IPC市场调研经理 Sree Bhagwat，电话：+1 330-677-5563，邮箱：<a href="mailto:SreeBhagwat@ipc.org">SreeBhagwat@ipc.org</a>。
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
                }else if(pageNum == 2){
                    resolve(
                        {
                            state: 1,
                            total: 14,
                            data: [
                                {
                                    id: 13,
                                    str: 'news',
                                    tagId: 'industryInformation',
                                    picUrl: 'static/news_no.gif',
                                    headTit: '富士康遭遇“涨薪”风波：3千员工请求被辞退',
                                    headTime: '日期：2013-08-12 15:00:02',
                                    intro: '一直以来，坐拥逾百万员工的富士康科技集团被外界称作“代工航母”，逐年增多的员工与营收额，也一度让外界看不到这艘巨无霸的“天花板”。 但近日的一场“停工”风波和正在谈...',
                                    detail: {
                                        content: `<p>
                                        <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <h2>
                                                富士康遭遇“涨薪”风波：3千员工请求被辞退
                                            </h2>
                                        </div>
                                        <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            时间:2013-08-12 15:00
                                        </div>
                                        <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            一直以来，坐拥逾百万员工的富士康科技集团被外界称作“代工航母”，逐年增多的员工与营收额，也一度让外界看不到这艘巨无霸的“天花板”。 但近日的一场“停工”风波和正在谈
                                        </div>
                                        <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                            <table width="100%" style="margin:0px;padding:0px;">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <p>
                                                                &nbsp;&nbsp;&nbsp; 一直以来，坐拥逾百万员工的富士康科技集团被外界称作“代工航母”，逐年增多的员工与营收额，也一度让外界看不到这艘巨无霸的“天花板”。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;但近日的一场“停工”风波和正在谈判中的员工“分流”风波，让富士康内部的劳资深层矛盾愈发凸显；更让人担忧的是，自2010年6月富士康发生系列“坠楼”案后，富士康的人力资源政策调整正让这艘代工航母遭遇史无前例的“系统危机”。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;2010年中，富士康总裁郭台铭曾提出员工薪资翻番，三年来，员工底薪也几乎实现了这一目标，但问题是，普通员工此前的包吃、管住等隐形福利也被计算到了工资内；此外，诸多新颁布的人力资源政策，正让富士康的管理激励政策失效，进而导致优秀管理人员、熟练产线工人流失，代工航母的“制造水平”频现隐忧。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;<strong>员工离心</strong>
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;虽然底薪一涨再涨，但富士康深圳普工的月收入却基本没有变化，外面看来极为鼓舞人心的“涨薪”在富士康内部被“暗度陈仓”。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;近日，富士康深圳龙华科技园内，约200名白班员工参与“停工”，这些员工从消费电子产品事业群(CCPBG，富士康内部简称“CP”)工作区D4栋3楼走到工会总部，边走边喊口号要求加工资。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;“涨薪”是“停工”员工们的一致要求。参与其中的某员工透露，富士康给该厂某部门的技术工作人员涨了20%的工资，而周边部门和生产部门人员工资一分未调，进而直接引发该次事件。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;CP在富士康内部主要负责游戏机生产，诸如微软(32.7,-0.19,-0.58%)Xbox等产品即出自该事业群。近年来，因为成本控制“压力山大”，该事业群员工的工资并不高，诸如非法雇用童工等问题均被媒体爆出。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;“涨薪”风波之外，CP员工2012年年终绩效奖在2013年年中只发放一半，未兑现当时的承诺，也加重了员工对公司的不满。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;同时，在全球经济需求疲弱面前，CP对员工加班时间的管控导致员工收入减少也成为深层诱因。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;2010年11月前，深圳富士康龙华科技园区一名普通产线工人(下称“普工”)的每月平均底薪是1200元，月均加班80～90个小时，收入近3000元。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;为缓解富士康的劳资矛盾，富士康集团董事长兼总裁郭台铭大刀阔斧地将深圳普工的月均底薪上调至2000元，但月均加班小时数下降为60小时，员工收入基本不变。2012年，富士康深圳普工每月底薪再次调整至2100元，但月均加班小时数再次下降至约48个小时。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;这也就是说，虽然底薪一涨再涨，但富士康深圳普工的月收入却基本没有变化，外面看来极为鼓舞人心的“涨薪”在富士康内部被“暗度陈仓”。而因为当年上半年的系列员工“坠楼”事件，富士康科技集团“二号人物”戴正吴“二度出山”就任集团总人资长。其第一个人资新政就是员工原先包吃每月约240元，管住每月约110元，也被作为薪酬的一部分正式列入员工月薪内。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;这样的人资政策直接导致了富士康普工对公司忠诚度的降低。仍在谈判中的群康科技员工“分流”风波，众多员工要求被公司辞退而非“自离”，就是直接证明。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;所谓“分流”，是指富士康内部根据各事业群生产线的订单充裕程度不同，将富余人力调整至订单需求旺盛、人力不足的事业群生产线，以有效提升管理效率。而“自离”则是指富士康员工不满公司待遇或政策，主动离职，富士康不必支付违约金。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;资料显示，群康科技(深圳)有限公司成立于2004年，隶属于富士康旗下群创光电事业群。群创光电专业从事各种面板生产。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;2013年5月起至6月上旬，群康科技深圳工厂全面停工，据不愿具名的富士康知情人士透露，至少有3000~4000人受到“分流”的影响。富士康发言人刘坤回应称，目前该事件正在解决中：“群康科技待分流员工已分流至其他事业群的，有736人；其中，回河南工厂工作的有4人，自愿去宁波的有190人。现在工厂还有3456名待分流人员。”
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;正是这3456名待“分流”员工，主动向富士康提出了“被辞退的要求”。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;所谓“被辞退的要求”，即这部分普工不愿“自离”，而是希望富士康主动裁员，从而获得来自富士康的薪酬补偿。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;“群康科技是非常特殊的事业群。”前述不愿具名人士告诉《中国经营报》记者，“该事业群员工稳定性很好，普遍工龄较长，75%的员工工龄在3～5年，甚至有的员工工龄长达15年。在这样的情况下，若富士康主动解约，将不得不向员工提供N+1(N指在富士康的工作年限)个月的离职补偿。这显然不是一个小数目。”
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;因为早就意识到这一问题，该公司分流前就早早启动了人资沟通会，截至8月1日，这些沟通会多达60余场。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;富士康承诺称，公司不裁员是底线，像深圳、河南等园区都已进入订单旺季，愿意迁往富士康深圳外园区的员工，无论管理层还是普工，都有数额不等的安家费；且富士康鼓励员工返乡，去富士康河南、南宁、四川、武汉等园区就业；愿意继续留在深圳园区其他事业群的员工待遇则“就高不就低”……
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;<strong>深层问题</strong>
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;薪酬问题的出现不仅与富士康身处代工业“利润微薄”时代有关，也与富士康2010年下半年的人资政策调整有关。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;“这说明富士康确实发生了深层次问题。”上述知情人士称，无论精神上还是物质上，富士康员工已经对未来失去了希望，缺乏继续与公司绑在一起共同发展的原动力，尤其是管理层员工。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;在上述人士看来，群康科技的分流沟通会准备足够充分，但员工却依然愿意“被主动离职”的要求背后，原因无外乎有两个：一是希望拿到补偿款另觅高枝，作为成熟的小面板产线工人，群康科技这部分员工并不难找到待遇更好的下家；另一则是富士康日趋缺乏竞争力的薪酬体系。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;而薪酬问题的出现不仅与富士康身处代工业“利润微薄”时代有关，也与富士康2010年下半年的人资政策调整有关。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;如前所述，戴正吴二次出任富士康总人资长之后，在富士康集团推行了一系列足以深远影响富士康发展的人资“新政”。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;举例说，戴氏人资改革的第一大动作是取消了每年的“普调”。所谓普调，是指在富士康内部，从制度上保障员工每年都较上一年度有所晋升。显然，在业务不断增多的发展膨胀期，这既有利于员工稳定，也能让员工适度分享公司成长带来的成果，进而对产线工作效率和质量提供保障。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;当然，普调也不是完全意义上的“大锅饭”。表现优异的员工可能提薪10%，表现不好的可能只提0.5%，但整体上，平均每年约4%～6%的提升保证了富士康员工规模与业务的稳步做大。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;但取消“普调”后，即便最具象征性的0.5%也没有了，不少富士康普工不再注重在富士康的连续工作时长。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;富士康节省的又一笔费用是取消管理津贴。作为管理干部，管多管少一个样，管与不管一个样，缺乏物质激励的直接后果就是富士康的产线管理水平下滑，包括3月初爆出500万～800万iPhone“返工”。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;同样，普工原先包吃、管住的费用也被“变相”加到了员工新增的底薪中。“说好涨800元，但实际上扣掉吃住费用，也就涨了400多元，这种并不纯粹的涨薪，内部管理层反对，外界也多有诟病。”上述知情人士说。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;此外，富士康新推行的人资政策中，“工资集距”的拉大也让“提职留薪”这一怪现象频频现身。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;所谓“工资集距”，是指富士康同一级别员工的工资范围。因戴 上台前，管理主管享有管理津贴，所以各个级别之间的工资集距不大。2011年4月，戴重新制定了没有管理津贴后的第一个工资集距，跨度被极度拉大。以师五级(课长)为例，新政推行之前，该职级员工的工资范围为月均5800～10700元，其中，核心技术人员月均7000～8000元，一般干部月均6000元左右，与此对应，师九级(协理)工资下限不过10400元/月。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;这意味着一名员工可能从师五级升级到师九级，只要薪资在师九级的下限之上就不会涨薪酬。悲催的是，在富士康从师五级到师九级需要至少8年以上。”上述知情人士说。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;与上述人资改革的设计思路如出一辙，为了防止“中干”(富士康内部对于大陆籍干部的俗称)升职太快，实施人资新政后，原有的同级职务，纷纷被设为两层，悉数增加“资深”一职。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;例如，“理”级干部是富士康内部的高阶职务，从专理、副理、协理到副总，是旧有设置；但改革之后，专理、副理、协理等均分别成为专理和资深专理、副理和资深副理、协理和资深协理等。这样，中干由专理升为协理，原来也许只需要9年，但现在最多需要增加一倍时间。
                                                            </p>
                                                            <p>
                                                                &nbsp;
                                                            </p>
                                                            <p>
                                                                &emsp;&emsp;截至发稿，本报记者尚未就上述问题获得富士康官方回应。
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
                                                                资料来源：中国经营网
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
                                    id: 14,
                                    str: 'news',
                                    tagId: 'industryInformation',
                                    picUrl: 'static/left.png',
                                    headTit: '2013下半年大族激光或迎来福音',
                                    headTime: '日期：2013-08-12 14:36:42 ',
                                    intro: '传闻iPhone6即将发布？ 富士康很有可能代工苹果在下半年发布的iPhone6，概念图也显示，这款手机是采用无边框设计而全铝碳的纤维外壳，整个机身的重量要比iPhone5轻了40%。 富士康一名...',
                                    detail: {
                                        content: `<p>
                                        <p>
                                            <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                                <h2>
                                                    2013下半年大族激光或迎来福音
                                                </h2>
                                            </div>
                                            <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                                时间:2013-08-12 14:36来源:&nbsp;作者
                                            </div>
                                            <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                                传闻iPhone6即将发布？ 富士康很有可能代工苹果在下半年发布的iPhone6，概念图也显示，这款手机是采用无边框设计而全铝碳的纤维外壳，整个机身的重量要比iPhone5轻了40%。 富士康一名
                                            </div>
                                            <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                                <table width="100%" style="margin:0px;padding:0px;">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <p>
                                                                    <strong>传闻iPhone6即将发布？</strong>
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &emsp;&emsp;富士康很有可能代工苹果在下半年发布的iPhone6，概念图也显示，这款手机是采用无边框设计而全铝碳的纤维外壳，整个机身的重量要比iPhone5轻了40%。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &emsp;&emsp;富士康一名内部人员也确认，此次郑州富士康大规模招聘是为了生产iPhone6。其实此前和硕已经明确下半年会增加人力，目前和硕大陆厂区是10万人，下半年也将再增加三到四成。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &emsp;&emsp;其实说到整体制造业低迷，从全球6月份发布的采购经理人指数来看也是如此，28个国家之中有22个是指数上涨，5个指数下跌，一 个保持不变，而美国采购经理人指数上升到50.9%，这个增长也是超出预期的。汇丰发布的结果显示，中国采购经理人指数是下滑到了48.2%，低于 50%。有分析人士认为，中国制造业在世界市场的地位和作用正在悄然发生变化，转型升级的大事已经无可逆转了。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &emsp;&emsp;富士康是一个有典型意义的制造业企业，很多人认为它应在此时选择转型升级，发展一些自己品牌的产品，但是它现在仍然为苹果代工，有他自身的一些企业特点。同时也是很多中国制造业企业守住成果的一个无奈之举。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &emsp;&emsp;苹果将在台湾建亚洲研发中心，推动iPhone6研发
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &emsp;&emsp;苹果公司计划在台湾建立亚洲研发中心，目前已经开始在台湾招募开发人员。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &emsp;&emsp;据悉，该研发中心将推动新iPhone（注：应该在iPhone6之后才能见成效了吧）以及其他产品开发，并直接向位于加州的苹果公司总部汇报。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &emsp;&emsp;此次台湾研发中心的招募的人员包括面板制程和光学工程师、系统整合、低电压AC-DC、DC-DC工程师、产品开发工程师、机械工程师、材料技术计划管理师、测试工程式、软件品管工程师、可靠性工程师、产品安全工程师、韧体工程师、工程计划管理师等。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &emsp;&emsp;如果真如上述所述，台湾将设立研发中心的话，不仅用工费用较低，并且可以近水楼台直接招募供应商相关人员，以管理供应商的社会责任。另一方面，台湾拥有完整的组件供应链，而这样也可帮助苹果公司加速“去三星化”，转向台积电。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &emsp;&emsp;此前华尔街日报消息称，苹果公司已经与台积电签订协议，从2014年开始成为苹果A系列的主要供应商。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &emsp;&emsp;而在今年一月份，有消息称苹果公司将在上海浦东设立研发中心，包括三座研发大楼。这三幢研发大楼高6层，占地面积约为10万平方英尺。甚至有消息称，“苹果中国研发中心的这三幢建筑外部建设已经完毕，正在内部装修。这三幢都是苹果租的办公楼，年租金预计超过5000万元人民币”。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;&nbsp;&nbsp;&nbsp;<strong>&nbsp; 季节性订单高峰效应</strong>
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &emsp;&emsp;近日，陆续有媒体报道，苹果新一代手机产品目前已经开始在富士康厂区量产，现在急需大量的流水线工人，而富士康部分厂区也进行大量招工。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &emsp;&emsp;据富士康郑州厂区工作人员透露，目前河南富士康厂区的人数在21万左右，比去年最高峰的30万人还少很多。对方也证实了正在进行大规模招聘。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &emsp;&emsp;受到电子产品更新换代期的影响，近年富士康的订单活动都出现了季节性的高峰，这随之也带来了季节性用工需求，以及对上游加工设备需求的季节性现象。例如为富士康提供大量激光设备的深圳大族激光。据了解，去年上半年，大族激光取得销售约为17亿元，然而下半年销售业绩约26亿，全年总共43亿元。其中由于消费电子行业设备需求增长迅速，2012年度大族公司的激光信息标记设备、小功率激光焊接设备、小功率激光切割设备分别较上年同期增长95.04%、122.03%、29.55%。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &emsp;&emsp;目前智能手机市场相当巨大，2012年中国智能手机出货量高达2.24亿部。苹果部分iPhone手机产品上的logo主要就是用大族激光的激光打标机打出来的。2012年，富士康从大族激光采购的激光设备超过10亿元。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &emsp;<strong>&emsp;2013下半年大族激光或迎来福音</strong>
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &emsp;&emsp;今年上半年，大族激光共取得20.65亿元的业绩，同比增长18.53%。利润总额为2.4亿元，归属于上市公司净利润为1.85亿元，同比增长10.83%。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &emsp;&emsp;大族激光近年大力推出中小功率光纤激光打标机产品和大功率光纤激光切割机。据了解，大族激光的光纤激光产品主要采用的是IPG的激光光源，2012年大族激光向IPG采购的光纤激光器超过3000台。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &emsp;&emsp;大族激光主要的产品包括激光打标机、激光切割机、激光焊接机等，代表国内激光设备生产商的生产水平。据悉，大族激光前5名客户中包括苹果公司和富士康，这两块业务占公司营业收入的20.06%。大族激光在进行一系列调整的同时，也越来越专注于对传统主业的发展。激光切割、焊接和标记今年以来一直是公司的业绩主力，未来也将继续保持。大族激光半年报显示，激光信息标记设备、激光焊接设备和激光切割设备分别占公司业绩的28.76%、11.42%和20.78%，占公司业绩总额六成左右。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &emsp;&emsp;值得注意的是，大族激光为苹果激光设备的主力供应商之一，由于已上市的iPhone 5后背更精细的LOGO以及新增唯一IMEI码即需要打标机升级并配备读写器，并且苹果内部零组件激光精密焊接比例也有大幅提升，公司业务和苹果产品之间的关系日益密切。当前公司已有5个部门配合苹果研发，今年是苹果设备升级的大年， 当前iPhone5和iPad Mini面临的供给瓶颈势必会使得产能建设周期拉长，同时对产品精度提升使得苹果代工厂商富士康在量测方面由传统手工转向自动化，凭借在光机电一体化领域 的传统优势，大族的光学量测产品是较好的选择。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &nbsp;&nbsp; 大族激光向苹果公司及其代工商提供的产品包括激光信息标记设备、激光焊接设备，由于去年公司来自苹果的订单放量增长，助推了公司业绩。根据公司2012年半年度报告中公司前五名客户的营业收入情况统计，2012年1-6月公司向苹果及其代工商销售设备近4亿元，占公司全部营业收入的22.82%。
                                                                </p>
                                                                <p>
                                                                    &nbsp;
                                                                </p>
                                                                <p>
                                                                    &emsp;&emsp;由于季节性订单需求带动，预期从7月份起，大族激光的销售将进入活跃高峰，在以智能手机为主体的新一代电子消费品带动下，对中小功率激光打标设备、小功率激光焊接等需求迅速增加，iPhone大量生产，无疑将是大族激光下半年最大的福音。本网预期，大族激光在第三季度的业绩约为14-16亿之间，而2013年全年业绩可达50-52亿元。
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
                                                                    资料来源：激光制造网
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
                                        </p>
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
            case 'technicalArtical':
                resolve(
                    {
                        state: 1,
                        total: 11,
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
                            {
                                id: 4,
                                str: 'news',
                                tagId: 'technicalArtical',
                                picUrl: 'static/left.png',
                                headTit: '群创：4K2K面板Q3占比估5~10%',
                                headTime: '日期：2013-08-12 09:41:02',
                                intro: '尽管中国市场频传杂音，连带使得面板厂力推的4K2K超高分辨率电视面板近况也被质疑。不过，面板大厂群创光电（3481）总经理王志超指出，目前所有中国品牌厂商只有一家对4K2K电视推...',
                                detail: {
                                    content: `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            群创：4K2K面板Q3占比估5~10%
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        时间:2013-08-12 09:41来源:&nbsp;作者
                                    </div>
                                    <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        尽管中国市场频传杂音，连带使得面板厂力推的4K2K超高分辨率电视面板近况也被质疑。不过，面板大厂群创光电（3481）总经理王志超指出，目前所有中国品牌厂商只有一家对4K2K电视推
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <table width="100%" style="margin:0px;padding:0px;">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p>
                                                            &emsp;&emsp;&emsp;尽管中国市场频传杂音，连带使得面板厂力推的4K2K超高分辨率电视面板近况也被质疑。不过，面板大厂群创光电（3481）总经理王志超指出，目前所有中国品牌厂商只有一家对4K2K电视推得比较慢，其他品牌业者都很积极在推4K2K电视。今年第二季，群创的4K2K面板刚开始起步，预估第三季4K2K机种将可占群创整体TV面板销售量比重达5%-10%。因此公司对于4K2K电视面板后续发展看法还是蛮乐观的。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;&emsp;至于外界担心中国新一波能效补贴标准可能更严格，对于4K2K在LED背光设计上会产生更多能耗、可能会不利，王志超说，详细能效补贴新标准细节都还在讨论中，未来能效补贴（对于电视市场）可能也不会再像过去那样、激起太大需求，而会回归基本面。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;&emsp;王志超认为，群创的4K2K面板系以人的感观体验、高面板质量为诉求，因此公司将会以合理价格去推广4K2K产品。就目前出货情况来看，公司看法还是很乐观。接下来将会观察客户在旺季期间、实际4K2K电视销售情况。如果卖得好，4K2K电视就有机会成为趋势主流。不致于因为节能要求就挡住4K2K的发展。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;&emsp;另方面，群创强调，该公司不仅着重于尺寸差异化，技术方面也会逐步展现出公司的技术能力。之前群创对于4K2K与一般FHD电视面板的价差目标设定在1.3倍。预料等到其他零组件供应问题解决，或许在今年第四季、价差可能有所变化，但这还不一定。尤其现在4K2K面板已经成为各家面板厂投入的产品，价格变化亦非少数厂商可拿捏。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;&emsp;整体来说，群创预期，2013年全球（液晶）电视出货量可能较去年成长3%-4%，面积成长幅度则应该更大。显示器今年出货量可能与去年持平、或下降。NB笔记型计算机市场因为遭到平板计算机严重侵蚀，预估2013年出货量可能出现两位数幅度下降，惟降幅多少还不明确。这部份同时也要考量近来很多厂商开始推出NB和平板计算机的混合产品。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;&emsp;对于近期中国电视市场的库存调整，群创坦言，这对群创的影响程度比其他面板厂要来得大，因为群创在中国电视面板市场占有率较高。但公司相信，经过一段时间，（中国液晶电视）需求应该就会回来。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;&emsp;至于外界担心中国电视市场是否会出现如同日本节能补贴结束后、电视出货规模骤降之情况，群创表示，中国和日本的情况应该不太相同。过去日本平均每年电视市场规模约1000万台上下，节能补贴那几年都冲上2000多万台，才会导致节能补贴刚结束时、市场电视出货量突然降到500多万台。但预估2014年就会回复正常水位、大约900多万台规模了。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;&emsp;中国电视市场规模则大概都是4000万台，只要有新屋购买和嫁娶，还是会有电视需求。近期看起来只有7月比较差（5月能效补贴刚结束时、需求甚至是平的），至少8月需求已经有些回升了。
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
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            资料来源：精实新闻
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
                                id: 5,
                                str: 'news',
                                tagId: 'technicalArtical',
                                picUrl: 'static/news_no.gif',
                                headTit: '三星电子2013下半年将扩大车载半导体事业',
                                headTime: '日期：2013-08-12 09:38:39',
                                intro: '韩国业界8日消息，三星电子将从下半年起扩大车载半导体事业。车载半导体最近需求开始上升。据悉，三星首先计划将目前集中于DRAM车载半导体的事业范围扩大到存储设备。 三星电子...',
                                detail: {
                                    content: `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            三星电子2013下半年将扩大车载半导体事业
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        时间:2013-08-12 09:38
                                    </div>
                                    <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        韩国业界8日消息，三星电子将从下半年起扩大车载半导体事业。车载半导体最近需求开始上升。据悉，三星首先计划将目前集中于DRAM车载半导体的事业范围扩大到存储设备。 三星电子
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <table width="100%" style="margin:0px;padding:0px;">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p>
                                                            &emsp;&emsp;&emsp;韩国业界8日消息，三星电子将从下半年起扩大车载半导体事业。车载半导体最近需求开始上升。据悉，三星首先计划将目前集中于DRAM车载半导体的事业范围扩大到存储设备。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;&emsp;三星电子认为，随着车载导航系统分辨率的逐渐提高，对eMMC或者eMCP等存储设备的需求也将上升，并持续发展。此外，对最近快速普及的车载黑匣子所搭载的SSD的需求也将增加。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;&emsp;三星电子相关人士曾称，“虽然目前该领域的市场规模仍然较小，但由于是高价市场，因此公司十分关注”。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;&emsp;市场调查机构Gartner最近公开的二季度报告指出，今年全球车载半导体市场规模将达到259.41亿美元，较去年增长4%;2017年更将达到347.11亿美元。2012-2017年5年间的增长率将高达39%，超过整体半导体市场。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;&emsp;另外，最近推出的新款车型中，零部件的三分之一为电子设备，需要200个以上的半导体。这些电子零部件在汽车成本中所占比重达到了20-30%。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;&emsp;除了三星电子以外，其他公司也将目光投向了这一领域，纷纷扩大投资。LG电子于上月将集团内负责汽车零部件的各个组织合并，新设为VC(Vehicle Components)事业部。集团位于仁川的大规模汽车零部件研究开发基地也已投入使用。现代汽车集团于去年成立了汽车电子控制技术企业现代Autron。此外，日本的瑞萨科技、德国的英飞凌、瑞士的意法半导体也在推进车载半导体事业。
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
                                                            资料来源：环球网科技
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
                                id: 6,
                                str: 'news',
                                tagId: 'technicalArtical',
                                picUrl: 'static/left.png',
                                headTit: '我国研制出首块彩色柔性显示屏',
                                headTime: '日期：2013-08-12 09:34:30',
                                intro: '京华时报讯，据中国新闻网8月9日报道，广州华南理工大学9日对外宣布，该校成功研制出中国第一块彩色柔性AMOLED显示屏。 该柔性AMOLED显示屏的显示尺寸为4.8英寸，厚度100微米，重量仅...',
                                detail: {
                                    content: `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            我国研制出首块彩色柔性显示屏
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        时间:2013-08-12 09:34来源:&nbsp;作者
                                    </div>
                                    <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        京华时报讯，据中国新闻网8月9日报道，广州华南理工大学9日对外宣布，该校成功研制出中国第一块彩色柔性AMOLED显示屏。 该柔性AMOLED显示屏的显示尺寸为4.8英寸，厚度100微米，重量仅
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <table width="100%" style="margin:0px;padding:0px;">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p>
                                                            &emsp;&emsp;京华时报讯，据中国新闻网8月9日报道，广州华南理工大学9日对外宣布，该校成功研制出中国第一块彩色柔性AMOLED显示屏。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;该柔性AMOLED显示屏的显示尺寸为4.8英寸，厚度100微米，重量仅不足1g。校方表示，此显示屏具有超轻薄、可弯曲和折叠、抗机械冲击等优势，具有非常广阔的市场应用前景，将对人类的生活产生颠覆性影响。例如，可以将其做成窗帘，白天卷起来不影响采光，夜晚则可以作为电视屏幕；也可以做成穿戴式显示器件，甚至可以特制“人形显示器”穿在人体身上。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;科研人员还先后开发了透明AMOLED和具有触摸功能的AMOLED显示屏。据了解，柔性AMOLED显示技术在国际上受到广泛重视，以三星、LG、夏普、友达等为代表的国际大企业都在积极研发该技术。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            <br />
                                &emsp;&emsp;第一创业证券分析师刘新燕表示，前段时间柔性电路板概念和可穿戴概念都走出一波强势表现，此次可折叠彩色显示屏的诞生也有望带动市场关注。随着智能手机和平板电脑市场的迅速拓展，未来可折叠显示屏幕有望真正应用在相关产品和领域。在A股可关注相关概念股如丹邦科技、生益科技、超华科技等。&nbsp;
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
                                                            资料来源：京华时报
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
                                id: 7,
                                str: 'news',
                                tagId: 'technicalArtical',
                                picUrl: 'static/left.png',
                                headTit: '地铁设备PCB抄板及核心技术国产化研究',
                                headTime: '日期：2013-08-12 09:32:13',
                                intro: '近年来，作为制造大国的中国为了推行地铁在二三线城市的修建，不得不采用价格相对低廉的国产化设备代替昂贵的进口设备，然而中国地铁建设仍然是可圈可点，主要原因是缺乏核心...',
                                detail: {
                                    content: `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            地铁设备PCB抄板及核心技术国产化研究
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        时间:2013-08-12 09:32来源:&nbsp;作者
                                    </div>
                                    <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        近年来，作为制造大国的中国为了推行地铁在二三线城市的修建，不得不采用价格相对低廉的国产化设备代替昂贵的进口设备，然而中国地铁建设仍然是可圈可点，主要原因是缺乏核心
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <table width="100%" style="margin:0px;padding:0px;">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p>
                                                            &emsp;&emsp;近年来，作为制造大国的中国为了推行地铁在二三线城市的修建，不得不采用价格相对低廉的国产化设备代替昂贵的进口设备，然而中国地铁建设仍然是可圈可点，主要原因是缺乏核心技术和自主创新。近几年来虽然地铁高端制造设备国产化占比总体提高到70%以上，但支撑这些设备的核心技术国产化并没有同步提高。因此地铁国产化设备在安全保障方面常常面临技不如人的质疑，如何打消国人疑虑？PCB抄板从反向研究开始打破外国的技术垄断和控制，并对核心技术进行消化吸收和再创新，或能提高核心技术国产化水平。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 地铁设备VS核心技术国产化
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 所谓国产化，实际上包含两个内容：一是重要设备要实现在国内制造生产，或进口国外零部件国内组装，一些国外公司在国内设立企业生产组装的设备也属于这个范畴;二是要实现关键核心技术的自主创新。这种国产化又称自主化，实际上是国产化所追求的深一层目标。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 前一种设备的国产化，在龙芯世纪等一批优秀的反向工程企业的带领下，已通过PCB抄板、整机克隆及二次开发等技术服务整体提高了国产率。例如，正在准备之中的大连地铁，其机电设备中的采暖、通风等国产化率达到100%;供电系统、车辆购置、安全门的国产化率分别为93%、80%、70%。后一种核心技术的国产化，由于自主创新力度不够一直还是采用国外的技术。例如信号系统方面，南京地铁、广州地铁采用的是西门子的技术，服务上海地铁10号线是卡斯柯信号有限公司的，杭州地铁的技术还是安萨尔多(美国)国际有限公司，尽管他们的信号设备都是国产的。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp;&nbsp;<strong>核心技术国产化提高的措施</strong>
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 针对我国地铁设备国产化普及而核心技术缺失的现状，我国应鼓励自主创新、集成创新和引进技术消化吸收再创新，以提升我国城市轨道交通国产装备技术水平。自主创新在很长一段时间内都是风险较大且任务艰巨的方式，因此针对我国国情，可被一些有实力规模较大的公司采纳。然而引进技术消化吸收却可在任何企业使用，而且还可在短时间内提高我国的再创新高度。龙芯世纪PCB抄板作为引进消化吸收的重要手段，不仅可提取国外产品的PCB文件、BOM清单、SCH原理图等全套技术资料，而且还可通过板上芯片解密、程序反汇编及PCB改板对核心技术进行再次开发。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 按照规划，未来五年，深圳将启动建设五条联结新城的地铁线路。这对于国内自主创新的地铁设备的初次示范采用，是极难得的机会和平台。龙芯世纪科技有限公司适时提出了大力推进深圳城市轨道交通核心设备国产化的发展战略和行动计划，积极实施深圳地铁设备PCB抄板及核心技术“国产化示范工程”，欢迎相关企业及科研机构前来与龙芯世纪真诚合作!
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
                                                            资料来源：比特网
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
                                tagId: 'technicalArtical',
                                picUrl: 'static/left.png',
                                headTit: '扩充触控面板　彩晶扩建南京业务',
                                headTime: '日期：2013-08-12 09:29:19',
                                intro: '积极转型以生产触控以及中小尺寸面板为主的彩晶（6116）今年以来营运表现亮眼，为扩充触控面板业务，公告以3.31亿元资金向转投资企业和鑫（3049）购买并取得生产机器设备一批约...',
                                detail: {
                                    content: `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            扩充触控面板&emsp;彩晶扩建南京业务
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        时间:2013-08-12 09:29来源:&nbsp;作者
                                    </div>
                                    <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        积极转型以生产触控以及中小尺寸面板为主的彩晶（6116）今年以来营运表现亮眼，为扩充触控面板业务，公告以3.31亿元资金向转投资企业和鑫（3049）购买并取得生产机器设备一批约
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <table width="100%" style="margin:0px;padding:0px;">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p>
                                                            &emsp;&emsp;&emsp;积极转型以生产触控以及中小尺寸面板为主的彩晶（6116）今年以来营运表现亮眼，为扩充触控面板业务，公告以3.31亿元资金向转投资企业和鑫（3049）购买并取得生产机器设备一批约103台。
                                                        </p>
                                                        <p>
                                                            <br />
                                &nbsp;<br />
                                &emsp;&emsp;&emsp;彩晶指出，为因应彩晶在中国南京模组厂瀚宇彩欣，在承接和鑫OGS触控面板模组代工业务所需，而扩建南京触控模组产能而增购设备，目前南京模组厂在触控模组产能单月已约达200万片。
                                                        </p>
                                                        <p>
                                                            <br />
                                &nbsp;<br />
                                &emsp;&emsp;&emsp;由于彩晶与和鑫积极进行资源整合，和鑫将专注于触控感测器研发生产，并逐渐淡出触控模组生产制造，至于彩晶则是以生产液晶面板产品及触控模组制造为主。<br />
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
                                                            资料来源：苹果日报
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
                                id: 9,
                                str: 'news',
                                tagId: 'technicalArtical',
                                picUrl: 'static/left.png',
                                headTit: '台面板领先大陆优势 不到一年',
                                headTime: '日期：2013-08-12 09:27:07',
                                intro: '市场在大陆，制造、人才、供应链就会移到这里」，大陆面板厂华星光电副总裁王国和一语道出了台湾的困境。王国和曾任职于奇美电子，他以在两岸面板业都待过的经验，首次面对...',
                                detail: {
                                    content: `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            台面板领先大陆优势 不到一年
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        时间:2013-08-12 09:27来源:&nbsp;作者
                                    </div>
                                    <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        「市场在大陆，制造、人才、供应链就会移到这里」，大陆面板厂华星光电副总裁王国和一语道出了台湾的困境。王国和曾任职于奇美电子，他以在两岸面板业都待过的经验，首次面对
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <table width="100%" style="margin:0px;padding:0px;">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p>
                                                            &emsp;&emsp;&emsp;「市场在大陆，制造、人才、供应链就会移到这里」，大陆面板厂华星光电副总裁王国和一语道出了台湾的困境。王国和曾任职于奇美电子，他以在两岸面板业都待过的经验，首次面对媒体，提出他对两岸面板业竞争力消长的看法。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;&emsp;王国和说，很多人认为大陆面板厂的崛起靠的是大陆政府的保护，其实这也太过度简化大陆这些年的发展。面板关税在去年4月上调了5个百分点，这一点客户也很清楚，所以这多出来的利润不是都放在华星口袋，其中2.5个百分点回馈给了客户。至于其它优惠与补贴，立足点更是不同。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;&emsp;大家都说本土厂商有水电补贴，却忽略了大陆水电费比台湾贵了80％之多，在补贴之后，两岸的水电费其实差不多。融资也是如此，大陆融资成本高，平均贷款利率在4.5％以上，相比之下台湾联贷利率大多在2.5％以下。由此来看，很难说大陆面板厂从政府拿到的优惠到底帮助有多大？
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;&emsp;另一方面，很多公司内部的竞争力是外界所不清楚的。以华星为例，过去一年公司在产能拉升期，全力抢攻32寸面板，因为产品单一化，因此大幅提升生产线效率、降低成本、提高良率，这是获利的关键。此外，华星的8.5代厂总建厂支出约人民币245亿元，其中设备支出约215亿元，建置了大约12万片的产能；相比其它面板厂，以较少的投资，获得较大的产能。当然集团母公司TCL是大品牌，在华星投产之初，很快就采用自家面板，其它品牌接着跟进，所以很快就放量，这种集团资源是台湾所没有的。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;&emsp;王国和说，液晶电视最大的市场就是在大陆，客户、需求在大陆，制造也会在这里，所以人才、供应链也会跟着过来。不止台湾人才到大陆，韩国面板厂也在大陆投资。产业资源逐渐集中在大陆，产业链就会愈来愈完善、竞争力也持续提升，未来本地的面板厂不只是供应大陆，还会跨足到全球的市场去。TFT产业将会重现CRT发展史，未来制造都会集中在大陆。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;&emsp;短期来看，台湾8.5代厂产能少，大陆没有7.5代、6代厂产能，所以会有尺寸分工的情况，台湾推39寸、50寸、58寸面板，大陆打28寸、48寸、55寸面板，不会互相杀价。但是在2015年8座8.5代厂投产之后，48寸、55寸会成为主流，尺寸威胁就会出现。而且除了产能增加之外，技术力提升的威胁也慢慢浮现。去年台湾讲4K2K面板，现在华星55寸4K2K面板也已经量产出货，在大尺寸方面，台湾的领先优势已经不到一年，更是一种警讯。
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
                                id: 10,
                                str: 'news',
                                tagId: 'technicalArtical',
                                picUrl: 'static/news_tit_company_01.jpg',
                                headTit: '缺乏创意元素：“智能手机”概念已死',
                                headTime: '日期：2013-08-12 09:26:03',
                                intro: '北京时间8月12日消息，美国科技博客BusinessInsider周四发表署名为史蒂夫·卡瓦克(Steve Kovach)的分析文章称,随着智能手机市场不断发展，新智能手机产品越来越多，但是产品彼此却越来越...',
                                detail: {
                                    content: `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            缺乏创意元素：“智能手机”概念已死
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        时间:2013-08-12 09:26来源:&nbsp;作者
                                    </div>
                                    <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        北京时间8月12日消息，美国科技博客BusinessInsider周四发表署名为史蒂夫·卡瓦克(Steve Kovach)的分析文章称,随着智能手机市场不断发展，新智能手机产品越来越多，但是产品彼此却越来越
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
                                                            <img border="0" alt="" src="http://www.mfpcb.com/uploads/allimg/c130822/13M11K13E40-13F0.jpg" />
                                                        </p>
                                                        <p align="center">
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;&emsp;北京时间8月12日消息，美国科技博客BusinessInsider周四发表署名为史蒂夫·卡瓦克(Steve Kovach)的分析文章称,随着智能手机市场不断发展，新智能手机产品越来越多，但是产品彼此却越来越想象，“惊叹性”元素则越来越少，自初代苹果iPhone之后，似乎再没有类似革命性智能手机产品出现，“智能手机”的概念已经不复存在。
                                                        </p>
                                                        <p>
                                                            <br />
                                以下是文章主要内容：
                                                        </p>
                                                        <p>
                                                            <br />
                                &emsp;&emsp;&emsp;那些希望下一个大热产品就快上市的“技术宅”在今年可以说吃了一闷棍。
                                                        </p>
                                                        <p>
                                                            <br />
                                &emsp;&emsp;&emsp;因为，他们所期望的产品并未出现。
                                                        </p>
                                                        <p>
                                                            <br />
                                &emsp;&emsp;&emsp;这并不是说没有一些出色的新产品面世。相反，新设备有很多，比如：HTC One，黑莓Z10，三星Galaxy S4和Moto X等。这些都是非常出色的手机产品，无论是购买其中哪一款产品，你都会感到很开心。但是，除了营销噱头、夺目的发布会、以及各公司高管们在公开场合对他们下一代产品所发表的言论，在今年发布的所有设备中，可以说没有一款产品称得上是革命性产品。
                                                        </p>
                                                        <p>
                                                            <br />
                                &emsp;&emsp;&emsp;这些产品彼此都大同小异。2007年初代iPhone的上市或许让苹果赢在了起跑线上，但是自那以后，其他企业也已经赶上了苹果的步伐。对大多数人来说，所有这些设备拥有的都是同样的功能：运行应用，浏览网页，观看视频，查收邮件，不停地玩《糖果粉碎》等等。产品的售价或者手机厂商兜售的那些特殊功能，对你而言似乎并不重要。现在，所有产品都大同小异。“智能手机”这个概念已死。
                                                        </p>
                                                        <p>
                                                            <br />
                                &emsp;&emsp;&emsp;作为一个对移动产业观察颇深的人，看到企业仍在效仿苹果6年前的作法，尝试对手机进行革命性创新，这让人很泄气。可以说近乎虚妄。
                                                        </p>
                                                        <p>
                                                            <br />
                                &emsp;&emsp;&emsp;上周，LG推出了新款旗舰手机产品G2。该产品有哪些突出性能？该设备的音量控制键被放在了手机背面，摄像头正下方。上个月，诺基亚推出了配有4100万像素摄像头的Lumia 1020，如此的高像素基本上没人用得上，更别说还要花100美元去购买附加配置。三星或许是表现最差的一个，其Galaxy S4配备了过多的无用噱头，比如无触摸手势，还有眼动跟踪，这个功能着实让手机使用变得更加繁复，而并非更易操作。
                                                        </p>
                                                        <p>
                                                            <br />
                                &emsp;&emsp;&emsp;相关的例子还有很多，但是或许你已经懂了。简单而言就是，在今天的智能手机产品中，“创意”元素已荡然无存，他们只是“手机”。要想让大众相信移动计算的新时代已经到来，还需要更多的噱头来让他们信服。
                                                        </p>
                                                        <p>
                                                            <br />
                                &emsp;&emsp;&emsp;与此同时，整个智能手机市场的状况很值得一看。智能手机高端市场正接近饱和，这就表示，那些想要购买一部新款高端设备的人，比如iPhone 5和HTC One，基本上已人手一台设备。若有其他厂商还想要打入高端市场，夺取苹果和三星早已瓜分的市场份额，这可以说几乎是不可能的一件事。这也是为什么诺基亚等厂商生产低价裸机产品，对低端智能手机市场加大投注，并还再生产搭载微软Windows Phone 8系统的智能手机的原因。苹果可能在今年第推出廉价iPhone的传闻也由此而来，这解释了为何三星推出多款廉价版Galaxy系列产品。
                                                        </p>
                                                        <p>
                                                            <br />
                                &emsp;&emsp;&emsp;要说明的是：我并不是说人们会不再购买手机。（他们不会的。）我也不是在说手机厂商们发布的产品不好。（他们很棒。）我要说的是，现在我们已经处在一个临界点，现在所有的设备都非常相似，而想要通过一些无用的噱头尝试将自己与其他产品差异化这样的做法很笨。<br />
                                移动设备并不会消失，但是“智能手机”的概念则已经销亡。
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
                                                            资料来源：腾讯科技
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
                                id: 11,
                                str: 'news',
                                tagId: 'technicalArtical',
                                picUrl: 'static/left.png',
                                headTit: '天津普林投资项目未公告 引投资者吐槽',
                                headTime: '日期：2013-08-09 13:21:00',
                                intro: '天津普林（002134）被爆与国际电子巨头合资航空航天线路板项目，公司未公告惹来投资者集体吐槽，称这是“剥夺广大中小股东的知情权”。并抱怨，公司上市到现在七年了，“让股东...',
                                detail: {
                                    content: `<p>
                                    <div class="title" style="margin:0px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <h2>
                                            天津普林投资项目未公告 引投资者吐槽
                                        </h2>
                                    </div>
                                    <div class="info" style="margin:0px 0px 30px;padding:0px;text-align:center;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        时间:2013-08-09 13:21来源:&nbsp;作者
                                    </div>
                                    <div class="intro" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        天津普林（002134）被爆与国际电子巨头合资航空航天线路板项目，公司未公告惹来投资者集体吐槽，称这是“剥夺广大中小股东的知情权”。并抱怨，公司上市到现在七年了，“让股东
                                    </div>
                                    <div class="content" style="margin:0px;padding:0px;color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">
                                        <table width="100%" style="margin:0px;padding:0px;">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; 天津普林（002134）被爆与国际电子巨头合资航空航天线路板项目，公司未公告惹来投资者集体吐槽，称这是“剥夺广大中小股东的知情权”。并抱怨，公司上市到现在七年了，“让股东亏钱流泪又白费了青春”。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;<strong>天津普林被爆投资中环飞朗未公告</strong>
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;有投资者近日在全景网互动平台爆料，7月20日，天津地方报纸《今晚报》出现一则当地上市公司天津普林相关新闻报道，《中环飞朗科技项目空港投产 助推产业基地建设》。据该报道，中环飞朗科技项目，由加拿大飞朗科技集团与天津普林电路股份有限公司合作建设，致力于航空航天高科技电路板设计研发。相关资料介绍，加拿大飞朗科技集团是国际知名的航空航天和国防电子产品及子系统供应商。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;更有细心的投资者发现，7月25日人民网也转发了该项目相关报道，“中环飞朗航空电路项目落户天津保税区”。更有报道指，这家新成立的公司，“已经接到了客户的订单”
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;<strong>投资新项目不公告 引投资者集体吐槽</strong>
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;全景网互动平台上的投资者不断追问天津普林，“跟国际电子巨头合资搞航空航天线路板，这样的事情，公司应该要发公告。”
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;更有投资者说 ，“持有公司股份，作为股东们却不知公司长期在干什么。只知道，年报半年报一出来就是亏损。从媒体上看到关于公司的一些新闻，也因为公司没有正式公告，也不知真假。在互动平台上，公司也避而不答股东的这些问题。”
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;更有投资者情绪激动，“公司迟迟不公告，为什么要剥夺广大中小股东的知情权？”、“抓紧公告吧！免得中小股东举报，免得公司又上黑榜被处罚了。”
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;<strong>董秘回应：半年报里来说</strong>
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;记者就此联系到天津普林董秘苏铭，他表示，地方媒体的报道自己还没有看到，“要去核实一下”。不过承认天津普林有参与中环飞朗的投资。苏铭称，中环飞朗注册资本仅120多万，天津普林仅占其总股本40%，他强调“从资产总额、净资产各个方面没有达到信披的标准，所以会在半年报作为特殊事项来描述。”
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;董秘苏铭没有接受记者的更进一步采访，公司证券事务代表国炜对记者表示，中环飞朗不是生产企业，仅是公司与飞朗集团的一个合作平台，主要是培训、研发和市场开拓，预计“不会对天津普林2013年全年业绩产生影响。”
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;<strong>天津普林寻求合作机会 进入新市场</strong>
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;天津普林主营印制线路板的生产和研发，公司近年来业绩持续亏损。2010年亏损1900万元，2011年勉强盈利279万元，2012年又大幅亏损8900万元， 今年一季度又亏损1290万元。
                                                        </p>
                                                        <p>
                                                            &nbsp;
                                                        </p>
                                                        <p>
                                                            &emsp;&emsp;很多投资者曾寄希望公司有所作为，但更多的投资者越来越对这家公司的表现失望。投资者们抱怨，“公司上市以来由于缺业绩支撑，公司又没有找热点好项目投资，股价表现差，以致众股东亏损累累。”，“上市到现在七年了，等不起了。人生没几个七年。请公司抓紧。不要再让股东再亏钱流泪又白费了青春。”
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
                                                            资料来源：全景网
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