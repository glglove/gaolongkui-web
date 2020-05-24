export function getAboutCatList (catId) {
    debugger
    return new Promise((resolve, reject) => {
        switch(catId){
            case 'companyProfile':
                resolve([
                    {
                        id: 1,
                        tit: 'companyProfile',
                        content: '这是companyProfile下的内容'
                    },
                    {
                        id: 2,
                        tit: 'companyProfile',
                        content: '这是companyProfile下的内容'
                    },
                    {
                        id: 3,
                        tit: 'companyProfile',
                        content: '这是companyProfile下的内容'
                    }                                
                ])
            break
            case 'speech':
                resolve(
                    [
                        {
                            id: 1,
                            tit: 'speech分类',
                            content: '这是speech分类下的内容'
                        },
                        {
                            id: 2,
                            tit: 'speech分类',
                            content: '这是speech分类下的内容'
                        },                              
                    ]                
                ) 
            break  
            case 'companyFramework':
                resolve(
                    [
                        {
                            id: 1,
                            tit: 'companyFramework分类',
                            content: '这是companyFramework分类下的内容'
                        },
                        {
                            id: 2,
                            tit: 'companyFramework分类',
                            content: '这是companyFramework分类下的内容'
                        },                              
                    ]                
                ) 
            break   
            case 'companyCulture':
                resolve(
                    [
                        {
                            id: 1,
                            tit: 'companyCulture',
                            content: '这是companyCulture下的内容'
                        },
                        {
                            id: 2,
                            tit: 'companyCulture',
                            content: '这是companyCulture下的内容'
                        },                              
                    ]                
                ) 
            break                                 
        }            
    })     
}