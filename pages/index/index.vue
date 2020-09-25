<template>
	<view class="content">
		<view class="weather">
			<view class="region">
				{{time}}
			</view>
			<view class="region">
				{{city}}
			</view>
			<view class="situation">
				<view class="temperature">
					<text class="degree">{{realtime.temperature}}°</text>
					<view class="info">
						<text>{{realtime.info}}</text>
						<image src="/static/duoyun.png" mode="" class="mini-img"></image>
					</view>
				</view>
				<view class="wind-wet">
					<view class="wind-wet-class">
						<image src="/static/wind.png" mode="" class="mini-img"></image>
						<text class="wind-wet-color">
							<text>{{realtime.direct}}</text>
							<text>{{realtime.power}}</text>
						</text>
					</view>
					<view class="wind-wet-class">
						<image src="/static/wet.png" mode="" class="mini-img"></image>
						<text class="wind-wet-color">湿度 {{realtime.humidity}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="hours">
			<view class="today">
				<view class="week">
					<text class="today_text">今天</text>
					<text class="today_text">{{ week }}</text>
				</view>
				<view class="temp">
					<text class="today_text">{{ tem2 }}/{{ tem1 }}℃</text> 
				</view>
			</view>
			<view class="realtime">
				<view class="hour" v-for="item in hours">
					<text>{{ item.hours }}</text>
					<text>{{ item.wea }}</text>
					<text>{{ item.tem }}℃</text>
				</view>
			</view>
		</view>
		<view class="content">
			<mckou-weather :weatherData="weatherData" ref="mckouWeather"></mckou-weather>
		</view>
	</view>
</template>

<script>
	import mckouWeather from '@/components/mckou-weather/mckouWeather.vue';
	export default {
		components: {
			mckouWeather
		},
		data() {
			return {
				"city": "", // 城市
				"time": "",
				"tem1": "",
				"tem2": "",
				"week": "",
				"realtime": {
					"temperature": "", // 温度
					"humidity": "", // 湿度
					"info": "", // 天气情况
					"direct": "", // 风向
					"power": "", // 风力
				},
				hours: [],
				weatherData: []
			}
		},
		onLoad() {
			this.GetSevenWeather();
		},
		methods: {
			GetSevenWeather() {
				var _this = this;
				uni.request({
					url: 'https://v0.yiketianqi.com/api?version=v9&appid=49499482&appsecret=o8nquBZN',
					success: (res) => {
						console.log(res.data);
						let data = res.data.data;
						// console.log(data.city)
						let weatherinfo = data[0];
						console.log(weatherinfo)
						_this.city = res.data.city;
						_this.time = weatherinfo.date;
						_this.realtime.temperature = weatherinfo.tem;
						_this.realtime.info = weatherinfo.wea;
						_this.realtime.direct = weatherinfo.win[0];
						_this.realtime.power = weatherinfo.win_speed;
						_this.realtime.humidity = weatherinfo.humidity;
						_this.tem1 = weatherinfo.tem1;
						_this.tem2 = weatherinfo.tem2;
						_this.week = weatherinfo.week;
						_this.weatherData = data;
						_this.$nextTick(() => {
							_this.$refs.mckouWeather.init();
						});
						for(var i = 0;i<weatherinfo.hours.length;i++){
							_this.hours.push(weatherinfo.hours[i]);
						};
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

	.region {
		width: 100%;
		height: 80rpx;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.weather {
		width: 100%;
		height: 560rpx;
		background: linear-gradient(#59b5e6, #FFFFFF);
	}

	.situation {
		width: 100%;
		height: 350rpx;
		margin-top: 50rpx;
		border-bottom: 1rpx #eaeaea solid;
	}

	.temperature {
		width: 100%;
		height: 200rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.degree {
		width: 200rpx;
		height: 200rpx;
		font-size: 120rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.info {
		width: 200rpx;
		height: 200rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-weight: bold;
	}

	.mini-img {
		width: 120rpx;
		height: 90rpx;
	}

	.wind-wet {
		width: 100%;
		height: 150rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.wind-wet-class {
		width: 300rpx;
		height: 150rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.wind-wet-color {
		font-size: 30rpx;
		color: #888888;
	}
	
	.hours{
		width: 92%;
		height: 220rpx;
		margin: 20rpx 0;
		display: flex;
		flex-direction: column;
	}
	
	.today{
		width: 100%;
		height: 60rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	
	.week{
		width: 200rpx;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	
	.temp{
		width: 200rpx;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	
	.today_text{
		font-size: 28rpx;
		font-weight: bold;
	}
	
	.realtime{
		width: 100%;
		height: 160rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		overflow: scroll;
	}
	
	.hour{
		width: 18%;
		height: 150rpx;
		margin-right: 30rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		color: #545454;
		font-size: 24rpx;
	}
</style>
