# Teachersapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Additional Details about development

I have created these things for the project and never used them, cause it been helps me to understand it functionalty

in `app.component.ts` i have created Update Query and Delete query for the teachers data app and, its funnctioning perfectly

               Update Query
                    updateData(id: string){
                    const docInstance = doc(this.firestore, 'users', id)
                    const updateData= {
                      Name : 'updatedName'
                    }
                    updateDoc(docInstance,updateData)
                    .then(()=>{
                      console.log('Data Updated')
                    })
                    .catch((error)=>{
                      console.log(error)
                    })
                      }

                Delete query
                    deleteData(id: string ){
                      const docInstance = doc(this.firestore, "users" , id)
                      deleteDoc(docInstance)
                      .then(() => {
                        console.log("data deleted")
                      })
                    }

button for the above process

                <button (click)="updateData(data.id)">Update</button><button (click)="deleteData(data.id)">Delete</button>
