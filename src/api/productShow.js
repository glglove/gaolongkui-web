export function getProductCatList (catId, pageSize = 10, pageNum = 1) {
    debugger
    return new Promise((resolve, reject) => {
        switch(catId){
            case 'more':
                resolve({
                    state: 1,
                    total: 3,
                    data:[
                        {
                            id: 1,
                            catId: catId,
                            tit: 'more分类',
                            content: '这是more分类下的内容'
                        },
                        {
                            id: 2,
                            catId: catId,
                            tit: 'more分类',
                            content: '这是more分类下的内容'
                        },
                        {
                            id: 3,
                            catId: catId,
                            tit: 'more分类',
                            content: '这是more分类下的内容'
                        }                                
                    ]
                })
            break

            case 'high':
                resolve({
                    state: 1,
                    total: 2,
                    data: [
                        {
                            id: 1,
                            tit: 'high分类',
                            content: '这是High分类下的内容'
                        },
                        {
                            id: 2,
                            tit: 'high分类',
                            content: '这是High分类下的内容'
                        },                              
                    ]                     
                }) 
            break  

            case 'aluminium':
                resolve({
                    state: 1,
                    total: 2,
                    data: [
                        {
                            id: 1,
                            tit: 'aluminium',
                            content: '这是aluminium下的内容'
                        },
                        {
                            id: 2,
                            tit: 'aluminium',
                            content: '这是aluminium下的内容'
                        },                              
                    ]                     
                }) 
            break 

            case 'phone':
                resolve({
                    state: 1,
                    total: 2,
                    data: [
                        {
                            id: 1,
                            tit: 'phone',
                            content: '这是phone下的内容'
                        },
                        {
                            id: 2,
                            tit: 'phone',
                            content: '这是phone下的内容'
                        },                              
                    ]                     
                }) 
            break  
            
            case 'double':
                resolve({
                    state: 1,
                    total: 2,
                    data: [
                        {
                            id: 1,
                            tit: 'double',
                            content: '这是double下的内容'
                        },
                        {
                            id: 2,
                            tit: 'double',
                            content: '这是double下的内容'
                        },                              
                    ]                     
                }) 
            break                
            
            case 'impedance':
                resolve({
                    state: 1,
                    total: 2,
                    data: [
                        {
                            id: 1,
                            tit: 'impedance',
                            content: '这是impedance下的内容'
                        },
                        {
                            id: 2,
                            tit: 'impedance',
                            content: '这是impedance下的内容'
                        },                              
                    ]                     
                }) 
            break  

            case 'special':
                resolve({
                    state: 1,
                    total: 2,
                    data: [
                        {
                            id: 1,
                            tit: 'special',
                            content: '这是special下的内容'
                        },
                        {
                            id: 2,
                            tit: 'special',
                            content: '这是special下的内容'
                        },                              
                    ]                     
                }) 
            break              
            
        }            
    })     
}