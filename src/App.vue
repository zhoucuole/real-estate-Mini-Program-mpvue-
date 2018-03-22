<script>
export default {
	data() {
		return {
			webUrl: 'fdc.lin-lianhuai.site',
			globalData: {
				userInfo: null
			}
		}
	},
	mounted() {
		//调用API从本地缓存中获取数据
		if (!wx.getStorageSync("key")) {
			wx.reLaunch({
				url: "../login/login",
			})
		}
	},
	methods: {
		getUserInfo(cb) {
			var that = this
			if (!this.globalData.userInfo) {
				typeof cb == "function" && cb(this.globalData.userInfo)
				return;
			}
			//获取用户信息
			wx.getUserInfo({
				withCredentials: false,
				success: function(res) {
					that.globalData.userInfo = res.userInfo
					console.log(res)
					typeof cb == "function" && cb(that.globalData.userInfo)
				}
			})
		}
	},
}
</script>

<style>
.container {
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding: 200rpx 0;
	box-sizing: border-box;
}

/* this rule will be remove */

* {
	transition: width 2s;
	-moz-transition: width 2s;
	-webkit-transition: width 2s;
	-o-transition: width 2s;
}
</style>
