import SchedulerManager from './components/service/SchedulerManager.vue'
import SchedulerDetail from './components/service/SchedulerDetail.vue'
import SchedulerEdit from './components/service/SchedulerEdit.vue'

export const routes = [
  {
    path: '',
    name: 'home',
    components: {
      default: SchedulerManager
    }
  },
  {
    path: '/scheduler',
    // components: {
    //   default: User,
    //   'header-bottom': Header
    // },
    children: [
      // {
      //   path: '',
      //   component: UserStart
      // },
      {
        path: ':id',
        component: SchedulerDetail,
        beforeEnter: (to, from, next) => {  // router에서의 middleware
          console.log('routes in "beforeEnter"')
          next()
        }
      },
      {
        path: ':id/edit',
        component: SchedulerEdit,
        name: 'userEdit'
      }
    ]
  },
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
