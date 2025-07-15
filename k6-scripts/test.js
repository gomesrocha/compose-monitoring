import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const res = http.get('http://localhost:8000/health');
  check(res, { 'status was 200': (r) => r.status === 200 });
}
