export interface IGetFeedListParams {
	max: number;
	count: number;
}

export interface IFeedData {
	_id: string;
	author: string;
	caption: string;
	images: string[];
	good: number;
	comment: {
		author: string;
		comment: {
			author: string;
			body: string;
			date: string;
			comment: {
				author: string;
				body: string;
				date: string;
			} | null;
		} | null;
	}[];
	createDate: string;
}

export interface IUploadFeedBody {
	caption: string;
	files?: FileList;
}
