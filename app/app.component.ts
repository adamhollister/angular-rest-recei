import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HeaderComponent} from './header/header.component';
import {HomeComponent}   from './home/home.component';
import {PostComponent}   from './posts/post.component';
import {PageComponent}   from './pages/page.component';

@Component({
	selector: 'my-app',
	template: `
		<div class="app">
			<header class="app-header clearfix">
				<h1>Angular REST receiver</h1>
				<nav>
					<ul>
						<li>
							<a [routerLink]=" ['Home'] ">Home</a>
						</li>
						<li>
							<a [routerLink]=" ['Posts'] ">Posts</a>
						</li>
						<li>
							<a [routerLink]=" ['Pages'] ">Pages</a>
						</li>
					</ul>
				</nav>
			</header>
			<main>
				<router-outlet></router-outlet>
			</main>
		</div>
	`,
	directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
	{ path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
	{ path: '/posts', name: 'Posts', component: PostComponent },
	{ path: '/pages', name: 'Pages', component: PageComponent }
])

export class AppComponent {}