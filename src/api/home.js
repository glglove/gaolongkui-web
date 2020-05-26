export function getHomeInfo (){
    return new Promise((resolve, reject) => {
        resolve({
            state: 1,
            leftInfoNewProductInfo: [
                {
                    id: 1,
                    str: 'product',
                    picUrl: '../../../static/index_line01.jpg',
                    picTit:'二阶盲埋沉金HDI'
                },
                {
                    id: 2,
                    str: 'product',
                    picUrl: '../../../static/index_line02.jpg',
                    picTit:'盲孔HDI板'
                },
                {
                    id: 3,
                    str: 'product',
                    picUrl: '../../../static/index_line03.jpg',
                    picTit:'6层BGA手机板'
                },
                {
                    id: 4,
                    str: 'product',
                    picUrl: '../../../static/index_line04.jpg',
                    picTit:'8层沉金HDI板'
                },
                {
                    id: 5,
                    str: 'product',
                    picUrl: '../../../static/index_line05.jpg',
                    picTit:'二阶盲埋沉金HDI'
                },                                                                
                {
                    id: 6,
                    str: 'product',
                    picUrl: '../../../static/index_line06.jpg',
                    picTit:'盲孔HDI板'
                },
                {
                    id: 7,
                    str: 'product',
                    picUrl: '../../../static/index_line07.jpg',
                    picTit:'6层BGA手机板'
                },
                {
                    id: 8,
                    str: 'product',
                    picUrl: '../../../static/index_line08.jpg',
                    picTit:'8层沉金HDI板'
                },
                {
                    id: 9,
                    str: 'product',
                    picUrl: '../../../static/index_linetwo01.jpg',
                    picTit:'4层沉金HDI板'                    
                },
                {
                    id: 10,
                    str: 'product',
                    picUrl: '../../../static/index_linetwo02.jpg',
                    picTit:'8层HDI板'                    
                },  
                {
                    id: 11,
                    str: 'product',
                    picUrl: '../../../static/index_linetwo03.jpg',
                    picTit:'双面喷锡板'                    
                },   
                {
                    id: 12,
                    str: 'product',
                    picUrl: '../../../static/index_linetwo04.jpg',
                    picTit:'双面金手指板'                    
                },    
                {
                    id: 13,
                    str: 'product',
                    picUrl: '../../../static/index_linetwo05.jpg',
                    picTit:'4层沉金HDI板'                    
                },   
                {
                    id: 14,
                    str: 'product',
                    picUrl: '../../../static/index_linetwo06.jpg',
                    picTit:'8层HDI板'                    
                },   
                {
                    id: 15,
                    str: 'product',
                    picUrl: '../../../static/index_linetwo07.jpg',
                    picTit:'双面喷锡板'                    
                },  
                {
                    id: 16,
                    str: 'product',
                    picUrl: '../../../static/index_linetwo08.jpg',
                    picTit:'双面金手指板'                    
                },                                                                                            
            ],
            midInfoCompanyInfo: {
                state: 1,
                id: 1,
                pic: '../../../static/company.jpg',
                str: 'about',
                content: '是一家专业制造高精密双面及多层线路板的生产型企业.拥有近8000平方米的生产厂房。 现有员工400余人。年生产力30万平方米。拥有进出口权，可以转厂。公司产品质量符合美国IPC-A-600F标准,通过了欧盟RoHS指令标准...'
            }
        })
    })
}