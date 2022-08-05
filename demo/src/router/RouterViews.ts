import { lazy } from "react";
const routers = [
    {
        from: '/',
        to: '/index/home'
    },
    {
        path: '/index',
        element: lazy(() => import('../views/Index')),
        children: [
            {
                path: '/index/home',
                name: '首页',
                element: lazy(() => import('../views/home/Home'))
            },
            {
                path: '/index/classify',
                name: '分类',
                element: lazy(() => import('../views/classify/Classify'))
            }
        ]
    }
];
export default routers