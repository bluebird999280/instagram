type errorsType = {
	[key: string]: string;
};

const errors: errorsType = {
	"Input is invalid": "입력값이 존재하지 않거나 유효하지 않습니다.",
	"User does not exist": "사용자가 존재하지 않습니다.",
	"Password is not correct": "비밀번호가 틀렸습니다.",
	"Unable to communicate with the server": "서버에 접속할 수 없습니다.",
	"Database unknown error": "서버에 장애가 발생했습니다.",
};

function errorMessage(error?: string) {
	if (error === undefined) return false;
	return errors[error];
}

export default errorMessage;
