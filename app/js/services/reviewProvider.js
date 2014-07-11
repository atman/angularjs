angular.module('myApp.services')	
	.factory('reviewProvider', [function(){
		//Static data
		var reviews  = [{

				id:1,
				name: 'Atman',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare id augue ac vulputate. Vivamus laoreet viverra dignissim. Ut molestie varius tellus, in tincidunt ante porttitor nec. Cras accumsan massa a turpis sodales consequat. Phasellus accumsan neque nec massa placerat viverra. Integer consectetur bibendum rutrum. Nunc mauris diam, porta in auctor volutpat, rutrum at nisi. Curabitur posuere vulputate tellus, eget imperdiet ligula tincidunt ut. Pellentesque vitae urna ut augue accumsan egestas a eu orci. Phasellus placerat libero vitae ipsum dapibus tincidunt.',
				rating: 10,
				dateOfPost: "",
				helpfulCount: 0,
				totalCount: 0
			},
			{
				id:1,
				name: 'Batman',
				description: 'Vestibulum quis eros ultrices, gravida sapien id, pharetra sem. Ut sit amet congue dolor, et consequat mauris. Integer eu posuere lorem. Curabitur luctus vel ligula non elementum. Nullam sagittis posuere mauris, vitae rhoncus neque tristique varius. Praesent porttitor vehicula scelerisque. Vivamus gravida velit eget facilisis euismod. Vivamus in egestas lorem. Ut lobortis semper nisl, pretium aliquet turpis convallis sollicitudin',
				rating: 8,
				dateOfPost: "",
				helpfulCount: 0,
				negativeCount:0,
				totalCount: 0
			}, 
			{
				id:2,
				name: 'Batman',
				description: 'Vestibulum quis eros ultrices, gravida sapien id, pharetra sem. Ut sit amet congue dolor, et consequat mauris. Integer eu posuere lorem. Curabitur luctus vel ligula non elementum. Nullam sagittis posuere mauris, vitae rhoncus neque tristique varius. Praesent porttitor vehicula scelerisque. Vivamus gravida velit eget facilisis euismod. Vivamus in egestas lorem. Ut lobortis semper nisl, pretium aliquet turpis convallis sollicitudin',
				rating: 4,
				dateOfPost: "",
				helpfulCount: 0,
				negativeCount:0,
				totalCount: 0
			}, 
			{
				id:3,
				name: 'Catman',
				description: 'Vestibulum quis eros ultrices, gravida sapien id, pharetra sem. Ut sit amet congue dolor, et consequat mauris. Integer eu posuere lorem. Curabitur luctus vel ligula non elementum. Nullam sagittis posuere mauris, vitae rhoncus neque tristique varius. Praesent porttitor vehicula scelerisque. Vivamus gravida velit eget facilisis euismod. Vivamus in egestas lorem. Ut lobortis semper nisl, pretium aliquet turpis convallis sollicitudin',
				rating: 8,
				dateOfPost: "",
				helpfulCount: 0,
				negativeCount:0,
				totalCount: 0
			}, 
			{
				id:4,
				name: 'Fatman',
				description: 'Vestibulum quis eros ultrices, gravida sapien id, pharetra sem. Ut sit amet congue dolor, et consequat mauris. Integer eu posuere lorem. Curabitur luctus vel ligula non elementum. Nullam sagittis posuere mauris, vitae rhoncus neque tristique varius. Praesent porttitor vehicula scelerisque. Vivamus gravida velit eget facilisis euismod. Vivamus in egestas lorem. Ut lobortis semper nisl, pretium aliquet turpis convallis sollicitudin',
				rating: 6,
				dateOfPost: "",
				helpfulCount: 0,
				negativeCount:0,
				totalCount: 0
			}, 
			{
				id:5,
				name: 'Hatman',
				description: 'Vestibulum quis eros ultrices, gravida sapien id, pharetra sem. Ut sit amet congue dolor, et consequat mauris. Integer eu posuere lorem. Curabitur luctus vel ligula non elementum. Nullam sagittis posuere mauris, vitae rhoncus neque tristique varius. Praesent porttitor vehicula scelerisque. Vivamus gravida velit eget facilisis euismod. Vivamus in egestas lorem. Ut lobortis semper nisl, pretium aliquet turpis convallis sollicitudin',
				rating: 6,
				dateOfPost: "",
				helpfulCount: 0,
				negativeCount:0,
				totalCount: 0
			}, 
			{
				id:6,
				name: 'Matman',
				description: 'Vestibulum quis eros ultrices, gravida sapien id, pharetra sem. Ut sit amet congue dolor, et consequat mauris. Integer eu posuere lorem. Curabitur luctus vel ligula non elementum. Nullam sagittis posuere mauris, vitae rhoncus neque tristique varius. Praesent porttitor vehicula scelerisque. Vivamus gravida velit eget facilisis euismod. Vivamus in egestas lorem. Ut lobortis semper nisl, pretium aliquet turpis convallis sollicitudin',
				rating: 9,
				dateOfPost: "",
				helpfulCount: 0,
				negativeCount:0,
				totalCount: 0
			}, 
			{
				id:7,
				name: 'Patman',
				description: 'Vestibulum quis eros ultrices, gravida sapien id, pharetra sem. Ut sit amet congue dolor, et consequat mauris. Integer eu posuere lorem. Curabitur luctus vel ligula non elementum. Nullam sagittis posuere mauris, vitae rhoncus neque tristique varius. Praesent porttitor vehicula scelerisque. Vivamus gravida velit eget facilisis euismod. Vivamus in egestas lorem. Ut lobortis semper nisl, pretium aliquet turpis convallis sollicitudin',
				rating: 10,
				dateOfPost: "",
				helpfulCount: 0,
				negativeCount:0,
				totalCount: 0
			}, 
			{
				id:3,
				name: 'Batman',
				description: 'Vestibulum quis eros ultrices, gravida sapien id, pharetra sem. Ut sit amet congue dolor, et consequat mauris. Integer eu posuere lorem. Curabitur luctus vel ligula non elementum. Nullam sagittis posuere mauris, vitae rhoncus neque tristique varius. Praesent porttitor vehicula scelerisque. Vivamus gravida velit eget facilisis euismod. Vivamus in egestas lorem. Ut lobortis semper nisl, pretium aliquet turpis convallis sollicitudin',
				rating: 8,
				dateOfPost: "",
				helpfulCount: 0,
				negativeCount:0,
				totalCount: 0
			} 
			]

			//Set default date of static review to current date 
			for(var i=0;i<9;i++){
				reviews[i].dateOfPost = new Date();
			}

		//Return reviews for a course by matching course ID
		function getReviews(id) {
			var targetReview = [];
			
			angular.forEach(reviews, function(item, index) {
				if (item.id == id) {
					targetReview.push(item);
				}
			});

			return targetReview;
		}

		/*function updateHelpfulCount(review){

			return review;
		}*/

		//Add new review to the array
		function addReview(review){
			reviews.push(review);
		};

		return {
			getReviews: getReviews,
			addReview: addReview,
		
		}
	}])