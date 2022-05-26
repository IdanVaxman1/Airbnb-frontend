import { dataService } from "./stay.data"


const STORAGE_KEY = 'stay'


export const storageService = {
    query,
    get,
    post,
    put,
    remove,
    postMany,
    queryUser
}


function query(entityType, delay = 50) {
    let entities = JSON.parse(localStorage.getItem(entityType)) || createStays()
    let json = JSON.stringify(entities)
    localStorage.setItem(entityType, json)
    if(entities) console.log(entities)
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(entities)
        }, delay)
    })
}

function queryUser(entityType, delay = 50) {
    var entities = JSON.parse(localStorage.getItem(entityType)) || createUsers()
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(entities)
        }, delay)
    })
}

function get(entityType, entityId) {
    return query(entityType)
        .then(entities => {
             entities.find(entity => entity.host._id === entityId )
        })
}

function post(entityType, newEntity) {
    newEntity._id = _makeId()
    return query(entityType)
        .then(entities => {
            entities.push(newEntity)
            _save(entityType, entities)
            return newEntity
        })
}

function put(entityType, updatedEntity) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
            entities.splice(idx, 1, updatedEntity)
            _save(entityType, entities)
            return updatedEntity
        })
}

function remove(entityType, entityId) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === entityId)
            entities.splice(idx, 1)
            _save(entityType, entities)
        })
}

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}

function postMany(entityType, newEntities) {
    return query(entityType)
        .then(entities => {
            newEntities = newEntities.map(entity => ({ ...entity, _id: _makeId() }))
            entities.push(...newEntities)
            _save(entityType, entities)
            return entities
        })
}

function createStays(){
    return dataService.getStays()
}

function createUsers() {
    return [{
        "fullname": "Edgar",
        "imgUrl": "https://a0.muscache.com/im/pictures/d17abb7c-beb0-4dbe-976e-fc633de18b4b.jpg?aki_policy=profile_small",
        "username": "edgar",
        "password": "edgar",
        "_id": "622f3401e36c59e6164fab4d"
    },
    {
        "fullname": "Leo",
        "imgUrl": "https://robohash.org/59985?set=set1",
        "username": "leo",
        "password": "leo",
        "_id": "622f3401e36c59e6164fab4e"
    },
    {
        "fullname": "Margaux",
        "imgUrl": "https://robohash.org/3805403?set=set1",
        "username": "mar",
        "password": "Margaux",
        "_id": "622f3401e36c59e6164fab4f"
    }]
}
