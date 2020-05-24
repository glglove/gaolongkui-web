export function getNewsCatList (catId) {
    debugger
    return new Promise((resolve, reject) => {
        switch(catId){
            case 'companyNews':
                resolve([
                    {
                        id: 1,
                        tit: 'companyNews',
                        content: '这是companyNews下的内容'
                    },
                    {
                        id: 2,
                        tit: 'companyNews',
                        content: '这是companyNews下的内容'
                    },
                    {
                        id: 3,
                        tit: 'companyNews',
                        content: '这是companyNews下的内容'
                    }                                
                ])
            break
            case 'hotNews':
                resolve(
                    [
                        {
                            id: 1,
                            tit: 'hotNews分类',
                            content: '这是hotNews分类下的内容'
                        },
                        {
                            id: 2,
                            tit: 'hotNews分类',
                            content: '这是hotNews分类下的内容'
                        },                              
                    ]                
                ) 
            break  
            case 'industryInformation':
                resolve(
                    [
                        {
                            id: 1,
                            tit: 'industryInformation分类',
                            content: '这是industryInformation分类下的内容'
                        },
                        {
                            id: 2,
                            tit: 'industryInformation分类',
                            content: '这是industryInformation分类下的内容'
                        },                              
                    ]                
                ) 
            break   
            case 'technicalArtical':
                resolve(
                    [
                        {
                            id: 1,
                            tit: 'technicalArtical',
                            content: '这是technicalArtical下的内容'
                        },
                        {
                            id: 2,
                            tit: 'technicalArtical',
                            content: '这是technicalArtical下的内容'
                        },                              
                    ]                
                ) 
            break                                 
        }            
    })     
}