import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
/* import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import tableRouter from './modules/table'
import nestedRouter from './modules/nested' */

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
/* eslint-disable */
export const constantRoutes = [{
    path: '/',
    redirect: '/playlist/list'
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/playlist',
    component: Layout,
    children: [{
        path: 'list',
        component: () => import('@/views/playlist/list'),
        name: '歌单管理',
        meta: {
          title: '歌单管理',
          icon: 'table'
        }
      },
      {
        path: 'edit/:id',
        component: () => import('@/views/playlist/edit'),
        name: '歌单编辑',
        meta: {
          title: '歌单编辑',
          icon: 'table'
        },
        hidden: true
      }
    ]
  },
  {
    path: '/swiper',
    component: Layout,
    children: [{
      path: 'list',
      component: () => import('@/views/swiper/list'),
      name: '轮播图管理',
      meta: {
        title: '轮播图管理',
        icon: 'example',
        noCache: true
      }
    }]
  },
  {
    path: '/blog',
    component: Layout,
    children: [{
      path: 'list',
      component: () => import('@/views/blog/list'),
      name: '评论管理',
      meta: {
        title: '评论管理',
        icon: 'tree'
      }
    }]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = []

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
