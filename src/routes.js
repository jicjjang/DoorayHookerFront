import SchedulerManager from './components/service/schedule/SchedulerManager.vue'
import SchedulerDetail from './components/service/schedule/SchedulerDetail.vue'
import SchedulerEdit from './components/service/schedule/SchedulerEdit.vue'

export const routes = [
  {
    path: '',
    name: 'home',
    components: {
      default: SchedulerManager
    }
  },
  {
    path: '/scheduler/:id',
    component: SchedulerDetail,
    name: 'user',
    beforeEnter: (to, from, next) => {  // router에서의 middleware
      next()
    }
  },
  {
    path: '/scheduler/:id/edit',
    component: SchedulerEdit,
    name: 'userEdit',
    beforeEnter: (to, from, next) => {  // router에서의 middleware
      next()
    }
  },
  // {
  //   path: '/scheduler',
  //   // components: {
  //   //   default: User,
  //   //   'header-bottom': Header
  //   // },
  //   children: [
  //     // {
  //     //   path: '',
  //     //   component: UserStart
  //     // },
  //     {
  //       path: ':id',
  //       component: SchedulerDetail,
  //       beforeEnter: (to, from, next) => {  // router에서의 middleware
  //         console.log('routes in "beforeEnter"')
  //         next()
  //       }
  //     },
  //     {
  //       path: ':id/edit',
  //       component: SchedulerEdit,
  //       name: 'userEdit'
  //     }
  //   ]
  // },
  {
    path: '/redirect-me',
    // redirect: '/user'
    redirect: {
      name: 'home'
    }
  },
  {    // 잘못된 url은 무조건 home으로 보낸다.
    path: '*',
    redirect: '/'
  }
]
