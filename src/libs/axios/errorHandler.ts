import { AxiosError } from "axios";
import { Toast } from "../toast";

export const errorHandler = (error: AxiosError): void => {
  if (error.response) {
    const { status, data } = error.response;
    const message = (data as any)?.message || "알 수 없는 오류 발생";

    switch (status) {
      case 400:
        Toast("error", `요청 오류: ${message}`);
        break;
      case 401:
        Toast("error", "인증 오류: 로그인이 필요합니다.");
        break;
      case 403:
        Toast("error", "권한 오류: 접근 권한이 없습니다.");
        break;
      case 404:
        Toast("error", "리소스를 찾을 수 없습니다.");
        break;
      case 500:
        Toast("error", "서버에서 문제가 발생했습니다.");
        break;
      default:
        Toast("error", `오류 발생: ${message}`);
    }
  } else if (error.request) {
    Toast("error", "네트워크 오류: 서버와 연결할 수 없습니다.");
  } else {
    Toast("error", `오류: ${error.message || "알 수 없는 오류 발생"}`);
  }
};