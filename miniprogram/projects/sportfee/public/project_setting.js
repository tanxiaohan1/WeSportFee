module.exports = { //activityfee
	PROJECT_COLOR: '#000000',
	NAV_COLOR: '#ffffff',
	NAV_BG: '#000000',


	// setup
	SETUP_CONTENT_ITEMS: [
		{ title: '关于我们', key: 'SETUP_CONTENT_ABOUT' },
	],

	// 用户
	USER_REG_CHECK: false,
	USER_FIELDS: [
		{ mark: 'sex', title: '性别', type: 'select', selectOptions: ['男', '女'], must: true },
	],
	USER_CHECK_FORM: {
		name: 'formName|must|string|min:1|max:30|name=昵称',
		mobile: 'formMobile|must|mobile|name=手机',
		pic: 'formPic|false|string|name=头像',
		forms: 'formForms|array'
	},


	NEWS_NAME: '通知公告',
	NEWS_CATE: [
		{ id: 1, title: '通知公告', style: 'leftbig1' },

	],
	NEWS_FIELDS: [
	],

	ACTIVITY_NAME: '赛事',
	ACTIVITY_CATE: [
		{ id: 1, title: '马拉松' },
		{ id: 2, title: '乒乓球' },
		{ id: 3, title: '羽毛球' },
		{ id: 4, title: '网球' },
		{ id: 5, title: '田径' },
		{ id: 6, title: '游泳' },

	],
	ACTIVITY_FIELDS: [
		{ mark: 'desc', title: '赛事介绍', type: 'content', must: true },
		{ mark: 'cover', title: '封面小图', ext: { hint: ' 用于首页和列表页展示' }, type: 'image', min: 1, max: 1, must: true },
		{ mark: 'coverbig', title: '封面大图', ext: { hint: '用于首页轮播图和详情展示' }, type: 'image', min: 1, max: 1, must: true }, 
	],
	ACTIVITY_JOIN_FIELDS: [
		{ mark: 'name', type: 'text', title: '姓名', must: true, max: 30 },
		{ mark: 'phone', type: 'mobile', title: '手机', must: true, edit: false }
	],
 

}