export interface ApiResponse {
  status: 'success' | 'fail' | 'error';
  data?: any;
  message?: any;
  code?: any;
}
