import {Component} from 'angular2/core';
import {PostService}    from './post.service';
import {Post}           from './post';

@Component({
	selector: 'posts',
	templateUrl: '/app/posts/templates/post.template.html',
	providers: [PostService]
})

export class PostComponent {
	// Create Post array
	post: Post[];

	// In case of errors
	errorString: string;

	// Dependancy Injection
	// Give this Component the _postService field now given the methods
	// from the PostService service class
	constructor(private _postService: PostService) {
	}

	// Called after AppComponent is initialised
	// get posts at this hook
	ngOnInit() {
		this.getPost();
	}

	// Get single post
	getPost() {
		// Run the getPosts method on this
		// TODO - find out more about .subscribe
		// post => this.posts = post
		// this.posts - array from PostService
		this._postService.getPosts().subscribe(
			post => this.posts = post,
			error => this.errorMessage = <any>error
		);
	}
}