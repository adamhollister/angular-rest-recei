// Import some libraries which we need
// to get the REST data
import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';

import {Page}           from 'page';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';

// Injectable Decorator
@Injectable()

// Create PostService service class
export class PageService {
	// Give the Http methods to new http field
	constructor(private http:Http) {
	}

	// var storing JSON endpoint
	private _pagesUrl = 'http://apitesting.wpengine.com/wp-json/wp/v2/pages';

	// getPosts() method
	getPages() {
		// return value of .http (populated with Http which we are passing postsUrl as URL to run GET request)
		return this.http.get(this._pagesUrl)
						// Transfer resulting string into array called Posts[] in JSON format
						.map(res => <Pages[]> res.json())
						// Catch errors
						.catch(this.handleError);
	}

	private handleError(error: Response) {
		console.error(error);
		// return errors
		return Observable.throw(error.json().error || 'Server error');
	}


}