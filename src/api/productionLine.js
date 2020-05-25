export function getProductionLineCatList (catId) {
    debugger
    return new Promise((resolve, reject) => {
        switch(catId){
            case 'productionLine':
                resolve({
                    state: 1,
                    total: 2,
                    data: [
                        {
                            id: 1,
                            tit: 'productionLine',
                            content: '这是productionLine下的内容'
                        },
                        {
                            id: 2,
                            tit: 'productionLine',
                            content: '这是productionLine下的内容'
                        },                              
                    ]                               
                })
            break    
        }            
    })     
}