<template>
	<view class="content">
		<view class="frame-a">
			<view class="frame-b">
				<view class="day">{{yangli}}</view>
				<view class="frame">
					<view class="month">{{yinli}}</view>
				</view>
				<view class="yiji">
					<view class="yi">
						<view class="circle">宜</view>
						<view class="yiji-text">
							{{yi}}
						</view>
					</view>
					<view class="ji">
						<view class="circle">忌</view>
						<view class="yiji-text">
							{{ji}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="various">
			<view class="among">
				<view class="among-left">冲煞</view>
				<view class="among-right">{{chongsha}}</view>
			</view>
			<view class="among">
				<view class="among-left">五行</view>
				<view class="among-right">{{wuxing}}</view>
			</view>
			<view class="among">
				<view class="among-left">吉神</view>
				<view class="among-right">{{jishen}}</view>
			</view>
			<view class="among">
				<view class="among-left">凶神</view>
				<view class="among-right">{{xiongshen}}</view>
			</view>
			<view class="among">
				<view class="among-left">彭祖</view>
				<view class="among-right">{{baiji}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				"yangli": "", // 阳历
				"yinli": "", // 阴历
				"wuxing": "", // 五行
				"chongsha": "", // 冲煞
				"baiji": "", // 百忌
				"jishen": "", // 吉神
				"yi": "", // 宜
				"xiongshen": "", // 凶神
				"ji": "" // 忌
			}
		},
		onLoad() {
			this.GetCalendar()
		},
		methods: {
			GetCalendar() {
				var _this = this;
				// 获取当前时间
				var time = new Date;
				// 年
				let yy = time.getFullYear();
				// 月
				let mm = time.getMonth()+1;
				// 日
				let dd = time.getDate();
				if(mm<10){
					mm = '0'+mm;
				}
				if(dd<10){
					dd = '0'+dd;
				}
				// 拼接年月日
				var date = yy+'-'+mm+'-'+dd;
				console.log(date)
				uni.request({
					url: 'http://v.juhe.cn/laohuangli/d?date='+date+'&key=d67b93bf03f8543b433fb83e3b61013b',
					// header: {
					// 	'custom-header': 'hello' //自定义请求头信息
					// },
					success: (res) => {
						var data = res.data.result;
						_this.yangli = dd; // 阳历
						_this.yinli = data.yinli; // 阴历
						_this.yi = data.yi; // 宜
						_this.ji = data.ji; // 宜
						_this.chongsha = data.chongsha; // 冲煞
						_this.wuxing = data.wuxing; // 五行
						_this.jishen = data.jishen; // 吉神
						_this.xiongshen = data.xiongshen; // 凶神
						_this.baiji = data.baiji; // 百忌
					}
				});
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.frame-a {
		width: 500rpx;
		height: 100%;
		border: 10rpx solid #ffc107;
		margin-top: 20rpx;
		padding: 10rpx 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.frame-b {
		width: 470rpx;
		height: 100%;
		border: 4rpx solid #ffc107;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.day {
		width: 440rpx;
		height: 250rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 200rpx;
		color: #e93548;
		border-bottom: 1px #dddddd solid;
	}

	.frame {
		width: 440rpx;
		height: 150rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.month {
		height: 115rpx;
		line-height: 115rpx;
		font-size: 50rpx;
	}

	.yiji {
		width: 440rpx;
		height: 100%;
		padding: 10rpx 0;
		display: flex;
		flex-direction: row;
		/* align-items: center; */
		justify-content: space-between;
	}

	.yi {
		width: 210rpx;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		border-right: 1px dashed #dddddd;
	}

	.circle {
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
		border: 1px solid #000;
		text-align: center;
		line-height: 60rpx;
		margin-bottom: 20rpx;
	}

	.ji {
		width: 210rpx;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.yiji-text {
		font-size: 30rpx;
		line-height: 50rpx;
	}

	.various {
		width: 700rpx;
		height: 400rpx;
		margin: 0 auto;
		margin-top: 20rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.among {
		width: 700rpx;
		height: 100%;
		margin: 10rpx 0;
		display: flex;
		flex-direction: row;
		font-size: 30rpx;
	}

	.among-left {
		width: 130rpx;
		text-align: center;
		color: #616161;
		font-weight: bold;
	}

	.among-right {
		color: #8f8f8f;
		margin-left: 20rpx;
	}
</style>
