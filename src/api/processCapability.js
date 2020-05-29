export function getProcessCapabilityCatList (catId) {
    debugger
    return new Promise((resolve, reject) => {
        switch(catId){
            case 'processCapability':
                resolve(
                    {
                        state: 1,
                        data: {
                            id: 1,
                            tagId: 'processCapability',
                            str: 'processCapability',
                            contentData: {
                                tit: '制程能力',
                                content: 
                                    `<p>
                                    <span style="color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;">&nbsp;</span><span style="background-color:#FFFFFF;color:#555555;font-family:宋体;line-height:21px;">硬板制程能力</span><span style="color:#595959;font-family:Verdana, Arial;background-color:#FFFFFF;"></span>
                                    <table border="1" cellpadding="0" cellspacing="1" style="margin:0px;padding:0px;font-size:12px;background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        <tbody>
                                            <tr>
                                                <td width="31">
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td width="98">
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td width="72">
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td width="179">
                                                    <p align="center">
                                                        <strong>英制</strong>
                                                    </p>
                                                </td>
                                                <td width="178">
                                                    <p align="center">
                                                        <strong>公制</strong>
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        1
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        最大拼版尺寸
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        22" x 26"
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        550 x 650mm
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        2
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        孔径
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        最小成品孔径
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        0.004"
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        0.10mm
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        成品孔公差
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        沉铜孔
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        ±0.003"
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        ±0.075mm
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        非沉铜孔
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        ±0.002"
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        ±0.050mm
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        压合
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        ±0.002"
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        ±0.050mm
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        纵横比
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        9 : 1
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        9 : 1
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        3
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        激光孔
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        微孔直径
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        0.004" - 0.010"
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        0.10 - 0.15mm
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        纵横比
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        1 : 1
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        1 : 1
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        4
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        最小线宽线距
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        ½oz / 18μm
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        0.003" / 0.003"
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        0.075 / 0.075mm
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        1oz / 35μm
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        0.006" / 0.006"
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        0.15 / 0.15mm
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        2oz / 70μm
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        0.008" / 0.008"
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        0.20 / 0.20mm
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        3oz / 105μm
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        0.010" / 0.010"
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        0.25 / 0.25mm
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        5
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        其他
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        防焊
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        ±0.003"
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        ±0.075mm
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        层间距
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        ±0.0024"
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        ±0.060mm
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        孔铜距(外层)
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        ±0.003"
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        ±0.075mm
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        最小孔铜距 (内层)
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        2L - 8L
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        0.010"
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        0.25mm
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        10L - 22L
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        0.012"
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        0.30mm
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        6
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        外形
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        板边到板边的距离
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        ±0.004"
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        ±0.100mm
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        孔到板边的距离
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        ±0.004"
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        ±0.100mm
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        最小铜线至板边距
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        外层
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        0.010"
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        0.25mm
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        内层
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        0.016"
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        0.40mm
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        7
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        最大铜厚
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        4oz
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        140μm
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        8
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        最大板厚
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        0.189"
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        4.80 mm
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        9
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        最小板厚
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        双面
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        0.008"
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        0.20mm
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        4层
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        0.016"
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        0.40mm
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        6 -22层
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        0.020"
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        0.60mm
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        10
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        最小孔铜厚度
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        0.004"
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        0.10mm
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        11
                                                    </p>
                                                </td>
                                                <td colspan="2">
                                                    <p align="center">
                                                        最小防焊厚度
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        0.004"
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        0.10mm
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        12
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        阻抗控制 (欧姆)
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        ±10%
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        ±10%
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        13
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        层数
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td colspan="2">
                                                    <p align="center">
                                                        1~22层
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        14
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        板材
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td colspan="2">
                                                    <p align="center">
                                                        FR-4，CEM-3，铝基板材，Rogers板材，高TG基材
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p align="center">
                                                        15
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        表面处理
                                                    </p>
                                                </td>
                                                <td>
                                                    <p align="center">
                                                        &nbsp;
                                                    </p>
                                                </td>
                                                <td colspan="2">
                                                    <p align="center">
                                                        喷锡、无铅喷锡、沉金、沉银、OSP、金手指、选择性沉金，电镀金
                                                    </p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        &nbsp;
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        &nbsp;
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        铝基板制程能力
                                    </p>
                                    <p style="background-color:#FFFFFF;color:#555555;font-family:宋体;">
                                        Layers:1-4 Layers<br />
                                Max Dimension:1185mm*480mm<br />
                                Min Dimension:5mm*5mm<br />
                                Min Trace&amp; line spacing:0.1mm<br />
                                Warp &amp; Twist:&lt;0.5mm<br />
                                Finished Product Thickness:0.2-4.5 mm<br />
                                Copper Thickness:18-240 um<br />
                                Hole Inner Copper Thickness:18-40 um<br />
                                Hole Position Tolerance:+/-0.075 mm<br />
                                Min Punching Hole Diameter:1.0mm<br />
                                Min Punching Square Slot Specification::0.8mm*0.8mm<br />
                                Silk Prints Circuit Tolerance:+/-0.075 mm<br />
                                Outline Tolerance:CNC:+/-0.1mm; Mould:+/- 0.75mm<br />
                                Min Hole Size:0.8 mm (No limitation in Max hole dimention)<br />
                                V-CUT Angle Deviation:+/-0.5°<br />
                                V-CUT Board Thickness Range:0.6mm-3.2mm<br />
                                Min Component Mark Character Style:0.15 mm<br />
                                Min Open Window for PADs:0.01mm<br />
                                Solder Mask:Green, White, Blue, Matte black, Grey<br />
                                Surface Finishing:HASL,Immersion Tin/Silver/Gold,gold plating,OSP
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