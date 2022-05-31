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


async function query(filterBy, exploreFilterBy) {
    let stays = await storageService.query(STORAGE_KEY)
    if (filterBy) {
        if (filterBy.location) stays = stays.filter((stay => new RegExp(filterBy.location, 'i').test(stay.address.country)
            || new RegExp(filterBy.location, 'i').test(stay.address.city)))
    }
    if (exploreFilterBy) {
        stays = stays.filter(stay => stay.price <= exploreFilterBy.maxPrice && stay.price >= exploreFilterBy.minPrice)
        if (exploreFilterBy.roomType) {
            stays = stays.filter(stay => stay.roomType === exploreFilterBy.roomType)
        }
        if (exploreFilterBy.amenities) {
            exploreFilterBy.amenities.forEach(amn => { stays = stays.filter(stay => stay.amenities.includes(amn)) })
        }
    }
    return stays
}
function getById(stayId) {
    return storageService.get(STORAGE_KEY, stayId)
}
function getTopRated() {
    return dataService.getTopRated()
}

async function getRandomStayId() {
    const stays = await storageService.query()
    const idx = utilService.getRandomIntInclusive(0, stays.length - 1)
    return stays[idx]._id
}