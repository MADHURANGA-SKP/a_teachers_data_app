import { Component } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'teachersapp';
  teacherData! : Observable<any>
  constructor(private firestore: Firestore){
    this.getData()
  }
//Create Query
  addData(f:any){
    const collectionInstance = collection(this.firestore, "users")
    addDoc(collectionInstance, f.value)
    .then(()=>{
      console.log('data Saved Sucessfully')
    })
    .catch((error) => {
      console.log(error)
    })
  }
//Read Query
  getData(){
    const collectionInstance = collection(this.firestore, "users")
    collectionData(collectionInstance,{idField:'id'} ).subscribe(val => {
      console.log(val)
    })

    this.teacherData = collectionData(collectionInstance, {idField:'id'} )
  }




  }
