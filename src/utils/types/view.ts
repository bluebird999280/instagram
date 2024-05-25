export interface IGetFeedListParams {
	max: number;
	count: number;
}

export interface IFeedData {
	_id: string;
	author: string;
	caption: string;
	images: string[];
	good: {
		count: number;
		pressLike: boolean;
	};
	comment:
		| {
				author: string;
				body: string;
				date: string;
				comment:
					| {
							author: string;
							body: string;
							date: string;
					  }[]
					| [];
		  }[]
		| [];
	createDate: string;
}

export interface IUploadFeedBody {
	caption: string;
	files?: FileList;
}
