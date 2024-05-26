// note service
import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from './../../../services/util.service.js'
const NOTE_KEY = 'notesDB'


_createNotes()



function _createNotes() {
    let notes = utilService.loadFromStorage(NOTE_KEY)
    if (!notes || !notes.length) {
        const notes = [ 
            { 
              id: 'n101', 
              createdAt: Date.now(),
              type: 'NoteTxt', 
              isPinned: true, 
              style: { 
                backgroundColor: '#00d' 
              }, 
              info: { 
                txt: 'Fullstack Me Baby!' 
              } 
            }, 
            // { 
            //   id: 'n102', 
            //   createdAt: Date.now(),
            //   type: 'NoteImg', 
            //   isPinned: false, 
            //   info: { 
            //     url: 'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U', 
            //     title: 'Bobi and Me' 
            //   }, 
            //   style: { 
            //     backgroundColor: '#00d' 
            //   } 
            // }, 
            // { 
            //   id: 'n103', 
            //   createdAt: Date.now(),
            //   type: 'NoteTodos', 
            //   isPinned: false, 
            //   info: { 
            //     title: 'Get my stuff together', 
            //     todos: [ 
            //       { txt: 'Driving license', doneAt: null }, 
            //       { txt: 'Coding power', doneAt: 187111111 } 
            //     ] 
            //   } 
            // } 
          ]   
          utilService.saveToStorage(NOTE_KEY, notes)
        }
        return notes
      }