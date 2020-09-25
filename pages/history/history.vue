<template>
	<view class="content">
		<view class="date">
			{{yy}}年{{mm}}月{{dd}}日
		</view>
		<view class="event" v-for="item in result">
			<view class="event-img" v-if="item.pic != ''">
				<image :src="item.pic" mode=""></image>
			</view>
			<view class="event-img" v-else>
				暂无图片
			</view>
			<view class="situation">
				<view class="time">
					{{item.year}}年{{item.month}}月{{item.day}}日（{{item.lunar}}）
				</view>
				<view class="title">
					{{item.title}}
				</view>
				<view class="des">
					{{item.des}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				"yy": "",
				"mm": "",
				"dd": "",
				"result": []
			}
		},
		onLoad() {
			this.GetHistory()
		},
		methods: {
			GetHistory() {
				var _this = this;
				// 获取当前时间
				var time = new Date;
				let yy = time.getFullYear();
				// 月
				let mm = time.getMonth() + 1;
				// 日
				let dd = time.getDate();
				_this.yy = yy;
				_this.mm = mm;
				_this.dd = dd;
				uni.request({
					url: 'http://api.juheapi.com/japi/toh?v=1.0&month=' + mm + '&day=' + dd +
						'&key=88065bee4257a859ae0cd4428c25b580', //接口地址。
					success: (res) => {
						console.log(res.data);
						for (var i = 0; i < res.data.result.length; i++) {
							_this.result.push(res.data.result[i])
						}
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

	.date {
		width: 100%;
		height: 100rpx;
		background-color: #FFFFFF;
		text-align: center;
		line-height: 100rpx;
		color: #de2854;
	}

	.event {
		width: 730rpx;
		height: 300rpx;
		margin-bottom: 30rpx;
		border-radius: 20rpx;
		box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.2);
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.event-img {
		width: 200rpx;
		height: 250rpx;
		text-align: center;
		line-height: 250rpx;
		color: #616161;
	}

	.event-img image {
		width: 200rpx;
		height: 250rpx;
		margin-left: 10rpx;
	}

	.situation {
		width: 500rpx;
		height: 250rpx;
		margin-right: 10rpx;
	}

	.time {
		color: #333333;
		font-size: 30rpx;
	}

	.title {
		color: #000000;
		font-size: 32rpx;
		font-weight: bold;
		margin-top: 10rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}

	.des {
		color: #333333;
		font-size: 30rpx;
		margin-top: 10rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
	}
</style>
