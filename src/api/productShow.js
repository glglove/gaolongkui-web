export function getProductCatList (catId) {
    debugger
    return new Promise((resolve, reject) => {
        switch(catId){
            case 'more':
                resolve([
                    {
                        id: 1,
                        tit: 'more分类',
                        content: '这是more分类下的内容'
                    },
                    {
                        id: 2,
                        tit: 'more分类',
                        content: '这是more分类下的内容'
                    },
                    {
                        id: 3,
                        tit: 'more分类',
                        content: '这是more分类下的内容'
                    }                                
                ])
            break
            case 'high':
                resolve(
                    [
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
                ) 
            break        
        }            
    })     
}