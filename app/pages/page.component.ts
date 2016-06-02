import {Component} from 'angular2/core';
import {PageService}    from './page.service';
import {Page}           from './page';

@Component({
	selector: 'pages',
	templateUrl: '/app/pages/templates/page.template.html',

	providers: [PageService]
})

export class PageComponent {
	// Create Post array
	post: Page[];

	// In case of errors
	errorString: string;

	// Dependancy Injection
	// Give this Component the _postService field now given the methods
	// from the PostService service class
	constructor(private _pageService: PageService) {}

	// Called after AppComponent is initialised
	// get posts at this hook
	ngOnInit() {
		this.getPage();
	}

	// Get single post
	getPage() {
		// Run the getPosts method on this
		// TODO - find out more about .subscribe
		// post => this.posts = post
		// this.posts - array from PostService
		this._pageService.getPages().subscribe(
			page => this.pages = page,
			error => this.errorMessage = <any>error
		);
	}
}