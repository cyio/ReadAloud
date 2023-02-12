<template>
  <div class="home">
    <p style="font-size: 20px; font-weight: bold">大声朗读</p>
    <p style="margin-bottom: 30px; color: #999">
      基于微软edge浏览器大声朗读功能开发的pwa应用
    </p>
    <a-textarea
      placeholder="输入需要朗读的文字"
      :value="inputText"
      @input="onInput"
      class="a-textarea"
      :rows="10"
    >
    </a-textarea>

    <div class="controls">
      <a-button type="primary" @click="play">播放</a-button>
      <a-button type="primary" @click="pause" v-if="status !== '暂停'">暂停</a-button>
      <a-button type="primary" @click="resume" v-else>恢复</a-button>
      <div class="status">
        播放状态：
        <a-spin v-if="status === '播放中'" />
        <span v-else>{{status}}</span>
      </div>
    </div>

    <div class="row-voice" v-if="0">
      <p class="text-lf pb5 fweight-bold letter2 pl5 mt30">选择语音</p>
      <a-row type="flex" justify="space-between" align="middle">
        <a-col :span="15">
          <a-select
            @select="onSelect"
            :default-value="defaultSelect"
            style="width: 100%"
            >
              <a-select-option v-for="(item, index) in voices" :key="index" :value="index">
                {{ item.name }}
              </a-select-option>
          </a-select>
        </a-col>
        <!-- <a-col :span="3">
          <a-switch default-checked checked-children="录" un-checked-children="" @change="onChange" />
        </a-col> -->
      </a-row>
    </div>

    <div class="row-rate">
      <div class="text-lf">
        <span class="fweight-bold letter2 pl5">播放速度(rate)</span>
      </div>
      <a-select
        @select="onSelectRateIndex"
        :default-value="defaultselectRateIndex"
        >
          <a-select-option v-for="(item, index) in rates" :key="index">
            {{ item }}
          </a-select-option>
      </a-select>
    </div>

    <a-row type="flex" justify="space-between" align="middle" class="pb5 pt20" v-if="0">
      <a-col :span="24">
        <div class="text-lf">
          <span class="text-lf fweight-bold letter2 pl5">音调调整(pitch)</span>
          <span class="letter2 pl10" style="color:#999;font-size:12px">当前{{pitchValue}}</span>
        </div>
        
        <div style="padding-left: 10px" touch-action="none">
          <a-slider
            :marks="pitchMarks"
            :step="0.1"
            :min="minPitch"
            :max="maxPitch"
            @change="onPitchSlider"
            :included="false"
            :default-value="pitchValue"
          />
        </div>
      </a-col>
    </a-row>

    <a-row type="flex" justify="space-between" align="middle" class="pb10" v-if="0">
      <a-col class="flex-wrap">
        <p class="text-lf fweight-bold letter2 pl5 pb10" style="margin-right:10px;">开启录音(record)</p>
        <a-switch :checked="recordStatus" @change="onChange" />
      </a-col>
    </a-row>
    <!-- <p class="link" @click="push">Github中查看</p> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import {isContainChinese} from '@/utils/';

const synth = window.speechSynthesis;
window.synth = synth
let utterThis;

