export default [
    /*{
        name: 'class_informations.list',
        path: '/classes',
        component: require('./components/teacher/TeacherClassInformationList.vue'),
        meta: {
            auth: true
        }
    },*/
    {
        path: '/teacher',
        component: {
            template: '<router-view></router-view>'
        },
        children: [
            {
                name: 'teacher.class_teachings.list',
                path: 'classes',
                component: require('./components/teacher/TeacherClassTeachingList.vue'),
                meta: {
                    auth: true
                }
            },
            {
                name: 'teacher.class_tests.list',
                path: 'classes/:class_teaching/tests',
                component: require('./components/teacher/class_test/TeacherClassTestList.vue'),
                meta: {
                    auth: true
                }
            },
            {
                name: 'teacher.class_tests.create_data',
                path: '/class_teachings/:class_teaching/tests/create_data',
                component: require('./components/teacher/class_test/TeacherClassTestStepData.vue'),
                meta: {
                    auth: true
                }
            },
            {
                name: 'teacher.class_tests.update_data',
                path: 'class_teachings/:class_teaching/tests/:class_test/update_data',
                component: require('./components/teacher/class_test/TeacherClassTestStepData.vue'),
                meta: {
                    auth: true
                }
            },
            {
                name: 'teacher.class_tests.questions',
                path: 'class_teachings/:class_teaching/tests/:class_test?/questions',
                component: require('./components/teacher/class_test/TeacherClassTestStepQuestions.vue'),
                meta: {
                    auth: true
                }
            },
        ]
    },
    {
        path: '/student',
        component: {
            template: '<router-view></router-view>'
        },
        children: [
            {
                name: 'student.test',
                path: 'test',
                component: {
                    template: '<div>Estudante</div>'
                }
            },
            {
                name: 'student.class_informations.list',
                path: '/classes',
                component: require('./components/student/StudentClassInformationList.vue'),
                meta: {
                    auth: true
                }
            }
        ]
    },
    {
        name: 'login',
        path: '/login',
        component: require('./components/Login.vue')
    },
    { path: '*', redirect: '/login' }
];