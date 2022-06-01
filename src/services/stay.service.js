import { storageService } from './async-storage.service.js'
import { dataService } from './stay.data.js'
import { utilService } from './util.service.js'
// import { httpService } from './http.service.js'

const STORAGE_KEY = 'stay'

export const stayService = {
    query,
    getById,
    getTopRated,
    getRandomStayId,
}
window.cs = stayService;

async function query(filterBy, exploreFilterBy) {
    let stays = await storageService.query(STORAGE_KEY)
    // let stays = await httpService.get('stay',filterBy)
    if (filterBy) {
        if (filterBy.location) stays = stays.filter((stay => new RegExp(filterBy.location, 'i').test(stay.address.country)
            || new RegExp(filterBy.location, 'i').test(stay.address.city)))
    }
    if (exploreFilterBy) {
        stays = stays.filter(stay => stay.price <= exploreFilterBy.maxPrice && stay.price >= exploreFilterBy.minPrice)
        if (exploreFilterBy.roomTypes) {
            const fullRoomTypes = ['Entire home/apt', 'Hotel room', 'Private room', 'Shared room']
            fullRoomTypes.forEach(type => {
                if (!exploreFilterBy.roomTypes.includes(type)) stays = stays.filter(stay => stay.roomType !== type)
            })
        }
        if (exploreFilterBy.amenities) {
            exploreFilterBy.amenities.forEach(amn => { stays = stays.filter(stay => stay.amenities.includes(amn)) })
        }
    }
    return stays
}
async function getById(stayId) {
    return storageService.get(STORAGE_KEY, stayId)
    // return await httpService.get(`stay/${stayId}`)
}

async function addStay(stay) {
    // const addedStay = await httpService.post('stay', stay)
    // return addedStay
}


function getTopRated() {
    return dataService.getTopRated()
}

async function getRandomStayId() {
    const stays = await storageService.query()
    const idx = utilService.getRandomIntInclusive(0, stays.length - 1)
    return stays[idx]._id
}