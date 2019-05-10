import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap, map, take } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
	// toDoList : AngularFireList<any>;
	constructor(private router: Router, private authService: AuthService, private firebasedb: AngularFireDatabase) { }
	canActivate() {
		if ( this.authService.isLoggedIn() ) {
			return true;
		}
		this.router.navigate(['/']);
		return false;
	}
	// getToDoList(){
	// 	this.toDoList = this.firebasedb.list('task');
	// 	return this.toDoList;
	// }

	// addTask(title: string){
	// 	this.toDoList.push({
	// 		title: title,
	// 		isChecked: false
	// 	})
	// }
	// checkOrUncheckTitle($key: string, flag: boolean){
	// 	this.toDoList.update($key,{isChecked: flag});
	// }
	// removeTask($key: string){
	// 	this.toDoList.remove($key);
	// }

}
