<template>
	<view class="content">
		<view class="beij">
			<image src="/static/beijing.jpg" mode=""></image>
		</view>
		<view class="date">
			<view class="today">
				<text>今日运势</text>
				<text>8.27</text>
			</view>
			<view class="other">
				<text>明</text>
			</view>
			<view class="other">
				<text>周</text>
			</view>
			<view class="other">
				<text>月</text>
			</view>
			<view class="other">
				<text>2020</text>
			</view>
		</view>
		<view class="details">
			<view class="constellation">
				<text class="which">白羊座</text>
				<text>3.21-4.19</text>
				<view class="change">
					<text>切换星座 ></text>
					<!-- <select>
						<option>切换星座</option>
						<option>白羊座</option>
						<option>双子座</option>
					</select> -->
				</view>
			</view>
			<view class="fraction">
				<view class="whole">
					<text>整体运势</text>
					<view class="fornum">
						89
					</view>
				</view>
				<view class="whole">
					<text>爱情运势</text>
					<view class="fornum">
						89
					</view>
				</view>
				<view class="whole">
					<text>事业运势</text>
					<view class="fornum">
						89
					</view>
				</view>
				<view class="whole">
					<text>财富运势</text>
					<view class="fornum">
						89
					</view>
				</view>
			</view>
		</view>
		<view class="lucky">
			<view class="matter">
				<text>幸运数字</text>
				<text>8</text>
			</view>
			<view class="matter">
				<text>幸运颜色</text>
				<text>铂金灰</text>
			</view>
			<view class="matter">
				<text>速配星座</text>
				<text>水瓶座</text>
			</view>
		</view>
		<view class="summary">
			<view class="sum-tit">
				<view class="tit">
					整体运
				</view>
			</view>
			<view class="sum-con">
				有些思考的小漩涡，可能让你忽然的放空，生活中许多的细节让你感触良多，五味杂陈，常常有时候就慢动作定格，想法在某处冻结停留，陷入一阵自我对话的沉思之中，这个时候你不喜欢被打扰或询问，也不想让某些想法曝光，个性变得有些隐晦。
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
	.beij{
		width: 100%;
		height: 100%;
	}
	
	.beij>image{
		width: 100%;
		height: 400rpx;
	}
	
	.date{
		width: 100%;
		height: 200rpx;
		position: relative;
		top: -100rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	
	.today{
		width: 180rpx;
		height: 180rpx;
		background: linear-gradient(#ff7686,#fe69ab);
		border-radius: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: #FFFFFF;
		font-size: 30rpx;
	}
	
	.other{
		width: 120rpx;
		height: 120rpx;
		background-color: #ad93fe;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #FFFFFF;
		font-size: 30rpx;
	}
	
	.details{
		width: 100%;
		height: 300rpx;
		margin-top: -40px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		font-size: 30rpx;
	}
	.constellation{
		width: 30%;
		height: 400rpx;
		display: flex;
		flex-direction: column;	
		align-items: center;
		justify-content: center;
		color: #7b2c87;
	}
	
	.which{
		font-size: 50rpx;
		font-weight: 600;
		margin-bottom: 20rpx;
	}
	
	.change{
		width: 170rpx;
		height: 50rpx;
		border: 1px solid #ff7686;
		border-radius: 40rpx;
		display: flex;
		flex-direction: column;	
		align-items: center;
		justify-content: center;
		color: #ff7686;
		margin-top: 20rpx;
	}
	
	.fraction{
		width: 60%;
		height: 300rpx;
		display: flex;
		flex-direction: column;	
		justify-content: space-between;
	}
	
	.whole{
		display: flex;
		flex-direction: row;	
	}
	
	.fornum{
		margin-left: 20rpx;
	}
	
	.lucky{
		width: 100%;
		height: 150rpx;
		font-size: 30rpx;
		font-weight: bold;
		display: flex;
		flex-direction: row;	
		align-items: center;
		justify-content: center;
	}
	
	.matter{
		width: 220rpx;
		height: 150rpx;
		display: flex;
		flex-direction: column;	
		align-items: center;
		justify-content: center;
	}
	
	.summary{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	
	.sum-tit{
		border-bottom: 1px solid #ad93fe;
	}
	
	.tit{
		width: 200rpx;
		height: 60rpx;
		background-color: #ad93fe;
		color: #FFFFFF;
		text-align: center;
		line-height: 60rpx;
		border-radius: 0 80rpx 0 0;
	}
	
	.sum-con{
		width: 100%;
		height: 200rpx;
		margin-left: 10rpx;
		font-size: 28rpx;
		margin-top: 10rpx;
	}
</style>
