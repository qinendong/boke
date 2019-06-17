import { get, post } from './http.js'

export const ceshi = p =>get('/api/4/news/latest', p);	
//export const login = p =>post('/login.vuelogin', p);
export const posts = p =>get('/api/posts', p);
export const posts_id = p =>post('/api/post_id', p);
export const wenzhang = p =>get('/api/wenzhang', p);
export const wenzhang_id = p =>post('/api/wenzhang_id', p);
export const swiper = p =>get('/api/swiper', p);
export const counter = p =>post('/api/counter', p);
export const project = p =>get('/api/project', p);
export const echarts = p =>get('/api/echarts', p);
export const select = p =>post('/api/select', p);
export const login = p =>post('/api/login', p);
export const register = p =>post('/api/register', p);
export const yasuo = p =>post('/api/yasuo', p);

export const manage_index = p =>get('/api/manage_index', p);
export const manage_user = p =>get('/api/manage_user', p);
export const manage_wenzhang = p =>get('/api/manage_wenzhang', p);
export const manage_login = p =>post('/api/manage_login', p);
export const manage_admin = p =>get('/api/manage_admin', p);
export const m_wenzhang_add = p =>post('/api/m_wenzhang_add', p);
export const m_post_add = p =>post('/api/m_post_add', p);




