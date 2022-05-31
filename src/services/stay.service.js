import { storageService } from './async-storage.service.js'
import { dataService } from './stay.data.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'stay'

export const stayService = {
    query,
    getById,
    getTopRated,
    getRandomStayId,
}
window.cs = stayService;


async function query(filterBy,exploreFilterBy) {
    let stays = await storageService.query(STORAGE_KEY)
    if(filterBy){
    if(filterBy.location) stays=stays.filter((stay => new RegExp(filterBy.location, 'i').test(stay.address.country)
    || new RegExp(filterBy.location, 'i').test(stay.address.city)))
}
    if(exploreFilterBy){
        stays=stays.filter(stay=>stay.price<=exploreFilterBy.maxPrice && stay.price>=exploreFilterBy.minPrice)
        if(exploreFilterBy.roomType){
            stays=stays.filter(stay=>stay.roomType===exploreFilterBy.roomType)
        }
        if(exploreFilterBy.amenities){
            exploreFilterBy.amenities.forEach(amn=>{stays=stays.filter(stay=>stay.amenities.includes(amn))})
        }
    }


    return stays
}
function getById(stayId) {
    return storageService.get(STORAGE_KEY, stayId)
    // return axios.get(`/api/stay/${stayId}`)
}
function getTopRated(){
    return dataService.getTopRated()
}

async function getRandomStayId(){
    const stays = await storageService.query()
    const idx = utilService.getRandomIntInclusive(0,stays.length-1)
    return stays[idx]._id
}
// async function remove(stayId) {
//     // return new Promise((resolve, reject) => {
//     //     setTimeout(reject, 2000)
//     // })
//     // return Promise.reject('Not now!');
//     await storageService.remove(STORAGE_KEY, stayId)
//     stayChannel.postMessage(getActionRemoveStay(stayId))
// }
// async function save(stay) {
//     var savedStay
//     if (stay._id) {
//         savedStay = await storageService.put(STORAGE_KEY, stay)
//         stayChannel.postMessage(getActionUpdateStay(savedStay))
        
//     } else {
//         // Later, owner is set by the backend
//         stay.owner = userService.getLoggedinUser()
//         savedStay = await storageService.post(STORAGE_KEY, stay)
//         stayChannel.postMessage(getActionAddStay(savedStay))
//     }
//     return savedStay
// }

// function subscribe(listener) {
//     stayChannel.addEventListener('message', listener)
// }
// function unsubscribe(listener) {
//     stayChannel.removeEventListener('message', listener)
// }
