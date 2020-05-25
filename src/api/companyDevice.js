export function getCompanyDeviceCatList (catId) {
    debugger
    return new Promise((resolve, reject) => {
        switch(catId){
            case 'companyDevice':
                resolve({
                    state: 1,
                    total: 2,
                    data: [
                        {
                            id: 1,
                            tit: 'companyDevice',
                            content: '这是companyDevice下的内容'
                        },
                        {
                            id: 2,
                            tit: 'companyDevice',
                            content: '这是companyDevice下的内容'
                        },                              
                    ]                               
                })
            break    
        }            
    })     
}