export default {
  name: "Home",
  components: {
  },
  data() {
    return {
      voices: [],
      value: "",
      value1: 20,
      disabled: false,
      defaultSelect: '选择最佳语音',
      inputText: '这是示例文本 hello world',
      selectIdx: 0,

      // 音调高低
      pitchValue: 1,
      minPitch: 0,
      maxPitch: 2,
      pitchMarks: {
        0: "",
        2: "",
      },
      recordStatus: false,
      isPaused: true,
      status: '',

      // rates
      rates: [0.75, 1, 1.25, 1.5, 2],
      selectRateIndex: 1,
      defaultselectRateIndex: 1
    };
  },
  created() {},
  beforeMount() {},
  mounted() {
    this.populateVoiceList();
    this.checkBrowser();
  },
  updated() {},
  beforeDestroy() {},
  methods: {
    // 获取语言支持
    populateVoiceList() {
      if (typeof speechSynthesis === "undefined") {
        return;
      }
      new Promise((resolve) => {
        setTimeout(() => {
          let voices = speechSynthesis.getVoices();
          // console.log(voices)
          
          resolve(voices);
        }, 0);
      }).then((voices) => {
        this.voices = voices
          .filter(i => {
            // console.log(i)
            return /Jenny|Xiaoxiao/.test(i.name)
            // return i.lang === 'zh-CN' || i.lang === 'en-US' && i.displayName.includes('Natural')
          });
      });
    },
    test(){
      synth.resume()
      this.$message.success('继续播放');
    },
    onClick() {
      if (!this.inputText && this.inputText.length == 0) {
        return;
      }
      this.speak();
      this.isPaused = false;
    },
    handleMenuClick(e) {
      console.log('click', e);
    },
    onPause() {
      synth.pause();
      this.isPaused = true;
    },
    onInput(e) {
      this.inputText = e.target.value;
    },
    onSelect(index) {
      this.selectIdx = index;
    },
    onSelectRateIndex(index) {
      this.selectRateIndex = index;
    },
    play() {
      this.stop()
      const isZh = isContainChinese(this.inputText);
      this.selectIdx = isZh ? 0 : 1

      let { 
        voices, 
        selectIdx, 
        inputText, 
        selectRateIndex,
        pitchValue 
      } = this;
      utterThis = new SpeechSynthesisUtterance(inputText);
      utterThis.voice = voices[selectIdx]; // 设置说话的声音
      utterThis.pitch = pitchValue; // 设置音调高低
      utterThis.rate = this.rates[selectRateIndex]; // 设置说话的速度
      console.log(utterThis)
      synth.speak(utterThis);
      this.handleVoiceEvent(utterThis)
    },
    handleVoiceEvent(utterThis) {
      utterThis.onstart = () => {
        this.status = "播放中";
      };
      utterThis.onpause = () => {
        this.status = "暂停";
      };
      utterThis.onresume = () => {
        this.status = "播放中";
      };
      utterThis.onend = () => {
        this.status = "播放结束";
      };
      utterThis.onerror = (error) => {
        console.error('Synthesis 实例异常', error)
      };
    },
    pause() {
      synth.pause();
    },
    resume() {
      synth.resume();
    },
    stop() {
      synth.cancel();
    },
    onChange(value) {
      console.log("change: ", value);
      if(!this.recordStatus){
        // 请求录音授权
        this.initRecorder()
      }
      this.recordStatus = !this.recordStatus
    },
    onAfterChange(value) {
      console.log("afterChange: ", value);
    },
    // 改变音调高低
    onPitchSlider(e) {
      this.pitchValue = e
    },
    checkBrowser() {
      // console.log('userAgent: '+window.navigator.userAgent)
    },
    // 新建 MediaRecorder对象
    initRecorder() {
      const _this = this
      var constraints = window.constraints = {
        audio: true,
        video: false
      };
      navigator.mediaDevices.getUserMedia(constraints)
      .then(function(stream) {
        /* use the stream */
        _this.recorderFn(stream)
        console.log(stream)

      })
      .catch(function(err) {
        console.log(err)
        _this.recordStatus = false
        _this.$message.warning('🙅🏻‍♀️ 拒绝录音权限')
        /* handle the error */
      });
    },
    // 创建录音实例
    recorderFn(stream) {
      let mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      console.log('录音中...')

    },
  },
};
</script>

<style scoped>
.a-textarea {
  box-shadow: inset 0px 1px 4px #ececec;
  color: #000;
}
.ant-slider-handle {
  background-color: #999 !important;
  border: solid 4px #333 !important;
}
.link{
  font-size: 14px;
  margin-top: 140px;
  color: #999;
  letter-spacing: 1px;
}
.controls {
  margin-top: 30px;
  display: flex;
}
.controls .ant-btn {
  margin-right: 30px;
}
.row-rate {
  margin-top: 25px;
  display: flex;
  align-items: center;
}
.row-rate .ant-select {
  width: 70px;
  margin-left: 15px;
}
.status {
  display: flex;
  align-items: center;
}
.a-textarea {
  height: 40vh;
}
</style>