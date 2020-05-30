export function getNewsCatList (catId) {
    debugger
    return new Promise((resolve, reject) => {
        switch(catId){
            case 'companyNews':
                resolve(
                    {
                        state: 1,
                        total: 4,
                        data: [
                            {
                                id: 1,
                                str: 'news',
                                tagId: 'companyNews',
                                picUrl: '../../../../static/left.png',
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
                                picUrl: '../../../../static/news_01.jpg',
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
                                picUrl: '../../../../static/left.png',
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
                                picUrl: '../../../../static/news_no.gif',
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
                        ]
                    }                      
                )
            break
            case 'hotNews':
                resolve(
                    {
                        state: 1,
                        total: 1,
                        data: [
                            {
                                id: 1,
                                str: 'news',
                                tagId: 'hotNews',
                                picUrl: '../../../../static/left.png',
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
                            }                         
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
                                picUrl: '../../../../static/news_no.gif',
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
                                picUrl: '../../../../static/left.png',
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
                                picUrl: '../../../../static/news_03.jpg',
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
                                picUrl: '../../../../static/left.png',
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
                        total: 1,
                        data: [
                            {
                                id: 1,
                                str: 'news',
                                tagId: 'technicalArtical',
                                picUrl: '../../../../static/left.png',
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
                            }                         
                        ]
                    }              
                ) 
            break                                 
        }            
    })     
}