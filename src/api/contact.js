export function getContactCatList (catId) {
    debugger
    return new Promise((resolve, reject) => {
        switch(catId){
            case 'contact':
                resolve({
                    state: 1,
                    total: 2,
                    data: [
                        {
                            id: 1,
                            tit: 'contact',
                            content: '这是contact下的内容'
                        },
                        {
                            id: 2,
                            tit: 'contact',
                            content: '这是contact下的内容'
                        },                              
                    ]                               
                })
            break    
        }            
    })     
}