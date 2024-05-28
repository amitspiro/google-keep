// mail service
'use strict'

import { utilService } from "../../../services/util.service.js"

const MAILS_KEY = 'Mails'

const emails = [{
    id: 'e101',
    subject: 'pizza promo!!',
    body: ' buy 2 get 1 free!!',
    isRead: false,
    isSelected: false,
    isStared: false,
    isImportant: false,
    sentAt:1551133930594,
    removedAt: null,
    from: 'PizzaMan@pizza.com',
    to: 'user@appsus.com'
},
{
    id: 'e102',
    subject: 'borexas time',
    body: ' hi baby its borexas time.... i know what that means...',
    isRead: false,
    isSelected: false,
    isStared: false,
    isImportant: false,
    sentAt: 1551133930594,
    removedAt: null,
    from: 'puki@mori.com',
    to: 'user@appsus.com'
},
{
    id: 'e103',
    subject: 'shwarma!',
    body: 'dont u just love shawarma?',
    isRead: false,
    isSelected: false,
    isStared: false,
    isImportant: false,
    sentAt: 1551133930594,
    removedAt: null,
    from: 'muki@shwarma.com',
    to: 'user@appsus.com'
},
{id: 'e104',  
subject: 'Miss you!',  
body: 'Would love to catch up sometimes',  
isRead: false,  
sentAt : 1551133930594,  
removedAt : null,  
from: 'momo@momo.com', 
to: 'user@appsus.com' 
}
]

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

_createMails()

function _createMails() {
    let Mails = utilService.loadFromStorage(MAILS_KEY)
    if (!Mails || !Mails.length) {
        Mails = emails
        utilService.saveToStorage(MAILS_KEY, Mails)
    }
}