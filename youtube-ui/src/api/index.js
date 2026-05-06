export const GetPost = async()=>{
    const response =await fetch('https://api.freeapi.app/api/v1/public/youtube/videos', {
        method:'GET'
    })
    return response.json()
}