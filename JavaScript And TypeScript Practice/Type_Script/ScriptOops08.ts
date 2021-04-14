  namespace Blog {
	export interface IPost {
	  title: string;
	  body: string;
	}

	export class Post implements IPost {
	  title: string;
	  body: string;

	  constructor(post: IPost) {
	    this.title = post.title;
	    this.body = post.body;
	  }

	  printPost() {
	  	console.log(this.title);
	  	console.log(this.body);
	  }
	}
}
