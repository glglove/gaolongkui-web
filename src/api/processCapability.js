export function getProcessCapabilityCatList (catId) {
    debugger
    return new Promise((resolve, reject) => {
        switch(catId){
            case 'processCapability':
                resolve({
                    state: 1,
                    total: 2,
                    data: [
                        {
                            id: 1,
                            tit: 'processCapability',
                            content: '这是processCapability下的内容'
                        },
                        {
                            id: 2,
                            tit: 'processCapability',
                            content: '这是processCapability下的内容'
                        },                              
                    ]                               
                })
            break    
        }            
    })     
}